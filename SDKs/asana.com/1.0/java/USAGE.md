<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectQueryParams;
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
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            CreateAttachmentForObjectRequest req = new CreateAttachmentForObjectRequest() {{
                queryParams = new CreateAttachmentForObjectQueryParams() {{
                    optFields = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    optPretty = false;
                }};
                request = new AttachmentRequest() {{
                    connectToApp = false;
                    file = new AttachmentRequestFile() {{
                        content = "unde".getBytes();
                        file = "nulla";
                    }};
                    name = "corrupti";
                    parent = "illum";
                    resourceSubtype = "external";
                    url = "vel";
                }};
            }};            

            CreateAttachmentForObjectResponse res = sdk.attachments.createAttachmentForObject(req);

            if (res.createAttachmentForObject200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->