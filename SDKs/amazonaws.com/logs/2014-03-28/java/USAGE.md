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

            AssociateKmsKeyRequest req = new AssociateKmsKeyRequest() {{
                headers = new AssociateKmsKeyHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "vel";
                    xAmzCredential = "dolores";
                    xAmzDate = "iste";
                    xAmzSecurityToken = "ut";
                    xAmzSignature = "quia";
                    xAmzSignedHeaders = "dolorum";
                    xAmzTarget = "Logs_20140328.AssociateKmsKey";
                }};
                request = new AssociateKmsKeyRequest() {{
                    kmsKeyId = "ducimus";
                    logGroupName = "ipsum";
                }};
            }};

            AssociateKmsKeyResponse res = sdk.associateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->