<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptHandshakeXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptHandshakeRequest;
import org.openapis.openapi.models.operations.AcceptHandshakeResponse;
import org.openapis.openapi.models.shared.AcceptHandshakeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptHandshakeRequest req = new AcceptHandshakeRequest() {{
                acceptHandshakeRequest = new AcceptHandshakeRequest() {{
                    handshakeId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AWSOrganizationsV20161128.AcceptHandshake";
            }}            

            AcceptHandshakeResponse res = sdk.acceptHandshake(req);

            if (res.acceptHandshakeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->