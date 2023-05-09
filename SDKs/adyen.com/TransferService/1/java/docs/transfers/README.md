# transfers

### Available Operations

* [postTransfers](#posttransfers) - Transfer funds

## postTransfers

Starts a transfer request to move funds within your balance platform, or send funds to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/v1/post/transferInstruments). Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransfersResponse;
import org.openapis.openapi.models.operations.PostTransfersSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.InternalPartyIdentification;
import org.openapis.openapi.models.shared.PartyIdentification;
import org.openapis.openapi.models.shared.TransferInfoOld;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferInfoOld req = new TransferInfoOld(                new Amount("excepturi", 392785L);,                 new PartyIdentification() {{
                                balanceAccountId = "recusandae";
                                paymentInstrumentId = "temporibus";
                            }};,                 new InternalPartyIdentification() {{
                                balanceAccountId = "ab";
                                paymentInstrumentId = "quis";
                            }};) {{
                description = "veritatis";
                reference = "deserunt";
            }};            

            PostTransfersResponse res = sdk.transfers.postTransfers(req, new PostTransfersSecurity("perferendis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transferOld != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
