<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlertManagerDefinitionRequest();
    $request->requestBody = new CreateAlertManagerDefinitionRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->data = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->workspaceId = 'error';

    $response = $sdk->createAlertManagerDefinition($request);

    if ($response->createAlertManagerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->