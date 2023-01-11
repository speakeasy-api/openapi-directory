<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    email = "amet";
                    url = "sequi";
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