<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorHeaders;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorResponse;

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

            ActivateAnomalyDetectorRequest req = new ActivateAnomalyDetectorRequest() {{
                headers = new ActivateAnomalyDetectorHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new ActivateAnomalyDetectorRequestBody() {{
                    anomalyDetectorArn = "illum";
                }};
            }};            

            ActivateAnomalyDetectorResponse res = sdk.activateAnomalyDetector(req);

            if (res.activateAnomalyDetectorResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->