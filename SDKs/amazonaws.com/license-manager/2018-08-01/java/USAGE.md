<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptGrantRequest;
import org.openapis.openapi.models.operations.AcceptGrantResponse;
import org.openapis.openapi.models.operations.AcceptGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptGrantRequest req = new AcceptGrantRequest(                new AcceptGrantRequest("provident");, AcceptGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_ACCEPT_GRANT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcceptGrantResponse res = sdk.acceptGrant(req);

            if (res.acceptGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->