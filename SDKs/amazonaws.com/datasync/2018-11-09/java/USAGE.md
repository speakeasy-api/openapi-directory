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

            CancelTaskExecutionRequest req = new CancelTaskExecutionRequest() {{
                headers = new CancelTaskExecutionHeaders() {{
                    xAmzAlgorithm = "veniam";
                    xAmzContentSha256 = "quidem";
                    xAmzCredential = "et";
                    xAmzDate = "nemo";
                    xAmzSecurityToken = "cumque";
                    xAmzSignature = "ipsam";
                    xAmzSignedHeaders = "consequatur";
                    xAmzTarget = "FmrsService.CancelTaskExecution";
                }};
                request = new CancelTaskExecutionRequest() {{
                    taskExecutionArn = "ullam";
                }};
            }};

            CancelTaskExecutionResponse res = sdk.cancelTaskExecution(req);

            if (res.cancelTaskExecutionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->