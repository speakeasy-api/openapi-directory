<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankAccountInput req = new BankAccountInput() {{
                accountNumber = "corrupti";
                accountNumberIban = "provident";
                currency = "PLN";
                name = "quibusdam";
                needQr = false;
                swift = "unde";
            }}            

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->