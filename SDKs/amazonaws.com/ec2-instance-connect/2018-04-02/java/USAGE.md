<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SendSSHPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.operations.SendSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.SendSSHPublicKeyResponse;
import org.openapis.openapi.models.shared.SendSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendSSHPublicKeyRequest req = new SendSSHPublicKeyRequest() {{
                sendSSHPublicKeyRequest = new SendSSHPublicKeyRequest() {{
                    availabilityZone = "corrupti";
                    instanceId = "provident";
                    instanceOSUser = "distinctio";
                    sshPublicKey = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "AWSEC2InstanceConnectService.SendSSHPublicKey";
            }}            

            SendSSHPublicKeyResponse res = sdk.sendSSHPublicKey(req);

            if (res.sendSSHPublicKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->