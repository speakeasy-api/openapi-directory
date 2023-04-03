<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequestBody;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequest;
import org.openapis.openapi.models.operations.AssociateRoleToGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest() {{
                groupId = "corrupti";
                requestBody = new AssociateRoleToGroupRequestBody() {{
                    roleArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            AssociateRoleToGroupResponse res = sdk.associateRoleToGroup(req);

            if (res.associateRoleToGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->