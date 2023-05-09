<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountCreateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRecoveryRequestBody req = new AccountCreateRecoveryRequestBody("corrupti", "provident");            

            AccountCreateRecoveryResponse res = sdk.account.accountCreateRecovery(req, new AccountCreateRecoverySecurity("distinctio", "quibusdam") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->