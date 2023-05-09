# SDK

## Overview

Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/ec2-instance-connect/>
### Available Operations

* [SendSSHPublicKey](#sendsshpublickey) - Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.
* [SendSerialConsoleSSHPublicKey](#sendserialconsolesshpublickey) - Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

## SendSSHPublicKey

Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SendSSHPublicKey(ctx, operations.SendSSHPublicKeyRequest{
        SendSSHPublicKeyRequest: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: sdk.String("suscipit"),
            InstanceID: "iure",
            InstanceOSUser: "magnam",
            SSHPublicKey: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.SendSSHPublicKeyXAmzTargetEnumAwsec2InstanceConnectServiceSendSSHPublicKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendSSHPublicKeyResponse != nil {
        // handle response
    }
}
```

## SendSerialConsoleSSHPublicKey

Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SendSerialConsoleSSHPublicKey(ctx, operations.SendSerialConsoleSSHPublicKeyRequest{
        SendSerialConsoleSSHPublicKeyRequest: shared.SendSerialConsoleSSHPublicKeyRequest{
            InstanceID: "voluptatum",
            SSHPublicKey: "iusto",
            SerialPort: sdk.Int64(568045),
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.SendSerialConsoleSSHPublicKeyXAmzTargetEnumAwsec2InstanceConnectServiceSendSerialConsoleSSHPublicKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendSerialConsoleSSHPublicKeyResponse != nil {
        // handle response
    }
}
```
