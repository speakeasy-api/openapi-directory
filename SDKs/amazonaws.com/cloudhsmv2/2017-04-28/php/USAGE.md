<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupToRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyBackupToRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupToRegionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyBackupToRegionRequest();
    $request->copyBackupToRegionRequest = new CopyBackupToRegionRequest();
    $request->copyBackupToRegionRequest->backupId = 'corrupti';
    $request->copyBackupToRegionRequest->destinationRegion = 'provident';
    $request->copyBackupToRegionRequest->tagList = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CopyBackupToRegionXAmzTargetEnum::BALDR_API_SERVICE_COPY_BACKUP_TO_REGION;

    $response = $sdk->copyBackupToRegion($request);

    if ($response->copyBackupToRegionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->