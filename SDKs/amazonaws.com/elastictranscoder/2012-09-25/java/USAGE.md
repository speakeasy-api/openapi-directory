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
                pathParams = new CancelJobPathParams() {{
                    id = "est";
                }};
                headers = new CancelJobHeaders() {{
                    xAmzAlgorithm = "at";
                    xAmzContentSha256 = "harum";
                    xAmzCredential = "magnam";
                    xAmzDate = "earum";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "odio";
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