<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectRequest;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectResponse;
import org.openapis.openapi.models.shared.AttachmentRequestFile;
import org.openapis.openapi.models.shared.AttachmentRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.AttachmentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateAttachmentForObjectRequest req = new CreateAttachmentForObjectRequest() {{
                attachmentRequest = new AttachmentRequest() {{
                    connectToApp = false;
                    file = new AttachmentRequestFile() {{
                        content = "corrupti".getBytes();
                        file = "provident";
                    }};
                    name = "distinctio";
                    parent = "quibusdam";
                    resourceSubtype = "external";
                    url = "unde";
                }};
                optFields = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                optPretty = false;
            }}            

            CreateAttachmentForObjectResponse res = sdk.attachments.createAttachmentForObject(req);

            if (res.createAttachmentForObject200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->