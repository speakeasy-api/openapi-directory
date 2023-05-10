# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createLifecyclePolicy](docs/sdk/README.md#createlifecyclepolicy) - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* [deleteLifecyclePolicy](docs/sdk/README.md#deletelifecyclepolicy) - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* [getLifecyclePolicies](docs/sdk/README.md#getlifecyclepolicies) - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* [getLifecyclePolicy](docs/sdk/README.md#getlifecyclepolicy) - Gets detailed information about the specified lifecycle policy.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateLifecyclePolicy](docs/sdk/README.md#updatelifecyclepolicy) - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
