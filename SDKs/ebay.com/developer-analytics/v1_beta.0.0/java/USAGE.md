<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetRateLimitsSecurity;
import org.openapis.openapi.models.operations.GetRateLimitsRequest;
import org.openapis.openapi.models.operations.GetRateLimitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRateLimitsRequest req = new GetRateLimitsRequest() {{
                apiContext = "corrupti";
                apiName = "provident";
            }}            

            GetRateLimitsResponse res = sdk.rateLimit.getRateLimits(req, new GetRateLimitsSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.rateLimitsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->