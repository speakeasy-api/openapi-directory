<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateGroupHeaders;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.CreateGroupRequest;

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

            CreateGroupRequest req = new CreateGroupRequest() {{
                headers = new CreateGroupHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSIdentityStore.CreateGroup";
                }};
                request = new CreateGroupRequest() {{
                    description = "illum";
                    displayName = "vel";
                    identityStoreId = "error";
                }};
            }};            

            CreateGroupResponse res = sdk.createGroup(req);

            if (res.createGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->