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
 * <fullname>Amazon Relational Database Service</fullname> <p/> <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique.</p> <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use.</p> <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.</p> <p> <b>Amazon RDS API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul> <p> <b>Amazon RDS User Guide</b> </p> <ul> <li> <p>For a summary of the Amazon RDS interfaces, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p> </li> <li> <p>For more information about how to use the Query API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p> </li> </ul>
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
     * Associates an Identity and Access Management (IAM) role with a DB cluster.
     */
    getAddRoleToDBCluster(req: operations.GETAddRoleToDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETAddRoleToDBClusterResponse>;
    /**
     * <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
     */
    getAddRoleToDBInstance(req: operations.GETAddRoleToDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETAddRoleToDBInstanceResponse>;
    /**
     * Adds a source identifier to an existing RDS event notification subscription.
     */
    getAddSourceIdentifierToSubscription(req: operations.GETAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETAddSourceIdentifierToSubscriptionResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to a DB instance).
     */
    getApplyPendingMaintenanceAction(req: operations.GETApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GETApplyPendingMaintenanceActionResponse>;
    /**
     * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    getAuthorizeDBSecurityGroupIngress(req: operations.GETAuthorizeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeDBSecurityGroupIngressResponse>;
    /**
     * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
     */
    getBacktrackDBCluster(req: operations.GETBacktrackDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETBacktrackDBClusterResponse>;
    /**
     * Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
     */
    getCancelExportTask(req: operations.GETCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelExportTaskResponse>;
    /**
     * <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
     */
    getCreateGlobalCluster(req: operations.GETCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateGlobalClusterResponse>;
    /**
     * <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    getDeleteBlueGreenDeployment(req: operations.GETDeleteBlueGreenDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteBlueGreenDeploymentResponse>;
    /**
     * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getDeleteCustomDBEngineVersion(req: operations.GETDeleteCustomDBEngineVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCustomDBEngineVersionResponse>;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getDeleteDBCluster(req: operations.GETDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterResponse>;
    /**
     * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getDeleteDBClusterEndpoint(req: operations.GETDeleteDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterEndpointResponse>;
    /**
     * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getDeleteDBClusterParameterGroup(req: operations.GETDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getDeleteDBClusterSnapshot(req: operations.GETDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBClusterSnapshotResponse>;
    /**
     * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
     */
    getDeleteDBInstance(req: operations.GETDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBInstanceResponse>;
    /**
     * Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
     */
    getDeleteDBInstanceAutomatedBackup(req: operations.GETDeleteDBInstanceAutomatedBackupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBInstanceAutomatedBackupResponse>;
    /**
     * Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
     */
    getDeleteDBParameterGroup(req: operations.GETDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBParameterGroupResponse>;
    /**
     * Deletes an existing DB proxy.
     */
    getDeleteDBProxy(req: operations.GETDeleteDBProxyRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBProxyResponse>;
    /**
     * Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
     */
    getDeleteDBProxyEndpoint(req: operations.GETDeleteDBProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBProxyEndpointResponse>;
    /**
     * <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    getDeleteDBSecurityGroup(req: operations.GETDeleteDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSecurityGroupResponse>;
    /**
     * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    getDeleteDBSnapshot(req: operations.GETDeleteDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSnapshotResponse>;
    /**
     * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    getDeleteDBSubnetGroup(req: operations.GETDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an RDS event notification subscription.
     */
    getDeleteEventSubscription(req: operations.GETDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEventSubscriptionResponse>;
    /**
     * <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getDeleteGlobalCluster(req: operations.GETDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteGlobalClusterResponse>;
    /**
     * Deletes an existing option group.
     */
    getDeleteOptionGroup(req: operations.GETDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteOptionGroupResponse>;
    /**
     * Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
     */
    getDeregisterDBProxyTargets(req: operations.GETDeregisterDBProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeregisterDBProxyTargetsResponse>;
    /**
     * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
     */
    getDescribeAccountAttributes(req: operations.GETDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAccountAttributesResponse>;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
     */
    getDescribeDBClusterSnapshotAttributes(req: operations.GETDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
     */
    getDescribeDBSnapshotAttributes(req: operations.GETDescribeDBSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDBSnapshotAttributesResponse>;
    /**
     * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    getDescribeValidDBInstanceModifications(req: operations.GETDescribeValidDBInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeValidDBInstanceModificationsResponse>;
    /**
     * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    getDownloadDBLogFilePortion(req: operations.GETDownloadDBLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.GETDownloadDBLogFilePortionResponse>;
    /**
     * <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getFailoverDBCluster(req: operations.GETFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverDBClusterResponse>;
    /**
     * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
     */
    getFailoverGlobalCluster(req: operations.GETFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETFailoverGlobalClusterResponse>;
    /**
     * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
     */
    getModifyActivityStream(req: operations.GETModifyActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyActivityStreamResponse>;
    /**
     * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    getModifyCertificates(req: operations.GETModifyCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCertificatesResponse>;
    /**
     * <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
     */
    getModifyCurrentDBClusterCapacity(req: operations.GETModifyCurrentDBClusterCapacityRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCurrentDBClusterCapacityResponse>;
    /**
     * <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getModifyCustomDBEngineVersion(req: operations.GETModifyCustomDBEngineVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCustomDBEngineVersionResponse>;
    /**
     * <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getModifyDBCluster(req: operations.GETModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterResponse>;
    /**
     * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getModifyDBClusterEndpoint(req: operations.GETModifyDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterEndpointResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
     */
    getModifyDBClusterSnapshotAttribute(req: operations.GETModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Changes the settings for an existing DB proxy endpoint.
     */
    getModifyDBProxyEndpoint(req: operations.GETModifyDBProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBProxyEndpointResponse>;
    /**
     * Modifies the properties of a <code>DBProxyTargetGroup</code>.
     */
    getModifyDBProxyTargetGroup(req: operations.GETModifyDBProxyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBProxyTargetGroupResponse>;
    /**
     * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
     */
    getModifyDBSnapshot(req: operations.GETModifyDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSnapshotResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
     */
    getModifyDBSnapshotAttribute(req: operations.GETModifyDBSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSnapshotAttributeResponse>;
    /**
     * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
     */
    getModifyDBSubnetGroup(req: operations.GETModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDBSubnetGroupResponse>;
    /**
     * <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
     */
    getModifyEventSubscription(req: operations.GETModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEventSubscriptionResponse>;
    /**
     * <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getModifyGlobalCluster(req: operations.GETModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyGlobalClusterResponse>;
    /**
     * <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
     */
    getPromoteReadReplica(req: operations.GETPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GETPromoteReadReplicaResponse>;
    /**
     * Promotes a read replica DB cluster to a standalone DB cluster.
     */
    getPromoteReadReplicaDBCluster(req: operations.GETPromoteReadReplicaDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETPromoteReadReplicaDBClusterResponse>;
    /**
     * <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    getRebootDBCluster(req: operations.GETRebootDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootDBClusterResponse>;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
     */
    getRebootDBInstance(req: operations.GETRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootDBInstanceResponse>;
    /**
     * Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
     */
    getRegisterDBProxyTargets(req: operations.GETRegisterDBProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GETRegisterDBProxyTargetsResponse>;
    /**
     * <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getRemoveFromGlobalCluster(req: operations.GETRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveFromGlobalClusterResponse>;
    /**
     * <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    getRemoveRoleFromDBCluster(req: operations.GETRemoveRoleFromDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveRoleFromDBClusterResponse>;
    /**
     * Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
     */
    getRemoveRoleFromDBInstance(req: operations.GETRemoveRoleFromDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveRoleFromDBInstanceResponse>;
    /**
     * Removes a source identifier from an existing RDS event notification subscription.
     */
    getRemoveSourceIdentifierFromSubscription(req: operations.GETRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    getRemoveTagsFromResource(req: operations.GETRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsFromResourceResponse>;
    /**
     * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    getRevokeDBSecurityGroupIngress(req: operations.GETRevokeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeDBSecurityGroupIngressResponse>;
    /**
     * Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
     */
    getStartActivityStream(req: operations.GETStartActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.GETStartActivityStreamResponse>;
    /**
     * <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getStartDBCluster(req: operations.GETStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStartDBClusterResponse>;
    /**
     * <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
     */
    getStartDBInstance(req: operations.GETStartDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETStartDBInstanceResponse>;
    /**
     * <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    getStartDBInstanceAutomatedBackupsReplication(req: operations.GETStartDBInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.GETStartDBInstanceAutomatedBackupsReplicationResponse>;
    /**
     * <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    getStartExportTask(req: operations.GETStartExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETStartExportTaskResponse>;
    /**
     * <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    getStopActivityStream(req: operations.GETStopActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.GETStopActivityStreamResponse>;
    /**
     * <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    getStopDBCluster(req: operations.GETStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.GETStopDBClusterResponse>;
    /**
     * <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
     */
    getStopDBInstance(req: operations.GETStopDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETStopDBInstanceResponse>;
    /**
     * <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    getStopDBInstanceAutomatedBackupsReplication(req: operations.GETStopDBInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.GETStopDBInstanceAutomatedBackupsReplicationResponse>;
    /**
     * <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    getSwitchoverBlueGreenDeployment(req: operations.GETSwitchoverBlueGreenDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GETSwitchoverBlueGreenDeploymentResponse>;
    /**
     * Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.
     */
    getSwitchoverReadReplica(req: operations.GETSwitchoverReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GETSwitchoverReadReplicaResponse>;
    /**
     * Associates an Identity and Access Management (IAM) role with a DB cluster.
     */
    postAddRoleToDBCluster(req: operations.POSTAddRoleToDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddRoleToDBClusterResponse>;
    /**
     * <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note> <p>This command doesn't apply to RDS Custom.</p>
     */
    postAddRoleToDBInstance(req: operations.POSTAddRoleToDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddRoleToDBInstanceResponse>;
    /**
     * Adds a source identifier to an existing RDS event notification subscription.
     */
    postAddSourceIdentifierToSubscription(req: operations.POSTAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddSourceIdentifierToSubscriptionResponse>;
    /**
     * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
     */
    postAddTagsToResource(req: operations.POSTAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsToResourceResponse>;
    /**
     * Applies a pending maintenance action to a resource (for example, to a DB instance).
     */
    postApplyPendingMaintenanceAction(req: operations.POSTApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTApplyPendingMaintenanceActionResponse>;
    /**
     * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    postAuthorizeDBSecurityGroupIngress(req: operations.POSTAuthorizeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeDBSecurityGroupIngressResponse>;
    /**
     * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies only to Aurora MySQL DB clusters.</p> </note>
     */
    postBacktrackDBCluster(req: operations.POSTBacktrackDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTBacktrackDBClusterResponse>;
    /**
     * Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
     */
    postCancelExportTask(req: operations.POSTCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelExportTaskResponse>;
    /**
     * Copies the specified DB cluster parameter group.
     */
    postCopyDBClusterParameterGroup(req: operations.POSTCopyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterParameterGroupResponse>;
    /**
     * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postCopyDBClusterSnapshot(req: operations.POSTCopyDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBClusterSnapshotResponse>;
    /**
     * Copies the specified DB parameter group.
     */
    postCopyDBParameterGroup(req: operations.POSTCopyDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBParameterGroupResponse>;
    /**
     * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination Amazon Web Services Region for the DB snapshot copy.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postCopyDBSnapshot(req: operations.POSTCopyDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyDBSnapshotResponse>;
    /**
     * Copies the specified option group.
     */
    postCopyOptionGroup(req: operations.POSTCopyOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyOptionGroupResponse>;
    /**
     * <p>Creates a blue/green deployment.</p> <p>A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment. The staging environment stays in sync with the current production environment using logical replication.</p> <p>You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postCreateBlueGreenDeployment(req: operations.POSTCreateBlueGreenDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateBlueGreenDeploymentResponse>;
    /**
     * Creates a custom DB engine version (CEV).
     */
    postCreateCustomDBEngineVersion(req: operations.POSTCreateCustomDBEngineVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCustomDBEngineVersionResponse>;
    /**
     * <p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p> <p>If you create an Aurora DB cluster, the request creates an empty cluster. You must explicitly create the writer instance for your DB cluster using the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html">CreateDBInstance</a> operation. If you create a Multi-AZ DB cluster, the request creates a writer and two reader DB instances for you, each in a different Availability Zone.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon Aurora DB cluster as a read replica of another DB cluster or Amazon RDS for MySQL or PostgreSQL DB instance. For more information about Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>You can also use the <code>ReplicationSourceIdentifier</code> parameter to create a Multi-AZ DB cluster read replica with an RDS for MySQL or PostgreSQL DB instance as the source. For more information about Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postCreateDBCluster(req: operations.POSTCreateDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterResponse>;
    /**
     * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
     */
    postCreateDBClusterEndpoint(req: operations.POSTCreateDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterEndpointResponse>;
    /**
     * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>.</p> <p>When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <p>When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postCreateDBClusterParameterGroup(req: operations.POSTCreateDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterParameterGroupResponse>;
    /**
     * <p>Creates a snapshot of a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postCreateDBClusterSnapshot(req: operations.POSTCreateDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBClusterSnapshotResponse>;
    /**
     * <p>Creates a new DB instance.</p> <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster. For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance to the cluster.</p> <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html"> Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about creating a DB instance in an Aurora DB cluster, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html"> Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postCreateDBInstance(req: operations.POSTCreateDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceResponse>;
    /**
     * <p>Creates a new DB instance that acts as a read replica for an existing source DB instance or Multi-AZ DB cluster. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. You can create a read replica for a Multi-AZ DB cluster running MySQL or PostgreSQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with read replicas</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html#multi-az-db-clusters-migrating-to-instance-with-read-replica">Migrating from a Multi-AZ DB cluster to a DB instance using a read replica</a> in the <i>Amazon RDS User Guide</i>.</p> <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code> operation to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance or cluster, except as specified.</p> <important> <p>Your source DB instance or cluster must have backup retention enabled.</p> </important>
     */
    postCreateDBInstanceReadReplica(req: operations.POSTCreateDBInstanceReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBInstanceReadReplicaResponse>;
    /**
     * <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <p>This command doesn't apply to RDS Custom.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
     */
    postCreateDBParameterGroup(req: operations.POSTCreateDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBParameterGroupResponse>;
    /**
     * Creates a new DB proxy.
     */
    postCreateDBProxy(req: operations.POSTCreateDBProxyRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBProxyResponse>;
    /**
     * Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
     */
    postCreateDBProxyEndpoint(req: operations.POSTCreateDBProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBProxyEndpointResponse>;
    /**
     * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    postCreateDBSecurityGroup(req: operations.POSTCreateDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSecurityGroupResponse>;
    /**
     * Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.
     */
    postCreateDBSnapshot(req: operations.POSTCreateDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSnapshotResponse>;
    /**
     * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
     */
    postCreateDBSubnetGroup(req: operations.POSTCreateDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDBSubnetGroupResponse>;
    /**
     * <p>Creates an RDS event notification subscription. This operation requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <p>For more information about subscribing to an event for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about subscribing to an event for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html"> Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postCreateEventSubscription(req: operations.POSTCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEventSubscriptionResponse>;
    /**
     * <p>Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database.</p> <note> <p>This action applies only to Aurora DB clusters.</p> </note>
     */
    postCreateGlobalCluster(req: operations.POSTCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateGlobalClusterResponse>;
    /**
     * <p>Creates a new option group. You can create up to 20 option groups.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    postCreateOptionGroup(req: operations.POSTCreateOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateOptionGroupResponse>;
    /**
     * <p>Deletes a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postDeleteBlueGreenDeployment(req: operations.POSTDeleteBlueGreenDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteBlueGreenDeploymentResponse>;
    /**
     * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p> <ul> <li> <p>The CEV must not be the default for RDS Custom. If it is, change the default before running this command.</p> </li> <li> <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot, or automated backup of your RDS Custom instance.</p> </li> </ul> <p>Typically, deletion takes a few minutes.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>DeleteCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDeleteCustomDBEngineVersion(req: operations.POSTDeleteCustomDBEngineVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCustomDBEngineVersionResponse>;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are terminated and read replicas are promoted to standalone instances.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDeleteDBCluster(req: operations.POSTDeleteDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterResponse>;
    /**
     * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postDeleteDBClusterEndpoint(req: operations.POSTDeleteDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterEndpointResponse>;
    /**
     * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDeleteDBClusterParameterGroup(req: operations.POSTDeleteDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterParameterGroupResponse>;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDeleteDBClusterSnapshot(req: operations.POSTDeleteDBClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBClusterSnapshotResponse>;
    /**
     * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p>If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
     */
    postDeleteDBInstance(req: operations.POSTDeleteDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBInstanceResponse>;
    /**
     * Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
     */
    postDeleteDBInstanceAutomatedBackup(req: operations.POSTDeleteDBInstanceAutomatedBackupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBInstanceAutomatedBackupResponse>;
    /**
     * Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
     */
    postDeleteDBParameterGroup(req: operations.POSTDeleteDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBParameterGroupResponse>;
    /**
     * Deletes an existing DB proxy.
     */
    postDeleteDBProxy(req: operations.POSTDeleteDBProxyRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBProxyResponse>;
    /**
     * Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
     */
    postDeleteDBProxyEndpoint(req: operations.POSTDeleteDBProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBProxyEndpointResponse>;
    /**
     * <p>Deletes a DB security group.</p> <p>The specified DB security group must not be associated with any DB instances.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    postDeleteDBSecurityGroup(req: operations.POSTDeleteDBSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSecurityGroupResponse>;
    /**
     * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
     */
    postDeleteDBSnapshot(req: operations.POSTDeleteDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSnapshotResponse>;
    /**
     * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
     */
    postDeleteDBSubnetGroup(req: operations.POSTDeleteDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDBSubnetGroupResponse>;
    /**
     * Deletes an RDS event notification subscription.
     */
    postDeleteEventSubscription(req: operations.POSTDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEventSubscriptionResponse>;
    /**
     * <p>Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postDeleteGlobalCluster(req: operations.POSTDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteGlobalClusterResponse>;
    /**
     * Deletes an existing option group.
     */
    postDeleteOptionGroup(req: operations.POSTDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteOptionGroupResponse>;
    /**
     * Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
     */
    postDeregisterDBProxyTargets(req: operations.POSTDeregisterDBProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterDBProxyTargetsResponse>;
    /**
     * <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
     */
    postDescribeAccountAttributes(req: operations.POSTDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAccountAttributesResponse>;
    /**
     * <p>Returns information about blue/green deployments.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postDescribeBlueGreenDeployments(req: operations.POSTDescribeBlueGreenDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeBlueGreenDeploymentsResponse>;
    /**
     * <p>Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB instance</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html"> Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postDescribeCertificates(req: operations.POSTDescribeCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCertificatesResponse>;
    /**
     * <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
     */
    postDescribeDBClusterBacktracks(req: operations.POSTDescribeDBClusterBacktracksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterBacktracksResponse>;
    /**
     * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postDescribeDBClusterEndpoints(req: operations.POSTDescribeDBClusterEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterEndpointsResponse>;
    /**
     * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDescribeDBClusterParameterGroups(req: operations.POSTDescribeDBClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParameterGroupsResponse>;
    /**
     * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDescribeDBClusterParameters(req: operations.POSTDescribeDBClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterParametersResponse>;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
     */
    postDescribeDBClusterSnapshotAttributes(req: operations.POSTDescribeDBClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotAttributesResponse>;
    /**
     * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postDescribeDBClusterSnapshots(req: operations.POSTDescribeDBClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClusterSnapshotsResponse>;
    /**
     * <p>Returns information about Amazon Aurora DB clusters and Multi-AZ DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p>
     */
    postDescribeDBClusters(req: operations.POSTDescribeDBClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBClustersResponse>;
    /**
     * Returns a list of the available DB engines.
     */
    postDescribeDBEngineVersions(req: operations.POSTDescribeDBEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBEngineVersionsResponse>;
    /**
     * <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
     */
    postDescribeDBInstanceAutomatedBackups(req: operations.POSTDescribeDBInstanceAutomatedBackupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBInstanceAutomatedBackupsResponse>;
    /**
     * <p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
     */
    postDescribeDBInstances(req: operations.POSTDescribeDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBInstancesResponse>;
    /**
     * <p>Returns a list of DB log files for the DB instance.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    postDescribeDBLogFiles(req: operations.POSTDescribeDBLogFilesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBLogFilesResponse>;
    /**
     * Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
     */
    postDescribeDBParameterGroups(req: operations.POSTDescribeDBParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParameterGroupsResponse>;
    /**
     * Returns the detailed parameter list for a particular DB parameter group.
     */
    postDescribeDBParameters(req: operations.POSTDescribeDBParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBParametersResponse>;
    /**
     * Returns information about DB proxies.
     */
    postDescribeDBProxies(req: operations.POSTDescribeDBProxiesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBProxiesResponse>;
    /**
     * Returns information about DB proxy endpoints.
     */
    postDescribeDBProxyEndpoints(req: operations.POSTDescribeDBProxyEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBProxyEndpointsResponse>;
    /**
     * Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.
     */
    postDescribeDBProxyTargetGroups(req: operations.POSTDescribeDBProxyTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBProxyTargetGroupsResponse>;
    /**
     * Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.
     */
    postDescribeDBProxyTargets(req: operations.POSTDescribeDBProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBProxyTargetsResponse>;
    /**
     * <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    postDescribeDBSecurityGroups(req: operations.POSTDescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSecurityGroupsResponse>;
    /**
     * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
     */
    postDescribeDBSnapshotAttributes(req: operations.POSTDescribeDBSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSnapshotAttributesResponse>;
    /**
     * Returns information about DB snapshots. This API action supports pagination.
     */
    postDescribeDBSnapshots(req: operations.POSTDescribeDBSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSnapshotsResponse>;
    /**
     * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
     */
    postDescribeDBSubnetGroups(req: operations.POSTDescribeDBSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDBSubnetGroupsResponse>;
    /**
     * <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postDescribeEngineDefaultClusterParameters(req: operations.POSTDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultClusterParametersResponse>;
    /**
     * Returns the default engine and system parameter information for the specified database engine.
     */
    postDescribeEngineDefaultParameters(req: operations.POSTDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEngineDefaultParametersResponse>;
    /**
     * Displays a list of categories for all event source types, or, if specified, for a specified source type. You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html"> <i>Amazon RDS User Guide</i> </a> or the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html"> <i>Amazon Aurora User Guide</i> </a>.
     */
    postDescribeEventCategories(req: operations.POSTDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventCategoriesResponse>;
    /**
     * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
     */
    postDescribeEventSubscriptions(req: operations.POSTDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventSubscriptionsResponse>;
    /**
     * <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter.</p> <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring Amazon Aurora events</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>By default, RDS returns events that were generated in the past hour.</p> </note>
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.
     */
    postDescribeExportTasks(req: operations.POSTDescribeExportTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeExportTasksResponse>;
    /**
     * <p>Returns information about Aurora global database clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postDescribeGlobalClusters(req: operations.POSTDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeGlobalClustersResponse>;
    /**
     * Describes all available options.
     */
    postDescribeOptionGroupOptions(req: operations.POSTDescribeOptionGroupOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOptionGroupOptionsResponse>;
    /**
     * Describes the available option groups.
     */
    postDescribeOptionGroups(req: operations.POSTDescribeOptionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOptionGroupsResponse>;
    /**
     * Returns a list of orderable DB instance options for the specified DB engine, DB engine version, and DB instance class.
     */
    postDescribeOrderableDBInstanceOptions(req: operations.POSTDescribeOrderableDBInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeOrderableDBInstanceOptionsResponse>;
    /**
     * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
     */
    postDescribePendingMaintenanceActions(req: operations.POSTDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePendingMaintenanceActionsResponse>;
    /**
     * Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
     */
    postDescribeReservedDBInstances(req: operations.POSTDescribeReservedDBInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedDBInstancesResponse>;
    /**
     * Lists available reserved DB instance offerings.
     */
    postDescribeReservedDBInstancesOfferings(req: operations.POSTDescribeReservedDBInstancesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedDBInstancesOfferingsResponse>;
    /**
     * <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from.</p> <p>Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination.</p> <p>To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation <code>DescribeRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html"> DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
     */
    postDescribeSourceRegions(req: operations.POSTDescribeSourceRegionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSourceRegionsResponse>;
    /**
     * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    postDescribeValidDBInstanceModifications(req: operations.POSTDescribeValidDBInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeValidDBInstanceModificationsResponse>;
    /**
     * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p> <p>This command doesn't apply to RDS Custom.</p>
     */
    postDownloadDBLogFilePortion(req: operations.POSTDownloadDBLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDownloadDBLogFilePortionResponse>;
    /**
     * <p>Forces a failover for a DB cluster.</p> <p>For an Aurora DB cluster, failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>For a Multi-AZ DB cluster, failover for a DB cluster promotes one of the readable standby DB instances (read-only instances) in the DB cluster to be the primary DB instance (the cluster writer).</p> <p>An Amazon Aurora DB cluster automatically fails over to an Aurora Replica, if one exists, when the primary DB instance fails. A Multi-AZ DB cluster automatically fails over to a readable standby DB instance when the primary DB instance fails.</p> <p>To simulate a failure of a primary instance for testing, you can force a failover. Because each instance in a DB cluster has its own endpoint address, make sure to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postFailoverDBCluster(req: operations.POSTFailoverDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverDBClusterResponse>;
    /**
     * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology.</p> </note>
     */
    postFailoverGlobalCluster(req: operations.POSTFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTFailoverGlobalClusterResponse>;
    /**
     * <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    /**
     * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the <i>Amazon RDS User Guide</i>. </p> <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
     */
    postModifyActivityStream(req: operations.POSTModifyActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyActivityStreamResponse>;
    /**
     * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postModifyCertificates(req: operations.POSTModifyCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCertificatesResponse>;
    /**
     * <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p> <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless v1 DB clusters.</p> </note>
     */
    postModifyCurrentDBClusterCapacity(req: operations.POSTModifyCurrentDBClusterCapacityRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCurrentDBClusterCapacityResponse>;
    /**
     * <p>Modifies the status of a custom engine version (CEV). You can find CEVs to modify by calling <code>DescribeDBEngineVersions</code>.</p> <note> <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the <code>ModifyCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for the <code>ModifyCustomDbEngineVersion</code> event.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.modify">Modifying CEV status</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postModifyCustomDBEngineVersion(req: operations.POSTModifyCustomDBEngineVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCustomDBEngineVersionResponse>;
    /**
     * <p>Modify the settings for an Amazon Aurora DB cluster or a Multi-AZ DB cluster. You can change one or more settings by specifying these parameters and the new values in the request.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postModifyDBCluster(req: operations.POSTModifyDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterResponse>;
    /**
     * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postModifyDBClusterEndpoint(req: operations.POSTModifyDBClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterEndpointResponse>;
    /**
     * <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> operation to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postModifyDBClusterParameterGroup(req: operations.POSTModifyDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterParameterGroupResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
     */
    postModifyDBClusterSnapshotAttribute(req: operations.POSTModifyDBClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBClusterSnapshotAttributeResponse>;
    /**
     * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.
     */
    postModifyDBInstance(req: operations.POSTModifyDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBInstanceResponse>;
    /**
     * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
     */
    postModifyDBParameterGroup(req: operations.POSTModifyDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBParameterGroupResponse>;
    /**
     * Changes the settings for an existing DB proxy.
     */
    postModifyDBProxy(req: operations.POSTModifyDBProxyRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBProxyResponse>;
    /**
     * Changes the settings for an existing DB proxy endpoint.
     */
    postModifyDBProxyEndpoint(req: operations.POSTModifyDBProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBProxyEndpointResponse>;
    /**
     * Modifies the properties of a <code>DBProxyTargetGroup</code>.
     */
    postModifyDBProxyTargetGroup(req: operations.POSTModifyDBProxyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBProxyTargetGroupResponse>;
    /**
     * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command doesn't apply to RDS Custom.</p>
     */
    postModifyDBSnapshot(req: operations.POSTModifyDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSnapshotResponse>;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as values for the <code>restore</code> attribute.</p>
     */
    postModifyDBSnapshotAttribute(req: operations.POSTModifyDBSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSnapshotAttributeResponse>;
    /**
     * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
     */
    postModifyDBSubnetGroup(req: operations.POSTModifyDBSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDBSubnetGroupResponse>;
    /**
     * <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
     */
    postModifyEventSubscription(req: operations.POSTModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEventSubscriptionResponse>;
    /**
     * <p>Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postModifyGlobalCluster(req: operations.POSTModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyGlobalClusterResponse>;
    /**
     * Modifies an existing option group.
     */
    postModifyOptionGroup(req: operations.POSTModifyOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyOptionGroupResponse>;
    /**
     * <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL, Aurora PostgreSQL, or RDS Custom.</p> </li> </ul> </note>
     */
    postPromoteReadReplica(req: operations.POSTPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.POSTPromoteReadReplicaResponse>;
    /**
     * Promotes a read replica DB cluster to a standalone DB cluster.
     */
    postPromoteReadReplicaDBCluster(req: operations.POSTPromoteReadReplicaDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTPromoteReadReplicaDBClusterResponse>;
    /**
     * Purchases a reserved DB instance offering.
     */
    postPurchaseReservedDBInstancesOffering(req: operations.POSTPurchaseReservedDBInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseReservedDBInstancesOfferingResponse>;
    /**
     * <p>You might need to reboot your DB cluster, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB cluster parameter group associated with the DB cluster, reboot the DB cluster for the changes to take effect.</p> <p>Rebooting a DB cluster restarts the database engine service. Rebooting a DB cluster results in a momentary outage, during which the DB cluster status is set to rebooting.</p> <p>Use this operation only for a non-Aurora Multi-AZ DB cluster.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postRebootDBCluster(req: operations.POSTRebootDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootDBClusterResponse>;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p> <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
     */
    postRebootDBInstance(req: operations.POSTRebootDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootDBInstanceResponse>;
    /**
     * Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
     */
    postRegisterDBProxyTargets(req: operations.POSTRegisterDBProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterDBProxyTargetsResponse>;
    /**
     * <p>Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different Region.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postRemoveFromGlobalCluster(req: operations.POSTRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveFromGlobalClusterResponse>;
    /**
     * <p>Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postRemoveRoleFromDBCluster(req: operations.POSTRemoveRoleFromDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveRoleFromDBClusterResponse>;
    /**
     * Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
     */
    postRemoveRoleFromDBInstance(req: operations.POSTRemoveRoleFromDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveRoleFromDBInstanceResponse>;
    /**
     * Removes a source identifier from an existing RDS event notification subscription.
     */
    postRemoveSourceIdentifierFromSubscription(req: operations.POSTRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postRemoveTagsFromResource(req: operations.POSTRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsFromResourceResponse>;
    /**
     * <p>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postResetDBClusterParameterGroup(req: operations.POSTResetDBClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBClusterParameterGroupResponse>;
    /**
     * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
     */
    postResetDBParameterGroup(req: operations.POSTResetDBParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetDBParameterGroupResponse>;
    /**
     * <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>
     */
    postRestoreDBClusterFromS3(req: operations.POSTRestoreDBClusterFromS3Request, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterFromS3Response>;
    /**
     * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postRestoreDBClusterFromSnapshot(req: operations.POSTRestoreDBClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterFromSnapshotResponse>;
    /**
     * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>For Aurora, this action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB cluster deployments</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postRestoreDBClusterToPointInTime(req: operations.POSTRestoreDBClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBClusterToPointInTimeResponse>;
    /**
     * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
     */
    postRestoreDBInstanceFromDBSnapshot(req: operations.POSTRestoreDBInstanceFromDBSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBInstanceFromDBSnapshotResponse>;
    /**
     * <p>Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p> <p>This command doesn't apply to RDS Custom.</p>
     */
    postRestoreDBInstanceFromS3(req: operations.POSTRestoreDBInstanceFromS3Request, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBInstanceFromS3Response>;
    /**
     * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
     */
    postRestoreDBInstanceToPointInTime(req: operations.POSTRestoreDBInstanceToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreDBInstanceToPointInTimeResponse>;
    /**
     * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p> <note> <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p> </note>
     */
    postRevokeDBSecurityGroupIngress(req: operations.POSTRevokeDBSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeDBSecurityGroupIngressResponse>;
    /**
     * Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.
     */
    postStartActivityStream(req: operations.POSTStartActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartActivityStreamResponse>;
    /**
     * <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postStartDBCluster(req: operations.POSTStartDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartDBClusterResponse>;
    /**
     * <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p> </note>
     */
    postStartDBInstance(req: operations.POSTStartDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartDBInstanceResponse>;
    /**
     * <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>This command doesn't apply to RDS Custom.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postStartDBInstanceAutomatedBackupsReplication(req: operations.POSTStartDBInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartDBInstanceAutomatedBackupsReplicationResponse>;
    /**
     * <p>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket.</p> <p>You can't export snapshot data from RDS Custom DB instances.</p> <p>You can't export cluster data from Multi-AZ DB clusters.</p> <p>For more information on exporting DB snapshot data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot data to Amazon S3</a> in the <i>Amazon RDS User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p> <p>For more information on exporting DB cluster data, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postStartExportTask(req: operations.POSTStartExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartExportTaskResponse>;
    /**
     * <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html"> Monitoring Amazon Aurora with Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.html"> Monitoring Amazon RDS with Database Activity Streams</a> in the <i>Amazon RDS User Guide</i>.</p>
     */
    postStopActivityStream(req: operations.POSTStopActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopActivityStreamResponse>;
    /**
     * <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
     */
    postStopDBCluster(req: operations.POSTStopDBClusterRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopDBClusterResponse>;
    /**
     * <p>Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead.</p> </note>
     */
    postStopDBInstance(req: operations.POSTStopDBInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopDBInstanceResponse>;
    /**
     * <p>Stops automated backup replication for a DB instance.</p> <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
     */
    postStopDBInstanceAutomatedBackupsReplication(req: operations.POSTStopDBInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopDBInstanceAutomatedBackupsReplicationResponse>;
    /**
     * <p>Switches over a blue/green deployment.</p> <p>Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
     */
    postSwitchoverBlueGreenDeployment(req: operations.POSTSwitchoverBlueGreenDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTSwitchoverBlueGreenDeploymentResponse>;
    /**
     * Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new primary database. Issue this command in the Region that hosts the current standby database.
     */
    postSwitchoverReadReplica(req: operations.POSTSwitchoverReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.POSTSwitchoverReadReplicaResponse>;
}
