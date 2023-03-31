<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostBalanceTransferSecurity;
import org.openapis.openapi.models.operations.PostBalanceTransferRequest;
import org.openapis.openapi.models.operations.PostBalanceTransferResponse;
import org.openapis.openapi.models.shared.BalanceTransferRequestTypeEnum;
import org.openapis.openapi.models.shared.BalanceTransferRequest;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBalanceTransferRequest req = new PostBalanceTransferRequest() {{
                security = new PostBalanceTransferSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BalanceTransferRequest() {{
                    amount = new Amount() {{
                        currency = "corrupti";
                        value = 592845;
                    }};
                    description = "distinctio";
                    fromMerchant = "quibusdam";
                    reference = "unde";
                    toMerchant = "nulla";
                    type = "credit";
                }};
            }};            

            PostBalanceTransferResponse res = sdk.general.postBalanceTransfer(req);

            if (res.balanceTransferResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->