<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsIdRequest req = new DeleteAppsIdRequest("corrupti");            

            DeleteAppsIdResponse res = sdk.apps.deleteAppsId(req, new DeleteAppsIdSecurity("provident") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->