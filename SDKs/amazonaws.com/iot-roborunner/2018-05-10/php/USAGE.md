<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDestinationRequest();
    $request->requestBody = new CreateDestinationRequestBody();
    $request->requestBody->additionalFixedProperties = 'corrupti';
    $request->requestBody->clientToken = 'provident';
    $request->requestBody->name = 'Ellis Mitchell';
    $request->requestBody->site = 'illum';
    $request->requestBody->state = CreateDestinationRequestBodyStateEnum::DISABLED;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->createDestination($request);

    if ($response->createDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->