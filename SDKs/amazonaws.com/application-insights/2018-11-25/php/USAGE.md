<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->autoConfigEnabled = false;
    $request->createApplicationRequest->autoCreate = false;
    $request->createApplicationRequest->cweMonitorEnabled = false;
    $request->createApplicationRequest->groupingType = GroupingTypeEnum::ACCOUNT_BASED;
    $request->createApplicationRequest->opsCenterEnabled = false;
    $request->createApplicationRequest->opsItemSNSTopicArn = 'corrupti';
    $request->createApplicationRequest->resourceGroupName = 'provident';
    $request->createApplicationRequest->tags = [
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
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_CREATE_APPLICATION;

    $response = $sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->