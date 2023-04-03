<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelRotateSecretXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelRotateSecretRequest;
import org.openapis.openapi.models.operations.CancelRotateSecretResponse;
import org.openapis.openapi.models.shared.CancelRotateSecretRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelRotateSecretRequest req = new CancelRotateSecretRequest() {{
                cancelRotateSecretRequest = new CancelRotateSecretRequest() {{
                    secretId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "secretsmanager.CancelRotateSecret";
            }}            

            CancelRotateSecretResponse res = sdk.cancelRotateSecret(req);

            if (res.cancelRotateSecretResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->