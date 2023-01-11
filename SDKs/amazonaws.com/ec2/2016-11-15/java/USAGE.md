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

            GetAcceptTransitGatewayPeeringAttachmentRequest req = new GetAcceptTransitGatewayPeeringAttachmentRequest() {{
                queryParams = new GetAcceptTransitGatewayPeeringAttachmentQueryParams() {{
                    action = "AcceptTransitGatewayPeeringAttachment";
                    dryRun = false;
                    transitGatewayAttachmentId = "ut";
                    version = "2016-11-15";
                }};
                headers = new GetAcceptTransitGatewayPeeringAttachmentHeaders() {{
                    xAmzAlgorithm = "assumenda";
                    xAmzContentSha256 = "autem";
                    xAmzCredential = "ut";
                    xAmzDate = "labore";
                    xAmzSecurityToken = "amet";
                    xAmzSignature = "in";
                    xAmzSignedHeaders = "provident";
                }};
            }};

            GetAcceptTransitGatewayPeeringAttachmentResponse res = sdk.getAcceptTransitGatewayPeeringAttachment(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->