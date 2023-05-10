# SDK

## Overview

Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [claimDevicesByClaimCode](#claimdevicesbyclaimcode) - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).
* [describeDevice](#describedevice) - Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.
* [finalizeDeviceClaim](#finalizedeviceclaim) - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [getDeviceMethods](#getdevicemethods) - Given a device ID, returns the invokable methods associated with the device.
* [initiateDeviceClaim](#initiatedeviceclaim) - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [invokeDeviceMethod](#invokedevicemethod) - Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.
* [listDeviceEvents](#listdeviceevents) - Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.
* [listDevices](#listdevices) - Lists the 1-Click compatible devices associated with your AWS account.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with the specified resource ARN.
* [tagResource](#tagresource) - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.
* [unclaimDevice](#unclaimdevice) - Disassociates a device from your AWS account using its device ID.
* [untagResource](#untagresource) - Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.
* [updateDeviceState](#updatedevicestate) - Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

## claimDevicesByClaimCode

Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimDevicesByClaimCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimDevicesByClaimCodeRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->claimCode = 'ipsa';

    $response = $sdk->sdk->claimDevicesByClaimCode($request);

    if ($response->claimDevicesByClaimCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDevice

Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->deviceId = 'iusto';

    $response = $sdk->sdk->describeDevice($request);

    if ($response->describeDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## finalizeDeviceClaim

<p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FinalizeDeviceClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\FinalizeDeviceClaimRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FinalizeDeviceClaimRequest();
    $request->requestBody = new FinalizeDeviceClaimRequestBody();
    $request->requestBody->tags = [
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
        'quis' => 'veritatis',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->deviceId = 'at';

    $response = $sdk->sdk->finalizeDeviceClaim($request);

    if ($response->finalizeDeviceClaimResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceMethods

Given a device ID, returns the invokable methods associated with the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceMethodsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceMethodsRequest();
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->deviceId = 'porro';

    $response = $sdk->sdk->getDeviceMethods($request);

    if ($response->getDeviceMethodsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateDeviceClaim

<p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InitiateDeviceClaimRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiateDeviceClaimRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->deviceId = 'hic';

    $response = $sdk->sdk->initiateDeviceClaim($request);

    if ($response->initiateDeviceClaimResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invokeDeviceMethod

Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeDeviceMethodRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeDeviceMethodRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\InvokeDeviceMethodRequestBodyDeviceMethod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeDeviceMethodRequest();
    $request->requestBody = new InvokeDeviceMethodRequestBody();
    $request->requestBody->deviceMethod = new InvokeDeviceMethodRequestBodyDeviceMethod();
    $request->requestBody->deviceMethod->deviceType = 'optio';
    $request->requestBody->deviceMethod->methodName = 'totam';
    $request->requestBody->deviceMethodParameters = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->deviceId = 'ipsum';

    $response = $sdk->sdk->invokeDeviceMethod($request);

    if ($response->invokeDeviceMethodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceEvents

Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceEventsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->deviceId = 'dolor';
    $request->fromTimeStamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T20:42:46.563Z');
    $request->maxResults = 943749;
    $request->nextToken = 'saepe';
    $request->toTimeStamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T12:52:33.708Z');

    $response = $sdk->sdk->listDeviceEvents($request);

    if ($response->listDeviceEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevices

Lists the 1-Click compatible devices associated with your AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->deviceType = 'reiciendis';
    $request->maxResults = 666767;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags associated with the specified resource ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'omnis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->resourceArn = 'consequuntur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unclaimDevice

Disassociates a device from your AWS account using its device ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnclaimDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnclaimDeviceRequest();
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->deviceId = 'velit';

    $response = $sdk->sdk->unclaimDevice($request);

    if ($response->unclaimDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'odit';
    $request->tagKeys = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceState

Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceStateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceStateRequest();
    $request->requestBody = new UpdateDeviceStateRequestBody();
    $request->requestBody->enabled = false;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->deviceId = 'reiciendis';

    $response = $sdk->sdk->updateDeviceState($request);

    if ($response->updateDeviceStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
