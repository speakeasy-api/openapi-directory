<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddLayerVersionPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddLayerVersionPermissionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddLayerVersionPermissionRequest();
    $request->layerName = 'corrupti';
    $request->requestBody = new AddLayerVersionPermissionRequestBody();
    $request->requestBody->action = 'provident';
    $request->requestBody->organizationId = 'distinctio';
    $request->requestBody->principal = 'quibusdam';
    $request->requestBody->statementId = 'unde';
    $request->revisionId = 'nulla';
    $request->versionNumber = 544883;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->addLayerVersionPermission($request);

    if ($response->addLayerVersionPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->