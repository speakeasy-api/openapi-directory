<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAttachmentsToSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAttachmentsToSetHeaders;
import org.openapis.openapi.models.operations.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.operations.AddAttachmentsToSetResponse;
import org.openapis.openapi.models.shared.AddAttachmentsToSetRequest;
import org.openapis.openapi.models.shared.Attachment;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddAttachmentsToSetRequest req = new AddAttachmentsToSetRequest() {{
                headers = new AddAttachmentsToSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSSupport_20130415.AddAttachmentsToSet";
                }};
                request = new AddAttachmentsToSetRequest() {{
                    attachmentSetId = "illum";
                    attachments = new org.openapis.openapi.models.shared.Attachment[]{{
                        add(new Attachment() {{
                            data = "error";
                            fileName = "deserunt";
                        }}),
                        add(new Attachment() {{
                            data = "suscipit";
                            fileName = "iure";
                        }}),
                    }};
                }};
            }};            

            AddAttachmentsToSetResponse res = sdk.addAttachmentsToSet(req);

            if (res.addAttachmentsToSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->