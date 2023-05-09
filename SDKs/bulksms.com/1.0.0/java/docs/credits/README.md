# credits

### Available Operations

* [postCreditTransfer](#postcredittransfer) - Transfer credits to another account

## postCreditTransfer

Before you can use the transfer credits endpoint, the _credit-transfer facility_ must be activated for your account.  You can request activation from `support@bulksms.com`. 

The recipient must be an enabled account that uses the same currency as your account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreditTransferResponse;
import org.openapis.openapi.models.operations.PostCreditTransferSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferEntry req = new TransferEntry(2345, 2345, "roboto") {{
                commentOnFrom = "Tranfer to Bobby";
                commentOnTo = "Tranfer from Danny";
            }};            

            PostCreditTransferResponse res = sdk.credits.postCreditTransfer(req, new PostCreditTransferSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
