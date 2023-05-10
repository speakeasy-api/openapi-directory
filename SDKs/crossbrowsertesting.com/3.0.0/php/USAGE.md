<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest();
    $request->baseVersionId = 548814;
    $request->callback = 'provident';
    $request->format = 'distinctio';
    $request->targetScreenshotTestId = 844266;
    $request->targetVersionId = 602763;
    $request->tolerance = 8579.46;

    $requestSecurity = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId($request, $requestSecurity);

    if ($response->singleComparisonTests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->