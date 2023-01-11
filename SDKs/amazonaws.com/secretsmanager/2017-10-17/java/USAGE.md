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

            CancelRotateSecretRequest req = new CancelRotateSecretRequest() {{
                headers = new CancelRotateSecretHeaders() {{
                    xAmzAlgorithm = "dolorem";
                    xAmzContentSha256 = "magni";
                    xAmzCredential = "sequi";
                    xAmzDate = "non";
                    xAmzSecurityToken = "a";
                    xAmzSignature = "recusandae";
                    xAmzSignedHeaders = "molestias";
                    xAmzTarget = "secretsmanager.CancelRotateSecret";
                }};
                request = new CancelRotateSecretRequest() {{
                    secretId = "dolores";
                }};
            }};

            CancelRotateSecretResponse res = sdk.cancelRotateSecret(req);

            if (res.cancelRotateSecretResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->