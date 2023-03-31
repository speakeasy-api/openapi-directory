<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.JoinStorageSessionHeaders;
import org.openapis.openapi.models.operations.JoinStorageSessionRequestBody;
import org.openapis.openapi.models.operations.JoinStorageSessionRequest;
import org.openapis.openapi.models.operations.JoinStorageSessionResponse;

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

            JoinStorageSessionRequest req = new JoinStorageSessionRequest() {{
                headers = new JoinStorageSessionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new JoinStorageSessionRequestBody() {{
                    channelArn = "illum";
                }};
            }};            

            JoinStorageSessionResponse res = sdk.joinStorageSession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->