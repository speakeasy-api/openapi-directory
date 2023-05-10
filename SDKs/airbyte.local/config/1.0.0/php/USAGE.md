<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SaveStatsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttemptStats;
use \OpenAPI\OpenAPI\Models\Shared\AttemptStreamStats;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveStatsRequestBody();
    $request->attemptNumber = 548814;
    $request->jobId = 592845;
    $request->stats = new AttemptStats();
    $request->stats->bytesEmitted = 715190;
    $request->stats->estimatedBytes = 844266;
    $request->stats->estimatedRecords = 602763;
    $request->stats->recordsCommitted = 857946;
    $request->stats->recordsEmitted = 544883;
    $request->stats->stateMessagesEmitted = 847252;
    $request->streamStats = [
        new AttemptStreamStats(),
        new AttemptStreamStats(),
    ];

    $response = $sdk->attempt->saveStats($request);

    if ($response->internalOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->