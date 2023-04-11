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
 * <fullname>Amazon Neptune</fullname> <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security.</p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p>
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
     * Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.
     */
    getAddRoleToDBCluster(req: operations.GETAddRoleToDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETAddRoleToDBClusterResponse>;
    /**
     * Adds a source identifier to an existing event notification subscription.
     */
    getAddSourceIdentifierToSubscription(req: operations.GETAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETAddSourceIdentifierToSubscriptionResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to a DB instance).
     */
    getApplyPendingMaintenanceAction(req: operations.GETApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GETApplyPendingMaintenanceActionResponse>;
    /**
     * <p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>
     */
    getCreateGlobalCluster(req: operations.GETCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateGlobalClusterResponse>;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
     */
    getDeleteDBCluster(req: operations.GETDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterResponse>;
    /**
     * Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
     */
    getDeleteDBClusterEndpoint(req: operations.GETDeleteDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterEndpointResponse>;
    /**
     * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
     */
    getDeleteDBClusterParameterGroup(req: operations.GETDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    getDeleteDBClusterSnapshot(req: operations.GETDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterSnapshotResponse>;
    /**
     * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
     */
    getDeleteDBInstance(req: operations.GETDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBInstanceResponse>;
    /**
     * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
     */
    getDeleteDBParameterGroup(req: operations.GETDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBParameterGroupResponse>;
    /**
     * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    getDeleteDBSubnetGroup(req: operations.GETDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an event notification subscription.
     */
    getDeleteEventSubscription(req: operations.GETDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEventSubscriptionResponse>;
    /**
     * Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.
     */
    getDeleteGlobalCluster(req: operations.GETDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteGlobalClusterResponse>;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
     */
    getDescribeDBClusterSnapshotAttributes(req: operations.GETDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * Returns information about Neptune global database clusters. This API supports pagination.
     */
    getDescribeGlobalClusters(req: operations.GETDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeGlobalClustersResponse>;
    /**
     * You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
     */
    getDescribeValidDBInstanceModifications(req: operations.GETDescribeValidDBInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeValidDBInstanceModificationsResponse>;
    /**
     * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
     */
    getFailoverDBCluster(req: operations.GETFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverDBClusterResponse>;
    /**
     * <p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>
     */
    getFailoverGlobalCluster(req: operations.GETFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverGlobalClusterResponse>;
    /**
     * Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    getModifyDBCluster(req: operations.GETModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterResponse>;
    /**
     * Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
     */
    getModifyDBClusterEndpoint(req: operations.GETModifyDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterEndpointResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
     */
    getModifyDBClusterSnapshotAttribute(req: operations.GETModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
     */
    getModifyDBInstance(req: operations.GETModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBInstanceResponse>;
    /**
     * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
     */
    getModifyDBSubnetGroup(req: operations.GETModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSubnetGroupResponse>;
    /**
     * <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
     */
    getModifyEventSubscription(req: operations.GETModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEventSubscriptionResponse>;
    /**
     * Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.
     */
    getModifyGlobalCluster(req: operations.GETModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyGlobalClusterResponse>;
    /**
     * Not supported.
     */
    getPromoteReadReplicaDBCluster(req: operations.GETPromoteReadReplicaDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETPromoteReadReplicaDBClusterResponse>;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
     */
    getRebootDBInstance(req: operations.GETRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootDBInstanceResponse>;
    /**
     * Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.
     */
    getRemoveFromGlobalCluster(req: operations.GETRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveFromGlobalClusterResponse>;
    /**
     * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
     */
    getRemoveRoleFromDBCluster(req: operations.GETRemoveRoleFromDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveRoleFromDBClusterResponse>;
    /**
     * Removes a source identifier from an existing event notification subscription.
     */
    getRemoveSourceIdentifierFromSubscription(req: operations.GETRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * Removes metadata tags from an Amazon Neptune resource.
     */
    getRemoveTagsFromResource(req: operations.GETRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsFromResourceResponse>;
    /**
     * Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
     */
    getStartDBCluster(req: operations.GETStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStartDBClusterResponse>;
    /**
     * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
     */
    getStopDBCluster(req: operations.GETStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStopDBClusterResponse>;
    /**
     * Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.
     */
    postAddRoleToDBCluster(req: operations.POSTAddRoleToDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddRoleToDBClusterResponse>;
    /**
     * Adds a source identifier to an existing event notification subscription.
     */
    postAddSourceIdentifierToSubscription(req: operations.POSTAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddSourceIdentifierToSubscriptionResponse>;
    /**
     * Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.
     */
    postAddTagsToResource(req: operations.POSTAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsToResourceResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to a DB instance).
     */
    postApplyPendingMaintenanceAction(req: operations.POSTApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTApplyPendingMaintenanceActionResponse>;
    /**
     * Copies the specified DB cluster parameter group.
     */
    postCopyDBClusterParameterGroup(req: operations.POSTCopyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterParameterGroupResponse>;
    /**
     * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
     */
    postCopyDBClusterSnapshot(req: operations.POSTCopyDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterSnapshotResponse>;
    /**
     * Copies the specified DB parameter group.
     */
    postCopyDBParameterGroup(req: operations.POSTCopyDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBParameterGroupResponse>;
    /**
     * <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
     */
    postCreateDBCluster(req: operations.POSTCreateDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterResponse>;
    /**
     * Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
     */
    postCreateDBClusterEndpoint(req: operations.POSTCreateDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterEndpointResponse>;
    /**
     * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
     */
    postCreateDBClusterParameterGroup(req: operations.POSTCreateDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterParameterGroupResponse>;
    /**
     * Creates a snapshot of a DB cluster.
     */
    postCreateDBClusterSnapshot(req: operations.POSTCreateDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterSnapshotResponse>;
    /**
     * Creates a new DB instance.
     */
    postCreateDBInstance(req: operations.POSTCreateDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceResponse>;
    /**
     * <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
     */
    postCreateDBParameterGroup(req: operations.POSTCreateDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBParameterGroupResponse>;
    /**
     * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
     */
    postCreateDBSubnetGroup(req: operations.POSTCreateDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSubnetGroupResponse>;
    /**
     * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
     */
    postCreateEventSubscription(req: operations.POSTCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEventSubscriptionResponse>;
    /**
     * <p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>
     */
    postCreateGlobalCluster(req: operations.POSTCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateGlobalClusterResponse>;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
     */
    postDeleteDBCluster(req: operations.POSTDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterResponse>;
    /**
     * Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
     */
    postDeleteDBClusterEndpoint(req: operations.POSTDeleteDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterEndpointResponse>;
    /**
     * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
     */
    postDeleteDBClusterParameterGroup(req: operations.POSTDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    postDeleteDBClusterSnapshot(req: operations.POSTDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterSnapshotResponse>;
    /**
     * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
     */
    postDeleteDBInstance(req: operations.POSTDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBInstanceResponse>;
    /**
     * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
     */
    postDeleteDBParameterGroup(req: operations.POSTDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBParameterGroupResponse>;
    /**
     * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    postDeleteDBSubnetGroup(req: operations.POSTDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an event notification subscription.
     */
    postDeleteEventSubscription(req: operations.POSTDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEventSubscriptionResponse>;
    /**
     * Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.
     */
    postDeleteGlobalCluster(req: operations.POSTDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteGlobalClusterResponse>;
    /**
     * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
     */
    postDescribeDBClusterEndpoints(req: operations.POSTDescribeDBClusterEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterEndpointsResponse>;
    /**
     *  Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.
     */
    postDescribeDBClusterParameterGroups(req: operations.POSTDescribeDBClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular DB cluster parameter group.
     */
    postDescribeDBClusterParameters(req: operations.POSTDescribeDBClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParametersResponse>;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
     */
    postDescribeDBClusterSnapshotAttributes(req: operations.POSTDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * Returns information about DB cluster snapshots. This API action supports pagination.
     */
    postDescribeDBClusterSnapshots(req: operations.POSTDescribeDBClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotsResponse>;
    /**
     * <p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
     */
    postDescribeDBClusters(req: operations.POSTDescribeDBClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClustersResponse>;
    /**
     * Returns a list of the available DB engines.
     */
    postDescribeDBEngineVersions(req: operations.POSTDescribeDBEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBEngineVersionsResponse>;
    /**
     * <p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>
     */
    postDescribeDBInstances(req: operations.POSTDescribeDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBInstancesResponse>;
    /**
     * Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
     */
    postDescribeDBParameterGroups(req: operations.POSTDescribeDBParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular DB parameter group.
     */
    postDescribeDBParameters(req: operations.POSTDescribeDBParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParametersResponse>;
    /**
     * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
     */
    postDescribeDBSubnetGroups(req: operations.POSTDescribeDBSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSubnetGroupsResponse>;
    /**
     * Returns the default engine and system parameter information for the cluster database engine.
     */
    postDescribeEngineDefaultClusterParameters(req: operations.POSTDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultClusterParametersResponse>;
    /**
     * Returns the default engine and system parameter information for the specified database engine.
     */
    postDescribeEngineDefaultParameters(req: operations.POSTDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultParametersResponse>;
    /**
     * Displays a list of categories for all event source types, or, if specified, for a specified source type.
     */
    postDescribeEventCategories(req: operations.POSTDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventCategoriesResponse>;
    /**
     * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
     */
    postDescribeEventSubscriptions(req: operations.POSTDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventSubscriptionsResponse>;
    /**
     * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * Returns information about Neptune global database clusters. This API supports pagination.
     */
    postDescribeGlobalClusters(req: operations.POSTDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeGlobalClustersResponse>;
    /**
     * Returns a list of orderable DB instance options for the specified engine.
     */
    postDescribeOrderableDBInstanceOptions(req: operations.POSTDescribeOrderableDBInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOrderableDBInstanceOptionsResponse>;
    /**
     * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
     */
    postDescribePendingMaintenanceActions(req: operations.POSTDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePendingMaintenanceActionsResponse>;
    /**
     * You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
     */
    postDescribeValidDBInstanceModifications(req: operations.POSTDescribeValidDBInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeValidDBInstanceModificationsResponse>;
    /**
     * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
     */
    postFailoverDBCluster(req: operations.POSTFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverDBClusterResponse>;
    /**
     * <p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>
     */
    postFailoverGlobalCluster(req: operations.POSTFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverGlobalClusterResponse>;
    /**
     * Lists all tags on an Amazon Neptune resource.
     */
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    /**
     * Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
     */
    postModifyDBCluster(req: operations.POSTModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterResponse>;
    /**
     * Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
     */
    postModifyDBClusterEndpoint(req: operations.POSTModifyDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterEndpointResponse>;
    /**
     * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
     */
    postModifyDBClusterParameterGroup(req: operations.POSTModifyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterParameterGroupResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
     */
    postModifyDBClusterSnapshotAttribute(req: operations.POSTModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
     */
    postModifyDBInstance(req: operations.POSTModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBInstanceResponse>;
    /**
     * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
     */
    postModifyDBParameterGroup(req: operations.POSTModifyDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBParameterGroupResponse>;
    /**
     * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
     */
    postModifyDBSubnetGroup(req: operations.POSTModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSubnetGroupResponse>;
    /**
     * <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
     */
    postModifyEventSubscription(req: operations.POSTModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEventSubscriptionResponse>;
    /**
     * Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.
     */
    postModifyGlobalCluster(req: operations.POSTModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyGlobalClusterResponse>;
    /**
     * Not supported.
     */
    postPromoteReadReplicaDBCluster(req: operations.POSTPromoteReadReplicaDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTPromoteReadReplicaDBClusterResponse>;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
     */
    postRebootDBInstance(req: operations.POSTRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootDBInstanceResponse>;
    /**
     * Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.
     */
    postRemoveFromGlobalCluster(req: operations.POSTRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveFromGlobalClusterResponse>;
    /**
     * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
     */
    postRemoveRoleFromDBCluster(req: operations.POSTRemoveRoleFromDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveRoleFromDBClusterResponse>;
    /**
     * Removes a source identifier from an existing event notification subscription.
     */
    postRemoveSourceIdentifierFromSubscription(req: operations.POSTRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * Removes metadata tags from an Amazon Neptune resource.
     */
    postRemoveTagsFromResource(req: operations.POSTRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsFromResourceResponse>;
    /**
     * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
     */
    postResetDBClusterParameterGroup(req: operations.POSTResetDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBClusterParameterGroupResponse>;
    /**
     * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
     */
    postResetDBParameterGroup(req: operations.POSTResetDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBParameterGroupResponse>;
    /**
     * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
     */
    postRestoreDBClusterFromSnapshot(req: operations.POSTRestoreDBClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterFromSnapshotResponse>;
    /**
     * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
     */
    postRestoreDBClusterToPointInTime(req: operations.POSTRestoreDBClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterToPointInTimeResponse>;
    /**
     * Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
     */
    postStartDBCluster(req: operations.POSTStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartDBClusterResponse>;
    /**
     * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
     */
    postStopDBCluster(req: operations.POSTStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopDBClusterResponse>;
}
