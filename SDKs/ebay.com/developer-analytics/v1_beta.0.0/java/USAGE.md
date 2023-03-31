<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetRateLimitsSecurity;
import org.openapis.openapi.models.operations.GetRateLimitsQueryParams;
import org.openapis.openapi.models.operations.GetRateLimitsRequest;
import org.openapis.openapi.models.operations.GetRateLimitsResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRateLimitsRequest req = new GetRateLimitsRequest() {{
                security = new GetRateLimitsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetRateLimitsQueryParams() {{
                    apiContext = "corrupti";
                    apiName = "provident";
                }};
            }};            

            GetRateLimitsResponse res = sdk.rateLimit.getRateLimits(req);

            if (res.rateLimitsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->