package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type GenreType struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewGenreType(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *GenreType {
	return &GenreType{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GenreTypeSearchRead - Return genre type search result
// Return genre type search result
//
// ### Response Class (Status 200)
//
// * __{genre_description}__: Used as a key word to search genre types
//
// For more details on how genre types are listed [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *GenreType) GenreTypeSearchRead(ctx context.Context, request operations.GenreTypeSearchReadRequest) (*operations.GenreTypeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/genre-type/search/{genre_description}", request.PathParams)

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

	res := &operations.GenreTypeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
