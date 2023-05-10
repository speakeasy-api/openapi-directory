# SDK

## Overview

Amazon Kendra Intelligent Ranking uses Amazon Kendra semantic search capabilities to intelligently re-rank a search service's results.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kendra-ranking/>
### Available Operations

* [createRescoreExecutionPlan](#createrescoreexecutionplan) - <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
* [deleteRescoreExecutionPlan](#deleterescoreexecutionplan) - Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [describeRescoreExecutionPlan](#describerescoreexecutionplan) - Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listRescoreExecutionPlans](#listrescoreexecutionplans) - Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listTagsForResource](#listtagsforresource) - Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
* [rescore](#rescore) - Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
* [tagResource](#tagresource) - Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
* [untagResource](#untagresource) - Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
* [updateRescoreExecutionPlan](#updaterescoreexecutionplan) - Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

## createRescoreExecutionPlan

<p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityUnitsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest->capacityUnits = new CapacityUnitsConfiguration();
    $request->createRescoreExecutionPlanRequest->capacityUnits->rescoreCapacityUnits = 963663;
    $request->createRescoreExecutionPlanRequest->clientToken = 'tempora';
    $request->createRescoreExecutionPlanRequest->description = 'suscipit';
    $request->createRescoreExecutionPlanRequest->name = 'Alexandra Schulist';
    $request->createRescoreExecutionPlanRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_CREATE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->sdk->createRescoreExecutionPlan($request);

    if ($response->createRescoreExecutionPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRescoreExecutionPlan

Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRescoreExecutionPlanRequest();
    $request->deleteRescoreExecutionPlanRequest = new DeleteRescoreExecutionPlanRequest();
    $request->deleteRescoreExecutionPlanRequest->id = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = DeleteRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_DELETE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->sdk->deleteRescoreExecutionPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRescoreExecutionPlan

Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRescoreExecutionPlanRequest();
    $request->describeRescoreExecutionPlanRequest = new DescribeRescoreExecutionPlanRequest();
    $request->describeRescoreExecutionPlanRequest->id = '929396fe-a759-46eb-90fa-aa2352c59559';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_DESCRIBE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->sdk->describeRescoreExecutionPlan($request);

    if ($response->describeRescoreExecutionPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRescoreExecutionPlans

Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRescoreExecutionPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRescoreExecutionPlansRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRescoreExecutionPlansXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRescoreExecutionPlansRequest();
    $request->listRescoreExecutionPlansRequest = new ListRescoreExecutionPlansRequest();
    $request->listRescoreExecutionPlansRequest->maxResults = 208876;
    $request->listRescoreExecutionPlansRequest->nextToken = 'culpa';
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListRescoreExecutionPlansXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_LIST_RESCORE_EXECUTION_PLANS;

    $response = $sdk->sdk->listRescoreExecutionPlans($request);

    if ($response->listRescoreExecutionPlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rescore

Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RescoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\RescoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Operations\RescoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RescoreRequest();
    $request->rescoreRequest = new RescoreRequest();
    $request->rescoreRequest->documents = [
        new Document(),
        new Document(),
        new Document(),
        new Document(),
    ];
    $request->rescoreRequest->rescoreExecutionPlanId = 'sequi';
    $request->rescoreRequest->searchQuery = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = RescoreXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_RESCORE;

    $response = $sdk->sdk->rescore($request);

    if ($response->rescoreResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'laborum';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'omnis';
    $request->untagResourceRequest->tagKeys = [
        'cum',
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRescoreExecutionPlan

Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityUnitsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRescoreExecutionPlanRequest();
    $request->updateRescoreExecutionPlanRequest = new UpdateRescoreExecutionPlanRequest();
    $request->updateRescoreExecutionPlanRequest->capacityUnits = new CapacityUnitsConfiguration();
    $request->updateRescoreExecutionPlanRequest->capacityUnits->rescoreCapacityUnits = 480894;
    $request->updateRescoreExecutionPlanRequest->description = 'dicta';
    $request->updateRescoreExecutionPlanRequest->id = 'b5e6e13b-99d4-488e-9e91-e450ad2abd44';
    $request->updateRescoreExecutionPlanRequest->name = 'Beth McGlynn Sr.';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_UPDATE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->sdk->updateRescoreExecutionPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
