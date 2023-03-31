<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetUserSecurity;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequest req = new GetUserRequest() {{
                security = new GetUserSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
            }};            

            GetUserResponse res = sdk.user.getUser(req);

            if (res.userResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->