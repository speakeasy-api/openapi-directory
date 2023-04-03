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

            GetArrivalsAndDeparturesByCRSRequest req = new GetArrivalsAndDeparturesByCRSRequest() {{
                crs = "corrupti";
                apiKey = "provident";
                filterStation = "distinctio";
                filterType = "quibusdam";
                numServices = 602763;
                serviceDetails = false;
                timeOffset = 857946;
                timeWindow = 544883;
            }}            

            GetArrivalsAndDeparturesByCRSResponse res = sdk.departuresAndArrivals.getArrivalsAndDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->