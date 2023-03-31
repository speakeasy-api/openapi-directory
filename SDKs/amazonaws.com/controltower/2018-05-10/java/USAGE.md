<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DisableControlHeaders;
import org.openapis.openapi.models.operations.DisableControlRequestBody;
import org.openapis.openapi.models.operations.DisableControlRequest;
import org.openapis.openapi.models.operations.DisableControlResponse;

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

            DisableControlRequest req = new DisableControlRequest() {{
                headers = new DisableControlHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new DisableControlRequestBody() {{
                    controlIdentifier = "illum";
                    targetIdentifier = "vel";
                }};
            }};            

            DisableControlResponse res = sdk.disableControl(req);

            if (res.disableControlOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->