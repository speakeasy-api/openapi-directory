<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAttachmentsToSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.operations.AddAttachmentsToSetResponse;
import org.openapis.openapi.models.shared.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.shared.Attachment;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAttachmentsToSetRequest req = new AddAttachmentsToSetRequest() {{
                addAttachmentsToSetRequest = new AddAttachmentsToSetRequest() {{
                    attachmentSetId = "corrupti";
                    attachments = new org.openapis.openapi.models.shared.Attachment[]{{
                        add(new Attachment() {{
                            data = "distinctio";
                            fileName = "quibusdam";
                        }}),
                        add(new Attachment() {{
                            data = "unde";
                            fileName = "nulla";
                        }}),
                        add(new Attachment() {{
                            data = "corrupti";
                            fileName = "illum";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
                xAmzTarget = "AWSSupport_20130415.AddAttachmentsToSet";
            }}            

            AddAttachmentsToSetResponse res = sdk.addAttachmentsToSet(req);

            if (res.addAttachmentsToSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->