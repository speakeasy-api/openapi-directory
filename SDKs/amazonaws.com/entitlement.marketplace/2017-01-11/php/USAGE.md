<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitlementsRequest();
    $request->getEntitlementsRequest = new GetEntitlementsRequest();
    $request->getEntitlementsRequest->filter = [
        'provident' => [
            'quibusdam',
            'unde',
            'nulla',
        ],
        'corrupti' => [
            'vel',
            'error',
            'deserunt',
            'suscipit',
        ],
        'iure' => [
            'debitis',
            'ipsa',
        ],
    ];
    $request->getEntitlementsRequest->maxResults = 963663;
    $request->getEntitlementsRequest->nextToken = 'tempora';
    $request->getEntitlementsRequest->productCode = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = GetEntitlementsXAmzTargetEnum::AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS;

    $response = $sdk->getEntitlements($request);

    if ($response->getEntitlementsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->