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

            AbortMultipartUploadRequest req = new AbortMultipartUploadRequest() {{
                pathParams = new AbortMultipartUploadPathParams() {{
                    accountId = "similique";
                    uploadId = "recusandae";
                    vaultName = "error";
                }};
                headers = new AbortMultipartUploadHeaders() {{
                    xAmzAlgorithm = "hic";
                    xAmzContentSha256 = "atque";
                    xAmzCredential = "rerum";
                    xAmzDate = "voluptates";
                    xAmzSecurityToken = "iste";
                    xAmzSignature = "reiciendis";
                    xAmzSignedHeaders = "ipsam";
                }};
            }};

            AbortMultipartUploadResponse res = sdk.abortMultipartUpload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->