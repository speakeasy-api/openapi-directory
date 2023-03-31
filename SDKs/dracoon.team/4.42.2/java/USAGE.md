<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompleteOpenIdLoginQueryParams;
import org.openapis.openapi.models.operations.CompleteOpenIdLoginRequest;
import org.openapis.openapi.models.operations.CompleteOpenIdLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            CompleteOpenIdLoginRequest req = new CompleteOpenIdLoginRequest() {{
                queryParams = new CompleteOpenIdLoginQueryParams() {{
                    code = "corrupti";
                    idToken = "provident";
                    state = "distinctio";
                }};
            }};            

            CompleteOpenIdLoginResponse res = sdk.auth.completeOpenIdLogin(req);

            if (res.loginResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->