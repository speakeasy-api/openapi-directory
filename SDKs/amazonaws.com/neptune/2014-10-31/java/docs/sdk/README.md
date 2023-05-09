# SDK

## Overview

<fullname>Amazon Neptune</fullname> <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security.</p> <p>This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [getAddRoleToDBCluster](#getaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.
* [getAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [getApplyPendingMaintenanceAction](#getapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [getCreateGlobalCluster](#getcreateglobalcluster) - <p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>
* [getDeleteDBCluster](#getdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
* [getDeleteDBClusterEndpoint](#getdeletedbclusterendpoint) - Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
* [getDeleteDBClusterParameterGroup](#getdeletedbclusterparametergroup) - Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
* [getDeleteDBClusterSnapshot](#getdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [getDeleteDBInstance](#getdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
* [getDeleteDBParameterGroup](#getdeletedbparametergroup) - Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
* [getDeleteDBSubnetGroup](#getdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [getDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an event notification subscription.
* [getDeleteGlobalCluster](#getdeleteglobalcluster) - Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.
* [getDescribeDBClusterSnapshotAttributes](#getdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
* [getDescribeGlobalClusters](#getdescribeglobalclusters) - Returns information about Neptune global database clusters. This API supports pagination.
* [getDescribeValidDBInstanceModifications](#getdescribevaliddbinstancemodifications) - You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
* [getFailoverDBCluster](#getfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
* [getFailoverGlobalCluster](#getfailoverglobalcluster) - <p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>
* [getModifyDBCluster](#getmodifydbcluster) - Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [getModifyDBClusterEndpoint](#getmodifydbclusterendpoint) - Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
* [getModifyDBClusterSnapshotAttribute](#getmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
* [getModifyDBInstance](#getmodifydbinstance) - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
* [getModifyDBSubnetGroup](#getmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
* [getModifyEventSubscription](#getmodifyeventsubscription) - <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
* [getModifyGlobalCluster](#getmodifyglobalcluster) - Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.
* [getPromoteReadReplicaDBCluster](#getpromotereadreplicadbcluster) - Not supported.
* [getRebootDBInstance](#getrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
* [getRemoveFromGlobalCluster](#getremovefromglobalcluster) - Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.
* [getRemoveRoleFromDBCluster](#getremoverolefromdbcluster) - Disassociates an Identity and Access Management (IAM) role from a DB cluster.
* [getRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription) - Removes a source identifier from an existing event notification subscription.
* [getRemoveTagsFromResource](#getremovetagsfromresource) - Removes metadata tags from an Amazon Neptune resource.
* [getStartDBCluster](#getstartdbcluster) - Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
* [getStopDBCluster](#getstopdbcluster) - <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
* [postAddRoleToDBCluster](#postaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.
* [postAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [postAddTagsToResource](#postaddtagstoresource) - Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.
* [postApplyPendingMaintenanceAction](#postapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [postCopyDBClusterParameterGroup](#postcopydbclusterparametergroup) - Copies the specified DB cluster parameter group.
* [postCopyDBClusterSnapshot](#postcopydbclustersnapshot) - <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
* [postCopyDBParameterGroup](#postcopydbparametergroup) - Copies the specified DB parameter group.
* [postCreateDBCluster](#postcreatedbcluster) - <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
* [postCreateDBClusterEndpoint](#postcreatedbclusterendpoint) - Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
* [postCreateDBClusterParameterGroup](#postcreatedbclusterparametergroup) - <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
* [postCreateDBClusterSnapshot](#postcreatedbclustersnapshot) - Creates a snapshot of a DB cluster.
* [postCreateDBInstance](#postcreatedbinstance) - Creates a new DB instance.
* [postCreateDBParameterGroup](#postcreatedbparametergroup) - <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [postCreateDBSubnetGroup](#postcreatedbsubnetgroup) - Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
* [postCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
* [postCreateGlobalCluster](#postcreateglobalcluster) - <p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>
* [postDeleteDBCluster](#postdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
* [postDeleteDBClusterEndpoint](#postdeletedbclusterendpoint) - Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
* [postDeleteDBClusterParameterGroup](#postdeletedbclusterparametergroup) - Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
* [postDeleteDBClusterSnapshot](#postdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [postDeleteDBInstance](#postdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
* [postDeleteDBParameterGroup](#postdeletedbparametergroup) - Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
* [postDeleteDBSubnetGroup](#postdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [postDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an event notification subscription.
* [postDeleteGlobalCluster](#postdeleteglobalcluster) - Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.
* [postDescribeDBClusterEndpoints](#postdescribedbclusterendpoints) - <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
* [postDescribeDBClusterParameterGroups](#postdescribedbclusterparametergroups) -  Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.
* [postDescribeDBClusterParameters](#postdescribedbclusterparameters) - Returns the detailed parameter list for a particular DB cluster parameter group.
* [postDescribeDBClusterSnapshotAttributes](#postdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
* [postDescribeDBClusterSnapshots](#postdescribedbclustersnapshots) - Returns information about DB cluster snapshots. This API action supports pagination.
* [postDescribeDBClusters](#postdescribedbclusters) - <p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
* [postDescribeDBEngineVersions](#postdescribedbengineversions) - Returns a list of the available DB engines.
* [postDescribeDBInstances](#postdescribedbinstances) - <p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>
* [postDescribeDBParameterGroups](#postdescribedbparametergroups) - Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
* [postDescribeDBParameters](#postdescribedbparameters) - Returns the detailed parameter list for a particular DB parameter group.
* [postDescribeDBSubnetGroups](#postdescribedbsubnetgroups) - <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
* [postDescribeEngineDefaultClusterParameters](#postdescribeenginedefaultclusterparameters) - Returns the default engine and system parameter information for the cluster database engine.
* [postDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified database engine.
* [postDescribeEventCategories](#postdescribeeventcategories) - Displays a list of categories for all event source types, or, if specified, for a specified source type.
* [postDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
* [postDescribeEvents](#postdescribeevents) - Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
* [postDescribeGlobalClusters](#postdescribeglobalclusters) - Returns information about Neptune global database clusters. This API supports pagination.
* [postDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions) - Returns a list of orderable DB instance options for the specified engine.
* [postDescribePendingMaintenanceActions](#postdescribependingmaintenanceactions) - Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
* [postDescribeValidDBInstanceModifications](#postdescribevaliddbinstancemodifications) - You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
* [postFailoverDBCluster](#postfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
* [postFailoverGlobalCluster](#postfailoverglobalcluster) - <p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>
* [postListTagsForResource](#postlisttagsforresource) - Lists all tags on an Amazon Neptune resource.
* [postModifyDBCluster](#postmodifydbcluster) - Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [postModifyDBClusterEndpoint](#postmodifydbclusterendpoint) - Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
* [postModifyDBClusterParameterGroup](#postmodifydbclusterparametergroup) - <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
* [postModifyDBClusterSnapshotAttribute](#postmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
* [postModifyDBInstance](#postmodifydbinstance) - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
* [postModifyDBParameterGroup](#postmodifydbparametergroup) - <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [postModifyDBSubnetGroup](#postmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
* [postModifyEventSubscription](#postmodifyeventsubscription) - <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
* [postModifyGlobalCluster](#postmodifyglobalcluster) - Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.
* [postPromoteReadReplicaDBCluster](#postpromotereadreplicadbcluster) - Not supported.
* [postRebootDBInstance](#postrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
* [postRemoveFromGlobalCluster](#postremovefromglobalcluster) - Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.
* [postRemoveRoleFromDBCluster](#postremoverolefromdbcluster) - Disassociates an Identity and Access Management (IAM) role from a DB cluster.
* [postRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription) - Removes a source identifier from an existing event notification subscription.
* [postRemoveTagsFromResource](#postremovetagsfromresource) - Removes metadata tags from an Amazon Neptune resource.
* [postResetDBClusterParameterGroup](#postresetdbclusterparametergroup) - <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
* [postResetDBParameterGroup](#postresetdbparametergroup) - Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
* [postRestoreDBClusterFromSnapshot](#postrestoredbclusterfromsnapshot) - <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
* [postRestoreDBClusterToPointInTime](#postrestoredbclustertopointintime) - <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
* [postStartDBCluster](#poststartdbcluster) - Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
* [postStopDBCluster](#poststopdbcluster) - <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

## getAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterRequest;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterResponse;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddRoleToDBClusterRequest req = new GETAddRoleToDBClusterRequest(GETAddRoleToDBClusterActionEnum.ADD_ROLE_TO_DB_CLUSTER, "iure", "magnam", GETAddRoleToDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                featureName = "debitis";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            GETAddRoleToDBClusterResponse res = sdk.sdk.getAddRoleToDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionRequest;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionResponse;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "iusto", "excepturi", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETAddSourceIdentifierToSubscriptionResponse res = sdk.sdk.getAddSourceIdentifierToSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETApplyPendingMaintenanceActionActionEnum;
import org.openapis.openapi.models.operations.GETApplyPendingMaintenanceActionRequest;
import org.openapis.openapi.models.operations.GETApplyPendingMaintenanceActionResponse;
import org.openapis.openapi.models.operations.GETApplyPendingMaintenanceActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplyPendingMaintenanceActionRequest req = new GETApplyPendingMaintenanceActionRequest(GETApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, "ipsam", "repellendus", "sapiente", GETApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            GETApplyPendingMaintenanceActionResponse res = sdk.sdk.getApplyPendingMaintenanceAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateGlobalCluster

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.GETCreateGlobalClusterRequest;
import org.openapis.openapi.models.operations.GETCreateGlobalClusterResponse;
import org.openapis.openapi.models.operations.GETCreateGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateGlobalClusterRequest req = new GETCreateGlobalClusterRequest(GETCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, "esse", GETCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                deletionProtection = false;
                engine = "totam";
                engineVersion = "porro";
                sourceDBClusterIdentifier = "dolorum";
                storageEncrypted = false;
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            GETCreateGlobalClusterResponse res = sdk.sdk.getCreateGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBClusterRequest;
import org.openapis.openapi.models.operations.GETDeleteDBClusterResponse;
import org.openapis.openapi.models.operations.GETDeleteDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterRequest req = new GETDeleteDBClusterRequest(GETDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, "totam", GETDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                finalDBSnapshotIdentifier = "beatae";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            GETDeleteDBClusterResponse res = sdk.sdk.getDeleteDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBClusterEndpoint

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBClusterEndpointActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBClusterEndpointRequest;
import org.openapis.openapi.models.operations.GETDeleteDBClusterEndpointResponse;
import org.openapis.openapi.models.operations.GETDeleteDBClusterEndpointVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterEndpointRequest req = new GETDeleteDBClusterEndpointRequest(GETDeleteDBClusterEndpointActionEnum.DELETE_DB_CLUSTER_ENDPOINT, "excepturi", GETDeleteDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            GETDeleteDBClusterEndpointResponse res = sdk.sdk.getDeleteDBClusterEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBClusterParameterGroup

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterParameterGroupRequest req = new GETDeleteDBClusterParameterGroupRequest(GETDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, "laboriosam", GETDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            GETDeleteDBClusterParameterGroupResponse res = sdk.sdk.getDeleteDBClusterParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBClusterSnapshotRequest;
import org.openapis.openapi.models.operations.GETDeleteDBClusterSnapshotResponse;
import org.openapis.openapi.models.operations.GETDeleteDBClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterSnapshotRequest req = new GETDeleteDBClusterSnapshotRequest(GETDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, "quidem", GETDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            GETDeleteDBClusterSnapshotResponse res = sdk.sdk.getDeleteDBClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceRequest;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceResponse;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "corporis", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                finalDBSnapshotIdentifier = "explicabo";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETDeleteDBInstanceResponse res = sdk.sdk.getDeleteDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBParameterGroup

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBParameterGroupRequest req = new GETDeleteDBParameterGroupRequest(GETDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, "culpa", GETDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDeleteDBParameterGroupResponse res = sdk.sdk.getDeleteDBParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "mollitia", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            GETDeleteDBSubnetGroupResponse res = sdk.sdk.getDeleteDBSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteEventSubscription

Deletes an event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "quis", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            GETDeleteEventSubscriptionResponse res = sdk.sdk.getDeleteEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteGlobalCluster

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteGlobalClusterRequest;
import org.openapis.openapi.models.operations.GETDeleteGlobalClusterResponse;
import org.openapis.openapi.models.operations.GETDeleteGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGlobalClusterRequest req = new GETDeleteGlobalClusterRequest(GETDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, "ipsam", GETDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GETDeleteGlobalClusterResponse res = sdk.sdk.getDeleteGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBClusterSnapshotAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBClusterSnapshotAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeDBClusterSnapshotAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeDBClusterSnapshotAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBClusterSnapshotAttributesRequest req = new GETDescribeDBClusterSnapshotAttributesRequest(GETDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, "reiciendis", GETDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            GETDescribeDBClusterSnapshotAttributesResponse res = sdk.sdk.getDescribeDBClusterSnapshotAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeGlobalClusters

Returns information about Neptune global database clusters. This API supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeGlobalClustersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeGlobalClustersRequest;
import org.openapis.openapi.models.operations.GETDescribeGlobalClustersResponse;
import org.openapis.openapi.models.operations.GETDescribeGlobalClustersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeGlobalClustersRequest req = new GETDescribeGlobalClustersRequest(GETDescribeGlobalClustersActionEnum.DESCRIBE_GLOBAL_CLUSTERS, GETDescribeGlobalClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                globalClusterIdentifier = "cum";
                marker = "perferendis";
                maxRecords = 39187L;
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            GETDescribeGlobalClustersResponse res = sdk.sdk.getDescribeGlobalClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeValidDBInstanceModifications

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeValidDBInstanceModificationsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeValidDBInstanceModificationsRequest;
import org.openapis.openapi.models.operations.GETDescribeValidDBInstanceModificationsResponse;
import org.openapis.openapi.models.operations.GETDescribeValidDBInstanceModificationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeValidDBInstanceModificationsRequest req = new GETDescribeValidDBInstanceModificationsRequest(GETDescribeValidDBInstanceModificationsActionEnum.DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS, "harum", GETDescribeValidDBInstanceModificationsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            GETDescribeValidDBInstanceModificationsResponse res = sdk.sdk.getDescribeValidDBInstanceModifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETFailoverDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETFailoverDBClusterRequest;
import org.openapis.openapi.models.operations.GETFailoverDBClusterResponse;
import org.openapis.openapi.models.operations.GETFailoverDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverDBClusterRequest req = new GETFailoverDBClusterRequest(GETFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, GETFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbClusterIdentifier = "excepturi";
                targetDBInstanceIdentifier = "pariatur";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            GETFailoverDBClusterResponse res = sdk.sdk.getFailoverDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverGlobalCluster

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETFailoverGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.GETFailoverGlobalClusterRequest;
import org.openapis.openapi.models.operations.GETFailoverGlobalClusterResponse;
import org.openapis.openapi.models.operations.GETFailoverGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverGlobalClusterRequest req = new GETFailoverGlobalClusterRequest(GETFailoverGlobalClusterActionEnum.FAILOVER_GLOBAL_CLUSTER, "itaque", "incidunt", GETFailoverGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETFailoverGlobalClusterResponse res = sdk.sdk.getFailoverGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBCluster

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBClusterCloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterRequest;
import org.openapis.openapi.models.operations.GETModifyDBClusterResponse;
import org.openapis.openapi.models.operations.GETModifyDBClusterServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterRequest req = new GETModifyDBClusterRequest(GETModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, "labore", GETModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                backupRetentionPeriod = 264730L;
                cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration() {{
                    disableLogTypes = new String[]{{
                        add("aliquid"),
                    }};
                    enableLogTypes = new String[]{{
                        add("quos"),
                        add("perferendis"),
                        add("magni"),
                    }};
                }};;
                copyTagsToSnapshot = false;
                dbClusterParameterGroupName = "assumenda";
                dbInstanceParameterGroupName = "ipsam";
                deletionProtection = false;
                enableIAMDatabaseAuthentication = false;
                engineVersion = "alias";
                masterUserPassword = "fugit";
                newDBClusterIdentifier = "dolorum";
                optionGroupName = "excepturi";
                port = 270008L;
                preferredBackupWindow = "facilis";
                preferredMaintenanceWindow = "tempore";
                serverlessV2ScalingConfiguration = new GETModifyDBClusterServerlessV2ScalingConfiguration() {{
                    maxCapacity = 2884.76;
                    minCapacity = 9621.89;
                }};;
                vpcSecurityGroupIds = new String[]{{
                    add("non"),
                    add("eligendi"),
                }};
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            GETModifyDBClusterResponse res = sdk.sdk.getModifyDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBClusterEndpoint

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBClusterEndpointActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBClusterEndpointRequest;
import org.openapis.openapi.models.operations.GETModifyDBClusterEndpointResponse;
import org.openapis.openapi.models.operations.GETModifyDBClusterEndpointVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterEndpointRequest req = new GETModifyDBClusterEndpointRequest(GETModifyDBClusterEndpointActionEnum.MODIFY_DB_CLUSTER_ENDPOINT, "a", GETModifyDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                endpointType = "dolorum";
                excludedMembers = new String[]{{
                    add("in"),
                    add("illum"),
                }};
                staticMembers = new String[]{{
                    add("rerum"),
                    add("dicta"),
                    add("magnam"),
                    add("cumque"),
                }};
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETModifyDBClusterEndpointResponse res = sdk.sdk.getModifyDBClusterEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBClusterSnapshotAttributeActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBClusterSnapshotAttributeRequest;
import org.openapis.openapi.models.operations.GETModifyDBClusterSnapshotAttributeResponse;
import org.openapis.openapi.models.operations.GETModifyDBClusterSnapshotAttributeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterSnapshotAttributeRequest req = new GETModifyDBClusterSnapshotAttributeRequest(GETModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, "accusamus", "delectus", GETModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                valuesToAdd = new String[]{{
                    add("provident"),
                    add("nam"),
                    add("id"),
                }};
                valuesToRemove = new String[]{{
                    add("deleniti"),
                    add("sapiente"),
                    add("amet"),
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETModifyDBClusterSnapshotAttributeResponse res = sdk.sdk.getModifyDBClusterSnapshotAttribute(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBInstanceCloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.GETModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.GETModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBInstanceRequest req = new GETModifyDBInstanceRequest(GETModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, "magnam", GETModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                allocatedStorage = 716075L;
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                backupRetentionPeriod = 660174L;
                caCertificateIdentifier = "labore";
                cloudwatchLogsExportConfiguration = new GETModifyDBInstanceCloudwatchLogsExportConfiguration() {{
                    disableLogTypes = new String[]{{
                        add("suscipit"),
                        add("natus"),
                    }};
                    enableLogTypes = new String[]{{
                        add("eum"),
                        add("vero"),
                        add("aspernatur"),
                    }};
                }};;
                copyTagsToSnapshot = false;
                dbInstanceClass = "architecto";
                dbParameterGroupName = "magnam";
                dbPortNumber = 92373L;
                dbSecurityGroups = new String[]{{
                    add("ullam"),
                    add("provident"),
                    add("quos"),
                }};
                dbSubnetGroupName = "sint";
                deletionProtection = false;
                domain = "accusantium";
                domainIAMRoleName = "mollitia";
                enableIAMDatabaseAuthentication = false;
                enablePerformanceInsights = false;
                engineVersion = "reiciendis";
                iops = 652103L;
                licenseModel = "ad";
                masterUserPassword = "eum";
                monitoringInterval = 221262L;
                monitoringRoleArn = "necessitatibus";
                multiAZ = false;
                newDBInstanceIdentifier = "odit";
                optionGroupName = "nemo";
                performanceInsightsKMSKeyId = "quasi";
                preferredBackupWindow = "iure";
                preferredMaintenanceWindow = "doloribus";
                promotionTier = 891924L;
                publiclyAccessible = false;
                storageType = "eius";
                tdeCredentialArn = "maxime";
                tdeCredentialPassword = "deleniti";
                vpcSecurityGroupIds = new String[]{{
                    add("in"),
                    add("architecto"),
                    add("architecto"),
                }};
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            GETModifyDBInstanceResponse res = sdk.sdk.getModifyDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "pariatur",                 new String[]{{
                                add("consequuntur"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbSubnetGroupDescription = "praesentium";
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            GETModifyDBSubnetGroupResponse res = sdk.sdk.getModifyDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyEventSubscription

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "excepturi", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("ea"),
                }};
                snsTopicArn = "accusantium";
                sourceType = "ab";
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            GETModifyEventSubscriptionResponse res = sdk.sdk.getModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyGlobalCluster

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.GETModifyGlobalClusterRequest;
import org.openapis.openapi.models.operations.GETModifyGlobalClusterResponse;
import org.openapis.openapi.models.operations.GETModifyGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyGlobalClusterRequest req = new GETModifyGlobalClusterRequest(GETModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, "nemo", GETModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                allowMajorVersionUpgrade = false;
                deletionProtection = false;
                engineVersion = "voluptatibus";
                newGlobalClusterIdentifier = "perferendis";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            GETModifyGlobalClusterResponse res = sdk.sdk.getModifyGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPromoteReadReplicaDBCluster

Not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaDBClusterRequest;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaDBClusterResponse;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaDBClusterRequest req = new GETPromoteReadReplicaDBClusterRequest(GETPromoteReadReplicaDBClusterActionEnum.PROMOTE_READ_REPLICA_DB_CLUSTER, "dolores", GETPromoteReadReplicaDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            GETPromoteReadReplicaDBClusterResponse res = sdk.sdk.getPromoteReadReplicaDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebootDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETRebootDBInstanceRequest;
import org.openapis.openapi.models.operations.GETRebootDBInstanceResponse;
import org.openapis.openapi.models.operations.GETRebootDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "dolores", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                forceFailover = false;
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
            }};            

            GETRebootDBInstanceResponse res = sdk.sdk.getRebootDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveFromGlobalCluster

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveFromGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.GETRemoveFromGlobalClusterRequest;
import org.openapis.openapi.models.operations.GETRemoveFromGlobalClusterResponse;
import org.openapis.openapi.models.operations.GETRemoveFromGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveFromGlobalClusterRequest req = new GETRemoveFromGlobalClusterRequest(GETRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, "facilis", "perspiciatis", GETRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETRemoveFromGlobalClusterResponse res = sdk.sdk.getRemoveFromGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveRoleFromDBCluster

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBClusterRequest;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBClusterResponse;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveRoleFromDBClusterRequest req = new GETRemoveRoleFromDBClusterRequest(GETRemoveRoleFromDBClusterActionEnum.REMOVE_ROLE_FROM_DB_CLUSTER, "adipisci", "asperiores", GETRemoveRoleFromDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                featureName = "earum";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            GETRemoveRoleFromDBClusterResponse res = sdk.sdk.getRemoveRoleFromDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionRequest;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionResponse;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "delectus", "quaerat", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETRemoveSourceIdentifierFromSubscriptionResponse res = sdk.sdk.getRemoveSourceIdentifierFromSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveTagsFromResource

Removes metadata tags from an Amazon Neptune resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceActionEnum;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "excepturi",                 new String[]{{
                                add("voluptate"),
                                add("dignissimos"),
                                add("reiciendis"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
            }};            

            GETRemoveTagsFromResourceResponse res = sdk.sdk.getRemoveTagsFromResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartDBCluster

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETStartDBClusterRequest;
import org.openapis.openapi.models.operations.GETStartDBClusterResponse;
import org.openapis.openapi.models.operations.GETStartDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartDBClusterRequest req = new GETStartDBClusterRequest(GETStartDBClusterActionEnum.START_DB_CLUSTER, "quaerat", GETStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            GETStartDBClusterResponse res = sdk.sdk.getStartDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopDBCluster

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETStopDBClusterRequest;
import org.openapis.openapi.models.operations.GETStopDBClusterResponse;
import org.openapis.openapi.models.operations.GETStopDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopDBClusterRequest req = new GETStopDBClusterRequest(GETStopDBClusterActionEnum.STOP_DB_CLUSTER, "fugiat", GETStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETStopDBClusterResponse res = sdk.sdk.getStopDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddRoleToDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTAddRoleToDBClusterRequest;
import org.openapis.openapi.models.operations.POSTAddRoleToDBClusterResponse;
import org.openapis.openapi.models.operations.POSTAddRoleToDBClusterVersionEnum;
import org.openapis.openapi.models.shared.AddRoleToDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddRoleToDBClusterRequest req = new POSTAddRoleToDBClusterRequest(POSTAddRoleToDBClusterActionEnum.ADD_ROLE_TO_DB_CLUSTER, POSTAddRoleToDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTAddRoleToDBClusterResponse res = sdk.sdk.postAddRoleToDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.AddSourceIdentifierToSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "aspernatur".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "optio";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "ad";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "suscipit";
            }};            

            POSTAddSourceIdentifierToSubscriptionResponse res = sdk.sdk.postAddSourceIdentifierToSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddTagsToResource

Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceActionEnum;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceRequest;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceResponse;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceVersionEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTAddTagsToResourceResponse res = sdk.sdk.postAddTagsToResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTApplyPendingMaintenanceActionActionEnum;
import org.openapis.openapi.models.operations.POSTApplyPendingMaintenanceActionRequest;
import org.openapis.openapi.models.operations.POSTApplyPendingMaintenanceActionResponse;
import org.openapis.openapi.models.operations.POSTApplyPendingMaintenanceActionVersionEnum;
import org.openapis.openapi.models.shared.ApplyPendingMaintenanceActionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTApplyPendingMaintenanceActionRequest req = new POSTApplyPendingMaintenanceActionRequest(POSTApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, POSTApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            POSTApplyPendingMaintenanceActionResponse res = sdk.sdk.postApplyPendingMaintenanceAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyDBClusterParameterGroup

Copies the specified DB cluster parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCopyDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCopyDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CopyDBClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterParameterGroupRequest req = new POSTCopyDBClusterParameterGroupRequest(POSTCopyDBClusterParameterGroupActionEnum.COPY_DB_CLUSTER_PARAMETER_GROUP, POSTCopyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            POSTCopyDBClusterParameterGroupResponse res = sdk.sdk.postCopyDBClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyDBClusterSnapshot

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCopyDBClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCopyDBClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CopyDBClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterSnapshotRequest req = new POSTCopyDBClusterSnapshotRequest(POSTCopyDBClusterSnapshotActionEnum.COPY_DB_CLUSTER_SNAPSHOT, POSTCopyDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            POSTCopyDBClusterSnapshotResponse res = sdk.sdk.postCopyDBClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyDBParameterGroup

Copies the specified DB parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CopyDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBParameterGroupRequest req = new POSTCopyDBParameterGroupRequest(POSTCopyDBParameterGroupActionEnum.COPY_DB_PARAMETER_GROUP, POSTCopyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            POSTCopyDBParameterGroupResponse res = sdk.sdk.postCopyDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBCluster

<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterRequest req = new POSTCreateDBClusterRequest(POSTCreateDBClusterActionEnum.CREATE_DB_CLUSTER, POSTCreateDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "soluta".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTCreateDBClusterResponse res = sdk.sdk.postCreateDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBClusterEndpoint

Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterEndpointRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterEndpointResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterEndpointVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterEndpointMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterEndpointRequest req = new POSTCreateDBClusterEndpointRequest(POSTCreateDBClusterEndpointActionEnum.CREATE_DB_CLUSTER_ENDPOINT, POSTCreateDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "temporibus";
                xAmzDate = "qui";
                xAmzSecurityToken = "neque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "magni";
            }};            

            POSTCreateDBClusterEndpointResponse res = sdk.sdk.postCreateDBClusterEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBClusterParameterGroup

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterParameterGroupRequest req = new POSTCreateDBClusterParameterGroupRequest(POSTCreateDBClusterParameterGroupActionEnum.CREATE_DB_CLUSTER_PARAMETER_GROUP, POSTCreateDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTCreateDBClusterParameterGroupResponse res = sdk.sdk.postCreateDBClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBClusterSnapshot

Creates a snapshot of a DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterSnapshotRequest req = new POSTCreateDBClusterSnapshotRequest(POSTCreateDBClusterSnapshotActionEnum.CREATE_DB_CLUSTER_SNAPSHOT, POSTCreateDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTCreateDBClusterSnapshotResponse res = sdk.sdk.postCreateDBClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBInstance

Creates a new DB instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
            }};            

            POSTCreateDBInstanceResponse res = sdk.sdk.postCreateDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBParameterGroup

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBParameterGroupRequest req = new POSTCreateDBParameterGroupRequest(POSTCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, POSTCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "itaque".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
            }};            

            POSTCreateDBParameterGroupResponse res = sdk.sdk.postCreateDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSubnetGroup

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "vero";
            }};            

            POSTCreateDBSubnetGroupResponse res = sdk.sdk.postCreateDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateEventSubscription

<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.CreateEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quis".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTCreateEventSubscriptionResponse res = sdk.sdk.postCreateEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateGlobalCluster

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateGlobalClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateGlobalClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.CreateGlobalClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateGlobalClusterRequest req = new POSTCreateGlobalClusterRequest(POSTCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, POSTCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTCreateGlobalClusterResponse res = sdk.sdk.postCreateGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterRequest req = new POSTDeleteDBClusterRequest(POSTDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, POSTDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTDeleteDBClusterResponse res = sdk.sdk.postDeleteDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBClusterEndpoint

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterEndpointRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterEndpointResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterEndpointVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBClusterEndpointMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterEndpointRequest req = new POSTDeleteDBClusterEndpointRequest(POSTDeleteDBClusterEndpointActionEnum.DELETE_DB_CLUSTER_ENDPOINT, POSTDeleteDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
            }};            

            POSTDeleteDBClusterEndpointResponse res = sdk.sdk.postDeleteDBClusterEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBClusterParameterGroup

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterParameterGroupRequest req = new POSTDeleteDBClusterParameterGroupRequest(POSTDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, POSTDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "vel";
                xAmzDate = "possimus";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "ex";
            }};            

            POSTDeleteDBClusterParameterGroupResponse res = sdk.sdk.postDeleteDBClusterParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterSnapshotRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterSnapshotResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBClusterSnapshotVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBClusterSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterSnapshotRequest req = new POSTDeleteDBClusterSnapshotRequest(POSTDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, POSTDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            POSTDeleteDBClusterSnapshotResponse res = sdk.sdk.postDeleteDBClusterSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            POSTDeleteDBInstanceResponse res = sdk.sdk.postDeleteDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBParameterGroup

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBParameterGroupRequest req = new POSTDeleteDBParameterGroupRequest(POSTDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, POSTDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            POSTDeleteDBParameterGroupResponse res = sdk.sdk.postDeleteDBParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "aut";
                xAmzCredential = "deleniti";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTDeleteDBSubnetGroupResponse res = sdk.sdk.postDeleteDBSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteEventSubscription

Deletes an event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.DeleteEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "laborum";
                xAmzDate = "placeat";
                xAmzSecurityToken = "velit";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "autem";
            }};            

            POSTDeleteEventSubscriptionResponse res = sdk.sdk.postDeleteEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteGlobalCluster

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteGlobalClusterRequest;
import org.openapis.openapi.models.operations.POSTDeleteGlobalClusterResponse;
import org.openapis.openapi.models.operations.POSTDeleteGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.DeleteGlobalClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGlobalClusterRequest req = new POSTDeleteGlobalClusterRequest(POSTDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, POSTDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            POSTDeleteGlobalClusterResponse res = sdk.sdk.postDeleteGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterEndpoints

<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterEndpointsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterEndpointsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterEndpointsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterEndpointsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterEndpointsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterEndpointsRequest req = new POSTDescribeDBClusterEndpointsRequest(POSTDescribeDBClusterEndpointsActionEnum.DESCRIBE_DB_CLUSTER_ENDPOINTS, POSTDescribeDBClusterEndpointsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "provident";
                maxRecords = "ipsa";
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTDescribeDBClusterEndpointsResponse res = sdk.sdk.postDescribeDBClusterEndpoints(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterParameterGroups

 Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParameterGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParameterGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterParameterGroupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParameterGroupsRequest req = new POSTDescribeDBClusterParameterGroupsRequest(POSTDescribeDBClusterParameterGroupsActionEnum.DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS, POSTDescribeDBClusterParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "quidem";
                maxRecords = "fugiat";
                requestBody = "ut".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTDescribeDBClusterParameterGroupsResponse res = sdk.sdk.postDescribeDBClusterParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterParameters

Returns the detailed parameter list for a particular DB cluster parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterParametersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParametersRequest req = new POSTDescribeDBClusterParametersRequest(POSTDescribeDBClusterParametersActionEnum.DESCRIBE_DB_CLUSTER_PARAMETERS, POSTDescribeDBClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "id";
                maxRecords = "quidem";
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "quo";
                xAmzDate = "fuga";
                xAmzSecurityToken = "eius";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTDescribeDBClusterParametersResponse res = sdk.sdk.postDescribeDBClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotAttributesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterSnapshotAttributesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterSnapshotAttributesRequest req = new POSTDescribeDBClusterSnapshotAttributesRequest(POSTDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, POSTDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "cupiditate".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "quo";
            }};            

            POSTDescribeDBClusterSnapshotAttributesResponse res = sdk.sdk.postDescribeDBClusterSnapshotAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterSnapshots

Returns information about DB cluster snapshots. This API action supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterSnapshotsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterSnapshotsRequest req = new POSTDescribeDBClusterSnapshotsRequest(POSTDescribeDBClusterSnapshotsActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOTS, POSTDescribeDBClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "recusandae";
                maxRecords = "aperiam";
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTDescribeDBClusterSnapshotsResponse res = sdk.sdk.postDescribeDBClusterSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusters

<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClustersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClustersRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClustersResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClustersVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClustersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClustersRequest req = new POSTDescribeDBClustersRequest(POSTDescribeDBClustersActionEnum.DESCRIBE_DB_CLUSTERS, POSTDescribeDBClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "occaecati";
                maxRecords = "commodi";
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            POSTDescribeDBClustersResponse res = sdk.sdk.postDescribeDBClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBEngineVersions

Returns a list of the available DB engines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBEngineVersionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "consequuntur";
                maxRecords = "deleniti";
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            POSTDescribeDBEngineVersionsResponse res = sdk.sdk.postDescribeDBEngineVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBInstances

<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBInstancesMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "sapiente";
                maxRecords = "consequuntur";
                requestBody = "ratione".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            POSTDescribeDBInstancesResponse res = sdk.sdk.postDescribeDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBParameterGroups

Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBParameterGroupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParameterGroupsRequest req = new POSTDescribeDBParameterGroupsRequest(POSTDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, POSTDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "veritatis";
                maxRecords = "esse";
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
            }};            

            POSTDescribeDBParameterGroupsResponse res = sdk.sdk.postDescribeDBParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBParameters

Returns the detailed parameter list for a particular DB parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBParametersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParametersRequest req = new POSTDescribeDBParametersRequest(POSTDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, POSTDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "rerum";
                maxRecords = "occaecati";
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sit";
                xAmzDate = "culpa";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "cumque";
            }};            

            POSTDescribeDBParametersResponse res = sdk.sdk.postDescribeDBParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSubnetGroups

<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSubnetGroupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "consequatur";
                maxRecords = "minus";
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTDescribeDBSubnetGroupsResponse res = sdk.sdk.postDescribeDBSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEngineDefaultClusterParameters

Returns the default engine and system parameter information for the cluster database engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultClusterParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultClusterParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultClusterParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultClusterParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeEngineDefaultClusterParametersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultClusterParametersRequest req = new POSTDescribeEngineDefaultClusterParametersRequest(POSTDescribeEngineDefaultClusterParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS, POSTDescribeEngineDefaultClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
            }};            

            POSTDescribeEngineDefaultClusterParametersResponse res = sdk.sdk.postDescribeEngineDefaultClusterParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified database engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeEngineDefaultParametersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "asperiores";
                maxRecords = "facere";
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            POSTDescribeEngineDefaultParametersResponse res = sdk.sdk.postDescribeEngineDefaultParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventCategoriesMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eius";
                xAmzCredential = "libero";
                xAmzDate = "illum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTDescribeEventCategoriesResponse res = sdk.sdk.postDescribeEventCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventSubscriptions

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventSubscriptionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dicta";
                maxRecords = "ullam";
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            POSTDescribeEventSubscriptionsResponse res = sdk.sdk.postDescribeEventSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEvents

Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "itaque";
                maxRecords = "dolorum";
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeEventsResponse res = sdk.sdk.postDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeGlobalClusters

Returns information about Neptune global database clusters. This API supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersRequest;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersResponse;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersVersionEnum;
import org.openapis.openapi.models.shared.DescribeGlobalClustersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeGlobalClustersRequest req = new POSTDescribeGlobalClustersRequest(POSTDescribeGlobalClustersActionEnum.DESCRIBE_GLOBAL_CLUSTERS, POSTDescribeGlobalClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "veritatis";
                maxRecords = "consectetur";
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            POSTDescribeGlobalClustersResponse res = sdk.sdk.postDescribeGlobalClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOrderableDBInstanceOptions

Returns a list of orderable DB instance options for the specified engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOrderableDBInstanceOptionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "ab";
                maxRecords = "corrupti";
                requestBody = "non".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTDescribeOrderableDBInstanceOptionsResponse res = sdk.sdk.postDescribeOrderableDBInstanceOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribePendingMaintenanceActions

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribePendingMaintenanceActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribePendingMaintenanceActionsRequest;
import org.openapis.openapi.models.operations.POSTDescribePendingMaintenanceActionsResponse;
import org.openapis.openapi.models.operations.POSTDescribePendingMaintenanceActionsVersionEnum;
import org.openapis.openapi.models.shared.DescribePendingMaintenanceActionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePendingMaintenanceActionsRequest req = new POSTDescribePendingMaintenanceActionsRequest(POSTDescribePendingMaintenanceActionsActionEnum.DESCRIBE_PENDING_MAINTENANCE_ACTIONS, POSTDescribePendingMaintenanceActionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dignissimos";
                maxRecords = "dicta";
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            POSTDescribePendingMaintenanceActionsResponse res = sdk.sdk.postDescribePendingMaintenanceActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeValidDBInstanceModifications

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeValidDBInstanceModificationsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeValidDBInstanceModificationsRequest;
import org.openapis.openapi.models.operations.POSTDescribeValidDBInstanceModificationsResponse;
import org.openapis.openapi.models.operations.POSTDescribeValidDBInstanceModificationsVersionEnum;
import org.openapis.openapi.models.shared.DescribeValidDBInstanceModificationsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeValidDBInstanceModificationsRequest req = new POSTDescribeValidDBInstanceModificationsRequest(POSTDescribeValidDBInstanceModificationsActionEnum.DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS, POSTDescribeValidDBInstanceModificationsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "officia";
                xAmzCredential = "maxime";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "officia";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDescribeValidDBInstanceModificationsResponse res = sdk.sdk.postDescribeValidDBInstanceModifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTFailoverDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTFailoverDBClusterRequest;
import org.openapis.openapi.models.operations.POSTFailoverDBClusterResponse;
import org.openapis.openapi.models.operations.POSTFailoverDBClusterVersionEnum;
import org.openapis.openapi.models.shared.FailoverDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverDBClusterRequest req = new POSTFailoverDBClusterRequest(POSTFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, POSTFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
            }};            

            POSTFailoverDBClusterResponse res = sdk.sdk.postFailoverDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFailoverGlobalCluster

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTFailoverGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.POSTFailoverGlobalClusterRequest;
import org.openapis.openapi.models.operations.POSTFailoverGlobalClusterResponse;
import org.openapis.openapi.models.operations.POSTFailoverGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.FailoverGlobalClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverGlobalClusterRequest req = new POSTFailoverGlobalClusterRequest(POSTFailoverGlobalClusterActionEnum.FAILOVER_GLOBAL_CLUSTER, POSTFailoverGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "est";
                xAmzCredential = "recusandae";
                xAmzDate = "totam";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTFailoverGlobalClusterResponse res = sdk.sdk.postFailoverGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTagsForResource

Lists all tags on an Amazon Neptune resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTListTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTListTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "facilis";
                xAmzDate = "cum";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            POSTListTagsForResourceResponse res = sdk.sdk.postListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBCluster

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBClusterRequest;
import org.openapis.openapi.models.operations.POSTModifyDBClusterResponse;
import org.openapis.openapi.models.operations.POSTModifyDBClusterVersionEnum;
import org.openapis.openapi.models.shared.CloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.shared.ModifyDBClusterMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterRequest req = new POSTModifyDBClusterRequest(POSTModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, POSTModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "assumenda".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            POSTModifyDBClusterResponse res = sdk.sdk.postModifyDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBClusterEndpoint

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBClusterEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBClusterEndpointRequest;
import org.openapis.openapi.models.operations.POSTModifyDBClusterEndpointResponse;
import org.openapis.openapi.models.operations.POSTModifyDBClusterEndpointVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBClusterEndpointMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterEndpointRequest req = new POSTModifyDBClusterEndpointRequest(POSTModifyDBClusterEndpointActionEnum.MODIFY_DB_CLUSTER_ENDPOINT, POSTModifyDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "doloribus";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTModifyDBClusterEndpointResponse res = sdk.sdk.postModifyDBClusterEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBClusterParameterGroup

<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ModifyDBClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterParameterGroupRequest req = new POSTModifyDBClusterParameterGroupRequest(POSTModifyDBClusterParameterGroupActionEnum.MODIFY_DB_CLUSTER_PARAMETER_GROUP, POSTModifyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTModifyDBClusterParameterGroupResponse res = sdk.sdk.postModifyDBClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBClusterSnapshotAttributeActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBClusterSnapshotAttributeRequest;
import org.openapis.openapi.models.operations.POSTModifyDBClusterSnapshotAttributeResponse;
import org.openapis.openapi.models.operations.POSTModifyDBClusterSnapshotAttributeVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBClusterSnapshotAttributeMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterSnapshotAttributeRequest req = new POSTModifyDBClusterSnapshotAttributeRequest(POSTModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, POSTModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            POSTModifyDBClusterSnapshotAttributeResponse res = sdk.sdk.postModifyDBClusterSnapshotAttribute(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.CloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.shared.ModifyDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            POSTModifyDBInstanceResponse res = sdk.sdk.postModifyDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBParameterGroup

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ModifyDBParameterGroupMessage;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBParameterGroupRequest req = new POSTModifyDBParameterGroupRequest(POSTModifyDBParameterGroupActionEnum.MODIFY_DB_PARAMETER_GROUP, POSTModifyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTModifyDBParameterGroupResponse res = sdk.sdk.postModifyDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "temporibus".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
            }};            

            POSTModifyDBSubnetGroupResponse res = sdk.sdk.postModifyDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyEventSubscription

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.ModifyEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTModifyEventSubscriptionResponse res = sdk.sdk.postModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyGlobalCluster

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.POSTModifyGlobalClusterRequest;
import org.openapis.openapi.models.operations.POSTModifyGlobalClusterResponse;
import org.openapis.openapi.models.operations.POSTModifyGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.ModifyGlobalClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyGlobalClusterRequest req = new POSTModifyGlobalClusterRequest(POSTModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, POSTModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
            }};            

            POSTModifyGlobalClusterResponse res = sdk.sdk.postModifyGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPromoteReadReplicaDBCluster

Not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaDBClusterRequest;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaDBClusterResponse;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaDBClusterVersionEnum;
import org.openapis.openapi.models.shared.PromoteReadReplicaDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaDBClusterRequest req = new POSTPromoteReadReplicaDBClusterRequest(POSTPromoteReadReplicaDBClusterActionEnum.PROMOTE_READ_REPLICA_DB_CLUSTER, POSTPromoteReadReplicaDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            POSTPromoteReadReplicaDBClusterResponse res = sdk.sdk.postPromoteReadReplicaDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.RebootDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "illo";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTRebootDBInstanceResponse res = sdk.sdk.postRebootDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveFromGlobalCluster

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveFromGlobalClusterActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveFromGlobalClusterRequest;
import org.openapis.openapi.models.operations.POSTRemoveFromGlobalClusterResponse;
import org.openapis.openapi.models.operations.POSTRemoveFromGlobalClusterVersionEnum;
import org.openapis.openapi.models.shared.RemoveFromGlobalClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveFromGlobalClusterRequest req = new POSTRemoveFromGlobalClusterRequest(POSTRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, POSTRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "sed".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            POSTRemoveFromGlobalClusterResponse res = sdk.sdk.postRemoveFromGlobalCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveRoleFromDBCluster

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBClusterRequest;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBClusterResponse;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBClusterVersionEnum;
import org.openapis.openapi.models.shared.RemoveRoleFromDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveRoleFromDBClusterRequest req = new POSTRemoveRoleFromDBClusterRequest(POSTRemoveRoleFromDBClusterActionEnum.REMOVE_ROLE_FROM_DB_CLUSTER, POSTRemoveRoleFromDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            POSTRemoveRoleFromDBClusterResponse res = sdk.sdk.postRemoveRoleFromDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing event notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.RemoveSourceIdentifierFromSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTRemoveSourceIdentifierFromSubscriptionResponse res = sdk.sdk.postRemoveSourceIdentifierFromSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveTagsFromResource

Removes metadata tags from an Amazon Neptune resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceVersionEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTRemoveTagsFromResourceResponse res = sdk.sdk.postRemoveTagsFromResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetDBClusterParameterGroup

<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetDBClusterParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTResetDBClusterParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTResetDBClusterParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTResetDBClusterParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.ResetDBClusterParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBClusterParameterGroupRequest req = new POSTResetDBClusterParameterGroupRequest(POSTResetDBClusterParameterGroupActionEnum.RESET_DB_CLUSTER_PARAMETER_GROUP, POSTResetDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            POSTResetDBClusterParameterGroupResponse res = sdk.sdk.postResetDBClusterParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetDBParameterGroup

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.ResetDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBParameterGroupRequest req = new POSTResetDBParameterGroupRequest(POSTResetDBParameterGroupActionEnum.RESET_DB_PARAMETER_GROUP, POSTResetDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "error";
                xAmzCredential = "hic";
                xAmzDate = "expedita";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTResetDBParameterGroupResponse res = sdk.sdk.postResetDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBClusterFromSnapshot

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBClusterFromSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterFromSnapshotRequest req = new POSTRestoreDBClusterFromSnapshotRequest(POSTRestoreDBClusterFromSnapshotActionEnum.RESTORE_DB_CLUSTER_FROM_SNAPSHOT, POSTRestoreDBClusterFromSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "accusamus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "atque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ut";
            }};            

            POSTRestoreDBClusterFromSnapshotResponse res = sdk.sdk.postRestoreDBClusterFromSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBClusterToPointInTime

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterToPointInTimeActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterToPointInTimeRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterToPointInTimeResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterToPointInTimeVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBClusterToPointInTimeMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterToPointInTimeRequest req = new POSTRestoreDBClusterToPointInTimeRequest(POSTRestoreDBClusterToPointInTimeActionEnum.RESTORE_DB_CLUSTER_TO_POINT_IN_TIME, POSTRestoreDBClusterToPointInTimeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "magnam";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "sit";
            }};            

            POSTRestoreDBClusterToPointInTimeResponse res = sdk.sdk.postRestoreDBClusterToPointInTime(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartDBCluster

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTStartDBClusterRequest;
import org.openapis.openapi.models.operations.POSTStartDBClusterResponse;
import org.openapis.openapi.models.operations.POSTStartDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDBClusterMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartDBClusterRequest req = new POSTStartDBClusterRequest(POSTStartDBClusterActionEnum.START_DB_CLUSTER, POSTStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "et";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "sit";
            }};            

            POSTStartDBClusterResponse res = sdk.sdk.postStartDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStopDBCluster

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTStopDBClusterRequest;
import org.openapis.openapi.models.operations.POSTStopDBClusterResponse;
import org.openapis.openapi.models.operations.POSTStopDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDBClusterMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopDBClusterRequest req = new POSTStopDBClusterRequest(POSTStopDBClusterActionEnum.STOP_DB_CLUSTER, POSTStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "error";
                xAmzCredential = "consequatur";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "harum";
            }};            

            POSTStopDBClusterResponse res = sdk.sdk.postStopDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
