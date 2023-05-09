<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTeamMemberRequest;
import org.openapis.openapi.models.operations.AssociateTeamMemberResponse;
import org.openapis.openapi.models.operations.AssociateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateTeamMemberRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTeamMemberRequest req = new AssociateTeamMemberRequest(                new AssociateTeamMemberRequest("provident", "distinctio", "quibusdam") {{
                                clientRequestToken = "unde";
                                remoteAccessAllowed = false;
                            }};, AssociateTeamMemberXAmzTargetEnum.CODE_STAR20170419_ASSOCIATE_TEAM_MEMBER) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateTeamMemberResponse res = sdk.associateTeamMember(req);

            if (res.associateTeamMemberResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->