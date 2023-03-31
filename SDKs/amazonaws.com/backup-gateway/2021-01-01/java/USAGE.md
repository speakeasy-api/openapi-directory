<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateGatewayToServerXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateGatewayToServerHeaders;
import org.openapis.openapi.models.operations.AssociateGatewayToServerRequest;
import org.openapis.openapi.models.operations.AssociateGatewayToServerResponse;
import org.openapis.openapi.models.shared.AssociateGatewayToServerInput;

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

            AssociateGatewayToServerRequest req = new AssociateGatewayToServerRequest() {{
                headers = new AssociateGatewayToServerHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "BackupOnPremises_v20210101.AssociateGatewayToServer";
                }};
                request = new AssociateGatewayToServerInput() {{
                    gatewayArn = "illum";
                    serverArn = "vel";
                }};
            }};            

            AssociateGatewayToServerResponse res = sdk.associateGatewayToServer(req);

            if (res.associateGatewayToServerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->