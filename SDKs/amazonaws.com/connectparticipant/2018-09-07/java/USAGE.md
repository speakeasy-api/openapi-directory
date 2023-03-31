<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadHeaders;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequestBody;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequest;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadResponse;

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

            CompleteAttachmentUploadRequest req = new CompleteAttachmentUploadRequest() {{
                headers = new CompleteAttachmentUploadHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzBearer = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new CompleteAttachmentUploadRequestBody() {{
                    attachmentIds = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                    clientToken = "suscipit";
                }};
            }};            

            CompleteAttachmentUploadResponse res = sdk.completeAttachmentUpload(req);

            if (res.completeAttachmentUploadResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->