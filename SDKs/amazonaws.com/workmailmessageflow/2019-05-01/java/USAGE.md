<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRawMessageContentPathParams;
import org.openapis.openapi.models.operations.GetRawMessageContentHeaders;
import org.openapis.openapi.models.operations.GetRawMessageContentRequest;
import org.openapis.openapi.models.operations.GetRawMessageContentResponse;

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

            GetRawMessageContentRequest req = new GetRawMessageContentRequest() {{
                pathParams = new GetRawMessageContentPathParams() {{
                    messageId = "corrupti";
                }};
                headers = new GetRawMessageContentHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            GetRawMessageContentResponse res = sdk.getRawMessageContent(req);

            if (res.getRawMessageContentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->