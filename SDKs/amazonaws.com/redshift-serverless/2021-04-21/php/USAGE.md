<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRecoveryPointToSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConvertRecoveryPointToSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRecoveryPointToSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRecoveryPointToSnapshotRequest();
    $request->convertRecoveryPointToSnapshotRequest = new ConvertRecoveryPointToSnapshotRequest();
    $request->convertRecoveryPointToSnapshotRequest->recoveryPointId = 'corrupti';
    $request->convertRecoveryPointToSnapshotRequest->retentionPeriod = 592845;
    $request->convertRecoveryPointToSnapshotRequest->snapshotName = 'distinctio';
    $request->convertRecoveryPointToSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ConvertRecoveryPointToSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_CONVERT_RECOVERY_POINT_TO_SNAPSHOT;

    $response = $sdk->convertRecoveryPointToSnapshot($request);

    if ($response->convertRecoveryPointToSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->