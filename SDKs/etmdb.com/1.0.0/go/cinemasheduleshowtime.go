package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type CinemaSheduleShowtime struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCinemaSheduleShowtime(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CinemaSheduleShowtime {
	return &CinemaSheduleShowtime{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CinemaSheduleShowtimeSearchRead - Return cinema schedule and showtime search result
// Return cinema schedule and showtime search result
//
// ### Response Class (Status 200)
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *CinemaSheduleShowtime) CinemaSheduleShowtimeSearchRead(ctx context.Context, request operations.CinemaSheduleShowtimeSearchReadRequest) (*operations.CinemaSheduleShowtimeSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-shedule-showtime/search/{movie_title}", request.PathParams)

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

	res := &operations.CinemaSheduleShowtimeSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaSheduleShowtimeSearchallRead - Return cinema schedule and showtime search result
// Return cinema schedule and showtime search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * movie title
// * cinema name
// * cinema hall name
// * showtime starting date
// * showtime ending date or
// * cinema technology
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *CinemaSheduleShowtime) CinemaSheduleShowtimeSearchallRead(ctx context.Context, request operations.CinemaSheduleShowtimeSearchallReadRequest) (*operations.CinemaSheduleShowtimeSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-shedule-showtime/searchall/{param}", request.PathParams)

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

	res := &operations.CinemaSheduleShowtimeSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
