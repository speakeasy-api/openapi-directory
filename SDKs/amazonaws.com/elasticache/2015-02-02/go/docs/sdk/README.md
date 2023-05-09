# SDK

## Overview

<fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticache/>
### Available Operations

* [GETAuthorizeCacheSecurityGroupIngress](#getauthorizecachesecuritygroupingress) - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
* [GETBatchApplyUpdateAction](#getbatchapplyupdateaction) - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
* [GETBatchStopUpdateAction](#getbatchstopupdateaction) - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
* [GETCompleteMigration](#getcompletemigration) - Complete the migration of data.
* [GETCreateGlobalReplicationGroup](#getcreateglobalreplicationgroup) - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
* [GETDecreaseNodeGroupsInGlobalReplicationGroup](#getdecreasenodegroupsinglobalreplicationgroup) - Decreases the number of node groups in a Global datastore
* [GETDeleteCacheCluster](#getdeletecachecluster) - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
* [GETDeleteCacheParameterGroup](#getdeletecacheparametergroup) - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
* [GETDeleteCacheSecurityGroup](#getdeletecachesecuritygroup) - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
* [GETDeleteCacheSubnetGroup](#getdeletecachesubnetgroup) - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
* [GETDeleteGlobalReplicationGroup](#getdeleteglobalreplicationgroup) - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
* [GETDeleteReplicationGroup](#getdeletereplicationgroup) - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [GETDeleteSnapshot](#getdeletesnapshot) - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [GETDeleteUser](#getdeleteuser) - For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [GETDeleteUserGroup](#getdeleteusergroup) - For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [GETDescribeCacheClusters](#getdescribecacheclusters) - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
* [GETDescribeCacheEngineVersions](#getdescribecacheengineversions) - Returns a list of the available cache engines and their versions.
* [GETDescribeCacheParameterGroups](#getdescribecacheparametergroups) - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
* [GETDescribeCacheParameters](#getdescribecacheparameters) - Returns the detailed parameter list for a particular cache parameter group.
* [GETDescribeCacheSecurityGroups](#getdescribecachesecuritygroups) - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
* [GETDescribeCacheSubnetGroups](#getdescribecachesubnetgroups) - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
* [GETDescribeEngineDefaultParameters](#getdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified cache engine.
* [GETDescribeEvents](#getdescribeevents) - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [GETDescribeGlobalReplicationGroups](#getdescribeglobalreplicationgroups) - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
* [GETDescribeReplicationGroups](#getdescribereplicationgroups) - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [GETDescribeReservedCacheNodes](#getdescribereservedcachenodes) - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
* [GETDescribeReservedCacheNodesOfferings](#getdescribereservedcachenodesofferings) - Lists available reserved cache node offerings.
* [GETDescribeServiceUpdates](#getdescribeserviceupdates) - Returns details of the service updates
* [GETDescribeSnapshots](#getdescribesnapshots) - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [GETDescribeUpdateActions](#getdescribeupdateactions) - Returns details of the update actions 
* [GETDescribeUserGroups](#getdescribeusergroups) - Returns a list of user groups.
* [GETDisassociateGlobalReplicationGroup](#getdisassociateglobalreplicationgroup) - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
* [GETFailoverGlobalReplicationGroup](#getfailoverglobalreplicationgroup) - Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
* [GETListAllowedNodeTypeModifications](#getlistallowednodetypemodifications) - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
* [GETListTagsForResource](#getlisttagsforresource) - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
* [GETModifyCacheSubnetGroup](#getmodifycachesubnetgroup) - Modifies an existing cache subnet group.
* [GETModifyGlobalReplicationGroup](#getmodifyglobalreplicationgroup) - Modifies the settings for a Global datastore.
* [GETModifyUser](#getmodifyuser) - Changes user password(s) and/or access string.
* [GETModifyUserGroup](#getmodifyusergroup) - Changes the list of users that belong to the user group.
* [GETRebalanceSlotsInGlobalReplicationGroup](#getrebalanceslotsinglobalreplicationgroup) - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
* [GETRebootCacheCluster](#getrebootcachecluster) - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
* [GETRemoveTagsFromResource](#getremovetagsfromresource) - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
* [GETRevokeCacheSecurityGroupIngress](#getrevokecachesecuritygroupingress) - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
* [GETTestFailover](#gettestfailover) - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
* [POSTAddTagsToResource](#postaddtagstoresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
* [POSTAuthorizeCacheSecurityGroupIngress](#postauthorizecachesecuritygroupingress) - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
* [POSTBatchApplyUpdateAction](#postbatchapplyupdateaction) - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
* [POSTBatchStopUpdateAction](#postbatchstopupdateaction) - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
* [POSTCompleteMigration](#postcompletemigration) - Complete the migration of data.
* [POSTCopySnapshot](#postcopysnapshot) - <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
* [POSTCreateCacheCluster](#postcreatecachecluster) - <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
* [POSTCreateCacheParameterGroup](#postcreatecacheparametergroup) - <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
* [POSTCreateCacheSecurityGroup](#postcreatecachesecuritygroup) - <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
* [POSTCreateCacheSubnetGroup](#postcreatecachesubnetgroup) - <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
* [POSTCreateGlobalReplicationGroup](#postcreateglobalreplicationgroup) - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
* [POSTCreateReplicationGroup](#postcreatereplicationgroup) - <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTCreateSnapshot](#postcreatesnapshot) - <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTCreateUser](#postcreateuser) - For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
* [POSTCreateUserGroup](#postcreateusergroup) - For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 
* [POSTDecreaseNodeGroupsInGlobalReplicationGroup](#postdecreasenodegroupsinglobalreplicationgroup) - Decreases the number of node groups in a Global datastore
* [POSTDecreaseReplicaCount](#postdecreasereplicacount) - Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
* [POSTDeleteCacheCluster](#postdeletecachecluster) - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
* [POSTDeleteCacheParameterGroup](#postdeletecacheparametergroup) - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
* [POSTDeleteCacheSecurityGroup](#postdeletecachesecuritygroup) - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
* [POSTDeleteCacheSubnetGroup](#postdeletecachesubnetgroup) - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
* [POSTDeleteGlobalReplicationGroup](#postdeleteglobalreplicationgroup) - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
* [POSTDeleteReplicationGroup](#postdeletereplicationgroup) - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTDeleteSnapshot](#postdeletesnapshot) - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTDeleteUser](#postdeleteuser) - For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [POSTDeleteUserGroup](#postdeleteusergroup) - For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [POSTDescribeCacheClusters](#postdescribecacheclusters) - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
* [POSTDescribeCacheEngineVersions](#postdescribecacheengineversions) - Returns a list of the available cache engines and their versions.
* [POSTDescribeCacheParameterGroups](#postdescribecacheparametergroups) - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
* [POSTDescribeCacheParameters](#postdescribecacheparameters) - Returns the detailed parameter list for a particular cache parameter group.
* [POSTDescribeCacheSecurityGroups](#postdescribecachesecuritygroups) - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
* [POSTDescribeCacheSubnetGroups](#postdescribecachesubnetgroups) - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
* [POSTDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified cache engine.
* [POSTDescribeEvents](#postdescribeevents) - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [POSTDescribeGlobalReplicationGroups](#postdescribeglobalreplicationgroups) - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
* [POSTDescribeReplicationGroups](#postdescribereplicationgroups) - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTDescribeReservedCacheNodes](#postdescribereservedcachenodes) - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
* [POSTDescribeReservedCacheNodesOfferings](#postdescribereservedcachenodesofferings) - Lists available reserved cache node offerings.
* [POSTDescribeServiceUpdates](#postdescribeserviceupdates) - Returns details of the service updates
* [POSTDescribeSnapshots](#postdescribesnapshots) - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTDescribeUpdateActions](#postdescribeupdateactions) - Returns details of the update actions 
* [POSTDescribeUserGroups](#postdescribeusergroups) - Returns a list of user groups.
* [POSTDescribeUsers](#postdescribeusers) - Returns a list of users.
* [POSTDisassociateGlobalReplicationGroup](#postdisassociateglobalreplicationgroup) - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
* [POSTFailoverGlobalReplicationGroup](#postfailoverglobalreplicationgroup) - Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
* [POSTIncreaseNodeGroupsInGlobalReplicationGroup](#postincreasenodegroupsinglobalreplicationgroup) - Increase the number of node groups in the Global datastore
* [POSTIncreaseReplicaCount](#postincreasereplicacount) - Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
* [POSTListAllowedNodeTypeModifications](#postlistallowednodetypemodifications) - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
* [POSTListTagsForResource](#postlisttagsforresource) - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
* [POSTModifyCacheCluster](#postmodifycachecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [POSTModifyCacheParameterGroup](#postmodifycacheparametergroup) - Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [POSTModifyCacheSubnetGroup](#postmodifycachesubnetgroup) - Modifies an existing cache subnet group.
* [POSTModifyGlobalReplicationGroup](#postmodifyglobalreplicationgroup) - Modifies the settings for a Global datastore.
* [POSTModifyReplicationGroup](#postmodifyreplicationgroup) - <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
* [POSTModifyReplicationGroupShardConfiguration](#postmodifyreplicationgroupshardconfiguration) - Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.
* [POSTModifyUser](#postmodifyuser) - Changes user password(s) and/or access string.
* [POSTModifyUserGroup](#postmodifyusergroup) - Changes the list of users that belong to the user group.
* [POSTPurchaseReservedCacheNodesOffering](#postpurchasereservedcachenodesoffering) - Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.
* [POSTRebalanceSlotsInGlobalReplicationGroup](#postrebalanceslotsinglobalreplicationgroup) - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
* [POSTRebootCacheCluster](#postrebootcachecluster) - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
* [POSTRemoveTagsFromResource](#postremovetagsfromresource) - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
* [POSTResetCacheParameterGroup](#postresetcacheparametergroup) - Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
* [POSTRevokeCacheSecurityGroupIngress](#postrevokecachesecuritygroupingress) - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
* [POSTStartMigration](#poststartmigration) - Start the migration of data.
* [POSTTestFailover](#posttestfailover) - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

## GETAuthorizeCacheSecurityGroupIngress

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

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
    res, err := s.SDK.GETAuthorizeCacheSecurityGroupIngress(ctx, operations.GETAuthorizeCacheSecurityGroupIngressRequest{
        Action: operations.GETAuthorizeCacheSecurityGroupIngressActionEnumAuthorizeCacheSecurityGroupIngress,
        CacheSecurityGroupName: "deserunt",
        Ec2SecurityGroupName: "suscipit",
        Ec2SecurityGroupOwnerID: "iure",
        Version: operations.GETAuthorizeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202,
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

    if res.Body != nil {
        // handle response
    }
}
```

## GETBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

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
    res, err := s.SDK.GETBatchApplyUpdateAction(ctx, operations.GETBatchApplyUpdateActionRequest{
        Action: operations.GETBatchApplyUpdateActionActionEnumBatchApplyUpdateAction,
        CacheClusterIds: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        ReplicationGroupIds: []string{
            "recusandae",
            "temporibus",
        },
        ServiceUpdateName: "ab",
        Version: operations.GETBatchApplyUpdateActionVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
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

## GETBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

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
    res, err := s.SDK.GETBatchStopUpdateAction(ctx, operations.GETBatchStopUpdateActionRequest{
        Action: operations.GETBatchStopUpdateActionActionEnumBatchStopUpdateAction,
        CacheClusterIds: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
        ReplicationGroupIds: []string{
            "quod",
            "quod",
        },
        ServiceUpdateName: "esse",
        Version: operations.GETBatchStopUpdateActionVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCompleteMigration

Complete the migration of data.

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
    res, err := s.SDK.GETCompleteMigration(ctx, operations.GETCompleteMigrationRequest{
        Action: operations.GETCompleteMigrationActionEnumCompleteMigration,
        Force: sdk.Bool(false),
        ReplicationGroupID: "fugit",
        Version: operations.GETCompleteMigrationVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
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

## GETCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

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
    res, err := s.SDK.GETCreateGlobalReplicationGroup(ctx, operations.GETCreateGlobalReplicationGroupRequest{
        Action: operations.GETCreateGlobalReplicationGroupActionEnumCreateGlobalReplicationGroup,
        GlobalReplicationGroupDescription: sdk.String("modi"),
        GlobalReplicationGroupIDSuffix: "qui",
        PrimaryReplicationGroupID: "impedit",
        Version: operations.GETCreateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
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

## GETDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

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
    res, err := s.SDK.GETDecreaseNodeGroupsInGlobalReplicationGroup(ctx, operations.GETDecreaseNodeGroupsInGlobalReplicationGroupRequest{
        Action: operations.GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnumDecreaseNodeGroupsInGlobalReplicationGroup,
        ApplyImmediately: false,
        GlobalNodeGroupsToRemove: []string{
            "sed",
            "iste",
            "dolor",
        },
        GlobalNodeGroupsToRetain: []string{
            "laboriosam",
            "hic",
            "saepe",
        },
        GlobalReplicationGroupID: "fuga",
        NodeGroupCount: 449950,
        Version: operations.GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

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
    res, err := s.SDK.GETDeleteCacheCluster(ctx, operations.GETDeleteCacheClusterRequest{
        Action: operations.GETDeleteCacheClusterActionEnumDeleteCacheCluster,
        CacheClusterID: "reiciendis",
        FinalSnapshotIdentifier: sdk.String("est"),
        Version: operations.GETDeleteCacheClusterVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
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

## GETDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

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
    res, err := s.SDK.GETDeleteCacheParameterGroup(ctx, operations.GETDeleteCacheParameterGroupRequest{
        Action: operations.GETDeleteCacheParameterGroupActionEnumDeleteCacheParameterGroup,
        CacheParameterGroupName: "enim",
        Version: operations.GETDeleteCacheParameterGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

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
    res, err := s.SDK.GETDeleteCacheSecurityGroup(ctx, operations.GETDeleteCacheSecurityGroupRequest{
        Action: operations.GETDeleteCacheSecurityGroupActionEnumDeleteCacheSecurityGroup,
        CacheSecurityGroupName: "doloribus",
        Version: operations.GETDeleteCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

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
    res, err := s.SDK.GETDeleteCacheSubnetGroup(ctx, operations.GETDeleteCacheSubnetGroupRequest{
        Action: operations.GETDeleteCacheSubnetGroupActionEnumDeleteCacheSubnetGroup,
        CacheSubnetGroupName: "mollitia",
        Version: operations.GETDeleteCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

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
    res, err := s.SDK.GETDeleteGlobalReplicationGroup(ctx, operations.GETDeleteGlobalReplicationGroupRequest{
        Action: operations.GETDeleteGlobalReplicationGroupActionEnumDeleteGlobalReplicationGroup,
        GlobalReplicationGroupID: "quia",
        RetainPrimaryReplicationGroup: false,
        Version: operations.GETDeleteGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.GETDeleteReplicationGroup(ctx, operations.GETDeleteReplicationGroupRequest{
        Action: operations.GETDeleteReplicationGroupActionEnumDeleteReplicationGroup,
        FinalSnapshotIdentifier: sdk.String("sequi"),
        ReplicationGroupID: "tenetur",
        RetainPrimaryCluster: sdk.Bool(false),
        Version: operations.GETDeleteReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.GETDeleteSnapshot(ctx, operations.GETDeleteSnapshotRequest{
        Action: operations.GETDeleteSnapshotActionEnumDeleteSnapshot,
        SnapshotName: "laborum",
        Version: operations.GETDeleteSnapshotVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
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

## GETDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

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
    res, err := s.SDK.GETDeleteUser(ctx, operations.GETDeleteUserRequest{
        Action: operations.GETDeleteUserActionEnumDeleteUser,
        UserID: "ipsa",
        Version: operations.GETDeleteUserVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

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
    res, err := s.SDK.GETDeleteUserGroup(ctx, operations.GETDeleteUserGroupRequest{
        Action: operations.GETDeleteUserGroupActionEnumDeleteUserGroup,
        UserGroupID: "maiores",
        Version: operations.GETDeleteUserGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

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
    res, err := s.SDK.GETDescribeCacheClusters(ctx, operations.GETDescribeCacheClustersRequest{
        Action: operations.GETDescribeCacheClustersActionEnumDescribeCacheClusters,
        CacheClusterID: sdk.String("accusamus"),
        Marker: sdk.String("commodi"),
        MaxRecords: sdk.Int64(918236),
        ShowCacheClustersNotInReplicationGroups: sdk.Bool(false),
        ShowCacheNodeInfo: sdk.Bool(false),
        Version: operations.GETDescribeCacheClustersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
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

## GETDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

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
    res, err := s.SDK.GETDescribeCacheEngineVersions(ctx, operations.GETDescribeCacheEngineVersionsRequest{
        Action: operations.GETDescribeCacheEngineVersionsActionEnumDescribeCacheEngineVersions,
        CacheParameterGroupFamily: sdk.String("praesentium"),
        DefaultOnly: sdk.Bool(false),
        Engine: sdk.String("rem"),
        EngineVersion: sdk.String("voluptates"),
        Marker: sdk.String("quasi"),
        MaxRecords: sdk.Int64(921158),
        Version: operations.GETDescribeCacheEngineVersionsVersionEnumTwoThousandAndFifteen0202,
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

## GETDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

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
    res, err := s.SDK.GETDescribeCacheParameterGroups(ctx, operations.GETDescribeCacheParameterGroupsRequest{
        Action: operations.GETDescribeCacheParameterGroupsActionEnumDescribeCacheParameterGroups,
        CacheParameterGroupName: sdk.String("quibusdam"),
        Marker: sdk.String("explicabo"),
        MaxRecords: sdk.Int64(647174),
        Version: operations.GETDescribeCacheParameterGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
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

## GETDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

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
    res, err := s.SDK.GETDescribeCacheParameters(ctx, operations.GETDescribeCacheParametersRequest{
        Action: operations.GETDescribeCacheParametersActionEnumDescribeCacheParameters,
        CacheParameterGroupName: "quos",
        Marker: sdk.String("perferendis"),
        MaxRecords: sdk.Int64(164940),
        Source: sdk.String("assumenda"),
        Version: operations.GETDescribeCacheParametersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
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

## GETDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

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
    res, err := s.SDK.GETDescribeCacheSecurityGroups(ctx, operations.GETDescribeCacheSecurityGroupsRequest{
        Action: operations.GETDescribeCacheSecurityGroupsActionEnumDescribeCacheSecurityGroups,
        CacheSecurityGroupName: sdk.String("tempore"),
        Marker: sdk.String("labore"),
        MaxRecords: sdk.Int64(962189),
        Version: operations.GETDescribeCacheSecurityGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
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

## GETDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

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
    res, err := s.SDK.GETDescribeCacheSubnetGroups(ctx, operations.GETDescribeCacheSubnetGroupsRequest{
        Action: operations.GETDescribeCacheSubnetGroupsActionEnumDescribeCacheSubnetGroups,
        CacheSubnetGroupName: sdk.String("sint"),
        Marker: sdk.String("officia"),
        MaxRecords: sdk.Int64(223081),
        Version: operations.GETDescribeCacheSubnetGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified cache engine.

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
    res, err := s.SDK.GETDescribeEngineDefaultParameters(ctx, operations.GETDescribeEngineDefaultParametersRequest{
        Action: operations.GETDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters,
        CacheParameterGroupFamily: "rerum",
        Marker: sdk.String("dicta"),
        MaxRecords: sdk.Int64(297437),
        Version: operations.GETDescribeEngineDefaultParametersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
    res, err := s.SDK.GETDescribeEvents(ctx, operations.GETDescribeEventsRequest{
        Action: operations.GETDescribeEventsActionEnumDescribeEvents,
        Duration: sdk.Int64(581273),
        EndTime: types.MustTimeFromString("2022-02-13T03:59:53.583Z"),
        Marker: sdk.String("delectus"),
        MaxRecords: sdk.Int64(692532),
        SourceIdentifier: sdk.String("provident"),
        SourceType: operations.GETDescribeEventsSourceTypeEnumUser.ToPointer(),
        StartTime: types.MustTimeFromString("2021-12-31T00:47:48.012Z"),
        Version: operations.GETDescribeEventsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
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

## GETDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

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
    res, err := s.SDK.GETDescribeGlobalReplicationGroups(ctx, operations.GETDescribeGlobalReplicationGroupsRequest{
        Action: operations.GETDescribeGlobalReplicationGroupsActionEnumDescribeGlobalReplicationGroups,
        GlobalReplicationGroupID: sdk.String("omnis"),
        Marker: sdk.String("molestiae"),
        MaxRecords: sdk.Int64(19193),
        ShowMemberInfo: sdk.Bool(false),
        Version: operations.GETDescribeGlobalReplicationGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
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

## GETDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.GETDescribeReplicationGroups(ctx, operations.GETDescribeReplicationGroupsRequest{
        Action: operations.GETDescribeReplicationGroupsActionEnumDescribeReplicationGroups,
        Marker: sdk.String("natus"),
        MaxRecords: sdk.Int64(749170),
        ReplicationGroupID: sdk.String("eum"),
        Version: operations.GETDescribeReplicationGroupsVersionEnumTwoThousandAndFifteen0202,
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

## GETDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

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
    res, err := s.SDK.GETDescribeReservedCacheNodes(ctx, operations.GETDescribeReservedCacheNodesRequest{
        Action: operations.GETDescribeReservedCacheNodesActionEnumDescribeReservedCacheNodes,
        CacheNodeType: sdk.String("provident"),
        Duration: sdk.String("quos"),
        Marker: sdk.String("sint"),
        MaxRecords: sdk.Int64(33625),
        OfferingType: sdk.String("mollitia"),
        ProductDescription: sdk.String("reiciendis"),
        ReservedCacheNodeID: sdk.String("mollitia"),
        ReservedCacheNodesOfferingID: sdk.String("ad"),
        Version: operations.GETDescribeReservedCacheNodesVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

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
    res, err := s.SDK.GETDescribeReservedCacheNodesOfferings(ctx, operations.GETDescribeReservedCacheNodesOfferingsRequest{
        Action: operations.GETDescribeReservedCacheNodesOfferingsActionEnumDescribeReservedCacheNodesOfferings,
        CacheNodeType: sdk.String("doloribus"),
        Duration: sdk.String("debitis"),
        Marker: sdk.String("eius"),
        MaxRecords: sdk.Int64(806194),
        OfferingType: sdk.String("deleniti"),
        ProductDescription: sdk.String("facilis"),
        ReservedCacheNodesOfferingID: sdk.String("in"),
        Version: operations.GETDescribeReservedCacheNodesOfferingsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeServiceUpdates

Returns details of the service updates

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
    res, err := s.SDK.GETDescribeServiceUpdates(ctx, operations.GETDescribeServiceUpdatesRequest{
        Action: operations.GETDescribeServiceUpdatesActionEnumDescribeServiceUpdates,
        Marker: sdk.String("quibusdam"),
        MaxRecords: sdk.Int64(149448),
        ServiceUpdateName: sdk.String("saepe"),
        ServiceUpdateStatus: []shared.ServiceUpdateStatusEnum{
            shared.ServiceUpdateStatusEnumAvailable,
            shared.ServiceUpdateStatusEnumAvailable,
            shared.ServiceUpdateStatusEnumCancelled,
            shared.ServiceUpdateStatusEnumCancelled,
        },
        Version: operations.GETDescribeServiceUpdatesVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.GETDescribeSnapshots(ctx, operations.GETDescribeSnapshotsRequest{
        Action: operations.GETDescribeSnapshotsActionEnumDescribeSnapshots,
        CacheClusterID: sdk.String("excepturi"),
        Marker: sdk.String("odit"),
        MaxRecords: sdk.Int64(407183),
        ReplicationGroupID: sdk.String("accusantium"),
        ShowNodeGroupConfig: sdk.Bool(false),
        SnapshotName: sdk.String("ab"),
        SnapshotSource: sdk.String("maiores"),
        Version: operations.GETDescribeSnapshotsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
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

## GETDescribeUpdateActions

Returns details of the update actions 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeUpdateActions(ctx, operations.GETDescribeUpdateActionsRequest{
        Action: operations.GETDescribeUpdateActionsActionEnumDescribeUpdateActions,
        CacheClusterIds: []string{
            "voluptatibus",
            "perferendis",
        },
        Engine: sdk.String("fugiat"),
        Marker: sdk.String("amet"),
        MaxRecords: sdk.Int64(11714),
        ReplicationGroupIds: []string{
            "corporis",
            "hic",
            "libero",
            "nobis",
        },
        ServiceUpdateName: sdk.String("dolores"),
        ServiceUpdateStatus: []shared.ServiceUpdateStatusEnum{
            shared.ServiceUpdateStatusEnumCancelled,
            shared.ServiceUpdateStatusEnumCancelled,
        },
        ServiceUpdateTimeRange: &operations.GETDescribeUpdateActionsServiceUpdateTimeRange{
            EndTime: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
            StartTime: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
        },
        ShowNodeLevelUpdateStatus: sdk.Bool(false),
        UpdateActionStatus: []shared.UpdateActionStatusEnum{
            shared.UpdateActionStatusEnumWaitingToStart,
        },
        Version: operations.GETDescribeUpdateActionsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
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

## GETDescribeUserGroups

Returns a list of user groups.

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
    res, err := s.SDK.GETDescribeUserGroups(ctx, operations.GETDescribeUserGroupsRequest{
        Action: operations.GETDescribeUserGroupsActionEnumDescribeUserGroups,
        Marker: sdk.String("omnis"),
        MaxRecords: sdk.Int64(704415),
        UserGroupID: sdk.String("perspiciatis"),
        Version: operations.GETDescribeUserGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

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
    res, err := s.SDK.GETDisassociateGlobalReplicationGroup(ctx, operations.GETDisassociateGlobalReplicationGroupRequest{
        Action: operations.GETDisassociateGlobalReplicationGroupActionEnumDisassociateGlobalReplicationGroup,
        GlobalReplicationGroupID: "rerum",
        ReplicationGroupID: "adipisci",
        ReplicationGroupRegion: "asperiores",
        Version: operations.GETDisassociateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
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

## GETFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

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
    res, err := s.SDK.GETFailoverGlobalReplicationGroup(ctx, operations.GETFailoverGlobalReplicationGroupRequest{
        Action: operations.GETFailoverGlobalReplicationGroupActionEnumFailoverGlobalReplicationGroup,
        GlobalReplicationGroupID: "nobis",
        PrimaryRegion: "libero",
        PrimaryReplicationGroupID: "delectus",
        Version: operations.GETFailoverGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
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

## GETListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

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
    res, err := s.SDK.GETListAllowedNodeTypeModifications(ctx, operations.GETListAllowedNodeTypeModificationsRequest{
        Action: operations.GETListAllowedNodeTypeModificationsActionEnumListAllowedNodeTypeModifications,
        CacheClusterID: sdk.String("ipsum"),
        ReplicationGroupID: sdk.String("hic"),
        Version: operations.GETListAllowedNodeTypeModificationsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListTagsForResource

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

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
    res, err := s.SDK.GETListTagsForResource(ctx, operations.GETListTagsForResourceRequest{
        Action: operations.GETListTagsForResourceActionEnumListTagsForResource,
        ResourceName: "numquam",
        Version: operations.GETListTagsForResourceVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
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

## GETModifyCacheSubnetGroup

Modifies an existing cache subnet group.

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
    res, err := s.SDK.GETModifyCacheSubnetGroup(ctx, operations.GETModifyCacheSubnetGroupRequest{
        Action: operations.GETModifyCacheSubnetGroupActionEnumModifyCacheSubnetGroup,
        CacheSubnetGroupDescription: sdk.String("quidem"),
        CacheSubnetGroupName: "voluptatibus",
        SubnetIds: []string{
            "natus",
            "eos",
        },
        Version: operations.GETModifyCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

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
    res, err := s.SDK.GETModifyGlobalReplicationGroup(ctx, operations.GETModifyGlobalReplicationGroupRequest{
        Action: operations.GETModifyGlobalReplicationGroupActionEnumModifyGlobalReplicationGroup,
        ApplyImmediately: false,
        AutomaticFailoverEnabled: sdk.Bool(false),
        CacheNodeType: sdk.String("voluptate"),
        CacheParameterGroupName: sdk.String("dolorum"),
        EngineVersion: sdk.String("deleniti"),
        GlobalReplicationGroupDescription: sdk.String("omnis"),
        GlobalReplicationGroupID: "necessitatibus",
        Version: operations.GETModifyGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyUser

Changes user password(s) and/or access string.

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
    res, err := s.SDK.GETModifyUser(ctx, operations.GETModifyUserRequest{
        AccessString: sdk.String("eius"),
        Action: operations.GETModifyUserActionEnumModifyUser,
        AppendAccessString: sdk.String("aspernatur"),
        AuthenticationMode: &operations.GETModifyUserAuthenticationMode{
            Passwords: []string{
                "amet",
            },
            Type: shared.InputAuthenticationTypeEnumIam.ToPointer(),
        },
        NoPasswordRequired: sdk.Bool(false),
        Passwords: []string{
            "ad",
            "saepe",
            "suscipit",
            "deserunt",
        },
        UserID: "provident",
        Version: operations.GETModifyUserVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("at"),
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

## GETModifyUserGroup

Changes the list of users that belong to the user group.

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
    res, err := s.SDK.GETModifyUserGroup(ctx, operations.GETModifyUserGroupRequest{
        Action: operations.GETModifyUserGroupActionEnumModifyUserGroup,
        UserGroupID: "tempora",
        UserIdsToAdd: []string{
            "quod",
            "officiis",
        },
        UserIdsToRemove: []string{
            "dolorum",
        },
        Version: operations.GETModifyUserGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
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

## GETRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

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
    res, err := s.SDK.GETRebalanceSlotsInGlobalReplicationGroup(ctx, operations.GETRebalanceSlotsInGlobalReplicationGroupRequest{
        Action: operations.GETRebalanceSlotsInGlobalReplicationGroupActionEnumRebalanceSlotsInGlobalReplicationGroup,
        ApplyImmediately: false,
        GlobalReplicationGroupID: "amet",
        Version: operations.GETRebalanceSlotsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
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

## GETRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

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
    res, err := s.SDK.GETRebootCacheCluster(ctx, operations.GETRebootCacheClusterRequest{
        Action: operations.GETRebootCacheClusterActionEnumRebootCacheCluster,
        CacheClusterID: "nihil",
        CacheNodeIdsToReboot: []string{
            "expedita",
        },
        Version: operations.GETRebootCacheClusterVersionEnumTwoThousandAndFifteen0202,
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

## GETRemoveTagsFromResource

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
        ResourceName: "ipsum",
        TagKeys: []string{
            "qui",
            "cupiditate",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndFifteen0202,
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

## GETRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

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
    res, err := s.SDK.GETRevokeCacheSecurityGroupIngress(ctx, operations.GETRevokeCacheSecurityGroupIngressRequest{
        Action: operations.GETRevokeCacheSecurityGroupIngressActionEnumRevokeCacheSecurityGroupIngress,
        CacheSecurityGroupName: "aspernatur",
        Ec2SecurityGroupName: "dolores",
        Ec2SecurityGroupOwnerID: "distinctio",
        Version: operations.GETRevokeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

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
    res, err := s.SDK.GETTestFailover(ctx, operations.GETTestFailoverRequest{
        Action: operations.GETTestFailoverActionEnumTestFailover,
        NodeGroupID: "fugit",
        ReplicationGroupID: "magni",
        Version: operations.GETTestFailoverVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("cumque"),
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

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>

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
        RequestBody: []byte("soluta"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAuthorizeCacheSecurityGroupIngress

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

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
    res, err := s.SDK.POSTAuthorizeCacheSecurityGroupIngress(ctx, operations.POSTAuthorizeCacheSecurityGroupIngressRequest{
        Action: operations.POSTAuthorizeCacheSecurityGroupIngressActionEnumAuthorizeCacheSecurityGroupIngress,
        RequestBody: []byte("tempore"),
        Version: operations.POSTAuthorizeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

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
    res, err := s.SDK.POSTBatchApplyUpdateAction(ctx, operations.POSTBatchApplyUpdateActionRequest{
        Action: operations.POSTBatchApplyUpdateActionActionEnumBatchApplyUpdateAction,
        RequestBody: []byte("dolorum"),
        Version: operations.POSTBatchApplyUpdateActionVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("itaque"),
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

## POSTBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

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
    res, err := s.SDK.POSTBatchStopUpdateAction(ctx, operations.POSTBatchStopUpdateActionRequest{
        Action: operations.POSTBatchStopUpdateActionActionEnumBatchStopUpdateAction,
        RequestBody: []byte("repellendus"),
        Version: operations.POSTBatchStopUpdateActionVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
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

## POSTCompleteMigration

Complete the migration of data.

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
    res, err := s.SDK.POSTCompleteMigration(ctx, operations.POSTCompleteMigrationRequest{
        Action: operations.POSTCompleteMigrationActionEnumCompleteMigration,
        RequestBody: []byte("laudantium"),
        Version: operations.POSTCompleteMigrationVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
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

## POSTCopySnapshot

<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>

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
    res, err := s.SDK.POSTCopySnapshot(ctx, operations.POSTCopySnapshotRequest{
        Action: operations.POSTCopySnapshotActionEnumCopySnapshot,
        RequestBody: []byte("ipsum"),
        Version: operations.POSTCopySnapshotVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
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

## POSTCreateCacheCluster

<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>

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
    res, err := s.SDK.POSTCreateCacheCluster(ctx, operations.POSTCreateCacheClusterRequest{
        Action: operations.POSTCreateCacheClusterActionEnumCreateCacheCluster,
        RequestBody: []byte("distinctio"),
        Version: operations.POSTCreateCacheClusterVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateCacheParameterGroup

<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>

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
    res, err := s.SDK.POSTCreateCacheParameterGroup(ctx, operations.POSTCreateCacheParameterGroupRequest{
        Action: operations.POSTCreateCacheParameterGroupActionEnumCreateCacheParameterGroup,
        RequestBody: []byte("quibusdam"),
        Version: operations.POSTCreateCacheParameterGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatibus"),
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

## POSTCreateCacheSecurityGroup

<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>

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
    res, err := s.SDK.POSTCreateCacheSecurityGroup(ctx, operations.POSTCreateCacheSecurityGroupRequest{
        Action: operations.POSTCreateCacheSecurityGroupActionEnumCreateCacheSecurityGroup,
        RequestBody: []byte("nulla"),
        Version: operations.POSTCreateCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateCacheSubnetGroup

<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>

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
    res, err := s.SDK.POSTCreateCacheSubnetGroup(ctx, operations.POSTCreateCacheSubnetGroupRequest{
        Action: operations.POSTCreateCacheSubnetGroupActionEnumCreateCacheSubnetGroup,
        RequestBody: []byte("alias"),
        Version: operations.POSTCreateCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

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
    res, err := s.SDK.POSTCreateGlobalReplicationGroup(ctx, operations.POSTCreateGlobalReplicationGroupRequest{
        Action: operations.POSTCreateGlobalReplicationGroupActionEnumCreateGlobalReplicationGroup,
        RequestBody: []byte("magnam"),
        Version: operations.POSTCreateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("maiores"),
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

## POSTCreateReplicationGroup

<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTCreateReplicationGroup(ctx, operations.POSTCreateReplicationGroupRequest{
        Action: operations.POSTCreateReplicationGroupActionEnumCreateReplicationGroup,
        RequestBody: []byte("ex"),
        Version: operations.POSTCreateReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateSnapshot

<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTCreateSnapshot(ctx, operations.POSTCreateSnapshotRequest{
        Action: operations.POSTCreateSnapshotActionEnumCreateSnapshot,
        RequestBody: []byte("ea"),
        Version: operations.POSTCreateSnapshotVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateUser

For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.

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
    res, err := s.SDK.POSTCreateUser(ctx, operations.POSTCreateUserRequest{
        Action: operations.POSTCreateUserActionEnumCreateUser,
        RequestBody: []byte("quo"),
        Version: operations.POSTCreateUserVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("a"),
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

## POSTCreateUserGroup

For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 

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
    res, err := s.SDK.POSTCreateUserGroup(ctx, operations.POSTCreateUserGroupRequest{
        Action: operations.POSTCreateUserGroupActionEnumCreateUserGroup,
        RequestBody: []byte("aut"),
        Version: operations.POSTCreateUserGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

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
    res, err := s.SDK.POSTDecreaseNodeGroupsInGlobalReplicationGroup(ctx, operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest{
        Action: operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupActionEnumDecreaseNodeGroupsInGlobalReplicationGroup,
        RequestBody: []byte("non"),
        Version: operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("eum"),
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

## POSTDecreaseReplicaCount

Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

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
    res, err := s.SDK.POSTDecreaseReplicaCount(ctx, operations.POSTDecreaseReplicaCountRequest{
        Action: operations.POSTDecreaseReplicaCountActionEnumDecreaseReplicaCount,
        RequestBody: []byte("nobis"),
        Version: operations.POSTDecreaseReplicaCountVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("quasi"),
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

## POSTDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

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
    res, err := s.SDK.POSTDeleteCacheCluster(ctx, operations.POSTDeleteCacheClusterRequest{
        Action: operations.POSTDeleteCacheClusterActionEnumDeleteCacheCluster,
        RequestBody: []byte("numquam"),
        Version: operations.POSTDeleteCacheClusterVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

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
    res, err := s.SDK.POSTDeleteCacheParameterGroup(ctx, operations.POSTDeleteCacheParameterGroupRequest{
        Action: operations.POSTDeleteCacheParameterGroupActionEnumDeleteCacheParameterGroup,
        RequestBody: []byte("esse"),
        Version: operations.POSTDeleteCacheParameterGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

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
    res, err := s.SDK.POSTDeleteCacheSecurityGroup(ctx, operations.POSTDeleteCacheSecurityGroupRequest{
        Action: operations.POSTDeleteCacheSecurityGroupActionEnumDeleteCacheSecurityGroup,
        RequestBody: []byte("eum"),
        Version: operations.POSTDeleteCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

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
    res, err := s.SDK.POSTDeleteCacheSubnetGroup(ctx, operations.POSTDeleteCacheSubnetGroupRequest{
        Action: operations.POSTDeleteCacheSubnetGroupActionEnumDeleteCacheSubnetGroup,
        RequestBody: []byte("id"),
        Version: operations.POSTDeleteCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

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
    res, err := s.SDK.POSTDeleteGlobalReplicationGroup(ctx, operations.POSTDeleteGlobalReplicationGroupRequest{
        Action: operations.POSTDeleteGlobalReplicationGroupActionEnumDeleteGlobalReplicationGroup,
        RequestBody: []byte("eos"),
        Version: operations.POSTDeleteGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("debitis"),
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

## POSTDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTDeleteReplicationGroup(ctx, operations.POSTDeleteReplicationGroupRequest{
        Action: operations.POSTDeleteReplicationGroupActionEnumDeleteReplicationGroup,
        RequestBody: []byte("aspernatur"),
        Version: operations.POSTDeleteReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTDeleteSnapshot(ctx, operations.POSTDeleteSnapshotRequest{
        Action: operations.POSTDeleteSnapshotActionEnumDeleteSnapshot,
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTDeleteSnapshotVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

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
    res, err := s.SDK.POSTDeleteUser(ctx, operations.POSTDeleteUserRequest{
        Action: operations.POSTDeleteUserActionEnumDeleteUser,
        RequestBody: []byte("commodi"),
        Version: operations.POSTDeleteUserVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("porro"),
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

## POSTDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

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
    res, err := s.SDK.POSTDeleteUserGroup(ctx, operations.POSTDeleteUserGroupRequest{
        Action: operations.POSTDeleteUserGroupActionEnumDeleteUserGroup,
        RequestBody: []byte("quas"),
        Version: operations.POSTDeleteUserGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("mollitia"),
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

## POSTDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

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
    res, err := s.SDK.POSTDescribeCacheClusters(ctx, operations.POSTDescribeCacheClustersRequest{
        Action: operations.POSTDescribeCacheClustersActionEnumDescribeCacheClusters,
        Marker: sdk.String("atque"),
        MaxRecords: sdk.String("explicabo"),
        RequestBody: []byte("minima"),
        Version: operations.POSTDescribeCacheClustersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

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
    res, err := s.SDK.POSTDescribeCacheEngineVersions(ctx, operations.POSTDescribeCacheEngineVersionsRequest{
        Action: operations.POSTDescribeCacheEngineVersionsActionEnumDescribeCacheEngineVersions,
        Marker: sdk.String("occaecati"),
        MaxRecords: sdk.String("atque"),
        RequestBody: []byte("et"),
        Version: operations.POSTDescribeCacheEngineVersionsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

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
    res, err := s.SDK.POSTDescribeCacheParameterGroups(ctx, operations.POSTDescribeCacheParameterGroupsRequest{
        Action: operations.POSTDescribeCacheParameterGroupsActionEnumDescribeCacheParameterGroups,
        Marker: sdk.String("vero"),
        MaxRecords: sdk.String("aliquid"),
        RequestBody: []byte("quasi"),
        Version: operations.POSTDescribeCacheParameterGroupsVersionEnumTwoThousandAndFifteen0202,
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

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

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
    res, err := s.SDK.POSTDescribeCacheParameters(ctx, operations.POSTDescribeCacheParametersRequest{
        Action: operations.POSTDescribeCacheParametersActionEnumDescribeCacheParameters,
        Marker: sdk.String("distinctio"),
        MaxRecords: sdk.String("eligendi"),
        RequestBody: []byte("sit"),
        Version: operations.POSTDescribeCacheParametersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("consequatur"),
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

## POSTDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

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
    res, err := s.SDK.POSTDescribeCacheSecurityGroups(ctx, operations.POSTDescribeCacheSecurityGroupsRequest{
        Action: operations.POSTDescribeCacheSecurityGroupsActionEnumDescribeCacheSecurityGroups,
        Marker: sdk.String("quaerat"),
        MaxRecords: sdk.String("sapiente"),
        RequestBody: []byte("consectetur"),
        Version: operations.POSTDescribeCacheSecurityGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
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

## POSTDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

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
    res, err := s.SDK.POSTDescribeCacheSubnetGroups(ctx, operations.POSTDescribeCacheSubnetGroupsRequest{
        Action: operations.POSTDescribeCacheSubnetGroupsActionEnumDescribeCacheSubnetGroups,
        Marker: sdk.String("quasi"),
        MaxRecords: sdk.String("a"),
        RequestBody: []byte("error"),
        Version: operations.POSTDescribeCacheSubnetGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("asperiores"),
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

## POSTDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified cache engine.

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
        Marker: sdk.String("veritatis"),
        MaxRecords: sdk.String("consequuntur"),
        RequestBody: []byte("quasi"),
        Version: operations.POSTDescribeEngineDefaultParametersVersionEnumTwoThousandAndFifteen0202,
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

## POSTDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
        Marker: sdk.String("in"),
        MaxRecords: sdk.String("eius"),
        RequestBody: []byte("libero"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dicta"),
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

## POSTDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

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
    res, err := s.SDK.POSTDescribeGlobalReplicationGroups(ctx, operations.POSTDescribeGlobalReplicationGroupsRequest{
        Action: operations.POSTDescribeGlobalReplicationGroupsActionEnumDescribeGlobalReplicationGroups,
        Marker: sdk.String("reprehenderit"),
        MaxRecords: sdk.String("ullam"),
        RequestBody: []byte("nisi"),
        Version: operations.POSTDescribeGlobalReplicationGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("deleniti"),
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

## POSTDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTDescribeReplicationGroups(ctx, operations.POSTDescribeReplicationGroupsRequest{
        Action: operations.POSTDescribeReplicationGroupsActionEnumDescribeReplicationGroups,
        Marker: sdk.String("dolorum"),
        MaxRecords: sdk.String("architecto"),
        RequestBody: []byte("omnis"),
        Version: operations.POSTDescribeReplicationGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

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
    res, err := s.SDK.POSTDescribeReservedCacheNodes(ctx, operations.POSTDescribeReservedCacheNodesRequest{
        Action: operations.POSTDescribeReservedCacheNodesActionEnumDescribeReservedCacheNodes,
        Marker: sdk.String("veritatis"),
        MaxRecords: sdk.String("consectetur"),
        RequestBody: []byte("adipisci"),
        Version: operations.POSTDescribeReservedCacheNodesVersionEnumTwoThousandAndFifteen0202,
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

## POSTDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

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
    res, err := s.SDK.POSTDescribeReservedCacheNodesOfferings(ctx, operations.POSTDescribeReservedCacheNodesOfferingsRequest{
        Action: operations.POSTDescribeReservedCacheNodesOfferingsActionEnumDescribeReservedCacheNodesOfferings,
        Marker: sdk.String("mollitia"),
        MaxRecords: sdk.String("ab"),
        RequestBody: []byte("corrupti"),
        Version: operations.POSTDescribeReservedCacheNodesOfferingsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeServiceUpdates

Returns details of the service updates

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
    res, err := s.SDK.POSTDescribeServiceUpdates(ctx, operations.POSTDescribeServiceUpdatesRequest{
        Action: operations.POSTDescribeServiceUpdatesActionEnumDescribeServiceUpdates,
        Marker: sdk.String("voluptas"),
        MaxRecords: sdk.String("aut"),
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTDescribeServiceUpdatesVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
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

## POSTDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTDescribeSnapshots(ctx, operations.POSTDescribeSnapshotsRequest{
        Action: operations.POSTDescribeSnapshotsActionEnumDescribeSnapshots,
        Marker: sdk.String("aperiam"),
        MaxRecords: sdk.String("ea"),
        RequestBody: []byte("quaerat"),
        Version: operations.POSTDescribeSnapshotsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
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

## POSTDescribeUpdateActions

Returns details of the update actions 

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
    res, err := s.SDK.POSTDescribeUpdateActions(ctx, operations.POSTDescribeUpdateActionsRequest{
        Action: operations.POSTDescribeUpdateActionsActionEnumDescribeUpdateActions,
        Marker: sdk.String("nemo"),
        MaxRecords: sdk.String("quae"),
        RequestBody: []byte("quaerat"),
        Version: operations.POSTDescribeUpdateActionsVersionEnumTwoThousandAndFifteen0202,
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

## POSTDescribeUserGroups

Returns a list of user groups.

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
    res, err := s.SDK.POSTDescribeUserGroups(ctx, operations.POSTDescribeUserGroupsRequest{
        Action: operations.POSTDescribeUserGroupsActionEnumDescribeUserGroups,
        Marker: sdk.String("suscipit"),
        MaxRecords: sdk.String("velit"),
        RequestBody: []byte("culpa"),
        Version: operations.POSTDescribeUserGroupsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeUsers

Returns a list of users.

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
    res, err := s.SDK.POSTDescribeUsers(ctx, operations.POSTDescribeUsersRequest{
        Action: operations.POSTDescribeUsersActionEnumDescribeUsers,
        Marker: sdk.String("vel"),
        MaxRecords: sdk.String("labore"),
        RequestBody: []byte("possimus"),
        Version: operations.POSTDescribeUsersVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("reiciendis"),
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

## POSTDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

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
    res, err := s.SDK.POSTDisassociateGlobalReplicationGroup(ctx, operations.POSTDisassociateGlobalReplicationGroupRequest{
        Action: operations.POSTDisassociateGlobalReplicationGroupActionEnumDisassociateGlobalReplicationGroup,
        RequestBody: []byte("nemo"),
        Version: operations.POSTDisassociateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("in"),
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

## POSTFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

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
    res, err := s.SDK.POSTFailoverGlobalReplicationGroup(ctx, operations.POSTFailoverGlobalReplicationGroupRequest{
        Action: operations.POSTFailoverGlobalReplicationGroupActionEnumFailoverGlobalReplicationGroup,
        RequestBody: []byte("earum"),
        Version: operations.POSTFailoverGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTIncreaseNodeGroupsInGlobalReplicationGroup

Increase the number of node groups in the Global datastore

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
    res, err := s.SDK.POSTIncreaseNodeGroupsInGlobalReplicationGroup(ctx, operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest{
        Action: operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnumIncreaseNodeGroupsInGlobalReplicationGroup,
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("amet"),
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

## POSTIncreaseReplicaCount

Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

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
    res, err := s.SDK.POSTIncreaseReplicaCount(ctx, operations.POSTIncreaseReplicaCountRequest{
        Action: operations.POSTIncreaseReplicaCountActionEnumIncreaseReplicaCount,
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTIncreaseReplicaCountVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

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
    res, err := s.SDK.POSTListAllowedNodeTypeModifications(ctx, operations.POSTListAllowedNodeTypeModificationsRequest{
        Action: operations.POSTListAllowedNodeTypeModificationsActionEnumListAllowedNodeTypeModifications,
        RequestBody: []byte("voluptates"),
        Version: operations.POSTListAllowedNodeTypeModificationsVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("aspernatur"),
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

## POSTListTagsForResource

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

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
        RequestBody: []byte("voluptas"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("minus"),
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

## POSTModifyCacheCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

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
    res, err := s.SDK.POSTModifyCacheCluster(ctx, operations.POSTModifyCacheClusterRequest{
        Action: operations.POSTModifyCacheClusterActionEnumModifyCacheCluster,
        RequestBody: []byte("blanditiis"),
        Version: operations.POSTModifyCacheClusterVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyCacheParameterGroup

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

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
    res, err := s.SDK.POSTModifyCacheParameterGroup(ctx, operations.POSTModifyCacheParameterGroupRequest{
        Action: operations.POSTModifyCacheParameterGroupActionEnumModifyCacheParameterGroup,
        RequestBody: []byte("cum"),
        Version: operations.POSTModifyCacheParameterGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("corrupti"),
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

## POSTModifyCacheSubnetGroup

Modifies an existing cache subnet group.

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
    res, err := s.SDK.POSTModifyCacheSubnetGroup(ctx, operations.POSTModifyCacheSubnetGroupRequest{
        Action: operations.POSTModifyCacheSubnetGroupActionEnumModifyCacheSubnetGroup,
        RequestBody: []byte("totam"),
        Version: operations.POSTModifyCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("sed"),
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

## POSTModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

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
    res, err := s.SDK.POSTModifyGlobalReplicationGroup(ctx, operations.POSTModifyGlobalReplicationGroupRequest{
        Action: operations.POSTModifyGlobalReplicationGroupActionEnumModifyGlobalReplicationGroup,
        RequestBody: []byte("explicabo"),
        Version: operations.POSTModifyGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyReplicationGroup

<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>

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
    res, err := s.SDK.POSTModifyReplicationGroup(ctx, operations.POSTModifyReplicationGroupRequest{
        Action: operations.POSTModifyReplicationGroupActionEnumModifyReplicationGroup,
        RequestBody: []byte("laborum"),
        Version: operations.POSTModifyReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyReplicationGroupShardConfiguration

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

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
    res, err := s.SDK.POSTModifyReplicationGroupShardConfiguration(ctx, operations.POSTModifyReplicationGroupShardConfigurationRequest{
        Action: operations.POSTModifyReplicationGroupShardConfigurationActionEnumModifyReplicationGroupShardConfiguration,
        RequestBody: []byte("architecto"),
        Version: operations.POSTModifyReplicationGroupShardConfigurationVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyUser

Changes user password(s) and/or access string.

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
    res, err := s.SDK.POSTModifyUser(ctx, operations.POSTModifyUserRequest{
        Action: operations.POSTModifyUserActionEnumModifyUser,
        RequestBody: []byte("maiores"),
        Version: operations.POSTModifyUserVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyUserGroup

Changes the list of users that belong to the user group.

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
    res, err := s.SDK.POSTModifyUserGroup(ctx, operations.POSTModifyUserGroupRequest{
        Action: operations.POSTModifyUserGroupActionEnumModifyUserGroup,
        RequestBody: []byte("occaecati"),
        Version: operations.POSTModifyUserGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("reiciendis"),
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

## POSTPurchaseReservedCacheNodesOffering

Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.

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
    res, err := s.SDK.POSTPurchaseReservedCacheNodesOffering(ctx, operations.POSTPurchaseReservedCacheNodesOfferingRequest{
        Action: operations.POSTPurchaseReservedCacheNodesOfferingActionEnumPurchaseReservedCacheNodesOffering,
        RequestBody: []byte("sit"),
        Version: operations.POSTPurchaseReservedCacheNodesOfferingVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("incidunt"),
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

## POSTRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

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
    res, err := s.SDK.POSTRebalanceSlotsInGlobalReplicationGroup(ctx, operations.POSTRebalanceSlotsInGlobalReplicationGroupRequest{
        Action: operations.POSTRebalanceSlotsInGlobalReplicationGroupActionEnumRebalanceSlotsInGlobalReplicationGroup,
        RequestBody: []byte("debitis"),
        Version: operations.POSTRebalanceSlotsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("minima"),
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

## POSTRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

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
    res, err := s.SDK.POSTRebootCacheCluster(ctx, operations.POSTRebootCacheClusterRequest{
        Action: operations.POSTRebootCacheClusterActionEnumRebootCacheCluster,
        RequestBody: []byte("reiciendis"),
        Version: operations.POSTRebootCacheClusterVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("in"),
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

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
        RequestBody: []byte("officiis"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResetCacheParameterGroup

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.

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
    res, err := s.SDK.POSTResetCacheParameterGroup(ctx, operations.POSTResetCacheParameterGroupRequest{
        Action: operations.POSTResetCacheParameterGroupActionEnumResetCacheParameterGroup,
        RequestBody: []byte("voluptatum"),
        Version: operations.POSTResetCacheParameterGroupVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("dolorum"),
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

## POSTRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

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
    res, err := s.SDK.POSTRevokeCacheSecurityGroupIngress(ctx, operations.POSTRevokeCacheSecurityGroupIngressRequest{
        Action: operations.POSTRevokeCacheSecurityGroupIngressActionEnumRevokeCacheSecurityGroupIngress,
        RequestBody: []byte("officia"),
        Version: operations.POSTRevokeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTStartMigration

Start the migration of data.

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
    res, err := s.SDK.POSTStartMigration(ctx, operations.POSTStartMigrationRequest{
        Action: operations.POSTStartMigrationActionEnumStartMigration,
        RequestBody: []byte("fugiat"),
        Version: operations.POSTStartMigrationVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("esse"),
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

## POSTTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

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
    res, err := s.SDK.POSTTestFailover(ctx, operations.POSTTestFailoverRequest{
        Action: operations.POSTTestFailoverActionEnumTestFailover,
        RequestBody: []byte("sit"),
        Version: operations.POSTTestFailoverVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("blanditiis"),
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
