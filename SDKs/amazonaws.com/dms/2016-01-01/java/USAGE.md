<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToResourceHeaders;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.shared.AddTagsToResourceMessage;
import org.openapis.openapi.models.shared.Tag;

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

            AddTagsToResourceRequest req = new AddTagsToResourceRequest() {{
                headers = new AddTagsToResourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonDMSv20160101.AddTagsToResource";
                }};
                request = new AddTagsToResourceMessage() {{
                    resourceArn = "illum";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "error";
                            resourceArn = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            resourceArn = "magnam";
                            value = "debitis";
                        }}),
                    }};
                }};
            }};            

            AddTagsToResourceResponse res = sdk.addTagsToResource(req);

            if (res.addTagsToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->