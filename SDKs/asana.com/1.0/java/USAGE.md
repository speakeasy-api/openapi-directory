<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectRequest;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectResponse;
import org.openapis.openapi.models.shared.AttachmentRequest;
import org.openapis.openapi.models.shared.AttachmentRequestFile;
import org.openapis.openapi.models.shared.AttachmentRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateAttachmentForObjectRequest req = new CreateAttachmentForObjectRequest(                new AttachmentRequest() {{
                                connectToApp = false;
                                file = new AttachmentRequestFile("corrupti".getBytes(), "provident");;
                                name = "Ellis Mitchell";
                                parent = "illum";
                                resourceSubtype = AttachmentRequestResourceSubtypeEnum.EXTERNAL;
                                url = "vel";
                            }};) {{
                optFields = new String[]{{
                    add("deserunt"),
                    add("suscipit"),
                    add("iure"),
                }};
                optPretty = false;
            }};            

            CreateAttachmentForObjectResponse res = sdk.attachments.createAttachmentForObject(req);

            if (res.createAttachmentForObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->