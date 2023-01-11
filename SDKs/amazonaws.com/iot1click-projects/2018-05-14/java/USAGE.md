<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateDeviceWithPlacementRequest req = new AssociateDeviceWithPlacementRequest() {{
                pathParams = new AssociateDeviceWithPlacementPathParams() {{
                    deviceTemplateName = "sit";
                    placementName = "voluptas";
                    projectName = "culpa";
                }};
                headers = new AssociateDeviceWithPlacementHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "consequuntur";
                    xAmzCredential = "dolor";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "et";
                }};
                request = new AssociateDeviceWithPlacementRequestBody() {{
                    deviceId = "nihil";
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