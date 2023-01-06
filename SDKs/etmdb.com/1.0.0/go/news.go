package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type News struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewNews(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *News {
	return &News{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// NewsSearchRead - Return news or article search result
// Return news or article search result
//
// ### Response Class (Status 200)
//
// * __{title}__: Used as a key word to search news and articles,
//
// For more details on how news & articles are listed [see here][ref].
// [ref]: https://etmdb.com/en/news-list/-updated_date
func (s *News) NewsSearchRead(ctx context.Context, request operations.NewsSearchReadRequest) (*operations.NewsSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/news/search/{title}", request.PathParams)

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

	res := &operations.NewsSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
