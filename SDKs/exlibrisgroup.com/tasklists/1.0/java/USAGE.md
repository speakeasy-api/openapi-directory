<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsRequest;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsRsLendingRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                library = "provident";
                partner = "distinctio";
                printed = "quibusdam";
                reported = "unde";
                requestedFormat = "nulla";
                status = "corrupti";
                suppliedFormat = "illum";
            }};            

            GetAlmawsV1TaskListsRsLendingRequestsResponse res = sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req);

            if (res.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->