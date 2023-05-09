# transfers

### Available Operations

* [postTransfers](#posttransfers) - Transfer funds

## postTransfers

Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransfersResponse;
import org.openapis.openapi.models.operations.PostTransfersSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Bank;
import org.openapis.openapi.models.shared.BankAccountInfo;
import org.openapis.openapi.models.shared.BankPriorityEnum;
import org.openapis.openapi.models.shared.CounterpartyInfo;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.TransferInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferInfo req = new TransferInfo(                new Amount("excepturi", 392785L);,                 new CounterpartyInfo() {{
                                balanceAccountId = "recusandae";
                                bankAccount = new BankAccountInfo() {{
                                    address = new Address("temporibus", "ab", "quis", "veritatis", "deserunt") {{
                                        stateOrProvince = "perferendis";
                                    }};;
                                    iban = "ipsam";
                                    ownerName = new Name() {{
                                        firstName = "Rita";
                                        fullName = "sapiente";
                                        infix = "quo";
                                        lastName = "Connelly";
                                    }};;
                                }};;
                                transferInstrumentId = "at";
                            }};) {{
                balanceAccountId = "at";
                bank = new Bank() {{
                    priority = BankPriorityEnum.WIRE;
                }};;
                description = "molestiae";
                id = "cc78ca1b-a928-4fc8-9674-2cb739205929";
                paymentInstrumentId = "dolor";
                reference = "natus";
                referenceForBeneficiary = "laboriosam";
            }};            

            PostTransfersResponse res = sdk.transfers.postTransfers(req, new PostTransfersSecurity("hic") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transfer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
