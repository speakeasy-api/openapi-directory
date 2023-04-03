<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.shared.AcceptEnvironmentAccountConnectionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptEnvironmentAccountConnectionRequest req = new AcceptEnvironmentAccountConnectionRequest() {{
                acceptEnvironmentAccountConnectionInput = new AcceptEnvironmentAccountConnectionInput() {{
                    id = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AwsProton20200720.AcceptEnvironmentAccountConnection";
            }}            

            AcceptEnvironmentAccountConnectionResponse res = sdk.acceptEnvironmentAccountConnection(req);

            if (res.acceptEnvironmentAccountConnectionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->