<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateAnomalyDetectorRequest req = new ActivateAnomalyDetectorRequest(                new ActivateAnomalyDetectorRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            ActivateAnomalyDetectorResponse res = sdk.activateAnomalyDetector(req);

            if (res.activateAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->