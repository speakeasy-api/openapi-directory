<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMeshRequest();
    $request->requestBody = new CreateMeshRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->meshName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->createMesh($request);

    if ($response->createMeshOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->