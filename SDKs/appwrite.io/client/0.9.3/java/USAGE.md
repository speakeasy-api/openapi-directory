<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRequestBody;
import org.openapis.openapi.models.operations.AccountCreateResponse;
import org.openapis.openapi.models.operations.AccountCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRequestBody req = new AccountCreateRequestBody("corrupti", "provident") {{
                name = "Ellis Mitchell";
            }};            

            AccountCreateResponse res = sdk.account.accountCreate(req, new AccountCreateSecurity("illum") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->