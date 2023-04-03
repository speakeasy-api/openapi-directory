<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountCreateSecurity;
import org.openapis.openapi.models.operations.AccountCreateRequestBody;
import org.openapis.openapi.models.operations.AccountCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRequestBody req = new AccountCreateRequestBody() {{
                email = "Larue_Rau85@yahoo.com";
                name = "corrupti";
                password = "illum";
            }}            

            AccountCreateResponse res = sdk.account.accountCreate(req, new AccountCreateSecurity() {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->