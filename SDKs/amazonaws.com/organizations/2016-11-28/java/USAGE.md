<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptHandshakeXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptHandshakeHeaders;
import org.openapis.openapi.models.operations.AcceptHandshakeRequest;
import org.openapis.openapi.models.operations.AcceptHandshakeResponse;
import org.openapis.openapi.models.shared.AcceptHandshakeRequest;

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

            AcceptHandshakeRequest req = new AcceptHandshakeRequest() {{
                headers = new AcceptHandshakeHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSOrganizationsV20161128.AcceptHandshake";
                }};
                request = new AcceptHandshakeRequest() {{
                    handshakeId = "illum";
                }};
            }};            

            AcceptHandshakeResponse res = sdk.acceptHandshake(req);

            if (res.acceptHandshakeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->