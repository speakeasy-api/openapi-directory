<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SendSSHPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.operations.SendSSHPublicKeyHeaders;
import org.openapis.openapi.models.operations.SendSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.SendSSHPublicKeyResponse;
import org.openapis.openapi.models.shared.SendSSHPublicKeyRequest;

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

            SendSSHPublicKeyRequest req = new SendSSHPublicKeyRequest() {{
                headers = new SendSSHPublicKeyHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSEC2InstanceConnectService.SendSSHPublicKey";
                }};
                request = new SendSSHPublicKeyRequest() {{
                    availabilityZone = "illum";
                    instanceId = "vel";
                    instanceOSUser = "error";
                    sshPublicKey = "deserunt";
                }};
            }};            

            SendSSHPublicKeyResponse res = sdk.sendSSHPublicKey(req);

            if (res.sendSSHPublicKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->