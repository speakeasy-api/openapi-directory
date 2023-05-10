<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RegionMapInputValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationSetRequest();
    $request->requestBody = new CreateReplicationSetRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->regions = [
        'distinctio' => new RegionMapInputValue(),
        'quibusdam' => new RegionMapInputValue(),
        'unde' => new RegionMapInputValue(),
    ];
    $request->requestBody->tags = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->createReplicationSet($request);

    if ($response->createReplicationSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->