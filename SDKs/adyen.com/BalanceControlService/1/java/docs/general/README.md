# general

### Available Operations

* [postBalanceTransfer](#postbalancetransfer) - Start a balance transfer

## postBalanceTransfer

Starts a balance transfer request between merchant accounts. The following conditions must be met before you can successfully transfer balances:

* The source and destination merchant accounts must be under the same company account and legal entity.

* The source merchant account must have sufficient funds.

* The source and destination merchant accounts must have at least one common processing currency.

When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBalanceTransferResponse;
import org.openapis.openapi.models.operations.PostBalanceTransferSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BalanceTransferRequest;
import org.openapis.openapi.models.shared.BalanceTransferRequestTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BalanceTransferRequest req = new BalanceTransferRequest(                new Amount("illum", 423655L);, "error", "deserunt", BalanceTransferRequestTypeEnum.TERMINAL_SALE) {{
                description = "iure";
                reference = "magnam";
            }};            

            PostBalanceTransferResponse res = sdk.general.postBalanceTransfer(req, new PostBalanceTransferSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceTransferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
