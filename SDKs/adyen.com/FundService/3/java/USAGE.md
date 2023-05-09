<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceResponse;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceSecurity;
import org.openapis.openapi.models.shared.AccountHolderBalanceRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccountHolderBalanceRequest req = new AccountHolderBalanceRequest("corrupti");            

            PostAccountHolderBalanceResponse res = sdk.general.postAccountHolderBalance(req, new PostAccountHolderBalanceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolderBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->