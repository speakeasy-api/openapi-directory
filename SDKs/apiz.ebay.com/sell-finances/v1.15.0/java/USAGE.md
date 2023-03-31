<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetPayoutSecurity;
import org.openapis.openapi.models.operations.GetPayoutPathParams;
import org.openapis.openapi.models.operations.GetPayoutHeaders;
import org.openapis.openapi.models.operations.GetPayoutRequest;
import org.openapis.openapi.models.operations.GetPayoutResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayoutRequest req = new GetPayoutRequest() {{
                security = new GetPayoutSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetPayoutPathParams() {{
                    payoutId = "corrupti";
                }};
                headers = new GetPayoutHeaders() {{
                    xEbayCMarketplaceId = "provident";
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