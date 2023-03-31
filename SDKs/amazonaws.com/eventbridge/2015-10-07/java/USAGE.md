<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivateEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.ActivateEventSourceHeaders;
import org.openapis.openapi.models.operations.ActivateEventSourceRequest;
import org.openapis.openapi.models.operations.ActivateEventSourceResponse;
import org.openapis.openapi.models.shared.ActivateEventSourceRequest;

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

            ActivateEventSourceRequest req = new ActivateEventSourceRequest() {{
                headers = new ActivateEventSourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSEvents.ActivateEventSource";
                }};
                request = new ActivateEventSourceRequest() {{
                    name = "illum";
                }};
            }};            

            ActivateEventSourceResponse res = sdk.activateEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->