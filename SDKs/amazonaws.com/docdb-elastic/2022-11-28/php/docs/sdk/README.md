# SDK

## Overview

The new Amazon Elastic DocumentDB service endpoint.

Amazon Web Services documentation
<https://docs.aws.amazon.com/docdb-elastic/>
### Available Operations

* [createCluster](#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [createClusterSnapshot](#createclustersnapshot) - Creates a snapshot of a cluster.
* [deleteCluster](#deletecluster) - Delete a Elastic DocumentDB cluster.
* [deleteClusterSnapshot](#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [getCluster](#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [getClusterSnapshot](#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [listClusterSnapshots](#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [listClusters](#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [listTagsForResource](#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [restoreClusterFromSnapshot](#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [tagResource](#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [untagResource](#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [updateCluster](#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

## createCluster

Creates a new Elastic DocumentDB cluster and returns its Cluster structure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->requestBody = new CreateClusterRequestBody();
    $request->requestBody->adminUserName = 'ab';
    $request->requestBody->adminUserPassword = 'quis';
    $request->requestBody->authType = CreateClusterRequestBodyAuthTypeEnum::PLAIN_TEXT;
    $request->requestBody->clientToken = 'deserunt';
    $request->requestBody->clusterName = 'perferendis';
    $request->requestBody->kmsKeyId = 'ipsam';
    $request->requestBody->preferredMaintenanceWindow = 'repellendus';
    $request->requestBody->shardCapacity = 957156;
    $request->requestBody->shardCount = 778157;
    $request->requestBody->subnetIds = [
        'at',
    ];
    $request->requestBody->tags = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->requestBody->vpcSecurityGroupIds = [
        'nam',
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createClusterSnapshot

Creates a snapshot of a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterSnapshotRequest();
    $request->requestBody = new CreateClusterSnapshotRequestBody();
    $request->requestBody->clusterArn = 'beatae';
    $request->requestBody->snapshotName = 'commodi';
    $request->requestBody->tags = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->createClusterSnapshot($request);

    if ($response->createClusterSnapshotOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

Delete a Elastic DocumentDB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->clusterArn = 'fuga';

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClusterSnapshot

Delete a Elastic DocumentDB snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterSnapshotRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->snapshotArn = 'ipsa';

    $response = $sdk->sdk->deleteClusterSnapshot($request);

    if ($response->deleteClusterSnapshotOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCluster

Returns information about a specific Elastic DocumentDB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->clusterArn = 'explicabo';

    $response = $sdk->sdk->getCluster($request);

    if ($response->getClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterSnapshot

Returns information about a specific Elastic DocumentDB snapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterSnapshotRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->snapshotArn = 'iure';

    $response = $sdk->sdk->getClusterSnapshot($request);

    if ($response->getClusterSnapshotOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusterSnapshots

Returns information about Elastic DocumentDB snapshots for a specified cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClusterSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClusterSnapshotsRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->clusterArn = 'consequuntur';
    $request->maxResults = 995300;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listClusterSnapshots($request);

    if ($response->listClusterSnapshotsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Returns information about provisioned Elastic DocumentDB clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->maxResults = 158969;
    $request->nextToken = 'quis';

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags on a Elastic DocumentDB resource

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
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->resourceArn = 'tenetur';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreClusterFromSnapshot

Restores a Elastic DocumentDB cluster from a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreClusterFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreClusterFromSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreClusterFromSnapshotRequest();
    $request->requestBody = new RestoreClusterFromSnapshotRequestBody();
    $request->requestBody->clusterName = 'ipsam';
    $request->requestBody->kmsKeyId = 'id';
    $request->requestBody->subnetIds = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->requestBody->tags = [
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
    ];
    $request->requestBody->vpcSecurityGroupIds = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->snapshotArn = 'dolore';

    $response = $sdk->sdk->restoreClusterFromSnapshot($request);

    if ($response->restoreClusterFromSnapshotOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds metadata tags to a Elastic DocumentDB resource

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
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->resourceArn = 'pariatur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes metadata tags to a Elastic DocumentDB resource

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
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->resourceArn = 'veritatis';
    $request->tagKeys = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->requestBody = new UpdateClusterRequestBody();
    $request->requestBody->adminUserPassword = 'quibusdam';
    $request->requestBody->authType = UpdateClusterRequestBodyAuthTypeEnum::PLAIN_TEXT;
    $request->requestBody->clientToken = 'deserunt';
    $request->requestBody->preferredMaintenanceWindow = 'distinctio';
    $request->requestBody->shardCapacity = 841386;
    $request->requestBody->shardCount = 289406;
    $request->requestBody->subnetIds = [
        'qui',
        'aliquid',
    ];
    $request->requestBody->vpcSecurityGroupIds = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->clusterArn = 'facilis';

    $response = $sdk->sdk->updateCluster($request);

    if ($response->updateClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
