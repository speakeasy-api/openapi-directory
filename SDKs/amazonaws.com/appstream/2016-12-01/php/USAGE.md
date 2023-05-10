<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApplicationFleetRequest();
    $request->associateApplicationFleetRequest = new AssociateApplicationFleetRequest();
    $request->associateApplicationFleetRequest->applicationArn = 'corrupti';
    $request->associateApplicationFleetRequest->fleetName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateApplicationFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_FLEET;

    $response = $sdk->associateApplicationFleet($request);

    if ($response->associateApplicationFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->