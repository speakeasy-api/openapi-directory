<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostBalanceTransferSecurity;
import org.openapis.openapi.models.operations.PostBalanceTransferResponse;
import org.openapis.openapi.models.shared.BalanceTransferRequestTypeEnum;
import org.openapis.openapi.models.shared.BalanceTransferRequest;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BalanceTransferRequest req = new BalanceTransferRequest() {{
                amount = new Amount() {{
                    currency = "corrupti";
                    value = 592845;
                }};
                description = "distinctio";
                fromMerchant = "quibusdam";
                reference = "unde";
                toMerchant = "nulla";
                type = "credit";
            }}            

            PostBalanceTransferResponse res = sdk.general.postBalanceTransfer(req, new PostBalanceTransferSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceTransferResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->