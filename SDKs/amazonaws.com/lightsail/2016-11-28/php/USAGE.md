<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocateStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocateStaticIpRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllocateStaticIpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocateStaticIpRequest();
    $request->allocateStaticIpRequest = new AllocateStaticIpRequest();
    $request->allocateStaticIpRequest->staticIpName = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AllocateStaticIpXAmzTargetEnum::LIGHTSAIL20161128_ALLOCATE_STATIC_IP;

    $response = $sdk->allocateStaticIp($request);

    if ($response->allocateStaticIpResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->