<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementPathParams;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementHeaders;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequestBody;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementRequest;
import org.openapis.openapi.models.operations.AssociateDeviceWithPlacementResponse;

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

            AssociateDeviceWithPlacementRequest req = new AssociateDeviceWithPlacementRequest() {{
                pathParams = new AssociateDeviceWithPlacementPathParams() {{
                    deviceTemplateName = "corrupti";
                    placementName = "provident";
                    projectName = "distinctio";
                }};
                headers = new AssociateDeviceWithPlacementHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new AssociateDeviceWithPlacementRequestBody() {{
                    deviceId = "deserunt";
                }};
            }};            

            AssociateDeviceWithPlacementResponse res = sdk.associateDeviceWithPlacement(req);

            if (res.associateDeviceWithPlacementResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->