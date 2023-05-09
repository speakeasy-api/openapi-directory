<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateEventSourceRequest;
import org.openapis.openapi.models.operations.ActivateEventSourceResponse;
import org.openapis.openapi.models.operations.ActivateEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivateEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateEventSourceRequest req = new ActivateEventSourceRequest(                new ActivateEventSourceRequest("provident");, ActivateEventSourceXAmzTargetEnum.AWS_EVENTS_ACTIVATE_EVENT_SOURCE) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            ActivateEventSourceResponse res = sdk.activateEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->