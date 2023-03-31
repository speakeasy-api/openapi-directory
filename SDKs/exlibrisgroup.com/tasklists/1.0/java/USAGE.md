<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsQueryParams;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                queryParams = new GetAlmawsV1TaskListsRsLendingRequestsQueryParams() {{
                    library = "corrupti";
                    partner = "provident";
                    printed = "distinctio";
                    reported = "quibusdam";
                    requestedFormat = "unde";
                    status = "nulla";
                    suppliedFormat = "corrupti";
                }};
            }};            

            GetAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req);

            if (res.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->