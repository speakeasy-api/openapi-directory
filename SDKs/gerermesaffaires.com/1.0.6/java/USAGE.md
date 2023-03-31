<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdSecurity;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdPathParams;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessGroupsIdSpacesSpaceIdResponse;
import org.openapis.openapi.models.shared.SchemeGmaAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessGroupsIdSpacesSpaceIdRequest req = new DeleteBusinessGroupsIdSpacesSpaceIdRequest() {{
                security = new DeleteBusinessGroupsIdSpacesSpaceIdSecurity() {{
                    gmaAuth = new SchemeGmaAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DeleteBusinessGroupsIdSpacesSpaceIdPathParams() {{
                    id = "P18784";
                    spaceId = "P18784";
                }};
            }};            

            DeleteBusinessGroupsIdSpacesSpaceIdResponse res = sdk.deleteBusinessGroupsIdSpacesSpaceId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->