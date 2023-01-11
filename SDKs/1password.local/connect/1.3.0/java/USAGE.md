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

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                security = new GetApiActivitySecurity() {{
                    connectToken = new SchemeConnectToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetApiActivityQueryParams() {{
                    limit = 2259404117704393152;
                    offset = 6050128673802995827;
                }};
            }};

            GetApiActivityResponse res = sdk.activity.getApiActivity(req);

            if (res.apiRequests.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->