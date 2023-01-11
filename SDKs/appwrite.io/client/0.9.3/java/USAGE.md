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

            AccountCreateRequest req = new AccountCreateRequest() {{
                security = new AccountCreateSecurity() {{
                    project = new SchemeProject() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AccountCreateRequestBody() {{
                    email = "sit";
                    name = "voluptas";
                    password = "culpa";
                }};
            }};

            AccountCreateResponse res = sdk.account.accountCreate(req);

            if (res.user.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->