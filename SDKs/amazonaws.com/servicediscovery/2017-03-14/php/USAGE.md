<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateHttpNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHttpNamespaceRequest();
    $request->createHttpNamespaceRequest = new CreateHttpNamespaceRequest();
    $request->createHttpNamespaceRequest->creatorRequestId = 'corrupti';
    $request->createHttpNamespaceRequest->description = 'provident';
    $request->createHttpNamespaceRequest->name = 'Ellis Mitchell';
    $request->createHttpNamespaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = CreateHttpNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_CREATE_HTTP_NAMESPACE;

    $response = $sdk->createHttpNamespace($request);

    if ($response->createHttpNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->