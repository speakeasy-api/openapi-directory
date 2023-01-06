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

type SupplyData struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSupplyData(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SupplyData {
	return &SupplyData{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DaysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
// Average, median, standard deviation, population variance, and whole region average of the
// days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
// a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
// The average field may differ from the whole region average, especially when dealers are out of
// a given model.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SupplyData) DaysSupplyDaysSupplyGet(ctx context.Context, request operations.DaysSupplyDaysSupplyGetRequest) (*operations.DaysSupplyDaysSupplyGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/daysSupply"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DaysSupplyDaysSupplyGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// DaysToSellDaysToSellGet - Days a vehicle takes to sell
// Average, median, standard deviation, population variance, and whole region average of the
// number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
// a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
// The average field may differ from the whole region average.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SupplyData) DaysToSellDaysToSellGet(ctx context.Context, request operations.DaysToSellDaysToSellGetRequest) (*operations.DaysToSellDaysToSellGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/daysToSell"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DaysToSellDaysToSellGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}
