<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetPayoutSecurity;
import org.openapis.openapi.models.operations.GetPayoutRequest;
import org.openapis.openapi.models.operations.GetPayoutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayoutRequest req = new GetPayoutRequest() {{
                xEbayCMarketplaceId = "corrupti";
                payoutId = "provident";
            }}            

            GetPayoutResponse res = sdk.payout.getPayout(req, new GetPayoutSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payout.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->