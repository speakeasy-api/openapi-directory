<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToStreamRequest;
import org.openapis.openapi.models.operations.AddTagsToStreamResponse;
import org.openapis.openapi.models.operations.AddTagsToStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToStreamRequest req = new AddTagsToStreamRequest(                new AddTagsToStreamInput(                new java.util.HashMap<String, String>() {{
                                                put("distinctio", "quibusdam");
                                                put("unde", "nulla");
                                                put("corrupti", "illum");
                                            }}) {{
                                streamARN = "vel";
                                streamName = "error";
                            }};, AddTagsToStreamXAmzTargetEnum.KINESIS20131202_ADD_TAGS_TO_STREAM) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
            }};            

            AddTagsToStreamResponse res = sdk.addTagsToStream(req);

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