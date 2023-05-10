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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createRule](docs/sdk/README.md#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [deleteRule](docs/sdk/README.md#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [getRule](docs/sdk/README.md#getrule) - Gets information about a Recycle Bin retention rule.
* [listRules](docs/sdk/README.md#listrules) - Lists the Recycle Bin retention rules in the Region.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to a retention rule.
* [lockRule](docs/sdk/README.md#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns tags to the specified retention rule.
* [unlockRule](docs/sdk/README.md#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [untagResource](docs/sdk/README.md#untagresource) - Unassigns a tag from a retention rule.
* [updateRule](docs/sdk/README.md#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
