import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://rds.{region}.amazonaws.com", "https://rds.{region}.amazonaws.com", "http://rds.amazonaws.com", "https://rds.amazonaws.com", "http://rds.{region}.amazonaws.com.cn", "https://rds.{region}.amazonaws.com.cn"];
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
 * Amazon DocumentDB API documentation
 *
 * @see {@link https://docs.aws.amazon.com/rds/} - Amazon Web Services documentation
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
     * Adds a source identifier to an existing event notification subscription.
     */
    getAddSourceIdentifierToSubscription(req: operations.GETAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETAddSourceIdentifierToSubscriptionResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
     */
    getApplyPendingMaintenanceAction(req: operations.GETApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GETApplyPendingMaintenanceActionResponse>;
    /**
     * <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    getCreateGlobalCluster(req: operations.GETCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateGlobalClusterResponse>;
    /**
     * <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
     */
    getDeleteDBCluster(req: operations.GETDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterResponse>;
    /**
     * Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
     */
    getDeleteDBClusterParameterGroup(req: operations.GETDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    getDeleteDBClusterSnapshot(req: operations.GETDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterSnapshotResponse>;
    /**
     * Deletes a previously provisioned instance.
     */
    getDeleteDBInstance(req: operations.GETDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBInstanceResponse>;
    /**
     * <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    getDeleteDBSubnetGroup(req: operations.GETDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an Amazon DocumentDB event notification subscription.
     */
    getDeleteEventSubscription(req: operations.GETDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEventSubscriptionResponse>;
    /**
     * <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    getDeleteGlobalCluster(req: operations.GETDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteGlobalClusterResponse>;
    /**
     * <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
     */
    getDescribeDBClusterSnapshotAttributes(req: operations.GETDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
     */
    getFailoverDBCluster(req: operations.GETFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverDBClusterResponse>;
    /**
     * Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    getModifyDBCluster(req: operations.GETModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
     */
    getModifyDBClusterSnapshotAttribute(req: operations.GETModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    getModifyDBInstance(req: operations.GETModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBInstanceResponse>;
    /**
     * Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
     */
    getModifyDBSubnetGroup(req: operations.GETModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSubnetGroupResponse>;
    /**
     * Modifies an existing Amazon DocumentDB event notification subscription.
     */
    getModifyEventSubscription(req: operations.GETModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEventSubscriptionResponse>;
    /**
     * <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    getModifyGlobalCluster(req: operations.GETModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyGlobalClusterResponse>;
    /**
     * <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
     */
    getRebootDBInstance(req: operations.GETRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootDBInstanceResponse>;
    /**
     * <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    getRemoveFromGlobalCluster(req: operations.GETRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveFromGlobalClusterResponse>;
    /**
     * Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
     */
    getRemoveSourceIdentifierFromSubscription(req: operations.GETRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * Removes metadata tags from an Amazon DocumentDB resource.
     */
    getRemoveTagsFromResource(req: operations.GETRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsFromResourceResponse>;
    /**
     * Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
     */
    getStartDBCluster(req: operations.GETStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStartDBClusterResponse>;
    /**
     * Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
     */
    getStopDBCluster(req: operations.GETStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStopDBClusterResponse>;
    /**
     * Adds a source identifier to an existing event notification subscription.
     */
    postAddSourceIdentifierToSubscription(req: operations.POSTAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddSourceIdentifierToSubscriptionResponse>;
    /**
     * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
     */
    postAddTagsToResource(req: operations.POSTAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsToResourceResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
     */
    postApplyPendingMaintenanceAction(req: operations.POSTApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTApplyPendingMaintenanceActionResponse>;
    /**
     * Copies the specified cluster parameter group.
     */
    postCopyDBClusterParameterGroup(req: operations.POSTCopyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterParameterGroupResponse>;
    /**
     * <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
     */
    postCopyDBClusterSnapshot(req: operations.POSTCopyDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterSnapshotResponse>;
    /**
     * Creates a new Amazon DocumentDB cluster.
     */
    postCreateDBCluster(req: operations.POSTCreateDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterResponse>;
    /**
     * <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
     */
    postCreateDBClusterParameterGroup(req: operations.POSTCreateDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterParameterGroupResponse>;
    /**
     * Creates a snapshot of a cluster.
     */
    postCreateDBClusterSnapshot(req: operations.POSTCreateDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterSnapshotResponse>;
    /**
     * Creates a new instance.
     */
    postCreateDBInstance(req: operations.POSTCreateDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceResponse>;
    /**
     * Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
     */
    postCreateDBSubnetGroup(req: operations.POSTCreateDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSubnetGroupResponse>;
    /**
     * <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
     */
    postCreateEventSubscription(req: operations.POSTCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEventSubscriptionResponse>;
    /**
     * <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    postCreateGlobalCluster(req: operations.POSTCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateGlobalClusterResponse>;
    /**
     * <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
     */
    postDeleteDBCluster(req: operations.POSTDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterResponse>;
    /**
     * Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
     */
    postDeleteDBClusterParameterGroup(req: operations.POSTDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    postDeleteDBClusterSnapshot(req: operations.POSTDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterSnapshotResponse>;
    /**
     * Deletes a previously provisioned instance.
     */
    postDeleteDBInstance(req: operations.POSTDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBInstanceResponse>;
    /**
     * <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    postDeleteDBSubnetGroup(req: operations.POSTDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an Amazon DocumentDB event notification subscription.
     */
    postDeleteEventSubscription(req: operations.POSTDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEventSubscriptionResponse>;
    /**
     * <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    postDeleteGlobalCluster(req: operations.POSTDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteGlobalClusterResponse>;
    /**
     * Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
     */
    postDescribeCertificates(req: operations.POSTDescribeCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCertificatesResponse>;
    /**
     * Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group.
     */
    postDescribeDBClusterParameterGroups(req: operations.POSTDescribeDBClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular cluster parameter group.
     */
    postDescribeDBClusterParameters(req: operations.POSTDescribeDBClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParametersResponse>;
    /**
     * <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
     */
    postDescribeDBClusterSnapshotAttributes(req: operations.POSTDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * Returns information about cluster snapshots. This API operation supports pagination.
     */
    postDescribeDBClusterSnapshots(req: operations.POSTDescribeDBClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotsResponse>;
    /**
     * Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
     */
    postDescribeDBClusters(req: operations.POSTDescribeDBClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClustersResponse>;
    /**
     * Returns a list of the available engines.
     */
    postDescribeDBEngineVersions(req: operations.POSTDescribeDBEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBEngineVersionsResponse>;
    /**
     * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
     */
    postDescribeDBInstances(req: operations.POSTDescribeDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBInstancesResponse>;
    /**
     * Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
     */
    postDescribeDBSubnetGroups(req: operations.POSTDescribeDBSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSubnetGroupsResponse>;
    /**
     * Returns the default engine and system parameter information for the cluster database engine.
     */
    postDescribeEngineDefaultClusterParameters(req: operations.POSTDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultClusterParametersResponse>;
    /**
     * Displays a list of categories for all event source types, or, if specified, for a specified source type.
     */
    postDescribeEventCategories(req: operations.POSTDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventCategoriesResponse>;
    /**
     * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
     */
    postDescribeEventSubscriptions(req: operations.POSTDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventSubscriptionsResponse>;
    /**
     * Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    postDescribeGlobalClusters(req: operations.POSTDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeGlobalClustersResponse>;
    /**
     * Returns a list of orderable instance options for the specified engine.
     */
    postDescribeOrderableDBInstanceOptions(req: operations.POSTDescribeOrderableDBInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOrderableDBInstanceOptionsResponse>;
    /**
     * Returns a list of resources (for example, instances) that have at least one pending maintenance action.
     */
    postDescribePendingMaintenanceActions(req: operations.POSTDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePendingMaintenanceActionsResponse>;
    /**
     * <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
     */
    postFailoverDBCluster(req: operations.POSTFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverDBClusterResponse>;
    /**
     * Lists all tags on an Amazon DocumentDB resource.
     */
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    /**
     * Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    postModifyDBCluster(req: operations.POSTModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterResponse>;
    /**
     * <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
     */
    postModifyDBClusterParameterGroup(req: operations.POSTModifyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterParameterGroupResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
     */
    postModifyDBClusterSnapshotAttribute(req: operations.POSTModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    postModifyDBInstance(req: operations.POSTModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBInstanceResponse>;
    /**
     * Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
     */
    postModifyDBSubnetGroup(req: operations.POSTModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSubnetGroupResponse>;
    /**
     * Modifies an existing Amazon DocumentDB event notification subscription.
     */
    postModifyEventSubscription(req: operations.POSTModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEventSubscriptionResponse>;
    /**
     * <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    postModifyGlobalCluster(req: operations.POSTModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyGlobalClusterResponse>;
    /**
     * <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
     */
    postRebootDBInstance(req: operations.POSTRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootDBInstanceResponse>;
    /**
     * <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
     */
    postRemoveFromGlobalCluster(req: operations.POSTRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveFromGlobalClusterResponse>;
    /**
     * Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
     */
    postRemoveSourceIdentifierFromSubscription(req: operations.POSTRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * Removes metadata tags from an Amazon DocumentDB resource.
     */
    postRemoveTagsFromResource(req: operations.POSTRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsFromResourceResponse>;
    /**
     * <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
     */
    postResetDBClusterParameterGroup(req: operations.POSTResetDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBClusterParameterGroupResponse>;
    /**
     * <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
     */
    postRestoreDBClusterFromSnapshot(req: operations.POSTRestoreDBClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterFromSnapshotResponse>;
    /**
     * Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group.
     */
    postRestoreDBClusterToPointInTime(req: operations.POSTRestoreDBClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterToPointInTimeResponse>;
    /**
     * Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
     */
    postStartDBCluster(req: operations.POSTStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartDBClusterResponse>;
    /**
     * Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
     */
    postStopDBCluster(req: operations.POSTStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopDBClusterResponse>;
}
