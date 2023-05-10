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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->createClusterRequest->clusterEndpointEncryptionType = ClusterEndpointEncryptionTypeEnum::TLS;
    $request->createClusterRequest->clusterName = 'nulla';
    $request->createClusterRequest->description = 'corrupti';
    $request->createClusterRequest->iamRoleArn = 'illum';
    $request->createClusterRequest->nodeType = 'vel';
    $request->createClusterRequest->notificationTopicArn = 'error';
    $request->createClusterRequest->parameterGroupName = 'deserunt';
    $request->createClusterRequest->preferredMaintenanceWindow = 'suscipit';
    $request->createClusterRequest->replicationFactor = 437587;
    $request->createClusterRequest->sseSpecification = new SSESpecification();
    $request->createClusterRequest->sseSpecification->enabled = false;
    $request->createClusterRequest->securityGroupIds = [
        'debitis',
        'ipsa',
    ];
    $request->createClusterRequest->subnetGroupName = 'delectus';
    $request->createClusterRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AMAZON_DAXV3_CREATE_CLUSTER;

    $response = $sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
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

* [createCluster](docs/sdk/README.md#createcluster) - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* [createParameterGroup](docs/sdk/README.md#createparametergroup) - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* [createSubnetGroup](docs/sdk/README.md#createsubnetgroup) - Creates a new subnet group.
* [decreaseReplicationFactor](docs/sdk/README.md#decreasereplicationfactor) - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* [deleteCluster](docs/sdk/README.md#deletecluster) - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* [deleteParameterGroup](docs/sdk/README.md#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* [deleteSubnetGroup](docs/sdk/README.md#deletesubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* [describeClusters](docs/sdk/README.md#describeclusters) - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* [describeDefaultParameters](docs/sdk/README.md#describedefaultparameters) - Returns the default system parameter information for the DAX caching software.
* [describeEvents](docs/sdk/README.md#describeevents) - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [describeParameterGroups](docs/sdk/README.md#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* [describeParameters](docs/sdk/README.md#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeSubnetGroups](docs/sdk/README.md#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* [increaseReplicationFactor](docs/sdk/README.md#increasereplicationfactor) - Adds one or more nodes to a DAX cluster.
* [listTags](docs/sdk/README.md#listtags) - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* [rebootNode](docs/sdk/README.md#rebootnode) - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* [tagResource](docs/sdk/README.md#tagresource) - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* [untagResource](docs/sdk/README.md#untagresource) - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* [updateCluster](docs/sdk/README.md#updatecluster) - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [updateParameterGroup](docs/sdk/README.md#updateparametergroup) - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](docs/sdk/README.md#updatesubnetgroup) - Modifies an existing subnet group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
