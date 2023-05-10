# SDK

## Overview

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudhsmv2/>
### Available Operations

* [copyBackupToRegion](#copybackuptoregion) - Copy an AWS CloudHSM cluster backup to a different region.
* [createCluster](#createcluster) - Creates a new AWS CloudHSM cluster.
* [createHsm](#createhsm) - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
* [deleteBackup](#deletebackup) - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
* [deleteCluster](#deletecluster) - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
* [deleteHsm](#deletehsm) - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
* [describeBackups](#describebackups) - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
* [describeClusters](#describeclusters) - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
* [initializeCluster](#initializecluster) - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
* [listTags](#listtags) - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
* [modifyBackupAttributes](#modifybackupattributes) - Modifies attributes for AWS CloudHSM backup.
* [modifyCluster](#modifycluster) - Modifies AWS CloudHSM cluster.
* [restoreBackup](#restorebackup) - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
* [tagResource](#tagresource) - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
* [untagResource](#untagresource) - Removes the specified tag or tags from the specified AWS CloudHSM cluster.

## copyBackupToRegion

Copy an AWS CloudHSM cluster backup to a different region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupToRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyBackupToRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CopyBackupToRegionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyBackupToRegionRequest();
    $request->copyBackupToRegionRequest = new CopyBackupToRegionRequest();
    $request->copyBackupToRegionRequest->backupId = 'deserunt';
    $request->copyBackupToRegionRequest->destinationRegion = 'suscipit';
    $request->copyBackupToRegionRequest->tagList = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CopyBackupToRegionXAmzTargetEnum::BALDR_API_SERVICE_COPY_BACKUP_TO_REGION;

    $response = $sdk->sdk->copyBackupToRegion($request);

    if ($response->copyBackupToRegionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCluster

Creates a new AWS CloudHSM cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->backupRetentionPolicy = new BackupRetentionPolicy();
    $request->createClusterRequest->backupRetentionPolicy->type = BackupRetentionTypeEnum::DAYS;
    $request->createClusterRequest->backupRetentionPolicy->value = 'minus';
    $request->createClusterRequest->hsmType = 'placeat';
    $request->createClusterRequest->sourceBackupId = 'voluptatum';
    $request->createClusterRequest->subnetIds = [
        'excepturi',
        'nisi',
    ];
    $request->createClusterRequest->tagList = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::BALDR_API_SERVICE_CREATE_CLUSTER;

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHsm

Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHsmRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHsmRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateHsmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHsmRequest();
    $request->createHsmRequest = new CreateHsmRequest();
    $request->createHsmRequest->availabilityZone = 'repellendus';
    $request->createHsmRequest->clusterId = 'sapiente';
    $request->createHsmRequest->ipAddress = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateHsmXAmzTargetEnum::BALDR_API_SERVICE_CREATE_HSM;

    $response = $sdk->sdk->createHsm($request);

    if ($response->createHsmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackup

Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBackupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackupRequest();
    $request->deleteBackupRequest = new DeleteBackupRequest();
    $request->deleteBackupRequest->backupId = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteBackupXAmzTargetEnum::BALDR_API_SERVICE_DELETE_BACKUP;

    $response = $sdk->sdk->deleteBackup($request);

    if ($response->deleteBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterRequest();
    $request->deleteClusterRequest = new DeleteClusterRequest();
    $request->deleteClusterRequest->clusterId = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DeleteClusterXAmzTargetEnum::BALDR_API_SERVICE_DELETE_CLUSTER;

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHsm

Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHsmRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHsmRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHsmXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHsmRequest();
    $request->deleteHsmRequest = new DeleteHsmRequest();
    $request->deleteHsmRequest->clusterId = 'modi';
    $request->deleteHsmRequest->eniId = 'qui';
    $request->deleteHsmRequest->eniIp = 'impedit';
    $request->deleteHsmRequest->hsmId = 'cum';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteHsmXAmzTargetEnum::BALDR_API_SERVICE_DELETE_HSM;

    $response = $sdk->sdk->deleteHsm($request);

    if ($response->deleteHsmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBackups

<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBackupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBackupsRequest();
    $request->describeBackupsRequest = new DescribeBackupsRequest();
    $request->describeBackupsRequest->filters = [
        'iste' => [
            'natus',
        ],
    ];
    $request->describeBackupsRequest->maxResults = 386489;
    $request->describeBackupsRequest->nextToken = 'hic';
    $request->describeBackupsRequest->sortAscending = false;
    $request->maxResults = 'saepe';
    $request->nextToken = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DescribeBackupsXAmzTargetEnum::BALDR_API_SERVICE_DESCRIBE_BACKUPS;

    $response = $sdk->sdk->describeBackups($request);

    if ($response->describeBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClusters

<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClustersRequest();
    $request->describeClustersRequest = new DescribeClustersRequest();
    $request->describeClustersRequest->filters = [
        'reiciendis' => [
            'mollitia',
            'laborum',
            'dolores',
        ],
    ];
    $request->describeClustersRequest->maxResults = 210382;
    $request->describeClustersRequest->nextToken = 'corporis';
    $request->maxResults = 'explicabo';
    $request->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeClustersXAmzTargetEnum::BALDR_API_SERVICE_DESCRIBE_CLUSTERS;

    $response = $sdk->sdk->describeClusters($request);

    if ($response->describeClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initializeCluster

Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InitializeClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\InitializeClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\InitializeClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitializeClusterRequest();
    $request->initializeClusterRequest = new InitializeClusterRequest();
    $request->initializeClusterRequest->clusterId = 'culpa';
    $request->initializeClusterRequest->signedCert = 'doloribus';
    $request->initializeClusterRequest->trustAnchor = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = InitializeClusterXAmzTargetEnum::BALDR_API_SERVICE_INITIALIZE_CLUSTER;

    $response = $sdk->sdk->initializeCluster($request);

    if ($response->initializeClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->listTagsRequest = new ListTagsRequest();
    $request->listTagsRequest->maxResults = 581850;
    $request->listTagsRequest->nextToken = 'numquam';
    $request->listTagsRequest->resourceId = 'commodi';
    $request->maxResults = 'quam';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::BALDR_API_SERVICE_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyBackupAttributes

Modifies attributes for AWS CloudHSM backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyBackupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyBackupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifyBackupAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyBackupAttributesRequest();
    $request->modifyBackupAttributesRequest = new ModifyBackupAttributesRequest();
    $request->modifyBackupAttributesRequest->backupId = 'enim';
    $request->modifyBackupAttributesRequest->neverExpires = false;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = ModifyBackupAttributesXAmzTargetEnum::BALDR_API_SERVICE_MODIFY_BACKUP_ATTRIBUTES;

    $response = $sdk->sdk->modifyBackupAttributes($request);

    if ($response->modifyBackupAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyCluster

Modifies AWS CloudHSM cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackupRetentionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyClusterRequest();
    $request->modifyClusterRequest = new ModifyClusterRequest();
    $request->modifyClusterRequest->backupRetentionPolicy = new BackupRetentionPolicy();
    $request->modifyClusterRequest->backupRetentionPolicy->type = BackupRetentionTypeEnum::DAYS;
    $request->modifyClusterRequest->backupRetentionPolicy->value = 'aut';
    $request->modifyClusterRequest->clusterId = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ModifyClusterXAmzTargetEnum::BALDR_API_SERVICE_MODIFY_CLUSTER;

    $response = $sdk->sdk->modifyCluster($request);

    if ($response->modifyClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreBackup

Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreBackupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreBackupRequest();
    $request->restoreBackupRequest = new RestoreBackupRequest();
    $request->restoreBackupRequest->backupId = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = RestoreBackupXAmzTargetEnum::BALDR_API_SERVICE_RESTORE_BACKUP;

    $response = $sdk->sdk->restoreBackup($request);

    if ($response->restoreBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.

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
    $request->tagResourceRequest->resourceId = 'doloremque';
    $request->tagResourceRequest->tagList = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::BALDR_API_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tag or tags from the specified AWS CloudHSM cluster.

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
    $request->untagResourceRequest->resourceId = 'harum';
    $request->untagResourceRequest->tagKeyList = [
        'accusamus',
        'commodi',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::BALDR_API_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
