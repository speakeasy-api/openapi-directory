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

            GetArrivalsAndDeparturesByCrsRequest req = new GetArrivalsAndDeparturesByCrsRequest() {{
                pathParams = new GetArrivalsAndDeparturesByCrsPathParams() {{
                    crs = "sit";
                }};
                queryParams = new GetArrivalsAndDeparturesByCrsQueryParams() {{
                    apiKey = "voluptas";
                    filterStation = "culpa";
                    filterType = "expedita";
                    numServices = 3390393562759376202;
                    serviceDetails = false;
                    timeOffset = 1774932891286980153;
                    timeWindow = 6044372234677422456;
                }};
            }};

            GetArrivalsAndDeparturesByCrsResponse res = sdk.departuresAndArrivals.getArrivalsAndDeparturesByCrs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->