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

            GetVersionIncidentsFormatRequest req = new GetVersionIncidentsFormatRequest() {{
                queryParams = new GetVersionIncidentsFormatQueryParams() {{
                    incidentType = "hazard";
                    occurredAfter = 7278960282919804440;
                    occurredBefore = 8123455823415940668;
                    page = 279016587921788840;
                    perPage = 6868718605133710902;
                    proximity = "quibusdam";
                    proximitySquare = 2090439125431722263;
                    query = "vel";
                }};
            }};

            GetVersionIncidentsFormatResponse res = sdk.incidents.getVersionIncidentsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->