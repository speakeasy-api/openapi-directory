package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Watchlist struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewWatchlist(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Watchlist {
	return &Watchlist{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// WatchlistSearchRead - Return watchlist search result
// Return watchlist search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movies on watchlist
// * You can use both Amharic or English charset/font to search
//
// For more details on how watchlist are listed [see here][ref].
// [ref]: https://etmdb.com/en/movies/watchlist/id
func (s *Watchlist) WatchlistSearchRead(ctx context.Context, request operations.WatchlistSearchReadRequest) (*operations.WatchlistSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/watchlist/search/{movie_title}", request.PathParams)

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

	res := &operations.WatchlistSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WatchlistSearchallRead - Return watchlist search result
// Return watchlist search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * artist first name
// * artist last name
// * artist username
// * movie title or
//
// For more details on how watchlist are listed [see here][ref].
// [ref]: https://etmdb.com/en/movies/watchlist/id
func (s *Watchlist) WatchlistSearchallRead(ctx context.Context, request operations.WatchlistSearchallReadRequest) (*operations.WatchlistSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/watchlist/searchall/{param}", request.PathParams)

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

	res := &operations.WatchlistSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
