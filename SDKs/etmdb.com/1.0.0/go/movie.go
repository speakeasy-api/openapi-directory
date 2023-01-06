package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Movie struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMovie(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Movie {
	return &Movie{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// MovieSearchRead - Return movie search result
// Return movie search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how movies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *Movie) MovieSearchRead(ctx context.Context, request operations.MovieSearchReadRequest) (*operations.MovieSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/movie/search/{movie_title}", request.PathParams)

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

	res := &operations.MovieSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
