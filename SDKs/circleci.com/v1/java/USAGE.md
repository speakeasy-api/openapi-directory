<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheRequest;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectUsernameProjectBuildCacheRequest req = new DeleteProjectUsernameProjectBuildCacheRequest("provident", "distinctio");            

            DeleteProjectUsernameProjectBuildCacheResponse res = sdk.deleteProjectUsernameProjectBuildCache(req);

            if (res.deleteProjectUsernameProjectBuildCache200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->