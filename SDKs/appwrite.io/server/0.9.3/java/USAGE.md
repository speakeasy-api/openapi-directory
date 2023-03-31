<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountCreateRecoverySecurity;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequest;
import org.openapis.openapi.models.operations.AccountCreateRecoveryResponse;
import org.openapis.openapi.models.shared.SchemeJwt;
import org.openapis.openapi.models.shared.SchemeProject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRecoveryRequest req = new AccountCreateRecoveryRequest() {{
                security = new AccountCreateRecoverySecurity() {{
                    jwt = new SchemeJwt() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    project = new SchemeProject() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AccountCreateRecoveryRequestBody() {{
                    email = "Larue_Rau85@yahoo.com";
                    url = "corrupti";
                }};
            }};            

            AccountCreateRecoveryResponse res = sdk.account.accountCreateRecovery(req);

            if (res.token.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->