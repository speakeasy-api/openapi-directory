<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLifecyclePolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLifecyclePolicyRequestBodyPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\CrossRegionCopyAction;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrossRegionCopyRetainRule;
use \OpenAPI\OpenAPI\Models\Shared\RetentionIntervalUnitValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventSource;
use \OpenAPI\OpenAPI\Models\Shared\EventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventSourceValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Parameters;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTypeValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLocationValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveRule;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveRetainRule;
use \OpenAPI\OpenAPI\Models\Shared\RetentionArchiveTier;
use \OpenAPI\OpenAPI\Models\Shared\CreateRule;
use \OpenAPI\OpenAPI\Models\Shared\IntervalUnitValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CrossRegionCopyRule;
use \OpenAPI\OpenAPI\Models\Shared\CrossRegionCopyDeprecateRule;
use \OpenAPI\OpenAPI\Models\Shared\DeprecateRule;
use \OpenAPI\OpenAPI\Models\Shared\FastRestoreRule;
use \OpenAPI\OpenAPI\Models\Shared\RetainRule;
use \OpenAPI\OpenAPI\Models\Shared\ShareRule;
use \OpenAPI\OpenAPI\Models\Operations\CreateLifecyclePolicyRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLifecyclePolicyRequest();
    $request->requestBody = new CreateLifecyclePolicyRequestBody();
    $request->requestBody->description = 'corrupti';
    $request->requestBody->executionRoleArn = 'provident';
    $request->requestBody->policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails();
    $request->requestBody->policyDetails->actions = [
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->requestBody->policyDetails->eventSource = new EventSource();
    $request->requestBody->policyDetails->eventSource->parameters = new EventParameters();
    $request->requestBody->policyDetails->eventSource->parameters->descriptionRegex = 'quibusdam';
    $request->requestBody->policyDetails->eventSource->parameters->eventType = EventTypeValuesEnum::SHARE_SNAPSHOT;
    $request->requestBody->policyDetails->eventSource->parameters->snapshotOwner = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->requestBody->policyDetails->eventSource->type = EventSourceValuesEnum::MANAGED_CWE;
    $request->requestBody->policyDetails->parameters = new Parameters();
    $request->requestBody->policyDetails->parameters->excludeBootVolume = false;
    $request->requestBody->policyDetails->parameters->excludeDataVolumeTags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->policyDetails->parameters->noReboot = false;
    $request->requestBody->policyDetails->policyType = PolicyTypeValuesEnum::IMAGE_MANAGEMENT;
    $request->requestBody->policyDetails->resourceLocations = [
        ResourceLocationValuesEnum::CLOUD,
        ResourceLocationValuesEnum::CLOUD,
        ResourceLocationValuesEnum::CLOUD,
    ];
    $request->requestBody->policyDetails->resourceTypes = [
        ResourceTypeValuesEnum::VOLUME,
        ResourceTypeValuesEnum::INSTANCE,
        ResourceTypeValuesEnum::VOLUME,
        ResourceTypeValuesEnum::VOLUME,
    ];
    $request->requestBody->policyDetails->schedules = [
        new Schedule(),
        new Schedule(),
    ];
    $request->requestBody->policyDetails->targetTags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->state = CreateLifecyclePolicyRequestBodyStateEnum::DISABLED;
    $request->requestBody->tags = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->createLifecyclePolicy($request);

    if ($response->createLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->