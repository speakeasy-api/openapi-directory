<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateKmsKeyXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateKmsKeyHeaders;
import org.openapis.openapi.models.operations.AssociateKmsKeyRequest;
import org.openapis.openapi.models.operations.AssociateKmsKeyResponse;
import org.openapis.openapi.models.shared.AssociateKmsKeyRequest;

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

            AssociateKmsKeyRequest req = new AssociateKmsKeyRequest() {{
                headers = new AssociateKmsKeyHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Logs_20140328.AssociateKmsKey";
                }};
                request = new AssociateKmsKeyRequest() {{
                    kmsKeyId = "illum";
                    logGroupName = "vel";
                }};
            }};            

            AssociateKmsKeyResponse res = sdk.associateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->