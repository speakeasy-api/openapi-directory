package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Media struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMedia(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Media {
	return &Media{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// MediaSearchRead - Return movie media search result
// Return movie media search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search media for movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how media is listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *Media) MediaSearchRead(ctx context.Context, request operations.MediaSearchReadRequest) (*operations.MediaSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/media/search/{movie_title}", request.PathParams)

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

	res := &operations.MediaSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MediaSearchallRead - Return cast media search result
// Return cast media search result
//
// ### Response Class (Status 200)
// __{user}__ argument can be
// * artist first name
// * artist last name
// * artist username
//
// For more details on how cast media is listed [see here][ref].
// [ref]: https://etmdb.com/en/cast-list/-updated_date
func (s *Media) MediaSearchallRead(ctx context.Context, request operations.MediaSearchallReadRequest) (*operations.MediaSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/media/searchall/{user}", request.PathParams)

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

	res := &operations.MediaSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
