<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequest;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequestBody;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDeviceWithPlacementRequest req = new AssociateDeviceWithPlacementRequest(                new AssociateDeviceWithPlacementRequestBody("provident");, "distinctio", "quibusdam", "unde") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateDeviceWithPlacementResponse res = sdk.associateDeviceWithPlacement(req);

            if (res.associateDeviceWithPlacementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->