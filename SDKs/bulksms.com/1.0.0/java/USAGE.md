<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentSecurity;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentRequest;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentResponse;
import org.openapis.openapi.models.shared.PreSignRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRmmPreSignAttachmentRequest req = new PostRmmPreSignAttachmentRequest() {{
                security = new PostRmmPreSignAttachmentSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new PreSignRequest() {{
                    fileExtension = "pdf";
                    mediaType = "application/pdf";
                }};
            }};            

            PostRmmPreSignAttachmentResponse res = sdk.attachments.postRmmPreSignAttachment(req);

            if (res.preSignInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->