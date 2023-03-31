<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostAccountHolderBalanceSecurity;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceRequest;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceResponse;
import org.openapis.openapi.models.shared.AccountHolderBalanceRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAccountHolderBalanceRequest req = new PostAccountHolderBalanceRequest() {{
                security = new PostAccountHolderBalanceSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AccountHolderBalanceRequest() {{
                    accountHolderCode = "corrupti";
                }};
            }};            

            PostAccountHolderBalanceResponse res = sdk.general.postAccountHolderBalance(req);

            if (res.accountHolderBalanceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->