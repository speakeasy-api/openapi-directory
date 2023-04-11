import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://memory-db.{region}.amazonaws.com", "https://memory-db.{region}.amazonaws.com", "http://memory-db.{region}.amazonaws.com.cn", "https://memory-db.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures. MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.
 *
 * @see {@link https://docs.aws.amazon.com/memory-db/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
     */
    batchUpdateCluster(req: operations.BatchUpdateClusterRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateClusterResponse>;
    /**
     * Makes a copy of an existing snapshot.
     */
    copySnapshot(req: operations.CopySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CopySnapshotResponse>;
    /**
     * Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
     */
    createACL(req: operations.CreateACLRequest, config?: AxiosRequestConfig): Promise<operations.CreateACLResponse>;
    /**
     * Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
     */
    createCluster(req: operations.CreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterResponse>;
    /**
     * Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>.
     */
    createParameterGroup(req: operations.CreateParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateParameterGroupResponse>;
    /**
     * Creates a copy of an entire cluster at a specific moment in time.
     */
    createSnapshot(req: operations.CreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotResponse>;
    /**
     * Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
     */
    createSubnetGroup(req: operations.CreateSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubnetGroupResponse>;
    /**
     * Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
     */
    deleteACL(req: operations.DeleteACLRequest, config?: AxiosRequestConfig): Promise<operations.DeleteACLResponse>;
    /**
     * Deletes a cluster. It also deletes all associated nodes and node endpoints
     */
    deleteCluster(req: operations.DeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterResponse>;
    /**
     * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
     */
    deleteParameterGroup(req: operations.DeleteParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParameterGroupResponse>;
    /**
     * Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
     */
    deleteSnapshot(req: operations.DeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnapshotResponse>;
    /**
     * Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
     */
    deleteSubnetGroup(req: operations.DeleteSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubnetGroupResponse>;
    /**
     * Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Returns a list of ACLs
     */
    describeACLs(req: operations.DescribeACLsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeACLsResponse>;
    /**
     * Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
     */
    describeClusters(req: operations.DescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClustersResponse>;
    /**
     * Returns a list of the available Redis engine versions.
     */
    describeEngineVersions(req: operations.DescribeEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEngineVersionsResponse>;
    /**
     * Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
     */
    describeEvents(req: operations.DescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventsResponse>;
    /**
     * Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
     */
    describeParameterGroups(req: operations.DescribeParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular parameter group.
     */
    describeParameters(req: operations.DescribeParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeParametersResponse>;
    /**
     * Returns information about reserved nodes for this account, or about a specified reserved node.
     */
    describeReservedNodes(req: operations.DescribeReservedNodesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReservedNodesResponse>;
    /**
     * Lists available reserved node offerings.
     */
    describeReservedNodesOfferings(req: operations.DescribeReservedNodesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReservedNodesOfferingsResponse>;
    /**
     * Returns details of the service updates
     */
    describeServiceUpdates(req: operations.DescribeServiceUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceUpdatesResponse>;
    /**
     * Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
     */
    describeSnapshots(req: operations.DescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSnapshotsResponse>;
    /**
     * Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
     */
    describeSubnetGroups(req: operations.DescribeSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubnetGroupsResponse>;
    /**
     * Returns a list of users.
     */
    describeUsers(req: operations.DescribeUsersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUsersResponse>;
    /**
     * Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.
     */
    failoverShard(req: operations.FailoverShardRequest, config?: AxiosRequestConfig): Promise<operations.FailoverShardResponse>;
    /**
     * Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
     */
    listAllowedNodeTypeUpdates(req: operations.ListAllowedNodeTypeUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.ListAllowedNodeTypeUpdatesResponse>;
    /**
     * Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>
     */
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
     */
    purchaseReservedNodesOffering(req: operations.PurchaseReservedNodesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.PurchaseReservedNodesOfferingResponse>;
    /**
     * Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
     */
    resetParameterGroup(req: operations.ResetParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.ResetParameterGroupResponse>;
    /**
     * <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Use this operation to remove tags on a resource
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Changes the list of users that belong to the Access Control List.
     */
    updateACL(req: operations.UpdateACLRequest, config?: AxiosRequestConfig): Promise<operations.UpdateACLResponse>;
    /**
     * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
     */
    updateCluster(req: operations.UpdateClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClusterResponse>;
    /**
     * Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
     */
    updateParameterGroup(req: operations.UpdateParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParameterGroupResponse>;
    /**
     * Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a>
     */
    updateSubnetGroup(req: operations.UpdateSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubnetGroupResponse>;
    /**
     * Changes user password(s) and/or access string.
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
