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

            AccountDetailApiIdRequest req = new AccountDetailApiIdRequest() {{
                security = new AccountDetailApiIdSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
            }};

            AccountDetailApiIdResponse res = sdk.accountDetailAPI.accountDetailApiId(req);

            if (res.sample.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->