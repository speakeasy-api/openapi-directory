<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetChannelHeaders;
import org.openapis.openapi.models.operations.BatchGetChannelRequestBody;
import org.openapis.openapi.models.operations.BatchGetChannelRequest;
import org.openapis.openapi.models.operations.BatchGetChannelResponse;

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

            BatchGetChannelRequest req = new BatchGetChannelRequest() {{
                headers = new BatchGetChannelHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchGetChannelRequestBody() {{
                    arns = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
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