# SDK

## Overview

Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/ec2-instance-connect/>
### Available Operations

* [sendSSHPublicKey](#sendsshpublickey) - Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.
* [sendSerialConsoleSSHPublicKey](#sendserialconsolesshpublickey) - Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

## sendSSHPublicKey

Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.SendSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.SendSSHPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendSSHPublicKeyRequest req = new SendSSHPublicKeyRequest(                new SendSSHPublicKeyRequest("magnam", "debitis", "ipsa") {{
                                availabilityZone = "delectus";
                            }};, SendSSHPublicKeyXAmzTargetEnum.AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            SendSSHPublicKeyResponse res = sdk.sdk.sendSSHPublicKey(req);

            if (res.sendSSHPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendSerialConsoleSSHPublicKey

Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendSerialConsoleSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.SendSerialConsoleSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.SendSerialConsoleSSHPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendSerialConsoleSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendSerialConsoleSSHPublicKeyRequest req = new SendSerialConsoleSSHPublicKeyRequest(                new SendSerialConsoleSSHPublicKeyRequest("nisi", "recusandae") {{
                                serialPort = 836079L;
                            }};, SendSerialConsoleSSHPublicKeyXAmzTargetEnum.AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SERIAL_CONSOLE_SSH_PUBLIC_KEY) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            SendSerialConsoleSSHPublicKeyResponse res = sdk.sdk.sendSerialConsoleSSHPublicKey(req);

            if (res.sendSerialConsoleSSHPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
