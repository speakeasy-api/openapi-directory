<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRateLimitsRequest;
import org.openapis.openapi.models.operations.GetRateLimitsResponse;
import org.openapis.openapi.models.operations.GetRateLimitsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRateLimitsRequest req = new GetRateLimitsRequest() {{
                apiContext = "corrupti";
                apiName = "provident";
            }};            

            GetRateLimitsResponse res = sdk.rateLimit.getRateLimits(req, new GetRateLimitsSecurity("distinctio") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.rateLimitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->