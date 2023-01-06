package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type CinemaSchedule struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCinemaSchedule(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CinemaSchedule {
	return &CinemaSchedule{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CinemaScheduleSearchRead - Return cinema schedule search result
// Return cinema schedule search result
//
// ### Response Class (Status 200)
//
// * __{movie_title}__: Used as a key word to search movie cast
// * You can use both Amharic or English charset/font to search
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *CinemaSchedule) CinemaScheduleSearchRead(ctx context.Context, request operations.CinemaScheduleSearchReadRequest) (*operations.CinemaScheduleSearchReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-schedule/search/{movie_title}", request.PathParams)

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

	res := &operations.CinemaScheduleSearchReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CinemaScheduleSearchallRead - Return cinema schedule search result
// Return cinema schedule search result
//
// ### Response Class (Status 200)
// __{param}__ argument can be
// * movie title
// * cinema name
// * cinema hall name or
// * cinema technology
//
// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
// [ref]: https://etmdb.com/en/movie-list/-updated_date
func (s *CinemaSchedule) CinemaScheduleSearchallRead(ctx context.Context, request operations.CinemaScheduleSearchallReadRequest) (*operations.CinemaScheduleSearchallReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/v1/cinema-schedule/searchall/{param}", request.PathParams)

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

	res := &operations.CinemaScheduleSearchallReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
