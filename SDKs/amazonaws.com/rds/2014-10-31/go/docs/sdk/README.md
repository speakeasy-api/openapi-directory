# SDK

## Overview

<fullname>Amazon Relational Database Service</fullname> <p/> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [GETAddRoleToDBCluster](#getaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with a DB cluster.
* [GETAddRoleToDBInstance](#getaddroletodbinstance) - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
* [GETAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription) - Adds a source identifier to an existing RDS event notification subscription.
* [GETApplyPendingMaintenanceAction](#getapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [GETAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress) - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [GETBacktrackDBCluster](#getbacktrackdbcluster) - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
* [GETCancelExportTask](#getcancelexporttask) - Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
* [GETCreateGlobalCluster](#getcreateglobalcluster) - <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [GETDeleteBlueGreenDeployment](#getdeletebluegreendeployment) - <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [GETDeleteCustomDBEngineVersion](#getdeletecustomdbengineversion) - <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETDeleteDBCluster](#getdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETDeleteDBClusterEndpoint](#getdeletedbclusterendpoint) - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETDeleteDBClusterParameterGroup](#getdeletedbclusterparametergroup) - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETDeleteDBClusterSnapshot](#getdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETDeleteDBInstance](#getdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
* [GETDeleteDBInstanceAutomatedBackup](#getdeletedbinstanceautomatedbackup) - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
* [GETDeleteDBParameterGroup](#getdeletedbparametergroup) - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
* [GETDeleteDBProxy](#getdeletedbproxy) - Deletes an existing DB proxy.
* [GETDeleteDBProxyEndpoint](#getdeletedbproxyendpoint) - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
* [GETDeleteDBSecurityGroup](#getdeletedbsecuritygroup) - <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [GETDeleteDBSnapshot](#getdeletedbsnapshot) - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [GETDeleteDBSubnetGroup](#getdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [GETDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an RDS event notification subscription.
* [GETDeleteGlobalCluster](#getdeleteglobalcluster) - <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETDeleteOptionGroup](#getdeleteoptiongroup) - Deletes an existing option group.
* [GETDeregisterDBProxyTargets](#getderegisterdbproxytargets) - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
* [GETDescribeAccountAttributes](#getdescribeaccountattributes) - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
* [GETDescribeDBClusterSnapshotAttributes](#getdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
* [GETDescribeDBSnapshotAttributes](#getdescribedbsnapshotattributes) - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
* [GETDescribeValidDBInstanceModifications](#getdescribevaliddbinstancemodifications) - <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
* [GETDownloadDBLogFilePortion](#getdownloaddblogfileportion) - <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
* [GETFailoverDBCluster](#getfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETFailoverGlobalCluster](#getfailoverglobalcluster) - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
* [GETModifyActivityStream](#getmodifyactivitystream) - <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
* [GETModifyCertificates](#getmodifycertificates) - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [GETModifyCurrentDBClusterCapacity](#getmodifycurrentdbclustercapacity) - <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
* [GETModifyCustomDBEngineVersion](#getmodifycustomdbengineversion) - <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETModifyDBCluster](#getmodifydbcluster) - <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETModifyDBClusterEndpoint](#getmodifydbclusterendpoint) - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETModifyDBClusterSnapshotAttribute](#getmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [GETModifyDBProxyEndpoint](#getmodifydbproxyendpoint) - Changes the settings for an existing DB proxy endpoint.
* [GETModifyDBProxyTargetGroup](#getmodifydbproxytargetgroup) - Modifies the properties of a <code>DBProxyTargetGroup</code>.
* [GETModifyDBSnapshot](#getmodifydbsnapshot) - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
* [GETModifyDBSnapshotAttribute](#getmodifydbsnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [GETModifyDBSubnetGroup](#getmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [GETModifyEventSubscription](#getmodifyeventsubscription) - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
* [GETModifyGlobalCluster](#getmodifyglobalcluster) - <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETPromoteReadReplica](#getpromotereadreplica) - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
* [GETPromoteReadReplicaDBCluster](#getpromotereadreplicadbcluster) - Promotes a read replica DB cluster to a standalone DB cluster.
* [GETRebootDBCluster](#getrebootdbcluster) - <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [GETRebootDBInstance](#getrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
* [GETRegisterDBProxyTargets](#getregisterdbproxytargets) - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
* [GETRemoveFromGlobalCluster](#getremovefromglobalcluster) - <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETRemoveRoleFromDBCluster](#getremoverolefromdbcluster) - <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [GETRemoveRoleFromDBInstance](#getremoverolefromdbinstance) - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
* [GETRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription) - Removes a source identifier from an existing RDS event notification subscription.
* [GETRemoveTagsFromResource](#getremovetagsfromresource) - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
* [GETRevokeDBSecurityGroupIngress](#getrevokedbsecuritygroupingress) - <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [GETStartActivityStream](#getstartactivitystream) - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
* [GETStartDBCluster](#getstartdbcluster) - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETStartDBInstance](#getstartdbinstance) - <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
* [GETStartDBInstanceAutomatedBackupsReplication](#getstartdbinstanceautomatedbackupsreplication) - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [GETStartExportTask](#getstartexporttask) - <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [GETStopActivityStream](#getstopactivitystream) - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
* [GETStopDBCluster](#getstopdbcluster) - <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [GETStopDBInstance](#getstopdbinstance) - <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
* [GETStopDBInstanceAutomatedBackupsReplication](#getstopdbinstanceautomatedbackupsreplication) - <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [GETSwitchoverBlueGreenDeployment](#getswitchoverbluegreendeployment) - <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [GETSwitchoverReadReplica](#getswitchoverreadreplica) - Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.
* [POSTAddRoleToDBCluster](#postaddroletodbcluster) - Associates an Identity and Access Management (IAM) role with a DB cluster.
* [POSTAddRoleToDBInstance](#postaddroletodbinstance) - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
* [POSTAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription) - Adds a source identifier to an existing RDS event notification subscription.
* [POSTAddTagsToResource](#postaddtagstoresource) - <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
* [POSTApplyPendingMaintenanceAction](#postapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a DB instance).
* [POSTAuthorizeDBSecurityGroupIngress](#postauthorizedbsecuritygroupingress) - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [POSTBacktrackDBCluster](#postbacktrackdbcluster) - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
* [POSTCancelExportTask](#postcancelexporttask) - Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
* [POSTCopyDBClusterParameterGroup](#postcopydbclusterparametergroup) - Copies the specified DB cluster parameter group.
* [POSTCopyDBClusterSnapshot](#postcopydbclustersnapshot) - <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTCopyDBParameterGroup](#postcopydbparametergroup) - Copies the specified DB parameter group.
* [POSTCopyDBSnapshot](#postcopydbsnapshot) - <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTCopyOptionGroup](#postcopyoptiongroup) - Copies the specified option group.
* [POSTCreateBlueGreenDeployment](#postcreatebluegreendeployment) - <p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTCreateCustomDBEngineVersion](#postcreatecustomdbengineversion) - Creates a custom DB engine version (CEV).
* [POSTCreateDBCluster](#postcreatedbcluster) - <p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTCreateDBClusterEndpoint](#postcreatedbclusterendpoint) - <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [POSTCreateDBClusterParameterGroup](#postcreatedbclusterparametergroup) - <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTCreateDBClusterSnapshot](#postcreatedbclustersnapshot) - <p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTCreateDBInstance](#postcreatedbinstance) - <p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTCreateDBInstanceReadReplica](#postcreatedbinstancereadreplica) - <p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>
* [POSTCreateDBParameterGroup](#postcreatedbparametergroup) - <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [POSTCreateDBProxy](#postcreatedbproxy) - Creates a new DB proxy.
* [POSTCreateDBProxyEndpoint](#postcreatedbproxyendpoint) - Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
* [POSTCreateDBSecurityGroup](#postcreatedbsecuritygroup) - <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [POSTCreateDBSnapshot](#postcreatedbsnapshot) - Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.
* [POSTCreateDBSubnetGroup](#postcreatedbsubnetgroup) - Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [POSTCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTCreateGlobalCluster](#postcreateglobalcluster) - <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
* [POSTCreateOptionGroup](#postcreateoptiongroup) - <p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>
* [POSTDeleteBlueGreenDeployment](#postdeletebluegreendeployment) - <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTDeleteCustomDBEngineVersion](#postdeletecustomdbengineversion) - <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDeleteDBCluster](#postdeletedbcluster) - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDeleteDBClusterEndpoint](#postdeletedbclusterendpoint) - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTDeleteDBClusterParameterGroup](#postdeletedbclusterparametergroup) - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDeleteDBClusterSnapshot](#postdeletedbclustersnapshot) - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDeleteDBInstance](#postdeletedbinstance) - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
* [POSTDeleteDBInstanceAutomatedBackup](#postdeletedbinstanceautomatedbackup) - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
* [POSTDeleteDBParameterGroup](#postdeletedbparametergroup) - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
* [POSTDeleteDBProxy](#postdeletedbproxy) - Deletes an existing DB proxy.
* [POSTDeleteDBProxyEndpoint](#postdeletedbproxyendpoint) - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
* [POSTDeleteDBSecurityGroup](#postdeletedbsecuritygroup) - <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [POSTDeleteDBSnapshot](#postdeletedbsnapshot) - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [POSTDeleteDBSubnetGroup](#postdeletedbsubnetgroup) - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [POSTDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an RDS event notification subscription.
* [POSTDeleteGlobalCluster](#postdeleteglobalcluster) - <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTDeleteOptionGroup](#postdeleteoptiongroup) - Deletes an existing option group.
* [POSTDeregisterDBProxyTargets](#postderegisterdbproxytargets) - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
* [POSTDescribeAccountAttributes](#postdescribeaccountattributes) - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
* [POSTDescribeBlueGreenDeployments](#postdescribebluegreendeployments) - <p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTDescribeCertificates](#postdescribecertificates) - <p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTDescribeDBClusterBacktracks](#postdescribedbclusterbacktracks) - <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
* [POSTDescribeDBClusterEndpoints](#postdescribedbclusterendpoints) - <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTDescribeDBClusterParameterGroups](#postdescribedbclusterparametergroups) - <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDescribeDBClusterParameters](#postdescribedbclusterparameters) - <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDescribeDBClusterSnapshotAttributes](#postdescribedbclustersnapshotattributes) - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
* [POSTDescribeDBClusterSnapshots](#postdescribedbclustersnapshots) - <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTDescribeDBClusters](#postdescribedbclusters) - <p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
* [POSTDescribeDBEngineVersions](#postdescribedbengineversions) - Returns a list of the available DB engines.
* [POSTDescribeDBInstanceAutomatedBackups](#postdescribedbinstanceautomatedbackups) - <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
* [POSTDescribeDBInstances](#postdescribedbinstances) - <p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
* [POSTDescribeDBLogFiles](#postdescribedblogfiles) - <p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>
* [POSTDescribeDBParameterGroups](#postdescribedbparametergroups) - Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
* [POSTDescribeDBParameters](#postdescribedbparameters) - Returns the detailed parameter list for a particular DB parameter group.
* [POSTDescribeDBProxies](#postdescribedbproxies) - Returns information about DB proxies.
* [POSTDescribeDBProxyEndpoints](#postdescribedbproxyendpoints) - Returns information about DB proxy endpoints.
* [POSTDescribeDBProxyTargetGroups](#postdescribedbproxytargetgroups) - Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.
* [POSTDescribeDBProxyTargets](#postdescribedbproxytargets) - Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.
* [POSTDescribeDBSecurityGroups](#postdescribedbsecuritygroups) - <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [POSTDescribeDBSnapshotAttributes](#postdescribedbsnapshotattributes) - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
* [POSTDescribeDBSnapshots](#postdescribedbsnapshots) - Returns information about DB snapshots. This API action supports pagination.
* [POSTDescribeDBSubnetGroups](#postdescribedbsubnetgroups) - <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
* [POSTDescribeEngineDefaultClusterParameters](#postdescribeenginedefaultclusterparameters) - <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified database engine.
* [POSTDescribeEventCategories](#postdescribeeventcategories) - Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.
* [POSTDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* [POSTDescribeEvents](#postdescribeevents) - <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>
* [POSTDescribeExportTasks](#postdescribeexporttasks) - Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.
* [POSTDescribeGlobalClusters](#postdescribeglobalclusters) - <p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTDescribeOptionGroupOptions](#postdescribeoptiongroupoptions) - Describes all available options.
* [POSTDescribeOptionGroups](#postdescribeoptiongroups) - Describes the available option groups.
* [POSTDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions) - Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.
* [POSTDescribePendingMaintenanceActions](#postdescribependingmaintenanceactions) - Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
* [POSTDescribeReservedDBInstances](#postdescribereserveddbinstances) - Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
* [POSTDescribeReservedDBInstancesOfferings](#postdescribereserveddbinstancesofferings) - Lists available reserved DB instance offerings.
* [POSTDescribeSourceRegions](#postdescribesourceregions) - <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
* [POSTDescribeValidDBInstanceModifications](#postdescribevaliddbinstancemodifications) - <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
* [POSTDownloadDBLogFilePortion](#postdownloaddblogfileportion) - <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
* [POSTFailoverDBCluster](#postfailoverdbcluster) - <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTFailoverGlobalCluster](#postfailoverglobalcluster) - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
* [POSTListTagsForResource](#postlisttagsforresource) - <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTModifyActivityStream](#postmodifyactivitystream) - <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
* [POSTModifyCertificates](#postmodifycertificates) - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTModifyCurrentDBClusterCapacity](#postmodifycurrentdbclustercapacity) - <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
* [POSTModifyCustomDBEngineVersion](#postmodifycustomdbengineversion) - <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTModifyDBCluster](#postmodifydbcluster) - <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTModifyDBClusterEndpoint](#postmodifydbclusterendpoint) - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTModifyDBClusterParameterGroup](#postmodifydbclusterparametergroup) - <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTModifyDBClusterSnapshotAttribute](#postmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [POSTModifyDBInstance](#postmodifydbinstance) - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.
* [POSTModifyDBParameterGroup](#postmodifydbparametergroup) - <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
* [POSTModifyDBProxy](#postmodifydbproxy) - Changes the settings for an existing DB proxy.
* [POSTModifyDBProxyEndpoint](#postmodifydbproxyendpoint) - Changes the settings for an existing DB proxy endpoint.
* [POSTModifyDBProxyTargetGroup](#postmodifydbproxytargetgroup) - Modifies the properties of a <code>DBProxyTargetGroup</code>.
* [POSTModifyDBSnapshot](#postmodifydbsnapshot) - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
* [POSTModifyDBSnapshotAttribute](#postmodifydbsnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
* [POSTModifyDBSubnetGroup](#postmodifydbsubnetgroup) - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
* [POSTModifyEventSubscription](#postmodifyeventsubscription) - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
* [POSTModifyGlobalCluster](#postmodifyglobalcluster) - <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTModifyOptionGroup](#postmodifyoptiongroup) - Modifies an existing option group.
* [POSTPromoteReadReplica](#postpromotereadreplica) - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
* [POSTPromoteReadReplicaDBCluster](#postpromotereadreplicadbcluster) - Promotes a read replica DB cluster to a standalone DB cluster.
* [POSTPurchaseReservedDBInstancesOffering](#postpurchasereserveddbinstancesoffering) - Purchases a reserved DB instance offering.
* [POSTRebootDBCluster](#postrebootdbcluster) - <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTRebootDBInstance](#postrebootdbinstance) - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
* [POSTRegisterDBProxyTargets](#postregisterdbproxytargets) - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
* [POSTRemoveFromGlobalCluster](#postremovefromglobalcluster) - <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTRemoveRoleFromDBCluster](#postremoverolefromdbcluster) - <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTRemoveRoleFromDBInstance](#postremoverolefromdbinstance) - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
* [POSTRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription) - Removes a source identifier from an existing RDS event notification subscription.
* [POSTRemoveTagsFromResource](#postremovetagsfromresource) - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTResetDBClusterParameterGroup](#postresetdbclusterparametergroup) - <p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTResetDBParameterGroup](#postresetdbparametergroup) - Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
* [POSTRestoreDBClusterFromS3](#postrestoredbclusterfroms3) - <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>
* [POSTRestoreDBClusterFromSnapshot](#postrestoredbclusterfromsnapshot) - <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTRestoreDBClusterToPointInTime](#postrestoredbclustertopointintime) - <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTRestoreDBInstanceFromDBSnapshot](#postrestoredbinstancefromdbsnapshot) - <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
* [POSTRestoreDBInstanceFromS3](#postrestoredbinstancefroms3) - <p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>
* [POSTRestoreDBInstanceToPointInTime](#postrestoredbinstancetopointintime) - <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
* [POSTRevokeDBSecurityGroupIngress](#postrevokedbsecuritygroupingress) - <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
* [POSTStartActivityStream](#poststartactivitystream) - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
* [POSTStartDBCluster](#poststartdbcluster) - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTStartDBInstance](#poststartdbinstance) - <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
* [POSTStartDBInstanceAutomatedBackupsReplication](#poststartdbinstanceautomatedbackupsreplication) - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTStartExportTask](#poststartexporttask) - <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTStopActivityStream](#poststopactivitystream) - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
* [POSTStopDBCluster](#poststopdbcluster) - <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
* [POSTStopDBInstance](#poststopdbinstance) - <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
* [POSTStopDBInstanceAutomatedBackupsReplication](#poststopdbinstanceautomatedbackupsreplication) - <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
* [POSTSwitchoverBlueGreenDeployment](#postswitchoverbluegreendeployment) - <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
* [POSTSwitchoverReadReplica](#postswitchoverreadreplica) - Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

## GETAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with a DB cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETAddRoleToDBCluster(ctx, operations.GETAddRoleToDBClusterRequest{
        Action: operations.GETAddRoleToDBClusterActionEnumAddRoleToDbCluster,
        DBClusterIdentifier: "deserunt",
        FeatureName: sdk.String("suscipit"),
        RoleArn: "iure",
        Version: operations.GETAddRoleToDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETAddRoleToDBInstance(ctx, operations.GETAddRoleToDBInstanceRequest{
        Action: operations.GETAddRoleToDBInstanceActionEnumAddRoleToDbInstance,
        DBInstanceIdentifier: "minus",
        FeatureName: "placeat",
        RoleArn: "voluptatum",
        Version: operations.GETAddRoleToDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAddSourceIdentifierToSubscription

Adds a source identifier to an existing RDS event notification subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETAddSourceIdentifierToSubscription(ctx, operations.GETAddSourceIdentifierToSubscriptionRequest{
        Action: operations.GETAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription,
        SourceIdentifier: "veritatis",
        SubscriptionName: "deserunt",
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETApplyPendingMaintenanceAction(ctx, operations.GETApplyPendingMaintenanceActionRequest{
        Action: operations.GETApplyPendingMaintenanceActionActionEnumApplyPendingMaintenanceAction,
        ApplyAction: "at",
        OptInType: "maiores",
        ResourceIdentifier: "molestiae",
        Version: operations.GETApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETAuthorizeDBSecurityGroupIngress(ctx, operations.GETAuthorizeDBSecurityGroupIngressRequest{
        Action: operations.GETAuthorizeDBSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress,
        Cidrip: sdk.String("nam"),
        DBSecurityGroupName: "officia",
        Ec2SecurityGroupID: sdk.String("occaecati"),
        Ec2SecurityGroupName: sdk.String("fugit"),
        Ec2SecurityGroupOwnerID: sdk.String("deleniti"),
        Version: operations.GETAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETBacktrackDBCluster(ctx, operations.GETBacktrackDBClusterRequest{
        Action: operations.GETBacktrackDBClusterActionEnumBacktrackDbCluster,
        BacktrackTo: types.MustTimeFromString("2022-03-24T09:42:46.236Z"),
        DBClusterIdentifier: "cum",
        Force: sdk.Bool(false),
        UseEarliestTimeOnPointInTimeUnavailable: sdk.Bool(false),
        Version: operations.GETBacktrackDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETCancelExportTask(ctx, operations.GETCancelExportTaskRequest{
        Action: operations.GETCancelExportTaskActionEnumCancelExportTask,
        ExportTaskIdentifier: "sed",
        Version: operations.GETCancelExportTaskVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateGlobalCluster

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETCreateGlobalCluster(ctx, operations.GETCreateGlobalClusterRequest{
        Action: operations.GETCreateGlobalClusterActionEnumCreateGlobalCluster,
        DatabaseName: sdk.String("in"),
        DeletionProtection: sdk.Bool(false),
        Engine: sdk.String("corporis"),
        EngineVersion: sdk.String("iste"),
        GlobalClusterIdentifier: sdk.String("iure"),
        SourceDBClusterIdentifier: sdk.String("saepe"),
        StorageEncrypted: sdk.Bool(false),
        Version: operations.GETCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteBlueGreenDeployment(ctx, operations.GETDeleteBlueGreenDeploymentRequest{
        Action: operations.GETDeleteBlueGreenDeploymentActionEnumDeleteBlueGreenDeployment,
        BlueGreenDeploymentIdentifier: "dolores",
        DeleteTarget: sdk.Bool(false),
        Version: operations.GETDeleteBlueGreenDeploymentVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteCustomDBEngineVersion(ctx, operations.GETDeleteCustomDBEngineVersionRequest{
        Action: operations.GETDeleteCustomDBEngineVersionActionEnumDeleteCustomDbEngineVersion,
        Engine: "minima",
        EngineVersion: "excepturi",
        Version: operations.GETDeleteCustomDBEngineVersionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBCluster(ctx, operations.GETDeleteDBClusterRequest{
        Action: operations.GETDeleteDBClusterActionEnumDeleteDbCluster,
        DBClusterIdentifier: "dolorem",
        FinalDBSnapshotIdentifier: sdk.String("culpa"),
        SkipFinalSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBClusterEndpoint

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBClusterEndpoint(ctx, operations.GETDeleteDBClusterEndpointRequest{
        Action: operations.GETDeleteDBClusterEndpointActionEnumDeleteDbClusterEndpoint,
        DBClusterEndpointIdentifier: "molestiae",
        Version: operations.GETDeleteDBClusterEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBClusterParameterGroup

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBClusterParameterGroup(ctx, operations.GETDeleteDBClusterParameterGroupRequest{
        Action: operations.GETDeleteDBClusterParameterGroupActionEnumDeleteDbClusterParameterGroup,
        DBClusterParameterGroupName: "enim",
        Version: operations.GETDeleteDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBClusterSnapshot(ctx, operations.GETDeleteDBClusterSnapshotRequest{
        Action: operations.GETDeleteDBClusterSnapshotActionEnumDeleteDbClusterSnapshot,
        DBClusterSnapshotIdentifier: "aut",
        Version: operations.GETDeleteDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBInstance(ctx, operations.GETDeleteDBInstanceRequest{
        Action: operations.GETDeleteDBInstanceActionEnumDeleteDbInstance,
        DBInstanceIdentifier: "vero",
        DeleteAutomatedBackups: sdk.Bool(false),
        FinalDBSnapshotIdentifier: sdk.String("nihil"),
        SkipFinalSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBInstanceAutomatedBackup(ctx, operations.GETDeleteDBInstanceAutomatedBackupRequest{
        Action: operations.GETDeleteDBInstanceAutomatedBackupActionEnumDeleteDbInstanceAutomatedBackup,
        DBInstanceAutomatedBackupsArn: sdk.String("doloremque"),
        DbiResourceID: sdk.String("reprehenderit"),
        Version: operations.GETDeleteDBInstanceAutomatedBackupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBParameterGroup

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBParameterGroup(ctx, operations.GETDeleteDBParameterGroupRequest{
        Action: operations.GETDeleteDBParameterGroupActionEnumDeleteDbParameterGroup,
        DBParameterGroupName: "harum",
        Version: operations.GETDeleteDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBProxy(ctx, operations.GETDeleteDBProxyRequest{
        Action: operations.GETDeleteDBProxyActionEnumDeleteDbProxy,
        DBProxyName: "molestias",
        Version: operations.GETDeleteDBProxyVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBProxyEndpoint(ctx, operations.GETDeleteDBProxyEndpointRequest{
        Action: operations.GETDeleteDBProxyEndpointActionEnumDeleteDbProxyEndpoint,
        DBProxyEndpointName: "repudiandae",
        Version: operations.GETDeleteDBProxyEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBSecurityGroup(ctx, operations.GETDeleteDBSecurityGroupRequest{
        Action: operations.GETDeleteDBSecurityGroupActionEnumDeleteDbSecurityGroup,
        DBSecurityGroupName: "quibusdam",
        Version: operations.GETDeleteDBSecurityGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBSnapshot(ctx, operations.GETDeleteDBSnapshotRequest{
        Action: operations.GETDeleteDBSnapshotActionEnumDeleteDbSnapshot,
        DBSnapshotIdentifier: "aliquid",
        Version: operations.GETDeleteDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteDBSubnetGroup(ctx, operations.GETDeleteDBSubnetGroupRequest{
        Action: operations.GETDeleteDBSubnetGroupActionEnumDeleteDbSubnetGroup,
        DBSubnetGroupName: "fugit",
        Version: operations.GETDeleteDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteEventSubscription

Deletes an RDS event notification subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteEventSubscription(ctx, operations.GETDeleteEventSubscriptionRequest{
        Action: operations.GETDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        SubscriptionName: "eum",
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteGlobalCluster

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteGlobalCluster(ctx, operations.GETDeleteGlobalClusterRequest{
        Action: operations.GETDeleteGlobalClusterActionEnumDeleteGlobalCluster,
        GlobalClusterIdentifier: "officia",
        Version: operations.GETDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteOptionGroup

Deletes an existing option group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeleteOptionGroup(ctx, operations.GETDeleteOptionGroupRequest{
        Action: operations.GETDeleteOptionGroupActionEnumDeleteOptionGroup,
        OptionGroupName: "maiores",
        Version: operations.GETDeleteOptionGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDeregisterDBProxyTargets(ctx, operations.GETDeregisterDBProxyTargetsRequest{
        Action: operations.GETDeregisterDBProxyTargetsActionEnumDeregisterDbProxyTargets,
        DBClusterIdentifiers: []string{
            "accusamus",
            "non",
            "occaecati",
        },
        DBInstanceIdentifiers: []string{
            "accusamus",
            "delectus",
        },
        DBProxyName: "quidem",
        TargetGroupName: sdk.String("provident"),
        Version: operations.GETDeregisterDBProxyTargetsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeAccountAttributes(ctx, operations.GETDescribeAccountAttributesRequest{
        Action: operations.GETDescribeAccountAttributesActionEnumDescribeAccountAttributes,
        Version: operations.GETDescribeAccountAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeDBClusterSnapshotAttributes(ctx, operations.GETDescribeDBClusterSnapshotAttributesRequest{
        Action: operations.GETDescribeDBClusterSnapshotAttributesActionEnumDescribeDbClusterSnapshotAttributes,
        DBClusterSnapshotIdentifier: "magnam",
        Version: operations.GETDescribeDBClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeDBSnapshotAttributes(ctx, operations.GETDescribeDBSnapshotAttributesRequest{
        Action: operations.GETDescribeDBSnapshotAttributesActionEnumDescribeDbSnapshotAttributes,
        DBSnapshotIdentifier: "eum",
        Version: operations.GETDescribeDBSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeValidDBInstanceModifications

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeValidDBInstanceModifications(ctx, operations.GETDescribeValidDBInstanceModificationsRequest{
        Action: operations.GETDescribeValidDBInstanceModificationsActionEnumDescribeValidDbInstanceModifications,
        DBInstanceIdentifier: "provident",
        Version: operations.GETDescribeValidDBInstanceModificationsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDownloadDBLogFilePortion(ctx, operations.GETDownloadDBLogFilePortionRequest{
        Action: operations.GETDownloadDBLogFilePortionActionEnumDownloadDbLogFilePortion,
        DBInstanceIdentifier: "eum",
        LogFileName: "dolor",
        Marker: sdk.String("necessitatibus"),
        NumberOfLines: sdk.Int64(141264),
        Version: operations.GETDownloadDBLogFilePortionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETFailoverDBCluster(ctx, operations.GETFailoverDBClusterRequest{
        Action: operations.GETFailoverDBClusterActionEnumFailoverDbCluster,
        DBClusterIdentifier: "deleniti",
        TargetDBInstanceIdentifier: sdk.String("facilis"),
        Version: operations.GETFailoverDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETFailoverGlobalCluster

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETFailoverGlobalCluster(ctx, operations.GETFailoverGlobalClusterRequest{
        Action: operations.GETFailoverGlobalClusterActionEnumFailoverGlobalCluster,
        GlobalClusterIdentifier: "repellat",
        TargetDbClusterIdentifier: "quibusdam",
        Version: operations.GETFailoverGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyActivityStream(ctx, operations.GETModifyActivityStreamRequest{
        Action: operations.GETModifyActivityStreamActionEnumModifyActivityStream,
        AuditPolicyState: operations.GETModifyActivityStreamAuditPolicyStateEnumLocked.ToPointer(),
        ResourceArn: sdk.String("sunt"),
        Version: operations.GETModifyActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyCertificates(ctx, operations.GETModifyCertificatesRequest{
        Action: operations.GETModifyCertificatesActionEnumModifyCertificates,
        CertificateIdentifier: sdk.String("ea"),
        RemoveCustomerOverride: sdk.Bool(false),
        Version: operations.GETModifyCertificatesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyCurrentDBClusterCapacity(ctx, operations.GETModifyCurrentDBClusterCapacityRequest{
        Action: operations.GETModifyCurrentDBClusterCapacityActionEnumModifyCurrentDbClusterCapacity,
        Capacity: sdk.Int64(722056),
        DBClusterIdentifier: "eaque",
        SecondsBeforeTimeout: sdk.Int64(866383),
        TimeoutAction: sdk.String("nemo"),
        Version: operations.GETModifyCurrentDBClusterCapacityVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyCustomDBEngineVersion(ctx, operations.GETModifyCustomDBEngineVersionRequest{
        Action: operations.GETModifyCustomDBEngineVersionActionEnumModifyCustomDbEngineVersion,
        Description: sdk.String("hic"),
        Engine: "libero",
        EngineVersion: "nobis",
        Status: operations.GETModifyCustomDBEngineVersionStatusEnumAvailable.ToPointer(),
        Version: operations.GETModifyCustomDBEngineVersionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBCluster

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBCluster(ctx, operations.GETModifyDBClusterRequest{
        Action: operations.GETModifyDBClusterActionEnumModifyDbCluster,
        AllocatedStorage: sdk.Int64(18521),
        AllowEngineModeChange: sdk.Bool(false),
        AllowMajorVersionUpgrade: sdk.Bool(false),
        ApplyImmediately: sdk.Bool(false),
        AutoMinorVersionUpgrade: sdk.Bool(false),
        BacktrackWindow: sdk.Int64(170986),
        BackupRetentionPeriod: sdk.Int64(793698),
        CloudwatchLogsExportConfiguration: &operations.GETModifyDBClusterCloudwatchLogsExportConfiguration{
            DisableLogTypes: []string{
                "dolor",
                "vero",
            },
            EnableLogTypes: []string{
                "hic",
                "recusandae",
            },
        },
        CopyTagsToSnapshot: sdk.Bool(false),
        DBClusterIdentifier: "omnis",
        DBClusterInstanceClass: sdk.String("facilis"),
        DBClusterParameterGroupName: sdk.String("perspiciatis"),
        DBInstanceParameterGroupName: sdk.String("voluptatem"),
        DeletionProtection: sdk.Bool(false),
        Domain: sdk.String("porro"),
        DomainIAMRoleName: sdk.String("consequuntur"),
        EnableGlobalWriteForwarding: sdk.Bool(false),
        EnableHTTPEndpoint: sdk.Bool(false),
        EnableIAMDatabaseAuthentication: sdk.Bool(false),
        EnablePerformanceInsights: sdk.Bool(false),
        EngineMode: sdk.String("blanditiis"),
        EngineVersion: sdk.String("error"),
        Iops: sdk.Int64(50370),
        ManageMasterUserPassword: sdk.Bool(false),
        MasterUserPassword: sdk.String("occaecati"),
        MasterUserSecretKmsKeyID: sdk.String("rerum"),
        MonitoringInterval: sdk.Int64(237893),
        MonitoringRoleArn: sdk.String("asperiores"),
        NetworkType: sdk.String("earum"),
        NewDBClusterIdentifier: sdk.String("modi"),
        OptionGroupName: sdk.String("iste"),
        PerformanceInsightsKMSKeyID: sdk.String("dolorum"),
        PerformanceInsightsRetentionPeriod: sdk.Int64(535633),
        Port: sdk.Int64(864282),
        PreferredBackupWindow: sdk.String("provident"),
        PreferredMaintenanceWindow: sdk.String("nobis"),
        RotateMasterUserPassword: sdk.Bool(false),
        ScalingConfiguration: &operations.GETModifyDBClusterScalingConfiguration{
            AutoPause: sdk.Bool(false),
            MaxCapacity: sdk.Int64(730122),
            MinCapacity: sdk.Int64(964490),
            SecondsBeforeTimeout: sdk.Int64(311945),
            SecondsUntilAutoPause: sdk.Int64(554242),
            TimeoutAction: sdk.String("aliquid"),
        },
        ServerlessV2ScalingConfiguration: &operations.GETModifyDBClusterServerlessV2ScalingConfiguration{
            MaxCapacity: sdk.Float64(2123.9),
            MinCapacity: sdk.Float64(2098.43),
        },
        StorageType: sdk.String("dolor"),
        Version: operations.GETModifyDBClusterVersionEnumTwoThousandAndFourteen1031,
        VpcSecurityGroupIds: []string{
            "ipsum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBClusterEndpoint

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBClusterEndpoint(ctx, operations.GETModifyDBClusterEndpointRequest{
        Action: operations.GETModifyDBClusterEndpointActionEnumModifyDbClusterEndpoint,
        DBClusterEndpointIdentifier: "dolorum",
        EndpointType: sdk.String("numquam"),
        ExcludedMembers: []string{
            "ipsa",
        },
        StaticMembers: []string{
            "iure",
        },
        Version: operations.GETModifyDBClusterEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBClusterSnapshotAttribute(ctx, operations.GETModifyDBClusterSnapshotAttributeRequest{
        Action: operations.GETModifyDBClusterSnapshotAttributeActionEnumModifyDbClusterSnapshotAttribute,
        AttributeName: "eos",
        DBClusterSnapshotIdentifier: "atque",
        ValuesToAdd: []string{
            "fugiat",
        },
        ValuesToRemove: []string{
            "soluta",
        },
        Version: operations.GETModifyDBClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBProxyEndpoint(ctx, operations.GETModifyDBProxyEndpointRequest{
        Action: operations.GETModifyDBProxyEndpointActionEnumModifyDbProxyEndpoint,
        DBProxyEndpointName: "distinctio",
        NewDBProxyEndpointName: sdk.String("asperiores"),
        Version: operations.GETModifyDBProxyEndpointVersionEnumTwoThousandAndFourteen1031,
        VpcSecurityGroupIds: []string{
            "ipsum",
            "voluptate",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBProxyTargetGroup(ctx, operations.GETModifyDBProxyTargetGroupRequest{
        Action: operations.GETModifyDBProxyTargetGroupActionEnumModifyDbProxyTargetGroup,
        ConnectionPoolConfig: &operations.GETModifyDBProxyTargetGroupConnectionPoolConfig{
            ConnectionBorrowTimeout: sdk.Int64(881586),
            InitQuery: sdk.String("ad"),
            MaxConnectionsPercent: sdk.Int64(904425),
            MaxIdleConnectionsPercent: sdk.Int64(383464),
            SessionPinningFilters: []string{
                "provident",
                "minima",
                "repellendus",
            },
        },
        DBProxyName: "totam",
        NewName: sdk.String("similique"),
        TargetGroupName: "alias",
        Version: operations.GETModifyDBProxyTargetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBSnapshot(ctx, operations.GETModifyDBSnapshotRequest{
        Action: operations.GETModifyDBSnapshotActionEnumModifyDbSnapshot,
        DBSnapshotIdentifier: "dolorum",
        EngineVersion: sdk.String("a"),
        OptionGroupName: sdk.String("esse"),
        Version: operations.GETModifyDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBSnapshotAttribute(ctx, operations.GETModifyDBSnapshotAttributeRequest{
        Action: operations.GETModifyDBSnapshotAttributeActionEnumModifyDbSnapshotAttribute,
        AttributeName: "accusamus",
        DBSnapshotIdentifier: "numquam",
        ValuesToAdd: []string{
            "dolorem",
            "sapiente",
        },
        ValuesToRemove: []string{
            "nihil",
            "sit",
            "expedita",
        },
        Version: operations.GETModifyDBSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyDBSubnetGroup(ctx, operations.GETModifyDBSubnetGroupRequest{
        Action: operations.GETModifyDBSubnetGroupActionEnumModifyDbSubnetGroup,
        DBSubnetGroupDescription: sdk.String("ipsum"),
        DBSubnetGroupName: "incidunt",
        SubnetIds: []string{
            "cupiditate",
        },
        Version: operations.GETModifyDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyEventSubscription

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyEventSubscription(ctx, operations.GETModifyEventSubscriptionRequest{
        Action: operations.GETModifyEventSubscriptionActionEnumModifyEventSubscription,
        Enabled: sdk.Bool(false),
        EventCategories: []string{
            "dolores",
        },
        SnsTopicArn: sdk.String("distinctio"),
        SourceType: sdk.String("facilis"),
        SubscriptionName: "aliquid",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyGlobalCluster

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETModifyGlobalCluster(ctx, operations.GETModifyGlobalClusterRequest{
        Action: operations.GETModifyGlobalClusterActionEnumModifyGlobalCluster,
        AllowMajorVersionUpgrade: sdk.Bool(false),
        DeletionProtection: sdk.Bool(false),
        EngineVersion: sdk.String("odio"),
        GlobalClusterIdentifier: sdk.String("sunt"),
        NewGlobalClusterIdentifier: sdk.String("ullam"),
        Version: operations.GETModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETPromoteReadReplica(ctx, operations.GETPromoteReadReplicaRequest{
        Action: operations.GETPromoteReadReplicaActionEnumPromoteReadReplica,
        BackupRetentionPeriod: sdk.Int64(903720),
        DBInstanceIdentifier: "ipsum",
        PreferredBackupWindow: sdk.String("veritatis"),
        Version: operations.GETPromoteReadReplicaVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPromoteReadReplicaDBCluster

Promotes a read replica DB cluster to a standalone DB cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETPromoteReadReplicaDBCluster(ctx, operations.GETPromoteReadReplicaDBClusterRequest{
        Action: operations.GETPromoteReadReplicaDBClusterActionEnumPromoteReadReplicaDbCluster,
        DBClusterIdentifier: "dolore",
        Version: operations.GETPromoteReadReplicaDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRebootDBCluster(ctx, operations.GETRebootDBClusterRequest{
        Action: operations.GETRebootDBClusterActionEnumRebootDbCluster,
        DBClusterIdentifier: "itaque",
        Version: operations.GETRebootDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRebootDBInstance(ctx, operations.GETRebootDBInstanceRequest{
        Action: operations.GETRebootDBInstanceActionEnumRebootDbInstance,
        DBInstanceIdentifier: "cupiditate",
        ForceFailover: sdk.Bool(false),
        Version: operations.GETRebootDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRegisterDBProxyTargets(ctx, operations.GETRegisterDBProxyTargetsRequest{
        Action: operations.GETRegisterDBProxyTargetsActionEnumRegisterDbProxyTargets,
        DBClusterIdentifiers: []string{
            "omnis",
            "quis",
            "ipsum",
            "delectus",
        },
        DBInstanceIdentifiers: []string{
            "consectetur",
            "vero",
        },
        DBProxyName: "tenetur",
        TargetGroupName: sdk.String("dignissimos"),
        Version: operations.GETRegisterDBProxyTargetsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRemoveFromGlobalCluster

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRemoveFromGlobalCluster(ctx, operations.GETRemoveFromGlobalClusterRequest{
        Action: operations.GETRemoveFromGlobalClusterActionEnumRemoveFromGlobalCluster,
        DbClusterIdentifier: sdk.String("ducimus"),
        GlobalClusterIdentifier: sdk.String("dolore"),
        Version: operations.GETRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRemoveRoleFromDBCluster

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRemoveRoleFromDBCluster(ctx, operations.GETRemoveRoleFromDBClusterRequest{
        Action: operations.GETRemoveRoleFromDBClusterActionEnumRemoveRoleFromDbCluster,
        DBClusterIdentifier: "exercitationem",
        FeatureName: sdk.String("nulla"),
        RoleArn: "fugit",
        Version: operations.GETRemoveRoleFromDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRemoveRoleFromDBInstance(ctx, operations.GETRemoveRoleFromDBInstanceRequest{
        Action: operations.GETRemoveRoleFromDBInstanceActionEnumRemoveRoleFromDbInstance,
        DBInstanceIdentifier: "officia",
        FeatureName: "tempora",
        RoleArn: "ipsam",
        Version: operations.GETRemoveRoleFromDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing RDS event notification subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRemoveSourceIdentifierFromSubscription(ctx, operations.GETRemoveSourceIdentifierFromSubscriptionRequest{
        Action: operations.GETRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription,
        SourceIdentifier: "laudantium",
        SubscriptionName: "dicta",
        Version: operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRemoveTagsFromResource

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRemoveTagsFromResource(ctx, operations.GETRemoveTagsFromResourceRequest{
        Action: operations.GETRemoveTagsFromResourceActionEnumRemoveTagsFromResource,
        ResourceName: "nostrum",
        TagKeys: []string{
            "quisquam",
            "saepe",
            "ea",
            "impedit",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRevokeDBSecurityGroupIngress(ctx, operations.GETRevokeDBSecurityGroupIngressRequest{
        Action: operations.GETRevokeDBSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress,
        Cidrip: sdk.String("consectetur"),
        DBSecurityGroupName: "recusandae",
        Ec2SecurityGroupID: sdk.String("aspernatur"),
        Ec2SecurityGroupName: sdk.String("minima"),
        Ec2SecurityGroupOwnerID: sdk.String("eaque"),
        Version: operations.GETRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStartActivityStream(ctx, operations.GETStartActivityStreamRequest{
        Action: operations.GETStartActivityStreamActionEnumStartActivityStream,
        ApplyImmediately: sdk.Bool(false),
        EngineNativeAuditFieldsIncluded: sdk.Bool(false),
        KmsKeyID: "fugit",
        Mode: operations.GETStartActivityStreamModeEnumAsync,
        ResourceArn: "inventore",
        Version: operations.GETStartActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStartDBCluster

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStartDBCluster(ctx, operations.GETStartDBClusterRequest{
        Action: operations.GETStartDBClusterActionEnumStartDbCluster,
        DBClusterIdentifier: "autem",
        Version: operations.GETStartDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStartDBInstance(ctx, operations.GETStartDBInstanceRequest{
        Action: operations.GETStartDBInstanceActionEnumStartDbInstance,
        DBInstanceIdentifier: "tempora",
        Version: operations.GETStartDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStartDBInstanceAutomatedBackupsReplication(ctx, operations.GETStartDBInstanceAutomatedBackupsReplicationRequest{
        Action: operations.GETStartDBInstanceAutomatedBackupsReplicationActionEnumStartDbInstanceAutomatedBackupsReplication,
        BackupRetentionPeriod: sdk.Int64(262118),
        KmsKeyID: sdk.String("esse"),
        PreSignedURL: sdk.String("esse"),
        SourceDBInstanceArn: "rem",
        Version: operations.GETStartDBInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStartExportTask(ctx, operations.GETStartExportTaskRequest{
        Action: operations.GETStartExportTaskActionEnumStartExportTask,
        ExportOnly: []string{
            "eos",
            "praesentium",
            "quisquam",
            "veritatis",
        },
        ExportTaskIdentifier: "ipsa",
        IamRoleArn: "id",
        KmsKeyID: "quidem",
        S3BucketName: "neque",
        S3Prefix: sdk.String("quo"),
        SourceArn: "illum",
        Version: operations.GETStartExportTaskVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStopActivityStream(ctx, operations.GETStopActivityStreamRequest{
        Action: operations.GETStopActivityStreamActionEnumStopActivityStream,
        ApplyImmediately: sdk.Bool(false),
        ResourceArn: "consequatur",
        Version: operations.GETStopActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStopDBCluster

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStopDBCluster(ctx, operations.GETStopDBClusterRequest{
        Action: operations.GETStopDBClusterActionEnumStopDbCluster,
        DBClusterIdentifier: "recusandae",
        Version: operations.GETStopDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStopDBInstance(ctx, operations.GETStopDBInstanceRequest{
        Action: operations.GETStopDBInstanceActionEnumStopDbInstance,
        DBInstanceIdentifier: "accusamus",
        DBSnapshotIdentifier: sdk.String("aliquam"),
        Version: operations.GETStopDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStopDBInstanceAutomatedBackupsReplication(ctx, operations.GETStopDBInstanceAutomatedBackupsReplicationRequest{
        Action: operations.GETStopDBInstanceAutomatedBackupsReplicationActionEnumStopDbInstanceAutomatedBackupsReplication,
        SourceDBInstanceArn: "accusantium",
        Version: operations.GETStopDBInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETSwitchoverBlueGreenDeployment(ctx, operations.GETSwitchoverBlueGreenDeploymentRequest{
        Action: operations.GETSwitchoverBlueGreenDeploymentActionEnumSwitchoverBlueGreenDeployment,
        BlueGreenDeploymentIdentifier: "fuga",
        SwitchoverTimeout: sdk.Int64(649463),
        Version: operations.GETSwitchoverBlueGreenDeploymentVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETSwitchoverReadReplica(ctx, operations.GETSwitchoverReadReplicaRequest{
        Action: operations.GETSwitchoverReadReplicaActionEnumSwitchoverReadReplica,
        DBInstanceIdentifier: "consequuntur",
        Version: operations.GETSwitchoverReadReplicaVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with a DB cluster.

### Example Usage

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
    res, err := s.SDK.POSTAddRoleToDBCluster(ctx, operations.POSTAddRoleToDBClusterRequest{
        Action: operations.POSTAddRoleToDBClusterActionEnumAddRoleToDbCluster,
        RequestBody: []byte("eveniet"),
        Version: operations.POSTAddRoleToDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTAddRoleToDBInstance(ctx, operations.POSTAddRoleToDBInstanceRequest{
        Action: operations.POSTAddRoleToDBInstanceActionEnumAddRoleToDbInstance,
        RequestBody: []byte("quasi"),
        Version: operations.POSTAddRoleToDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAddSourceIdentifierToSubscription

Adds a source identifier to an existing RDS event notification subscription.

### Example Usage

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
    res, err := s.SDK.POSTAddSourceIdentifierToSubscription(ctx, operations.POSTAddSourceIdentifierToSubscriptionRequest{
        Action: operations.POSTAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription,
        RequestBody: []byte("distinctio"),
        Version: operations.POSTAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddTagsToResource

<p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>

### Example Usage

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
    res, err := s.SDK.POSTAddTagsToResource(ctx, operations.POSTAddTagsToResourceRequest{
        Action: operations.POSTAddTagsToResourceActionEnumAddTagsToResource,
        RequestBody: []byte("consequatur"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a DB instance).

### Example Usage

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
    res, err := s.SDK.POSTApplyPendingMaintenanceAction(ctx, operations.POSTApplyPendingMaintenanceActionRequest{
        Action: operations.POSTApplyPendingMaintenanceActionActionEnumApplyPendingMaintenanceAction,
        RequestBody: []byte("a"),
        Version: operations.POSTApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTAuthorizeDBSecurityGroupIngress(ctx, operations.POSTAuthorizeDBSecurityGroupIngressRequest{
        Action: operations.POSTAuthorizeDBSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress,
        RequestBody: []byte("pariatur"),
        Version: operations.POSTAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.POSTBacktrackDBCluster(ctx, operations.POSTBacktrackDBClusterRequest{
        Action: operations.POSTBacktrackDBClusterActionEnumBacktrackDbCluster,
        RequestBody: []byte("quasi"),
        Version: operations.POSTBacktrackDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

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
    res, err := s.SDK.POSTCancelExportTask(ctx, operations.POSTCancelExportTaskRequest{
        Action: operations.POSTCancelExportTaskActionEnumCancelExportTask,
        RequestBody: []byte("in"),
        Version: operations.POSTCancelExportTaskVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyDBClusterParameterGroup

Copies the specified DB cluster parameter group.

### Example Usage

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
    res, err := s.SDK.POSTCopyDBClusterParameterGroup(ctx, operations.POSTCopyDBClusterParameterGroupRequest{
        Action: operations.POSTCopyDBClusterParameterGroupActionEnumCopyDbClusterParameterGroup,
        RequestBody: []byte("dicta"),
        Version: operations.POSTCopyDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyDBClusterSnapshot

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCopyDBClusterSnapshot(ctx, operations.POSTCopyDBClusterSnapshotRequest{
        Action: operations.POSTCopyDBClusterSnapshotActionEnumCopyDbClusterSnapshot,
        RequestBody: []byte("quibusdam"),
        Version: operations.POSTCopyDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyDBParameterGroup

Copies the specified DB parameter group.

### Example Usage

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
    res, err := s.SDK.POSTCopyDBParameterGroup(ctx, operations.POSTCopyDBParameterGroupRequest{
        Action: operations.POSTCopyDBParameterGroupActionEnumCopyDbParameterGroup,
        RequestBody: []byte("quasi"),
        Version: operations.POSTCopyDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyDBSnapshot

<p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCopyDBSnapshot(ctx, operations.POSTCopyDBSnapshotRequest{
        Action: operations.POSTCopyDBSnapshotActionEnumCopyDbSnapshot,
        RequestBody: []byte("adipisci"),
        Version: operations.POSTCopyDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyOptionGroup

Copies the specified option group.

### Example Usage

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
    res, err := s.SDK.POSTCopyOptionGroup(ctx, operations.POSTCopyOptionGroupRequest{
        Action: operations.POSTCopyOptionGroupActionEnumCopyOptionGroup,
        RequestBody: []byte("mollitia"),
        Version: operations.POSTCopyOptionGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateBlueGreenDeployment

<p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateBlueGreenDeployment(ctx, operations.POSTCreateBlueGreenDeploymentRequest{
        Action: operations.POSTCreateBlueGreenDeploymentActionEnumCreateBlueGreenDeployment,
        RequestBody: []byte("impedit"),
        Version: operations.POSTCreateBlueGreenDeploymentVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateCustomDBEngineVersion

Creates a custom DB engine version (CEV).

### Example Usage

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
    res, err := s.SDK.POSTCreateCustomDBEngineVersion(ctx, operations.POSTCreateCustomDBEngineVersionRequest{
        Action: operations.POSTCreateCustomDBEngineVersionActionEnumCreateCustomDbEngineVersion,
        RequestBody: []byte("velit"),
        Version: operations.POSTCreateCustomDBEngineVersionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBCluster

<p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBCluster(ctx, operations.POSTCreateDBClusterRequest{
        Action: operations.POSTCreateDBClusterActionEnumCreateDbCluster,
        RequestBody: []byte("repellendus"),
        Version: operations.POSTCreateDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBClusterEndpoint

<p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBClusterEndpoint(ctx, operations.POSTCreateDBClusterEndpointRequest{
        Action: operations.POSTCreateDBClusterEndpointActionEnumCreateDbClusterEndpoint,
        RequestBody: []byte("quaerat"),
        Version: operations.POSTCreateDBClusterEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBClusterParameterGroup

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBClusterParameterGroup(ctx, operations.POSTCreateDBClusterParameterGroupRequest{
        Action: operations.POSTCreateDBClusterParameterGroupActionEnumCreateDbClusterParameterGroup,
        RequestBody: []byte("suscipit"),
        Version: operations.POSTCreateDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBClusterSnapshot

<p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBClusterSnapshot(ctx, operations.POSTCreateDBClusterSnapshotRequest{
        Action: operations.POSTCreateDBClusterSnapshotActionEnumCreateDbClusterSnapshot,
        RequestBody: []byte("ducimus"),
        Version: operations.POSTCreateDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBInstance

<p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBInstance(ctx, operations.POSTCreateDBInstanceRequest{
        Action: operations.POSTCreateDBInstanceActionEnumCreateDbInstance,
        RequestBody: []byte("in"),
        Version: operations.POSTCreateDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBInstanceReadReplica

<p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBInstanceReadReplica(ctx, operations.POSTCreateDBInstanceReadReplicaRequest{
        Action: operations.POSTCreateDBInstanceReadReplicaActionEnumCreateDbInstanceReadReplica,
        RequestBody: []byte("cum"),
        Version: operations.POSTCreateDBInstanceReadReplicaVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBParameterGroup

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBParameterGroup(ctx, operations.POSTCreateDBParameterGroupRequest{
        Action: operations.POSTCreateDBParameterGroupActionEnumCreateDbParameterGroup,
        RequestBody: []byte("suscipit"),
        Version: operations.POSTCreateDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBProxy

Creates a new DB proxy.

### Example Usage

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
    res, err := s.SDK.POSTCreateDBProxy(ctx, operations.POSTCreateDBProxyRequest{
        Action: operations.POSTCreateDBProxyActionEnumCreateDbProxy,
        RequestBody: []byte("adipisci"),
        Version: operations.POSTCreateDBProxyVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBProxyEndpoint

Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.

### Example Usage

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
    res, err := s.SDK.POSTCreateDBProxyEndpoint(ctx, operations.POSTCreateDBProxyEndpointRequest{
        Action: operations.POSTCreateDBProxyEndpointActionEnumCreateDbProxyEndpoint,
        RequestBody: []byte("corporis"),
        Version: operations.POSTCreateDBProxyEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSecurityGroup

<p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTCreateDBSecurityGroup(ctx, operations.POSTCreateDBSecurityGroupRequest{
        Action: operations.POSTCreateDBSecurityGroupActionEnumCreateDbSecurityGroup,
        RequestBody: []byte("similique"),
        Version: operations.POSTCreateDBSecurityGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSnapshot

Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.

### Example Usage

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
    res, err := s.SDK.POSTCreateDBSnapshot(ctx, operations.POSTCreateDBSnapshotRequest{
        Action: operations.POSTCreateDBSnapshotActionEnumCreateDbSnapshot,
        RequestBody: []byte("dolorum"),
        Version: operations.POSTCreateDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSubnetGroup

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

### Example Usage

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
    res, err := s.SDK.POSTCreateDBSubnetGroup(ctx, operations.POSTCreateDBSubnetGroupRequest{
        Action: operations.POSTCreateDBSubnetGroupActionEnumCreateDbSubnetGroup,
        RequestBody: []byte("officiis"),
        Version: operations.POSTCreateDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateEventSubscription

<p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateEventSubscription(ctx, operations.POSTCreateEventSubscriptionRequest{
        Action: operations.POSTCreateEventSubscriptionActionEnumCreateEventSubscription,
        RequestBody: []byte("nesciunt"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateGlobalCluster

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTCreateGlobalCluster(ctx, operations.POSTCreateGlobalClusterRequest{
        Action: operations.POSTCreateGlobalClusterActionEnumCreateGlobalCluster,
        RequestBody: []byte("sit"),
        Version: operations.POSTCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateOptionGroup

<p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTCreateOptionGroup(ctx, operations.POSTCreateOptionGroupRequest{
        Action: operations.POSTCreateOptionGroupActionEnumCreateOptionGroup,
        RequestBody: []byte("expedita"),
        Version: operations.POSTCreateOptionGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteBlueGreenDeployment(ctx, operations.POSTDeleteBlueGreenDeploymentRequest{
        Action: operations.POSTDeleteBlueGreenDeploymentActionEnumDeleteBlueGreenDeployment,
        RequestBody: []byte("quidem"),
        Version: operations.POSTDeleteBlueGreenDeploymentVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteCustomDBEngineVersion(ctx, operations.POSTDeleteCustomDBEngineVersionRequest{
        Action: operations.POSTDeleteCustomDBEngineVersionActionEnumDeleteCustomDbEngineVersion,
        RequestBody: []byte("illo"),
        Version: operations.POSTDeleteCustomDBEngineVersionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBCluster(ctx, operations.POSTDeleteDBClusterRequest{
        Action: operations.POSTDeleteDBClusterActionEnumDeleteDbCluster,
        RequestBody: []byte("eius"),
        Version: operations.POSTDeleteDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBClusterEndpoint

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBClusterEndpoint(ctx, operations.POSTDeleteDBClusterEndpointRequest{
        Action: operations.POSTDeleteDBClusterEndpointActionEnumDeleteDbClusterEndpoint,
        RequestBody: []byte("tempora"),
        Version: operations.POSTDeleteDBClusterEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBClusterParameterGroup

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBClusterParameterGroup(ctx, operations.POSTDeleteDBClusterParameterGroupRequest{
        Action: operations.POSTDeleteDBClusterParameterGroupActionEnumDeleteDbClusterParameterGroup,
        RequestBody: []byte("facilis"),
        Version: operations.POSTDeleteDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBClusterSnapshot(ctx, operations.POSTDeleteDBClusterSnapshotRequest{
        Action: operations.POSTDeleteDBClusterSnapshotActionEnumDeleteDbClusterSnapshot,
        RequestBody: []byte("error"),
        Version: operations.POSTDeleteDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBInstance(ctx, operations.POSTDeleteDBInstanceRequest{
        Action: operations.POSTDeleteDBInstanceActionEnumDeleteDbInstance,
        RequestBody: []byte("saepe"),
        Version: operations.POSTDeleteDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBInstanceAutomatedBackup(ctx, operations.POSTDeleteDBInstanceAutomatedBackupRequest{
        Action: operations.POSTDeleteDBInstanceAutomatedBackupActionEnumDeleteDbInstanceAutomatedBackup,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTDeleteDBInstanceAutomatedBackupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBParameterGroup

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBParameterGroup(ctx, operations.POSTDeleteDBParameterGroupRequest{
        Action: operations.POSTDeleteDBParameterGroupActionEnumDeleteDbParameterGroup,
        RequestBody: []byte("debitis"),
        Version: operations.POSTDeleteDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBProxy(ctx, operations.POSTDeleteDBProxyRequest{
        Action: operations.POSTDeleteDBProxyActionEnumDeleteDbProxy,
        RequestBody: []byte("tempora"),
        Version: operations.POSTDeleteDBProxyVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBProxyEndpoint(ctx, operations.POSTDeleteDBProxyEndpointRequest{
        Action: operations.POSTDeleteDBProxyEndpointActionEnumDeleteDbProxyEndpoint,
        RequestBody: []byte("magnam"),
        Version: operations.POSTDeleteDBProxyEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBSecurityGroup(ctx, operations.POSTDeleteDBSecurityGroupRequest{
        Action: operations.POSTDeleteDBSecurityGroupActionEnumDeleteDbSecurityGroup,
        RequestBody: []byte("corporis"),
        Version: operations.POSTDeleteDBSecurityGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBSnapshot(ctx, operations.POSTDeleteDBSnapshotRequest{
        Action: operations.POSTDeleteDBSnapshotActionEnumDeleteDbSnapshot,
        RequestBody: []byte("saepe"),
        Version: operations.POSTDeleteDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBSubnetGroup

<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDeleteDBSubnetGroup(ctx, operations.POSTDeleteDBSubnetGroupRequest{
        Action: operations.POSTDeleteDBSubnetGroupActionEnumDeleteDbSubnetGroup,
        RequestBody: []byte("architecto"),
        Version: operations.POSTDeleteDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteEventSubscription

Deletes an RDS event notification subscription.

### Example Usage

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
    res, err := s.SDK.POSTDeleteEventSubscription(ctx, operations.POSTDeleteEventSubscriptionRequest{
        Action: operations.POSTDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        RequestBody: []byte("laboriosam"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteGlobalCluster

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDeleteGlobalCluster(ctx, operations.POSTDeleteGlobalClusterRequest{
        Action: operations.POSTDeleteGlobalClusterActionEnumDeleteGlobalCluster,
        RequestBody: []byte("repellendus"),
        Version: operations.POSTDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteOptionGroup

Deletes an existing option group.

### Example Usage

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
    res, err := s.SDK.POSTDeleteOptionGroup(ctx, operations.POSTDeleteOptionGroupRequest{
        Action: operations.POSTDeleteOptionGroupActionEnumDeleteOptionGroup,
        RequestBody: []byte("fuga"),
        Version: operations.POSTDeleteOptionGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

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
    res, err := s.SDK.POSTDeregisterDBProxyTargets(ctx, operations.POSTDeregisterDBProxyTargetsRequest{
        Action: operations.POSTDeregisterDBProxyTargetsActionEnumDeregisterDbProxyTargets,
        RequestBody: []byte("atque"),
        Version: operations.POSTDeregisterDBProxyTargetsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.POSTDescribeAccountAttributes(ctx, operations.POSTDescribeAccountAttributesRequest{
        Action: operations.POSTDescribeAccountAttributesActionEnumDescribeAccountAttributes,
        RequestBody: []byte("esse"),
        Version: operations.POSTDescribeAccountAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeBlueGreenDeployments

<p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeBlueGreenDeployments(ctx, operations.POSTDescribeBlueGreenDeploymentsRequest{
        Action: operations.POSTDescribeBlueGreenDeploymentsActionEnumDescribeBlueGreenDeployments,
        Marker: sdk.String("accusamus"),
        MaxRecords: sdk.String("natus"),
        RequestBody: []byte("minima"),
        Version: operations.POSTDescribeBlueGreenDeploymentsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeCertificates

<p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeCertificates(ctx, operations.POSTDescribeCertificatesRequest{
        Action: operations.POSTDescribeCertificatesActionEnumDescribeCertificates,
        Marker: sdk.String("suscipit"),
        MaxRecords: sdk.String("repudiandae"),
        RequestBody: []byte("atque"),
        Version: operations.POSTDescribeCertificatesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterBacktracks

<p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterBacktracks(ctx, operations.POSTDescribeDBClusterBacktracksRequest{
        Action: operations.POSTDescribeDBClusterBacktracksActionEnumDescribeDbClusterBacktracks,
        Marker: sdk.String("doloremque"),
        MaxRecords: sdk.String("repudiandae"),
        RequestBody: []byte("dicta"),
        Version: operations.POSTDescribeDBClusterBacktracksVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterEndpoints

<p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterEndpoints(ctx, operations.POSTDescribeDBClusterEndpointsRequest{
        Action: operations.POSTDescribeDBClusterEndpointsActionEnumDescribeDbClusterEndpoints,
        Marker: sdk.String("molestias"),
        MaxRecords: sdk.String("magnam"),
        RequestBody: []byte("saepe"),
        Version: operations.POSTDescribeDBClusterEndpointsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterParameterGroups

<p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterParameterGroups(ctx, operations.POSTDescribeDBClusterParameterGroupsRequest{
        Action: operations.POSTDescribeDBClusterParameterGroupsActionEnumDescribeDbClusterParameterGroups,
        Marker: sdk.String("occaecati"),
        MaxRecords: sdk.String("consequuntur"),
        RequestBody: []byte("fugit"),
        Version: operations.POSTDescribeDBClusterParameterGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterParameters

<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterParameters(ctx, operations.POSTDescribeDBClusterParametersRequest{
        Action: operations.POSTDescribeDBClusterParametersActionEnumDescribeDbClusterParameters,
        Marker: sdk.String("eveniet"),
        MaxRecords: sdk.String("non"),
        RequestBody: []byte("vero"),
        Version: operations.POSTDescribeDBClusterParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterSnapshotAttributes(ctx, operations.POSTDescribeDBClusterSnapshotAttributesRequest{
        Action: operations.POSTDescribeDBClusterSnapshotAttributesActionEnumDescribeDbClusterSnapshotAttributes,
        RequestBody: []byte("qui"),
        Version: operations.POSTDescribeDBClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusterSnapshots

<p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusterSnapshots(ctx, operations.POSTDescribeDBClusterSnapshotsRequest{
        Action: operations.POSTDescribeDBClusterSnapshotsActionEnumDescribeDbClusterSnapshots,
        Marker: sdk.String("rem"),
        MaxRecords: sdk.String("aliquam"),
        RequestBody: []byte("ad"),
        Version: operations.POSTDescribeDBClusterSnapshotsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBClusters

<p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBClusters(ctx, operations.POSTDescribeDBClustersRequest{
        Action: operations.POSTDescribeDBClustersActionEnumDescribeDbClusters,
        Marker: sdk.String("alias"),
        MaxRecords: sdk.String("maiores"),
        RequestBody: []byte("reiciendis"),
        Version: operations.POSTDescribeDBClustersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBEngineVersions

Returns a list of the available DB engines.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBEngineVersions(ctx, operations.POSTDescribeDBEngineVersionsRequest{
        Action: operations.POSTDescribeDBEngineVersionsActionEnumDescribeDbEngineVersions,
        Marker: sdk.String("recusandae"),
        MaxRecords: sdk.String("omnis"),
        RequestBody: []byte("quaerat"),
        Version: operations.POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBInstanceAutomatedBackups

<p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBInstanceAutomatedBackups(ctx, operations.POSTDescribeDBInstanceAutomatedBackupsRequest{
        Action: operations.POSTDescribeDBInstanceAutomatedBackupsActionEnumDescribeDbInstanceAutomatedBackups,
        Marker: sdk.String("eum"),
        MaxRecords: sdk.String("nemo"),
        RequestBody: []byte("recusandae"),
        Version: operations.POSTDescribeDBInstanceAutomatedBackupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBInstances

<p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBInstances(ctx, operations.POSTDescribeDBInstancesRequest{
        Action: operations.POSTDescribeDBInstancesActionEnumDescribeDbInstances,
        Marker: sdk.String("ullam"),
        MaxRecords: sdk.String("quasi"),
        RequestBody: []byte("animi"),
        Version: operations.POSTDescribeDBInstancesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBLogFiles

<p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBLogFiles(ctx, operations.POSTDescribeDBLogFilesRequest{
        Action: operations.POSTDescribeDBLogFilesActionEnumDescribeDbLogFiles,
        Marker: sdk.String("accusantium"),
        MaxRecords: sdk.String("repellat"),
        RequestBody: []byte("doloribus"),
        Version: operations.POSTDescribeDBLogFilesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBParameterGroups

Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBParameterGroups(ctx, operations.POSTDescribeDBParameterGroupsRequest{
        Action: operations.POSTDescribeDBParameterGroupsActionEnumDescribeDbParameterGroups,
        Marker: sdk.String("modi"),
        MaxRecords: sdk.String("voluptatibus"),
        RequestBody: []byte("molestias"),
        Version: operations.POSTDescribeDBParameterGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBParameters

Returns the detailed parameter list for a particular DB parameter group.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBParameters(ctx, operations.POSTDescribeDBParametersRequest{
        Action: operations.POSTDescribeDBParametersActionEnumDescribeDbParameters,
        Marker: sdk.String("inventore"),
        MaxRecords: sdk.String("fugit"),
        RequestBody: []byte("cumque"),
        Version: operations.POSTDescribeDBParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBProxies

Returns information about DB proxies.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBProxies(ctx, operations.POSTDescribeDBProxiesRequest{
        Action: operations.POSTDescribeDBProxiesActionEnumDescribeDbProxies,
        Marker: sdk.String("at"),
        MaxRecords: sdk.String("impedit"),
        RequestBody: []byte("eos"),
        Version: operations.POSTDescribeDBProxiesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBProxyEndpoints

Returns information about DB proxy endpoints.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBProxyEndpoints(ctx, operations.POSTDescribeDBProxyEndpointsRequest{
        Action: operations.POSTDescribeDBProxyEndpointsActionEnumDescribeDbProxyEndpoints,
        Marker: sdk.String("earum"),
        MaxRecords: sdk.String("soluta"),
        RequestBody: []byte("hic"),
        Version: operations.POSTDescribeDBProxyEndpointsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBProxyTargetGroups

Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBProxyTargetGroups(ctx, operations.POSTDescribeDBProxyTargetGroupsRequest{
        Action: operations.POSTDescribeDBProxyTargetGroupsActionEnumDescribeDbProxyTargetGroups,
        Marker: sdk.String("porro"),
        MaxRecords: sdk.String("suscipit"),
        RequestBody: []byte("dolorem"),
        Version: operations.POSTDescribeDBProxyTargetGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBProxyTargets

Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBProxyTargets(ctx, operations.POSTDescribeDBProxyTargetsRequest{
        Action: operations.POSTDescribeDBProxyTargetsActionEnumDescribeDbProxyTargets,
        Marker: sdk.String("consequatur"),
        MaxRecords: sdk.String("quasi"),
        RequestBody: []byte("et"),
        Version: operations.POSTDescribeDBProxyTargetsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSecurityGroups

<p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBSecurityGroups(ctx, operations.POSTDescribeDBSecurityGroupsRequest{
        Action: operations.POSTDescribeDBSecurityGroupsActionEnumDescribeDbSecurityGroups,
        Marker: sdk.String("doloribus"),
        MaxRecords: sdk.String("nulla"),
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTDescribeDBSecurityGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBSnapshotAttributes(ctx, operations.POSTDescribeDBSnapshotAttributesRequest{
        Action: operations.POSTDescribeDBSnapshotAttributesActionEnumDescribeDbSnapshotAttributes,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTDescribeDBSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSnapshots

Returns information about DB snapshots. This API action supports pagination.

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBSnapshots(ctx, operations.POSTDescribeDBSnapshotsRequest{
        Action: operations.POSTDescribeDBSnapshotsActionEnumDescribeDbSnapshots,
        Marker: sdk.String("odio"),
        MaxRecords: sdk.String("tempora"),
        RequestBody: []byte("esse"),
        Version: operations.POSTDescribeDBSnapshotsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSubnetGroups

<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeDBSubnetGroups(ctx, operations.POSTDescribeDBSubnetGroupsRequest{
        Action: operations.POSTDescribeDBSubnetGroupsActionEnumDescribeDbSubnetGroups,
        Marker: sdk.String("fugiat"),
        MaxRecords: sdk.String("expedita"),
        RequestBody: []byte("aliquid"),
        Version: operations.POSTDescribeDBSubnetGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEngineDefaultClusterParameters

<p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeEngineDefaultClusterParameters(ctx, operations.POSTDescribeEngineDefaultClusterParametersRequest{
        Action: operations.POSTDescribeEngineDefaultClusterParametersActionEnumDescribeEngineDefaultClusterParameters,
        RequestBody: []byte("id"),
        Version: operations.POSTDescribeEngineDefaultClusterParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified database engine.

### Example Usage

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
    res, err := s.SDK.POSTDescribeEngineDefaultParameters(ctx, operations.POSTDescribeEngineDefaultParametersRequest{
        Action: operations.POSTDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters,
        Marker: sdk.String("ad"),
        MaxRecords: sdk.String("deleniti"),
        RequestBody: []byte("enim"),
        Version: operations.POSTDescribeEngineDefaultParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.

### Example Usage

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
    res, err := s.SDK.POSTDescribeEventCategories(ctx, operations.POSTDescribeEventCategoriesRequest{
        Action: operations.POSTDescribeEventCategoriesActionEnumDescribeEventCategories,
        RequestBody: []byte("expedita"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventSubscriptions

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeEventSubscriptions(ctx, operations.POSTDescribeEventSubscriptionsRequest{
        Action: operations.POSTDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions,
        Marker: sdk.String("veritatis"),
        MaxRecords: sdk.String("rerum"),
        RequestBody: []byte("est"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEvents

<p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.POSTDescribeEvents(ctx, operations.POSTDescribeEventsRequest{
        Action: operations.POSTDescribeEventsActionEnumDescribeEvents,
        Marker: sdk.String("debitis"),
        MaxRecords: sdk.String("voluptatem"),
        RequestBody: []byte("alias"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeExportTasks

Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.

### Example Usage

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
    res, err := s.SDK.POSTDescribeExportTasks(ctx, operations.POSTDescribeExportTasksRequest{
        Action: operations.POSTDescribeExportTasksActionEnumDescribeExportTasks,
        Marker: sdk.String("asperiores"),
        MaxRecords: sdk.String("ratione"),
        RequestBody: []byte("ullam"),
        Version: operations.POSTDescribeExportTasksVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeGlobalClusters

<p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTDescribeGlobalClusters(ctx, operations.POSTDescribeGlobalClustersRequest{
        Action: operations.POSTDescribeGlobalClustersActionEnumDescribeGlobalClusters,
        Marker: sdk.String("culpa"),
        MaxRecords: sdk.String("dolor"),
        RequestBody: []byte("aliquam"),
        Version: operations.POSTDescribeGlobalClustersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOptionGroupOptions

Describes all available options.

### Example Usage

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
    res, err := s.SDK.POSTDescribeOptionGroupOptions(ctx, operations.POSTDescribeOptionGroupOptionsRequest{
        Action: operations.POSTDescribeOptionGroupOptionsActionEnumDescribeOptionGroupOptions,
        Marker: sdk.String("sit"),
        MaxRecords: sdk.String("modi"),
        RequestBody: []byte("fugit"),
        Version: operations.POSTDescribeOptionGroupOptionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOptionGroups

Describes the available option groups.

### Example Usage

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
    res, err := s.SDK.POSTDescribeOptionGroups(ctx, operations.POSTDescribeOptionGroupsRequest{
        Action: operations.POSTDescribeOptionGroupsActionEnumDescribeOptionGroups,
        Marker: sdk.String("ipsa"),
        MaxRecords: sdk.String("quas"),
        RequestBody: []byte("eveniet"),
        Version: operations.POSTDescribeOptionGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOrderableDBInstanceOptions

Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.

### Example Usage

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
    res, err := s.SDK.POSTDescribeOrderableDBInstanceOptions(ctx, operations.POSTDescribeOrderableDBInstanceOptionsRequest{
        Action: operations.POSTDescribeOrderableDBInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions,
        Marker: sdk.String("expedita"),
        MaxRecords: sdk.String("eum"),
        RequestBody: []byte("vel"),
        Version: operations.POSTDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribePendingMaintenanceActions

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.

### Example Usage

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
    res, err := s.SDK.POSTDescribePendingMaintenanceActions(ctx, operations.POSTDescribePendingMaintenanceActionsRequest{
        Action: operations.POSTDescribePendingMaintenanceActionsActionEnumDescribePendingMaintenanceActions,
        Marker: sdk.String("laboriosam"),
        MaxRecords: sdk.String("recusandae"),
        RequestBody: []byte("consequuntur"),
        Version: operations.POSTDescribePendingMaintenanceActionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedDBInstances

Returns information about reserved DB instances for this account, or about a specified reserved DB instance.

### Example Usage

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
    res, err := s.SDK.POSTDescribeReservedDBInstances(ctx, operations.POSTDescribeReservedDBInstancesRequest{
        Action: operations.POSTDescribeReservedDBInstancesActionEnumDescribeReservedDbInstances,
        Marker: sdk.String("est"),
        MaxRecords: sdk.String("harum"),
        RequestBody: []byte("sequi"),
        Version: operations.POSTDescribeReservedDBInstancesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedDBInstancesOfferings

Lists available reserved DB instance offerings.

### Example Usage

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
    res, err := s.SDK.POSTDescribeReservedDBInstancesOfferings(ctx, operations.POSTDescribeReservedDBInstancesOfferingsRequest{
        Action: operations.POSTDescribeReservedDBInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings,
        Marker: sdk.String("officia"),
        MaxRecords: sdk.String("voluptas"),
        RequestBody: []byte("numquam"),
        Version: operations.POSTDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeSourceRegions

<p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeSourceRegions(ctx, operations.POSTDescribeSourceRegionsRequest{
        Action: operations.POSTDescribeSourceRegionsActionEnumDescribeSourceRegions,
        Marker: sdk.String("laudantium"),
        MaxRecords: sdk.String("incidunt"),
        RequestBody: []byte("quasi"),
        Version: operations.POSTDescribeSourceRegionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeValidDBInstanceModifications

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTDescribeValidDBInstanceModifications(ctx, operations.POSTDescribeValidDBInstanceModificationsRequest{
        Action: operations.POSTDescribeValidDBInstanceModificationsActionEnumDescribeValidDbInstanceModifications,
        RequestBody: []byte("cupiditate"),
        Version: operations.POSTDescribeValidDBInstanceModificationsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTDownloadDBLogFilePortion(ctx, operations.POSTDownloadDBLogFilePortionRequest{
        Action: operations.POSTDownloadDBLogFilePortionActionEnumDownloadDbLogFilePortion,
        Marker: sdk.String("magni"),
        NumberOfLines: sdk.String("inventore"),
        RequestBody: []byte("fuga"),
        Version: operations.POSTDownloadDBLogFilePortionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTFailoverDBCluster(ctx, operations.POSTFailoverDBClusterRequest{
        Action: operations.POSTFailoverDBClusterActionEnumFailoverDbCluster,
        RequestBody: []byte("maxime"),
        Version: operations.POSTFailoverDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTFailoverGlobalCluster

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTFailoverGlobalCluster(ctx, operations.POSTFailoverGlobalClusterRequest{
        Action: operations.POSTFailoverGlobalClusterActionEnumFailoverGlobalCluster,
        RequestBody: []byte("earum"),
        Version: operations.POSTFailoverGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListTagsForResource

<p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTListTagsForResource(ctx, operations.POSTListTagsForResourceRequest{
        Action: operations.POSTListTagsForResourceActionEnumListTagsForResource,
        RequestBody: []byte("quasi"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyActivityStream(ctx, operations.POSTModifyActivityStreamRequest{
        Action: operations.POSTModifyActivityStreamActionEnumModifyActivityStream,
        RequestBody: []byte("nemo"),
        Version: operations.POSTModifyActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyCertificates(ctx, operations.POSTModifyCertificatesRequest{
        Action: operations.POSTModifyCertificatesActionEnumModifyCertificates,
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTModifyCertificatesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTModifyCurrentDBClusterCapacity(ctx, operations.POSTModifyCurrentDBClusterCapacityRequest{
        Action: operations.POSTModifyCurrentDBClusterCapacityActionEnumModifyCurrentDbClusterCapacity,
        RequestBody: []byte("fuga"),
        Version: operations.POSTModifyCurrentDBClusterCapacityVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyCustomDBEngineVersion(ctx, operations.POSTModifyCustomDBEngineVersionRequest{
        Action: operations.POSTModifyCustomDBEngineVersionActionEnumModifyCustomDbEngineVersion,
        RequestBody: []byte("soluta"),
        Version: operations.POSTModifyCustomDBEngineVersionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBCluster

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBCluster(ctx, operations.POSTModifyDBClusterRequest{
        Action: operations.POSTModifyDBClusterActionEnumModifyDbCluster,
        RequestBody: []byte("neque"),
        Version: operations.POSTModifyDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBClusterEndpoint

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBClusterEndpoint(ctx, operations.POSTModifyDBClusterEndpointRequest{
        Action: operations.POSTModifyDBClusterEndpointActionEnumModifyDbClusterEndpoint,
        RequestBody: []byte("magnam"),
        Version: operations.POSTModifyDBClusterEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBClusterParameterGroup

<p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBClusterParameterGroup(ctx, operations.POSTModifyDBClusterParameterGroupRequest{
        Action: operations.POSTModifyDBClusterParameterGroupActionEnumModifyDbClusterParameterGroup,
        RequestBody: []byte("porro"),
        Version: operations.POSTModifyDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBClusterSnapshotAttribute(ctx, operations.POSTModifyDBClusterSnapshotAttributeRequest{
        Action: operations.POSTModifyDBClusterSnapshotAttributeActionEnumModifyDbClusterSnapshotAttribute,
        RequestBody: []byte("vero"),
        Version: operations.POSTModifyDBClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.

### Example Usage

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
    res, err := s.SDK.POSTModifyDBInstance(ctx, operations.POSTModifyDBInstanceRequest{
        Action: operations.POSTModifyDBInstanceActionEnumModifyDbInstance,
        RequestBody: []byte("impedit"),
        Version: operations.POSTModifyDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBParameterGroup

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBParameterGroup(ctx, operations.POSTModifyDBParameterGroupRequest{
        Action: operations.POSTModifyDBParameterGroupActionEnumModifyDbParameterGroup,
        RequestBody: []byte("laborum"),
        Version: operations.POSTModifyDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBProxy

Changes the settings for an existing DB proxy.

### Example Usage

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
    res, err := s.SDK.POSTModifyDBProxy(ctx, operations.POSTModifyDBProxyRequest{
        Action: operations.POSTModifyDBProxyActionEnumModifyDbProxy,
        RequestBody: []byte("recusandae"),
        Version: operations.POSTModifyDBProxyVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

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
    res, err := s.SDK.POSTModifyDBProxyEndpoint(ctx, operations.POSTModifyDBProxyEndpointRequest{
        Action: operations.POSTModifyDBProxyEndpointActionEnumModifyDbProxyEndpoint,
        RequestBody: []byte("deleniti"),
        Version: operations.POSTModifyDBProxyEndpointVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

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
    res, err := s.SDK.POSTModifyDBProxyTargetGroup(ctx, operations.POSTModifyDBProxyTargetGroupRequest{
        Action: operations.POSTModifyDBProxyTargetGroupActionEnumModifyDbProxyTargetGroup,
        RequestBody: []byte("ipsam"),
        Version: operations.POSTModifyDBProxyTargetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBSnapshot(ctx, operations.POSTModifyDBSnapshotRequest{
        Action: operations.POSTModifyDBSnapshotActionEnumModifyDbSnapshot,
        RequestBody: []byte("consectetur"),
        Version: operations.POSTModifyDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyDBSnapshotAttribute(ctx, operations.POSTModifyDBSnapshotAttributeRequest{
        Action: operations.POSTModifyDBSnapshotAttributeActionEnumModifyDbSnapshotAttribute,
        RequestBody: []byte("nemo"),
        Version: operations.POSTModifyDBSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

### Example Usage

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
    res, err := s.SDK.POSTModifyDBSubnetGroup(ctx, operations.POSTModifyDBSubnetGroupRequest{
        Action: operations.POSTModifyDBSubnetGroupActionEnumModifyDbSubnetGroup,
        RequestBody: []byte("magni"),
        Version: operations.POSTModifyDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyEventSubscription

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

### Example Usage

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
    res, err := s.SDK.POSTModifyEventSubscription(ctx, operations.POSTModifyEventSubscriptionRequest{
        Action: operations.POSTModifyEventSubscriptionActionEnumModifyEventSubscription,
        RequestBody: []byte("et"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyGlobalCluster

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTModifyGlobalCluster(ctx, operations.POSTModifyGlobalClusterRequest{
        Action: operations.POSTModifyGlobalClusterActionEnumModifyGlobalCluster,
        RequestBody: []byte("nostrum"),
        Version: operations.POSTModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyOptionGroup

Modifies an existing option group.

### Example Usage

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
    res, err := s.SDK.POSTModifyOptionGroup(ctx, operations.POSTModifyOptionGroupRequest{
        Action: operations.POSTModifyOptionGroupActionEnumModifyOptionGroup,
        RequestBody: []byte("quos"),
        Version: operations.POSTModifyOptionGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

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
    res, err := s.SDK.POSTPromoteReadReplica(ctx, operations.POSTPromoteReadReplicaRequest{
        Action: operations.POSTPromoteReadReplicaActionEnumPromoteReadReplica,
        RequestBody: []byte("totam"),
        Version: operations.POSTPromoteReadReplicaVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPromoteReadReplicaDBCluster

Promotes a read replica DB cluster to a standalone DB cluster.

### Example Usage

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
    res, err := s.SDK.POSTPromoteReadReplicaDBCluster(ctx, operations.POSTPromoteReadReplicaDBClusterRequest{
        Action: operations.POSTPromoteReadReplicaDBClusterActionEnumPromoteReadReplicaDbCluster,
        RequestBody: []byte("assumenda"),
        Version: operations.POSTPromoteReadReplicaDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPurchaseReservedDBInstancesOffering

Purchases a reserved DB instance offering.

### Example Usage

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
    res, err := s.SDK.POSTPurchaseReservedDBInstancesOffering(ctx, operations.POSTPurchaseReservedDBInstancesOfferingRequest{
        Action: operations.POSTPurchaseReservedDBInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering,
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTRebootDBCluster(ctx, operations.POSTRebootDBClusterRequest{
        Action: operations.POSTRebootDBClusterActionEnumRebootDbCluster,
        RequestBody: []byte("corporis"),
        Version: operations.POSTRebootDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

### Example Usage

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
    res, err := s.SDK.POSTRebootDBInstance(ctx, operations.POSTRebootDBInstanceRequest{
        Action: operations.POSTRebootDBInstanceActionEnumRebootDbInstance,
        RequestBody: []byte("fuga"),
        Version: operations.POSTRebootDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

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
    res, err := s.SDK.POSTRegisterDBProxyTargets(ctx, operations.POSTRegisterDBProxyTargetsRequest{
        Action: operations.POSTRegisterDBProxyTargetsActionEnumRegisterDbProxyTargets,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTRegisterDBProxyTargetsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRemoveFromGlobalCluster

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTRemoveFromGlobalCluster(ctx, operations.POSTRemoveFromGlobalClusterRequest{
        Action: operations.POSTRemoveFromGlobalClusterActionEnumRemoveFromGlobalCluster,
        RequestBody: []byte("similique"),
        Version: operations.POSTRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRemoveRoleFromDBCluster

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTRemoveRoleFromDBCluster(ctx, operations.POSTRemoveRoleFromDBClusterRequest{
        Action: operations.POSTRemoveRoleFromDBClusterActionEnumRemoveRoleFromDbCluster,
        RequestBody: []byte("cupiditate"),
        Version: operations.POSTRemoveRoleFromDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

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
    res, err := s.SDK.POSTRemoveRoleFromDBInstance(ctx, operations.POSTRemoveRoleFromDBInstanceRequest{
        Action: operations.POSTRemoveRoleFromDBInstanceActionEnumRemoveRoleFromDbInstance,
        RequestBody: []byte("optio"),
        Version: operations.POSTRemoveRoleFromDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing RDS event notification subscription.

### Example Usage

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
    res, err := s.SDK.POSTRemoveSourceIdentifierFromSubscription(ctx, operations.POSTRemoveSourceIdentifierFromSubscriptionRequest{
        Action: operations.POSTRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription,
        RequestBody: []byte("placeat"),
        Version: operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRemoveTagsFromResource

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTRemoveTagsFromResource(ctx, operations.POSTRemoveTagsFromResourceRequest{
        Action: operations.POSTRemoveTagsFromResourceActionEnumRemoveTagsFromResource,
        RequestBody: []byte("magnam"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTResetDBClusterParameterGroup

<p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTResetDBClusterParameterGroup(ctx, operations.POSTResetDBClusterParameterGroupRequest{
        Action: operations.POSTResetDBClusterParameterGroupActionEnumResetDbClusterParameterGroup,
        RequestBody: []byte("totam"),
        Version: operations.POSTResetDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResetDBParameterGroup

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.

### Example Usage

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
    res, err := s.SDK.POSTResetDBParameterGroup(ctx, operations.POSTResetDBParameterGroupRequest{
        Action: operations.POSTResetDBParameterGroupActionEnumResetDbParameterGroup,
        RequestBody: []byte("est"),
        Version: operations.POSTResetDBParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBClusterFromS3

<p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTRestoreDBClusterFromS3(ctx, operations.POSTRestoreDBClusterFromS3Request{
        Action: operations.POSTRestoreDBClusterFromS3ActionEnumRestoreDbClusterFromS3,
        RequestBody: []byte("nemo"),
        Version: operations.POSTRestoreDBClusterFromS3VersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBClusterFromSnapshot

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTRestoreDBClusterFromSnapshot(ctx, operations.POSTRestoreDBClusterFromSnapshotRequest{
        Action: operations.POSTRestoreDBClusterFromSnapshotActionEnumRestoreDbClusterFromSnapshot,
        RequestBody: []byte("dolores"),
        Version: operations.POSTRestoreDBClusterFromSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBClusterToPointInTime

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.POSTRestoreDBClusterToPointInTime(ctx, operations.POSTRestoreDBClusterToPointInTimeRequest{
        Action: operations.POSTRestoreDBClusterToPointInTimeActionEnumRestoreDbClusterToPointInTime,
        RequestBody: []byte("optio"),
        Version: operations.POSTRestoreDBClusterToPointInTimeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBInstanceFromDBSnapshot

<p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTRestoreDBInstanceFromDBSnapshot(ctx, operations.POSTRestoreDBInstanceFromDBSnapshotRequest{
        Action: operations.POSTRestoreDBInstanceFromDBSnapshotActionEnumRestoreDbInstanceFromDbSnapshot,
        RequestBody: []byte("quam"),
        Version: operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBInstanceFromS3

<p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

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
    res, err := s.SDK.POSTRestoreDBInstanceFromS3(ctx, operations.POSTRestoreDBInstanceFromS3Request{
        Action: operations.POSTRestoreDBInstanceFromS3ActionEnumRestoreDbInstanceFromS3,
        RequestBody: []byte("cum"),
        Version: operations.POSTRestoreDBInstanceFromS3VersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBInstanceToPointInTime

<p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.POSTRestoreDBInstanceToPointInTime(ctx, operations.POSTRestoreDBInstanceToPointInTimeRequest{
        Action: operations.POSTRestoreDBInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime,
        RequestBody: []byte("consequuntur"),
        Version: operations.POSTRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTRevokeDBSecurityGroupIngress(ctx, operations.POSTRevokeDBSecurityGroupIngressRequest{
        Action: operations.POSTRevokeDBSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress,
        RequestBody: []byte("laboriosam"),
        Version: operations.POSTRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

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
    res, err := s.SDK.POSTStartActivityStream(ctx, operations.POSTStartActivityStreamRequest{
        Action: operations.POSTStartActivityStreamActionEnumStartActivityStream,
        RequestBody: []byte("doloribus"),
        Version: operations.POSTStartActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartDBCluster

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTStartDBCluster(ctx, operations.POSTStartDBClusterRequest{
        Action: operations.POSTStartDBClusterActionEnumStartDbCluster,
        RequestBody: []byte("molestias"),
        Version: operations.POSTStartDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTStartDBInstance(ctx, operations.POSTStartDBInstanceRequest{
        Action: operations.POSTStartDBInstanceActionEnumStartDbInstance,
        RequestBody: []byte("tempore"),
        Version: operations.POSTStartDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTStartDBInstanceAutomatedBackupsReplication(ctx, operations.POSTStartDBInstanceAutomatedBackupsReplicationRequest{
        Action: operations.POSTStartDBInstanceAutomatedBackupsReplicationActionEnumStartDbInstanceAutomatedBackupsReplication,
        RequestBody: []byte("adipisci"),
        Version: operations.POSTStartDBInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTStartExportTask(ctx, operations.POSTStartExportTaskRequest{
        Action: operations.POSTStartExportTaskActionEnumStartExportTask,
        RequestBody: []byte("cupiditate"),
        Version: operations.POSTStartExportTaskVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTStopActivityStream(ctx, operations.POSTStopActivityStreamRequest{
        Action: operations.POSTStopActivityStreamActionEnumStopActivityStream,
        RequestBody: []byte("asperiores"),
        Version: operations.POSTStopActivityStreamVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStopDBCluster

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTStopDBCluster(ctx, operations.POSTStopDBClusterRequest{
        Action: operations.POSTStopDBClusterActionEnumStopDbCluster,
        RequestBody: []byte("exercitationem"),
        Version: operations.POSTStopDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

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
    res, err := s.SDK.POSTStopDBInstance(ctx, operations.POSTStopDBInstanceRequest{
        Action: operations.POSTStopDBInstanceActionEnumStopDbInstance,
        RequestBody: []byte("blanditiis"),
        Version: operations.POSTStopDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

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
    res, err := s.SDK.POSTStopDBInstanceAutomatedBackupsReplication(ctx, operations.POSTStopDBInstanceAutomatedBackupsReplicationRequest{
        Action: operations.POSTStopDBInstanceAutomatedBackupsReplicationActionEnumStopDbInstanceAutomatedBackupsReplication,
        RequestBody: []byte("facilis"),
        Version: operations.POSTStopDBInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.POSTSwitchoverBlueGreenDeployment(ctx, operations.POSTSwitchoverBlueGreenDeploymentRequest{
        Action: operations.POSTSwitchoverBlueGreenDeploymentActionEnumSwitchoverBlueGreenDeployment,
        RequestBody: []byte("rerum"),
        Version: operations.POSTSwitchoverBlueGreenDeploymentVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

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
    res, err := s.SDK.POSTSwitchoverReadReplica(ctx, operations.POSTSwitchoverReadReplicaRequest{
        Action: operations.POSTSwitchoverReadReplicaActionEnumSwitchoverReadReplica,
        RequestBody: []byte("eligendi"),
        Version: operations.POSTSwitchoverReadReplicaVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
