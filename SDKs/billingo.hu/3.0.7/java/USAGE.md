<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankAccountInput req = new BankAccountInput("provident", CurrencyEnum.PLN, "quibusdam") {{
                accountNumberIban = "unde";
                needQr = false;
                swift = "nulla";
            }};            

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->