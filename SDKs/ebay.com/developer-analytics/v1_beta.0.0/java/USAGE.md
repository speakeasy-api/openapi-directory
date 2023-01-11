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

            GetRateLimitsRequest req = new GetRateLimitsRequest() {{
                security = new GetRateLimitsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetRateLimitsQueryParams() {{
                    apiContext = "totam";
                    apiName = "dolores";
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