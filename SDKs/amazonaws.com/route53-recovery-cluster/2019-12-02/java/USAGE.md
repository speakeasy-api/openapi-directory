<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRoutingControlStateXAmzTargetEnum;
import org.openapis.openapi.models.operations.GetRoutingControlStateRequest;
import org.openapis.openapi.models.operations.GetRoutingControlStateResponse;
import org.openapis.openapi.models.shared.GetRoutingControlStateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingControlStateRequest req = new GetRoutingControlStateRequest() {{
                getRoutingControlStateRequest = new GetRoutingControlStateRequest() {{
                    routingControlArn = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "ToggleCustomerAPI.GetRoutingControlState";
            }}            

            GetRoutingControlStateResponse res = sdk.getRoutingControlState(req);

            if (res.getRoutingControlStateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->