<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccountCreateSecurity;
import org.openapis.openapi.models.operations.AccountCreateRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRequest;
import org.openapis.openapi.models.operations.AccountCreateResponse;
import org.openapis.openapi.models.shared.SchemeProject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRequest req = new AccountCreateRequest() {{
                security = new AccountCreateSecurity() {{
                    project = new SchemeProject() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AccountCreateRequestBody() {{
                    email = "Larue_Rau85@yahoo.com";
                    name = "corrupti";
                    password = "illum";
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