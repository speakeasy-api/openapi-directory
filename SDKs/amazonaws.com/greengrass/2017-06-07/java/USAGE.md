<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequest;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequestBody;
import org.openapis.openapi.models.operations.AssociateRoleToGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest("provident",                 new AssociateRoleToGroupRequestBody("distinctio");) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateRoleToGroupResponse res = sdk.associateRoleToGroup(req);

            if (res.associateRoleToGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->