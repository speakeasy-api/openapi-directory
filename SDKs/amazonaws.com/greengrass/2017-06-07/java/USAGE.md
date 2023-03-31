<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateRoleToGroupPathParams;
import org.openapis.openapi.models.operations.AssociateRoleToGroupHeaders;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequestBody;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequest;
import org.openapis.openapi.models.operations.AssociateRoleToGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest() {{
                pathParams = new AssociateRoleToGroupPathParams() {{
                    groupId = "corrupti";
                }};
                headers = new AssociateRoleToGroupHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateRoleToGroupRequestBody() {{
                    roleArn = "vel";
                }};
            }};            

            AssociateRoleToGroupResponse res = sdk.associateRoleToGroup(req);

            if (res.associateRoleToGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->