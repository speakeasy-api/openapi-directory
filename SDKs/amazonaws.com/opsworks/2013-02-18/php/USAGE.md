<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignInstanceRequest();
    $request->assignInstanceRequest = new AssignInstanceRequest();
    $request->assignInstanceRequest->instanceId = 'corrupti';
    $request->assignInstanceRequest->layerIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = AssignInstanceXAmzTargetEnum::OPS_WORKS20130218_ASSIGN_INSTANCE;

    $response = $sdk->assignInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->