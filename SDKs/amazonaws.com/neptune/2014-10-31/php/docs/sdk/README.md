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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddRoleToDBClusterRequest();
    $request->action = GETAddRoleToDBClusterActionEnum::ADD_ROLE_TO_DB_CLUSTER;
    $request->dbClusterIdentifier = 'deserunt';
    $request->featureName = 'suscipit';
    $request->roleArn = 'iure';
    $request->version = GETAddRoleToDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getAddRoleToDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddSourceIdentifierToSubscriptionRequest();
    $request->action = GETAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->sourceIdentifier = 'minus';
    $request->subscriptionName = 'placeat';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->getAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyPendingMaintenanceActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyPendingMaintenanceActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyPendingMaintenanceActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETApplyPendingMaintenanceActionRequest();
    $request->action = GETApplyPendingMaintenanceActionActionEnum::APPLY_PENDING_MAINTENANCE_ACTION;
    $request->applyAction = 'quis';
    $request->optInType = 'veritatis';
    $request->resourceIdentifier = 'deserunt';
    $request->version = GETApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateGlobalCluster

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateGlobalClusterRequest();
    $request->action = GETCreateGlobalClusterActionEnum::CREATE_GLOBAL_CLUSTER;
    $request->deletionProtection = false;
    $request->engine = 'at';
    $request->engineVersion = 'maiores';
    $request->globalClusterIdentifier = 'molestiae';
    $request->sourceDBClusterIdentifier = 'quod';
    $request->storageEncrypted = false;
    $request->version = GETCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBClusterRequest();
    $request->action = GETDeleteDBClusterActionEnum::DELETE_DB_CLUSTER;
    $request->dbClusterIdentifier = 'officia';
    $request->finalDBSnapshotIdentifier = 'occaecati';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterEndpoint

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBClusterEndpointRequest();
    $request->action = GETDeleteDBClusterEndpointActionEnum::DELETE_DB_CLUSTER_ENDPOINT;
    $request->dbClusterEndpointIdentifier = 'molestiae';
    $request->version = GETDeleteDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDeleteDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterParameterGroup

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBClusterParameterGroupRequest();
    $request->action = GETDeleteDBClusterParameterGroupActionEnum::DELETE_DB_CLUSTER_PARAMETER_GROUP;
    $request->dbClusterParameterGroupName = 'aspernatur';
    $request->version = GETDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBClusterSnapshotRequest();
    $request->action = GETDeleteDBClusterSnapshotActionEnum::DELETE_DB_CLUSTER_SNAPSHOT;
    $request->dbClusterSnapshotIdentifier = 'laboriosam';
    $request->version = GETDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->getDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBInstanceRequest();
    $request->action = GETDeleteDBInstanceActionEnum::DELETE_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'saepe';
    $request->finalDBSnapshotIdentifier = 'quidem';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->getDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBParameterGroup

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBParameterGroupRequest();
    $request->action = GETDeleteDBParameterGroupActionEnum::DELETE_DB_PARAMETER_GROUP;
    $request->dbParameterGroupName = 'dolorem';
    $request->version = GETDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSubnetGroupRequest();
    $request->action = GETDeleteDBSubnetGroupActionEnum::DELETE_DB_SUBNET_GROUP;
    $request->dbSubnetGroupName = 'excepturi';
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEventSubscription

Deletes an event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteEventSubscriptionRequest();
    $request->action = GETDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->subscriptionName = 'dolorem';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGlobalCluster

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteGlobalClusterRequest();
    $request->action = GETDeleteGlobalClusterActionEnum::DELETE_GLOBAL_CLUSTER;
    $request->globalClusterIdentifier = 'quam';
    $request->version = GETDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBClusterSnapshotAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBClusterSnapshotAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBClusterSnapshotAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBClusterSnapshotAttributesRequest();
    $request->action = GETDescribeDBClusterSnapshotAttributesActionEnum::DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES;
    $request->dbClusterSnapshotIdentifier = 'animi';
    $request->version = GETDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->getDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeGlobalClusters

Returns information about Neptune global database clusters. This API supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeGlobalClustersRequest();
    $request->action = GETDescribeGlobalClustersActionEnum::DESCRIBE_GLOBAL_CLUSTERS;
    $request->globalClusterIdentifier = 'possimus';
    $request->marker = 'aut';
    $request->maxRecords = 97101;
    $request->version = GETDescribeGlobalClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getDescribeGlobalClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeValidDBInstanceModifications

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeValidDBInstanceModificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeValidDBInstanceModificationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeValidDBInstanceModificationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeValidDBInstanceModificationsRequest();
    $request->action = GETDescribeValidDBInstanceModificationsActionEnum::DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS;
    $request->dbInstanceIdentifier = 'nihil';
    $request->version = GETDescribeValidDBInstanceModificationsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDescribeValidDBInstanceModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETFailoverDBClusterRequest();
    $request->action = GETFailoverDBClusterActionEnum::FAILOVER_DB_CLUSTER;
    $request->dbClusterIdentifier = 'doloremque';
    $request->targetDBInstanceIdentifier = 'reprehenderit';
    $request->version = GETFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverGlobalCluster

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETFailoverGlobalClusterRequest();
    $request->action = GETFailoverGlobalClusterActionEnum::FAILOVER_GLOBAL_CLUSTER;
    $request->globalClusterIdentifier = 'harum';
    $request->targetDbClusterIdentifier = 'enim';
    $request->version = GETFailoverGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->getFailoverGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBCluster

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterCloudwatchLogsExportConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterServerlessV2ScalingConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBClusterRequest();
    $request->action = GETModifyDBClusterActionEnum::MODIFY_DB_CLUSTER;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->backupRetentionPeriod = 566602;
    $request->cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration();
    $request->cloudwatchLogsExportConfiguration->disableLogTypes = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->cloudwatchLogsExportConfiguration->enableLogTypes = [
        'repudiandae',
    ];
    $request->copyTagsToSnapshot = false;
    $request->dbClusterIdentifier = 'sint';
    $request->dbClusterParameterGroupName = 'veritatis';
    $request->dbInstanceParameterGroupName = 'itaque';
    $request->deletionProtection = false;
    $request->enableIAMDatabaseAuthentication = false;
    $request->engineVersion = 'incidunt';
    $request->masterUserPassword = 'enim';
    $request->newDBClusterIdentifier = 'consequatur';
    $request->optionGroupName = 'est';
    $request->port = 842342;
    $request->preferredBackupWindow = 'explicabo';
    $request->preferredMaintenanceWindow = 'deserunt';
    $request->serverlessV2ScalingConfiguration = new GETModifyDBClusterServerlessV2ScalingConfiguration();
    $request->serverlessV2ScalingConfiguration->maxCapacity = 7163.27;
    $request->serverlessV2ScalingConfiguration->minCapacity = 8413.86;
    $request->version = GETModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->vpcSecurityGroupIds = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBClusterEndpoint

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBClusterEndpointRequest();
    $request->action = GETModifyDBClusterEndpointActionEnum::MODIFY_DB_CLUSTER_ENDPOINT;
    $request->dbClusterEndpointIdentifier = 'alias';
    $request->endpointType = 'fugit';
    $request->excludedMembers = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->staticMembers = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->version = GETModifyDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getModifyDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterSnapshotAttributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterSnapshotAttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterSnapshotAttributeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBClusterSnapshotAttributeRequest();
    $request->action = GETModifyDBClusterSnapshotAttributeActionEnum::MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE;
    $request->attributeName = 'officia';
    $request->dbClusterSnapshotIdentifier = 'dolor';
    $request->valuesToAdd = [
        'a',
        'dolorum',
        'in',
        'in',
    ];
    $request->valuesToRemove = [
        'maiores',
        'rerum',
        'dicta',
        'magnam',
    ];
    $request->version = GETModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceCloudwatchLogsExportConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBInstanceRequest();
    $request->action = GETModifyDBInstanceActionEnum::MODIFY_DB_INSTANCE;
    $request->allocatedStorage = 581273;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->backupRetentionPeriod = 313218;
    $request->caCertificateIdentifier = 'accusamus';
    $request->cloudwatchLogsExportConfiguration = new GETModifyDBInstanceCloudwatchLogsExportConfiguration();
    $request->cloudwatchLogsExportConfiguration->disableLogTypes = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->cloudwatchLogsExportConfiguration->enableLogTypes = [
        'deleniti',
        'sapiente',
        'amet',
    ];
    $request->copyTagsToSnapshot = false;
    $request->dbInstanceClass = 'deserunt';
    $request->dbInstanceIdentifier = 'nisi';
    $request->dbParameterGroupName = 'vel';
    $request->dbPortNumber = 618809;
    $request->dbSecurityGroups = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->dbSubnetGroupName = 'magnam';
    $request->deletionProtection = false;
    $request->domain = 'distinctio';
    $request->domainIAMRoleName = 'id';
    $request->enableIAMDatabaseAuthentication = false;
    $request->enablePerformanceInsights = false;
    $request->engineVersion = 'labore';
    $request->iops = 290077;
    $request->licenseModel = 'suscipit';
    $request->masterUserPassword = 'natus';
    $request->monitoringInterval = 749170;
    $request->monitoringRoleArn = 'eum';
    $request->multiAZ = false;
    $request->newDBInstanceIdentifier = 'vero';
    $request->optionGroupName = 'aspernatur';
    $request->performanceInsightsKMSKeyId = 'architecto';
    $request->preferredBackupWindow = 'magnam';
    $request->preferredMaintenanceWindow = 'et';
    $request->promotionTier = 569965;
    $request->publiclyAccessible = false;
    $request->storageType = 'ullam';
    $request->tdeCredentialArn = 'provident';
    $request->tdeCredentialPassword = 'quos';
    $request->version = GETModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->vpcSecurityGroupIds = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBSubnetGroupRequest();
    $request->action = GETModifyDBSubnetGroupActionEnum::MODIFY_DB_SUBNET_GROUP;
    $request->dbSubnetGroupDescription = 'quasi';
    $request->dbSubnetGroupName = 'iure';
    $request->subnetIds = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->getModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEventSubscription

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyEventSubscriptionRequest();
    $request->action = GETModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->enabled = false;
    $request->eventCategories = [
        'repellat',
        'quibusdam',
    ];
    $request->snsTopicArn = 'sed';
    $request->sourceType = 'saepe';
    $request->subscriptionName = 'pariatur';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyGlobalCluster

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyGlobalClusterRequest();
    $request->action = GETModifyGlobalClusterActionEnum::MODIFY_GLOBAL_CLUSTER;
    $request->allowMajorVersionUpgrade = false;
    $request->deletionProtection = false;
    $request->engineVersion = 'illum';
    $request->globalClusterIdentifier = 'pariatur';
    $request->newGlobalClusterIdentifier = 'maxime';
    $request->version = GETModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromoteReadReplicaDBCluster

Not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPromoteReadReplicaDBClusterRequest();
    $request->action = GETPromoteReadReplicaDBClusterActionEnum::PROMOTE_READ_REPLICA_DB_CLUSTER;
    $request->dbClusterIdentifier = 'quidem';
    $request->version = GETPromoteReadReplicaDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getPromoteReadReplicaDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebootDBInstanceRequest();
    $request->action = GETRebootDBInstanceActionEnum::REBOOT_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'voluptatibus';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveFromGlobalCluster

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveFromGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveFromGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveFromGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveFromGlobalClusterRequest();
    $request->action = GETRemoveFromGlobalClusterActionEnum::REMOVE_FROM_GLOBAL_CLUSTER;
    $request->dbClusterIdentifier = 'libero';
    $request->globalClusterIdentifier = 'nobis';
    $request->version = GETRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->getRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveRoleFromDBCluster

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveRoleFromDBClusterRequest();
    $request->action = GETRemoveRoleFromDBClusterActionEnum::REMOVE_ROLE_FROM_DB_CLUSTER;
    $request->dbClusterIdentifier = 'eos';
    $request->featureName = 'perferendis';
    $request->roleArn = 'dolores';
    $request->version = GETRemoveRoleFromDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getRemoveRoleFromDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveSourceIdentifierFromSubscriptionRequest();
    $request->action = GETRemoveSourceIdentifierFromSubscriptionActionEnum::REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION;
    $request->sourceIdentifier = 'omnis';
    $request->subscriptionName = 'facilis';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->getRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTagsFromResource

Removes metadata tags from an Amazon Neptune resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveTagsFromResourceRequest();
    $request->action = GETRemoveTagsFromResourceActionEnum::REMOVE_TAGS_FROM_RESOURCE;
    $request->resourceName = 'occaecati';
    $request->tagKeys = [
        'adipisci',
        'asperiores',
        'earum',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartDBCluster

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartDBClusterRequest();
    $request->action = GETStartDBClusterActionEnum::START_DB_CLUSTER;
    $request->dbClusterIdentifier = 'libero';
    $request->version = GETStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->getStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopDBCluster

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopDBClusterRequest();
    $request->action = GETStopDBClusterActionEnum::STOP_DB_CLUSTER;
    $request->dbClusterIdentifier = 'qui';
    $request->version = GETStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getStopDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddRoleToDBClusterRequest();
    $request->action = POSTAddRoleToDBClusterActionEnum::ADD_ROLE_TO_DB_CLUSTER;
    $request->requestBody = 'amet';
    $request->version = POSTAddRoleToDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postAddRoleToDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddSourceIdentifierToSubscriptionRequest();
    $request->action = POSTAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->requestBody = 'quaerat';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->postAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTagsToResource

Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddTagsToResourceRequest();
    $request->action = POSTAddTagsToResourceActionEnum::ADD_TAGS_TO_RESOURCE;
    $request->requestBody = 'sit';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postAddTagsToResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyPendingMaintenanceActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyPendingMaintenanceActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyPendingMaintenanceActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTApplyPendingMaintenanceActionRequest();
    $request->action = POSTApplyPendingMaintenanceActionActionEnum::APPLY_PENDING_MAINTENANCE_ACTION;
    $request->requestBody = 'deleniti';
    $request->version = POSTApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBClusterParameterGroup

Copies the specified DB cluster parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyDBClusterParameterGroupRequest();
    $request->action = POSTCopyDBClusterParameterGroupActionEnum::COPY_DB_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'id';
    $request->version = POSTCopyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postCopyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBClusterSnapshot

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyDBClusterSnapshotRequest();
    $request->action = POSTCopyDBClusterSnapshotActionEnum::COPY_DB_CLUSTER_SNAPSHOT;
    $request->requestBody = 'ad';
    $request->version = POSTCopyDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postCopyDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBParameterGroup

Copies the specified DB parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyDBParameterGroupRequest();
    $request->action = POSTCopyDBParameterGroupActionEnum::COPY_DB_PARAMETER_GROUP;
    $request->requestBody = 'similique';
    $request->version = POSTCopyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postCopyDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBCluster

<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBClusterRequest();
    $request->action = POSTCreateDBClusterActionEnum::CREATE_DB_CLUSTER;
    $request->requestBody = 'qui';
    $request->version = POSTCreateDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->postCreateDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterEndpoint

Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBClusterEndpointRequest();
    $request->action = POSTCreateDBClusterEndpointActionEnum::CREATE_DB_CLUSTER_ENDPOINT;
    $request->requestBody = 'tenetur';
    $request->version = POSTCreateDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postCreateDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterParameterGroup

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBClusterParameterGroupRequest();
    $request->action = POSTCreateDBClusterParameterGroupActionEnum::CREATE_DB_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'totam';
    $request->version = POSTCreateDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postCreateDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterSnapshot

Creates a snapshot of a DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBClusterSnapshotRequest();
    $request->action = POSTCreateDBClusterSnapshotActionEnum::CREATE_DB_CLUSTER_SNAPSHOT;
    $request->requestBody = 'voluptas';
    $request->version = POSTCreateDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postCreateDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstance

Creates a new DB instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBInstanceRequest();
    $request->action = POSTCreateDBInstanceActionEnum::CREATE_DB_INSTANCE;
    $request->requestBody = 'pariatur';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postCreateDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBParameterGroup

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBParameterGroupRequest();
    $request->action = POSTCreateDBParameterGroupActionEnum::CREATE_DB_PARAMETER_GROUP;
    $request->requestBody = 'distinctio';
    $request->version = POSTCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->postCreateDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSubnetGroup

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSubnetGroupRequest();
    $request->action = POSTCreateDBSubnetGroupActionEnum::CREATE_DB_SUBNET_GROUP;
    $request->requestBody = 'fugit';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postCreateDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEventSubscription

<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateEventSubscriptionRequest();
    $request->action = POSTCreateEventSubscriptionActionEnum::CREATE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'cumque';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postCreateEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateGlobalCluster

<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateGlobalClusterRequest();
    $request->action = POSTCreateGlobalClusterActionEnum::CREATE_GLOBAL_CLUSTER;
    $request->requestBody = 'quos';
    $request->version = POSTCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBClusterRequest();
    $request->action = POSTDeleteDBClusterActionEnum::DELETE_DB_CLUSTER;
    $request->requestBody = 'adipisci';
    $request->version = POSTDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->postDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterEndpoint

Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBClusterEndpointRequest();
    $request->action = POSTDeleteDBClusterEndpointActionEnum::DELETE_DB_CLUSTER_ENDPOINT;
    $request->requestBody = 'est';
    $request->version = POSTDeleteDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->postDeleteDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterParameterGroup

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBClusterParameterGroupRequest();
    $request->action = POSTDeleteDBClusterParameterGroupActionEnum::DELETE_DB_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'quae';
    $request->version = POSTDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->postDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBClusterSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBClusterSnapshotRequest();
    $request->action = POSTDeleteDBClusterSnapshotActionEnum::DELETE_DB_CLUSTER_SNAPSHOT;
    $request->requestBody = 'quis';
    $request->version = POSTDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBInstanceRequest();
    $request->action = POSTDeleteDBInstanceActionEnum::DELETE_DB_INSTANCE;
    $request->requestBody = 'hic';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBParameterGroup

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBParameterGroupRequest();
    $request->action = POSTDeleteDBParameterGroupActionEnum::DELETE_DB_PARAMETER_GROUP;
    $request->requestBody = 'dolore';
    $request->version = POSTDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSubnetGroupRequest();
    $request->action = POSTDeleteDBSubnetGroupActionEnum::DELETE_DB_SUBNET_GROUP;
    $request->requestBody = 'exercitationem';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEventSubscription

Deletes an event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteEventSubscriptionRequest();
    $request->action = POSTDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'ducimus';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGlobalCluster

Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteGlobalClusterRequest();
    $request->action = POSTDeleteGlobalClusterActionEnum::DELETE_GLOBAL_CLUSTER;
    $request->requestBody = 'possimus';
    $request->version = POSTDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterEndpoints

<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterEndpointsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterEndpointsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterEndpointsRequest();
    $request->action = POSTDescribeDBClusterEndpointsActionEnum::DESCRIBE_DB_CLUSTER_ENDPOINTS;
    $request->marker = 'quasi';
    $request->maxRecords = 'ex';
    $request->requestBody = 'nulla';
    $request->version = POSTDescribeDBClusterEndpointsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postDescribeDBClusterEndpoints($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameterGroups

 Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterParameterGroupsRequest();
    $request->action = POSTDescribeDBClusterParameterGroupsActionEnum::DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS;
    $request->marker = 'impedit';
    $request->maxRecords = 'corporis';
    $request->requestBody = 'veniam';
    $request->version = POSTDescribeDBClusterParameterGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postDescribeDBClusterParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameters

Returns the detailed parameter list for a particular DB cluster parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterParametersRequest();
    $request->action = POSTDescribeDBClusterParametersActionEnum::DESCRIBE_DB_CLUSTER_PARAMETERS;
    $request->marker = 'aspernatur';
    $request->maxRecords = 'minima';
    $request->requestBody = 'eaque';
    $request->version = POSTDescribeDBClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->postDescribeDBClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterSnapshotAttributesRequest();
    $request->action = POSTDescribeDBClusterSnapshotAttributesActionEnum::DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES;
    $request->requestBody = 'fugit';
    $request->version = POSTDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshots

Returns information about DB cluster snapshots. This API action supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterSnapshotsRequest();
    $request->action = POSTDescribeDBClusterSnapshotsActionEnum::DESCRIBE_DB_CLUSTER_SNAPSHOTS;
    $request->marker = 'velit';
    $request->maxRecords = 'eum';
    $request->requestBody = 'autem';
    $request->version = POSTDescribeDBClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDescribeDBClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusters

<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClustersRequest();
    $request->action = POSTDescribeDBClustersActionEnum::DESCRIBE_DB_CLUSTERS;
    $request->marker = 'tempora';
    $request->maxRecords = 'numquam';
    $request->requestBody = 'explicabo';
    $request->version = POSTDescribeDBClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postDescribeDBClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBEngineVersions

Returns a list of the available DB engines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBEngineVersionsRequest();
    $request->action = POSTDescribeDBEngineVersionsActionEnum::DESCRIBE_DB_ENGINE_VERSIONS;
    $request->marker = 'esse';
    $request->maxRecords = 'rem';
    $request->requestBody = 'fuga';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postDescribeDBEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBInstances

<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBInstancesRequest();
    $request->action = POSTDescribeDBInstancesActionEnum::DESCRIBE_DB_INSTANCES;
    $request->marker = 'eos';
    $request->maxRecords = 'praesentium';
    $request->requestBody = 'quisquam';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBParameterGroups

Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBParameterGroupsRequest();
    $request->action = POSTDescribeDBParameterGroupsActionEnum::DESCRIBE_DB_PARAMETER_GROUPS;
    $request->marker = 'quo';
    $request->maxRecords = 'fuga';
    $request->requestBody = 'eius';
    $request->version = POSTDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->postDescribeDBParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBParameters

Returns the detailed parameter list for a particular DB parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBParametersRequest();
    $request->action = POSTDescribeDBParametersActionEnum::DESCRIBE_DB_PARAMETERS;
    $request->marker = 'ipsam';
    $request->maxRecords = 'aspernatur';
    $request->requestBody = 'sequi';
    $request->version = POSTDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postDescribeDBParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSubnetGroups

<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSubnetGroupsRequest();
    $request->action = POSTDescribeDBSubnetGroupsActionEnum::DESCRIBE_DB_SUBNET_GROUPS;
    $request->marker = 'inventore';
    $request->maxRecords = 'nihil';
    $request->requestBody = 'totam';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postDescribeDBSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEngineDefaultClusterParameters

Returns the default engine and system parameter information for the cluster database engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultClusterParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultClusterParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultClusterParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEngineDefaultClusterParametersRequest();
    $request->action = POSTDescribeEngineDefaultClusterParametersActionEnum::DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS;
    $request->requestBody = 'deserunt';
    $request->version = POSTDescribeEngineDefaultClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDescribeEngineDefaultClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified database engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEngineDefaultParametersRequest();
    $request->action = POSTDescribeEngineDefaultParametersActionEnum::DESCRIBE_ENGINE_DEFAULT_PARAMETERS;
    $request->marker = 'deleniti';
    $request->maxRecords = 'fugit';
    $request->requestBody = 'fuga';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventCategoriesRequest();
    $request->action = POSTDescribeEventCategoriesActionEnum::DESCRIBE_EVENT_CATEGORIES;
    $request->requestBody = 'sapiente';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventSubscriptions

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventSubscriptionsRequest();
    $request->action = POSTDescribeEventSubscriptionsActionEnum::DESCRIBE_EVENT_SUBSCRIPTIONS;
    $request->marker = 'esse';
    $request->maxRecords = 'eveniet';
    $request->requestBody = 'accusamus';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventsRequest();
    $request->action = POSTDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->marker = 'saepe';
    $request->maxRecords = 'vel';
    $request->requestBody = 'harum';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeGlobalClusters

Returns information about Neptune global database clusters. This API supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeGlobalClustersRequest();
    $request->action = POSTDescribeGlobalClustersActionEnum::DESCRIBE_GLOBAL_CLUSTERS;
    $request->marker = 'culpa';
    $request->maxRecords = 'tempore';
    $request->requestBody = 'adipisci';
    $request->version = POSTDescribeGlobalClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postDescribeGlobalClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOrderableDBInstanceOptions

Returns a list of orderable DB instance options for the specified engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOrderableDBInstanceOptionsRequest();
    $request->action = POSTDescribeOrderableDBInstanceOptionsActionEnum::DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS;
    $request->marker = 'esse';
    $request->maxRecords = 'blanditiis';
    $request->requestBody = 'provident';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->postDescribeOrderableDBInstanceOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePendingMaintenanceActions

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePendingMaintenanceActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePendingMaintenanceActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePendingMaintenanceActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribePendingMaintenanceActionsRequest();
    $request->action = POSTDescribePendingMaintenanceActionsActionEnum::DESCRIBE_PENDING_MAINTENANCE_ACTIONS;
    $request->marker = 'sint';
    $request->maxRecords = 'pariatur';
    $request->requestBody = 'possimus';
    $request->version = POSTDescribePendingMaintenanceActionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDescribePendingMaintenanceActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeValidDBInstanceModifications

You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeValidDBInstanceModificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeValidDBInstanceModificationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeValidDBInstanceModificationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeValidDBInstanceModificationsRequest();
    $request->action = POSTDescribeValidDBInstanceModificationsActionEnum::DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS;
    $request->requestBody = 'similique';
    $request->version = POSTDescribeValidDBInstanceModificationsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postDescribeValidDBInstanceModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTFailoverDBClusterRequest();
    $request->action = POSTFailoverDBClusterActionEnum::FAILOVER_DB_CLUSTER;
    $request->requestBody = 'eius';
    $request->version = POSTFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverGlobalCluster

<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTFailoverGlobalClusterRequest();
    $request->action = POSTFailoverGlobalClusterActionEnum::FAILOVER_GLOBAL_CLUSTER;
    $request->requestBody = 'ullam';
    $request->version = POSTFailoverGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->postFailoverGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

Lists all tags on an Amazon Neptune resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTagsForResourceRequest();
    $request->action = POSTListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->requestBody = 'ex';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBCluster

Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBClusterRequest();
    $request->action = POSTModifyDBClusterActionEnum::MODIFY_DB_CLUSTER;
    $request->requestBody = 'at';
    $request->version = POSTModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterEndpoint

Modifies the properties of an endpoint in an Amazon Neptune DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBClusterEndpointRequest();
    $request->action = POSTModifyDBClusterEndpointActionEnum::MODIFY_DB_CLUSTER_ENDPOINT;
    $request->requestBody = 'iste';
    $request->version = POSTModifyDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->postModifyDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterParameterGroup

<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBClusterParameterGroupRequest();
    $request->action = POSTModifyDBClusterParameterGroupActionEnum::MODIFY_DB_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'ab';
    $request->version = POSTModifyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postModifyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterSnapshotAttributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterSnapshotAttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBClusterSnapshotAttributeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBClusterSnapshotAttributeRequest();
    $request->action = POSTModifyDBClusterSnapshotAttributeActionEnum::MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE;
    $request->requestBody = 'explicabo';
    $request->version = POSTModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->postModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBInstanceRequest();
    $request->action = POSTModifyDBInstanceActionEnum::MODIFY_DB_INSTANCE;
    $request->requestBody = 'voluptatibus';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->postModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBParameterGroup

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBParameterGroupRequest();
    $request->action = POSTModifyDBParameterGroupActionEnum::MODIFY_DB_PARAMETER_GROUP;
    $request->requestBody = 'officia';
    $request->version = POSTModifyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postModifyDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBSubnetGroupRequest();
    $request->action = POSTModifyDBSubnetGroupActionEnum::MODIFY_DB_SUBNET_GROUP;
    $request->requestBody = 'porro';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEventSubscription

<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyEventSubscriptionRequest();
    $request->action = POSTModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->requestBody = 'velit';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyGlobalCluster

Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyGlobalClusterRequest();
    $request->action = POSTModifyGlobalClusterActionEnum::MODIFY_GLOBAL_CLUSTER;
    $request->requestBody = 'quos';
    $request->version = POSTModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPromoteReadReplicaDBCluster

Not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPromoteReadReplicaDBClusterRequest();
    $request->action = POSTPromoteReadReplicaDBClusterActionEnum::PROMOTE_READ_REPLICA_DB_CLUSTER;
    $request->requestBody = 'corporis';
    $request->version = POSTPromoteReadReplicaDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->postPromoteReadReplicaDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebootDBInstanceRequest();
    $request->action = POSTRebootDBInstanceActionEnum::REBOOT_DB_INSTANCE;
    $request->requestBody = 'consectetur';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveFromGlobalCluster

Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveFromGlobalClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveFromGlobalClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveFromGlobalClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveFromGlobalClusterRequest();
    $request->action = POSTRemoveFromGlobalClusterActionEnum::REMOVE_FROM_GLOBAL_CLUSTER;
    $request->requestBody = 'reiciendis';
    $request->version = POSTRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveRoleFromDBCluster

Disassociates an Identity and Access Management (IAM) role from a DB cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveRoleFromDBClusterRequest();
    $request->action = POSTRemoveRoleFromDBClusterActionEnum::REMOVE_ROLE_FROM_DB_CLUSTER;
    $request->requestBody = 'non';
    $request->version = POSTRemoveRoleFromDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postRemoveRoleFromDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing event notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveSourceIdentifierFromSubscriptionRequest();
    $request->action = POSTRemoveSourceIdentifierFromSubscriptionActionEnum::REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION;
    $request->requestBody = 'harum';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->postRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTagsFromResource

Removes metadata tags from an Amazon Neptune resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveTagsFromResourceRequest();
    $request->action = POSTRemoveTagsFromResourceActionEnum::REMOVE_TAGS_FROM_RESOURCE;
    $request->requestBody = 'tempora';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetDBClusterParameterGroup

<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBClusterParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBClusterParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBClusterParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetDBClusterParameterGroupRequest();
    $request->action = POSTResetDBClusterParameterGroupActionEnum::RESET_DB_CLUSTER_PARAMETER_GROUP;
    $request->requestBody = 'adipisci';
    $request->version = POSTResetDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postResetDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetDBParameterGroup

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetDBParameterGroupRequest();
    $request->action = POSTResetDBParameterGroupActionEnum::RESET_DB_PARAMETER_GROUP;
    $request->requestBody = 'temporibus';
    $request->version = POSTResetDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->postResetDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterFromSnapshot

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBClusterFromSnapshotRequest();
    $request->action = POSTRestoreDBClusterFromSnapshotActionEnum::RESTORE_DB_CLUSTER_FROM_SNAPSHOT;
    $request->requestBody = 'culpa';
    $request->version = POSTRestoreDBClusterFromSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->postRestoreDBClusterFromSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterToPointInTime

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterToPointInTimeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterToPointInTimeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBClusterToPointInTimeRequest();
    $request->action = POSTRestoreDBClusterToPointInTimeActionEnum::RESTORE_DB_CLUSTER_TO_POINT_IN_TIME;
    $request->requestBody = 'rerum';
    $request->version = POSTRestoreDBClusterToPointInTimeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postRestoreDBClusterToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartDBCluster

Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartDBClusterRequest();
    $request->action = POSTStartDBClusterActionEnum::START_DB_CLUSTER;
    $request->requestBody = 'ab';
    $request->version = POSTStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopDBCluster

<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopDBClusterRequest();
    $request->action = POSTStopDBClusterActionEnum::STOP_DB_CLUSTER;
    $request->requestBody = 'explicabo';
    $request->version = POSTStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'illo';

    $response = $sdk->sdk->postStopDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
