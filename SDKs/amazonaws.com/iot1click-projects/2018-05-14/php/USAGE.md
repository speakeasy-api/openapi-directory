<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDeviceWithPlacementRequest();
    $request->requestBody = new AssociateDeviceWithPlacementRequestBody();
    $request->requestBody->deviceId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->deviceTemplateName = 'vel';
    $request->placementName = 'error';
    $request->projectName = 'deserunt';

    $response = $sdk->associateDeviceWithPlacement($request);

    if ($response->associateDeviceWithPlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->