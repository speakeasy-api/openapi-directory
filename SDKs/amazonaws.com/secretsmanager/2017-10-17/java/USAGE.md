<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelRotateSecretXAmzTargetEnum;
import org.openapis.openapi.models.operations.CancelRotateSecretHeaders;
import org.openapis.openapi.models.operations.CancelRotateSecretRequest;
import org.openapis.openapi.models.operations.CancelRotateSecretResponse;
import org.openapis.openapi.models.shared.CancelRotateSecretRequest;

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

            CancelRotateSecretRequest req = new CancelRotateSecretRequest() {{
                headers = new CancelRotateSecretHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "secretsmanager.CancelRotateSecret";
                }};
                request = new CancelRotateSecretRequest() {{
                    secretId = "illum";
                }};
            }};            

            CancelRotateSecretResponse res = sdk.cancelRotateSecret(req);

            if (res.cancelRotateSecretResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->