<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachInstancesRequest();
    $request->action = GETAttachInstancesActionEnum::ATTACH_INSTANCES;
    $request->autoScalingGroupName = 'corrupti';
    $request->instanceIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->version = GETAttachInstancesVersionEnum::TWO_THOUSAND_AND_ELEVEN0101;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->getAttachInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->