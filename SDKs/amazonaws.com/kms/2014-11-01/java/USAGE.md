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

            CancelKeyDeletionRequest req = new CancelKeyDeletionRequest() {{
                headers = new CancelKeyDeletionHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "TrentService.CancelKeyDeletion";
                }};
                request = new CancelKeyDeletionRequest() {{
                    keyId = "fugit";
                }};
            }};

            CancelKeyDeletionResponse res = sdk.cancelKeyDeletion(req);

            if (res.cancelKeyDeletionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->