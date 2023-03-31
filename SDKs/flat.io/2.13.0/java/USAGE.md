<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAuthenticatedUserSecurity;
import org.openapis.openapi.models.operations.GetAuthenticatedUserQueryParams;
import org.openapis.openapi.models.operations.GetAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.GetAuthenticatedUserResponse;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                security = new GetAuthenticatedUserSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetAuthenticatedUserQueryParams() {{
                    onlyId = false;
                }};
            }};            

            GetAuthenticatedUserResponse res = sdk.account.getAuthenticatedUser(req);

            if (res.userDetails.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->