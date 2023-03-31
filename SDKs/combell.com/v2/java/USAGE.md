<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.CreateAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountRequest req = new CreateAccountRequest() {{
                request = new CreateAccount() {{
                    ftpPassword = "corrupti";
                    identifier = "provident";
                    servicepackId = 715190;
                }};
            }};            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->