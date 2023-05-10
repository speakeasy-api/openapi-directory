# SDK

## Overview

MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures. MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.

Amazon Web Services documentation
<https://docs.aws.amazon.com/memory-db/>
### Available Operations

* [batchUpdateCluster](#batchupdatecluster) - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* [copySnapshot](#copysnapshot) - Makes a copy of an existing snapshot.
* [createACL](#createacl) - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [createCluster](#createcluster) - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* [createParameterGroup](#createparametergroup) - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* [createSnapshot](#createsnapshot) - Creates a copy of an entire cluster at a specific moment in time.
* [createSubnetGroup](#createsubnetgroup) - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* [createUser](#createuser) - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteACL](#deleteacl) - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteCluster](#deletecluster) - Deletes a cluster. It also deletes all associated nodes and node endpoints
* [deleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* [deleteSnapshot](#deletesnapshot) - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* [deleteSubnetGroup](#deletesubnetgroup) - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* [deleteUser](#deleteuser) - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* [describeACLs](#describeacls) - Returns a list of ACLs
* [describeClusters](#describeclusters) - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* [describeEngineVersions](#describeengineversions) - Returns a list of the available Redis engine versions.
* [describeEvents](#describeevents) - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* [describeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* [describeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeReservedNodes](#describereservednodes) - Returns information about reserved nodes for this account, or about a specified reserved node.
* [describeReservedNodesOfferings](#describereservednodesofferings) - Lists available reserved node offerings.
* [describeServiceUpdates](#describeserviceupdates) - Returns details of the service updates
* [describeSnapshots](#describesnapshots) - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* [describeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* [describeUsers](#describeusers) - Returns a list of users.
* [failoverShard](#failovershard) - Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 
* [listAllowedNodeTypeUpdates](#listallowednodetypeupdates) - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* [listTags](#listtags) - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* [purchaseReservedNodesOffering](#purchasereservednodesoffering) - Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
* [resetParameterGroup](#resetparametergroup) - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* [tagResource](#tagresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* [untagResource](#untagresource) - Use this operation to remove tags on a resource
* [updateACL](#updateacl) - Changes the list of users that belong to the Access Control List.
* [updateCluster](#updatecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* [updateParameterGroup](#updateparametergroup) - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](#updatesubnetgroup) - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* [updateUser](#updateuser) - Changes user password(s) and/or access string.

## batchUpdateCluster

Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateClusterRequest();
    $request->batchUpdateClusterRequest = new BatchUpdateClusterRequest();
    $request->batchUpdateClusterRequest->clusterNames = [
        'magnam',
        'debitis',
    ];
    $request->batchUpdateClusterRequest->serviceUpdate = new ServiceUpdateRequest();
    $request->batchUpdateClusterRequest->serviceUpdate->serviceUpdateNameToApply = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = BatchUpdateClusterXAmzTargetEnum::AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER;

    $response = $sdk->sdk->batchUpdateCluster($request);

    if ($response->batchUpdateClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copySnapshot

Makes a copy of an existing snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopySnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopySnapshotRequest();
    $request->copySnapshotRequest = new CopySnapshotRequest();
    $request->copySnapshotRequest->kmsKeyId = 'iusto';
    $request->copySnapshotRequest->sourceSnapshotName = 'excepturi';
    $request->copySnapshotRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->copySnapshotRequest->targetBucket = 'recusandae';
    $request->copySnapshotRequest->targetSnapshotName = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = CopySnapshotXAmzTargetEnum::AMAZON_MEMORY_DB_COPY_SNAPSHOT;

    $response = $sdk->sdk->copySnapshot($request);

    if ($response->copySnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createACL

Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateACLRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateACLRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateACLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateACLRequest();
    $request->createACLRequest = new CreateACLRequest();
    $request->createACLRequest->aclName = 'sapiente';
    $request->createACLRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createACLRequest->userNames = [
        'at',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreateACLXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_ACL;

    $response = $sdk->sdk->createACL($request);

    if ($response->createACLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCluster

Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->aclName = 'porro';
    $request->createClusterRequest->autoMinorVersionUpgrade = false;
    $request->createClusterRequest->clusterName = 'dolorum';
    $request->createClusterRequest->dataTiering = false;
    $request->createClusterRequest->description = 'dicta';
    $request->createClusterRequest->engineVersion = 'nam';
    $request->createClusterRequest->kmsKeyId = 'officia';
    $request->createClusterRequest->maintenanceWindow = 'occaecati';
    $request->createClusterRequest->nodeType = 'fugit';
    $request->createClusterRequest->numReplicasPerShard = 537373;
    $request->createClusterRequest->numShards = 944669;
    $request->createClusterRequest->parameterGroupName = 'optio';
    $request->createClusterRequest->port = 521848;
    $request->createClusterRequest->securityGroupIds = [
        'commodi',
    ];
    $request->createClusterRequest->snapshotArns = [
        'modi',
        'qui',
    ];
    $request->createClusterRequest->snapshotName = 'impedit';
    $request->createClusterRequest->snapshotRetentionLimit = 736918;
    $request->createClusterRequest->snapshotWindow = 'esse';
    $request->createClusterRequest->snsTopicArn = 'ipsum';
    $request->createClusterRequest->subnetGroupName = 'excepturi';
    $request->createClusterRequest->tlsEnabled = false;
    $request->createClusterRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_CLUSTER;

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createParameterGroup

Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateParameterGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParameterGroupRequest();
    $request->createParameterGroupRequest = new CreateParameterGroupRequest();
    $request->createParameterGroupRequest->description = 'laboriosam';
    $request->createParameterGroupRequest->family = 'hic';
    $request->createParameterGroupRequest->parameterGroupName = 'saepe';
    $request->createParameterGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateParameterGroupXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_PARAMETER_GROUP;

    $response = $sdk->sdk->createParameterGroup($request);

    if ($response->createParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshot

Creates a copy of an entire cluster at a specific moment in time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotRequest();
    $request->createSnapshotRequest = new CreateSnapshotRequest();
    $request->createSnapshotRequest->clusterName = 'ipsa';
    $request->createSnapshotRequest->kmsKeyId = 'reiciendis';
    $request->createSnapshotRequest->snapshotName = 'est';
    $request->createSnapshotRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateSnapshotXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_SNAPSHOT;

    $response = $sdk->sdk->createSnapshot($request);

    if ($response->createSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubnetGroup

Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubnetGroupRequest();
    $request->createSubnetGroupRequest = new CreateSubnetGroupRequest();
    $request->createSubnetGroupRequest->description = 'omnis';
    $request->createSubnetGroupRequest->subnetGroupName = 'nemo';
    $request->createSubnetGroupRequest->subnetIds = [
        'excepturi',
        'accusantium',
    ];
    $request->createSubnetGroupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = CreateSubnetGroupXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_SUBNET_GROUP;

    $response = $sdk->sdk->createSubnetGroup($request);

    if ($response->createSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationMode;
use \OpenAPI\OpenAPI\Models\Shared\InputAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->createUserRequest = new CreateUserRequest();
    $request->createUserRequest->accessString = 'consequuntur';
    $request->createUserRequest->authenticationMode = new AuthenticationMode();
    $request->createUserRequest->authenticationMode->passwords = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->createUserRequest->authenticationMode->type = InputAuthenticationTypeEnum::PASSWORD;
    $request->createUserRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createUserRequest->userName = 'Jarred.Frami';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CreateUserXAmzTargetEnum::AMAZON_MEMORY_DB_CREATE_USER;

    $response = $sdk->sdk->createUser($request);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteACL

Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteACLRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteACLRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteACLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteACLRequest();
    $request->deleteACLRequest = new DeleteACLRequest();
    $request->deleteACLRequest->aclName = 'sequi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = DeleteACLXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_ACL;

    $response = $sdk->sdk->deleteACL($request);

    if ($response->deleteACLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

Deletes a cluster. It also deletes all associated nodes and node endpoints

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
    $request->deleteClusterRequest->clusterName = 'temporibus';
    $request->deleteClusterRequest->finalSnapshotName = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteClusterXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_CLUSTER;

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParameterGroup

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParameterGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParameterGroupRequest();
    $request->deleteParameterGroupRequest = new DeleteParameterGroupRequest();
    $request->deleteParameterGroupRequest->parameterGroupName = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DeleteParameterGroupXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_PARAMETER_GROUP;

    $response = $sdk->sdk->deleteParameterGroup($request);

    if ($response->deleteParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshot

Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest->snapshotName = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteSnapshotXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_SNAPSHOT;

    $response = $sdk->sdk->deleteSnapshot($request);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubnetGroup

Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubnetGroupRequest();
    $request->deleteSubnetGroupRequest = new DeleteSubnetGroupRequest();
    $request->deleteSubnetGroupRequest->subnetGroupName = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteSubnetGroupXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_SUBNET_GROUP;

    $response = $sdk->sdk->deleteSubnetGroup($request);

    if ($response->deleteSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->userName = 'Samantha_Gleason';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::AMAZON_MEMORY_DB_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->deleteUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeACLs

Returns a list of ACLs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeACLsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeACLsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeACLsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeACLsRequest();
    $request->describeACLsRequest = new DescribeACLsRequest();
    $request->describeACLsRequest->aclName = 'enim';
    $request->describeACLsRequest->maxResults = 9356;
    $request->describeACLsRequest->nextToken = 'est';
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DescribeACLsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_AC_LS;

    $response = $sdk->sdk->describeACLs($request);

    if ($response->describeACLsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClusters

Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.

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
    $request->describeClustersRequest->clusterName = 'cupiditate';
    $request->describeClustersRequest->maxResults = 552822;
    $request->describeClustersRequest->nextToken = 'perferendis';
    $request->describeClustersRequest->showShardDetails = false;
    $request->maxResults = 'magni';
    $request->nextToken = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DescribeClustersXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_CLUSTERS;

    $response = $sdk->sdk->describeClusters($request);

    if ($response->describeClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEngineVersions

Returns a list of the available Redis engine versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEngineVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEngineVersionsRequest();
    $request->describeEngineVersionsRequest = new DescribeEngineVersionsRequest();
    $request->describeEngineVersionsRequest->defaultOnly = false;
    $request->describeEngineVersionsRequest->engineVersion = 'tempore';
    $request->describeEngineVersionsRequest->maxResults = 288476;
    $request->describeEngineVersionsRequest->nextToken = 'delectus';
    $request->describeEngineVersionsRequest->parameterGroupFamily = 'eum';
    $request->maxResults = 'non';
    $request->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeEngineVersionsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_ENGINE_VERSIONS;

    $response = $sdk->sdk->describeEngineVersions($request);

    if ($response->describeEngineVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEvents

Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventsRequest();
    $request->describeEventsRequest = new DescribeEventsRequest();
    $request->describeEventsRequest->duration = 891555;
    $request->describeEventsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-17T08:08:22.040Z');
    $request->describeEventsRequest->maxResults = 447125;
    $request->describeEventsRequest->nextToken = 'in';
    $request->describeEventsRequest->sourceName = 'illum';
    $request->describeEventsRequest->sourceType = SourceTypeEnum::ACL;
    $request->describeEventsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T04:08:32.252Z');
    $request->maxResults = 'magnam';
    $request->nextToken = 'cumque';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DescribeEventsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_EVENTS;

    $response = $sdk->sdk->describeEvents($request);

    if ($response->describeEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeParameterGroups

Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParameterGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeParameterGroupsRequest();
    $request->describeParameterGroupsRequest = new DescribeParameterGroupsRequest();
    $request->describeParameterGroupsRequest->maxResults = 313218;
    $request->describeParameterGroupsRequest->nextToken = 'accusamus';
    $request->describeParameterGroupsRequest->parameterGroupName = 'delectus';
    $request->maxResults = 'quidem';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = DescribeParameterGroupsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_PARAMETER_GROUPS;

    $response = $sdk->sdk->describeParameterGroups($request);

    if ($response->describeParameterGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeParameters

Returns the detailed parameter list for a particular parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeParametersRequest();
    $request->describeParametersRequest = new DescribeParametersRequest();
    $request->describeParametersRequest->maxResults = 394869;
    $request->describeParametersRequest->nextToken = 'vel';
    $request->describeParametersRequest->parameterGroupName = 'natus';
    $request->maxResults = 'omnis';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeParametersXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_PARAMETERS;

    $response = $sdk->sdk->describeParameters($request);

    if ($response->describeParametersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReservedNodes

Returns information about reserved nodes for this account, or about a specified reserved node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReservedNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReservedNodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReservedNodesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReservedNodesRequest();
    $request->describeReservedNodesRequest = new DescribeReservedNodesRequest();
    $request->describeReservedNodesRequest->duration = 'suscipit';
    $request->describeReservedNodesRequest->maxResults = 618016;
    $request->describeReservedNodesRequest->nextToken = 'nobis';
    $request->describeReservedNodesRequest->nodeType = 'eum';
    $request->describeReservedNodesRequest->offeringType = 'vero';
    $request->describeReservedNodesRequest->reservationId = 'aspernatur';
    $request->describeReservedNodesRequest->reservedNodesOfferingId = 'architecto';
    $request->maxResults = 'magnam';
    $request->nextToken = 'et';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeReservedNodesXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_RESERVED_NODES;

    $response = $sdk->sdk->describeReservedNodes($request);

    if ($response->describeReservedNodesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReservedNodesOfferings

Lists available reserved node offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReservedNodesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReservedNodesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReservedNodesOfferingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReservedNodesOfferingsRequest();
    $request->describeReservedNodesOfferingsRequest = new DescribeReservedNodesOfferingsRequest();
    $request->describeReservedNodesOfferingsRequest->duration = 'reiciendis';
    $request->describeReservedNodesOfferingsRequest->maxResults = 652103;
    $request->describeReservedNodesOfferingsRequest->nextToken = 'ad';
    $request->describeReservedNodesOfferingsRequest->nodeType = 'eum';
    $request->describeReservedNodesOfferingsRequest->offeringType = 'dolor';
    $request->describeReservedNodesOfferingsRequest->reservedNodesOfferingId = 'necessitatibus';
    $request->maxResults = 'odit';
    $request->nextToken = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DescribeReservedNodesOfferingsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_RESERVED_NODES_OFFERINGS;

    $response = $sdk->sdk->describeReservedNodesOfferings($request);

    if ($response->describeReservedNodesOfferingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServiceUpdates

Returns details of the service updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServiceUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceUpdatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceUpdatesRequest();
    $request->describeServiceUpdatesRequest = new DescribeServiceUpdatesRequest();
    $request->describeServiceUpdatesRequest->clusterNames = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->describeServiceUpdatesRequest->maxResults = 919483;
    $request->describeServiceUpdatesRequest->nextToken = 'ullam';
    $request->describeServiceUpdatesRequest->serviceUpdateName = 'expedita';
    $request->describeServiceUpdatesRequest->status = [
        ServiceUpdateStatusEnum::SCHEDULED,
        ServiceUpdateStatusEnum::SCHEDULED,
    ];
    $request->maxResults = 'sed';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = DescribeServiceUpdatesXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_SERVICE_UPDATES;

    $response = $sdk->sdk->describeServiceUpdates($request);

    if ($response->describeServiceUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSnapshots

Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest->clusterName = 'quo';
    $request->describeSnapshotsRequest->maxResults = 848009;
    $request->describeSnapshotsRequest->nextToken = 'pariatur';
    $request->describeSnapshotsRequest->showDetail = false;
    $request->describeSnapshotsRequest->snapshotName = 'maxime';
    $request->describeSnapshotsRequest->source = 'ea';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeSnapshotsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_SNAPSHOTS;

    $response = $sdk->sdk->describeSnapshots($request);

    if ($response->describeSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubnetGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSubnetGroupsRequest();
    $request->describeSubnetGroupsRequest = new DescribeSubnetGroupsRequest();
    $request->describeSubnetGroupsRequest->maxResults = 420075;
    $request->describeSubnetGroupsRequest->nextToken = 'nam';
    $request->describeSubnetGroupsRequest->subnetGroupName = 'eaque';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'nemo';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DescribeSubnetGroupsXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_SUBNET_GROUPS;

    $response = $sdk->sdk->describeSubnetGroups($request);

    if ($response->describeSubnetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUsers

Returns a list of users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUsersRequest();
    $request->describeUsersRequest = new DescribeUsersRequest();
    $request->describeUsersRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeUsersRequest->maxResults = 729991;
    $request->describeUsersRequest->nextToken = 'nobis';
    $request->describeUsersRequest->userName = 'Celestine.Hayes';
    $request->maxResults = 'eaque';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeUsersXAmzTargetEnum::AMAZON_MEMORY_DB_DESCRIBE_USERS;

    $response = $sdk->sdk->describeUsers($request);

    if ($response->describeUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## failoverShard

Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FailoverShardRequest;
use \OpenAPI\OpenAPI\Models\Shared\FailoverShardRequest;
use \OpenAPI\OpenAPI\Models\Operations\FailoverShardXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FailoverShardRequest();
    $request->failoverShardRequest = new FailoverShardRequest();
    $request->failoverShardRequest->clusterName = 'vero';
    $request->failoverShardRequest->shardName = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = FailoverShardXAmzTargetEnum::AMAZON_MEMORY_DB_FAILOVER_SHARD;

    $response = $sdk->sdk->failoverShard($request);

    if ($response->failoverShardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllowedNodeTypeUpdates

Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAllowedNodeTypeUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAllowedNodeTypeUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAllowedNodeTypeUpdatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAllowedNodeTypeUpdatesRequest();
    $request->listAllowedNodeTypeUpdatesRequest = new ListAllowedNodeTypeUpdatesRequest();
    $request->listAllowedNodeTypeUpdatesRequest->clusterName = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = ListAllowedNodeTypeUpdatesXAmzTargetEnum::AMAZON_MEMORY_DB_LIST_ALLOWED_NODE_TYPE_UPDATES;

    $response = $sdk->sdk->listAllowedNodeTypeUpdates($request);

    if ($response->listAllowedNodeTypeUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 

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
    $request->listTagsRequest->resourceArn = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::AMAZON_MEMORY_DB_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchaseReservedNodesOffering

Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PurchaseReservedNodesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseReservedNodesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PurchaseReservedNodesOfferingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchaseReservedNodesOfferingRequest();
    $request->purchaseReservedNodesOfferingRequest = new PurchaseReservedNodesOfferingRequest();
    $request->purchaseReservedNodesOfferingRequest->nodeCount = 730122;
    $request->purchaseReservedNodesOfferingRequest->reservationId = 'delectus';
    $request->purchaseReservedNodesOfferingRequest->reservedNodesOfferingId = 'quaerat';
    $request->purchaseReservedNodesOfferingRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = PurchaseReservedNodesOfferingXAmzTargetEnum::AMAZON_MEMORY_DB_PURCHASE_RESERVED_NODES_OFFERING;

    $response = $sdk->sdk->purchaseReservedNodesOffering($request);

    if ($response->purchaseReservedNodesOfferingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetParameterGroup

Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetParameterGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetParameterGroupRequest();
    $request->resetParameterGroupRequest = new ResetParameterGroupRequest();
    $request->resetParameterGroupRequest->allParameters = false;
    $request->resetParameterGroupRequest->parameterGroupName = 'excepturi';
    $request->resetParameterGroupRequest->parameterNames = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ResetParameterGroupXAmzTargetEnum::AMAZON_MEMORY_DB_RESET_PARAMETER_GROUP;

    $response = $sdk->sdk->resetParameterGroup($request);

    if ($response->resetParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>

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
    $request->tagResourceRequest->resourceArn = 'odio';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_MEMORY_DB_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Use this operation to remove tags on a resource

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
    $request->untagResourceRequest->resourceArn = 'sit';
    $request->untagResourceRequest->tagKeys = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_MEMORY_DB_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateACL

Changes the list of users that belong to the Access Control List.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateACLRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateACLRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateACLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateACLRequest();
    $request->updateACLRequest = new UpdateACLRequest();
    $request->updateACLRequest->aclName = 'nihil';
    $request->updateACLRequest->userNamesToAdd = [
        'voluptate',
    ];
    $request->updateACLRequest->userNamesToRemove = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = UpdateACLXAmzTargetEnum::AMAZON_MEMORY_DB_UPDATE_ACL;

    $response = $sdk->sdk->updateACL($request);

    if ($response->updateACLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShardConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->updateClusterRequest = new UpdateClusterRequest();
    $request->updateClusterRequest->aclName = 'deserunt';
    $request->updateClusterRequest->clusterName = 'provident';
    $request->updateClusterRequest->description = 'minima';
    $request->updateClusterRequest->engineVersion = 'repellendus';
    $request->updateClusterRequest->maintenanceWindow = 'totam';
    $request->updateClusterRequest->nodeType = 'similique';
    $request->updateClusterRequest->parameterGroupName = 'alias';
    $request->updateClusterRequest->replicaConfiguration = new ReplicaConfigurationRequest();
    $request->updateClusterRequest->replicaConfiguration->replicaCount = 872651;
    $request->updateClusterRequest->securityGroupIds = [
        'tempora',
        'vel',
    ];
    $request->updateClusterRequest->shardConfiguration = new ShardConfigurationRequest();
    $request->updateClusterRequest->shardConfiguration->shardCount = 798047;
    $request->updateClusterRequest->snapshotRetentionLimit = 885338;
    $request->updateClusterRequest->snapshotWindow = 'qui';
    $request->updateClusterRequest->snsTopicArn = 'dolorum';
    $request->updateClusterRequest->snsTopicStatus = 'a';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = UpdateClusterXAmzTargetEnum::AMAZON_MEMORY_DB_UPDATE_CLUSTER;

    $response = $sdk->sdk->updateCluster($request);

    if ($response->updateClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateParameterGroup

Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParameterNameValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParameterGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateParameterGroupRequest();
    $request->updateParameterGroupRequest = new UpdateParameterGroupRequest();
    $request->updateParameterGroupRequest->parameterGroupName = 'tempore';
    $request->updateParameterGroupRequest->parameterNameValues = [
        new ParameterNameValue(),
        new ParameterNameValue(),
        new ParameterNameValue(),
        new ParameterNameValue(),
    ];
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = UpdateParameterGroupXAmzTargetEnum::AMAZON_MEMORY_DB_UPDATE_PARAMETER_GROUP;

    $response = $sdk->sdk->updateParameterGroup($request);

    if ($response->updateParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubnetGroup

Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubnetGroupRequest();
    $request->updateSubnetGroupRequest = new UpdateSubnetGroupRequest();
    $request->updateSubnetGroupRequest->description = 'expedita';
    $request->updateSubnetGroupRequest->subnetGroupName = 'neque';
    $request->updateSubnetGroupRequest->subnetIds = [
        'vel',
    ];
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateSubnetGroupXAmzTargetEnum::AMAZON_MEMORY_DB_UPDATE_SUBNET_GROUP;

    $response = $sdk->sdk->updateSubnetGroup($request);

    if ($response->updateSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

Changes user password(s) and/or access string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationMode;
use \OpenAPI\OpenAPI\Models\Shared\InputAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->updateUserRequest = new UpdateUserRequest();
    $request->updateUserRequest->accessString = 'cupiditate';
    $request->updateUserRequest->authenticationMode = new AuthenticationMode();
    $request->updateUserRequest->authenticationMode->passwords = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->updateUserRequest->authenticationMode->type = InputAuthenticationTypeEnum::PASSWORD;
    $request->updateUserRequest->userName = 'Joseph17';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateUserXAmzTargetEnum::AMAZON_MEMORY_DB_UPDATE_USER;

    $response = $sdk->sdk->updateUser($request);

    if ($response->updateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
