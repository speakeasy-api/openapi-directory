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

            ActivateAnomalyDetectorRequest req = new ActivateAnomalyDetectorRequest() {{
                headers = new ActivateAnomalyDetectorHeaders() {{
                    xAmzAlgorithm = "aliquid";
                    xAmzContentSha256 = "quasi";
                    xAmzCredential = "impedit";
                    xAmzDate = "tempora";
                    xAmzSecurityToken = "consequatur";
                    xAmzSignature = "eos";
                    xAmzSignedHeaders = "non";
                }};
                request = new ActivateAnomalyDetectorRequestBody() {{
                    anomalyDetectorArn = "nesciunt";
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