<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToStreamRequest;
import org.openapis.openapi.models.operations.AddTagsToStreamResponse;
import org.openapis.openapi.models.shared.AddTagsToStreamInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToStreamRequest req = new AddTagsToStreamRequest() {{
                addTagsToStreamInput = new AddTagsToStreamInput() {{
                    streamARN = "corrupti";
                    streamName = "provident";
                    tags = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "Kinesis_20131202.AddTagsToStream";
            }}            

            AddTagsToStreamResponse res = sdk.addTagsToStream(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->