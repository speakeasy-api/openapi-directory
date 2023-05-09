<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsRequest;
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

            AddTagsRequest req = new AddTagsRequest(                new AddTagsRequest("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("nulla") {{
                                                    key = "quibusdam";
                                                    value = "unde";
                                                }}),
                                                add(new Tag("vel") {{
                                                    key = "corrupti";
                                                    value = "illum";
                                                }}),
                                                add(new Tag("suscipit") {{
                                                    key = "error";
                                                    value = "deserunt";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_ADD_TAGS) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            AddTagsResponse res = sdk.addTags(req);

            if (res.addTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->