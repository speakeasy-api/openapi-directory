<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentResponse;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentSecurity;
import org.openapis.openapi.models.shared.PreSignRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PreSignRequest req = new PreSignRequest() {{
                fileExtension = "pdf";
                mediaType = "application/pdf";
            }};            

            PostRmmPreSignAttachmentResponse res = sdk.attachments.postRmmPreSignAttachment(req, new PostRmmPreSignAttachmentSecurity("corrupti", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.preSignInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->