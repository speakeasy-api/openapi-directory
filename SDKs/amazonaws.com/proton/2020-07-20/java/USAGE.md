<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptEnvironmentAccountConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptEnvironmentAccountConnectionRequest req = new AcceptEnvironmentAccountConnectionRequest(                new AcceptEnvironmentAccountConnectionInput("provident");, AcceptEnvironmentAccountConnectionXAmzTargetEnum.AWS_PROTON20200720_ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcceptEnvironmentAccountConnectionResponse res = sdk.acceptEnvironmentAccountConnection(req);

            if (res.acceptEnvironmentAccountConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->