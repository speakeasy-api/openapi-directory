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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSSupport_20130415.AddAttachmentsToSet";
                }};
                request = new AddAttachmentsToSetRequest() {{
                    attachmentSetId = "fugit";
                    attachments = new openapisdk.models.shared.Attachment[]() {{
                        add(new Attachment() {{
                            data = "nihil";
                            fileName = "rerum";
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