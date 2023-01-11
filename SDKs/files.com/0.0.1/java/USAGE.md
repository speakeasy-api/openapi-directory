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
                    actionNotificationExportId = 8717895732742165505;
                    cursor = "voluptas";
                    perPage = 6050128673802995827;
                    userId = 501233450539197794;
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