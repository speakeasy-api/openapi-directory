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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendSSHPublicKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendSSHPublicKeyRequest();
    $request->sendSSHPublicKeyRequest = new SendSSHPublicKeyRequest();
    $request->sendSSHPublicKeyRequest->availabilityZone = 'suscipit';
    $request->sendSSHPublicKeyRequest->instanceId = 'iure';
    $request->sendSSHPublicKeyRequest->instanceOSUser = 'magnam';
    $request->sendSSHPublicKeyRequest->sshPublicKey = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = SendSSHPublicKeyXAmzTargetEnum::AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY;

    $response = $sdk->sdk->sendSSHPublicKey($request);

    if ($response->sendSSHPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendSerialConsoleSSHPublicKey

Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendSerialConsoleSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendSerialConsoleSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendSerialConsoleSSHPublicKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendSerialConsoleSSHPublicKeyRequest();
    $request->sendSerialConsoleSSHPublicKeyRequest = new SendSerialConsoleSSHPublicKeyRequest();
    $request->sendSerialConsoleSSHPublicKeyRequest->instanceId = 'voluptatum';
    $request->sendSerialConsoleSSHPublicKeyRequest->sshPublicKey = 'iusto';
    $request->sendSerialConsoleSSHPublicKeyRequest->serialPort = 568045;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = SendSerialConsoleSSHPublicKeyXAmzTargetEnum::AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SERIAL_CONSOLE_SSH_PUBLIC_KEY;

    $response = $sdk->sdk->sendSerialConsoleSSHPublicKey($request);

    if ($response->sendSerialConsoleSSHPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
