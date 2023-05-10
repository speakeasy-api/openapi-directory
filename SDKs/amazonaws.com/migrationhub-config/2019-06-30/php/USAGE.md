<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest->dryRun = false;
    $request->createHomeRegionControlRequest->homeRegion = 'corrupti';
    $request->createHomeRegionControlRequest->target = new Target();
    $request->createHomeRegionControlRequest->target->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->createHomeRegionControlRequest->target->type = TargetTypeEnum::ACCOUNT;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateHomeRegionControlXAmzTargetEnum::AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL;

    $response = $sdk->createHomeRegionControl($request);

    if ($response->createHomeRegionControlResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->