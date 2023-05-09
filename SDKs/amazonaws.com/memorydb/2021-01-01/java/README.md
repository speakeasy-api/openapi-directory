# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateClusterRequest;
import org.openapis.openapi.models.operations.BatchUpdateClusterResponse;
import org.openapis.openapi.models.operations.BatchUpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchUpdateClusterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest(                new BatchUpdateClusterRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}) {{
                                serviceUpdate = new ServiceUpdateRequest() {{
                                    serviceUpdateNameToApply = "nulla";
                                }};;
                            }};, BatchUpdateClusterXAmzTargetEnum.AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            BatchUpdateClusterResponse res = sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchUpdateCluster](docs/sdk/README.md#batchupdatecluster) - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* [copySnapshot](docs/sdk/README.md#copysnapshot) - Makes a copy of an existing snapshot.
* [createACL](docs/sdk/README.md#createacl) - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [createCluster](docs/sdk/README.md#createcluster) - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* [createParameterGroup](docs/sdk/README.md#createparametergroup) - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* [createSnapshot](docs/sdk/README.md#createsnapshot) - Creates a copy of an entire cluster at a specific moment in time.
* [createSubnetGroup](docs/sdk/README.md#createsubnetgroup) - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* [createUser](docs/sdk/README.md#createuser) - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteACL](docs/sdk/README.md#deleteacl) - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteCluster](docs/sdk/README.md#deletecluster) - Deletes a cluster. It also deletes all associated nodes and node endpoints
* [deleteParameterGroup](docs/sdk/README.md#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* [deleteSnapshot](docs/sdk/README.md#deletesnapshot) - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* [deleteSubnetGroup](docs/sdk/README.md#deletesubnetgroup) - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* [deleteUser](docs/sdk/README.md#deleteuser) - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* [describeACLs](docs/sdk/README.md#describeacls) - Returns a list of ACLs
* [describeClusters](docs/sdk/README.md#describeclusters) - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* [describeEngineVersions](docs/sdk/README.md#describeengineversions) - Returns a list of the available Redis engine versions.
* [describeEvents](docs/sdk/README.md#describeevents) - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* [describeParameterGroups](docs/sdk/README.md#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* [describeParameters](docs/sdk/README.md#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeReservedNodes](docs/sdk/README.md#describereservednodes) - Returns information about reserved nodes for this account, or about a specified reserved node.
* [describeReservedNodesOfferings](docs/sdk/README.md#describereservednodesofferings) - Lists available reserved node offerings.
* [describeServiceUpdates](docs/sdk/README.md#describeserviceupdates) - Returns details of the service updates
* [describeSnapshots](docs/sdk/README.md#describesnapshots) - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* [describeSubnetGroups](docs/sdk/README.md#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* [describeUsers](docs/sdk/README.md#describeusers) - Returns a list of users.
* [failoverShard](docs/sdk/README.md#failovershard) - Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 
* [listAllowedNodeTypeUpdates](docs/sdk/README.md#listallowednodetypeupdates) - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* [listTags](docs/sdk/README.md#listtags) - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* [purchaseReservedNodesOffering](docs/sdk/README.md#purchasereservednodesoffering) - Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
* [resetParameterGroup](docs/sdk/README.md#resetparametergroup) - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* [tagResource](docs/sdk/README.md#tagresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Use this operation to remove tags on a resource
* [updateACL](docs/sdk/README.md#updateacl) - Changes the list of users that belong to the Access Control List.
* [updateCluster](docs/sdk/README.md#updatecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* [updateParameterGroup](docs/sdk/README.md#updateparametergroup) - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](docs/sdk/README.md#updatesubnetgroup) - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* [updateUser](docs/sdk/README.md#updateuser) - Changes user password(s) and/or access string.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
