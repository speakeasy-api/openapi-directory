<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateGatewayToServerXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateGatewayToServerRequest;
import org.openapis.openapi.models.operations.AssociateGatewayToServerResponse;
import org.openapis.openapi.models.shared.AssociateGatewayToServerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateGatewayToServerRequest req = new AssociateGatewayToServerRequest() {{
                associateGatewayToServerInput = new AssociateGatewayToServerInput() {{
                    gatewayArn = "corrupti";
                    serverArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "BackupOnPremises_v20210101.AssociateGatewayToServer";
            }}            

            AssociateGatewayToServerResponse res = sdk.associateGatewayToServer(req);

            if (res.associateGatewayToServerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->