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

            DeleteHumanLoopRequest req = new DeleteHumanLoopRequest() {{
                pathParams = new DeleteHumanLoopPathParams() {{
                    humanLoopName = "exercitationem";
                }};
                headers = new DeleteHumanLoopHeaders() {{
                    xAmzAlgorithm = "hic";
                    xAmzContentSha256 = "doloribus";
                    xAmzCredential = "porro";
                    xAmzDate = "est";
                    xAmzSecurityToken = "deserunt";
                    xAmzSignature = "eum";
                    xAmzSignedHeaders = "sit";
                }};
            }};

            DeleteHumanLoopResponse res = sdk.deleteHumanLoop(req);

            if (res.deleteHumanLoopResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->