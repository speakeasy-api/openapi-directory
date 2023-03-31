<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRoutingControlStateXAmzTargetEnum;
import org.openapis.openapi.models.operations.GetRoutingControlStateHeaders;
import org.openapis.openapi.models.operations.GetRoutingControlStateRequest;
import org.openapis.openapi.models.operations.GetRoutingControlStateResponse;
import org.openapis.openapi.models.shared.GetRoutingControlStateRequest;

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

            GetRoutingControlStateRequest req = new GetRoutingControlStateRequest() {{
                headers = new GetRoutingControlStateHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ToggleCustomerAPI.GetRoutingControlState";
                }};
                request = new GetRoutingControlStateRequest() {{
                    routingControlArn = "illum";
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