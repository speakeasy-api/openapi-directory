# SDK

## Overview

DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

Amazon Web Services documentation
<https://docs.aws.amazon.com/dax/>
### Available Operations

* [createCluster](#createcluster) - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* [createParameterGroup](#createparametergroup) - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* [createSubnetGroup](#createsubnetgroup) - Creates a new subnet group.
* [decreaseReplicationFactor](#decreasereplicationfactor) - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* [deleteCluster](#deletecluster) - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* [deleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* [deleteSubnetGroup](#deletesubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* [describeClusters](#describeclusters) - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* [describeDefaultParameters](#describedefaultparameters) - Returns the default system parameter information for the DAX caching software.
* [describeEvents](#describeevents) - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [describeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* [describeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* [increaseReplicationFactor](#increasereplicationfactor) - Adds one or more nodes to a DAX cluster.
* [listTags](#listtags) - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* [rebootNode](#rebootnode) - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* [tagResource](#tagresource) - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* [untagResource](#untagresource) - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* [updateCluster](#updatecluster) - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [updateParameterGroup](#updateparametergroup) - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](#updatesubnetgroup) - Modifies an existing subnet group.

## createCluster

Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterEndpointEncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->availabilityZones = [
        'recusandae',
        'temporibus',
    ];
    $request->createClusterRequest->clusterEndpointEncryptionType = ClusterEndpointEncryptionTypeEnum::NONE;
    $request->createClusterRequest->clusterName = 'quis';
    $request->createClusterRequest->description = 'veritatis';
    $request->createClusterRequest->iamRoleArn = 'deserunt';
    $request->createClusterRequest->nodeType = 'perferendis';
    $request->createClusterRequest->notificationTopicArn = 'ipsam';
    $request->createClusterRequest->parameterGroupName = 'repellendus';
    $request->createClusterRequest->preferredMaintenanceWindow = 'sapiente';
    $request->createClusterRequest->replicationFactor = 778157;
    $request->createClusterRequest->sseSpecification = new SSESpecification();
    $request->createClusterRequest->sseSpecification->enabled = false;
    $request->createClusterRequest->securityGroupIds = [
        'at',
    ];
    $request->createClusterRequest->subnetGroupName = 'at';
    $request->createClusterRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AMAZON_DAXV3_CREATE_CLUSTER;

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createParameterGroup

Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParameterGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParameterGroupRequest();
    $request->createParameterGroupRequest = new CreateParameterGroupRequest();
    $request->createParameterGroupRequest->description = 'dicta';
    $request->createParameterGroupRequest->parameterGroupName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreateParameterGroupXAmzTargetEnum::AMAZON_DAXV3_CREATE_PARAMETER_GROUP;

    $response = $sdk->sdk->createParameterGroup($request);

    if ($response->createParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubnetGroup

Creates a new subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubnetGroupRequest();
    $request->createSubnetGroupRequest = new CreateSubnetGroupRequest();
    $request->createSubnetGroupRequest->description = 'beatae';
    $request->createSubnetGroupRequest->subnetGroupName = 'commodi';
    $request->createSubnetGroupRequest->subnetIds = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateSubnetGroupXAmzTargetEnum::AMAZON_DAXV3_CREATE_SUBNET_GROUP;

    $response = $sdk->sdk->createSubnetGroup($request);

    if ($response->createSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## decreaseReplicationFactor

<p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DecreaseReplicationFactorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DecreaseReplicationFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DecreaseReplicationFactorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DecreaseReplicationFactorRequest();
    $request->decreaseReplicationFactorRequest = new DecreaseReplicationFactorRequest();
    $request->decreaseReplicationFactorRequest->availabilityZones = [
        'natus',
        'sed',
    ];
    $request->decreaseReplicationFactorRequest->clusterName = 'iste';
    $request->decreaseReplicationFactorRequest->newReplicationFactor = 222321;
    $request->decreaseReplicationFactorRequest->nodeIdsToRemove = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DecreaseReplicationFactorXAmzTargetEnum::AMAZON_DAXV3_DECREASE_REPLICATION_FACTOR;

    $response = $sdk->sdk->decreaseReplicationFactor($request);

    if ($response->decreaseReplicationFactorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.

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
    $request->deleteClusterRequest->clusterName = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteClusterXAmzTargetEnum::AMAZON_DAXV3_DELETE_CLUSTER;

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParameterGroup

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.

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
    $request->deleteParameterGroupRequest->parameterGroupName = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteParameterGroupXAmzTargetEnum::AMAZON_DAXV3_DELETE_PARAMETER_GROUP;

    $response = $sdk->sdk->deleteParameterGroup($request);

    if ($response->deleteParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>

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
    $request->deleteSubnetGroupRequest->subnetGroupName = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteSubnetGroupXAmzTargetEnum::AMAZON_DAXV3_DELETE_SUBNET_GROUP;

    $response = $sdk->sdk->deleteSubnetGroup($request);

    if ($response->deleteSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClusters

<p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>

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
    $request->describeClustersRequest->clusterNames = [
        'consequuntur',
        'repellat',
        'mollitia',
    ];
    $request->describeClustersRequest->maxResults = 581850;
    $request->describeClustersRequest->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeClustersXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_CLUSTERS;

    $response = $sdk->sdk->describeClusters($request);

    if ($response->describeClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDefaultParameters

Returns the default system parameter information for the DAX caching software.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDefaultParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDefaultParametersRequest();
    $request->describeDefaultParametersRequest = new DescribeDefaultParametersRequest();
    $request->describeDefaultParametersRequest->maxResults = 110375;
    $request->describeDefaultParametersRequest->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeDefaultParametersXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_DEFAULT_PARAMETERS;

    $response = $sdk->sdk->describeDefaultParameters($request);

    if ($response->describeDefaultParametersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEvents

<p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
    $request->describeEventsRequest->duration = 662527;
    $request->describeEventsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T03:20:13.120Z');
    $request->describeEventsRequest->maxResults = 97101;
    $request->describeEventsRequest->nextToken = 'error';
    $request->describeEventsRequest->sourceName = 'temporibus';
    $request->describeEventsRequest->sourceType = SourceTypeEnum::SUBNET_GROUP;
    $request->describeEventsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T05:45:42.485Z');
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeEventsXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_EVENTS;

    $response = $sdk->sdk->describeEvents($request);

    if ($response->describeEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeParameterGroups

Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.

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
    $request->describeParameterGroupsRequest->maxResults = 451159;
    $request->describeParameterGroupsRequest->nextToken = 'cum';
    $request->describeParameterGroupsRequest->parameterGroupNames = [
        'doloremque',
    ];
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DescribeParameterGroupsXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_PARAMETER_GROUPS;

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
    $request->describeParametersRequest->maxResults = 118727;
    $request->describeParametersRequest->nextToken = 'harum';
    $request->describeParametersRequest->parameterGroupName = 'enim';
    $request->describeParametersRequest->source = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeParametersXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_PARAMETERS;

    $response = $sdk->sdk->describeParameters($request);

    if ($response->describeParametersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.

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
    $request->describeSubnetGroupsRequest->maxResults = 865103;
    $request->describeSubnetGroupsRequest->nextToken = 'modi';
    $request->describeSubnetGroupsRequest->subnetGroupNames = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = DescribeSubnetGroupsXAmzTargetEnum::AMAZON_DAXV3_DESCRIBE_SUBNET_GROUPS;

    $response = $sdk->sdk->describeSubnetGroups($request);

    if ($response->describeSubnetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## increaseReplicationFactor

Adds one or more nodes to a DAX cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IncreaseReplicationFactorRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncreaseReplicationFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\IncreaseReplicationFactorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IncreaseReplicationFactorRequest();
    $request->increaseReplicationFactorRequest = new IncreaseReplicationFactorRequest();
    $request->increaseReplicationFactorRequest->availabilityZones = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];
    $request->increaseReplicationFactorRequest->clusterName = 'distinctio';
    $request->increaseReplicationFactorRequest->newReplicationFactor = 841386;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = IncreaseReplicationFactorXAmzTargetEnum::AMAZON_DAXV3_INCREASE_REPLICATION_FACTOR;

    $response = $sdk->sdk->increaseReplicationFactor($request);

    if ($response->increaseReplicationFactorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.

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
    $request->listTagsRequest->nextToken = 'magni';
    $request->listTagsRequest->resourceName = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::AMAZON_DAXV3_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootNode

<p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootNodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootNodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebootNodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootNodeRequest();
    $request->rebootNodeRequest = new RebootNodeRequest();
    $request->rebootNodeRequest->clusterName = 'tempore';
    $request->rebootNodeRequest->nodeId = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = RebootNodeXAmzTargetEnum::AMAZON_DAXV3_REBOOT_NODE;

    $response = $sdk->sdk->rebootNode($request);

    if ($response->rebootNodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 

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
    $request->tagResourceRequest->resourceName = 'necessitatibus';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_DAXV3_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 

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
    $request->untagResourceRequest->resourceName = 'illum';
    $request->untagResourceRequest->tagKeys = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_DAXV3_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->updateClusterRequest = new UpdateClusterRequest();
    $request->updateClusterRequest->clusterName = 'enim';
    $request->updateClusterRequest->description = 'accusamus';
    $request->updateClusterRequest->notificationTopicArn = 'delectus';
    $request->updateClusterRequest->notificationTopicStatus = 'quidem';
    $request->updateClusterRequest->parameterGroupName = 'provident';
    $request->updateClusterRequest->preferredMaintenanceWindow = 'nam';
    $request->updateClusterRequest->securityGroupIds = [
        'blanditiis',
        'deleniti',
        'sapiente',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = UpdateClusterXAmzTargetEnum::AMAZON_DAXV3_UPDATE_CLUSTER;

    $response = $sdk->sdk->updateCluster($request);

    if ($response->updateClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateParameterGroup

Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

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
    $request->updateParameterGroupRequest->parameterGroupName = 'perferendis';
    $request->updateParameterGroupRequest->parameterNameValues = [
        new ParameterNameValue(),
        new ParameterNameValue(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = UpdateParameterGroupXAmzTargetEnum::AMAZON_DAXV3_UPDATE_PARAMETER_GROUP;

    $response = $sdk->sdk->updateParameterGroup($request);

    if ($response->updateParameterGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubnetGroup

Modifies an existing subnet group.

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
    $request->updateSubnetGroupRequest->description = 'nobis';
    $request->updateSubnetGroupRequest->subnetGroupName = 'eum';
    $request->updateSubnetGroupRequest->subnetIds = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = UpdateSubnetGroupXAmzTargetEnum::AMAZON_DAXV3_UPDATE_SUBNET_GROUP;

    $response = $sdk->sdk->updateSubnetGroup($request);

    if ($response->updateSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
