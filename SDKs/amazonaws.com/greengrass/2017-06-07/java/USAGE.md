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

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest() {{
                pathParams = new AssociateRoleToGroupPathParams() {{
                    groupId = "recusandae";
                }};
                headers = new AssociateRoleToGroupHeaders() {{
                    xAmzAlgorithm = "iste";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "veritatis";
                    xAmzDate = "alias";
                    xAmzSecurityToken = "eum";
                    xAmzSignature = "quia";
                    xAmzSignedHeaders = "iste";
                }};
                request = new AssociateRoleToGroupRequestBody() {{
                    roleArn = "deleniti";
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