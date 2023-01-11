# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetVehicleSeenVehicleSeenGetRequest req = new GetVehicleSeenVehicleSeenGetRequest() {{
                queryParams = new GetVehicleSeenVehicleSeenGetQueryParams() {{
                    afterDate = "2006-05-01";
                    jwt = "culpa";
                    vin = "expedita";
                }};
            }};

            GetVehicleSeenVehicleSeenGetResponse res = sdk.applicationAcceleration.getVehicleSeenVehicleSeenGet(req);

            if (res.booleanResp.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Application Acceleration

* `getVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.

### Authentication

* `getSubUserKeysGetSubUserKeysGet` - Get all Sub User Keys associated with your account.
* `makeSubUserKeyMakeSubUserKeyPost` - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
* `makeTokenGetTokenGet` - Get a JWT from your API credentials
* `makeTokenGetTokenPost` - Get a JWT from your API credentials
* `revokeSubUserKeyRevokeSubUserKeyPut` - Revoke a Sub User Key associated with your account.

### Dealership Data

* `getDealersGetDealersByIdGet` - Premium. Dealers by ID
* `getDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `getDealersGetDealersGet` - Premium. Dealers in a zip code.

### Premium

* `getDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `getDealersGetDealersByIdGet` - Premium. Dealers by ID
* `getDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `getDealersGetDealersGet` - Premium. Dealers in a zip code.
* `getHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report
* `getMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `getRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region

### Pricing Data

* `getAvgListPriceListPriceGet` - Stats on ask price of new vehicles
* `getAvgSalePriceSalePriceGet` - Stats on sale price of new vehicles
* `getMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `getModelSaleBucketsSalePriceHistogramGet` - Histogram of sales price of new vehicles by model

### Pro Plan Or Greater

* `daysSupplyDaysSupplyGet` - Days worth of supply left on dealer lots
* `daysToSellDaysToSellGet` - Days a vehicle takes to sell
* `getDealersGetDealersByIdGet` - Premium. Dealers by ID
* `getDealersGetDealersByRegionGet` - Premium. Dealers in a region.
* `getDealersGetDealersGet` - Premium. Dealers in a zip code.
* `getHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report

### Sales Data

* `getDealerSalesRegionDailySalesGet` - Brand sales by region and Day
* `getDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `getModelUsedDistModelYearDistGet` - Used market share of model year by model
* `getRegionBrandMarketShareGetRegionBrandMarketShareGet` - Market share of a brand in region
* `getRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region
* `getTopModelsTopModelsGet` - Top models in a given region

### Standard Plan Or Greater

* `getAvgListPriceListPriceGet` - Stats on ask price of new vehicles
* `getAvgSalePriceSalePriceGet` - Stats on sale price of new vehicles
* `getBrandNamesGetBrandsGet` - Get a list of brand names
* `getMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `getModelNamesAllGetInactiveModelsGet` - Get a list of model names including discontinued models
* `getModelNamesGetModelsGet` - Get a list of model names
* `getModelSaleBucketsSalePriceHistogramGet` - Histogram of sales price of new vehicles by model
* `getModelUsedDistModelYearDistGet` - Used market share of model year by model
* `getRegionsGetRegionsGet` - Get a list of region names
* `getTopModelsTopModelsGet` - Top models in a given region
* `vinDecodeVinDecodeGet` - Vin decoder and Recall Info

### Static Data

* `getBrandNamesGetBrandsGet` - Get a list of brand names
* `getModelNamesAllGetInactiveModelsGet` - Get a list of model names including discontinued models
* `getModelNamesGetModelsGet` - Get a list of model names
* `getRegionsGetRegionsGet` - Get a list of region names

### Supply Data

* `daysSupplyDaysSupplyGet` - Days worth of supply left on dealer lots
* `daysToSellDaysToSellGet` - Days a vehicle takes to sell

### Ultra Plan Or Greater

* `getDealerSalesRegionDailySalesGet` - Brand sales by region and Day
* `getDealerSalesRegionSalesGet` - Premium. Brand sales by region and month
* `getListings2Listings2Get` - Flexible Listing Search
* `getListingsByDealerListingsByDateGet` - Listings by Dealer ID and Date
* `getListingsByDealerListingsGet` - Listings by Dealer ID
* `getListingsByRegionAndDateListingsByRegionAndDateGet` - Listings by Region and Date
* `getListingsByRegionListingsByRegionGet` - Listings by Region
* `getRegionBrandMarketShareGetRegionBrandMarketShareGet` - Market share of a brand in region
* `getRegionMarketShareGetRegionMarketShareGet` - Market share of all brands in region
* `getVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.
* `listingsByZipCodeAndDateListingsByZipCodeAndDateGet` - Listings by ZipCode and Date
* `listingsByZipCodeListingsByZipCodeGet` - Listings by ZipCode

### Vehicle Data

* `getHistory2VehicleHistoryGet` - Premium. Simple Vehicle History Report
* `getListings2Listings2Get` - Flexible Listing Search
* `getListingsByDealerListingsByDateGet` - Listings by Dealer ID and Date
* `getListingsByDealerListingsGet` - Listings by Dealer ID
* `getListingsByRegionAndDateListingsByRegionAndDateGet` - Listings by Region and Date
* `getListingsByRegionListingsByRegionGet` - Listings by Region
* `getMarket3SimilarSalePriceGet` - Premium. Simple Vehicle Market Report
* `getVehicleSeenVehicleSeenGet` - Checks if a VIN appeared on the market on or after a given date.
* `listingsByZipCodeAndDateListingsByZipCodeAndDateGet` - Listings by ZipCode and Date
* `listingsByZipCodeListingsByZipCodeGet` - Listings by ZipCode
* `vinDecodeVinDecodeGet` - Vin decoder and Recall Info

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
