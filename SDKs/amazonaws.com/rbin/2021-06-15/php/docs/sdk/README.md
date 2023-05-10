# SDK

## Overview

<p>This is the <i>Recycle Bin API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in Recycle Bin.</p> <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify.</p> <p>You can restore a resource from the Recycle Bin at any time before its retention period expires. After you restore a resource from the Recycle Bin, the resource is removed from the Recycle Bin, and you can then use it in the same way you use any other resource of that type in your account. If the retention period expires and the resource is not restored, the resource is permanently deleted from the Recycle Bin and is no longer available for recovery. For more information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html"> Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rbin/>
### Available Operations

* [createRule](#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [deleteRule](#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [getRule](#getrule) - Gets information about a Recycle Bin retention rule.
* [listRules](#listrules) - Lists the Recycle Bin retention rules in the Region.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to a retention rule.
* [lockRule](#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [tagResource](#tagresource) - Assigns tags to the specified retention rule.
* [unlockRule](#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [untagResource](#untagresource) - Unassigns a tag from a retention rule.
* [updateRule](#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

## createRule

Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

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
    $request->requestBody->description = 'magnam';
    $request->requestBody->lockConfiguration = new CreateRuleRequestBodyLockConfiguration();
    $request->requestBody->lockConfiguration->unlockDelay = new UnlockDelay();
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayUnit = UnlockDelayUnitEnum::DAYS;
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayValue = 891773;
    $request->requestBody->resourceTags = [
        new ResourceTag(),
    ];
    $request->requestBody->resourceType = CreateRuleRequestBodyResourceTypeEnum::EC2_IMAGE;
    $request->requestBody->retentionPeriod = new CreateRuleRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->retentionPeriodUnit = RetentionPeriodUnitEnum::DAYS;
    $request->requestBody->retentionPeriod->retentionPeriodValue = 272656;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->createRule($request);

    if ($response->createRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRule

Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->identifier = 'ipsam';

    $response = $sdk->sdk->deleteRule($request);

    if ($response->deleteRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRule

Gets information about a Recycle Bin retention rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRuleRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->identifier = 'molestiae';

    $response = $sdk->sdk->getRule($request);

    if ($response->getRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRules

Lists the Recycle Bin retention rules in the Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequestBodyLockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequestBodyResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRulesRequest();
    $request->maxResults = 'quod';
    $request->nextToken = 'quod';
    $request->requestBody = new ListRulesRequestBody();
    $request->requestBody->lockState = ListRulesRequestBodyLockStateEnum::PENDING_UNLOCK;
    $request->requestBody->maxResults = 520478;
    $request->requestBody->nextToken = 'porro';
    $request->requestBody->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->requestBody->resourceType = ListRulesRequestBodyResourceTypeEnum::EBS_SNAPSHOT;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->listRules($request);

    if ($response->listRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags assigned to a retention rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->resourceArn = 'cum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lockRule

Locks a retention rule. A locked retention rule can't be modified or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LockRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\LockRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LockRuleRequestBodyLockConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UnlockDelay;
use \OpenAPI\OpenAPI\Models\Shared\UnlockDelayUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LockRuleRequest();
    $request->requestBody = new LockRuleRequestBody();
    $request->requestBody->lockConfiguration = new LockRuleRequestBodyLockConfiguration();
    $request->requestBody->lockConfiguration->unlockDelay = new UnlockDelay();
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayUnit = UnlockDelayUnitEnum::DAYS;
    $request->requestBody->lockConfiguration->unlockDelay->unlockDelayValue = 456150;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->identifier = 'iste';

    $response = $sdk->sdk->lockRule($request);

    if ($response->lockRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns tags to the specified retention rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->resourceArn = 'iste';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlockRule

Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlockRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlockRuleRequest();
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->identifier = 'mollitia';

    $response = $sdk->sdk->unlockRule($request);

    if ($response->unlockRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Unassigns a tag from a retention rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'omnis';
    $request->tagKeys = [
        'minima',
        'excepturi',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRule

Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBodyResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\RetentionPeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRuleRequest();
    $request->requestBody = new UpdateRuleRequestBody();
    $request->requestBody->description = 'accusantium';
    $request->requestBody->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->requestBody->resourceType = UpdateRuleRequestBodyResourceTypeEnum::EC2_IMAGE;
    $request->requestBody->retentionPeriod = new UpdateRuleRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->retentionPeriodUnit = RetentionPeriodUnitEnum::DAYS;
    $request->requestBody->retentionPeriod->retentionPeriodValue = 988374;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->identifier = 'mollitia';

    $response = $sdk->sdk->updateRule($request);

    if ($response->updateRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
