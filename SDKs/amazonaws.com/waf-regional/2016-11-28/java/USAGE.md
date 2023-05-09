<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateWebACLRequest;
import org.openapis.openapi.models.operations.AssociateWebACLResponse;
import org.openapis.openapi.models.operations.AssociateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateWebACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateWebACLRequest req = new AssociateWebACLRequest(                new AssociateWebACLRequest("provident", "distinctio");, AssociateWebACLXAmzTargetEnum.AWSWAF_REGIONAL20161128_ASSOCIATE_WEB_ACL) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateWebACLResponse res = sdk.associateWebACL(req);

            if (res.associateWebACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->