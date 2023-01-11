<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateTeamMemberRequest req = new AssociateTeamMemberRequest() {{
                headers = new AssociateTeamMemberHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "CodeStar_20170419.AssociateTeamMember";
                }};
                request = new AssociateTeamMemberRequest() {{
                    clientRequestToken = "fugit";
                    projectId = "et";
                    projectRole = "nihil";
                    remoteAccessAllowed = true;
                    userArn = "dicta";
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