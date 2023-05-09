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