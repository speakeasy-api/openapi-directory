<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPermissionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddPermissionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddPermissionRequest();
    $request->awsAccountIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->accountNumber = 602763;
    $request->action = GETAddPermissionActionEnum::ADD_PERMISSION;
    $request->actions = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->label = 'deserunt';
    $request->queueName = 'suscipit';
    $request->version = GETAddPermissionVersionEnum::TWO_THOUSAND_AND_TWELVE1105;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->getAddPermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->