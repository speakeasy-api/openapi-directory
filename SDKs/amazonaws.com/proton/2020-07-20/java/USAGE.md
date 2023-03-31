<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionHeaders;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionRequest;
import org.openapis.openapi.models.operations.AcceptEnvironmentAccountConnectionResponse;
import org.openapis.openapi.models.shared.AcceptEnvironmentAccountConnectionInput;

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

            AcceptEnvironmentAccountConnectionRequest req = new AcceptEnvironmentAccountConnectionRequest() {{
                headers = new AcceptEnvironmentAccountConnectionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AwsProton20200720.AcceptEnvironmentAccountConnection";
                }};
                request = new AcceptEnvironmentAccountConnectionInput() {{
                    id = "illum";
                }};
            }};            

            AcceptEnvironmentAccountConnectionResponse res = sdk.acceptEnvironmentAccountConnection(req);

            if (res.acceptEnvironmentAccountConnectionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->