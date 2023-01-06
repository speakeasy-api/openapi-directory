package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type CompanyCredits struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCompanyCredits(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CompanyCredits {
	return &CompanyCredits{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CompanyCreditsSearchRead - Return company credits search result
// Return company credits search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search company credits for the movie
// * You can use both Amharic or English charset/font to search
//
// For more details on how company credits are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *CompanyCredits) CompanyCreditsSearchRead(ctx context.Context, request operations.CompanyCreditsSearchReadRequest) (*operations.CompanyCreditsSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/company-credits/search/{movie_title}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompanyCreditsSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CompanyCreditsSearchallRead - Return company credits search result
// Return company credits search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * company name
// * movie title or
// * company credit description (such as production, cinematography, etc)
//
// For more details on how company credits are listed [see here][ref].
// [ref]: https://etmdb.com/en/company-list/company_name
func (s *CompanyCredits) CompanyCreditsSearchallRead(ctx context.Context, request operations.CompanyCreditsSearchallReadRequest) (*operations.CompanyCreditsSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/company-credits/searchall/{param}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CompanyCreditsSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
