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

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlightOffersRequest;
import org.openapis.openapi.models.operations.GetFlightOffersResponse;
import org.openapis.openapi.models.operations.GetFlightOffersTravelClassEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFlightOffersRequest req = new GetFlightOffersRequest(548814L, LocalDate.parse("2021-07-27"), "quibusdam", "unde") {{
                children = 857946L;
                currencyCode = "corrupti";
                excludedAirlineCodes = "illum";
                includedAirlineCodes = "vel";
                infants = 623564L;
                max = 645894L;
                maxPrice = 384382L;
                nonStop = false;
                returnDate = LocalDate.parse("2022-09-14");
                travelClass = GetFlightOffersTravelClassEnum.FIRST;
            }};            

            GetFlightOffersResponse res = sdk.shopping.getFlightOffers(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [shopping](docs/shopping/README.md)

* [getFlightOffers](docs/shopping/README.md#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [searchFlightOffers](docs/shopping/README.md#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
