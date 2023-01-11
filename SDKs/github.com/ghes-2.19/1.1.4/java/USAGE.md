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

            ActivityCheckRepoIsStarredByAuthenticatedUserRequest req = new ActivityCheckRepoIsStarredByAuthenticatedUserRequest() {{
                pathParams = new ActivityCheckRepoIsStarredByAuthenticatedUserPathParams() {{
                    owner = "et";
                    repo = "amet";
                }};
            }};

            ActivityCheckRepoIsStarredByAuthenticatedUserResponse res = sdk.activity.activityCheckRepoIsStarredByAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->