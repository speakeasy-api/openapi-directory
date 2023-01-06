package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type CinemaDetail struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCinemaDetail(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CinemaDetail {
	return &CinemaDetail{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CinemaDetailSearchRead - Return cinema details search result
// Return cinema details search result
//
// ### Response Class (Status 200)
//
// * __{cinema_name}__: Used as a key word to search cinemas,
//
// For more details on how cinemas are listed [see here][ref].
// [ref]: https://etmdb.com/en/cinema-list/-updated_date
func (s *CinemaDetail) CinemaDetailSearchRead(ctx context.Context, request operations.CinemaDetailSearchReadRequest) (*operations.CinemaDetailSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-detail/search/{cinema_name}", request.PathParams)

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

	res := &operations.CinemaDetailSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
