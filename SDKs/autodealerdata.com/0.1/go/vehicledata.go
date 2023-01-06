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

type VehicleData struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVehicleData(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *VehicleData {
	return &VehicleData{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
// Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
// price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.
//
// If your use case involves checking if a vehicle has appeared on the open market on or after a given date see
// the /vehicleSeen endpoint.
func (s *VehicleData) GetHistory2VehicleHistoryGet(ctx context.Context, request operations.GetHistory2VehicleHistoryGetRequest) (*operations.GetHistory2VehicleHistoryGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vehicleHistory"

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

	res := &operations.GetHistory2VehicleHistoryGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HistoryResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HistoryResp = out
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

// GetListings2Listings2Get - Flexible Listing Search
// Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
// The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
//
// Dealer selection uses the most restictive criteria supplied.
//
// Listing selection logically ANDs all options given.
//
// Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it
// as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
// and look back by the supplied daysBack value.
//
// Maximum time interval is 45 days.
//
// ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
// If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
// Setting extendedSearch to true will result in a slower response time.
//
// For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
//
// If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return
// used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
// because the request matched no listings.
//
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) GetListings2Listings2Get(ctx context.Context, request operations.GetListings2Listings2GetRequest) (*operations.GetListings2Listings2GetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listings2"

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

	res := &operations.GetListings2Listings2GetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// GetListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.
// Maximum time interval between startDate and endDate is 45 days.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) GetListingsByDealerListingsByDateGet(ctx context.Context, request operations.GetListingsByDealerListingsByDateGetRequest) (*operations.GetListingsByDealerListingsByDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByDate"

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

	res := &operations.GetListingsByDealerListingsByDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// GetListingsByDealerListingsGet - Listings by Dealer ID
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) GetListingsByDealerListingsGet(ctx context.Context, request operations.GetListingsByDealerListingsGetRequest) (*operations.GetListingsByDealerListingsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listings"

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

	res := &operations.GetListingsByDealerListingsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// GetListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
// See /listings2 endpoint for more flexible listing search.
// Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) GetListingsByRegionAndDateListingsByRegionAndDateGet(ctx context.Context, request operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest) (*operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByRegionAndDate"

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

	res := &operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// GetListingsByRegionListingsByRegionGet - Listings by Region
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days by region.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) GetListingsByRegionListingsByRegionGet(ctx context.Context, request operations.GetListingsByRegionListingsByRegionGetRequest) (*operations.GetListingsByRegionListingsByRegionGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByRegion"

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

	res := &operations.GetListingsByRegionListingsByRegionGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// GetMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
// Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
// Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
func (s *VehicleData) GetMarket3SimilarSalePriceGet(ctx context.Context, request operations.GetMarket3SimilarSalePriceGetRequest) (*operations.GetMarket3SimilarSalePriceGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/similarSalePrice"

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

	res := &operations.GetMarket3SimilarSalePriceGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SimilarSalePriceResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SimilarSalePriceResp = out
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

// GetVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
// Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.
// This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
// requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
func (s *VehicleData) GetVehicleSeenVehicleSeenGet(ctx context.Context, request operations.GetVehicleSeenVehicleSeenGetRequest) (*operations.GetVehicleSeenVehicleSeenGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vehicleSeen"

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

	res := &operations.GetVehicleSeenVehicleSeenGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BooleanResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BooleanResp = out
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

// ListingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) ListingsByZipCodeAndDateListingsByZipCodeAndDateGet(ctx context.Context, request operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest) (*operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByZipCodeAndDate"

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

	res := &operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// ListingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *VehicleData) ListingsByZipCodeListingsByZipCodeGet(ctx context.Context, request operations.ListingsByZipCodeListingsByZipCodeGetRequest) (*operations.ListingsByZipCodeListingsByZipCodeGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByZipCode"

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

	res := &operations.ListingsByZipCodeListingsByZipCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
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

// VinDecodeVinDecodeGet - Vin decoder and Recall Info
// Decodes the provided North American vin and provides recall information if available.
// We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
// If passEmpty (default False) is True we will also include the empty fields in the response json.
// If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
func (s *VehicleData) VinDecodeVinDecodeGet(ctx context.Context, request operations.VinDecodeVinDecodeGetRequest) (*operations.VinDecodeVinDecodeGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vinDecode"

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

	res := &operations.VinDecodeVinDecodeGetResponse{
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
