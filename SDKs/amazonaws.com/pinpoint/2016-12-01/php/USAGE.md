<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBodyCreateApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->requestBody = new CreateAppRequestBody();
    $request->requestBody->createApplicationRequest = new CreateAppRequestBodyCreateApplicationRequest();
    $request->requestBody->createApplicationRequest->name = 'Terrence Rau';
    $request->requestBody->createApplicationRequest->tags = [
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

    $response = $sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->