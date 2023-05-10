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

## getAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddRoleToDBInstanceRequest();
    $request->action = GETAddRoleToDBInstanceActionEnum::ADD_ROLE_TO_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'minus';
    $request->featureName = 'placeat';
    $request->roleArn = 'voluptatum';
    $request->version = GETAddRoleToDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getAddRoleToDBInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddSourceIdentifierToSubscription

Adds a source identifier to an existing RDS event notification subscription.

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
    $request->sourceIdentifier = 'veritatis';
    $request->subscriptionName = 'deserunt';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

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
    $request->applyAction = 'at';
    $request->optInType = 'maiores';
    $request->resourceIdentifier = 'molestiae';
    $request->version = GETApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeDBSecurityGroupIngressRequest();
    $request->action = GETAuthorizeDBSecurityGroupIngressActionEnum::AUTHORIZE_DB_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'nam';
    $request->dbSecurityGroupName = 'officia';
    $request->ec2SecurityGroupId = 'occaecati';
    $request->ec2SecurityGroupName = 'fugit';
    $request->ec2SecurityGroupOwnerId = 'deleniti';
    $request->version = GETAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getAuthorizeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBacktrackDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBacktrackDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBacktrackDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBacktrackDBClusterRequest();
    $request->action = GETBacktrackDBClusterActionEnum::BACKTRACK_DB_CLUSTER;
    $request->backtrackTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T09:42:46.236Z');
    $request->dbClusterIdentifier = 'cum';
    $request->force = false;
    $request->useEarliestTimeOnPointInTimeUnavailable = false;
    $request->version = GETBacktrackDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getBacktrackDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelExportTaskActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelExportTaskVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCancelExportTaskRequest();
    $request->action = GETCancelExportTaskActionEnum::CANCEL_EXPORT_TASK;
    $request->exportTaskIdentifier = 'sed';
    $request->version = GETCancelExportTaskVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->getCancelExportTask($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateGlobalCluster

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
    $request->databaseName = 'in';
    $request->deletionProtection = false;
    $request->engine = 'corporis';
    $request->engineVersion = 'iste';
    $request->globalClusterIdentifier = 'iure';
    $request->sourceDBClusterIdentifier = 'saepe';
    $request->storageEncrypted = false;
    $request->version = GETCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteBlueGreenDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteBlueGreenDeploymentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteBlueGreenDeploymentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteBlueGreenDeploymentRequest();
    $request->action = GETDeleteBlueGreenDeploymentActionEnum::DELETE_BLUE_GREEN_DEPLOYMENT;
    $request->blueGreenDeploymentIdentifier = 'dolores';
    $request->deleteTarget = false;
    $request->version = GETDeleteBlueGreenDeploymentVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getDeleteBlueGreenDeployment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomDBEngineVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomDBEngineVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomDBEngineVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCustomDBEngineVersionRequest();
    $request->action = GETDeleteCustomDBEngineVersionActionEnum::DELETE_CUSTOM_DB_ENGINE_VERSION;
    $request->engine = 'minima';
    $request->engineVersion = 'excepturi';
    $request->version = GETDeleteCustomDBEngineVersionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDeleteCustomDBEngineVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->dbClusterIdentifier = 'dolorem';
    $request->finalDBSnapshotIdentifier = 'culpa';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterEndpoint

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->getDeleteDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterParameterGroup

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->dbClusterParameterGroupName = 'enim';
    $request->version = GETDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->getDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->dbClusterSnapshotIdentifier = 'aut';
    $request->version = GETDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

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
    $request->dbInstanceIdentifier = 'vero';
    $request->deleteAutomatedBackups = false;
    $request->finalDBSnapshotIdentifier = 'nihil';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceAutomatedBackupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceAutomatedBackupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceAutomatedBackupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBInstanceAutomatedBackupRequest();
    $request->action = GETDeleteDBInstanceAutomatedBackupActionEnum::DELETE_DB_INSTANCE_AUTOMATED_BACKUP;
    $request->dbInstanceAutomatedBackupsArn = 'doloremque';
    $request->dbiResourceId = 'reprehenderit';
    $request->version = GETDeleteDBInstanceAutomatedBackupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDeleteDBInstanceAutomatedBackup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBParameterGroup

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

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
    $request->dbParameterGroupName = 'harum';
    $request->version = GETDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBProxyRequest();
    $request->action = GETDeleteDBProxyActionEnum::DELETE_DB_PROXY;
    $request->dbProxyName = 'molestias';
    $request->version = GETDeleteDBProxyVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getDeleteDBProxy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBProxyEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBProxyEndpointRequest();
    $request->action = GETDeleteDBProxyEndpointActionEnum::DELETE_DB_PROXY_ENDPOINT;
    $request->dbProxyEndpointName = 'repudiandae';
    $request->version = GETDeleteDBProxyEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getDeleteDBProxyEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSecurityGroupRequest();
    $request->action = GETDeleteDBSecurityGroupActionEnum::DELETE_DB_SECURITY_GROUP;
    $request->dbSecurityGroupName = 'quibusdam';
    $request->version = GETDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getDeleteDBSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSnapshotRequest();
    $request->action = GETDeleteDBSnapshotActionEnum::DELETE_DB_SNAPSHOT;
    $request->dbSnapshotIdentifier = 'aliquid';
    $request->version = GETDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getDeleteDBSnapshot($request);

    if ($response->body !== null) {
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
    $request->dbSubnetGroupName = 'fugit';
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEventSubscription

Deletes an RDS event notification subscription.

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
    $request->subscriptionName = 'eum';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGlobalCluster

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->globalClusterIdentifier = 'officia';
    $request->version = GETDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteOptionGroup

Deletes an existing option group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteOptionGroupRequest();
    $request->action = GETDeleteOptionGroupActionEnum::DELETE_OPTION_GROUP;
    $request->optionGroupName = 'maiores';
    $request->version = GETDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDeleteOptionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterDBProxyTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterDBProxyTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterDBProxyTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeregisterDBProxyTargetsRequest();
    $request->action = GETDeregisterDBProxyTargetsActionEnum::DEREGISTER_DB_PROXY_TARGETS;
    $request->dbClusterIdentifiers = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->dbInstanceIdentifiers = [
        'accusamus',
        'delectus',
    ];
    $request->dbProxyName = 'quidem';
    $request->targetGroupName = 'provident';
    $request->version = GETDeregisterDBProxyTargetsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->getDeregisterDBProxyTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountAttributesRequest();
    $request->action = GETDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->version = GETDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

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
    $request->dbClusterSnapshotIdentifier = 'magnam';
    $request->version = GETDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBSnapshotAttributesRequest();
    $request->action = GETDescribeDBSnapshotAttributesActionEnum::DESCRIBE_DB_SNAPSHOT_ATTRIBUTES;
    $request->dbSnapshotIdentifier = 'eum';
    $request->version = GETDescribeDBSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->getDescribeDBSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeValidDBInstanceModifications

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

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
    $request->dbInstanceIdentifier = 'provident';
    $request->version = GETDescribeValidDBInstanceModificationsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->getDescribeValidDBInstanceModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDownloadDBLogFilePortionRequest();
    $request->action = GETDownloadDBLogFilePortionActionEnum::DOWNLOAD_DB_LOG_FILE_PORTION;
    $request->dbInstanceIdentifier = 'eum';
    $request->logFileName = 'dolor';
    $request->marker = 'necessitatibus';
    $request->numberOfLines = 141264;
    $request->version = GETDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->getDownloadDBLogFilePortion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->dbClusterIdentifier = 'deleniti';
    $request->targetDBInstanceIdentifier = 'facilis';
    $request->version = GETFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverGlobalCluster

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

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
    $request->globalClusterIdentifier = 'repellat';
    $request->targetDbClusterIdentifier = 'quibusdam';
    $request->version = GETFailoverGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getFailoverGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyActivityStreamAuditPolicyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyActivityStreamRequest();
    $request->action = GETModifyActivityStreamActionEnum::MODIFY_ACTIVITY_STREAM;
    $request->auditPolicyState = GETModifyActivityStreamAuditPolicyStateEnum::LOCKED;
    $request->resourceArn = 'sunt';
    $request->version = GETModifyActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getModifyActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyCertificatesRequest();
    $request->action = GETModifyCertificatesActionEnum::MODIFY_CERTIFICATES;
    $request->certificateIdentifier = 'ea';
    $request->removeCustomerOverride = false;
    $request->version = GETModifyCertificatesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->getModifyCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCurrentDBClusterCapacityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCurrentDBClusterCapacityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCurrentDBClusterCapacityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyCurrentDBClusterCapacityRequest();
    $request->action = GETModifyCurrentDBClusterCapacityActionEnum::MODIFY_CURRENT_DB_CLUSTER_CAPACITY;
    $request->capacity = 722056;
    $request->dbClusterIdentifier = 'eaque';
    $request->secondsBeforeTimeout = 866383;
    $request->timeoutAction = 'nemo';
    $request->version = GETModifyCurrentDBClusterCapacityVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getModifyCurrentDBClusterCapacity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCustomDBEngineVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCustomDBEngineVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCustomDBEngineVersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCustomDBEngineVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyCustomDBEngineVersionRequest();
    $request->action = GETModifyCustomDBEngineVersionActionEnum::MODIFY_CUSTOM_DB_ENGINE_VERSION;
    $request->description = 'hic';
    $request->engine = 'libero';
    $request->engineVersion = 'nobis';
    $request->status = GETModifyCustomDBEngineVersionStatusEnum::AVAILABLE;
    $request->version = GETModifyCustomDBEngineVersionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getModifyCustomDBEngineVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBCluster

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterScalingConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterServerlessV2ScalingConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBClusterRequest();
    $request->action = GETModifyDBClusterActionEnum::MODIFY_DB_CLUSTER;
    $request->allocatedStorage = 18521;
    $request->allowEngineModeChange = false;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->backtrackWindow = 170986;
    $request->backupRetentionPeriod = 793698;
    $request->cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration();
    $request->cloudwatchLogsExportConfiguration->disableLogTypes = [
        'dolor',
        'vero',
    ];
    $request->cloudwatchLogsExportConfiguration->enableLogTypes = [
        'hic',
        'recusandae',
    ];
    $request->copyTagsToSnapshot = false;
    $request->dbClusterIdentifier = 'omnis';
    $request->dbClusterInstanceClass = 'facilis';
    $request->dbClusterParameterGroupName = 'perspiciatis';
    $request->dbInstanceParameterGroupName = 'voluptatem';
    $request->deletionProtection = false;
    $request->domain = 'porro';
    $request->domainIAMRoleName = 'consequuntur';
    $request->enableGlobalWriteForwarding = false;
    $request->enableHttpEndpoint = false;
    $request->enableIAMDatabaseAuthentication = false;
    $request->enablePerformanceInsights = false;
    $request->engineMode = 'blanditiis';
    $request->engineVersion = 'error';
    $request->iops = 50370;
    $request->manageMasterUserPassword = false;
    $request->masterUserPassword = 'occaecati';
    $request->masterUserSecretKmsKeyId = 'rerum';
    $request->monitoringInterval = 237893;
    $request->monitoringRoleArn = 'asperiores';
    $request->networkType = 'earum';
    $request->newDBClusterIdentifier = 'modi';
    $request->optionGroupName = 'iste';
    $request->performanceInsightsKMSKeyId = 'dolorum';
    $request->performanceInsightsRetentionPeriod = 535633;
    $request->port = 864282;
    $request->preferredBackupWindow = 'provident';
    $request->preferredMaintenanceWindow = 'nobis';
    $request->rotateMasterUserPassword = false;
    $request->scalingConfiguration = new GETModifyDBClusterScalingConfiguration();
    $request->scalingConfiguration->autoPause = false;
    $request->scalingConfiguration->maxCapacity = 730122;
    $request->scalingConfiguration->minCapacity = 964490;
    $request->scalingConfiguration->secondsBeforeTimeout = 311945;
    $request->scalingConfiguration->secondsUntilAutoPause = 554242;
    $request->scalingConfiguration->timeoutAction = 'aliquid';
    $request->serverlessV2ScalingConfiguration = new GETModifyDBClusterServerlessV2ScalingConfiguration();
    $request->serverlessV2ScalingConfiguration->maxCapacity = 2123.9;
    $request->serverlessV2ScalingConfiguration->minCapacity = 2098.43;
    $request->storageType = 'dolor';
    $request->version = GETModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->vpcSecurityGroupIds = [
        'ipsum',
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBClusterEndpoint

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->dbClusterEndpointIdentifier = 'dolorum';
    $request->endpointType = 'numquam';
    $request->excludedMembers = [
        'ipsa',
    ];
    $request->staticMembers = [
        'iure',
    ];
    $request->version = GETModifyDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getModifyDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

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
    $request->attributeName = 'eos';
    $request->dbClusterSnapshotIdentifier = 'atque';
    $request->valuesToAdd = [
        'fugiat',
    ];
    $request->valuesToRemove = [
        'soluta',
    ];
    $request->version = GETModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBProxyEndpointRequest();
    $request->action = GETModifyDBProxyEndpointActionEnum::MODIFY_DB_PROXY_ENDPOINT;
    $request->dbProxyEndpointName = 'distinctio';
    $request->newDBProxyEndpointName = 'asperiores';
    $request->version = GETModifyDBProxyEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->vpcSecurityGroupIds = [
        'ipsum',
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getModifyDBProxyEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyTargetGroupConnectionPoolConfig;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBProxyTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBProxyTargetGroupRequest();
    $request->action = GETModifyDBProxyTargetGroupActionEnum::MODIFY_DB_PROXY_TARGET_GROUP;
    $request->connectionPoolConfig = new GETModifyDBProxyTargetGroupConnectionPoolConfig();
    $request->connectionPoolConfig->connectionBorrowTimeout = 881586;
    $request->connectionPoolConfig->initQuery = 'ad';
    $request->connectionPoolConfig->maxConnectionsPercent = 904425;
    $request->connectionPoolConfig->maxIdleConnectionsPercent = 383464;
    $request->connectionPoolConfig->sessionPinningFilters = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->dbProxyName = 'totam';
    $request->newName = 'similique';
    $request->targetGroupName = 'alias';
    $request->version = GETModifyDBProxyTargetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getModifyDBProxyTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBSnapshotRequest();
    $request->action = GETModifyDBSnapshotActionEnum::MODIFY_DB_SNAPSHOT;
    $request->dbSnapshotIdentifier = 'dolorum';
    $request->engineVersion = 'a';
    $request->optionGroupName = 'esse';
    $request->version = GETModifyDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->getModifyDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotAttributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotAttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSnapshotAttributeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBSnapshotAttributeRequest();
    $request->action = GETModifyDBSnapshotAttributeActionEnum::MODIFY_DB_SNAPSHOT_ATTRIBUTE;
    $request->attributeName = 'accusamus';
    $request->dbSnapshotIdentifier = 'numquam';
    $request->valuesToAdd = [
        'dolorem',
        'sapiente',
    ];
    $request->valuesToRemove = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->version = GETModifyDBSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getModifyDBSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
    $request->dbSubnetGroupDescription = 'ipsum';
    $request->dbSubnetGroupName = 'incidunt';
    $request->subnetIds = [
        'cupiditate',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEventSubscription

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

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
        'dolores',
    ];
    $request->snsTopicArn = 'distinctio';
    $request->sourceType = 'facilis';
    $request->subscriptionName = 'aliquid';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->getModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyGlobalCluster

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->engineVersion = 'odio';
    $request->globalClusterIdentifier = 'sunt';
    $request->newGlobalClusterIdentifier = 'ullam';
    $request->version = GETModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->getModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPromoteReadReplicaRequest();
    $request->action = GETPromoteReadReplicaActionEnum::PROMOTE_READ_REPLICA;
    $request->backupRetentionPeriod = 903720;
    $request->dbInstanceIdentifier = 'ipsum';
    $request->preferredBackupWindow = 'veritatis';
    $request->version = GETPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getPromoteReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromoteReadReplicaDBCluster

Promotes a read replica DB cluster to a standalone DB cluster.

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
    $request->dbClusterIdentifier = 'dolore';
    $request->version = GETPromoteReadReplicaDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->getPromoteReadReplicaDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebootDBClusterRequest();
    $request->action = GETRebootDBClusterActionEnum::REBOOT_DB_CLUSTER;
    $request->dbClusterIdentifier = 'itaque';
    $request->version = GETRebootDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getRebootDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

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
    $request->dbInstanceIdentifier = 'cupiditate';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->getRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterDBProxyTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterDBProxyTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterDBProxyTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRegisterDBProxyTargetsRequest();
    $request->action = GETRegisterDBProxyTargetsActionEnum::REGISTER_DB_PROXY_TARGETS;
    $request->dbClusterIdentifiers = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->dbInstanceIdentifiers = [
        'consectetur',
        'vero',
    ];
    $request->dbProxyName = 'tenetur';
    $request->targetGroupName = 'dignissimos';
    $request->version = GETRegisterDBProxyTargetsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getRegisterDBProxyTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveFromGlobalCluster

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->dbClusterIdentifier = 'ducimus';
    $request->globalClusterIdentifier = 'dolore';
    $request->version = GETRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveRoleFromDBCluster

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->dbClusterIdentifier = 'exercitationem';
    $request->featureName = 'nulla';
    $request->roleArn = 'fugit';
    $request->version = GETRemoveRoleFromDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getRemoveRoleFromDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveRoleFromDBInstanceRequest();
    $request->action = GETRemoveRoleFromDBInstanceActionEnum::REMOVE_ROLE_FROM_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'officia';
    $request->featureName = 'tempora';
    $request->roleArn = 'ipsam';
    $request->version = GETRemoveRoleFromDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getRemoveRoleFromDBInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing RDS event notification subscription.

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
    $request->sourceIdentifier = 'laudantium';
    $request->subscriptionName = 'dicta';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTagsFromResource

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->resourceName = 'nostrum';
    $request->tagKeys = [
        'quisquam',
        'saepe',
        'ea',
        'impedit',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeDBSecurityGroupIngressRequest();
    $request->action = GETRevokeDBSecurityGroupIngressActionEnum::REVOKE_DB_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'consectetur';
    $request->dbSecurityGroupName = 'recusandae';
    $request->ec2SecurityGroupId = 'aspernatur';
    $request->ec2SecurityGroupName = 'minima';
    $request->ec2SecurityGroupOwnerId = 'eaque';
    $request->version = GETRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->getRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartActivityStreamModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartActivityStreamRequest();
    $request->action = GETStartActivityStreamActionEnum::START_ACTIVITY_STREAM;
    $request->applyImmediately = false;
    $request->engineNativeAuditFieldsIncluded = false;
    $request->kmsKeyId = 'fugit';
    $request->mode = GETStartActivityStreamModeEnum::ASYNC;
    $request->resourceArn = 'inventore';
    $request->version = GETStartActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getStartActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartDBCluster

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->dbClusterIdentifier = 'autem';
    $request->version = GETStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartDBInstanceRequest();
    $request->action = GETStartDBInstanceActionEnum::START_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'tempora';
    $request->version = GETStartDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->getStartDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceAutomatedBackupsReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceAutomatedBackupsReplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartDBInstanceAutomatedBackupsReplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartDBInstanceAutomatedBackupsReplicationRequest();
    $request->action = GETStartDBInstanceAutomatedBackupsReplicationActionEnum::START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION;
    $request->backupRetentionPeriod = 262118;
    $request->kmsKeyId = 'esse';
    $request->preSignedUrl = 'esse';
    $request->sourceDBInstanceArn = 'rem';
    $request->version = GETStartDBInstanceAutomatedBackupsReplicationVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getStartDBInstanceAutomatedBackupsReplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartExportTaskActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartExportTaskVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartExportTaskRequest();
    $request->action = GETStartExportTaskActionEnum::START_EXPORT_TASK;
    $request->exportOnly = [
        'eos',
        'praesentium',
        'quisquam',
        'veritatis',
    ];
    $request->exportTaskIdentifier = 'ipsa';
    $request->iamRoleArn = 'id';
    $request->kmsKeyId = 'quidem';
    $request->s3BucketName = 'neque';
    $request->s3Prefix = 'quo';
    $request->sourceArn = 'illum';
    $request->version = GETStartExportTaskVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getStartExportTask($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopActivityStreamRequest();
    $request->action = GETStopActivityStreamActionEnum::STOP_ACTIVITY_STREAM;
    $request->applyImmediately = false;
    $request->resourceArn = 'consequatur';
    $request->version = GETStopActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getStopActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopDBCluster

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->dbClusterIdentifier = 'recusandae';
    $request->version = GETStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getStopDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopDBInstanceRequest();
    $request->action = GETStopDBInstanceActionEnum::STOP_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'accusamus';
    $request->dbSnapshotIdentifier = 'aliquam';
    $request->version = GETStopDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getStopDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceAutomatedBackupsReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceAutomatedBackupsReplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopDBInstanceAutomatedBackupsReplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopDBInstanceAutomatedBackupsReplicationRequest();
    $request->action = GETStopDBInstanceAutomatedBackupsReplicationActionEnum::STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION;
    $request->sourceDBInstanceArn = 'accusantium';
    $request->version = GETStopDBInstanceAutomatedBackupsReplicationVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->getStopDBInstanceAutomatedBackupsReplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverBlueGreenDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverBlueGreenDeploymentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverBlueGreenDeploymentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSwitchoverBlueGreenDeploymentRequest();
    $request->action = GETSwitchoverBlueGreenDeploymentActionEnum::SWITCHOVER_BLUE_GREEN_DEPLOYMENT;
    $request->blueGreenDeploymentIdentifier = 'fuga';
    $request->switchoverTimeout = 649463;
    $request->version = GETSwitchoverBlueGreenDeploymentVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getSwitchoverBlueGreenDeployment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSwitchoverReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSwitchoverReadReplicaRequest();
    $request->action = GETSwitchoverReadReplicaActionEnum::SWITCHOVER_READ_REPLICA;
    $request->dbInstanceIdentifier = 'consequuntur';
    $request->version = GETSwitchoverReadReplicaVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getSwitchoverReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddRoleToDBCluster

Associates an Identity and Access Management (IAM) role with a DB cluster.

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
    $request->requestBody = 'eveniet';
    $request->version = POSTAddRoleToDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postAddRoleToDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddRoleToDBInstance

<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddRoleToDBInstanceRequest();
    $request->action = POSTAddRoleToDBInstanceActionEnum::ADD_ROLE_TO_DB_INSTANCE;
    $request->requestBody = 'quasi';
    $request->version = POSTAddRoleToDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postAddRoleToDBInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddSourceIdentifierToSubscription

Adds a source identifier to an existing RDS event notification subscription.

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
    $request->requestBody = 'distinctio';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTagsToResource

<p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>

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
    $request->requestBody = 'consequatur';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'provident';

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
    $request->requestBody = 'a';
    $request->version = POSTApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->postApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeDBSecurityGroupIngress

<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeDBSecurityGroupIngressRequest();
    $request->action = POSTAuthorizeDBSecurityGroupIngressActionEnum::AUTHORIZE_DB_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'pariatur';
    $request->version = POSTAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postAuthorizeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBacktrackDBCluster

<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBacktrackDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBacktrackDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBacktrackDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBacktrackDBClusterRequest();
    $request->action = POSTBacktrackDBClusterActionEnum::BACKTRACK_DB_CLUSTER;
    $request->requestBody = 'quasi';
    $request->version = POSTBacktrackDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postBacktrackDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCancelExportTask

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelExportTaskActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelExportTaskVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCancelExportTaskRequest();
    $request->action = POSTCancelExportTaskActionEnum::CANCEL_EXPORT_TASK;
    $request->requestBody = 'in';
    $request->version = POSTCancelExportTaskVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postCancelExportTask($request);

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
    $request->requestBody = 'dicta';
    $request->version = POSTCopyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->postCopyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBClusterSnapshot

<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'quibusdam';
    $request->version = POSTCopyDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'tenetur';

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
    $request->requestBody = 'quasi';
    $request->version = POSTCopyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postCopyDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBSnapshot

<p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyDBSnapshotRequest();
    $request->action = POSTCopyDBSnapshotActionEnum::COPY_DB_SNAPSHOT;
    $request->requestBody = 'adipisci';
    $request->version = POSTCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postCopyDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyOptionGroup

Copies the specified option group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyOptionGroupRequest();
    $request->action = POSTCopyOptionGroupActionEnum::COPY_OPTION_GROUP;
    $request->requestBody = 'mollitia';
    $request->version = POSTCopyOptionGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postCopyOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateBlueGreenDeployment

<p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateBlueGreenDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateBlueGreenDeploymentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateBlueGreenDeploymentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateBlueGreenDeploymentRequest();
    $request->action = POSTCreateBlueGreenDeploymentActionEnum::CREATE_BLUE_GREEN_DEPLOYMENT;
    $request->requestBody = 'impedit';
    $request->version = POSTCreateBlueGreenDeploymentVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postCreateBlueGreenDeployment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCustomDBEngineVersion

Creates a custom DB engine version (CEV).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomDBEngineVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomDBEngineVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomDBEngineVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCustomDBEngineVersionRequest();
    $request->action = POSTCreateCustomDBEngineVersionActionEnum::CREATE_CUSTOM_DB_ENGINE_VERSION;
    $request->requestBody = 'velit';
    $request->version = POSTCreateCustomDBEngineVersionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postCreateCustomDBEngineVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBCluster

<p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'repellendus';
    $request->version = POSTCreateDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postCreateDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterEndpoint

<p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'quaerat';
    $request->version = POSTCreateDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postCreateDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterParameterGroup

<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'suscipit';
    $request->version = POSTCreateDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postCreateDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterSnapshot

<p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'ducimus';
    $request->version = POSTCreateDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postCreateDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstance

<p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

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
    $request->requestBody = 'in';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postCreateDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstanceReadReplica

<p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBInstanceReadReplicaRequest();
    $request->action = POSTCreateDBInstanceReadReplicaActionEnum::CREATE_DB_INSTANCE_READ_REPLICA;
    $request->requestBody = 'cum';
    $request->version = POSTCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->postCreateDBInstanceReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBParameterGroup

<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

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
    $request->requestBody = 'suscipit';
    $request->version = POSTCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->postCreateDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBProxy

Creates a new DB proxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBProxyRequest();
    $request->action = POSTCreateDBProxyActionEnum::CREATE_DB_PROXY;
    $request->requestBody = 'adipisci';
    $request->version = POSTCreateDBProxyVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postCreateDBProxy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBProxyEndpoint

Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBProxyEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBProxyEndpointRequest();
    $request->action = POSTCreateDBProxyEndpointActionEnum::CREATE_DB_PROXY_ENDPOINT;
    $request->requestBody = 'corporis';
    $request->version = POSTCreateDBProxyEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postCreateDBProxyEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSecurityGroup

<p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSecurityGroupRequest();
    $request->action = POSTCreateDBSecurityGroupActionEnum::CREATE_DB_SECURITY_GROUP;
    $request->requestBody = 'similique';
    $request->version = POSTCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postCreateDBSecurityGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSnapshot

Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSnapshotRequest();
    $request->action = POSTCreateDBSnapshotActionEnum::CREATE_DB_SNAPSHOT;
    $request->requestBody = 'dolorum';
    $request->version = POSTCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->postCreateDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSubnetGroup

Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
    $request->requestBody = 'officiis';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postCreateDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEventSubscription

<p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>

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
    $request->requestBody = 'nesciunt';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'exercitationem';
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

<p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'sit';
    $request->version = POSTCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateOptionGroup

<p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateOptionGroupRequest();
    $request->action = POSTCreateOptionGroupActionEnum::CREATE_OPTION_GROUP;
    $request->requestBody = 'expedita';
    $request->version = POSTCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postCreateOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteBlueGreenDeployment

<p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteBlueGreenDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteBlueGreenDeploymentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteBlueGreenDeploymentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteBlueGreenDeploymentRequest();
    $request->action = POSTDeleteBlueGreenDeploymentActionEnum::DELETE_BLUE_GREEN_DEPLOYMENT;
    $request->requestBody = 'quidem';
    $request->version = POSTDeleteBlueGreenDeploymentVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->postDeleteBlueGreenDeployment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCustomDBEngineVersion

<p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomDBEngineVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomDBEngineVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomDBEngineVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCustomDBEngineVersionRequest();
    $request->action = POSTDeleteCustomDBEngineVersionActionEnum::DELETE_CUSTOM_DB_ENGINE_VERSION;
    $request->requestBody = 'illo';
    $request->version = POSTDeleteCustomDBEngineVersionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postDeleteCustomDBEngineVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBCluster

<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'eius';
    $request->version = POSTDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterEndpoint

<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'tempora';
    $request->version = POSTDeleteDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDeleteDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterParameterGroup

<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'facilis';
    $request->version = POSTDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterSnapshot

<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'error';
    $request->version = POSTDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBInstance

<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>

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
    $request->requestBody = 'saepe';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBInstanceAutomatedBackup

Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceAutomatedBackupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceAutomatedBackupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceAutomatedBackupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBInstanceAutomatedBackupRequest();
    $request->action = POSTDeleteDBInstanceAutomatedBackupActionEnum::DELETE_DB_INSTANCE_AUTOMATED_BACKUP;
    $request->requestBody = 'praesentium';
    $request->version = POSTDeleteDBInstanceAutomatedBackupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postDeleteDBInstanceAutomatedBackup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBParameterGroup

Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.

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
    $request->requestBody = 'debitis';
    $request->version = POSTDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBProxy

Deletes an existing DB proxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBProxyRequest();
    $request->action = POSTDeleteDBProxyActionEnum::DELETE_DB_PROXY;
    $request->requestBody = 'tempora';
    $request->version = POSTDeleteDBProxyVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postDeleteDBProxy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBProxyEndpoint

Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBProxyEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBProxyEndpointRequest();
    $request->action = POSTDeleteDBProxyEndpointActionEnum::DELETE_DB_PROXY_ENDPOINT;
    $request->requestBody = 'magnam';
    $request->version = POSTDeleteDBProxyEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postDeleteDBProxyEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSecurityGroup

<p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSecurityGroupRequest();
    $request->action = POSTDeleteDBSecurityGroupActionEnum::DELETE_DB_SECURITY_GROUP;
    $request->requestBody = 'corporis';
    $request->version = POSTDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postDeleteDBSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSnapshot

<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSnapshotRequest();
    $request->action = POSTDeleteDBSnapshotActionEnum::DELETE_DB_SNAPSHOT;
    $request->requestBody = 'saepe';
    $request->version = POSTDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postDeleteDBSnapshot($request);

    if ($response->body !== null) {
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
    $request->requestBody = 'architecto';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->postDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEventSubscription

Deletes an RDS event notification subscription.

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
    $request->requestBody = 'laboriosam';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGlobalCluster

<p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'repellendus';
    $request->version = POSTDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteOptionGroup

Deletes an existing option group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteOptionGroupRequest();
    $request->action = POSTDeleteOptionGroupActionEnum::DELETE_OPTION_GROUP;
    $request->requestBody = 'fuga';
    $request->version = POSTDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDeleteOptionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeregisterDBProxyTargets

Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterDBProxyTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterDBProxyTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterDBProxyTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeregisterDBProxyTargetsRequest();
    $request->action = POSTDeregisterDBProxyTargetsActionEnum::DEREGISTER_DB_PROXY_TARGETS;
    $request->requestBody = 'atque';
    $request->version = POSTDeregisterDBProxyTargetsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postDeregisterDBProxyTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountAttributes

<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountAttributesRequest();
    $request->action = POSTDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->requestBody = 'esse';
    $request->version = POSTDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeBlueGreenDeployments

<p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeBlueGreenDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeBlueGreenDeploymentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeBlueGreenDeploymentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeBlueGreenDeploymentsRequest();
    $request->action = POSTDescribeBlueGreenDeploymentsActionEnum::DESCRIBE_BLUE_GREEN_DEPLOYMENTS;
    $request->marker = 'accusamus';
    $request->maxRecords = 'natus';
    $request->requestBody = 'minima';
    $request->version = POSTDescribeBlueGreenDeploymentsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDescribeBlueGreenDeployments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCertificates

<p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCertificatesRequest();
    $request->action = POSTDescribeCertificatesActionEnum::DESCRIBE_CERTIFICATES;
    $request->marker = 'suscipit';
    $request->maxRecords = 'repudiandae';
    $request->requestBody = 'atque';
    $request->version = POSTDescribeCertificatesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postDescribeCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterBacktracks

<p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterBacktracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterBacktracksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBClusterBacktracksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBClusterBacktracksRequest();
    $request->action = POSTDescribeDBClusterBacktracksActionEnum::DESCRIBE_DB_CLUSTER_BACKTRACKS;
    $request->marker = 'doloremque';
    $request->maxRecords = 'repudiandae';
    $request->requestBody = 'dicta';
    $request->version = POSTDescribeDBClusterBacktracksVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->postDescribeDBClusterBacktracks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterEndpoints

<p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->marker = 'molestias';
    $request->maxRecords = 'magnam';
    $request->requestBody = 'saepe';
    $request->version = POSTDescribeDBClusterEndpointsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'eveniet';

    $response = $sdk->sdk->postDescribeDBClusterEndpoints($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameterGroups

<p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->marker = 'occaecati';
    $request->maxRecords = 'consequuntur';
    $request->requestBody = 'fugit';
    $request->version = POSTDescribeDBClusterParameterGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postDescribeDBClusterParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameters

<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->marker = 'eveniet';
    $request->maxRecords = 'non';
    $request->requestBody = 'vero';
    $request->version = POSTDescribeDBClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'eveniet';

    $response = $sdk->sdk->postDescribeDBClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshotAttributes

<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>

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
    $request->requestBody = 'qui';
    $request->version = POSTDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->postDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshots

<p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->marker = 'rem';
    $request->maxRecords = 'aliquam';
    $request->requestBody = 'ad';
    $request->version = POSTDescribeDBClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDescribeDBClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusters

<p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>

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
    $request->marker = 'alias';
    $request->maxRecords = 'maiores';
    $request->requestBody = 'reiciendis';
    $request->version = POSTDescribeDBClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'quae';

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
    $request->marker = 'recusandae';
    $request->maxRecords = 'omnis';
    $request->requestBody = 'quaerat';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postDescribeDBEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBInstanceAutomatedBackups

<p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstanceAutomatedBackupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstanceAutomatedBackupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstanceAutomatedBackupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBInstanceAutomatedBackupsRequest();
    $request->action = POSTDescribeDBInstanceAutomatedBackupsActionEnum::DESCRIBE_DB_INSTANCE_AUTOMATED_BACKUPS;
    $request->marker = 'eum';
    $request->maxRecords = 'nemo';
    $request->requestBody = 'recusandae';
    $request->version = POSTDescribeDBInstanceAutomatedBackupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postDescribeDBInstanceAutomatedBackups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBInstances

<p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>

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
    $request->marker = 'ullam';
    $request->maxRecords = 'quasi';
    $request->requestBody = 'animi';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBLogFiles

<p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBLogFilesRequest();
    $request->action = POSTDescribeDBLogFilesActionEnum::DESCRIBE_DB_LOG_FILES;
    $request->marker = 'accusantium';
    $request->maxRecords = 'repellat';
    $request->requestBody = 'doloribus';
    $request->version = POSTDescribeDBLogFilesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postDescribeDBLogFiles($request);

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
    $request->marker = 'modi';
    $request->maxRecords = 'voluptatibus';
    $request->requestBody = 'molestias';
    $request->version = POSTDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'quis';

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
    $request->marker = 'inventore';
    $request->maxRecords = 'fugit';
    $request->requestBody = 'cumque';
    $request->version = POSTDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postDescribeDBParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBProxies

Returns information about DB proxies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBProxiesRequest();
    $request->action = POSTDescribeDBProxiesActionEnum::DESCRIBE_DB_PROXIES;
    $request->marker = 'at';
    $request->maxRecords = 'impedit';
    $request->requestBody = 'eos';
    $request->version = POSTDescribeDBProxiesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postDescribeDBProxies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBProxyEndpoints

Returns information about DB proxy endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyEndpointsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyEndpointsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBProxyEndpointsRequest();
    $request->action = POSTDescribeDBProxyEndpointsActionEnum::DESCRIBE_DB_PROXY_ENDPOINTS;
    $request->marker = 'earum';
    $request->maxRecords = 'soluta';
    $request->requestBody = 'hic';
    $request->version = POSTDescribeDBProxyEndpointsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postDescribeDBProxyEndpoints($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBProxyTargetGroups

Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBProxyTargetGroupsRequest();
    $request->action = POSTDescribeDBProxyTargetGroupsActionEnum::DESCRIBE_DB_PROXY_TARGET_GROUPS;
    $request->marker = 'porro';
    $request->maxRecords = 'suscipit';
    $request->requestBody = 'dolorem';
    $request->version = POSTDescribeDBProxyTargetGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postDescribeDBProxyTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBProxyTargets

Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBProxyTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBProxyTargetsRequest();
    $request->action = POSTDescribeDBProxyTargetsActionEnum::DESCRIBE_DB_PROXY_TARGETS;
    $request->marker = 'consequatur';
    $request->maxRecords = 'quasi';
    $request->requestBody = 'et';
    $request->version = POSTDescribeDBProxyTargetsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->postDescribeDBProxyTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSecurityGroups

<p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSecurityGroupsRequest();
    $request->action = POSTDescribeDBSecurityGroupsActionEnum::DESCRIBE_DB_SECURITY_GROUPS;
    $request->marker = 'doloribus';
    $request->maxRecords = 'nulla';
    $request->requestBody = 'necessitatibus';
    $request->version = POSTDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postDescribeDBSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSnapshotAttributes

<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSnapshotAttributesRequest();
    $request->action = POSTDescribeDBSnapshotAttributesActionEnum::DESCRIBE_DB_SNAPSHOT_ATTRIBUTES;
    $request->requestBody = 'praesentium';
    $request->version = POSTDescribeDBSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postDescribeDBSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSnapshots

Returns information about DB snapshots. This API action supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSnapshotsRequest();
    $request->action = POSTDescribeDBSnapshotsActionEnum::DESCRIBE_DB_SNAPSHOTS;
    $request->marker = 'odio';
    $request->maxRecords = 'tempora';
    $request->requestBody = 'esse';
    $request->version = POSTDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postDescribeDBSnapshots($request);

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
    $request->marker = 'fugiat';
    $request->maxRecords = 'expedita';
    $request->requestBody = 'aliquid';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->postDescribeDBSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEngineDefaultClusterParameters

<p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>

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
    $request->requestBody = 'id';
    $request->version = POSTDescribeEngineDefaultClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'libero';

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
    $request->marker = 'ad';
    $request->maxRecords = 'deleniti';
    $request->requestBody = 'enim';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->postDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.

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
    $request->requestBody = 'expedita';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->postDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventSubscriptions

<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>

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
    $request->marker = 'veritatis';
    $request->maxRecords = 'rerum';
    $request->requestBody = 'est';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

<p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>

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
    $request->marker = 'debitis';
    $request->maxRecords = 'voluptatem';
    $request->requestBody = 'alias';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeExportTasks

Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExportTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExportTasksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeExportTasksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeExportTasksRequest();
    $request->action = POSTDescribeExportTasksActionEnum::DESCRIBE_EXPORT_TASKS;
    $request->marker = 'asperiores';
    $request->maxRecords = 'ratione';
    $request->requestBody = 'ullam';
    $request->version = POSTDescribeExportTasksVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postDescribeExportTasks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeGlobalClusters

<p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->maxRecords = 'dolor';
    $request->requestBody = 'aliquam';
    $request->version = POSTDescribeGlobalClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDescribeGlobalClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOptionGroupOptions

Describes all available options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOptionGroupOptionsRequest();
    $request->action = POSTDescribeOptionGroupOptionsActionEnum::DESCRIBE_OPTION_GROUP_OPTIONS;
    $request->marker = 'sit';
    $request->maxRecords = 'modi';
    $request->requestBody = 'fugit';
    $request->version = POSTDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDescribeOptionGroupOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOptionGroups

Describes the available option groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOptionGroupsRequest();
    $request->action = POSTDescribeOptionGroupsActionEnum::DESCRIBE_OPTION_GROUPS;
    $request->marker = 'ipsa';
    $request->maxRecords = 'quas';
    $request->requestBody = 'eveniet';
    $request->version = POSTDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->postDescribeOptionGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOrderableDBInstanceOptions

Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.

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
    $request->marker = 'expedita';
    $request->maxRecords = 'eum';
    $request->requestBody = 'vel';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';

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
    $request->marker = 'laboriosam';
    $request->maxRecords = 'recusandae';
    $request->requestBody = 'consequuntur';
    $request->version = POSTDescribePendingMaintenanceActionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postDescribePendingMaintenanceActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedDBInstances

Returns information about reserved DB instances for this account, or about a specified reserved DB instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedDBInstancesRequest();
    $request->action = POSTDescribeReservedDBInstancesActionEnum::DESCRIBE_RESERVED_DB_INSTANCES;
    $request->marker = 'est';
    $request->maxRecords = 'harum';
    $request->requestBody = 'sequi';
    $request->version = POSTDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDescribeReservedDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedDBInstancesOfferings

Lists available reserved DB instance offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedDBInstancesOfferingsRequest();
    $request->action = POSTDescribeReservedDBInstancesOfferingsActionEnum::DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS;
    $request->marker = 'officia';
    $request->maxRecords = 'voluptas';
    $request->requestBody = 'numquam';
    $request->version = POSTDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postDescribeReservedDBInstancesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSourceRegions

<p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSourceRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSourceRegionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSourceRegionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSourceRegionsRequest();
    $request->action = POSTDescribeSourceRegionsActionEnum::DESCRIBE_SOURCE_REGIONS;
    $request->marker = 'laudantium';
    $request->maxRecords = 'incidunt';
    $request->requestBody = 'quasi';
    $request->version = POSTDescribeSourceRegionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postDescribeSourceRegions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeValidDBInstanceModifications

<p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>

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
    $request->requestBody = 'cupiditate';
    $request->version = POSTDescribeValidDBInstanceModificationsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->postDescribeValidDBInstanceModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDownloadDBLogFilePortion

<p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDownloadDBLogFilePortionRequest();
    $request->action = POSTDownloadDBLogFilePortionActionEnum::DOWNLOAD_DB_LOG_FILE_PORTION;
    $request->marker = 'magni';
    $request->numberOfLines = 'inventore';
    $request->requestBody = 'fuga';
    $request->version = POSTDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDownloadDBLogFilePortion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverDBCluster

<p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'maxime';
    $request->version = POSTFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverGlobalCluster

<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>

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
    $request->requestBody = 'earum';
    $request->version = POSTFailoverGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postFailoverGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

<p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'quasi';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyActivityStream

<p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyActivityStreamRequest();
    $request->action = POSTModifyActivityStreamActionEnum::MODIFY_ACTIVITY_STREAM;
    $request->requestBody = 'nemo';
    $request->version = POSTModifyActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postModifyActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCertificates

<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCertificatesRequest();
    $request->action = POSTModifyCertificatesActionEnum::MODIFY_CERTIFICATES;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTModifyCertificatesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postModifyCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCurrentDBClusterCapacity

<p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCurrentDBClusterCapacityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCurrentDBClusterCapacityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCurrentDBClusterCapacityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCurrentDBClusterCapacityRequest();
    $request->action = POSTModifyCurrentDBClusterCapacityActionEnum::MODIFY_CURRENT_DB_CLUSTER_CAPACITY;
    $request->requestBody = 'fuga';
    $request->version = POSTModifyCurrentDBClusterCapacityVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->postModifyCurrentDBClusterCapacity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCustomDBEngineVersion

<p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCustomDBEngineVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCustomDBEngineVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCustomDBEngineVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCustomDBEngineVersionRequest();
    $request->action = POSTModifyCustomDBEngineVersionActionEnum::MODIFY_CUSTOM_DB_ENGINE_VERSION;
    $request->requestBody = 'soluta';
    $request->version = POSTModifyCustomDBEngineVersionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postModifyCustomDBEngineVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBCluster

<p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>

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
    $request->requestBody = 'neque';
    $request->version = POSTModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterEndpoint

<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'magnam';
    $request->version = POSTModifyDBClusterEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->postModifyDBClusterEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterParameterGroup

<p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'porro';
    $request->version = POSTModifyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postModifyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

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
    $request->requestBody = 'vero';
    $request->version = POSTModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBInstance

Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.

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
    $request->requestBody = 'impedit';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->postModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBParameterGroup

<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>

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
    $request->requestBody = 'laborum';
    $request->version = POSTModifyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postModifyDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBProxy

Changes the settings for an existing DB proxy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBProxyRequest();
    $request->action = POSTModifyDBProxyActionEnum::MODIFY_DB_PROXY;
    $request->requestBody = 'recusandae';
    $request->version = POSTModifyDBProxyVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postModifyDBProxy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBProxyEndpoint

Changes the settings for an existing DB proxy endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyEndpointActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyEndpointVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBProxyEndpointRequest();
    $request->action = POSTModifyDBProxyEndpointActionEnum::MODIFY_DB_PROXY_ENDPOINT;
    $request->requestBody = 'deleniti';
    $request->version = POSTModifyDBProxyEndpointVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postModifyDBProxyEndpoint($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBProxyTargetGroup

Modifies the properties of a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBProxyTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBProxyTargetGroupRequest();
    $request->action = POSTModifyDBProxyTargetGroupActionEnum::MODIFY_DB_PROXY_TARGET_GROUP;
    $request->requestBody = 'ipsam';
    $request->version = POSTModifyDBProxyTargetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postModifyDBProxyTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSnapshot

<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBSnapshotRequest();
    $request->action = POSTModifyDBSnapshotActionEnum::MODIFY_DB_SNAPSHOT;
    $request->requestBody = 'consectetur';
    $request->version = POSTModifyDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->postModifyDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotAttributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotAttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSnapshotAttributeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBSnapshotAttributeRequest();
    $request->action = POSTModifyDBSnapshotAttributeActionEnum::MODIFY_DB_SNAPSHOT_ATTRIBUTE;
    $request->requestBody = 'nemo';
    $request->version = POSTModifyDBSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postModifyDBSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSubnetGroup

Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.

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
    $request->requestBody = 'magni';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'itaque';

    $response = $sdk->sdk->postModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEventSubscription

<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>

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
    $request->requestBody = 'et';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->postModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyGlobalCluster

<p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'nostrum';
    $request->version = POSTModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyOptionGroup

Modifies an existing option group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyOptionGroupRequest();
    $request->action = POSTModifyOptionGroupActionEnum::MODIFY_OPTION_GROUP;
    $request->requestBody = 'quos';
    $request->version = POSTModifyOptionGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postModifyOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPromoteReadReplica

<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPromoteReadReplicaRequest();
    $request->action = POSTPromoteReadReplicaActionEnum::PROMOTE_READ_REPLICA;
    $request->requestBody = 'totam';
    $request->version = POSTPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postPromoteReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPromoteReadReplicaDBCluster

Promotes a read replica DB cluster to a standalone DB cluster.

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
    $request->requestBody = 'assumenda';
    $request->version = POSTPromoteReadReplicaDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postPromoteReadReplicaDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPurchaseReservedDBInstancesOffering

Purchases a reserved DB instance offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPurchaseReservedDBInstancesOfferingRequest();
    $request->action = POSTPurchaseReservedDBInstancesOfferingActionEnum::PURCHASE_RESERVED_DB_INSTANCES_OFFERING;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postPurchaseReservedDBInstancesOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootDBCluster

<p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebootDBClusterRequest();
    $request->action = POSTRebootDBClusterActionEnum::REBOOT_DB_CLUSTER;
    $request->requestBody = 'corporis';
    $request->version = POSTRebootDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postRebootDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootDBInstance

<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>

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
    $request->requestBody = 'fuga';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRegisterDBProxyTargets

Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterDBProxyTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterDBProxyTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterDBProxyTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRegisterDBProxyTargetsRequest();
    $request->action = POSTRegisterDBProxyTargetsActionEnum::REGISTER_DB_PROXY_TARGETS;
    $request->requestBody = 'praesentium';
    $request->version = POSTRegisterDBProxyTargetsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postRegisterDBProxyTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveFromGlobalCluster

<p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'similique';
    $request->version = POSTRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveRoleFromDBCluster

<p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'cupiditate';
    $request->version = POSTRemoveRoleFromDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postRemoveRoleFromDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveRoleFromDBInstance

Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveRoleFromDBInstanceRequest();
    $request->action = POSTRemoveRoleFromDBInstanceActionEnum::REMOVE_ROLE_FROM_DB_INSTANCE;
    $request->requestBody = 'optio';
    $request->version = POSTRemoveRoleFromDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postRemoveRoleFromDBInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing RDS event notification subscription.

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
    $request->requestBody = 'placeat';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTagsFromResource

<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'magnam';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetDBClusterParameterGroup

<p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'totam';
    $request->version = POSTResetDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'nostrum';

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
    $request->requestBody = 'est';
    $request->version = POSTResetDBParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postResetDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterFromS3

<p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromS3Request;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromS3ActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBClusterFromS3VersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBClusterFromS3Request();
    $request->action = POSTRestoreDBClusterFromS3ActionEnum::RESTORE_DB_CLUSTER_FROM_S3;
    $request->requestBody = 'nemo';
    $request->version = POSTRestoreDBClusterFromS3VersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postRestoreDBClusterFromS3($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterFromSnapshot

<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'dolores';
    $request->version = POSTRestoreDBClusterFromSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->postRestoreDBClusterFromSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterToPointInTime

<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>

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
    $request->requestBody = 'optio';
    $request->version = POSTRestoreDBClusterToPointInTimeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postRestoreDBClusterToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBInstanceFromDBSnapshot

<p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBInstanceFromDBSnapshotRequest();
    $request->action = POSTRestoreDBInstanceFromDBSnapshotActionEnum::RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT;
    $request->requestBody = 'quam';
    $request->version = POSTRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postRestoreDBInstanceFromDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBInstanceFromS3

<p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromS3Request;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromS3ActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromS3VersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBInstanceFromS3Request();
    $request->action = POSTRestoreDBInstanceFromS3ActionEnum::RESTORE_DB_INSTANCE_FROM_S3;
    $request->requestBody = 'cum';
    $request->version = POSTRestoreDBInstanceFromS3VersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postRestoreDBInstanceFromS3($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBInstanceToPointInTime

<p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBInstanceToPointInTimeRequest();
    $request->action = POSTRestoreDBInstanceToPointInTimeActionEnum::RESTORE_DB_INSTANCE_TO_POINT_IN_TIME;
    $request->requestBody = 'consequuntur';
    $request->version = POSTRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postRestoreDBInstanceToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeDBSecurityGroupIngress

<p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeDBSecurityGroupIngressRequest();
    $request->action = POSTRevokeDBSecurityGroupIngressActionEnum::REVOKE_DB_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'laboriosam';
    $request->version = POSTRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartActivityStream

Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartActivityStreamRequest();
    $request->action = POSTStartActivityStreamActionEnum::START_ACTIVITY_STREAM;
    $request->requestBody = 'doloribus';
    $request->version = POSTStartActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postStartActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartDBCluster

<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'molestias';
    $request->version = POSTStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartDBInstance

<p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartDBInstanceRequest();
    $request->action = POSTStartDBInstanceActionEnum::START_DB_INSTANCE;
    $request->requestBody = 'tempore';
    $request->version = POSTStartDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->postStartDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartDBInstanceAutomatedBackupsReplication

<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceAutomatedBackupsReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceAutomatedBackupsReplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartDBInstanceAutomatedBackupsReplicationRequest();
    $request->action = POSTStartDBInstanceAutomatedBackupsReplicationActionEnum::START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION;
    $request->requestBody = 'adipisci';
    $request->version = POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postStartDBInstanceAutomatedBackupsReplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartExportTask

<p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartExportTaskActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartExportTaskVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartExportTaskRequest();
    $request->action = POSTStartExportTaskActionEnum::START_EXPORT_TASK;
    $request->requestBody = 'cupiditate';
    $request->version = POSTStartExportTaskVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postStartExportTask($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopActivityStream

<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopActivityStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopActivityStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopActivityStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopActivityStreamRequest();
    $request->action = POSTStopActivityStreamActionEnum::STOP_ACTIVITY_STREAM;
    $request->requestBody = 'asperiores';
    $request->version = POSTStopActivityStreamVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postStopActivityStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopDBCluster

<p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>

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
    $request->requestBody = 'exercitationem';
    $request->version = POSTStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postStopDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopDBInstance

<p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopDBInstanceRequest();
    $request->action = POSTStopDBInstanceActionEnum::STOP_DB_INSTANCE;
    $request->requestBody = 'blanditiis';
    $request->version = POSTStopDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postStopDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopDBInstanceAutomatedBackupsReplication

<p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceAutomatedBackupsReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceAutomatedBackupsReplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopDBInstanceAutomatedBackupsReplicationRequest();
    $request->action = POSTStopDBInstanceAutomatedBackupsReplicationActionEnum::STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION;
    $request->requestBody = 'facilis';
    $request->version = POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postStopDBInstanceAutomatedBackupsReplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSwitchoverBlueGreenDeployment

<p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverBlueGreenDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverBlueGreenDeploymentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverBlueGreenDeploymentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSwitchoverBlueGreenDeploymentRequest();
    $request->action = POSTSwitchoverBlueGreenDeploymentActionEnum::SWITCHOVER_BLUE_GREEN_DEPLOYMENT;
    $request->requestBody = 'rerum';
    $request->version = POSTSwitchoverBlueGreenDeploymentVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postSwitchoverBlueGreenDeployment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSwitchoverReadReplica

Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwitchoverReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSwitchoverReadReplicaRequest();
    $request->action = POSTSwitchoverReadReplicaActionEnum::SWITCHOVER_READ_REPLICA;
    $request->requestBody = 'eligendi';
    $request->version = POSTSwitchoverReadReplicaVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->postSwitchoverReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
