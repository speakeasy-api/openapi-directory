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

            CancelTaskRequest req = new CancelTaskRequest() {{
                pathParams = new CancelTaskPathParams() {{
                    taskId = "itaque";
                }};
                headers = new CancelTaskHeaders() {{
                    xAmzAlgorithm = "nobis";
                    xAmzContentSha256 = "sequi";
                    xAmzCredential = "esse";
                    xAmzDate = "nobis";
                    xAmzSecurityToken = "sint";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "sequi";
                }};
            }};

            CancelTaskResponse res = sdk.cancelTask(req);

            if (res.cancelTaskOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->