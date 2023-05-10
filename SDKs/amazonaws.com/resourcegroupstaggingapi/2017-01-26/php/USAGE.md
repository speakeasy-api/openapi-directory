<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportCreationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReportCreationRequest();
    $request->requestBody = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DescribeReportCreationXAmzTargetEnum::RESOURCE_GROUPS_TAGGING_API20170126_DESCRIBE_REPORT_CREATION;

    $response = $sdk->describeReportCreation($request);

    if ($response->describeReportCreationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->