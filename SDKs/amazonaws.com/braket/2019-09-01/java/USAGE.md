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

            CancelQuantumTaskRequest req = new CancelQuantumTaskRequest() {{
                pathParams = new CancelQuantumTaskPathParams() {{
                    quantumTaskArn = "quia";
                }};
                headers = new CancelQuantumTaskHeaders() {{
                    xAmzAlgorithm = "ab";
                    xAmzContentSha256 = "nemo";
                    xAmzCredential = "eveniet";
                    xAmzDate = "id";
                    xAmzSecurityToken = "placeat";
                    xAmzSignature = "error";
                    xAmzSignedHeaders = "odio";
                }};
                request = new CancelQuantumTaskRequestBody() {{
                    clientToken = "qui";
                }};
            }};

            CancelQuantumTaskResponse res = sdk.cancelQuantumTask(req);

            if (res.cancelQuantumTaskResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->