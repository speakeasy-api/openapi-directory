<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ActivityCheckRepoIsStarredByAuthenticatedUserPathParams;
import org.openapis.openapi.models.operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivityCheckRepoIsStarredByAuthenticatedUserRequest req = new ActivityCheckRepoIsStarredByAuthenticatedUserRequest() {{
                pathParams = new ActivityCheckRepoIsStarredByAuthenticatedUserPathParams() {{
                    owner = "corrupti";
                    repo = "provident";
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