# SDK

## Overview

<fullname>Amazon Data Lifecycle Manager</fullname> <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources.</p> <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"> Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dlm/>
### Available Operations

* [createLifecyclePolicy](#createlifecyclepolicy) - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* [deleteLifecyclePolicy](#deletelifecyclepolicy) - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* [getLifecyclePolicies](#getlifecyclepolicies) - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* [getLifecyclePolicy](#getlifecyclepolicy) - Gets detailed information about the specified lifecycle policy.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateLifecyclePolicy](#updatelifecyclepolicy) - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

## createLifecyclePolicy

Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.

### Example Usage

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
    $request->requestBody->description = 'quo';
    $request->requestBody->executionRoleArn = 'odit';
    $request->requestBody->policyDetails = new CreateLifecyclePolicyRequestBodyPolicyDetails();
    $request->requestBody->policyDetails->actions = [
        new Action(),
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->requestBody->policyDetails->eventSource = new EventSource();
    $request->requestBody->policyDetails->eventSource->parameters = new EventParameters();
    $request->requestBody->policyDetails->eventSource->parameters->descriptionRegex = 'at';
    $request->requestBody->policyDetails->eventSource->parameters->eventType = EventTypeValuesEnum::SHARE_SNAPSHOT;
    $request->requestBody->policyDetails->eventSource->parameters->snapshotOwner = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->requestBody->policyDetails->eventSource->type = EventSourceValuesEnum::MANAGED_CWE;
    $request->requestBody->policyDetails->parameters = new Parameters();
    $request->requestBody->policyDetails->parameters->excludeBootVolume = false;
    $request->requestBody->policyDetails->parameters->excludeDataVolumeTags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->policyDetails->parameters->noReboot = false;
    $request->requestBody->policyDetails->policyType = PolicyTypeValuesEnum::EVENT_BASED_POLICY;
    $request->requestBody->policyDetails->resourceLocations = [
        ResourceLocationValuesEnum::CLOUD,
        ResourceLocationValuesEnum::OUTPOST,
        ResourceLocationValuesEnum::OUTPOST,
    ];
    $request->requestBody->policyDetails->resourceTypes = [
        ResourceTypeValuesEnum::VOLUME,
        ResourceTypeValuesEnum::INSTANCE,
        ResourceTypeValuesEnum::INSTANCE,
    ];
    $request->requestBody->policyDetails->schedules = [
        new Schedule(),
        new Schedule(),
        new Schedule(),
        new Schedule(),
    ];
    $request->requestBody->policyDetails->targetTags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->state = CreateLifecyclePolicyRequestBodyStateEnum::ENABLED;
    $request->requestBody->tags = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createLifecyclePolicy($request);

    if ($response->createLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLifecyclePolicy

<p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLifecyclePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLifecyclePolicyRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->policyId = 'saepe';

    $response = $sdk->sdk->deleteLifecyclePolicy($request);

    if ($response->deleteLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLifecyclePolicies

<p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeValuesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePoliciesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLifecyclePoliciesRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->policyIds = [
        'ipsa',
    ];
    $request->resourceTypes = [
        ResourceTypeValuesEnum::INSTANCE,
        ResourceTypeValuesEnum::INSTANCE,
        ResourceTypeValuesEnum::INSTANCE,
        ResourceTypeValuesEnum::VOLUME,
    ];
    $request->state = GetLifecyclePoliciesStateEnum::ENABLED;
    $request->tagsToAdd = [
        'explicabo',
        'nobis',
    ];
    $request->targetTags = [
        'omnis',
        'nemo',
    ];

    $response = $sdk->sdk->getLifecyclePolicies($request);

    if ($response->getLifecyclePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLifecyclePolicy

Gets detailed information about the specified lifecycle policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLifecyclePolicyRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->policyId = 'architecto';

    $response = $sdk->sdk->getLifecyclePolicy($request);

    if ($response->getLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->resourceArn = 'numquam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->resourceArn = 'quo';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified resource.

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
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->resourceArn = 'error';
    $request->tagKeys = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLifecyclePolicy

<p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLifecyclePolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLifecyclePolicyRequestBodyPolicyDetails;
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateLifecyclePolicyRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLifecyclePolicyRequest();
    $request->requestBody = new UpdateLifecyclePolicyRequestBody();
    $request->requestBody->description = 'vero';
    $request->requestBody->executionRoleArn = 'nihil';
    $request->requestBody->policyDetails = new UpdateLifecyclePolicyRequestBodyPolicyDetails();
    $request->requestBody->policyDetails->actions = [
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->requestBody->policyDetails->eventSource = new EventSource();
    $request->requestBody->policyDetails->eventSource->parameters = new EventParameters();
    $request->requestBody->policyDetails->eventSource->parameters->descriptionRegex = 'voluptatibus';
    $request->requestBody->policyDetails->eventSource->parameters->eventType = EventTypeValuesEnum::SHARE_SNAPSHOT;
    $request->requestBody->policyDetails->eventSource->parameters->snapshotOwner = [
        'omnis',
    ];
    $request->requestBody->policyDetails->eventSource->type = EventSourceValuesEnum::MANAGED_CWE;
    $request->requestBody->policyDetails->parameters = new Parameters();
    $request->requestBody->policyDetails->parameters->excludeBootVolume = false;
    $request->requestBody->policyDetails->parameters->excludeDataVolumeTags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->policyDetails->parameters->noReboot = false;
    $request->requestBody->policyDetails->policyType = PolicyTypeValuesEnum::EVENT_BASED_POLICY;
    $request->requestBody->policyDetails->resourceLocations = [
        ResourceLocationValuesEnum::CLOUD,
    ];
    $request->requestBody->policyDetails->resourceTypes = [
        ResourceTypeValuesEnum::VOLUME,
        ResourceTypeValuesEnum::INSTANCE,
    ];
    $request->requestBody->policyDetails->schedules = [
        new Schedule(),
    ];
    $request->requestBody->policyDetails->targetTags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->state = UpdateLifecyclePolicyRequestBodyStateEnum::ENABLED;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->policyId = 'quae';

    $response = $sdk->sdk->updateLifecyclePolicy($request);

    if ($response->updateLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
