<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToStreamHeaders;
import org.openapis.openapi.models.operations.AddTagsToStreamRequest;
import org.openapis.openapi.models.operations.AddTagsToStreamResponse;
import org.openapis.openapi.models.shared.AddTagsToStreamInput;

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

            AddTagsToStreamRequest req = new AddTagsToStreamRequest() {{
                headers = new AddTagsToStreamHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Kinesis_20131202.AddTagsToStream";
                }};
                request = new AddTagsToStreamInput() {{
                    streamARN = "illum";
                    streamName = "vel";
                    tags = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                }};
            }};            

            AddTagsToStreamResponse res = sdk.addTagsToStream(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->