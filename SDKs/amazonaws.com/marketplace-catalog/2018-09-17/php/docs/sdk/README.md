# SDK

## Overview

<p>Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace. </p> <p>You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [cancelChangeSet](#cancelchangeset) - Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource-based policy on an Entity that is identified by its resource ARN.
* [describeChangeSet](#describechangeset) - Provides information about a given change set.
* [describeEntity](#describeentity) - Returns the metadata and content of the entity.
* [getResourcePolicy](#getresourcepolicy) - Gets a resource-based policy of an Entity that is identified by its resource ARN.
* [listChangeSets](#listchangesets) - <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
* [listEntities](#listentities) - Provides the list of entities of a given type.
* [listTagsForResource](#listtagsforresource) - Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [putResourcePolicy](#putresourcepolicy) - Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.
* [startChangeSet](#startchangeset) - <p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
* [tagResource](#tagresource) - Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
* [untagResource](#untagresource) - Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

## cancelChangeSet

Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelChangeSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelChangeSetRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->catalog = 'delectus';
    $request->changeSetId = 'tempora';

    $response = $sdk->sdk->cancelChangeSet($request);

    if ($response->cancelChangeSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a resource-based policy on an Entity that is identified by its resource ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->resourceArn = 'nisi';

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeChangeSet

Provides information about a given change set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeChangeSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeChangeSetRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->catalog = 'ipsam';
    $request->changeSetId = 'repellendus';

    $response = $sdk->sdk->describeChangeSet($request);

    if ($response->describeChangeSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEntity

Returns the metadata and content of the entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntityRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->catalog = 'quod';
    $request->entityId = 'quod';

    $response = $sdk->sdk->describeEntity($request);

    if ($response->describeEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

Gets a resource-based policy of an Entity that is identified by its resource ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->resourceArn = 'occaecati';

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChangeSets

<p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListChangeSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChangeSetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListChangeSetsRequestBodySort;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChangeSetsRequest();
    $request->maxResults = 'fugit';
    $request->nextToken = 'deleniti';
    $request->requestBody = new ListChangeSetsRequestBody();
    $request->requestBody->catalog = 'hic';
    $request->requestBody->filterList = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 521848;
    $request->requestBody->nextToken = 'beatae';
    $request->requestBody->sort = new ListChangeSetsRequestBodySort();
    $request->requestBody->sort->sortBy = 'commodi';
    $request->requestBody->sort->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->listChangeSets($request);

    if ($response->listChangeSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntities

Provides the list of entities of a given type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequestBodyOwnershipTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequestBodySort;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntitiesRequest();
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'perferendis';
    $request->requestBody = new ListEntitiesRequestBody();
    $request->requestBody->catalog = 'ad';
    $request->requestBody->entityType = 'natus';
    $request->requestBody->filterList = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 612096;
    $request->requestBody->nextToken = 'dolor';
    $request->requestBody->ownershipType = ListEntitiesRequestBodyOwnershipTypeEnum::SHARED;
    $request->requestBody->sort = new ListEntitiesRequestBodySort();
    $request->requestBody->sort->sortBy = 'laboriosam';
    $request->requestBody->sort->sortOrder = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->listEntities($request);

    if ($response->listEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->resourceArn = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->requestBody = new PutResourcePolicyRequestBody();
    $request->requestBody->policy = 'dolorem';
    $request->requestBody->resourceArn = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startChangeSet

<p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartChangeSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartChangeSetRequest();
    $request->requestBody = new StartChangeSetRequestBody();
    $request->requestBody->catalog = 'accusantium';
    $request->requestBody->changeSet = [
        new Change(),
        new Change(),
    ];
    $request->requestBody->changeSetName = 'culpa';
    $request->requestBody->changeSetTags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->clientRequestToken = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->startChangeSet($request);

    if ($response->startChangeSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

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
    $request->requestBody->resourceArn = 'occaecati';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'vitae';
    $request->requestBody->tagKeys = [
        'animi',
        'enim',
        'odit',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
