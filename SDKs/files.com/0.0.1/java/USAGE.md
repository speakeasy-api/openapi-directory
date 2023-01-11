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

            GetActionNotificationExportResultsRequest req = new GetActionNotificationExportResultsRequest() {{
                queryParams = new GetActionNotificationExportResultsQueryParams() {{
                    actionNotificationExportId = 3424131883437816551;
                    cursor = "aperiam";
                    perPage = 7640526115896074433;
                    userId = 6810414345605660316;
                }};
            }};

            GetActionNotificationExportResultsResponse res = sdk.actionNotificationExportResults.getActionNotificationExportResults(req);

            if (res.actionNotificationExportResultEntities.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->