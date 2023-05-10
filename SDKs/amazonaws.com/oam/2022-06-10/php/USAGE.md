<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLinkRequest();
    $request->requestBody = new CreateLinkRequestBody();
    $request->requestBody->labelTemplate = 'corrupti';
    $request->requestBody->resourceTypes = [
        ResourceTypeEnum::AWSX_RAY_TRACE,
        ResourceTypeEnum::AWSX_RAY_TRACE,
        ResourceTypeEnum::AWS_LOGS_LOG_GROUP,
    ];
    $request->requestBody->sinkIdentifier = 'nulla';
    $request->requestBody->tags = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->createLink($request);

    if ($response->createLinkOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->