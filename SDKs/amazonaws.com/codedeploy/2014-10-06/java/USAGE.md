<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesResponse;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToOnPremisesInstancesInput;
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

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest(                new AddTagsToOnPremisesInstancesInput(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }},                 new org.openapis.openapi.models.shared.Tag[]{{
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
                                                add(new Tag() {{
                                                    key = "iure";
                                                    value = "magnam";
                                                }}),
                                            }});, AddTagsToOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            AddTagsToOnPremisesInstancesResponse res = sdk.addTagsToOnPremisesInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->