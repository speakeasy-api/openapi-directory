<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSlackChannelConfigurationRequest();
    $request->requestBody = new CreateSlackChannelConfigurationRequestBody();
    $request->requestBody->channelId = 'corrupti';
    $request->requestBody->channelName = 'provident';
    $request->requestBody->channelRoleArn = 'distinctio';
    $request->requestBody->notifyOnAddCorrespondenceToCase = false;
    $request->requestBody->notifyOnCaseSeverity = CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum::HIGH;
    $request->requestBody->notifyOnCreateOrReopenCase = false;
    $request->requestBody->notifyOnResolveCase = false;
    $request->requestBody->teamId = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->createSlackChannelConfiguration($request);

    if ($response->createSlackChannelConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->