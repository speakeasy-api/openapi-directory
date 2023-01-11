<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AddTagsToStreamRequest req = new AddTagsToStreamRequest() {{
                headers = new AddTagsToStreamHeaders() {{
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "magni";
                    xAmzCredential = "architecto";
                    xAmzDate = "est";
                    xAmzSecurityToken = "consectetur";
                    xAmzSignature = "dolores";
                    xAmzSignedHeaders = "in";
                    xAmzTarget = "Kinesis_20131202.AddTagsToStream";
                }};
                request = new AddTagsToStreamInput() {{
                    streamName = "possimus";
                    tags = new java.util.HashMap<String, String>() {{
                        put("animi", "nesciunt");
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