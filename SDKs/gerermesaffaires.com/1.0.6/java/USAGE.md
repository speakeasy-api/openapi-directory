<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdSecurity;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessGroupsIdSpacesSpaceIdRequest req = new DeleteBusinessGroupsIdSpacesSpaceIdRequest() {{
                id = "P18784";
                spaceId = "P18784";
            }}            

            DeleteBusinessGroupsIdSpacesSpaceIdResponse res = sdk.deleteBusinessGroupsIdSpacesSpaceId(req, new DeleteBusinessGroupsIdSpacesSpaceIdSecurity() {{
                gmaAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->