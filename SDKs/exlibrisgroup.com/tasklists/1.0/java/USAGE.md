<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetAlmawsV1TaskListsRsLendingRequestsRequest req = new GetAlmawsV1TaskListsRsLendingRequestsRequest() {{
                queryParams = new GetAlmawsV1TaskListsRsLendingRequestsQueryParams() {{
                    library = "autem";
                    partner = "hic";
                    printed = "voluptatem";
                    reported = "omnis";
                    requestedFormat = "libero";
                    status = "qui";
                    suppliedFormat = "omnis";
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