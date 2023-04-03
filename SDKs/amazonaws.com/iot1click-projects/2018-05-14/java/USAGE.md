<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequestBody;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequest;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDeviceWithPlacementRequest req = new AssociateDeviceWithPlacementRequest() {{
                requestBody = new AssociateDeviceWithPlacementRequestBody() {{
                    deviceId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                deviceTemplateName = "vel";
                placementName = "error";
                projectName = "deserunt";
            }}            

            AssociateDeviceWithPlacementResponse res = sdk.associateDeviceWithPlacement(req);

            if (res.associateDeviceWithPlacementResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->