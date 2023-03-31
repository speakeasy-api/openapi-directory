<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateApplicationFleetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateApplicationFleetHeaders;
import org.openapis.openapi.models.operations.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.operations.AssociateApplicationFleetResponse;
import org.openapis.openapi.models.shared.AssociateApplicationFleetRequest;

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

            AssociateApplicationFleetRequest req = new AssociateApplicationFleetRequest() {{
                headers = new AssociateApplicationFleetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "PhotonAdminProxyService.AssociateApplicationFleet";
                }};
                request = new AssociateApplicationFleetRequest() {{
                    applicationArn = "illum";
                    fleetName = "vel";
                }};
            }};            

            AssociateApplicationFleetResponse res = sdk.associateApplicationFleet(req);

            if (res.associateApplicationFleetResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->