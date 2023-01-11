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
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PostRmmPreSignAttachmentRequest req = new PostRmmPreSignAttachmentRequest() {{
                security = new PostRmmPreSignAttachmentSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new PreSignRequest() {{
                    fileExtension = "sit";
                    mediaType = "voluptas";
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