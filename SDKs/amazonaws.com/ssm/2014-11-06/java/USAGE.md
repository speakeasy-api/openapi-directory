<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToResourceHeaders;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.shared.AddTagsToResourceRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ResourceTypeForTaggingEnum;

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
                    xAmzTarget = "AmazonSSM.AddTagsToResource";
                }};
                request = new AddTagsToResourceRequest() {{
                    resourceId = "illum";
                    resourceType = "Parameter";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            AddTagsToResourceResponse res = sdk.addTagsToResource(req);

            if (res.addTagsToResourceResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->