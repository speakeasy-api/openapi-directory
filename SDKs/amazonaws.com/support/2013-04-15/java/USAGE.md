<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.operations.AddAttachmentsToSetResponse;
import org.openapis.openapi.models.operations.AddAttachmentsToSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAttachmentsToSetRequest req = new AddAttachmentsToSetRequest(                new AddAttachmentsToSetRequest(                new org.openapis.openapi.models.shared.Attachment[]{{
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
                                            }}) {{
                                attachmentSetId = "vel";
                            }};, AddAttachmentsToSetXAmzTargetEnum.AWS_SUPPORT20130415_ADD_ATTACHMENTS_TO_SET) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }};            

            AddAttachmentsToSetResponse res = sdk.addAttachmentsToSet(req);

            if (res.addAttachmentsToSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->