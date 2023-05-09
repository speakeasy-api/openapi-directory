<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateGatewayToServerRequest;
import org.openapis.openapi.models.operations.AssociateGatewayToServerResponse;
import org.openapis.openapi.models.operations.AssociateGatewayToServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateGatewayToServerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateGatewayToServerRequest req = new AssociateGatewayToServerRequest(                new AssociateGatewayToServerInput("provident", "distinctio");, AssociateGatewayToServerXAmzTargetEnum.BACKUP_ON_PREMISES_V20210101_ASSOCIATE_GATEWAY_TO_SERVER) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateGatewayToServerResponse res = sdk.associateGatewayToServer(req);

            if (res.associateGatewayToServerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->