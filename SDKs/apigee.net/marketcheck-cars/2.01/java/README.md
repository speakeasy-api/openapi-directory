# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CrmCheckRequest;
import org.openapis.openapi.models.operations.CrmCheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CrmCheckRequest req = new CrmCheckRequest() {{
                apiKey = "corrupti";
                saleDate = "provident";
                vin = "distinctio";
            }}            

            CrmCheckResponse res = sdk.crmCleanseAPI.crmCheck(req);

            if (res.crmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### crmCleanseAPI

* `crmCheck` - CRM check of a particular vin

### carCachedImage

* `getCachedImage` - Fetch cached image

### carSearch

* `autoComplete` - API for auto-completion of inputs
* `getListing` - Listing by id
* `getCarDealerInventoryActive` - Get dealers active inventory
* `getListingCarAuctionId` - Listing by id
* `getListingCarAuctionIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarAuctionIdMedia` - Listing media by id
* `getListingCarFsboId` - Listing by id
* `getListingCarFsboIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarFsboIdMedia` - Listing media by id
* `getListingCarUkId` - Listing by id
* `getListingCarUkIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarUkIdMedia` - Listing media by id
* `getListingCarIdExtra` - Long text Listings attributes for Listing with the given id
* `getListingCarIdMedia` - Listing media by id
* `getSearchCarActive` - Gets active car listings for the given search criteria
* `getSearchCarAuctionActive` - Gets active auction car listings for the given search criteria
* `getSearchCarFsboActive` - Gets active private party car listings for the given search criteria
* `getSearchCarRecents` - Gets Recent car listings for the given search criteria
* `getSearchCarUkRecents` - Gets Recent UK car listings for the given search criteria
* `search` - Gets active car listings in UK for the given search criteria

### carsHistoryAPI

* `getCarHistory` - Get a cars online listing history
* `getHistoryCarUkVrm` - Get a cars online listing history

### carsMarketAPI

* `fareValue` - Predict fare value of car for UK based on YMMT & miles
* `getDailyStats` - Price, Miles and Days on Market stats
* `getMDS` - Market Days Supply
* `getPopularCars` - Get make model wise top 50 popular cars on national, state, city level
* `getSalesCount` - Get sales count by make, model, year, trim or taxonomy vin
* `predictCarPrice` - Predict car price based on it's specifications
* `predictUkCarPrice` - Predict car price for UK based on it's specifications

### dealerAPI

* `dealerSearch` - Find car dealers around
* `getDealer` - Dealer by id
* `getDealerCarUkId` - Dealer by id
* `getDealerHeavyEquipmentId` - Dealer by id
* `getDealerMotorcycleId` - Dealer by id
* `getDealerRvId` - Dealer by id
* `getDealersCarUk` - Find car dealers around
* `getDealersHeavyEquipment` - Find car dealers around
* `getDealersMotorcycle` - Find car dealers around
* `getDealersRv` - Find car dealers around

### heavyEquipmentSearch

* `getListingHeavyEquipmentId` - Heavy equipment listing by id
* `getListingHeavyEquipmentIdExtra` - Long text Heavy equipment Listings attributes for Listing with the given id
* `getListingHeavyEquipmentIdMedia` - Listing media by id
* `getSearchHeavyEquipmentActive` - Gets active heavy equipment listings for the given search criteria
* `getSearchHeavyEquipmentAutoComplete` - API for auto-completion of inputs

### motorcycleSearch

* `getListingMotorcycleId` - Motorcycle listing by id
* `getListingMotorcycleIdExtra` - Long text Motorcycle Listings attributes for Listing with the given id
* `getListingMotorcycleIdMedia` - Motorcycle listing media by id
* `getSearchMotorcycleActive` - Gets active motorcycle listings for the given search criteria
* `getSearchMotorcycleAutoComplete` - API for auto-completion of inputs

### oemIncentiveSearch

* `oemSearch` - Gets oem incentive listings for the given search criteria

### rvSearch

* `getListingRvUkId` - RV listing by id
* `getListingRvUkIdExtra` - Long text RV Listings attributes for Listing with the given id
* `getListingRvUkIdMedia` - Listing media by id
* `getListingRvId` - RV listing by id
* `getListingRvIdExtra` - Long text RV Listings attributes for Listing with the given id
* `getListingRvIdMedia` - Listing media by id
* `getSearchRvActive` - Gets active RV listings for the given search criteria
* `getSearchRvAutoComplete` - API for auto-completion of inputs
* `getSearchRvUkActive` - Gets active RV listings for the given search criteria

### rankCarListings

* `rankCar` - Compute relative rank for car listings.
* `searchAndRankCar` - Compute relative rank for car listings.

### recallSearch

* `getRecallHistory` - Recall info by vin

### vinDecoderAPI

* `decode` - VIN Decoder
* `decodeViaEPI` - EPI VIN Decoder
* `decodeViaNeoVIN` - NeoVIN Decoder
* `getTaxonomyTerms` - API for getting terms from taxonomy
* `getSpecsCarAutoComplete` - API for auto-completion of inputs based on taxonomy

### clientFilters

* `get` - get client filters
* `set` - set client filters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
