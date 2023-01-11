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

            AddAttachmentsToSetRequest req = new AddAttachmentsToSetRequest() {{
                headers = new AddAttachmentsToSetHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "deleniti";
                    xAmzDate = "eos";
                    xAmzSecurityToken = "error";
                    xAmzSignature = "illo";
                    xAmzSignedHeaders = "veniam";
                    xAmzTarget = "AWSSupport_20130415.AddAttachmentsToSet";
                }};
                request = new AddAttachmentsToSetRequest() {{
                    attachmentSetId = "fugit";
                    attachments = new openapisdk.models.shared.Attachment[]() {{
                        add(new Attachment() {{
                            data = "aut";
                            fileName = "modi";
                        }}),
                        add(new Attachment() {{
                            data = "ex";
                            fileName = "voluptatibus";
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