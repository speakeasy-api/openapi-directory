# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetVehicleSeenVehicleSeenGetRequest{
        QueryParams: operations.GetVehicleSeenVehicleSeenGetQueryParams{
            AfterDate: "1973-06-08",
            Jwt: "praesentium",
            Vin: "enim",
        },
    }
    
    res, err := s.ApplicationAcceleration.GetVehicleSeenVehicleSeenGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BooleanResp != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Application Acceleration

* `GetVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.

### Authentication

* `GetSubUserKeysGetSubUserKeysGet` - Get all Sub User Keys associated with your account.
* `MakeSubUserKeyMakeSubUserKeyPost` - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
* `MakeTokenGetTokenGet` - Get a JWT from your API credentials
* `MakeTokenGetTokenPost` - Get a JWT from your API credentials
* `RevokeSubUserKeyRevokeSubUserKeyPut` - Revoke a Sub User Key associated with your account.

### Dealership Data

* `GetDealersGetDealersByIDGet` - Premium. Dealers by ID
* `GetDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `GetDealersGetDealersGet` - Premium. Dealers in a zip code.

### Premium

* `GetDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `GetDealersGetDealersByIDGet` - Premium. Dealers by ID
* `GetDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `GetDealersGetDealersGet` - Premium. Dealers in a zip code.
* `GetHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report
* `GetMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `GetRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region

### Pricing Data

* `GetAvgListPriceListPriceGet` - Stats on ask price of new vehicles
* `GetAvgSalePriceSalePriceGet` - Stats on sale price of new vehicles
* `GetMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `GetModelSaleBucketsSalePriceHistogramGet` - Histogram of sales price of new vehicles by model

### Pro Plan Or Greater

* `DaysSupplyDaysSupplyGet` - Days worth of supply left on dealer lots
* `DaysToSellDaysToSellGet` - Days a vehicle takes to sell
* `GetDealersGetDealersByIDGet` - Premium. Dealers by ID
* `GetDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `GetDealersGetDealersGet` - Premium. Dealers in a zip code.
* `GetHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report

### Sales Data

* `GetDealerSalesRegionDailySalesGet` - Brand sales by region and Day
* `GetDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `GetModelUsedDistModelYearDistGet` - Used market share of model year by model
* `GetRegionBrandMarketShareGetRegionBrandMarketShareGet` - Market share of a brand in region
* `GetRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region
* `GetTopModelsTopModelsGet` - Top models in a given region

### Standard Plan Or Greater

* `GetAvgListPriceListPriceGet` - Stats on ask price of new vehicles
* `GetAvgSalePriceSalePriceGet` - Stats on sale price of new vehicles
* `GetBrandNamesGetBrandsGet` - Get a list of brand names
* `GetMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `GetModelNamesAllGetInactiveModelsGet` - Get a list of model names including discontinued models
* `GetModelNamesGetModelsGet` - Get a list of model names
* `GetModelSaleBucketsSalePriceHistogramGet` - Histogram of sales price of new vehicles by model
* `GetModelUsedDistModelYearDistGet` - Used market share of model year by model
* `GetRegionsGetRegionsGet` - Get a list of region names
* `GetTopModelsTopModelsGet` - Top models in a given region
* `VinDecodeVinDecodeGet` - Vin decoder and Recall Info

### Static Data

* `GetBrandNamesGetBrandsGet` - Get a list of brand names
* `GetModelNamesAllGetInactiveModelsGet` - Get a list of model names including discontinued models
* `GetModelNamesGetModelsGet` - Get a list of model names
* `GetRegionsGetRegionsGet` - Get a list of region names

### Supply Data

* `DaysSupplyDaysSupplyGet` - Days worth of supply left on dealer lots
* `DaysToSellDaysToSellGet` - Days a vehicle takes to sell

### Ultra Plan Or Greater

* `GetDealerSalesRegionDailySalesGet` - Brand sales by region and Day
* `GetDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `GetListings2Listings2Get` - Flexible Listing Search
* `GetListingsByDealerListingsByDateGet` - Listings by Dealer ID and Date
* `GetListingsByDealerListingsGet` - Listings by Dealer ID
* `GetListingsByRegionAndDateListingsByRegionAndDateGet` - Listings by Region and Date
* `GetListingsByRegionListingsByRegionGet` - Listings by Region
* `GetRegionBrandMarketShareGetRegionBrandMarketShareGet` - Market share of a brand in region
* `GetRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region
* `GetVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.
* `ListingsByZipCodeAndDateListingsByZipCodeAndDateGet` - Listings by ZipCode and Date
* `ListingsByZipCodeListingsByZipCodeGet` - Listings by ZipCode

### Vehicle Data

* `GetHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report
* `GetListings2Listings2Get` - Flexible Listing Search
* `GetListingsByDealerListingsByDateGet` - Listings by Dealer ID and Date
* `GetListingsByDealerListingsGet` - Listings by Dealer ID
* `GetListingsByRegionAndDateListingsByRegionAndDateGet` - Listings by Region and Date
* `GetListingsByRegionListingsByRegionGet` - Listings by Region
* `GetMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `GetVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.
* `ListingsByZipCodeAndDateListingsByZipCodeAndDateGet` - Listings by ZipCode and Date
* `ListingsByZipCodeListingsByZipCodeGet` - Listings by ZipCode
* `VinDecodeVinDecodeGet` - Vin decoder and Recall Info

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
