# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apigee.net/marketcheck-cars/2.01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthorizeEndpoint: shared.SchemeAuthorizeEndpoint{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.CrmCheckRequest{
        PathParams: operations.CrmCheckPathParams{
            Vin: "corrupti",
        },
        QueryParams: operations.CrmCheckQueryParams{
            APIKey: "provident",
            SaleDate: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.CRMCleanseAPI.CrmCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CRMResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### CRMCleanseAPI

* `CrmCheck` - CRM check of a particular vin

### CarCachedImage

* `GetCachedImage` - Fetch cached image

### CarSearch

* `AutoComplete` - API for auto-completion of inputs
* `GetListing` - Listing by id
* `GetCarDealerInventoryActive` - Get dealers active inventory
* `GetListingCarAuctionID` - Listing by id
* `GetListingCarAuctionIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarAuctionIDMedia` - Listing media by id
* `GetListingCarFsboID` - Listing by id
* `GetListingCarFsboIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarFsboIDMedia` - Listing media by id
* `GetListingCarUkID` - Listing by id
* `GetListingCarUkIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarUkIDMedia` - Listing media by id
* `GetListingCarIDExtra` - Long text Listings attributes for Listing with the given id
* `GetListingCarIDMedia` - Listing media by id
* `GetSearchCarActive` - Gets active car listings for the given search criteria
* `GetSearchCarAuctionActive` - Gets active auction car listings for the given search criteria
* `GetSearchCarFsboActive` - Gets active private party car listings for the given search criteria
* `GetSearchCarRecents` - Gets Recent car listings for the given search criteria
* `GetSearchCarUkRecents` - Gets Recent UK car listings for the given search criteria
* `Search` - Gets active car listings in UK for the given search criteria

### CarsHistoryAPI

* `GetCarHistory` - Get a cars online listing history
* `GetHistoryCarUkVrm` - Get a cars online listing history

### CarsMarketAPI

* `FareValue` - Predict fare value of car for UK based on YMMT & miles
* `GetDailyStats` - Price, Miles and Days on Market stats
* `GetMDS` - Market Days Supply
* `GetPopularCars` - Get make model wise top 50 popular cars on national, state, city level
* `GetSalesCount` - Get sales count by make, model, year, trim or taxonomy vin
* `PredictCarPrice` - Predict car price based on it's specifications
* `PredictUkCarPrice` - Predict car price for UK based on it's specifications

### DealerAPI

* `DealerSearch` - Find car dealers around
* `GetDealer` - Dealer by id
* `GetDealerCarUkID` - Dealer by id
* `GetDealerHeavyEquipmentID` - Dealer by id
* `GetDealerMotorcycleID` - Dealer by id
* `GetDealerRvID` - Dealer by id
* `GetDealersCarUk` - Find car dealers around
* `GetDealersHeavyEquipment` - Find car dealers around
* `GetDealersMotorcycle` - Find car dealers around
* `GetDealersRv` - Find car dealers around

### HeavyEquipmentSearch

* `GetListingHeavyEquipmentID` - Heavy equipment listing by id
* `GetListingHeavyEquipmentIDExtra` - Long text Heavy equipment Listings attributes for Listing with the given id
* `GetListingHeavyEquipmentIDMedia` - Listing media by id
* `GetSearchHeavyEquipmentActive` - Gets active heavy equipment listings for the given search criteria
* `GetSearchHeavyEquipmentAutoComplete` - API for auto-completion of inputs

### MotorcycleSearch

* `GetListingMotorcycleID` - Motorcycle listing by id
* `GetListingMotorcycleIDExtra` - Long text Motorcycle Listings attributes for Listing with the given id
* `GetListingMotorcycleIDMedia` - Motorcycle listing media by id
* `GetSearchMotorcycleActive` - Gets active motorcycle listings for the given search criteria
* `GetSearchMotorcycleAutoComplete` - API for auto-completion of inputs

### OEMIncentiveSearch

* `OemSearch` - Gets oem incentive listings for the given search criteria

### RVSearch

* `GetListingRvUkID` - RV listing by id
* `GetListingRvUkIDExtra` - Long text RV Listings attributes for Listing with the given id
* `GetListingRvUkIDMedia` - Listing media by id
* `GetListingRvID` - RV listing by id
* `GetListingRvIDExtra` - Long text RV Listings attributes for Listing with the given id
* `GetListingRvIDMedia` - Listing media by id
* `GetSearchRvActive` - Gets active RV listings for the given search criteria
* `GetSearchRvAutoComplete` - API for auto-completion of inputs
* `GetSearchRvUkActive` - Gets active RV listings for the given search criteria

### RankCarListings

* `RankCar` - Compute relative rank for car listings.
* `SearchAndRankCar` - Compute relative rank for car listings.

### RecallSearch

* `GetRecallHistory` - Recall info by vin

### VINDecoderAPI

* `Decode` - VIN Decoder
* `DecodeViaEPI` - EPI VIN Decoder
* `DecodeViaNeoVIN` - NeoVIN Decoder
* `GetTaxonomyTerms` - API for getting terms from taxonomy
* `GetSpecsCarAutoComplete` - API for auto-completion of inputs based on taxonomy

### ClientFilters

* `Get` - get client filters
* `Set` - set client filters
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
