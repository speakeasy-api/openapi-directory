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

type OemIncentiveSearch struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOemIncentiveSearch(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OemIncentiveSearch {
	return &OemIncentiveSearch{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSearchCarIncentiveOem - Gets oem incentive listings for the given search criteria
// This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.
//
//	The search API facilitates the following use cases -
//
// 1. Search Cars around a given geo-point within a given radius
// 2. Search cars for a specific year / make / model or combination of these
// 3. Search cars matching multiple year, make, model combinatins in the same search request
// 4. Filter results by most car specification attributes
// 5. Search for similar cars by VIN or Taxonomy VIN
// 6. Filter cars within a given price / miles / days on market (dom) range
// 7. Specify a sort order for the results on price / miles / dom / listed date
// 8. Search cars for a given City / State combination
// 9. Get Facets to build the search drill downs
// 10. Get Market averages for price/miles/dom for your search
func (s *OemIncentiveSearch) GetSearchCarIncentiveOem(ctx context.Context, request operations.GetSearchCarIncentiveOemRequest) (*operations.GetSearchCarIncentiveOemResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/car/incentive/oem"

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

	res := &operations.GetSearchCarIncentiveOemResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
