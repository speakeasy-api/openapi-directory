<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateTeamMemberRequest;
import org.openapis.openapi.models.operations.AssociateTeamMemberResponse;
import org.openapis.openapi.models.shared.AssociateTeamMemberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTeamMemberRequest req = new AssociateTeamMemberRequest() {{
                associateTeamMemberRequest = new AssociateTeamMemberRequest() {{
                    clientRequestToken = "corrupti";
                    projectId = "provident";
                    projectRole = "distinctio";
                    remoteAccessAllowed = false;
                    userArn = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "CodeStar_20170419.AssociateTeamMember";
            }}            

            AssociateTeamMemberResponse res = sdk.associateTeamMember(req);

            if (res.associateTeamMemberResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->