<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.GetAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.GetAuthenticatedUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                onlyId = false;
            }};            

            GetAuthenticatedUserResponse res = sdk.account.getAuthenticatedUser(req, new GetAuthenticatedUserSecurity("corrupti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->