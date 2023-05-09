# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/memorydb/2021-01-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchUpdateCluster(ctx, operations.BatchUpdateClusterRequest{
        BatchUpdateClusterRequest: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: sdk.String("unde"),
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.BatchUpdateClusterXAmzTargetEnumAmazonMemoryDbBatchUpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchUpdateCluster](docs/sdk/README.md#batchupdatecluster) - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* [CopySnapshot](docs/sdk/README.md#copysnapshot) - Makes a copy of an existing snapshot.
* [CreateACL](docs/sdk/README.md#createacl) - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [CreateCluster](docs/sdk/README.md#createcluster) - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* [CreateParameterGroup](docs/sdk/README.md#createparametergroup) - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* [CreateSnapshot](docs/sdk/README.md#createsnapshot) - Creates a copy of an entire cluster at a specific moment in time.
* [CreateSubnetGroup](docs/sdk/README.md#createsubnetgroup) - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* [CreateUser](docs/sdk/README.md#createuser) - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [DeleteACL](docs/sdk/README.md#deleteacl) - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [DeleteCluster](docs/sdk/README.md#deletecluster) - Deletes a cluster. It also deletes all associated nodes and node endpoints
* [DeleteParameterGroup](docs/sdk/README.md#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* [DeleteSnapshot](docs/sdk/README.md#deletesnapshot) - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* [DeleteSubnetGroup](docs/sdk/README.md#deletesubnetgroup) - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* [DeleteUser](docs/sdk/README.md#deleteuser) - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* [DescribeACLs](docs/sdk/README.md#describeacls) - Returns a list of ACLs
* [DescribeClusters](docs/sdk/README.md#describeclusters) - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* [DescribeEngineVersions](docs/sdk/README.md#describeengineversions) - Returns a list of the available Redis engine versions.
* [DescribeEvents](docs/sdk/README.md#describeevents) - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* [DescribeParameterGroups](docs/sdk/README.md#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* [DescribeParameters](docs/sdk/README.md#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [DescribeReservedNodes](docs/sdk/README.md#describereservednodes) - Returns information about reserved nodes for this account, or about a specified reserved node.
* [DescribeReservedNodesOfferings](docs/sdk/README.md#describereservednodesofferings) - Lists available reserved node offerings.
* [DescribeServiceUpdates](docs/sdk/README.md#describeserviceupdates) - Returns details of the service updates
* [DescribeSnapshots](docs/sdk/README.md#describesnapshots) - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* [DescribeSubnetGroups](docs/sdk/README.md#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* [DescribeUsers](docs/sdk/README.md#describeusers) - Returns a list of users.
* [FailoverShard](docs/sdk/README.md#failovershard) - Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 
* [ListAllowedNodeTypeUpdates](docs/sdk/README.md#listallowednodetypeupdates) - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* [ListTags](docs/sdk/README.md#listtags) - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* [PurchaseReservedNodesOffering](docs/sdk/README.md#purchasereservednodesoffering) - Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
* [ResetParameterGroup](docs/sdk/README.md#resetparametergroup) - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* [TagResource](docs/sdk/README.md#tagresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - Use this operation to remove tags on a resource
* [UpdateACL](docs/sdk/README.md#updateacl) - Changes the list of users that belong to the Access Control List.
* [UpdateCluster](docs/sdk/README.md#updatecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* [UpdateParameterGroup](docs/sdk/README.md#updateparametergroup) - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [UpdateSubnetGroup](docs/sdk/README.md#updatesubnetgroup) - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* [UpdateUser](docs/sdk/README.md#updateuser) - Changes user password(s) and/or access string.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
