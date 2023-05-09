<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoutingControlStateRequest;
import org.openapis.openapi.models.operations.GetRoutingControlStateResponse;
import org.openapis.openapi.models.operations.GetRoutingControlStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRoutingControlStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingControlStateRequest req = new GetRoutingControlStateRequest(                new GetRoutingControlStateRequest("provident");, GetRoutingControlStateXAmzTargetEnum.TOGGLE_CUSTOMER_API_GET_ROUTING_CONTROL_STATE) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            GetRoutingControlStateResponse res = sdk.getRoutingControlState(req);

            if (res.getRoutingControlStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->