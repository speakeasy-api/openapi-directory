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

            CancelJobRequest req = new CancelJobRequest() {{
                headers = new CancelJobHeaders() {{
                    xAmzAlgorithm = "beatae";
                    xAmzContentSha256 = "tempore";
                    xAmzCredential = "reprehenderit";
                    xAmzDate = "nostrum";
                    xAmzSecurityToken = "velit";
                    xAmzSignature = "necessitatibus";
                    xAmzSignedHeaders = "illo";
                }};
                request = new CancelJobRequestBody() {{
                    jobId = "aut";
                    reason = "quis";
                }};
            }};

            CancelJobResponse res = sdk.cancelJob(req);

            if (res.cancelJobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->