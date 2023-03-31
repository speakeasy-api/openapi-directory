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