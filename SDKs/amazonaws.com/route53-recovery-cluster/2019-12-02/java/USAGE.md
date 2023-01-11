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

            GetRoutingControlStateRequest req = new GetRoutingControlStateRequest() {{
                headers = new GetRoutingControlStateHeaders() {{
                    xAmzAlgorithm = "sed";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "maxime";
                    xAmzDate = "eos";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "autem";
                    xAmzSignedHeaders = "deleniti";
                    xAmzTarget = "ToggleCustomerAPI.GetRoutingControlState";
                }};
                request = new GetRoutingControlStateRequest() {{
                    routingControlArn = "asperiores";
                }};
            }};

            GetRoutingControlStateResponse res = sdk.getRoutingControlState(req);

            if (res.getRoutingControlStateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->