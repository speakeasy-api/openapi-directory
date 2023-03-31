<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiActivitySecurity;
import org.openapis.openapi.models.operations.GetApiActivityQueryParams;
import org.openapis.openapi.models.operations.GetApiActivityRequest;
import org.openapis.openapi.models.operations.GetApiActivityResponse;
import org.openapis.openapi.models.shared.SchemeConnectToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                security = new GetApiActivitySecurity() {{
                    connectToken = new SchemeConnectToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetApiActivityQueryParams() {{
                    limit = 10;
                    offset = 50;
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