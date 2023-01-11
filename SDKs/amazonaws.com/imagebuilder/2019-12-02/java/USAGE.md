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

            CancelImageCreationRequest req = new CancelImageCreationRequest() {{
                headers = new CancelImageCreationHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "occaecati";
                    xAmzDate = "eum";
                    xAmzSecurityToken = "ut";
                    xAmzSignature = "assumenda";
                    xAmzSignedHeaders = "fuga";
                }};
                request = new CancelImageCreationRequestBody() {{
                    clientToken = "aut";
                    imageBuildVersionArn = "corrupti";
                }};
            }};

            CancelImageCreationResponse res = sdk.cancelImageCreation(req);

            if (res.cancelImageCreationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->