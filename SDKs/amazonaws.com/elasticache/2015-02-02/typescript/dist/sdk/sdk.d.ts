import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://elasticache.{region}.amazonaws.com", "https://elasticache.{region}.amazonaws.com", "http://elasticache.{region}.amazonaws.com.cn", "https://elasticache.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>
 *
 * @see {@link https://docs.aws.amazon.com/elasticache/} - Amazon Web Services documentation
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
     * <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
     */
    getAuthorizeCacheSecurityGroupIngress(req: operations.GETAuthorizeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeCacheSecurityGroupIngressResponse>;
    /**
     * Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
     */
    getBatchApplyUpdateAction(req: operations.GETBatchApplyUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.GETBatchApplyUpdateActionResponse>;
    /**
     * Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
     */
    getBatchStopUpdateAction(req: operations.GETBatchStopUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.GETBatchStopUpdateActionResponse>;
    /**
     * Complete the migration of data.
     */
    getCompleteMigration(req: operations.GETCompleteMigrationRequest, config?: AxiosRequestConfig): Promise<operations.GETCompleteMigrationResponse>;
    /**
     * <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
     */
    getCreateGlobalReplicationGroup(req: operations.GETCreateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateGlobalReplicationGroupResponse>;
    /**
     * Decreases the number of node groups in a Global datastore
     */
    getDecreaseNodeGroupsInGlobalReplicationGroup(req: operations.GETDecreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDecreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
     */
    getDeleteCacheCluster(req: operations.GETDeleteCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCacheClusterResponse>;
    /**
     * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
     */
    getDeleteCacheParameterGroup(req: operations.GETDeleteCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCacheParameterGroupResponse>;
    /**
     * <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
     */
    getDeleteCacheSecurityGroup(req: operations.GETDeleteCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCacheSecurityGroupResponse>;
    /**
     * <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
     */
    getDeleteCacheSubnetGroup(req: operations.GETDeleteCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCacheSubnetGroupResponse>;
    /**
     * <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
     */
    getDeleteGlobalReplicationGroup(req: operations.GETDeleteGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteGlobalReplicationGroupResponse>;
    /**
     * <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    getDeleteReplicationGroup(req: operations.GETDeleteReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteReplicationGroupResponse>;
    /**
     * <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    getDeleteSnapshot(req: operations.GETDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSnapshotResponse>;
    /**
     * For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
     */
    getDeleteUser(req: operations.GETDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteUserResponse>;
    /**
     * For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
     */
    getDeleteUserGroup(req: operations.GETDeleteUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteUserGroupResponse>;
    /**
     * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
     */
    getDescribeCacheClusters(req: operations.GETDescribeCacheClustersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheClustersResponse>;
    /**
     * Returns a list of the available cache engines and their versions.
     */
    getDescribeCacheEngineVersions(req: operations.GETDescribeCacheEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheEngineVersionsResponse>;
    /**
     * Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
     */
    getDescribeCacheParameterGroups(req: operations.GETDescribeCacheParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular cache parameter group.
     */
    getDescribeCacheParameters(req: operations.GETDescribeCacheParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheParametersResponse>;
    /**
     * Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup
     */
    getDescribeCacheSecurityGroups(req: operations.GETDescribeCacheSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheSecurityGroupsResponse>;
    /**
     * Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
     */
    getDescribeCacheSubnetGroups(req: operations.GETDescribeCacheSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeCacheSubnetGroupsResponse>;
    /**
     * Returns the default engine and system parameter information for the specified cache engine.
     */
    getDescribeEngineDefaultParameters(req: operations.GETDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEngineDefaultParametersResponse>;
    /**
     * <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
     */
    getDescribeEvents(req: operations.GETDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventsResponse>;
    /**
     * Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.
     */
    getDescribeGlobalReplicationGroups(req: operations.GETDescribeGlobalReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeGlobalReplicationGroupsResponse>;
    /**
     * <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    getDescribeReplicationGroups(req: operations.GETDescribeReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReplicationGroupsResponse>;
    /**
     * Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
     */
    getDescribeReservedCacheNodes(req: operations.GETDescribeReservedCacheNodesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedCacheNodesResponse>;
    /**
     * Lists available reserved cache node offerings.
     */
    getDescribeReservedCacheNodesOfferings(req: operations.GETDescribeReservedCacheNodesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeReservedCacheNodesOfferingsResponse>;
    /**
     * Returns details of the service updates
     */
    getDescribeServiceUpdates(req: operations.GETDescribeServiceUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeServiceUpdatesResponse>;
    /**
     * <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    getDescribeSnapshots(req: operations.GETDescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSnapshotsResponse>;
    /**
     * Returns details of the update actions
     */
    getDescribeUpdateActions(req: operations.GETDescribeUpdateActionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeUpdateActionsResponse>;
    /**
     * Returns a list of user groups.
     */
    getDescribeUserGroups(req: operations.GETDescribeUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeUserGroupsResponse>;
    /**
     * Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
     */
    getDisassociateGlobalReplicationGroup(req: operations.GETDisassociateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateGlobalReplicationGroupResponse>;
    /**
     * Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
     */
    getFailoverGlobalReplicationGroup(req: operations.GETFailoverGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverGlobalReplicationGroupResponse>;
    /**
     * <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
     */
    getListAllowedNodeTypeModifications(req: operations.GETListAllowedNodeTypeModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GETListAllowedNodeTypeModificationsResponse>;
    /**
     * <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
     */
    getListTagsForResource(req: operations.GETListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETListTagsForResourceResponse>;
    /**
     * Modifies an existing cache subnet group.
     */
    getModifyCacheSubnetGroup(req: operations.GETModifyCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCacheSubnetGroupResponse>;
    /**
     * Modifies the settings for a Global datastore.
     */
    getModifyGlobalReplicationGroup(req: operations.GETModifyGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyGlobalReplicationGroupResponse>;
    /**
     * Changes user password(s) and/or access string.
     */
    getModifyUser(req: operations.GETModifyUserRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyUserResponse>;
    /**
     * Changes the list of users that belong to the user group.
     */
    getModifyUserGroup(req: operations.GETModifyUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyUserGroupResponse>;
    /**
     * Redistribute slots to ensure uniform distribution across existing shards in the cluster.
     */
    getRebalanceSlotsInGlobalReplicationGroup(req: operations.GETRebalanceSlotsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETRebalanceSlotsInGlobalReplicationGroupResponse>;
    /**
     * <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
     */
    getRebootCacheCluster(req: operations.GETRebootCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootCacheClusterResponse>;
    /**
     * Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
     */
    getRemoveTagsFromResource(req: operations.GETRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsFromResourceResponse>;
    /**
     * Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
     */
    getRevokeCacheSecurityGroupIngress(req: operations.GETRevokeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeCacheSecurityGroupIngressResponse>;
    /**
     * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
     */
    getTestFailover(req: operations.GETTestFailoverRequest, config?: AxiosRequestConfig): Promise<operations.GETTestFailoverResponse>;
    /**
     * <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
     */
    postAddTagsToResource(req: operations.POSTAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsToResourceResponse>;
    /**
     * <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
     */
    postAuthorizeCacheSecurityGroupIngress(req: operations.POSTAuthorizeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeCacheSecurityGroupIngressResponse>;
    /**
     * Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
     */
    postBatchApplyUpdateAction(req: operations.POSTBatchApplyUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTBatchApplyUpdateActionResponse>;
    /**
     * Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
     */
    postBatchStopUpdateAction(req: operations.POSTBatchStopUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTBatchStopUpdateActionResponse>;
    /**
     * Complete the migration of data.
     */
    postCompleteMigration(req: operations.POSTCompleteMigrationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCompleteMigrationResponse>;
    /**
     * <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
     */
    postCopySnapshot(req: operations.POSTCopySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopySnapshotResponse>;
    /**
     * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
     */
    postCreateCacheCluster(req: operations.POSTCreateCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCacheClusterResponse>;
    /**
     * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
     */
    postCreateCacheParameterGroup(req: operations.POSTCreateCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCacheParameterGroupResponse>;
    /**
     * <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
     */
    postCreateCacheSecurityGroup(req: operations.POSTCreateCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCacheSecurityGroupResponse>;
    /**
     * <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
     */
    postCreateCacheSubnetGroup(req: operations.POSTCreateCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCacheSubnetGroupResponse>;
    /**
     * <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
     */
    postCreateGlobalReplicationGroup(req: operations.POSTCreateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateGlobalReplicationGroupResponse>;
    /**
     * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postCreateReplicationGroup(req: operations.POSTCreateReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateReplicationGroupResponse>;
    /**
     * <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postCreateSnapshot(req: operations.POSTCreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSnapshotResponse>;
    /**
     * For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
     */
    postCreateUser(req: operations.POSTCreateUserRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateUserResponse>;
    /**
     * For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
     */
    postCreateUserGroup(req: operations.POSTCreateUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateUserGroupResponse>;
    /**
     * Decreases the number of node groups in a Global datastore
     */
    postDecreaseNodeGroupsInGlobalReplicationGroup(req: operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
     */
    postDecreaseReplicaCount(req: operations.POSTDecreaseReplicaCountRequest, config?: AxiosRequestConfig): Promise<operations.POSTDecreaseReplicaCountResponse>;
    /**
     * <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
     */
    postDeleteCacheCluster(req: operations.POSTDeleteCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCacheClusterResponse>;
    /**
     * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
     */
    postDeleteCacheParameterGroup(req: operations.POSTDeleteCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCacheParameterGroupResponse>;
    /**
     * <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
     */
    postDeleteCacheSecurityGroup(req: operations.POSTDeleteCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCacheSecurityGroupResponse>;
    /**
     * <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
     */
    postDeleteCacheSubnetGroup(req: operations.POSTDeleteCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCacheSubnetGroupResponse>;
    /**
     * <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
     */
    postDeleteGlobalReplicationGroup(req: operations.POSTDeleteGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteGlobalReplicationGroupResponse>;
    /**
     * <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postDeleteReplicationGroup(req: operations.POSTDeleteReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteReplicationGroupResponse>;
    /**
     * <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postDeleteSnapshot(req: operations.POSTDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSnapshotResponse>;
    /**
     * For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
     */
    postDeleteUser(req: operations.POSTDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteUserResponse>;
    /**
     * For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
     */
    postDeleteUserGroup(req: operations.POSTDeleteUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteUserGroupResponse>;
    /**
     * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
     */
    postDescribeCacheClusters(req: operations.POSTDescribeCacheClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheClustersResponse>;
    /**
     * Returns a list of the available cache engines and their versions.
     */
    postDescribeCacheEngineVersions(req: operations.POSTDescribeCacheEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheEngineVersionsResponse>;
    /**
     * Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
     */
    postDescribeCacheParameterGroups(req: operations.POSTDescribeCacheParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular cache parameter group.
     */
    postDescribeCacheParameters(req: operations.POSTDescribeCacheParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheParametersResponse>;
    /**
     * Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup
     */
    postDescribeCacheSecurityGroups(req: operations.POSTDescribeCacheSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheSecurityGroupsResponse>;
    /**
     * Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
     */
    postDescribeCacheSubnetGroups(req: operations.POSTDescribeCacheSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCacheSubnetGroupsResponse>;
    /**
     * Returns the default engine and system parameter information for the specified cache engine.
     */
    postDescribeEngineDefaultParameters(req: operations.POSTDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultParametersResponse>;
    /**
     * <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.
     */
    postDescribeGlobalReplicationGroups(req: operations.POSTDescribeGlobalReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeGlobalReplicationGroupsResponse>;
    /**
     * <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postDescribeReplicationGroups(req: operations.POSTDescribeReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReplicationGroupsResponse>;
    /**
     * Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
     */
    postDescribeReservedCacheNodes(req: operations.POSTDescribeReservedCacheNodesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedCacheNodesResponse>;
    /**
     * Lists available reserved cache node offerings.
     */
    postDescribeReservedCacheNodesOfferings(req: operations.POSTDescribeReservedCacheNodesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedCacheNodesOfferingsResponse>;
    /**
     * Returns details of the service updates
     */
    postDescribeServiceUpdates(req: operations.POSTDescribeServiceUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeServiceUpdatesResponse>;
    /**
     * <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postDescribeSnapshots(req: operations.POSTDescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotsResponse>;
    /**
     * Returns details of the update actions
     */
    postDescribeUpdateActions(req: operations.POSTDescribeUpdateActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeUpdateActionsResponse>;
    /**
     * Returns a list of user groups.
     */
    postDescribeUserGroups(req: operations.POSTDescribeUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeUserGroupsResponse>;
    /**
     * Returns a list of users.
     */
    postDescribeUsers(req: operations.POSTDescribeUsersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeUsersResponse>;
    /**
     * Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
     */
    postDisassociateGlobalReplicationGroup(req: operations.POSTDisassociateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateGlobalReplicationGroupResponse>;
    /**
     * Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
     */
    postFailoverGlobalReplicationGroup(req: operations.POSTFailoverGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverGlobalReplicationGroupResponse>;
    /**
     * Increase the number of node groups in the Global datastore
     */
    postIncreaseNodeGroupsInGlobalReplicationGroup(req: operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
     */
    postIncreaseReplicaCount(req: operations.POSTIncreaseReplicaCountRequest, config?: AxiosRequestConfig): Promise<operations.POSTIncreaseReplicaCountResponse>;
    /**
     * <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
     */
    postListAllowedNodeTypeModifications(req: operations.POSTListAllowedNodeTypeModificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTListAllowedNodeTypeModificationsResponse>;
    /**
     * <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
     */
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    /**
     * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
     */
    postModifyCacheCluster(req: operations.POSTModifyCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCacheClusterResponse>;
    /**
     * Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
     */
    postModifyCacheParameterGroup(req: operations.POSTModifyCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCacheParameterGroupResponse>;
    /**
     * Modifies an existing cache subnet group.
     */
    postModifyCacheSubnetGroup(req: operations.POSTModifyCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCacheSubnetGroupResponse>;
    /**
     * Modifies the settings for a Global datastore.
     */
    postModifyGlobalReplicationGroup(req: operations.POSTModifyGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyGlobalReplicationGroupResponse>;
    /**
     * <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
     */
    postModifyReplicationGroup(req: operations.POSTModifyReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyReplicationGroupResponse>;
    /**
     * Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.
     */
    postModifyReplicationGroupShardConfiguration(req: operations.POSTModifyReplicationGroupShardConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyReplicationGroupShardConfigurationResponse>;
    /**
     * Changes user password(s) and/or access string.
     */
    postModifyUser(req: operations.POSTModifyUserRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyUserResponse>;
    /**
     * Changes the list of users that belong to the user group.
     */
    postModifyUserGroup(req: operations.POSTModifyUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyUserGroupResponse>;
    /**
     * Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.
     */
    postPurchaseReservedCacheNodesOffering(req: operations.POSTPurchaseReservedCacheNodesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseReservedCacheNodesOfferingResponse>;
    /**
     * Redistribute slots to ensure uniform distribution across existing shards in the cluster.
     */
    postRebalanceSlotsInGlobalReplicationGroup(req: operations.POSTRebalanceSlotsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebalanceSlotsInGlobalReplicationGroupResponse>;
    /**
     * <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
     */
    postRebootCacheCluster(req: operations.POSTRebootCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootCacheClusterResponse>;
    /**
     * Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
     */
    postRemoveTagsFromResource(req: operations.POSTRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsFromResourceResponse>;
    /**
     * Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
     */
    postResetCacheParameterGroup(req: operations.POSTResetCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetCacheParameterGroupResponse>;
    /**
     * Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
     */
    postRevokeCacheSecurityGroupIngress(req: operations.POSTRevokeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeCacheSecurityGroupIngressResponse>;
    /**
     * Start the migration of data.
     */
    postStartMigration(req: operations.POSTStartMigrationRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartMigrationResponse>;
    /**
     * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
     */
    postTestFailover(req: operations.POSTTestFailoverRequest, config?: AxiosRequestConfig): Promise<operations.POSTTestFailoverResponse>;
}
