# user

### Available Operations

* [getUserProjects](#getuserprojects) - List all active projects for the user

## getUserProjects

List all active projects for the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserProjectsRequest;
import org.openapis.openapi.models.operations.GetUserProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserProjectsRequest req = new GetUserProjectsRequest("praesentium") {{
                page = 615560L;
                size = 166847L;
            }};            

            GetUserProjectsResponse res = sdk.user.getUserProjects(req);

            if (res.getUserProjects200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
