<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateWebACLXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateWebACLHeaders;
import org.openapis.openapi.models.operations.AssociateWebACLRequest;
import org.openapis.openapi.models.operations.AssociateWebACLResponse;
import org.openapis.openapi.models.shared.AssociateWebACLRequest;

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

            AssociateWebACLRequest req = new AssociateWebACLRequest() {{
                headers = new AssociateWebACLHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSWAF_Regional_20161128.AssociateWebACL";
                }};
                request = new AssociateWebACLRequest() {{
                    resourceArn = "illum";
                    webACLId = "vel";
                }};
            }};            

            AssociateWebACLResponse res = sdk.associateWebACL(req);

            if (res.associateWebACLResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->