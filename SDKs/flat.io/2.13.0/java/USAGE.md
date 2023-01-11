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

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                security = new GetAuthenticatedUserSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetAuthenticatedUserQueryParams() {{
                    onlyId = true;
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