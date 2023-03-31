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

import org.openapis.openapi.models.operations.GetFlightOffersTravelClassEnum;
import org.openapis.openapi.models.operations.GetFlightOffersQueryParams;
import org.openapis.openapi.models.operations.GetFlightOffersRequest;
import org.openapis.openapi.models.operations.GetFlightOffersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFlightOffersRequest req = new GetFlightOffersRequest() {{
                queryParams = new GetFlightOffersQueryParams() {{
                    adults = 548814;
                    children = 592845;
                    currencyCode = "distinctio";
                    departureDate = "2021-03-11";
                    destinationLocationCode = "nulla";
                    excludedAirlineCodes = "corrupti";
                    includedAirlineCodes = "illum";
                    infants = 423655;
                    max = 623564;
                    maxPrice = 645894;
                    nonStop = false;
                    originLocationCode = "suscipit";
                    returnDate = "2022-09-14";
                    travelClass = "FIRST";
                }};
            }};            

            GetFlightOffersResponse res = sdk.shopping.getFlightOffers(req);

            if (res.success.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### shopping

* `getFlightOffers` - Return list of Flight Offers based on searching criteria.
* `searchFlightOffers` - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
