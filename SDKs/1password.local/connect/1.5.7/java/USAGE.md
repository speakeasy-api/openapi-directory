<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiActivitySecurity;
import org.openapis.openapi.models.operations.GetApiActivityRequest;
import org.openapis.openapi.models.operations.GetApiActivityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                limit = 10;
                offset = 50;
            }}            

            GetApiActivityResponse res = sdk.activity.getApiActivity(req, new GetApiActivitySecurity() {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiRequests.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->