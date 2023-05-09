<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequest;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequestBody;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompleteAttachmentUploadRequest req = new CompleteAttachmentUploadRequest(                new CompleteAttachmentUploadRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla");, "corrupti") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            CompleteAttachmentUploadResponse res = sdk.completeAttachmentUpload(req);

            if (res.completeAttachmentUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->