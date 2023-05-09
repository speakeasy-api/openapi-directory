<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceRequest;
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

            AddTagsToResourceRequest req = new AddTagsToResourceRequest(                new AddTagsToResourceRequest("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("nulla", "corrupti") {{
                                                    key = "quibusdam";
                                                    value = "unde";
                                                }}),
                                                add(new Tag("error", "deserunt") {{
                                                    key = "illum";
                                                    value = "vel";
                                                }}),
                                                add(new Tag("magnam", "debitis") {{
                                                    key = "suscipit";
                                                    value = "iure";
                                                }}),
                                            }});, AddTagsToResourceXAmzTargetEnum.CLOUD_HSM_FRONTEND_SERVICE_ADD_TAGS_TO_RESOURCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AddTagsToResourceResponse res = sdk.addTagsToResource(req);

            if (res.addTagsToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->