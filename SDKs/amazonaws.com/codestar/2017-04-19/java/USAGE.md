<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateTeamMemberXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateTeamMemberHeaders;
import org.openapis.openapi.models.operations.AssociateTeamMemberRequest;
import org.openapis.openapi.models.operations.AssociateTeamMemberResponse;
import org.openapis.openapi.models.shared.AssociateTeamMemberRequest;

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

            AssociateTeamMemberRequest req = new AssociateTeamMemberRequest() {{
                headers = new AssociateTeamMemberHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CodeStar_20170419.AssociateTeamMember";
                }};
                request = new AssociateTeamMemberRequest() {{
                    clientRequestToken = "illum";
                    projectId = "vel";
                    projectRole = "error";
                    remoteAccessAllowed = false;
                    userArn = "deserunt";
                }};
            }};            

            AssociateTeamMemberResponse res = sdk.associateTeamMember(req);

            if (res.associateTeamMemberResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->