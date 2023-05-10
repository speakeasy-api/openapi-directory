<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchMeterUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchMeterUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecord;
use \OpenAPI\OpenAPI\Models\Shared\UsageAllocation;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\BatchMeterUsageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchMeterUsageRequest();
    $request->batchMeterUsageRequest = new BatchMeterUsageRequest();
    $request->batchMeterUsageRequest->productCode = 'corrupti';
    $request->batchMeterUsageRequest->usageRecords = [
        new UsageRecord(),
        new UsageRecord(),
        new UsageRecord(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = BatchMeterUsageXAmzTargetEnum::AWSMP_METERING_SERVICE_BATCH_METER_USAGE;

    $response = $sdk->batchMeterUsage($request);

    if ($response->batchMeterUsageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->