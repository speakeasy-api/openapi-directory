<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaggableResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsRequest req = new AddTagsRequest(                new AddTagsInput("provident", TaggableResourceTypeEnum.EVALUATION,                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "unde";
                                                    value = "nulla";
                                                }}),
                                                add(new Tag() {{
                                                    key = "corrupti";
                                                    value = "illum";
                                                }}),
                                                add(new Tag() {{
                                                    key = "vel";
                                                    value = "error";
                                                }}),
                                                add(new Tag() {{
                                                    key = "deserunt";
                                                    value = "suscipit";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.AMAZON_ML20141212_ADD_TAGS) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            AddTagsResponse res = sdk.addTags(req);

            if (res.addTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->