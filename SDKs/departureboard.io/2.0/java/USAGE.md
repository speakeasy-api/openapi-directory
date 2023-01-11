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
                    crs = "voluptas";
                }};
                queryParams = new GetArrivalsAndDeparturesByCrsQueryParams() {{
                    apiKey = "veniam";
                    filterStation = "dolorum";
                    filterType = "id";
                    numServices = 5235212334792799739;
                    serviceDetails = false;
                    timeOffset = 5575187088826678383;
                    timeWindow = 6278711762470794999;
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