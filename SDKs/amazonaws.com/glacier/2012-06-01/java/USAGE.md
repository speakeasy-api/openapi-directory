<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AbortMultipartUploadPathParams;
import org.openapis.openapi.models.operations.AbortMultipartUploadHeaders;
import org.openapis.openapi.models.operations.AbortMultipartUploadRequest;
import org.openapis.openapi.models.operations.AbortMultipartUploadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AbortMultipartUploadRequest req = new AbortMultipartUploadRequest() {{
                pathParams = new AbortMultipartUploadPathParams() {{
                    accountId = "corrupti";
                    uploadId = "provident";
                    vaultName = "distinctio";
                }};
                headers = new AbortMultipartUploadHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
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