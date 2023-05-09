# SDK

## Overview

<fullname>Amazon Relational Database Service</fullname> <p/> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [getAddRoleToDBCluster](#getaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with a DB cluster.
* [getAddRoleToDBInstance](#getaddroletodbinstance) - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
* [getAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription) - Adds a source identifier to an existing RDS event notification subscription.
* [getApplyPendingMaintenanceAction](#getapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [getAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress) - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [getBacktrackDBCluster](#getbacktrackdbcluster) - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
* [getCancelExportTask](#getcancelexporttask) - Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
* [getCreateGlobalCluster](#getcreateglobalcluster) - <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [getDeleteBlueGreenDeployment](#getdeletebluegreendeployment) - <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [getDeleteCustomDBEngineVersion](#getdeletecustomdbengineversion) - <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getDeleteDBCluster](#getdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getDeleteDBClusterEndpoint](#getdeletedbclusterendpoint) - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getDeleteDBClusterParameterGroup](#getdeletedbclusterparametergroup) - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getDeleteDBClusterSnapshot](#getdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getDeleteDBInstance](#getdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
* [getDeleteDBInstanceAutomatedBackup](#getdeletedbinstanceautomatedbackup) - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
* [getDeleteDBParameterGroup](#getdeletedbparametergroup) - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
* [getDeleteDBProxy](#getdeletedbproxy) - Deletes an existing DB proxy.
* [getDeleteDBProxyEndpoint](#getdeletedbproxyendpoint) - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
* [getDeleteDBSecurityGroup](#getdeletedbsecuritygroup) - <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [getDeleteDBSnapshot](#getdeletedbsnapshot) - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [getDeleteDBSubnetGroup](#getdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [getDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an RDS event notification subscription.
* [getDeleteGlobalCluster](#getdeleteglobalcluster) - <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getDeleteOptionGroup](#getdeleteoptiongroup) - Deletes an existing option group.
* [getDeregisterDBProxyTargets](#getderegisterdbproxytargets) - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
* [getDescribeAccountAttributes](#getdescribeaccountattributes) - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
* [getDescribeDBClusterSnapshotAttributes](#getdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
* [getDescribeDBSnapshotAttributes](#getdescribedbsnapshotattributes) - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
* [getDescribeValidDBInstanceModifications](#getdescribevaliddbinstancemodifications) - <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
* [getDownloadDBLogFilePortion](#getdownloaddblogfileportion) - <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
* [getFailoverDBCluster](#getfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getFailoverGlobalCluster](#getfailoverglobalcluster) - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
* [getModifyActivityStream](#getmodifyactivitystream) - <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
* [getModifyCertificates](#getmodifycertificates) - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [getModifyCurrentDBClusterCapacity](#getmodifycurrentdbclustercapacity) - <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
* [getModifyCustomDBEngineVersion](#getmodifycustomdbengineversion) - <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getModifyDBCluster](#getmodifydbcluster) - <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getModifyDBClusterEndpoint](#getmodifydbclusterendpoint) - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getModifyDBClusterSnapshotAttribute](#getmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [getModifyDBProxyEndpoint](#getmodifydbproxyendpoint) - Changes the settings for an existing DB proxy endpoint.
* [getModifyDBProxyTargetGroup](#getmodifydbproxytargetgroup) - Modifies the properties of a <code>DBProxyTargetGroup</code>.
* [getModifyDBSnapshot](#getmodifydbsnapshot) - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
* [getModifyDBSnapshotAttribute](#getmodifydbsnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [getModifyDBSubnetGroup](#getmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [getModifyEventSubscription](#getmodifyeventsubscription) - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
* [getModifyGlobalCluster](#getmodifyglobalcluster) - <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getPromoteReadReplica](#getpromotereadreplica) - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
* [getPromoteReadReplicaDBCluster](#getpromotereadreplicadbcluster) - Promotes a read replica DB cluster to a standalone DB cluster.
* [getRebootDBCluster](#getrebootdbcluster) - <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [getRebootDBInstance](#getrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
* [getRegisterDBProxyTargets](#getregisterdbproxytargets) - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
* [getRemoveFromGlobalCluster](#getremovefromglobalcluster) - <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getRemoveRoleFromDBCluster](#getremoverolefromdbcluster) - <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [getRemoveRoleFromDBInstance](#getremoverolefromdbinstance) - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
* [getRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription) - Removes a source identifier from an existing RDS event notification subscription.
* [getRemoveTagsFromResource](#getremovetagsfromresource) - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
* [getRevokeDBSecurityGroupIngress](#getrevokedbsecuritygroupingress) - <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [getStartActivityStream](#getstartactivitystream) - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
* [getStartDBCluster](#getstartdbcluster) - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getStartDBInstance](#getstartdbinstance) - <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
* [getStartDBInstanceAutomatedBackupsReplication](#getstartdbinstanceautomatedbackupsreplication) - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [getStartExportTask](#getstartexporttask) - <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [getStopActivityStream](#getstopactivitystream) - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
* [getStopDBCluster](#getstopdbcluster) - <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [getStopDBInstance](#getstopdbinstance) - <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
* [getStopDBInstanceAutomatedBackupsReplication](#getstopdbinstanceautomatedbackupsreplication) - <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [getSwitchoverBlueGreenDeployment](#getswitchoverbluegreendeployment) - <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [getSwitchoverReadReplica](#getswitchoverreadreplica) - Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.
* [postAddRoleToDBCluster](#postaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with a DB cluster.
* [postAddRoleToDBInstance](#postaddroletodbinstance) - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
* [postAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription) - Adds a source identifier to an existing RDS event notification subscription.
* [postAddTagsToResource](#postaddtagstoresource) - <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
* [postApplyPendingMaintenanceAction](#postapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [postAuthorizeDBSecurityGroupIngress](#postauthorizedbsecuritygroupingress) - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [postBacktrackDBCluster](#postbacktrackdbcluster) - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
* [postCancelExportTask](#postcancelexporttask) - Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
* [postCopyDBClusterParameterGroup](#postcopydbclusterparametergroup) - Copies the specified DB cluster parameter group.
* [postCopyDBClusterSnapshot](#postcopydbclustersnapshot) - <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postCopyDBParameterGroup](#postcopydbparametergroup) - Copies the specified DB parameter group.
* [postCopyDBSnapshot](#postcopydbsnapshot) - <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postCopyOptionGroup](#postcopyoptiongroup) - Copies the specified option group.
* [postCreateBlueGreenDeployment](#postcreatebluegreendeployment) - <p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postCreateCustomDBEngineVersion](#postcreatecustomdbengineversion) - Creates a custom DB engine version (CEV).
* [postCreateDBCluster](#postcreatedbcluster) - <p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postCreateDBClusterEndpoint](#postcreatedbclusterendpoint) - <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [postCreateDBClusterParameterGroup](#postcreatedbclusterparametergroup) - <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postCreateDBClusterSnapshot](#postcreatedbclustersnapshot) - <p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postCreateDBInstance](#postcreatedbinstance) - <p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postCreateDBInstanceReadReplica](#postcreatedbinstancereadreplica) - <p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>
* [postCreateDBParameterGroup](#postcreatedbparametergroup) - <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [postCreateDBProxy](#postcreatedbproxy) - Creates a new DB proxy.
* [postCreateDBProxyEndpoint](#postcreatedbproxyendpoint) - Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
* [postCreateDBSecurityGroup](#postcreatedbsecuritygroup) - <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [postCreateDBSnapshot](#postcreatedbsnapshot) - Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.
* [postCreateDBSubnetGroup](#postcreatedbsubnetgroup) - Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [postCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postCreateGlobalCluster](#postcreateglobalcluster) - <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [postCreateOptionGroup](#postcreateoptiongroup) - <p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>
* [postDeleteBlueGreenDeployment](#postdeletebluegreendeployment) - <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postDeleteCustomDBEngineVersion](#postdeletecustomdbengineversion) - <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDeleteDBCluster](#postdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDeleteDBClusterEndpoint](#postdeletedbclusterendpoint) - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postDeleteDBClusterParameterGroup](#postdeletedbclusterparametergroup) - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDeleteDBClusterSnapshot](#postdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDeleteDBInstance](#postdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
* [postDeleteDBInstanceAutomatedBackup](#postdeletedbinstanceautomatedbackup) - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
* [postDeleteDBParameterGroup](#postdeletedbparametergroup) - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
* [postDeleteDBProxy](#postdeletedbproxy) - Deletes an existing DB proxy.
* [postDeleteDBProxyEndpoint](#postdeletedbproxyendpoint) - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
* [postDeleteDBSecurityGroup](#postdeletedbsecuritygroup) - <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [postDeleteDBSnapshot](#postdeletedbsnapshot) - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [postDeleteDBSubnetGroup](#postdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [postDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an RDS event notification subscription.
* [postDeleteGlobalCluster](#postdeleteglobalcluster) - <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postDeleteOptionGroup](#postdeleteoptiongroup) - Deletes an existing option group.
* [postDeregisterDBProxyTargets](#postderegisterdbproxytargets) - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
* [postDescribeAccountAttributes](#postdescribeaccountattributes) - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
* [postDescribeBlueGreenDeployments](#postdescribebluegreendeployments) - <p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postDescribeCertificates](#postdescribecertificates) - <p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postDescribeDBClusterBacktracks](#postdescribedbclusterbacktracks) - <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
* [postDescribeDBClusterEndpoints](#postdescribedbclusterendpoints) - <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postDescribeDBClusterParameterGroups](#postdescribedbclusterparametergroups) - <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDescribeDBClusterParameters](#postdescribedbclusterparameters) - <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDescribeDBClusterSnapshotAttributes](#postdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
* [postDescribeDBClusterSnapshots](#postdescribedbclustersnapshots) - <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postDescribeDBClusters](#postdescribedbclusters) - <p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
* [postDescribeDBEngineVersions](#postdescribedbengineversions) - Returns a list of the available DB engines.
* [postDescribeDBInstanceAutomatedBackups](#postdescribedbinstanceautomatedbackups) - <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
* [postDescribeDBInstances](#postdescribedbinstances) - <p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
* [postDescribeDBLogFiles](#postdescribedblogfiles) - <p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>
* [postDescribeDBParameterGroups](#postdescribedbparametergroups) - Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
* [postDescribeDBParameters](#postdescribedbparameters) - Returns the detailed parameter list for a particular DB parameter group.
* [postDescribeDBProxies](#postdescribedbproxies) - Returns information about DB proxies.
* [postDescribeDBProxyEndpoints](#postdescribedbproxyendpoints) - Returns information about DB proxy endpoints.
* [postDescribeDBProxyTargetGroups](#postdescribedbproxytargetgroups) - Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.
* [postDescribeDBProxyTargets](#postdescribedbproxytargets) - Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.
* [postDescribeDBSecurityGroups](#postdescribedbsecuritygroups) - <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [postDescribeDBSnapshotAttributes](#postdescribedbsnapshotattributes) - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
* [postDescribeDBSnapshots](#postdescribedbsnapshots) - Returns information about DB snapshots. This API action supports pagination.
* [postDescribeDBSubnetGroups](#postdescribedbsubnetgroups) - <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
* [postDescribeEngineDefaultClusterParameters](#postdescribeenginedefaultclusterparameters) - <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified database engine.
* [postDescribeEventCategories](#postdescribeeventcategories) - Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.
* [postDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* [postDescribeEvents](#postdescribeevents) - <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>
* [postDescribeExportTasks](#postdescribeexporttasks) - Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.
* [postDescribeGlobalClusters](#postdescribeglobalclusters) - <p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postDescribeOptionGroupOptions](#postdescribeoptiongroupoptions) - Describes all available options.
* [postDescribeOptionGroups](#postdescribeoptiongroups) - Describes the available option groups.
* [postDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions) - Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.
* [postDescribePendingMaintenanceActions](#postdescribependingmaintenanceactions) - Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
* [postDescribeReservedDBInstances](#postdescribereserveddbinstances) - Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
* [postDescribeReservedDBInstancesOfferings](#postdescribereserveddbinstancesofferings) - Lists available reserved DB instance offerings.
* [postDescribeSourceRegions](#postdescribesourceregions) - <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
* [postDescribeValidDBInstanceModifications](#postdescribevaliddbinstancemodifications) - <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
* [postDownloadDBLogFilePortion](#postdownloaddblogfileportion) - <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
* [postFailoverDBCluster](#postfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postFailoverGlobalCluster](#postfailoverglobalcluster) - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
* [postListTagsForResource](#postlisttagsforresource) - <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postModifyActivityStream](#postmodifyactivitystream) - <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
* [postModifyCertificates](#postmodifycertificates) - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postModifyCurrentDBClusterCapacity](#postmodifycurrentdbclustercapacity) - <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
* [postModifyCustomDBEngineVersion](#postmodifycustomdbengineversion) - <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postModifyDBCluster](#postmodifydbcluster) - <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postModifyDBClusterEndpoint](#postmodifydbclusterendpoint) - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postModifyDBClusterParameterGroup](#postmodifydbclusterparametergroup) - <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postModifyDBClusterSnapshotAttribute](#postmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [postModifyDBInstance](#postmodifydbinstance) - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.
* [postModifyDBParameterGroup](#postmodifydbparametergroup) - <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [postModifyDBProxy](#postmodifydbproxy) - Changes the settings for an existing DB proxy.
* [postModifyDBProxyEndpoint](#postmodifydbproxyendpoint) - Changes the settings for an existing DB proxy endpoint.
* [postModifyDBProxyTargetGroup](#postmodifydbproxytargetgroup) - Modifies the properties of a <code>DBProxyTargetGroup</code>.
* [postModifyDBSnapshot](#postmodifydbsnapshot) - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
* [postModifyDBSnapshotAttribute](#postmodifydbsnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [postModifyDBSubnetGroup](#postmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [postModifyEventSubscription](#postmodifyeventsubscription) - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
* [postModifyGlobalCluster](#postmodifyglobalcluster) - <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postModifyOptionGroup](#postmodifyoptiongroup) - Modifies an existing option group.
* [postPromoteReadReplica](#postpromotereadreplica) - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
* [postPromoteReadReplicaDBCluster](#postpromotereadreplicadbcluster) - Promotes a read replica DB cluster to a standalone DB cluster.
* [postPurchaseReservedDBInstancesOffering](#postpurchasereserveddbinstancesoffering) - Purchases a reserved DB instance offering.
* [postRebootDBCluster](#postrebootdbcluster) - <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postRebootDBInstance](#postrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
* [postRegisterDBProxyTargets](#postregisterdbproxytargets) - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
* [postRemoveFromGlobalCluster](#postremovefromglobalcluster) - <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postRemoveRoleFromDBCluster](#postremoverolefromdbcluster) - <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postRemoveRoleFromDBInstance](#postremoverolefromdbinstance) - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
* [postRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription) - Removes a source identifier from an existing RDS event notification subscription.
* [postRemoveTagsFromResource](#postremovetagsfromresource) - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postResetDBClusterParameterGroup](#postresetdbclusterparametergroup) - <p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postResetDBParameterGroup](#postresetdbparametergroup) - Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
* [postRestoreDBClusterFromS3](#postrestoredbclusterfroms3) - <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>
* [postRestoreDBClusterFromSnapshot](#postrestoredbclusterfromsnapshot) - <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postRestoreDBClusterToPointInTime](#postrestoredbclustertopointintime) - <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postRestoreDBInstanceFromDBSnapshot](#postrestoredbinstancefromdbsnapshot) - <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
* [postRestoreDBInstanceFromS3](#postrestoredbinstancefroms3) - <p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>
* [postRestoreDBInstanceToPointInTime](#postrestoredbinstancetopointintime) - <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
* [postRevokeDBSecurityGroupIngress](#postrevokedbsecuritygroupingress) - <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [postStartActivityStream](#poststartactivitystream) - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
* [postStartDBCluster](#poststartdbcluster) - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postStartDBInstance](#poststartdbinstance) - <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
* [postStartDBInstanceAutomatedBackupsReplication](#poststartdbinstanceautomatedbackupsreplication) - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postStartExportTask](#poststartexporttask) - <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postStopActivityStream](#poststopactivitystream) - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
* [postStopDBCluster](#poststopdbcluster) - <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [postStopDBInstance](#poststopdbinstance) - <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
* [postStopDBInstanceAutomatedBackupsReplication](#poststopdbinstanceautomatedbackupsreplication) - <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [postSwitchoverBlueGreenDeployment](#postswitchoverbluegreendeployment) - <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [postSwitchoverReadReplica](#postswitchoverreadreplica) - Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

## getAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with a DB cluster.

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

## getAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddRoleToDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToDBInstanceRequest;
import org.openapis.openapi.models.operations.GETAddRoleToDBInstanceResponse;
import org.openapis.openapi.models.operations.GETAddRoleToDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddRoleToDBInstanceRequest req = new GETAddRoleToDBInstanceRequest(GETAddRoleToDBInstanceActionEnum.ADD_ROLE_TO_DB_INSTANCE, "iusto", "excepturi", "nisi", GETAddRoleToDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETAddRoleToDBInstanceResponse res = sdk.sdk.getAddRoleToDBInstance(req);

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

Adds a source identifier to an existing RDS event notification subscription.

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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "repellendus", "sapiente", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
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
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplyPendingMaintenanceActionRequest req = new GETApplyPendingMaintenanceActionRequest(GETApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, "esse", "totam", "porro", GETApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
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

## getAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeDBSecurityGroupIngressRequest req = new GETAuthorizeDBSecurityGroupIngressRequest(GETAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, "optio", GETAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                cidrip = "totam";
                ec2SecurityGroupId = "beatae";
                ec2SecurityGroupName = "commodi";
                ec2SecurityGroupOwnerId = "molestiae";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETAuthorizeDBSecurityGroupIngressResponse res = sdk.sdk.getAuthorizeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBacktrackDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETBacktrackDBClusterRequest;
import org.openapis.openapi.models.operations.GETBacktrackDBClusterResponse;
import org.openapis.openapi.models.operations.GETBacktrackDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBacktrackDBClusterRequest req = new GETBacktrackDBClusterRequest(GETBacktrackDBClusterActionEnum.BACKTRACK_DB_CLUSTER, OffsetDateTime.parse("2022-09-04T16:31:28.618Z"), "natus", GETBacktrackDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                force = false;
                useEarliestTimeOnPointInTimeUnavailable = false;
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            GETBacktrackDBClusterResponse res = sdk.sdk.getBacktrackDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelExportTaskActionEnum;
import org.openapis.openapi.models.operations.GETCancelExportTaskRequest;
import org.openapis.openapi.models.operations.GETCancelExportTaskResponse;
import org.openapis.openapi.models.operations.GETCancelExportTaskVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelExportTaskRequest req = new GETCancelExportTaskRequest(GETCancelExportTaskActionEnum.CANCEL_EXPORT_TASK, "in", GETCancelExportTaskVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            GETCancelExportTaskResponse res = sdk.sdk.getCancelExportTask(req);

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

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateGlobalClusterRequest req = new GETCreateGlobalClusterRequest(GETCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, GETCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                databaseName = "est";
                deletionProtection = false;
                engine = "mollitia";
                engineVersion = "laborum";
                globalClusterIdentifier = "dolores";
                sourceDBClusterIdentifier = "dolorem";
                storageEncrypted = false;
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
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

## getDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteBlueGreenDeploymentActionEnum;
import org.openapis.openapi.models.operations.GETDeleteBlueGreenDeploymentRequest;
import org.openapis.openapi.models.operations.GETDeleteBlueGreenDeploymentResponse;
import org.openapis.openapi.models.operations.GETDeleteBlueGreenDeploymentVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteBlueGreenDeploymentRequest req = new GETDeleteBlueGreenDeploymentRequest(GETDeleteBlueGreenDeploymentActionEnum.DELETE_BLUE_GREEN_DEPLOYMENT, "accusantium", GETDeleteBlueGreenDeploymentVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                deleteTarget = false;
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETDeleteBlueGreenDeploymentResponse res = sdk.sdk.getDeleteBlueGreenDeployment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCustomDBEngineVersionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCustomDBEngineVersionRequest;
import org.openapis.openapi.models.operations.GETDeleteCustomDBEngineVersionResponse;
import org.openapis.openapi.models.operations.GETDeleteCustomDBEngineVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCustomDBEngineVersionRequest req = new GETDeleteCustomDBEngineVersionRequest(GETDeleteCustomDBEngineVersionActionEnum.DELETE_CUSTOM_DB_ENGINE_VERSION, "consequuntur", "repellat", GETDeleteCustomDBEngineVersionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            GETDeleteCustomDBEngineVersionResponse res = sdk.sdk.getDeleteCustomDBEngineVersion(req);

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

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterRequest req = new GETDeleteDBClusterRequest(GETDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, "quia", GETDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                finalDBSnapshotIdentifier = "quis";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
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

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterEndpointRequest req = new GETDeleteDBClusterEndpointRequest(GETDeleteDBClusterEndpointActionEnum.DELETE_DB_CLUSTER_ENDPOINT, "ipsam", GETDeleteDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
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

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterParameterGroupRequest req = new GETDeleteDBClusterParameterGroupRequest(GETDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, "reiciendis", GETDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
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

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterSnapshotRequest req = new GETDeleteDBClusterSnapshotRequest(GETDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, "cum", GETDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
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

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

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
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "iusto", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                deleteAutomatedBackups = false;
                finalDBSnapshotIdentifier = "dicta";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
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

## getDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceAutomatedBackupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceAutomatedBackupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceAutomatedBackupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceAutomatedBackupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceAutomatedBackupRequest req = new GETDeleteDBInstanceAutomatedBackupRequest(GETDeleteDBInstanceAutomatedBackupActionEnum.DELETE_DB_INSTANCE_AUTOMATED_BACKUP, GETDeleteDBInstanceAutomatedBackupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbInstanceAutomatedBackupsArn = "molestias";
                dbiResourceId = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GETDeleteDBInstanceAutomatedBackupResponse res = sdk.sdk.getDeleteDBInstanceAutomatedBackup(req);

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

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBParameterGroupRequest req = new GETDeleteDBParameterGroupRequest(GETDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, "veritatis", GETDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
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

## getDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBProxyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBProxyRequest;
import org.openapis.openapi.models.operations.GETDeleteDBProxyResponse;
import org.openapis.openapi.models.operations.GETDeleteDBProxyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBProxyRequest req = new GETDeleteDBProxyRequest(GETDeleteDBProxyActionEnum.DELETE_DB_PROXY, "distinctio", GETDeleteDBProxyVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            GETDeleteDBProxyResponse res = sdk.sdk.getDeleteDBProxy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBProxyEndpointActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBProxyEndpointRequest;
import org.openapis.openapi.models.operations.GETDeleteDBProxyEndpointResponse;
import org.openapis.openapi.models.operations.GETDeleteDBProxyEndpointVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBProxyEndpointRequest req = new GETDeleteDBProxyEndpointRequest(GETDeleteDBProxyEndpointActionEnum.DELETE_DB_PROXY_ENDPOINT, "magni", GETDeleteDBProxyEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            GETDeleteDBProxyEndpointResponse res = sdk.sdk.getDeleteDBProxyEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSecurityGroupRequest req = new GETDeleteDBSecurityGroupRequest(GETDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, "tempore", GETDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETDeleteDBSecurityGroupResponse res = sdk.sdk.getDeleteDBSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSnapshotRequest req = new GETDeleteDBSnapshotRequest(GETDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, "necessitatibus", GETDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            GETDeleteDBSnapshotResponse res = sdk.sdk.getDeleteDBSnapshot(req);

            if (res.body != null) {
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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "illum", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
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

Deletes an RDS event notification subscription.

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "laborum", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
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

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGlobalClusterRequest req = new GETDeleteGlobalClusterRequest(GETDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, "nam", GETDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
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

## getDeleteOptionGroup

Deletes an existing option group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteOptionGroupRequest req = new GETDeleteOptionGroupRequest(GETDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, "natus", GETDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GETDeleteOptionGroupResponse res = sdk.sdk.getDeleteOptionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeregisterDBProxyTargetsActionEnum;
import org.openapis.openapi.models.operations.GETDeregisterDBProxyTargetsRequest;
import org.openapis.openapi.models.operations.GETDeregisterDBProxyTargetsResponse;
import org.openapis.openapi.models.operations.GETDeregisterDBProxyTargetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeregisterDBProxyTargetsRequest req = new GETDeregisterDBProxyTargetsRequest(GETDeregisterDBProxyTargetsActionEnum.DEREGISTER_DB_PROXY_TARGETS, "labore", GETDeregisterDBProxyTargetsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbClusterIdentifiers = new String[]{{
                    add("natus"),
                    add("nobis"),
                }};
                dbInstanceIdentifiers = new String[]{{
                    add("vero"),
                    add("aspernatur"),
                }};
                targetGroupName = "architecto";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            GETDeregisterDBProxyTargetsResponse res = sdk.sdk.getDeregisterDBProxyTargets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountAttributesRequest req = new GETDescribeAccountAttributesRequest(GETDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, GETDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETDescribeAccountAttributesResponse res = sdk.sdk.getDescribeAccountAttributes(req);

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

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

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
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBClusterSnapshotAttributesRequest req = new GETDescribeDBClusterSnapshotAttributesRequest(GETDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, "nemo", GETDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
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

## getDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSnapshotAttributesRequest req = new GETDescribeDBSnapshotAttributesRequest(GETDescribeDBSnapshotAttributesActionEnum.DESCRIBE_DB_SNAPSHOT_ATTRIBUTES, "in", GETDescribeDBSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            GETDescribeDBSnapshotAttributesResponse res = sdk.sdk.getDescribeDBSnapshotAttributes(req);

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

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

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
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeValidDBInstanceModificationsRequest req = new GETDescribeValidDBInstanceModificationsRequest(GETDescribeValidDBInstanceModificationsActionEnum.DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS, "sed", GETDescribeValidDBInstanceModificationsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
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

## getDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionActionEnum;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionRequest;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionResponse;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDownloadDBLogFilePortionRequest req = new GETDownloadDBLogFilePortionRequest(GETDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, "quo", "illum", GETDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "pariatur";
                numberOfLines = 807319L;
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            GETDownloadDBLogFilePortionResponse res = sdk.sdk.getDownloadDBLogFilePortion(req);

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

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverDBClusterRequest req = new GETFailoverDBClusterRequest(GETFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, "ipsam", GETFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                targetDBInstanceIdentifier = "voluptate";
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
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

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

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
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverGlobalClusterRequest req = new GETFailoverGlobalClusterRequest(GETFailoverGlobalClusterActionEnum.FAILOVER_GLOBAL_CLUSTER, "amet", "aut", GETFailoverGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
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

## getModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyActivityStreamActionEnum;
import org.openapis.openapi.models.operations.GETModifyActivityStreamAuditPolicyStateEnum;
import org.openapis.openapi.models.operations.GETModifyActivityStreamRequest;
import org.openapis.openapi.models.operations.GETModifyActivityStreamResponse;
import org.openapis.openapi.models.operations.GETModifyActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyActivityStreamRequest req = new GETModifyActivityStreamRequest(GETModifyActivityStreamActionEnum.MODIFY_ACTIVITY_STREAM, GETModifyActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                auditPolicyState = GETModifyActivityStreamAuditPolicyStateEnum.LOCKED;
                resourceArn = "eaque";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            GETModifyActivityStreamResponse res = sdk.sdk.getModifyActivityStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyCertificatesActionEnum;
import org.openapis.openapi.models.operations.GETModifyCertificatesRequest;
import org.openapis.openapi.models.operations.GETModifyCertificatesResponse;
import org.openapis.openapi.models.operations.GETModifyCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyCertificatesRequest req = new GETModifyCertificatesRequest(GETModifyCertificatesActionEnum.MODIFY_CERTIFICATES, GETModifyCertificatesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                certificateIdentifier = "vero";
                removeCustomerOverride = false;
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GETModifyCertificatesResponse res = sdk.sdk.getModifyCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyCurrentDBClusterCapacityActionEnum;
import org.openapis.openapi.models.operations.GETModifyCurrentDBClusterCapacityRequest;
import org.openapis.openapi.models.operations.GETModifyCurrentDBClusterCapacityResponse;
import org.openapis.openapi.models.operations.GETModifyCurrentDBClusterCapacityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyCurrentDBClusterCapacityRequest req = new GETModifyCurrentDBClusterCapacityRequest(GETModifyCurrentDBClusterCapacityActionEnum.MODIFY_CURRENT_DB_CLUSTER_CAPACITY, "consequuntur", GETModifyCurrentDBClusterCapacityVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                capacity = 500026L;
                secondsBeforeTimeout = 621479L;
                timeoutAction = "eaque";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            GETModifyCurrentDBClusterCapacityResponse res = sdk.sdk.getModifyCurrentDBClusterCapacity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyCustomDBEngineVersionActionEnum;
import org.openapis.openapi.models.operations.GETModifyCustomDBEngineVersionRequest;
import org.openapis.openapi.models.operations.GETModifyCustomDBEngineVersionResponse;
import org.openapis.openapi.models.operations.GETModifyCustomDBEngineVersionStatusEnum;
import org.openapis.openapi.models.operations.GETModifyCustomDBEngineVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyCustomDBEngineVersionRequest req = new GETModifyCustomDBEngineVersionRequest(GETModifyCustomDBEngineVersionActionEnum.MODIFY_CUSTOM_DB_ENGINE_VERSION, "deleniti", "pariatur", GETModifyCustomDBEngineVersionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                description = "provident";
                status = GETModifyCustomDBEngineVersionStatusEnum.INACTIVE_EXCEPT_RESTORE;
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETModifyCustomDBEngineVersionResponse res = sdk.sdk.getModifyCustomDBEngineVersion(req);

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

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBClusterCloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterRequest;
import org.openapis.openapi.models.operations.GETModifyDBClusterResponse;
import org.openapis.openapi.models.operations.GETModifyDBClusterScalingConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterRequest req = new GETModifyDBClusterRequest(GETModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, "qui", GETModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                allocatedStorage = 218749L;
                allowEngineModeChange = false;
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                backtrackWindow = 944373L;
                backupRetentionPeriod = 569574L;
                cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration() {{
                    disableLogTypes = new String[]{{
                        add("voluptate"),
                        add("dignissimos"),
                        add("reiciendis"),
                    }};
                    enableLogTypes = new String[]{{
                        add("dolorum"),
                    }};
                }};;
                copyTagsToSnapshot = false;
                dbClusterInstanceClass = "numquam";
                dbClusterParameterGroupName = "veritatis";
                dbInstanceParameterGroupName = "ipsa";
                deletionProtection = false;
                domain = "ipsa";
                domainIAMRoleName = "iure";
                enableGlobalWriteForwarding = false;
                enableHttpEndpoint = false;
                enableIAMDatabaseAuthentication = false;
                enablePerformanceInsights = false;
                engineMode = "odio";
                engineVersion = "quaerat";
                iops = 881005L;
                manageMasterUserPassword = false;
                masterUserPassword = "quidem";
                masterUserSecretKmsKeyId = "voluptatibus";
                monitoringInterval = 377752L;
                monitoringRoleArn = "natus";
                networkType = "eos";
                newDBClusterIdentifier = "atque";
                optionGroupName = "sit";
                performanceInsightsKMSKeyId = "fugiat";
                performanceInsightsRetentionPeriod = 67249L;
                port = 743835L;
                preferredBackupWindow = "dolorum";
                preferredMaintenanceWindow = "iusto";
                rotateMasterUserPassword = false;
                scalingConfiguration = new GETModifyDBClusterScalingConfiguration() {{
                    autoPause = false;
                    maxCapacity = 453697L;
                    minCapacity = 677082L;
                    secondsBeforeTimeout = 536579L;
                    secondsUntilAutoPause = 607045L;
                    timeoutAction = "necessitatibus";
                }};;
                serverlessV2ScalingConfiguration = new GETModifyDBClusterServerlessV2ScalingConfiguration() {{
                    maxCapacity = 7146.97;
                    minCapacity = 9903.39;
                }};;
                storageType = "nihil";
                vpcSecurityGroupIds = new String[]{{
                    add("voluptate"),
                }};
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
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

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterEndpointRequest req = new GETModifyDBClusterEndpointRequest(GETModifyDBClusterEndpointActionEnum.MODIFY_DB_CLUSTER_ENDPOINT, "ad", GETModifyDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                endpointType = "saepe";
                excludedMembers = new String[]{{
                    add("deserunt"),
                    add("provident"),
                }};
                staticMembers = new String[]{{
                    add("repellendus"),
                    add("totam"),
                }};
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
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

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

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
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterSnapshotAttributeRequest req = new GETModifyDBClusterSnapshotAttributeRequest(GETModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, "qui", "dolorum", GETModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                valuesToAdd = new String[]{{
                    add("esse"),
                    add("harum"),
                    add("iusto"),
                    add("ipsum"),
                }};
                valuesToRemove = new String[]{{
                    add("tenetur"),
                    add("amet"),
                    add("tempore"),
                    add("accusamus"),
                }};
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
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

## getModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBProxyEndpointActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBProxyEndpointRequest;
import org.openapis.openapi.models.operations.GETModifyDBProxyEndpointResponse;
import org.openapis.openapi.models.operations.GETModifyDBProxyEndpointVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBProxyEndpointRequest req = new GETModifyDBProxyEndpointRequest(GETModifyDBProxyEndpointActionEnum.MODIFY_DB_PROXY_ENDPOINT, "neque", GETModifyDBProxyEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                newDBProxyEndpointName = "sed";
                vpcSecurityGroupIds = new String[]{{
                    add("libero"),
                    add("voluptas"),
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            GETModifyDBProxyEndpointResponse res = sdk.sdk.getModifyDBProxyEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBProxyTargetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBProxyTargetGroupConnectionPoolConfig;
import org.openapis.openapi.models.operations.GETModifyDBProxyTargetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyDBProxyTargetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyDBProxyTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBProxyTargetGroupRequest req = new GETModifyDBProxyTargetGroupRequest(GETModifyDBProxyTargetGroupActionEnum.MODIFY_DB_PROXY_TARGET_GROUP, "soluta", "dicta", GETModifyDBProxyTargetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                connectionPoolConfig = new GETModifyDBProxyTargetGroupConnectionPoolConfig() {{
                    connectionBorrowTimeout = 674848L;
                    initQuery = "totam";
                    maxConnectionsPercent = 276894L;
                    maxIdleConnectionsPercent = 132068L;
                    sessionPinningFilters = new String[]{{
                        add("distinctio"),
                    }};
                }};;
                newName = "facilis";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
            }};            

            GETModifyDBProxyTargetGroupResponse res = sdk.sdk.getModifyDBProxyTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSnapshotRequest req = new GETModifyDBSnapshotRequest(GETModifyDBSnapshotActionEnum.MODIFY_DB_SNAPSHOT, "odio", GETModifyDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                engineVersion = "sunt";
                optionGroupName = "ullam";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "voluptatem";
                xAmzDate = "cumque";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "et";
            }};            

            GETModifyDBSnapshotResponse res = sdk.sdk.getModifyDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotAttributeActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotAttributeRequest;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotAttributeResponse;
import org.openapis.openapi.models.operations.GETModifyDBSnapshotAttributeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSnapshotAttributeRequest req = new GETModifyDBSnapshotAttributeRequest(GETModifyDBSnapshotAttributeActionEnum.MODIFY_DB_SNAPSHOT_ATTRIBUTE, "ipsum", "veritatis", GETModifyDBSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                valuesToAdd = new String[]{{
                    add("quos"),
                    add("tempore"),
                    add("cupiditate"),
                }};
                valuesToRemove = new String[]{{
                    add("delectus"),
                }};
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            GETModifyDBSnapshotAttributeResponse res = sdk.sdk.getModifyDBSnapshotAttribute(req);

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

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "quas",                 new String[]{{
                                add("consequatur"),
                                add("est"),
                                add("repellendus"),
                                add("porro"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbSubnetGroupDescription = "doloribus";
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "qui";
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
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

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

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
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "voluptatibus", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("vero"),
                    add("omnis"),
                    add("quis"),
                    add("ipsum"),
                }};
                snsTopicArn = "delectus";
                sourceType = "voluptate";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
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

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyGlobalClusterRequest req = new GETModifyGlobalClusterRequest(GETModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, GETModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                allowMajorVersionUpgrade = false;
                deletionProtection = false;
                engineVersion = "similique";
                globalClusterIdentifier = "facilis";
                newGlobalClusterIdentifier = "vero";
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
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

## getPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaActionEnum;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaRequest;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaResponse;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaRequest req = new GETPromoteReadReplicaRequest(GETPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, "voluptatibus", GETPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                backupRetentionPeriod = 347233L;
                preferredBackupWindow = "nulla";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            GETPromoteReadReplicaResponse res = sdk.sdk.getPromoteReadReplica(req);

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

Promotes a read replica DB cluster to a standalone DB cluster.

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
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaDBClusterRequest req = new GETPromoteReadReplicaDBClusterRequest(GETPromoteReadReplicaDBClusterActionEnum.PROMOTE_READ_REPLICA_DB_CLUSTER, "officia", GETPromoteReadReplicaDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
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

## getRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebootDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETRebootDBClusterRequest;
import org.openapis.openapi.models.operations.GETRebootDBClusterResponse;
import org.openapis.openapi.models.operations.GETRebootDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBClusterRequest req = new GETRebootDBClusterRequest(GETRebootDBClusterActionEnum.REBOOT_DB_CLUSTER, "ex", GETRebootDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "dolor";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nulla";
            }};            

            GETRebootDBClusterResponse res = sdk.sdk.getRebootDBCluster(req);

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

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "voluptatibus", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                forceFailover = false;
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
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

## getRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRegisterDBProxyTargetsActionEnum;
import org.openapis.openapi.models.operations.GETRegisterDBProxyTargetsRequest;
import org.openapis.openapi.models.operations.GETRegisterDBProxyTargetsResponse;
import org.openapis.openapi.models.operations.GETRegisterDBProxyTargetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRegisterDBProxyTargetsRequest req = new GETRegisterDBProxyTargetsRequest(GETRegisterDBProxyTargetsActionEnum.REGISTER_DB_PROXY_TARGETS, "aliquid", GETRegisterDBProxyTargetsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbClusterIdentifiers = new String[]{{
                    add("magnam"),
                }};
                dbInstanceIdentifiers = new String[]{{
                    add("quo"),
                    add("consectetur"),
                }};
                targetGroupName = "recusandae";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            GETRegisterDBProxyTargetsResponse res = sdk.sdk.getRegisterDBProxyTargets(req);

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

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveFromGlobalClusterRequest req = new GETRemoveFromGlobalClusterRequest(GETRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, GETRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbClusterIdentifier = "impedit";
                globalClusterIdentifier = "aliquam";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "inventore";
                xAmzDate = "non";
                xAmzSecurityToken = "et";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "laborum";
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

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveRoleFromDBClusterRequest req = new GETRemoveRoleFromDBClusterRequest(GETRemoveRoleFromDBClusterActionEnum.REMOVE_ROLE_FROM_DB_CLUSTER, "velit", "eum", GETRemoveRoleFromDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                featureName = "autem";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
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

## getRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBInstanceRequest;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBInstanceResponse;
import org.openapis.openapi.models.operations.GETRemoveRoleFromDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveRoleFromDBInstanceRequest req = new GETRemoveRoleFromDBInstanceRequest(GETRemoveRoleFromDBInstanceActionEnum.REMOVE_ROLE_FROM_DB_INSTANCE, "numquam", "explicabo", "provident", GETRemoveRoleFromDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "magnam";
                xAmzDate = "odio";
                xAmzSecurityToken = "eius";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "esse";
            }};            

            GETRemoveRoleFromDBInstanceResponse res = sdk.sdk.getRemoveRoleFromDBInstance(req);

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

Removes a source identifier from an existing RDS event notification subscription.

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
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "fuga", "reprehenderit", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
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

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "quisquam",                 new String[]{{
                                add("ipsa"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "fuga";
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

## getRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeDBSecurityGroupIngressRequest req = new GETRevokeDBSecurityGroupIngressRequest(GETRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, "eos", GETRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                cidrip = "voluptas";
                ec2SecurityGroupId = "ab";
                ec2SecurityGroupName = "cupiditate";
                ec2SecurityGroupOwnerId = "consequatur";
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsam";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "esse";
            }};            

            GETRevokeDBSecurityGroupIngressResponse res = sdk.sdk.getRevokeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartActivityStreamActionEnum;
import org.openapis.openapi.models.operations.GETStartActivityStreamModeEnum;
import org.openapis.openapi.models.operations.GETStartActivityStreamRequest;
import org.openapis.openapi.models.operations.GETStartActivityStreamResponse;
import org.openapis.openapi.models.operations.GETStartActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartActivityStreamRequest req = new GETStartActivityStreamRequest(GETStartActivityStreamActionEnum.START_ACTIVITY_STREAM, "aperiam", GETStartActivityStreamModeEnum.ASYNC, "quod", GETStartActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                applyImmediately = false;
                engineNativeAuditFieldsIncluded = false;
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "nihil";
                xAmzDate = "totam";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "odio";
            }};            

            GETStartActivityStreamResponse res = sdk.sdk.getStartActivityStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartDBCluster

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartDBClusterRequest req = new GETStartDBClusterRequest(GETStartDBClusterActionEnum.START_DB_CLUSTER, "commodi", GETStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
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

## getStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETStartDBInstanceRequest;
import org.openapis.openapi.models.operations.GETStartDBInstanceResponse;
import org.openapis.openapi.models.operations.GETStartDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartDBInstanceRequest req = new GETStartDBInstanceRequest(GETStartDBInstanceActionEnum.START_DB_INSTANCE, "praesentium", GETStartDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "fugit";
                xAmzDate = "fuga";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "atque";
            }};            

            GETStartDBInstanceResponse res = sdk.sdk.getStartDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartDBInstanceAutomatedBackupsReplicationActionEnum;
import org.openapis.openapi.models.operations.GETStartDBInstanceAutomatedBackupsReplicationRequest;
import org.openapis.openapi.models.operations.GETStartDBInstanceAutomatedBackupsReplicationResponse;
import org.openapis.openapi.models.operations.GETStartDBInstanceAutomatedBackupsReplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartDBInstanceAutomatedBackupsReplicationRequest req = new GETStartDBInstanceAutomatedBackupsReplicationRequest(GETStartDBInstanceAutomatedBackupsReplicationActionEnum.START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION, "minima", GETStartDBInstanceAutomatedBackupsReplicationVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                backupRetentionPeriod = 392676L;
                kmsKeyId = "fugit";
                preSignedUrl = "sapiente";
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "explicabo";
                xAmzDate = "saepe";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "et";
            }};            

            GETStartDBInstanceAutomatedBackupsReplicationResponse res = sdk.sdk.getStartDBInstanceAutomatedBackupsReplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartExportTaskActionEnum;
import org.openapis.openapi.models.operations.GETStartExportTaskRequest;
import org.openapis.openapi.models.operations.GETStartExportTaskResponse;
import org.openapis.openapi.models.operations.GETStartExportTaskVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartExportTaskRequest req = new GETStartExportTaskRequest(GETStartExportTaskActionEnum.START_EXPORT_TASK, "eveniet", "accusamus", "veritatis", "esse", "quod", GETStartExportTaskVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                exportOnly = new String[]{{
                    add("vero"),
                    add("aliquid"),
                    add("quasi"),
                }};
                s3Prefix = "saepe";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "harum";
                xAmzCredential = "molestiae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETStartExportTaskResponse res = sdk.sdk.getStartExportTask(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopActivityStreamActionEnum;
import org.openapis.openapi.models.operations.GETStopActivityStreamRequest;
import org.openapis.openapi.models.operations.GETStopActivityStreamResponse;
import org.openapis.openapi.models.operations.GETStopActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopActivityStreamRequest req = new GETStopActivityStreamRequest(GETStopActivityStreamActionEnum.STOP_ACTIVITY_STREAM, "sit", GETStopActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                applyImmediately = false;
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "adipisci";
                xAmzDate = "cumque";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "minus";
            }};            

            GETStopActivityStreamResponse res = sdk.sdk.getStopActivityStream(req);

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

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopDBClusterRequest req = new GETStopDBClusterRequest(GETStopDBClusterActionEnum.STOP_DB_CLUSTER, "sapiente", GETStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "blanditiis";
                xAmzDate = "provident";
                xAmzSecurityToken = "a";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "quas";
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

## getStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETStopDBInstanceRequest;
import org.openapis.openapi.models.operations.GETStopDBInstanceResponse;
import org.openapis.openapi.models.operations.GETStopDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopDBInstanceRequest req = new GETStopDBInstanceRequest(GETStopDBInstanceActionEnum.STOP_DB_INSTANCE, "quasi", GETStopDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbSnapshotIdentifier = "a";
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            GETStopDBInstanceResponse res = sdk.sdk.getStopDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopDBInstanceAutomatedBackupsReplicationActionEnum;
import org.openapis.openapi.models.operations.GETStopDBInstanceAutomatedBackupsReplicationRequest;
import org.openapis.openapi.models.operations.GETStopDBInstanceAutomatedBackupsReplicationResponse;
import org.openapis.openapi.models.operations.GETStopDBInstanceAutomatedBackupsReplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopDBInstanceAutomatedBackupsReplicationRequest req = new GETStopDBInstanceAutomatedBackupsReplicationRequest(GETStopDBInstanceAutomatedBackupsReplicationActionEnum.STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION, "veritatis", GETStopDBInstanceAutomatedBackupsReplicationVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            GETStopDBInstanceAutomatedBackupsReplicationResponse res = sdk.sdk.getStopDBInstanceAutomatedBackupsReplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSwitchoverBlueGreenDeploymentActionEnum;
import org.openapis.openapi.models.operations.GETSwitchoverBlueGreenDeploymentRequest;
import org.openapis.openapi.models.operations.GETSwitchoverBlueGreenDeploymentResponse;
import org.openapis.openapi.models.operations.GETSwitchoverBlueGreenDeploymentVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSwitchoverBlueGreenDeploymentRequest req = new GETSwitchoverBlueGreenDeploymentRequest(GETSwitchoverBlueGreenDeploymentActionEnum.SWITCHOVER_BLUE_GREEN_DEPLOYMENT, "vel", GETSwitchoverBlueGreenDeploymentVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                switchoverTimeout = 447378L;
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETSwitchoverBlueGreenDeploymentResponse res = sdk.sdk.getSwitchoverBlueGreenDeployment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSwitchoverReadReplicaActionEnum;
import org.openapis.openapi.models.operations.GETSwitchoverReadReplicaRequest;
import org.openapis.openapi.models.operations.GETSwitchoverReadReplicaResponse;
import org.openapis.openapi.models.operations.GETSwitchoverReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSwitchoverReadReplicaRequest req = new GETSwitchoverReadReplicaRequest(GETSwitchoverReadReplicaActionEnum.SWITCHOVER_READ_REPLICA, "ullam", GETSwitchoverReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nisi";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETSwitchoverReadReplicaResponse res = sdk.sdk.getSwitchoverReadReplica(req);

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

Associates an Identity and Access Management (IAM) role with a DB cluster.

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
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddRoleToDBClusterRequest req = new POSTAddRoleToDBClusterRequest(POSTAddRoleToDBClusterActionEnum.ADD_ROLE_TO_DB_CLUSTER, POSTAddRoleToDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "omnis";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "at";
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

## postAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddRoleToDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTAddRoleToDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTAddRoleToDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTAddRoleToDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.AddRoleToDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddRoleToDBInstanceRequest req = new POSTAddRoleToDBInstanceRequest(POSTAddRoleToDBInstanceActionEnum.ADD_ROLE_TO_DB_INSTANCE, POSTAddRoleToDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "minima";
                xAmzCredential = "veritatis";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "temporibus";
            }};            

            POSTAddRoleToDBInstanceResponse res = sdk.sdk.postAddRoleToDBInstance(req);

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

Adds a source identifier to an existing RDS event notification subscription.

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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ab";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "non";
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

<p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>

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
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "impedit";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "dignissimos";
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
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTApplyPendingMaintenanceActionRequest req = new POSTApplyPendingMaintenanceActionRequest(POSTApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, POSTApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
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

## postAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeDBSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeDBSecurityGroupIngressRequest req = new POSTAuthorizeDBSecurityGroupIngressRequest(POSTAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, POSTAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "officia";
                xAmzCredential = "maxime";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "officia";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTAuthorizeDBSecurityGroupIngressResponse res = sdk.sdk.postAuthorizeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBacktrackDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTBacktrackDBClusterRequest;
import org.openapis.openapi.models.operations.POSTBacktrackDBClusterResponse;
import org.openapis.openapi.models.operations.POSTBacktrackDBClusterVersionEnum;
import org.openapis.openapi.models.shared.BacktrackDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBacktrackDBClusterRequest req = new POSTBacktrackDBClusterRequest(POSTBacktrackDBClusterActionEnum.BACKTRACK_DB_CLUSTER, POSTBacktrackDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
            }};            

            POSTBacktrackDBClusterResponse res = sdk.sdk.postBacktrackDBCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCancelExportTaskActionEnum;
import org.openapis.openapi.models.operations.POSTCancelExportTaskRequest;
import org.openapis.openapi.models.operations.POSTCancelExportTaskResponse;
import org.openapis.openapi.models.operations.POSTCancelExportTaskVersionEnum;
import org.openapis.openapi.models.shared.CancelExportTaskMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCancelExportTaskRequest req = new POSTCancelExportTaskRequest(POSTCancelExportTaskActionEnum.CANCEL_EXPORT_TASK, POSTCancelExportTaskVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "est";
                xAmzCredential = "recusandae";
                xAmzDate = "totam";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTCancelExportTaskResponse res = sdk.sdk.postCancelExportTask(req);

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
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterParameterGroupRequest req = new POSTCopyDBClusterParameterGroupRequest(POSTCopyDBClusterParameterGroupActionEnum.COPY_DB_CLUSTER_PARAMETER_GROUP, POSTCopyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "facilis";
                xAmzDate = "cum";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
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

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterSnapshotRequest req = new POSTCopyDBClusterSnapshotRequest(POSTCopyDBClusterSnapshotActionEnum.COPY_DB_CLUSTER_SNAPSHOT, POSTCopyDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "assumenda".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
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
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBParameterGroupRequest req = new POSTCopyDBParameterGroupRequest(POSTCopyDBParameterGroupActionEnum.COPY_DB_PARAMETER_GROUP, POSTCopyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "doloribus";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "saepe";
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

## postCopyDBSnapshot

<p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CopyDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBSnapshotRequest req = new POSTCopyDBSnapshotRequest(POSTCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, POSTCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTCopyDBSnapshotResponse res = sdk.sdk.postCopyDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyOptionGroup

Copies the specified option group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.CopyOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyOptionGroupRequest req = new POSTCopyOptionGroupRequest(POSTCopyOptionGroupActionEnum.COPY_OPTION_GROUP, POSTCopyOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            POSTCopyOptionGroupResponse res = sdk.sdk.postCopyOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateBlueGreenDeployment

<p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateBlueGreenDeploymentActionEnum;
import org.openapis.openapi.models.operations.POSTCreateBlueGreenDeploymentRequest;
import org.openapis.openapi.models.operations.POSTCreateBlueGreenDeploymentResponse;
import org.openapis.openapi.models.operations.POSTCreateBlueGreenDeploymentVersionEnum;
import org.openapis.openapi.models.shared.CreateBlueGreenDeploymentRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateBlueGreenDeploymentRequest req = new POSTCreateBlueGreenDeploymentRequest(POSTCreateBlueGreenDeploymentActionEnum.CREATE_BLUE_GREEN_DEPLOYMENT, POSTCreateBlueGreenDeploymentVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            POSTCreateBlueGreenDeploymentResponse res = sdk.sdk.postCreateBlueGreenDeployment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCustomDBEngineVersion

Creates a custom DB engine version (CEV).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCustomDBEngineVersionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCustomDBEngineVersionRequest;
import org.openapis.openapi.models.operations.POSTCreateCustomDBEngineVersionResponse;
import org.openapis.openapi.models.operations.POSTCreateCustomDBEngineVersionVersionEnum;
import org.openapis.openapi.models.shared.CreateCustomDBEngineVersionMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateCustomDBEngineVersionRequest req = new POSTCreateCustomDBEngineVersionRequest(POSTCreateCustomDBEngineVersionActionEnum.CREATE_CUSTOM_DB_ENGINE_VERSION, POSTCreateCustomDBEngineVersionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTCreateCustomDBEngineVersionResponse res = sdk.sdk.postCreateCustomDBEngineVersion(req);

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

<p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterMessage;
import org.openapis.openapi.models.shared.ScalingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterRequest req = new POSTCreateDBClusterRequest(POSTCreateDBClusterActionEnum.CREATE_DB_CLUSTER, POSTCreateDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "temporibus".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
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

<p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterEndpointRequest req = new POSTCreateDBClusterEndpointRequest(POSTCreateDBClusterEndpointActionEnum.CREATE_DB_CLUSTER_ENDPOINT, POSTCreateDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
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

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterParameterGroupRequest req = new POSTCreateDBClusterParameterGroupRequest(POSTCreateDBClusterParameterGroupActionEnum.CREATE_DB_CLUSTER_PARAMETER_GROUP, POSTCreateDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
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

<p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterSnapshotRequest req = new POSTCreateDBClusterSnapshotRequest(POSTCreateDBClusterSnapshotActionEnum.CREATE_DB_CLUSTER_SNAPSHOT, POSTCreateDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
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

<p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceMessage;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "illo";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "maiores";
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

## postCreateDBInstanceReadReplica

<p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceReadReplicaMessage;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.ReplicaModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceReadReplicaRequest req = new POSTCreateDBInstanceReadReplicaRequest(POSTCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, POSTCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "sed".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            POSTCreateDBInstanceReadReplicaResponse res = sdk.sdk.postCreateDBInstanceReadReplica(req);

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

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

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
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBParameterGroupRequest req = new POSTCreateDBParameterGroupRequest(POSTCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, POSTCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
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

## postCreateDBProxy

Creates a new DB proxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBProxyActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBProxyRequest;
import org.openapis.openapi.models.operations.POSTCreateDBProxyResponse;
import org.openapis.openapi.models.operations.POSTCreateDBProxyVersionEnum;
import org.openapis.openapi.models.shared.AuthSchemeEnum;
import org.openapis.openapi.models.shared.ClientPasswordAuthTypeEnum;
import org.openapis.openapi.models.shared.CreateDBProxyRequest;
import org.openapis.openapi.models.shared.EngineFamilyEnum;
import org.openapis.openapi.models.shared.IAMAuthModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;
import org.openapis.openapi.models.shared.UserAuthConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBProxyRequest req = new POSTCreateDBProxyRequest(POSTCreateDBProxyActionEnum.CREATE_DB_PROXY, POSTCreateDBProxyVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTCreateDBProxyResponse res = sdk.sdk.postCreateDBProxy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBProxyEndpoint

Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBProxyEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBProxyEndpointRequest;
import org.openapis.openapi.models.operations.POSTCreateDBProxyEndpointResponse;
import org.openapis.openapi.models.operations.POSTCreateDBProxyEndpointVersionEnum;
import org.openapis.openapi.models.shared.CreateDBProxyEndpointRequest;
import org.openapis.openapi.models.shared.DBProxyEndpointTargetRoleEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBProxyEndpointRequest req = new POSTCreateDBProxyEndpointRequest(POSTCreateDBProxyEndpointActionEnum.CREATE_DB_PROXY_ENDPOINT, POSTCreateDBProxyEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTCreateDBProxyEndpointResponse res = sdk.sdk.postCreateDBProxyEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSecurityGroup

<p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSecurityGroupRequest req = new POSTCreateDBSecurityGroupRequest(POSTCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, POSTCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            POSTCreateDBSecurityGroupResponse res = sdk.sdk.postCreateDBSecurityGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSnapshot

Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSnapshotRequest req = new POSTCreateDBSnapshotRequest(POSTCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, POSTCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "error";
                xAmzCredential = "hic";
                xAmzDate = "expedita";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTCreateDBSnapshotResponse res = sdk.sdk.postCreateDBSnapshot(req);

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

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "accusamus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "atque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ut";
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

<p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>

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
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "magnam";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "sit";
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

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateGlobalClusterRequest req = new POSTCreateGlobalClusterRequest(POSTCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, POSTCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "et";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "sit";
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

## postCreateOptionGroup

<p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOptionGroupRequest req = new POSTCreateOptionGroupRequest(POSTCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, POSTCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "error";
                xAmzCredential = "consequatur";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "harum";
            }};            

            POSTCreateOptionGroupResponse res = sdk.sdk.postCreateOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteBlueGreenDeploymentActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteBlueGreenDeploymentRequest;
import org.openapis.openapi.models.operations.POSTDeleteBlueGreenDeploymentResponse;
import org.openapis.openapi.models.operations.POSTDeleteBlueGreenDeploymentVersionEnum;
import org.openapis.openapi.models.shared.DeleteBlueGreenDeploymentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteBlueGreenDeploymentRequest req = new POSTDeleteBlueGreenDeploymentRequest(POSTDeleteBlueGreenDeploymentActionEnum.DELETE_BLUE_GREEN_DEPLOYMENT, POSTDeleteBlueGreenDeploymentVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "labore";
                xAmzCredential = "quidem";
                xAmzDate = "atque";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "tenetur";
            }};            

            POSTDeleteBlueGreenDeploymentResponse res = sdk.sdk.postDeleteBlueGreenDeployment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCustomDBEngineVersionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCustomDBEngineVersionRequest;
import org.openapis.openapi.models.operations.POSTDeleteCustomDBEngineVersionResponse;
import org.openapis.openapi.models.operations.POSTDeleteCustomDBEngineVersionVersionEnum;
import org.openapis.openapi.models.shared.DeleteCustomDBEngineVersionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCustomDBEngineVersionRequest req = new POSTDeleteCustomDBEngineVersionRequest(POSTDeleteCustomDBEngineVersionActionEnum.DELETE_CUSTOM_DB_ENGINE_VERSION, POSTDeleteCustomDBEngineVersionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "voluptate";
                xAmzDate = "unde";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "repellendus";
            }};            

            POSTDeleteCustomDBEngineVersionResponse res = sdk.sdk.postDeleteCustomDBEngineVersion(req);

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

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterRequest req = new POSTDeleteDBClusterRequest(POSTDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, POSTDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptates".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "quidem";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "facere";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "praesentium";
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

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterEndpointRequest req = new POSTDeleteDBClusterEndpointRequest(POSTDeleteDBClusterEndpointActionEnum.DELETE_DB_CLUSTER_ENDPOINT, POSTDeleteDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "repudiandae";
                xAmzDate = "quasi";
                xAmzSecurityToken = "atque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "asperiores";
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

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterParameterGroupRequest req = new POSTDeleteDBClusterParameterGroupRequest(POSTDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, POSTDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "amet";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ea";
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

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterSnapshotRequest req = new POSTDeleteDBClusterSnapshotRequest(POSTDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, POSTDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "accusamus";
                xAmzDate = "natus";
                xAmzSecurityToken = "minima";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "ex";
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

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

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
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
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

## postDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceAutomatedBackupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceAutomatedBackupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceAutomatedBackupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceAutomatedBackupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBInstanceAutomatedBackupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceAutomatedBackupRequest req = new POSTDeleteDBInstanceAutomatedBackupRequest(POSTDeleteDBInstanceAutomatedBackupActionEnum.DELETE_DB_INSTANCE_AUTOMATED_BACKUP, POSTDeleteDBInstanceAutomatedBackupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "labore";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDeleteDBInstanceAutomatedBackupResponse res = sdk.sdk.postDeleteDBInstanceAutomatedBackup(req);

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

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBParameterGroupRequest req = new POSTDeleteDBParameterGroupRequest(POSTDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, POSTDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "beatae".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "enim";
                xAmzCredential = "laboriosam";
                xAmzDate = "velit";
                xAmzSecurityToken = "a";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "magnam";
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

## postDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBProxyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBProxyRequest req = new POSTDeleteDBProxyRequest(POSTDeleteDBProxyActionEnum.DELETE_DB_PROXY, POSTDeleteDBProxyVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "in";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDeleteDBProxyResponse res = sdk.sdk.postDeleteDBProxy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyEndpointRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyEndpointResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBProxyEndpointVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBProxyEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBProxyEndpointRequest req = new POSTDeleteDBProxyEndpointRequest(POSTDeleteDBProxyEndpointActionEnum.DELETE_DB_PROXY_ENDPOINT, POSTDeleteDBProxyEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quis";
                xAmzCredential = "reprehenderit";
                xAmzDate = "error";
                xAmzSecurityToken = "illo";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDeleteDBProxyEndpointResponse res = sdk.sdk.postDeleteDBProxyEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSecurityGroupRequest req = new POSTDeleteDBSecurityGroupRequest(POSTDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, POSTDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "iure";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "totam";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTDeleteDBSecurityGroupResponse res = sdk.sdk.postDeleteDBSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSnapshotRequest req = new POSTDeleteDBSnapshotRequest(POSTDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, POSTDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "iure";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ratione";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "voluptatum";
            }};            

            POSTDeleteDBSnapshotResponse res = sdk.sdk.postDeleteDBSnapshot(req);

            if (res.body != null) {
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
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "alias";
                xAmzDate = "corporis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "mollitia";
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

Deletes an RDS event notification subscription.

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
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "dolores";
                xAmzDate = "id";
                xAmzSecurityToken = "minima";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "dolorum";
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

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGlobalClusterRequest req = new POSTDeleteGlobalClusterRequest(POSTDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, POSTDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quaerat";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "ex";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "culpa";
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

## postDeleteOptionGroup

Deletes an existing option group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteOptionGroupRequest req = new POSTDeleteOptionGroupRequest(POSTDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, POSTDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "esse";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quis";
            }};            

            POSTDeleteOptionGroupResponse res = sdk.sdk.postDeleteOptionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeregisterDBProxyTargetsActionEnum;
import org.openapis.openapi.models.operations.POSTDeregisterDBProxyTargetsRequest;
import org.openapis.openapi.models.operations.POSTDeregisterDBProxyTargetsResponse;
import org.openapis.openapi.models.operations.POSTDeregisterDBProxyTargetsVersionEnum;
import org.openapis.openapi.models.shared.DeregisterDBProxyTargetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeregisterDBProxyTargetsRequest req = new POSTDeregisterDBProxyTargetsRequest(POSTDeregisterDBProxyTargetsActionEnum.DEREGISTER_DB_PROXY_TARGETS, POSTDeregisterDBProxyTargetsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ullam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "animi";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTDeregisterDBProxyTargetsResponse res = sdk.sdk.postDeregisterDBProxyTargets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountAttributesRequest req = new POSTDescribeAccountAttributesRequest(POSTDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, POSTDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "possimus".getBytes();
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "aliquid";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ullam";
            }};            

            POSTDescribeAccountAttributesResponse res = sdk.sdk.postDescribeAccountAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeBlueGreenDeployments

<p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeBlueGreenDeploymentsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeBlueGreenDeploymentsRequest;
import org.openapis.openapi.models.operations.POSTDescribeBlueGreenDeploymentsResponse;
import org.openapis.openapi.models.operations.POSTDescribeBlueGreenDeploymentsVersionEnum;
import org.openapis.openapi.models.shared.DescribeBlueGreenDeploymentsRequest;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeBlueGreenDeploymentsRequest req = new POSTDescribeBlueGreenDeploymentsRequest(POSTDescribeBlueGreenDeploymentsActionEnum.DESCRIBE_BLUE_GREEN_DEPLOYMENTS, POSTDescribeBlueGreenDeploymentsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "nam";
                maxRecords = "earum";
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "modi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "sapiente";
            }};            

            POSTDescribeBlueGreenDeploymentsResponse res = sdk.sdk.postDescribeBlueGreenDeployments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCertificates

<p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCertificatesRequest;
import org.openapis.openapi.models.operations.POSTDescribeCertificatesResponse;
import org.openapis.openapi.models.operations.POSTDescribeCertificatesVersionEnum;
import org.openapis.openapi.models.shared.DescribeCertificatesMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCertificatesRequest req = new POSTDescribeCertificatesRequest(POSTDescribeCertificatesActionEnum.DESCRIBE_CERTIFICATES, POSTDescribeCertificatesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "vitae";
                maxRecords = "rerum";
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "fugit";
                xAmzDate = "cumque";
                xAmzSecurityToken = "quae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "velit";
            }};            

            POSTDescribeCertificatesResponse res = sdk.sdk.postDescribeCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBClusterBacktracks

<p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterBacktracksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterBacktracksRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterBacktracksResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBClusterBacktracksVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBClusterBacktracksMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterBacktracksRequest req = new POSTDescribeDBClusterBacktracksRequest(POSTDescribeDBClusterBacktracksActionEnum.DESCRIBE_DB_CLUSTER_BACKTRACKS, POSTDescribeDBClusterBacktracksVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "eum";
                maxRecords = "eius";
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "eos";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "minima";
            }};            

            POSTDescribeDBClusterBacktracksResponse res = sdk.sdk.postDescribeDBClusterBacktracks(req);

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

<p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterEndpointsRequest req = new POSTDescribeDBClusterEndpointsRequest(POSTDescribeDBClusterEndpointsActionEnum.DESCRIBE_DB_CLUSTER_ENDPOINTS, POSTDescribeDBClusterEndpointsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "cupiditate";
                maxRecords = "provident";
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "hic";
                xAmzCredential = "illum";
                xAmzDate = "eaque";
                xAmzSecurityToken = "earum";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "maiores";
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

<p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParameterGroupsRequest req = new POSTDescribeDBClusterParameterGroupsRequest(POSTDescribeDBClusterParameterGroupsActionEnum.DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS, POSTDescribeDBClusterParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "aliquid";
                maxRecords = "porro";
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "cumque";
                xAmzDate = "fuga";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "necessitatibus";
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

<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParametersRequest req = new POSTDescribeDBClusterParametersRequest(POSTDescribeDBClusterParametersActionEnum.DESCRIBE_DB_CLUSTER_PARAMETERS, POSTDescribeDBClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "consequatur";
                maxRecords = "quasi";
                requestBody = "et".getBytes();
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "natus";
                xAmzCredential = "occaecati";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "magni";
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

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

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
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterSnapshotAttributesRequest req = new POSTDescribeDBClusterSnapshotAttributesRequest(POSTDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, POSTDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nulla".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "tempora";
                xAmzDate = "nihil";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "iusto";
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

<p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                marker = "praesentium";
                maxRecords = "maiores";
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "fugiat";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "tempora";
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

<p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>

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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClustersRequest req = new POSTDescribeDBClustersRequest(POSTDescribeDBClustersActionEnum.DESCRIBE_DB_CLUSTERS, POSTDescribeDBClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "ex";
                maxRecords = "consectetur";
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "sunt";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "aliquid";
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
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "suscipit";
                maxRecords = "aliquid";
                requestBody = "perferendis".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "iste";
                xAmzDate = "id";
                xAmzSecurityToken = "ab";
                xAmzSignature = "error";
                xAmzSignedHeaders = "possimus";
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

## postDescribeDBInstanceAutomatedBackups

<p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBInstanceAutomatedBackupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBInstanceAutomatedBackupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBInstanceAutomatedBackupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBInstanceAutomatedBackupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBInstanceAutomatedBackupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstanceAutomatedBackupsRequest req = new POSTDescribeDBInstanceAutomatedBackupsRequest(POSTDescribeDBInstanceAutomatedBackupsActionEnum.DESCRIBE_DB_INSTANCE_AUTOMATED_BACKUPS, POSTDescribeDBInstanceAutomatedBackupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "mollitia";
                maxRecords = "laborum";
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "enim";
                xAmzDate = "vitae";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "quo";
            }};            

            POSTDescribeDBInstanceAutomatedBackupsResponse res = sdk.sdk.postDescribeDBInstanceAutomatedBackups(req);

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

<p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>

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
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "ut";
                maxRecords = "ad";
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "cum";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "omnis";
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

## postDescribeDBLogFiles

<p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBLogFilesMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBLogFilesRequest req = new POSTDescribeDBLogFilesRequest(POSTDescribeDBLogFilesActionEnum.DESCRIBE_DB_LOG_FILES, POSTDescribeDBLogFilesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "rerum";
                maxRecords = "est";
                requestBody = "culpa".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "officiis";
                xAmzDate = "architecto";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTDescribeDBLogFilesResponse res = sdk.sdk.postDescribeDBLogFiles(req);

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
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParameterGroupsRequest req = new POSTDescribeDBParameterGroupsRequest(POSTDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, POSTDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "alias";
                maxRecords = "deleniti";
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "rem";
                xAmzDate = "minus";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "ratione";
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
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParametersRequest req = new POSTDescribeDBParametersRequest(POSTDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, POSTDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "perferendis";
                maxRecords = "illum";
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "nam";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "aliquam";
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

## postDescribeDBProxies

Returns information about DB proxies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBProxiesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBProxiesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBProxiesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBProxiesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBProxiesRequest;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBProxiesRequest req = new POSTDescribeDBProxiesRequest(POSTDescribeDBProxiesActionEnum.DESCRIBE_DB_PROXIES, POSTDescribeDBProxiesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "deleniti";
                maxRecords = "veritatis";
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "architecto";
                xAmzDate = "sit";
                xAmzSecurityToken = "modi";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ab";
            }};            

            POSTDescribeDBProxiesResponse res = sdk.sdk.postDescribeDBProxies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBProxyEndpoints

Returns information about DB proxy endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyEndpointsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyEndpointsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyEndpointsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyEndpointsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBProxyEndpointsRequest;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBProxyEndpointsRequest req = new POSTDescribeDBProxyEndpointsRequest(POSTDescribeDBProxyEndpointsActionEnum.DESCRIBE_DB_PROXY_ENDPOINTS, POSTDescribeDBProxyEndpointsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "quae";
                maxRecords = "dolor";
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "ipsa";
                xAmzDate = "quas";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "officiis";
            }};            

            POSTDescribeDBProxyEndpointsResponse res = sdk.sdk.postDescribeDBProxyEndpoints(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBProxyTargetGroups

Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBProxyTargetGroupsRequest;
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

            POSTDescribeDBProxyTargetGroupsRequest req = new POSTDescribeDBProxyTargetGroupsRequest(POSTDescribeDBProxyTargetGroupsActionEnum.DESCRIBE_DB_PROXY_TARGET_GROUPS, POSTDescribeDBProxyTargetGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "necessitatibus";
                maxRecords = "sed";
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "eum";
                xAmzDate = "vel";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "exercitationem";
            }};            

            POSTDescribeDBProxyTargetGroupsResponse res = sdk.sdk.postDescribeDBProxyTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBProxyTargets

Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBProxyTargetsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBProxyTargetsRequest;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBProxyTargetsRequest req = new POSTDescribeDBProxyTargetsRequest(POSTDescribeDBProxyTargetsActionEnum.DESCRIBE_DB_PROXY_TARGETS, POSTDescribeDBProxyTargetsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "porro";
                maxRecords = "autem";
                requestBody = "nobis".getBytes();
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "consequuntur";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "quasi";
            }};            

            POSTDescribeDBProxyTargetsResponse res = sdk.sdk.postDescribeDBProxyTargets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSecurityGroups

<p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSecurityGroupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSecurityGroupsRequest req = new POSTDescribeDBSecurityGroupsRequest(POSTDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, POSTDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "at";
                maxRecords = "vero";
                requestBody = "est".getBytes();
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "doloribus";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "optio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDescribeDBSecurityGroupsResponse res = sdk.sdk.postDescribeDBSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotAttributesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSnapshotAttributesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSnapshotAttributesRequest req = new POSTDescribeDBSnapshotAttributesRequest(POSTDescribeDBSnapshotAttributesActionEnum.DESCRIBE_DB_SNAPSHOT_ATTRIBUTES, POSTDescribeDBSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "numquam";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quos";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTDescribeDBSnapshotAttributesResponse res = sdk.sdk.postDescribeDBSnapshotAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSnapshots

Returns information about DB snapshots. This API action supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSnapshotsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSnapshotsRequest req = new POSTDescribeDBSnapshotsRequest(POSTDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, POSTDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "nesciunt";
                maxRecords = "fuga";
                requestBody = "laudantium".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "rem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTDescribeDBSnapshotsResponse res = sdk.sdk.postDescribeDBSnapshots(req);

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
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "aperiam";
                maxRecords = "cupiditate";
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "alias";
                xAmzCredential = "omnis";
                xAmzDate = "eos";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "magni";
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

<p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>

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
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultClusterParametersRequest req = new POSTDescribeEngineDefaultClusterParametersRequest(POSTDescribeEngineDefaultClusterParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS, POSTDescribeEngineDefaultClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "fuga".getBytes();
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "omnis";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "praesentium";
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
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "magnam";
                maxRecords = "temporibus";
                requestBody = "quos".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "commodi";
                xAmzDate = "totam";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "nam";
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

Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.

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
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "vel";
                xAmzCredential = "alias";
                xAmzDate = "quasi";
                xAmzSecurityToken = "non";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "enim";
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

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "nulla";
                maxRecords = "deserunt";
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "est";
                xAmzDate = "quis";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "impedit";
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

<p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>

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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "necessitatibus";
                maxRecords = "asperiores";
                requestBody = "ex".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "delectus";
                xAmzDate = "quae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "laborum";
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

## postDescribeExportTasks

Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeExportTasksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeExportTasksRequest;
import org.openapis.openapi.models.operations.POSTDescribeExportTasksResponse;
import org.openapis.openapi.models.operations.POSTDescribeExportTasksVersionEnum;
import org.openapis.openapi.models.shared.DescribeExportTasksMessage;
import org.openapis.openapi.models.shared.ExportSourceTypeEnum;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeExportTasksRequest req = new POSTDescribeExportTasksRequest(POSTDescribeExportTasksActionEnum.DESCRIBE_EXPORT_TASKS, POSTDescribeExportTasksVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "velit";
                maxRecords = "atque";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "soluta";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTDescribeExportTasksResponse res = sdk.sdk.postDescribeExportTasks(req);

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

<p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersRequest;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersResponse;
import org.openapis.openapi.models.operations.POSTDescribeGlobalClustersVersionEnum;
import org.openapis.openapi.models.shared.DescribeGlobalClustersMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeGlobalClustersRequest req = new POSTDescribeGlobalClustersRequest(POSTDescribeGlobalClustersActionEnum.DESCRIBE_GLOBAL_CLUSTERS, POSTDescribeGlobalClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "sequi";
                maxRecords = "dignissimos";
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "quibusdam";
                xAmzDate = "iure";
                xAmzSecurityToken = "odit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vel";
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

## postDescribeOptionGroupOptions

Describes all available options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOptionGroupOptionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupOptionsRequest req = new POSTDescribeOptionGroupOptionsRequest(POSTDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, POSTDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "quibusdam";
                maxRecords = "inventore";
                requestBody = "facere".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quia";
                xAmzSecurityToken = "porro";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "velit";
            }};            

            POSTDescribeOptionGroupOptionsResponse res = sdk.sdk.postDescribeOptionGroupOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOptionGroups

Describes the available option groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOptionGroupsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupsRequest req = new POSTDescribeOptionGroupsRequest(POSTDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, POSTDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "accusantium";
                maxRecords = "vel";
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "vero";
                xAmzCredential = "excepturi";
                xAmzDate = "eum";
                xAmzSecurityToken = "velit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            POSTDescribeOptionGroupsResponse res = sdk.sdk.postDescribeOptionGroups(req);

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

Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.

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
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dicta";
                maxRecords = "impedit";
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "alias";
                xAmzDate = "nisi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "laborum";
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
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePendingMaintenanceActionsRequest req = new POSTDescribePendingMaintenanceActionsRequest(POSTDescribePendingMaintenanceActionsActionEnum.DESCRIBE_PENDING_MAINTENANCE_ACTIONS, POSTDescribePendingMaintenanceActionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dolor";
                maxRecords = "iusto";
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "officia";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptas";
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

## postDescribeReservedDBInstances

Returns information about reserved DB instances for this account, or about a specified reserved DB instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedDBInstancesMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesRequest req = new POSTDescribeReservedDBInstancesRequest(POSTDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, POSTDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "placeat";
                maxRecords = "perspiciatis";
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "a";
                xAmzCredential = "voluptate";
                xAmzDate = "ullam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "animi";
            }};            

            POSTDescribeReservedDBInstancesResponse res = sdk.sdk.postDescribeReservedDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedDBInstancesOfferings

Lists available reserved DB instance offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedDBInstancesOfferingsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesOfferingsRequest req = new POSTDescribeReservedDBInstancesOfferingsRequest(POSTDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, POSTDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "ipsam";
                maxRecords = "corporis";
                requestBody = "est".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "esse";
                xAmzCredential = "labore";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vitae";
            }};            

            POSTDescribeReservedDBInstancesOfferingsResponse res = sdk.sdk.postDescribeReservedDBInstancesOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSourceRegions

<p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSourceRegionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSourceRegionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeSourceRegionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeSourceRegionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeSourceRegionsMessage;
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSourceRegionsRequest req = new POSTDescribeSourceRegionsRequest(POSTDescribeSourceRegionsActionEnum.DESCRIBE_SOURCE_REGIONS, POSTDescribeSourceRegionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dolorem";
                maxRecords = "ad";
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "ex";
                xAmzCredential = "nemo";
                xAmzDate = "soluta";
                xAmzSecurityToken = "libero";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTDescribeSourceRegionsResponse res = sdk.sdk.postDescribeSourceRegions(req);

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

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeValidDBInstanceModificationsRequest req = new POSTDescribeValidDBInstanceModificationsRequest(POSTDescribeValidDBInstanceModificationsActionEnum.DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS, POSTDescribeValidDBInstanceModificationsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "magni";
                xAmzCredential = "vel";
                xAmzDate = "quae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "neque";
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

## postDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionActionEnum;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionRequest;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionResponse;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionVersionEnum;
import org.openapis.openapi.models.shared.DownloadDBLogFilePortionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDownloadDBLogFilePortionRequest req = new POSTDownloadDBLogFilePortionRequest(POSTDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, POSTDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "itaque";
                numberOfLines = "et";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "distinctio";
                xAmzDate = "maxime";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTDownloadDBLogFilePortionResponse res = sdk.sdk.postDownloadDBLogFilePortion(req);

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

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverDBClusterRequest req = new POSTFailoverDBClusterRequest(POSTFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, POSTFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "id";
                xAmzCredential = "libero";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "officia";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "placeat";
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

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

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
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverGlobalClusterRequest req = new POSTFailoverGlobalClusterRequest(POSTFailoverGlobalClusterActionEnum.FAILOVER_GLOBAL_CLUSTER, POSTFailoverGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "iusto".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "inventore";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "eligendi";
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

<p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>

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
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "esse";
                xAmzCredential = "dolores";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "est";
                xAmzSignedHeaders = "facere";
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

## postModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyActivityStreamActionEnum;
import org.openapis.openapi.models.operations.POSTModifyActivityStreamRequest;
import org.openapis.openapi.models.operations.POSTModifyActivityStreamResponse;
import org.openapis.openapi.models.operations.POSTModifyActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.AuditPolicyStateEnum;
import org.openapis.openapi.models.shared.ModifyActivityStreamRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyActivityStreamRequest req = new POSTModifyActivityStreamRequest(POSTModifyActivityStreamActionEnum.MODIFY_ACTIVITY_STREAM, POSTModifyActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "necessitatibus";
                xAmzDate = "tempore";
                xAmzSecurityToken = "sint";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "autem";
            }};            

            POSTModifyActivityStreamResponse res = sdk.sdk.postModifyActivityStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCertificatesRequest;
import org.openapis.openapi.models.operations.POSTModifyCertificatesResponse;
import org.openapis.openapi.models.operations.POSTModifyCertificatesVersionEnum;
import org.openapis.openapi.models.shared.ModifyCertificatesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCertificatesRequest req = new POSTModifyCertificatesRequest(POSTModifyCertificatesActionEnum.MODIFY_CERTIFICATES, POSTModifyCertificatesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "rerum".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "officiis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "cum";
                xAmzSignature = "at";
                xAmzSignedHeaders = "alias";
            }};            

            POSTModifyCertificatesResponse res = sdk.sdk.postModifyCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCurrentDBClusterCapacityActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCurrentDBClusterCapacityRequest;
import org.openapis.openapi.models.operations.POSTModifyCurrentDBClusterCapacityResponse;
import org.openapis.openapi.models.operations.POSTModifyCurrentDBClusterCapacityVersionEnum;
import org.openapis.openapi.models.shared.ModifyCurrentDBClusterCapacityMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCurrentDBClusterCapacityRequest req = new POSTModifyCurrentDBClusterCapacityRequest(POSTModifyCurrentDBClusterCapacityActionEnum.MODIFY_CURRENT_DB_CLUSTER_CAPACITY, POSTModifyCurrentDBClusterCapacityVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "accusantium";
                xAmzDate = "expedita";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "quibusdam";
            }};            

            POSTModifyCurrentDBClusterCapacityResponse res = sdk.sdk.postModifyCurrentDBClusterCapacity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCustomDBEngineVersionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCustomDBEngineVersionRequest;
import org.openapis.openapi.models.operations.POSTModifyCustomDBEngineVersionResponse;
import org.openapis.openapi.models.operations.POSTModifyCustomDBEngineVersionVersionEnum;
import org.openapis.openapi.models.shared.CustomEngineVersionStatusEnum;
import org.openapis.openapi.models.shared.ModifyCustomDBEngineVersionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCustomDBEngineVersionRequest req = new POSTModifyCustomDBEngineVersionRequest(POSTModifyCustomDBEngineVersionActionEnum.MODIFY_CUSTOM_DB_ENGINE_VERSION, POSTModifyCustomDBEngineVersionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "corporis";
                xAmzDate = "error";
                xAmzSecurityToken = "earum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "recusandae";
            }};            

            POSTModifyCustomDBEngineVersionResponse res = sdk.sdk.postModifyCustomDBEngineVersion(req);

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

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
import org.openapis.openapi.models.shared.ScalingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterRequest req = new POSTModifyDBClusterRequest(POSTModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, POSTModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ut".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "quis";
                xAmzCredential = "beatae";
                xAmzDate = "unde";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "cupiditate";
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

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterEndpointRequest req = new POSTModifyDBClusterEndpointRequest(POSTModifyDBClusterEndpointActionEnum.MODIFY_DB_CLUSTER_ENDPOINT, POSTModifyDBClusterEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "at";
                xAmzDate = "officia";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "necessitatibus";
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

<p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterParameterGroupRequest req = new POSTModifyDBClusterParameterGroupRequest(POSTModifyDBClusterParameterGroupActionEnum.MODIFY_DB_CLUSTER_PARAMETER_GROUP, POSTModifyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "cupiditate";
                xAmzDate = "minima";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "neque";
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

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterSnapshotAttributeRequest req = new POSTModifyDBClusterSnapshotAttributeRequest(POSTModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, POSTModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "corporis";
                xAmzDate = "magnam";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "tempore";
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

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.AutomationModeEnum;
import org.openapis.openapi.models.shared.CloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.shared.ModifyDBInstanceMessage;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.ReplicaModeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "labore";
                xAmzCredential = "totam";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "velit";
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

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

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
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBParameterGroupRequest req = new POSTModifyDBParameterGroupRequest(POSTModifyDBParameterGroupActionEnum.MODIFY_DB_PARAMETER_GROUP, POSTModifyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "fuga".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "est";
                xAmzCredential = "impedit";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "odit";
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

## postModifyDBProxy

Changes the settings for an existing DB proxy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBProxyActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBProxyRequest;
import org.openapis.openapi.models.operations.POSTModifyDBProxyResponse;
import org.openapis.openapi.models.operations.POSTModifyDBProxyVersionEnum;
import org.openapis.openapi.models.shared.AuthSchemeEnum;
import org.openapis.openapi.models.shared.ClientPasswordAuthTypeEnum;
import org.openapis.openapi.models.shared.IAMAuthModeEnum;
import org.openapis.openapi.models.shared.ModifyDBProxyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserAuthConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBProxyRequest req = new POSTModifyDBProxyRequest(POSTModifyDBProxyActionEnum.MODIFY_DB_PROXY, POSTModifyDBProxyVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "pariatur".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "aperiam";
                xAmzDate = "odio";
                xAmzSecurityToken = "minima";
                xAmzSignature = "in";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTModifyDBProxyResponse res = sdk.sdk.postModifyDBProxy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBProxyEndpointActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBProxyEndpointRequest;
import org.openapis.openapi.models.operations.POSTModifyDBProxyEndpointResponse;
import org.openapis.openapi.models.operations.POSTModifyDBProxyEndpointVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBProxyEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBProxyEndpointRequest req = new POSTModifyDBProxyEndpointRequest(POSTModifyDBProxyEndpointActionEnum.MODIFY_DB_PROXY_ENDPOINT, POSTModifyDBProxyEndpointVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ducimus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "similique";
            }};            

            POSTModifyDBProxyEndpointResponse res = sdk.sdk.postModifyDBProxyEndpoint(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBProxyTargetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBProxyTargetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBProxyTargetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBProxyTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.ConnectionPoolConfiguration;
import org.openapis.openapi.models.shared.ModifyDBProxyTargetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBProxyTargetGroupRequest req = new POSTModifyDBProxyTargetGroupRequest(POSTModifyDBProxyTargetGroupActionEnum.MODIFY_DB_PROXY_TARGET_GROUP, POSTModifyDBProxyTargetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ex".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "officiis";
                xAmzDate = "placeat";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "quam";
            }};            

            POSTModifyDBProxyTargetGroupResponse res = sdk.sdk.postModifyDBProxyTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSnapshotRequest req = new POSTModifyDBSnapshotRequest(POSTModifyDBSnapshotActionEnum.MODIFY_DB_SNAPSHOT, POSTModifyDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "modi".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "sint";
                xAmzCredential = "vero";
                xAmzDate = "sequi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTModifyDBSnapshotResponse res = sdk.sdk.postModifyDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotAttributeActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotAttributeRequest;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotAttributeResponse;
import org.openapis.openapi.models.operations.POSTModifyDBSnapshotAttributeVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBSnapshotAttributeMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSnapshotAttributeRequest req = new POSTModifyDBSnapshotAttributeRequest(POSTModifyDBSnapshotAttributeActionEnum.MODIFY_DB_SNAPSHOT_ATTRIBUTE, POSTModifyDBSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "nam";
                xAmzDate = "dicta";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTModifyDBSnapshotAttributeResponse res = sdk.sdk.postModifyDBSnapshotAttribute(req);

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

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ducimus".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "quasi";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "excepturi";
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

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

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
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "doloribus";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "hic";
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

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyGlobalClusterRequest req = new POSTModifyGlobalClusterRequest(POSTModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, POSTModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "odio";
                xAmzDate = "eaque";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quos";
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

## postModifyOptionGroup

Modifies an existing option group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyOptionGroupMessage;
import org.openapis.openapi.models.shared.OptionConfigurationList;
import org.openapis.openapi.models.shared.OptionSettingsList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyOptionGroupRequest req = new POSTModifyOptionGroupRequest(POSTModifyOptionGroupActionEnum.MODIFY_OPTION_GROUP, POSTModifyOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "assumenda".getBytes();
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "libero";
                xAmzCredential = "velit";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            POSTModifyOptionGroupResponse res = sdk.sdk.postModifyOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaActionEnum;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaRequest;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaResponse;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.PromoteReadReplicaMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaRequest req = new POSTPromoteReadReplicaRequest(POSTPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, POSTPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "doloremque";
                xAmzDate = "quis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTPromoteReadReplicaResponse res = sdk.sdk.postPromoteReadReplica(req);

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

Promotes a read replica DB cluster to a standalone DB cluster.

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
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaDBClusterRequest req = new POSTPromoteReadReplicaDBClusterRequest(POSTPromoteReadReplicaDBClusterActionEnum.PROMOTE_READ_REPLICA_DB_CLUSTER, POSTPromoteReadReplicaDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "non";
                xAmzDate = "magnam";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "asperiores";
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

## postPurchaseReservedDBInstancesOffering

Purchases a reserved DB instance offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingActionEnum;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingRequest;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingResponse;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingVersionEnum;
import org.openapis.openapi.models.shared.PurchaseReservedDBInstancesOfferingMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedDBInstancesOfferingRequest req = new POSTPurchaseReservedDBInstancesOfferingRequest(POSTPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, POSTPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "odit";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "ab";
            }};            

            POSTPurchaseReservedDBInstancesOfferingResponse res = sdk.sdk.postPurchaseReservedDBInstancesOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebootDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTRebootDBClusterRequest;
import org.openapis.openapi.models.operations.POSTRebootDBClusterResponse;
import org.openapis.openapi.models.operations.POSTRebootDBClusterVersionEnum;
import org.openapis.openapi.models.shared.RebootDBClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBClusterRequest req = new POSTRebootDBClusterRequest(POSTRebootDBClusterActionEnum.REBOOT_DB_CLUSTER, POSTRebootDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "nisi";
            }};            

            POSTRebootDBClusterResponse res = sdk.sdk.postRebootDBCluster(req);

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

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

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
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nisi".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "minus";
                xAmzCredential = "facere";
                xAmzDate = "facilis";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "voluptatibus";
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

## postRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRegisterDBProxyTargetsActionEnum;
import org.openapis.openapi.models.operations.POSTRegisterDBProxyTargetsRequest;
import org.openapis.openapi.models.operations.POSTRegisterDBProxyTargetsResponse;
import org.openapis.openapi.models.operations.POSTRegisterDBProxyTargetsVersionEnum;
import org.openapis.openapi.models.shared.RegisterDBProxyTargetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRegisterDBProxyTargetsRequest req = new POSTRegisterDBProxyTargetsRequest(POSTRegisterDBProxyTargetsActionEnum.REGISTER_DB_PROXY_TARGETS, POSTRegisterDBProxyTargetsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "labore";
                xAmzCredential = "rerum";
                xAmzDate = "eos";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "neque";
            }};            

            POSTRegisterDBProxyTargetsResponse res = sdk.sdk.postRegisterDBProxyTargets(req);

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

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveFromGlobalClusterRequest req = new POSTRemoveFromGlobalClusterRequest(POSTRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, POSTRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "est".getBytes();
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "fugiat";
                xAmzDate = "unde";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolor";
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

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveRoleFromDBClusterRequest req = new POSTRemoveRoleFromDBClusterRequest(POSTRemoveRoleFromDBClusterActionEnum.REMOVE_ROLE_FROM_DB_CLUSTER, POSTRemoveRoleFromDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "dignissimos";
                xAmzDate = "esse";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "aspernatur";
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

## postRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.RemoveRoleFromDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveRoleFromDBInstanceRequest req = new POSTRemoveRoleFromDBInstanceRequest(POSTRemoveRoleFromDBInstanceActionEnum.REMOVE_ROLE_FROM_DB_INSTANCE, POSTRemoveRoleFromDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "libero";
                xAmzDate = "illo";
                xAmzSecurityToken = "ab";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTRemoveRoleFromDBInstanceResponse res = sdk.sdk.postRemoveRoleFromDBInstance(req);

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

Removes a source identifier from an existing RDS event notification subscription.

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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "tempore".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "eos";
                xAmzCredential = "reiciendis";
                xAmzDate = "earum";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "nemo";
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

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "deleniti";
                xAmzDate = "illo";
                xAmzSecurityToken = "labore";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "aliquam";
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

<p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBClusterParameterGroupRequest req = new POSTResetDBClusterParameterGroupRequest(POSTResetDBClusterParameterGroupActionEnum.RESET_DB_CLUSTER_PARAMETER_GROUP, POSTResetDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "consequatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "expedita";
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
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBParameterGroupRequest req = new POSTResetDBParameterGroupRequest(POSTResetDBParameterGroupActionEnum.RESET_DB_PARAMETER_GROUP, POSTResetDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dignissimos";
                xAmzDate = "corporis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "repellendus";
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

## postRestoreDBClusterFromS3

<p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromS3ActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromS3Request;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromS3Response;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromS3VersionEnum;
import org.openapis.openapi.models.shared.RestoreDBClusterFromS3Message;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterFromS3Request req = new POSTRestoreDBClusterFromS3Request(POSTRestoreDBClusterFromS3ActionEnum.RESTORE_DB_CLUSTER_FROM_S3, POSTRestoreDBClusterFromS3VersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "commodi";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "quae";
            }};            

            POSTRestoreDBClusterFromS3Response res = sdk.sdk.postRestoreDBClusterFromS3(req);

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

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBClusterFromSnapshotMessage;
import org.openapis.openapi.models.shared.ScalingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterFromSnapshotRequest req = new POSTRestoreDBClusterFromSnapshotRequest(POSTRestoreDBClusterFromSnapshotActionEnum.RESTORE_DB_CLUSTER_FROM_SNAPSHOT, POSTRestoreDBClusterFromSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "cum";
                xAmzDate = "amet";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laudantium";
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

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
import org.openapis.openapi.models.shared.ScalingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerlessV2ScalingConfiguration;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterToPointInTimeRequest req = new POSTRestoreDBClusterToPointInTimeRequest(POSTRestoreDBClusterToPointInTimeActionEnum.RESTORE_DB_CLUSTER_TO_POINT_IN_TIME, POSTRestoreDBClusterToPointInTimeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "amet";
                xAmzCredential = "provident";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "repudiandae";
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

## postRestoreDBInstanceFromDBSnapshot

<p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.RestoreDBInstanceFromDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceFromDBSnapshotRequest req = new POSTRestoreDBInstanceFromDBSnapshotRequest(POSTRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, POSTRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "facilis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTRestoreDBInstanceFromDBSnapshotResponse res = sdk.sdk.postRestoreDBInstanceFromDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBInstanceFromS3

<p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromS3ActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromS3Request;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromS3Response;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromS3VersionEnum;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.RestoreDBInstanceFromS3Message;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceFromS3Request req = new POSTRestoreDBInstanceFromS3Request(POSTRestoreDBInstanceFromS3ActionEnum.RESTORE_DB_INSTANCE_FROM_S3, POSTRestoreDBInstanceFromS3VersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "velit";
                xAmzDate = "dolor";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolor";
            }};            

            POSTRestoreDBInstanceFromS3Response res = sdk.sdk.postRestoreDBInstanceFromS3(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBInstanceToPointInTime

<p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeVersionEnum;
import org.openapis.openapi.models.shared.ProcessorFeatureList;
import org.openapis.openapi.models.shared.RestoreDBInstanceToPointInTimeMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceToPointInTimeRequest req = new POSTRestoreDBInstanceToPointInTimeRequest(POSTRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, POSTRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "at";
                xAmzCredential = "labore";
                xAmzDate = "minus";
                xAmzSecurityToken = "esse";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTRestoreDBInstanceToPointInTimeResponse res = sdk.sdk.postRestoreDBInstanceToPointInTime(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.RevokeDBSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeDBSecurityGroupIngressRequest req = new POSTRevokeDBSecurityGroupIngressRequest(POSTRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, POSTRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "repellat";
                xAmzDate = "velit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTRevokeDBSecurityGroupIngressResponse res = sdk.sdk.postRevokeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartActivityStreamActionEnum;
import org.openapis.openapi.models.operations.POSTStartActivityStreamRequest;
import org.openapis.openapi.models.operations.POSTStartActivityStreamResponse;
import org.openapis.openapi.models.operations.POSTStartActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.ActivityStreamModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartActivityStreamRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartActivityStreamRequest req = new POSTStartActivityStreamRequest(POSTStartActivityStreamActionEnum.START_ACTIVITY_STREAM, POSTStartActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "natus";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "officia";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tenetur";
            }};            

            POSTStartActivityStreamResponse res = sdk.sdk.postStartActivityStream(req);

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

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartDBClusterRequest req = new POSTStartDBClusterRequest(POSTStartDBClusterActionEnum.START_DB_CLUSTER, POSTStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quo".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "illum";
                xAmzCredential = "laborum";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "vero";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "consectetur";
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

## postStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTStartDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTStartDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTStartDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDBInstanceMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartDBInstanceRequest req = new POSTStartDBInstanceRequest(POSTStartDBInstanceActionEnum.START_DB_INSTANCE, POSTStartDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nihil";
                xAmzDate = "non";
                xAmzSecurityToken = "ab";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "hic";
            }};            

            POSTStartDBInstanceResponse res = sdk.sdk.postStartDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartDBInstanceAutomatedBackupsReplicationActionEnum;
import org.openapis.openapi.models.operations.POSTStartDBInstanceAutomatedBackupsReplicationRequest;
import org.openapis.openapi.models.operations.POSTStartDBInstanceAutomatedBackupsReplicationResponse;
import org.openapis.openapi.models.operations.POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDBInstanceAutomatedBackupsReplicationMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartDBInstanceAutomatedBackupsReplicationRequest req = new POSTStartDBInstanceAutomatedBackupsReplicationRequest(POSTStartDBInstanceAutomatedBackupsReplicationActionEnum.START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION, POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "in";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "labore";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTStartDBInstanceAutomatedBackupsReplicationResponse res = sdk.sdk.postStartDBInstanceAutomatedBackupsReplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartExportTaskActionEnum;
import org.openapis.openapi.models.operations.POSTStartExportTaskRequest;
import org.openapis.openapi.models.operations.POSTStartExportTaskResponse;
import org.openapis.openapi.models.operations.POSTStartExportTaskVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartExportTaskMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartExportTaskRequest req = new POSTStartExportTaskRequest(POSTStartExportTaskActionEnum.START_EXPORT_TASK, POSTStartExportTaskVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "in".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "rem";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "odit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "enim";
            }};            

            POSTStartExportTaskResponse res = sdk.sdk.postStartExportTask(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopActivityStreamActionEnum;
import org.openapis.openapi.models.operations.POSTStopActivityStreamRequest;
import org.openapis.openapi.models.operations.POSTStopActivityStreamResponse;
import org.openapis.openapi.models.operations.POSTStopActivityStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopActivityStreamRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopActivityStreamRequest req = new POSTStopActivityStreamRequest(POSTStopActivityStreamActionEnum.STOP_ACTIVITY_STREAM, POSTStopActivityStreamVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "similique".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "libero";
                xAmzCredential = "magnam";
                xAmzDate = "sit";
                xAmzSecurityToken = "modi";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nesciunt";
            }};            

            POSTStopActivityStreamResponse res = sdk.sdk.postStopActivityStream(req);

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

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopDBClusterRequest req = new POSTStopDBClusterRequest(POSTStopDBClusterActionEnum.STOP_DB_CLUSTER, POSTStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "molestiae";
                xAmzDate = "veniam";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "modi";
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

## postStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTStopDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTStopDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTStopDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDBInstanceMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopDBInstanceRequest req = new POSTStopDBInstanceRequest(POSTStopDBInstanceActionEnum.STOP_DB_INSTANCE, POSTStopDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "odio";
                xAmzCredential = "commodi";
                xAmzDate = "numquam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTStopDBInstanceResponse res = sdk.sdk.postStopDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopDBInstanceAutomatedBackupsReplicationActionEnum;
import org.openapis.openapi.models.operations.POSTStopDBInstanceAutomatedBackupsReplicationRequest;
import org.openapis.openapi.models.operations.POSTStopDBInstanceAutomatedBackupsReplicationResponse;
import org.openapis.openapi.models.operations.POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDBInstanceAutomatedBackupsReplicationMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopDBInstanceAutomatedBackupsReplicationRequest req = new POSTStopDBInstanceAutomatedBackupsReplicationRequest(POSTStopDBInstanceAutomatedBackupsReplicationActionEnum.STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION, POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nesciunt".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "minus";
                xAmzDate = "sunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "quas";
            }};            

            POSTStopDBInstanceAutomatedBackupsReplicationResponse res = sdk.sdk.postStopDBInstanceAutomatedBackupsReplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSwitchoverBlueGreenDeploymentActionEnum;
import org.openapis.openapi.models.operations.POSTSwitchoverBlueGreenDeploymentRequest;
import org.openapis.openapi.models.operations.POSTSwitchoverBlueGreenDeploymentResponse;
import org.openapis.openapi.models.operations.POSTSwitchoverBlueGreenDeploymentVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SwitchoverBlueGreenDeploymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSwitchoverBlueGreenDeploymentRequest req = new POSTSwitchoverBlueGreenDeploymentRequest(POSTSwitchoverBlueGreenDeploymentActionEnum.SWITCHOVER_BLUE_GREEN_DEPLOYMENT, POSTSwitchoverBlueGreenDeploymentVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "autem";
                xAmzCredential = "fuga";
                xAmzDate = "alias";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quos";
            }};            

            POSTSwitchoverBlueGreenDeploymentResponse res = sdk.sdk.postSwitchoverBlueGreenDeployment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSwitchoverReadReplicaActionEnum;
import org.openapis.openapi.models.operations.POSTSwitchoverReadReplicaRequest;
import org.openapis.openapi.models.operations.POSTSwitchoverReadReplicaResponse;
import org.openapis.openapi.models.operations.POSTSwitchoverReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SwitchoverReadReplicaMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSwitchoverReadReplicaRequest req = new POSTSwitchoverReadReplicaRequest(POSTSwitchoverReadReplicaActionEnum.SWITCHOVER_READ_REPLICA, POSTSwitchoverReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "repellendus".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "quae";
                xAmzCredential = "eaque";
                xAmzDate = "saepe";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTSwitchoverReadReplicaResponse res = sdk.sdk.postSwitchoverReadReplica(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
