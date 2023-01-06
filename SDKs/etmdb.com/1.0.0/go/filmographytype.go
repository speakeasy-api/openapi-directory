package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type FilmographyType struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFilmographyType(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FilmographyType {
	return &FilmographyType{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// FilmographyTypeSearchRead - Return filmography type search result
// Return filmography type search result
//
// ### Response Class (Status 200)
//
// * __{filmography_description}__: Used as a key word to search filmography types
//
// For more details on how filmography types are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *FilmographyType) FilmographyTypeSearchRead(ctx context.Context, request operations.FilmographyTypeSearchReadRequest) (*operations.FilmographyTypeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/filmography-type/search/{filmography_description}", request.PathParams)

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

	res := &operations.FilmographyTypeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
