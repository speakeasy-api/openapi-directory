package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Filmography struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFilmography(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Filmography {
	return &Filmography{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// FilmographySearchRead - Return filmography search result
// Return filmography search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies
// * You can use both Amharic or English charset/font to search
//
// For more details on how filmographies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *Filmography) FilmographySearchRead(ctx context.Context, request operations.FilmographySearchReadRequest) (*operations.FilmographySearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography/search/{movie_title}", request.PathParams)

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

	res := &operations.FilmographySearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// FilmographySearchallRead - Return filmography search result
// Return filmography search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
// * filmography description (such as director, actor, producer, etc)
//
// For more details on how filmographies are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *Filmography) FilmographySearchallRead(ctx context.Context, request operations.FilmographySearchallReadRequest) (*operations.FilmographySearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography/searchall/{param}", request.PathParams)

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

	res := &operations.FilmographySearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
