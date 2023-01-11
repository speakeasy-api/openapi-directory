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

            CompleteAttachmentUploadRequest req = new CompleteAttachmentUploadRequest() {{
                headers = new CompleteAttachmentUploadHeaders() {{
                    xAmzAlgorithm = "earum";
                    xAmzBearer = "quas";
                    xAmzContentSha256 = "repellendus";
                    xAmzCredential = "ut";
                    xAmzDate = "voluptas";
                    xAmzSecurityToken = "quisquam";
                    xAmzSignature = "qui";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new CompleteAttachmentUploadRequestBody() {{
                    attachmentIds = new String[]() {{
                        add("deleniti"),
                        add("totam"),
                        add("nemo"),
                    }};
                    clientToken = "eligendi";
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