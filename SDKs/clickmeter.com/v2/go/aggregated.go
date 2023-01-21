package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Aggregated struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAggregated(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Aggregated {
	return &Aggregated{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AggregatedGetConversionsSummary - Retrieve statistics about a subset of conversions for a timeframe with conversions data
func (s *Aggregated) AggregatedGetConversionsSummary(ctx context.Context, request operations.AggregatedGetConversionsSummaryRequest) (*operations.AggregatedGetConversionsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aggregated/summary/conversions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AggregatedGetConversionsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// AggregatedGetDatapointsSummary - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
func (s *Aggregated) AggregatedGetDatapointsSummary(ctx context.Context, request operations.AggregatedGetDatapointsSummaryRequest) (*operations.AggregatedGetDatapointsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aggregated/summary/datapoints"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AggregatedGetDatapointsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// AggregatedGetGroupsSummary - Retrieve statistics about a subset of groups for a timeframe with groups data
func (s *Aggregated) AggregatedGetGroupsSummary(ctx context.Context, request operations.AggregatedGetGroupsSummaryRequest) (*operations.AggregatedGetGroupsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aggregated/summary/groups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AggregatedGetGroupsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APICoreDtoAggregatedAggregatedSummaryResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedSummaryResult = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// AggregatedGetStatisticsList - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
func (s *Aggregated) AggregatedGetStatisticsList(ctx context.Context, request operations.AggregatedGetStatisticsListRequest) (*operations.AggregatedGetStatisticsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aggregated/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AggregatedGetStatisticsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// AggregatedGetStatisticsSingle - Retrieve statistics about this customer for a timeframe
func (s *Aggregated) AggregatedGetStatisticsSingle(ctx context.Context, request operations.AggregatedGetStatisticsSingleRequest) (*operations.AggregatedGetStatisticsSingleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aggregated"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AggregatedGetStatisticsSingleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APICoreDtoAggregatedAggregatedResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.APICoreDtoAggregatedAggregatedResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APICoreDtoAggregatedAggregatedResult = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
