<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateApplicationFleetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.operations.AssociateApplicationFleetResponse;
import org.openapis.openapi.models.shared.AssociateApplicationFleetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApplicationFleetRequest req = new AssociateApplicationFleetRequest() {{
                associateApplicationFleetRequest = new AssociateApplicationFleetRequest() {{
                    applicationArn = "corrupti";
                    fleetName = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "PhotonAdminProxyService.AssociateApplicationFleet";
            }}            

            AssociateApplicationFleetResponse res = sdk.associateApplicationFleet(req);

            if (res.associateApplicationFleetResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->