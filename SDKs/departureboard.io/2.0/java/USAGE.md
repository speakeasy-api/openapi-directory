<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArrivalsAndDeparturesByCRSRequest req = new GetArrivalsAndDeparturesByCRSRequest("corrupti", "provident") {{
                filterStation = "distinctio";
                filterType = "quibusdam";
                numServices = 602763L;
                serviceDetails = false;
                timeOffset = 857946L;
                timeWindow = 544883L;
            }};            

            GetArrivalsAndDeparturesByCRSResponse res = sdk.departuresAndArrivals.getArrivalsAndDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->