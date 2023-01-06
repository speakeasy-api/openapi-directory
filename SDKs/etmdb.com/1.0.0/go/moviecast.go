package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type MovieCast struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMovieCast(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MovieCast {
	return &MovieCast{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// MovieCastSearchRead - Return movie cast search result
// Return movie cast search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details on how movie casts are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *MovieCast) MovieCastSearchRead(ctx context.Context, request operations.MovieCastSearchReadRequest) (*operations.MovieCastSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie-cast/search/{movie_title}", request.PathParams)

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

	res := &operations.MovieCastSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// MovieCastSearchallRead - Return movie cast search result
// Return movie cast search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
// * character name
//
// For more details on how movie casts are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *MovieCast) MovieCastSearchallRead(ctx context.Context, request operations.MovieCastSearchallReadRequest) (*operations.MovieCastSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie-cast/searchall/{param}", request.PathParams)

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

	res := &operations.MovieCastSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
