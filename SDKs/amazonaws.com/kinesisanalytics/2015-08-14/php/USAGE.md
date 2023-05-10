<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOption;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationCloudWatchLoggingOptionRequest();
    $request->addApplicationCloudWatchLoggingOptionRequest = new AddApplicationCloudWatchLoggingOptionRequest();
    $request->addApplicationCloudWatchLoggingOptionRequest->applicationName = 'corrupti';
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption = new CloudWatchLoggingOption();
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption->logStreamARN = 'provident';
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption->roleARN = 'distinctio';
    $request->addApplicationCloudWatchLoggingOptionRequest->currentApplicationVersionId = 844266;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AddApplicationCloudWatchLoggingOptionXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION;

    $response = $sdk->addApplicationCloudWatchLoggingOption($request);

    if ($response->addApplicationCloudWatchLoggingOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->