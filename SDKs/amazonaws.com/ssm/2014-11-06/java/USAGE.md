<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceRequest;
import org.openapis.openapi.models.shared.ResourceTypeForTaggingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToResourceRequest req = new AddTagsToResourceRequest(                new AddTagsToResourceRequest("provident", ResourceTypeForTaggingEnum.OPS_METADATA,                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("corrupti", "illum") {{
                                                    key = "unde";
                                                    value = "nulla";
                                                }}),
                                                add(new Tag("deserunt", "suscipit") {{
                                                    key = "vel";
                                                    value = "error";
                                                }}),
                                                add(new Tag("debitis", "ipsa") {{
                                                    key = "iure";
                                                    value = "magnam";
                                                }}),
                                                add(new Tag("suscipit", "molestiae") {{
                                                    key = "delectus";
                                                    value = "tempora";
                                                }}),
                                            }});, AddTagsToResourceXAmzTargetEnum.AMAZON_SSM_ADD_TAGS_TO_RESOURCE) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AddTagsToResourceResponse res = sdk.addTagsToResource(req);

            if (res.addTagsToResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->