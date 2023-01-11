<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateBankAccountRequest req = new CreateBankAccountRequest() {{
                request = new BankAccountInput() {{
                    accountNumber = "temporibus";
                    accountNumberIban = "aut";
                    currency = "JPY";
                    name = "odit";
                    needQr = false;
                    swift = "nihil";
                }};
            }};

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->