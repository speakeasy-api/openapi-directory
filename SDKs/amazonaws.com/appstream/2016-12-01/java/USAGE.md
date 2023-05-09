<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.operations.AssociateApplicationFleetResponse;
import org.openapis.openapi.models.operations.AssociateApplicationFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApplicationFleetRequest req = new AssociateApplicationFleetRequest(                new AssociateApplicationFleetRequest("provident", "distinctio");, AssociateApplicationFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_FLEET) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateApplicationFleetResponse res = sdk.associateApplicationFleet(req);

            if (res.associateApplicationFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->