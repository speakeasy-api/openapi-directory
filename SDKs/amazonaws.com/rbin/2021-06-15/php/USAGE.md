<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBodyLockConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UnlockDelay;
use \OpenAPI\OpenAPI\Models\Shared\UnlockDelayUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBodyResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\RetentionPeriodUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRuleRequest();
    $request->requestBody = new CreateRuleRequestBody();
    $request->requestBody->description = 'corrupti';
    $request->requestBody->lockConfiguration = new CreateRuleRequestBodyLockConfiguration();
    $request->requestBody->lockConfiguration->unlockDelay = new UnlockDelay();
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayUnit = UnlockDelayUnitEnum::DAYS;
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayValue = 592845;
    $request->requestBody->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->requestBody->resourceType = CreateRuleRequestBodyResourceTypeEnum::EC2_IMAGE;
    $request->requestBody->retentionPeriod = new CreateRuleRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->retentionPeriodUnit = RetentionPeriodUnitEnum::DAYS;
    $request->requestBody->retentionPeriod->retentionPeriodValue = 602763;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->createRule($request);

    if ($response->createRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->