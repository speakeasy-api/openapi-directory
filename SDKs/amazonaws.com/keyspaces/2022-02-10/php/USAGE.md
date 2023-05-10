<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKeyspaceRequest();
    $request->createKeyspaceRequest = new CreateKeyspaceRequest();
    $request->createKeyspaceRequest->keyspaceName = 'corrupti';
    $request->createKeyspaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = CreateKeyspaceXAmzTargetEnum::KEYSPACES_SERVICE_CREATE_KEYSPACE;

    $response = $sdk->createKeyspace($request);

    if ($response->createKeyspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->