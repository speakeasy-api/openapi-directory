<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\DeviceAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevicePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDevicePoolRequest();
    $request->createDevicePoolRequest = new CreateDevicePoolRequest();
    $request->createDevicePoolRequest->description = 'corrupti';
    $request->createDevicePoolRequest->maxDevices = 592845;
    $request->createDevicePoolRequest->name = 'Ellis Mitchell';
    $request->createDevicePoolRequest->projectArn = 'illum';
    $request->createDevicePoolRequest->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CreateDevicePoolXAmzTargetEnum::DEVICE_FARM20150623_CREATE_DEVICE_POOL;

    $response = $sdk->createDevicePool($request);

    if ($response->createDevicePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->