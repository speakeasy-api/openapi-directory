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

            GetPayoutRequest req = new GetPayoutRequest() {{
                security = new GetPayoutSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetPayoutPathParams() {{
                    payoutId = "quo";
                }};
            }};

            GetPayoutResponse res = sdk.payout.getPayout(req);

            if (res.payout.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->