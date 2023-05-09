<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionNotificationExportResultsRequest;
import org.openapis.openapi.models.operations.GetActionNotificationExportResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionNotificationExportResultsRequest req = new GetActionNotificationExportResultsRequest(548814) {{
                cursor = "provident";
                perPage = 715190;
                userId = 844266;
            }};            

            GetActionNotificationExportResultsResponse res = sdk.actionNotificationExportResults.getActionNotificationExportResults(req);

            if (res.actionNotificationExportResultEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->