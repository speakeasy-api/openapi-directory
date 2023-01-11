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

            BatchGetChannelRequest req = new BatchGetChannelRequest() {{
                headers = new BatchGetChannelHeaders() {{
                    xAmzAlgorithm = "debitis";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "animi";
                    xAmzDate = "distinctio";
                    xAmzSecurityToken = "hic";
                    xAmzSignature = "mollitia";
                    xAmzSignedHeaders = "qui";
                }};
                request = new BatchGetChannelRequestBody() {{
                    arns = new String[]() {{
                        add("labore"),
                    }};
                }};
            }};

            BatchGetChannelResponse res = sdk.batchGetChannel(req);

            if (res.batchGetChannelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->