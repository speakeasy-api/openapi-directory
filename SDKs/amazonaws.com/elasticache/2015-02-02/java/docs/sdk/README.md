# SDK

## Overview

<fullname>Amazon ElastiCache</fullname> <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud.</p> <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment.</p> <p>In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticache/>
### Available Operations

* [getAuthorizeCacheSecurityGroupIngress](#getauthorizecachesecuritygroupingress) - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
* [getBatchApplyUpdateAction](#getbatchapplyupdateaction) - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
* [getBatchStopUpdateAction](#getbatchstopupdateaction) - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
* [getCompleteMigration](#getcompletemigration) - Complete the migration of data.
* [getCreateGlobalReplicationGroup](#getcreateglobalreplicationgroup) - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
* [getDecreaseNodeGroupsInGlobalReplicationGroup](#getdecreasenodegroupsinglobalreplicationgroup) - Decreases the number of node groups in a Global datastore
* [getDeleteCacheCluster](#getdeletecachecluster) - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
* [getDeleteCacheParameterGroup](#getdeletecacheparametergroup) - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
* [getDeleteCacheSecurityGroup](#getdeletecachesecuritygroup) - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
* [getDeleteCacheSubnetGroup](#getdeletecachesubnetgroup) - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
* [getDeleteGlobalReplicationGroup](#getdeleteglobalreplicationgroup) - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
* [getDeleteReplicationGroup](#getdeletereplicationgroup) - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [getDeleteSnapshot](#getdeletesnapshot) - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [getDeleteUser](#getdeleteuser) - For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [getDeleteUserGroup](#getdeleteusergroup) - For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [getDescribeCacheClusters](#getdescribecacheclusters) - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
* [getDescribeCacheEngineVersions](#getdescribecacheengineversions) - Returns a list of the available cache engines and their versions.
* [getDescribeCacheParameterGroups](#getdescribecacheparametergroups) - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
* [getDescribeCacheParameters](#getdescribecacheparameters) - Returns the detailed parameter list for a particular cache parameter group.
* [getDescribeCacheSecurityGroups](#getdescribecachesecuritygroups) - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
* [getDescribeCacheSubnetGroups](#getdescribecachesubnetgroups) - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
* [getDescribeEngineDefaultParameters](#getdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified cache engine.
* [getDescribeEvents](#getdescribeevents) - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [getDescribeGlobalReplicationGroups](#getdescribeglobalreplicationgroups) - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
* [getDescribeReplicationGroups](#getdescribereplicationgroups) - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [getDescribeReservedCacheNodes](#getdescribereservedcachenodes) - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
* [getDescribeReservedCacheNodesOfferings](#getdescribereservedcachenodesofferings) - Lists available reserved cache node offerings.
* [getDescribeServiceUpdates](#getdescribeserviceupdates) - Returns details of the service updates
* [getDescribeSnapshots](#getdescribesnapshots) - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [getDescribeUpdateActions](#getdescribeupdateactions) - Returns details of the update actions 
* [getDescribeUserGroups](#getdescribeusergroups) - Returns a list of user groups.
* [getDisassociateGlobalReplicationGroup](#getdisassociateglobalreplicationgroup) - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
* [getFailoverGlobalReplicationGroup](#getfailoverglobalreplicationgroup) - Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
* [getListAllowedNodeTypeModifications](#getlistallowednodetypemodifications) - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
* [getListTagsForResource](#getlisttagsforresource) - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
* [getModifyCacheSubnetGroup](#getmodifycachesubnetgroup) - Modifies an existing cache subnet group.
* [getModifyGlobalReplicationGroup](#getmodifyglobalreplicationgroup) - Modifies the settings for a Global datastore.
* [getModifyUser](#getmodifyuser) - Changes user password(s) and/or access string.
* [getModifyUserGroup](#getmodifyusergroup) - Changes the list of users that belong to the user group.
* [getRebalanceSlotsInGlobalReplicationGroup](#getrebalanceslotsinglobalreplicationgroup) - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
* [getRebootCacheCluster](#getrebootcachecluster) - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
* [getRemoveTagsFromResource](#getremovetagsfromresource) - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
* [getRevokeCacheSecurityGroupIngress](#getrevokecachesecuritygroupingress) - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
* [getTestFailover](#gettestfailover) - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
* [postAddTagsToResource](#postaddtagstoresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
* [postAuthorizeCacheSecurityGroupIngress](#postauthorizecachesecuritygroupingress) - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
* [postBatchApplyUpdateAction](#postbatchapplyupdateaction) - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
* [postBatchStopUpdateAction](#postbatchstopupdateaction) - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
* [postCompleteMigration](#postcompletemigration) - Complete the migration of data.
* [postCopySnapshot](#postcopysnapshot) - <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
* [postCreateCacheCluster](#postcreatecachecluster) - <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
* [postCreateCacheParameterGroup](#postcreatecacheparametergroup) - <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
* [postCreateCacheSecurityGroup](#postcreatecachesecuritygroup) - <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
* [postCreateCacheSubnetGroup](#postcreatecachesubnetgroup) - <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
* [postCreateGlobalReplicationGroup](#postcreateglobalreplicationgroup) - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
* [postCreateReplicationGroup](#postcreatereplicationgroup) - <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postCreateSnapshot](#postcreatesnapshot) - <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postCreateUser](#postcreateuser) - For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
* [postCreateUserGroup](#postcreateusergroup) - For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 
* [postDecreaseNodeGroupsInGlobalReplicationGroup](#postdecreasenodegroupsinglobalreplicationgroup) - Decreases the number of node groups in a Global datastore
* [postDecreaseReplicaCount](#postdecreasereplicacount) - Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
* [postDeleteCacheCluster](#postdeletecachecluster) - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
* [postDeleteCacheParameterGroup](#postdeletecacheparametergroup) - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
* [postDeleteCacheSecurityGroup](#postdeletecachesecuritygroup) - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
* [postDeleteCacheSubnetGroup](#postdeletecachesubnetgroup) - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
* [postDeleteGlobalReplicationGroup](#postdeleteglobalreplicationgroup) - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
* [postDeleteReplicationGroup](#postdeletereplicationgroup) - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postDeleteSnapshot](#postdeletesnapshot) - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postDeleteUser](#postdeleteuser) - For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [postDeleteUserGroup](#postdeleteusergroup) - For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 
* [postDescribeCacheClusters](#postdescribecacheclusters) - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
* [postDescribeCacheEngineVersions](#postdescribecacheengineversions) - Returns a list of the available cache engines and their versions.
* [postDescribeCacheParameterGroups](#postdescribecacheparametergroups) - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
* [postDescribeCacheParameters](#postdescribecacheparameters) - Returns the detailed parameter list for a particular cache parameter group.
* [postDescribeCacheSecurityGroups](#postdescribecachesecuritygroups) - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 
* [postDescribeCacheSubnetGroups](#postdescribecachesubnetgroups) - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 
* [postDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters) - Returns the default engine and system parameter information for the specified cache engine.
* [postDescribeEvents](#postdescribeevents) - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [postDescribeGlobalReplicationGroups](#postdescribeglobalreplicationgroups) - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 
* [postDescribeReplicationGroups](#postdescribereplicationgroups) - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postDescribeReservedCacheNodes](#postdescribereservedcachenodes) - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
* [postDescribeReservedCacheNodesOfferings](#postdescribereservedcachenodesofferings) - Lists available reserved cache node offerings.
* [postDescribeServiceUpdates](#postdescribeserviceupdates) - Returns details of the service updates
* [postDescribeSnapshots](#postdescribesnapshots) - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
* [postDescribeUpdateActions](#postdescribeupdateactions) - Returns details of the update actions 
* [postDescribeUserGroups](#postdescribeusergroups) - Returns a list of user groups.
* [postDescribeUsers](#postdescribeusers) - Returns a list of users.
* [postDisassociateGlobalReplicationGroup](#postdisassociateglobalreplicationgroup) - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
* [postFailoverGlobalReplicationGroup](#postfailoverglobalreplicationgroup) - Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.
* [postIncreaseNodeGroupsInGlobalReplicationGroup](#postincreasenodegroupsinglobalreplicationgroup) - Increase the number of node groups in the Global datastore
* [postIncreaseReplicaCount](#postincreasereplicacount) - Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
* [postListAllowedNodeTypeModifications](#postlistallowednodetypemodifications) - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
* [postListTagsForResource](#postlisttagsforresource) - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
* [postModifyCacheCluster](#postmodifycachecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [postModifyCacheParameterGroup](#postmodifycacheparametergroup) - Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [postModifyCacheSubnetGroup](#postmodifycachesubnetgroup) - Modifies an existing cache subnet group.
* [postModifyGlobalReplicationGroup](#postmodifyglobalreplicationgroup) - Modifies the settings for a Global datastore.
* [postModifyReplicationGroup](#postmodifyreplicationgroup) - <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
* [postModifyReplicationGroupShardConfiguration](#postmodifyreplicationgroupshardconfiguration) - Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.
* [postModifyUser](#postmodifyuser) - Changes user password(s) and/or access string.
* [postModifyUserGroup](#postmodifyusergroup) - Changes the list of users that belong to the user group.
* [postPurchaseReservedCacheNodesOffering](#postpurchasereservedcachenodesoffering) - Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.
* [postRebalanceSlotsInGlobalReplicationGroup](#postrebalanceslotsinglobalreplicationgroup) - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
* [postRebootCacheCluster](#postrebootcachecluster) - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
* [postRemoveTagsFromResource](#postremovetagsfromresource) - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
* [postResetCacheParameterGroup](#postresetcacheparametergroup) - Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
* [postRevokeCacheSecurityGroupIngress](#postrevokecachesecuritygroupingress) - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
* [postStartMigration](#poststartmigration) - Start the migration of data.
* [postTestFailover](#posttestfailover) - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

## getAuthorizeCacheSecurityGroupIngress

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETAuthorizeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeCacheSecurityGroupIngressRequest req = new GETAuthorizeCacheSecurityGroupIngressRequest(GETAuthorizeCacheSecurityGroupIngressActionEnum.AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS, "iure", "magnam", "debitis", GETAuthorizeCacheSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            GETAuthorizeCacheSecurityGroupIngressResponse res = sdk.sdk.getAuthorizeCacheSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBatchApplyUpdateActionActionEnum;
import org.openapis.openapi.models.operations.GETBatchApplyUpdateActionRequest;
import org.openapis.openapi.models.operations.GETBatchApplyUpdateActionResponse;
import org.openapis.openapi.models.operations.GETBatchApplyUpdateActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBatchApplyUpdateActionRequest req = new GETBatchApplyUpdateActionRequest(GETBatchApplyUpdateActionActionEnum.BATCH_APPLY_UPDATE_ACTION, "iusto", GETBatchApplyUpdateActionVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterIds = new String[]{{
                    add("nisi"),
                    add("recusandae"),
                    add("temporibus"),
                }};
                replicationGroupIds = new String[]{{
                    add("quis"),
                }};
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            GETBatchApplyUpdateActionResponse res = sdk.sdk.getBatchApplyUpdateAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBatchStopUpdateActionActionEnum;
import org.openapis.openapi.models.operations.GETBatchStopUpdateActionRequest;
import org.openapis.openapi.models.operations.GETBatchStopUpdateActionResponse;
import org.openapis.openapi.models.operations.GETBatchStopUpdateActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBatchStopUpdateActionRequest req = new GETBatchStopUpdateActionRequest(GETBatchStopUpdateActionActionEnum.BATCH_STOP_UPDATE_ACTION, "at", GETBatchStopUpdateActionVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterIds = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                replicationGroupIds = new String[]{{
                    add("totam"),
                    add("porro"),
                }};
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETBatchStopUpdateActionResponse res = sdk.sdk.getBatchStopUpdateAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompleteMigration

Complete the migration of data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCompleteMigrationActionEnum;
import org.openapis.openapi.models.operations.GETCompleteMigrationRequest;
import org.openapis.openapi.models.operations.GETCompleteMigrationResponse;
import org.openapis.openapi.models.operations.GETCompleteMigrationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCompleteMigrationRequest req = new GETCompleteMigrationRequest(GETCompleteMigrationActionEnum.COMPLETE_MIGRATION, "optio", GETCompleteMigrationVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                force = false;
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            GETCompleteMigrationResponse res = sdk.sdk.getCompleteMigration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETCreateGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETCreateGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateGlobalReplicationGroupRequest req = new GETCreateGlobalReplicationGroupRequest(GETCreateGlobalReplicationGroupActionEnum.CREATE_GLOBAL_REPLICATION_GROUP, "esse", "ipsum", GETCreateGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                globalReplicationGroupDescription = "excepturi";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            GETCreateGlobalReplicationGroupResponse res = sdk.sdk.getCreateGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETDecreaseNodeGroupsInGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETDecreaseNodeGroupsInGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDecreaseNodeGroupsInGlobalReplicationGroupRequest req = new GETDecreaseNodeGroupsInGlobalReplicationGroupRequest(GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum.DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP, false, "laboriosam", 943749L, GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                globalNodeGroupsToRemove = new String[]{{
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                    add("iste"),
                }};
                globalNodeGroupsToRetain = new String[]{{
                    add("saepe"),
                    add("quidem"),
                }};
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            GETDecreaseNodeGroupsInGlobalReplicationGroupResponse res = sdk.sdk.getDecreaseNodeGroupsInGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCacheClusterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCacheClusterRequest;
import org.openapis.openapi.models.operations.GETDeleteCacheClusterResponse;
import org.openapis.openapi.models.operations.GETDeleteCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCacheClusterRequest req = new GETDeleteCacheClusterRequest(GETDeleteCacheClusterActionEnum.DELETE_CACHE_CLUSTER, "corporis", GETDeleteCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                finalSnapshotIdentifier = "explicabo";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETDeleteCacheClusterResponse res = sdk.sdk.getDeleteCacheCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCacheParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCacheParameterGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteCacheParameterGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteCacheParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCacheParameterGroupRequest req = new GETDeleteCacheParameterGroupRequest(GETDeleteCacheParameterGroupActionEnum.DELETE_CACHE_PARAMETER_GROUP, "culpa", GETDeleteCacheParameterGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDeleteCacheParameterGroupResponse res = sdk.sdk.getDeleteCacheParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCacheSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCacheSecurityGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteCacheSecurityGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteCacheSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCacheSecurityGroupRequest req = new GETDeleteCacheSecurityGroupRequest(GETDeleteCacheSecurityGroupActionEnum.DELETE_CACHE_SECURITY_GROUP, "mollitia", GETDeleteCacheSecurityGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            GETDeleteCacheSecurityGroupResponse res = sdk.sdk.getDeleteCacheSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCacheSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCacheSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteCacheSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteCacheSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCacheSubnetGroupRequest req = new GETDeleteCacheSubnetGroupRequest(GETDeleteCacheSubnetGroupActionEnum.DELETE_CACHE_SUBNET_GROUP, "quis", GETDeleteCacheSubnetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            GETDeleteCacheSubnetGroupResponse res = sdk.sdk.getDeleteCacheSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGlobalReplicationGroupRequest req = new GETDeleteGlobalReplicationGroupRequest(GETDeleteGlobalReplicationGroupActionEnum.DELETE_GLOBAL_REPLICATION_GROUP, "ipsam", false, GETDeleteGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GETDeleteGlobalReplicationGroupResponse res = sdk.sdk.getDeleteGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteReplicationGroupRequest req = new GETDeleteReplicationGroupRequest(GETDeleteReplicationGroupActionEnum.DELETE_REPLICATION_GROUP, "reiciendis", GETDeleteReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                finalSnapshotIdentifier = "voluptatibus";
                retainPrimaryCluster = false;
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDeleteReplicationGroupResponse res = sdk.sdk.getDeleteReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSnapshotRequest;
import org.openapis.openapi.models.operations.GETDeleteSnapshotResponse;
import org.openapis.openapi.models.operations.GETDeleteSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSnapshotRequest req = new GETDeleteSnapshotRequest(GETDeleteSnapshotActionEnum.DELETE_SNAPSHOT, "perferendis", GETDeleteSnapshotVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            GETDeleteSnapshotResponse res = sdk.sdk.getDeleteSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUserActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUserRequest;
import org.openapis.openapi.models.operations.GETDeleteUserResponse;
import org.openapis.openapi.models.operations.GETDeleteUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUserRequest req = new GETDeleteUserRequest(GETDeleteUserActionEnum.DELETE_USER, "dicta", GETDeleteUserVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDeleteUserResponse res = sdk.sdk.getDeleteUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUserGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUserGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteUserGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteUserGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUserGroupRequest req = new GETDeleteUserGroupRequest(GETDeleteUserGroupActionEnum.DELETE_USER_GROUP, "molestias", GETDeleteUserGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDeleteUserGroupResponse res = sdk.sdk.getDeleteUserGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheClustersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheClustersRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheClustersResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheClustersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheClustersRequest req = new GETDescribeCacheClustersRequest(GETDescribeCacheClustersActionEnum.DESCRIBE_CACHE_CLUSTERS, GETDescribeCacheClustersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterId = "sint";
                marker = "veritatis";
                maxRecords = 929297L;
                showCacheClustersNotInReplicationGroups = false;
                showCacheNodeInfo = false;
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETDescribeCacheClustersResponse res = sdk.sdk.getDescribeCacheClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheEngineVersionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheEngineVersionsRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheEngineVersionsResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheEngineVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheEngineVersionsRequest req = new GETDescribeCacheEngineVersionsRequest(GETDescribeCacheEngineVersionsActionEnum.DESCRIBE_CACHE_ENGINE_VERSIONS, GETDescribeCacheEngineVersionsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheParameterGroupFamily = "quibusdam";
                defaultOnly = false;
                engine = "labore";
                engineVersion = "modi";
                marker = "qui";
                maxRecords = 397821L;
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            GETDescribeCacheEngineVersionsResponse res = sdk.sdk.getDescribeCacheEngineVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheParameterGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheParameterGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheParameterGroupsRequest req = new GETDescribeCacheParameterGroupsRequest(GETDescribeCacheParameterGroupsActionEnum.DESCRIBE_CACHE_PARAMETER_GROUPS, GETDescribeCacheParameterGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheParameterGroupName = "dolorum";
                marker = "excepturi";
                maxRecords = 270008L;
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            GETDescribeCacheParameterGroupsResponse res = sdk.sdk.getDescribeCacheParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheParametersRequest req = new GETDescribeCacheParametersRequest(GETDescribeCacheParametersActionEnum.DESCRIBE_CACHE_PARAMETERS, "aliquid", GETDescribeCacheParametersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "provident";
                maxRecords = 896039L;
                source = "sint";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            GETDescribeCacheParametersResponse res = sdk.sdk.getDescribeCacheParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheSecurityGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheSecurityGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheSecurityGroupsRequest req = new GETDescribeCacheSecurityGroupsRequest(GETDescribeCacheSecurityGroupsActionEnum.DESCRIBE_CACHE_SECURITY_GROUPS, GETDescribeCacheSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheSecurityGroupName = "maiores";
                marker = "rerum";
                maxRecords = 116202L;
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            GETDescribeCacheSecurityGroupsResponse res = sdk.sdk.getDescribeCacheSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeCacheSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeCacheSubnetGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeCacheSubnetGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeCacheSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeCacheSubnetGroupsRequest req = new GETDescribeCacheSubnetGroupsRequest(GETDescribeCacheSubnetGroupsActionEnum.DESCRIBE_CACHE_SUBNET_GROUPS, GETDescribeCacheSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheSubnetGroupName = "occaecati";
                marker = "enim";
                maxRecords = 881736L;
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETDescribeCacheSubnetGroupsResponse res = sdk.sdk.getDescribeCacheSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified cache engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEngineDefaultParametersRequest req = new GETDescribeEngineDefaultParametersRequest(GETDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, "amet", GETDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "deserunt";
                maxRecords = 394869L;
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            GETDescribeEngineDefaultParametersResponse res = sdk.sdk.getDescribeEngineDefaultParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventsSourceTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventsRequest req = new GETDescribeEventsRequest(GETDescribeEventsActionEnum.DESCRIBE_EVENTS, GETDescribeEventsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                duration = 660174L;
                endTime = OffsetDateTime.parse("2022-09-17T02:55:11.783Z");
                marker = "suscipit";
                maxRecords = 618016L;
                sourceIdentifier = "nobis";
                sourceType = GETDescribeEventsSourceTypeEnum.CACHE_SUBNET_GROUP;
                startTime = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            GETDescribeEventsResponse res = sdk.sdk.getDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeGlobalReplicationGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeGlobalReplicationGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeGlobalReplicationGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeGlobalReplicationGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeGlobalReplicationGroupsRequest req = new GETDescribeGlobalReplicationGroupsRequest(GETDescribeGlobalReplicationGroupsActionEnum.DESCRIBE_GLOBAL_REPLICATION_GROUPS, GETDescribeGlobalReplicationGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                globalReplicationGroupId = "accusantium";
                marker = "mollitia";
                maxRecords = 968962L;
                showMemberInfo = false;
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            GETDescribeGlobalReplicationGroupsResponse res = sdk.sdk.getDescribeGlobalReplicationGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReplicationGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReplicationGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeReplicationGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeReplicationGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReplicationGroupsRequest req = new GETDescribeReplicationGroupsRequest(GETDescribeReplicationGroupsActionEnum.DESCRIBE_REPLICATION_GROUPS, GETDescribeReplicationGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "iure";
                maxRecords = 984043L;
                replicationGroupId = "debitis";
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            GETDescribeReplicationGroupsResponse res = sdk.sdk.getDescribeReplicationGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedCacheNodesRequest req = new GETDescribeReservedCacheNodesRequest(GETDescribeReservedCacheNodesActionEnum.DESCRIBE_RESERVED_CACHE_NODES, GETDescribeReservedCacheNodesVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheNodeType = "ullam";
                duration = "expedita";
                marker = "nihil";
                maxRecords = 998848L;
                offeringType = "quibusdam";
                productDescription = "sed";
                reservedCacheNodeId = "saepe";
                reservedCacheNodesOfferingId = "pariatur";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            GETDescribeReservedCacheNodesResponse res = sdk.sdk.getDescribeReservedCacheNodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesOfferingsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesOfferingsRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesOfferingsResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedCacheNodesOfferingsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedCacheNodesOfferingsRequest req = new GETDescribeReservedCacheNodesOfferingsRequest(GETDescribeReservedCacheNodesOfferingsActionEnum.DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS, GETDescribeReservedCacheNodesOfferingsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheNodeType = "pariatur";
                duration = "maxime";
                marker = "ea";
                maxRecords = 569101L;
                offeringType = "odit";
                productDescription = "ea";
                reservedCacheNodesOfferingId = "accusantium";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GETDescribeReservedCacheNodesOfferingsResponse res = sdk.sdk.getDescribeReservedCacheNodesOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeServiceUpdates

Returns details of the service updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeServiceUpdatesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeServiceUpdatesRequest;
import org.openapis.openapi.models.operations.GETDescribeServiceUpdatesResponse;
import org.openapis.openapi.models.operations.GETDescribeServiceUpdatesVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeServiceUpdatesRequest req = new GETDescribeServiceUpdatesRequest(GETDescribeServiceUpdatesActionEnum.DESCRIBE_SERVICE_UPDATES, GETDescribeServiceUpdatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "pariatur";
                maxRecords = 365496L;
                serviceUpdateName = "voluptatibus";
                serviceUpdateStatus = new org.openapis.openapi.models.shared.ServiceUpdateStatusEnum[]{{
                    add(ServiceUpdateStatusEnum.EXPIRED),
                }};
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            GETDescribeServiceUpdatesResponse res = sdk.sdk.getDescribeServiceUpdates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSnapshotsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSnapshotsRequest;
import org.openapis.openapi.models.operations.GETDescribeSnapshotsResponse;
import org.openapis.openapi.models.operations.GETDescribeSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSnapshotsRequest req = new GETDescribeSnapshotsRequest(GETDescribeSnapshotsActionEnum.DESCRIBE_SNAPSHOTS, GETDescribeSnapshotsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterId = "quis";
                marker = "totam";
                maxRecords = 489549L;
                replicationGroupId = "eaque";
                showNodeGroupConfig = false;
                snapshotName = "quis";
                snapshotSource = "nesciunt";
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "dolores";
                xAmzDate = "minus";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "vero";
            }};            

            GETDescribeSnapshotsResponse res = sdk.sdk.getDescribeSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeUpdateActions

Returns details of the update actions 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeUpdateActionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeUpdateActionsRequest;
import org.openapis.openapi.models.operations.GETDescribeUpdateActionsResponse;
import org.openapis.openapi.models.operations.GETDescribeUpdateActionsServiceUpdateTimeRange;
import org.openapis.openapi.models.operations.GETDescribeUpdateActionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateStatusEnum;
import org.openapis.openapi.models.shared.UpdateActionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeUpdateActionsRequest req = new GETDescribeUpdateActionsRequest(GETDescribeUpdateActionsActionEnum.DESCRIBE_UPDATE_ACTIONS, GETDescribeUpdateActionsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterIds = new String[]{{
                    add("recusandae"),
                    add("omnis"),
                    add("facilis"),
                    add("perspiciatis"),
                }};
                engine = "voluptatem";
                marker = "porro";
                maxRecords = 164694L;
                replicationGroupIds = new String[]{{
                    add("error"),
                    add("eaque"),
                    add("occaecati"),
                }};
                serviceUpdateName = "rerum";
                serviceUpdateStatus = new org.openapis.openapi.models.shared.ServiceUpdateStatusEnum[]{{
                    add(ServiceUpdateStatusEnum.EXPIRED),
                }};
                serviceUpdateTimeRange = new GETDescribeUpdateActionsServiceUpdateTimeRange() {{
                    endTime = OffsetDateTime.parse("2022-03-14T08:20:25.450Z");
                    startTime = OffsetDateTime.parse("2021-08-23T06:19:56.211Z");
                }};;
                showNodeLevelUpdateStatus = false;
                updateActionStatus = new org.openapis.openapi.models.shared.UpdateActionStatusEnum[]{{
                    add(UpdateActionStatusEnum.SCHEDULED),
                    add(UpdateActionStatusEnum.COMPLETE),
                    add(UpdateActionStatusEnum.SCHEDULING),
                }};
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETDescribeUpdateActionsResponse res = sdk.sdk.getDescribeUpdateActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeUserGroups

Returns a list of user groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeUserGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeUserGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeUserGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeUserGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeUserGroupsRequest req = new GETDescribeUserGroupsRequest(GETDescribeUserGroupsActionEnum.DESCRIBE_USER_GROUPS, GETDescribeUserGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "qui";
                maxRecords = 218749L;
                userGroupId = "hic";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDescribeUserGroupsResponse res = sdk.sdk.getDescribeUserGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisassociateGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETDisassociateGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETDisassociateGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETDisassociateGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisassociateGlobalReplicationGroupRequest req = new GETDisassociateGlobalReplicationGroupRequest(GETDisassociateGlobalReplicationGroupActionEnum.DISASSOCIATE_GLOBAL_REPLICATION_GROUP, "veritatis", "ipsa", "ipsa", GETDisassociateGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            GETDisassociateGlobalReplicationGroupResponse res = sdk.sdk.getDisassociateGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETFailoverGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETFailoverGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETFailoverGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETFailoverGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverGlobalReplicationGroupRequest req = new GETFailoverGlobalReplicationGroupRequest(GETFailoverGlobalReplicationGroupActionEnum.FAILOVER_GLOBAL_REPLICATION_GROUP, "eos", "atque", "sit", GETFailoverGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETFailoverGlobalReplicationGroupResponse res = sdk.sdk.getFailoverGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAllowedNodeTypeModificationsActionEnum;
import org.openapis.openapi.models.operations.GETListAllowedNodeTypeModificationsRequest;
import org.openapis.openapi.models.operations.GETListAllowedNodeTypeModificationsResponse;
import org.openapis.openapi.models.operations.GETListAllowedNodeTypeModificationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAllowedNodeTypeModificationsRequest req = new GETListAllowedNodeTypeModificationsRequest(GETListAllowedNodeTypeModificationsActionEnum.LIST_ALLOWED_NODE_TYPE_MODIFICATIONS, GETListAllowedNodeTypeModificationsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheClusterId = "omnis";
                replicationGroupId = "necessitatibus";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            GETListAllowedNodeTypeModificationsResponse res = sdk.sdk.getListAllowedNodeTypeModifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTagsForResource

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.GETListTagsForResourceRequest;
import org.openapis.openapi.models.operations.GETListTagsForResourceResponse;
import org.openapis.openapi.models.operations.GETListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTagsForResourceRequest req = new GETListTagsForResourceRequest(GETListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, "aspernatur", GETListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "optio";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "ad";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETListTagsForResourceResponse res = sdk.sdk.getListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyCacheSubnetGroup

Modifies an existing cache subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyCacheSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyCacheSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyCacheSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyCacheSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyCacheSubnetGroupRequest req = new GETModifyCacheSubnetGroupRequest(GETModifyCacheSubnetGroupActionEnum.MODIFY_CACHE_SUBNET_GROUP, "provident", GETModifyCacheSubnetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                cacheSubnetGroupDescription = "minima";
                subnetIds = new String[]{{
                    add("totam"),
                    add("similique"),
                    add("alias"),
                    add("at"),
                }};
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETModifyCacheSubnetGroupResponse res = sdk.sdk.getModifyCacheSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETModifyGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETModifyGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyGlobalReplicationGroupRequest req = new GETModifyGlobalReplicationGroupRequest(GETModifyGlobalReplicationGroupActionEnum.MODIFY_GLOBAL_REPLICATION_GROUP, false, "esse", GETModifyGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                automaticFailoverEnabled = false;
                cacheNodeType = "harum";
                cacheParameterGroupName = "iusto";
                engineVersion = "ipsum";
                globalReplicationGroupDescription = "quisquam";
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETModifyGlobalReplicationGroupResponse res = sdk.sdk.getModifyGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyUser

Changes user password(s) and/or access string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyUserActionEnum;
import org.openapis.openapi.models.operations.GETModifyUserAuthenticationMode;
import org.openapis.openapi.models.operations.GETModifyUserRequest;
import org.openapis.openapi.models.operations.GETModifyUserResponse;
import org.openapis.openapi.models.operations.GETModifyUserVersionEnum;
import org.openapis.openapi.models.shared.InputAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyUserRequest req = new GETModifyUserRequest(GETModifyUserActionEnum.MODIFY_USER, "totam", GETModifyUserVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                accessString = "nihil";
                appendAccessString = "sit";
                authenticationMode = new GETModifyUserAuthenticationMode() {{
                    passwords = new String[]{{
                        add("neque"),
                        add("sed"),
                        add("vel"),
                    }};
                    type = InputAuthenticationTypeEnum.IAM;
                }};;
                noPasswordRequired = false;
                passwords = new String[]{{
                    add("deserunt"),
                    add("quam"),
                }};
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            GETModifyUserResponse res = sdk.sdk.getModifyUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyUserGroup

Changes the list of users that belong to the user group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyUserGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyUserGroupRequest;
import org.openapis.openapi.models.operations.GETModifyUserGroupResponse;
import org.openapis.openapi.models.operations.GETModifyUserGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyUserGroupRequest req = new GETModifyUserGroupRequest(GETModifyUserGroupActionEnum.MODIFY_USER_GROUP, "laborum", GETModifyUserGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                userIdsToAdd = new String[]{{
                    add("incidunt"),
                    add("aspernatur"),
                    add("dolores"),
                }};
                userIdsToRemove = new String[]{{
                    add("facilis"),
                    add("aliquid"),
                    add("quam"),
                }};
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "qui";
                xAmzDate = "neque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "odio";
            }};            

            GETModifyUserGroupResponse res = sdk.sdk.getModifyUserGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebalanceSlotsInGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.GETRebalanceSlotsInGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.GETRebalanceSlotsInGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.GETRebalanceSlotsInGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebalanceSlotsInGlobalReplicationGroupRequest req = new GETRebalanceSlotsInGlobalReplicationGroupRequest(GETRebalanceSlotsInGlobalReplicationGroupActionEnum.REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP, false, "ullam", GETRebalanceSlotsInGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "voluptatem";
                xAmzDate = "cumque";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "et";
            }};            

            GETRebalanceSlotsInGlobalReplicationGroupResponse res = sdk.sdk.getRebalanceSlotsInGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebootCacheClusterActionEnum;
import org.openapis.openapi.models.operations.GETRebootCacheClusterRequest;
import org.openapis.openapi.models.operations.GETRebootCacheClusterResponse;
import org.openapis.openapi.models.operations.GETRebootCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootCacheClusterRequest req = new GETRebootCacheClusterRequest(GETRebootCacheClusterActionEnum.REBOOT_CACHE_CLUSTER, "ipsum",                 new String[]{{
                                add("nobis"),
                            }}, GETRebootCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            GETRebootCacheClusterResponse res = sdk.sdk.getRebootCacheCluster(req);

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

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "adipisci",                 new String[]{{
                                add("architecto"),
                                add("quae"),
                                add("aut"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            GETRemoveTagsFromResourceResponse res = sdk.sdk.getRemoveTagsFromResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETRevokeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETRevokeCacheSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETRevokeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeCacheSecurityGroupIngressRequest req = new GETRevokeCacheSecurityGroupIngressRequest(GETRevokeCacheSecurityGroupIngressActionEnum.REVOKE_CACHE_SECURITY_GROUP_INGRESS, "facilis", "cupiditate", "qui", GETRevokeCacheSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "vero";
            }};            

            GETRevokeCacheSecurityGroupIngressResponse res = sdk.sdk.getRevokeCacheSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTestFailoverActionEnum;
import org.openapis.openapi.models.operations.GETTestFailoverRequest;
import org.openapis.openapi.models.operations.GETTestFailoverResponse;
import org.openapis.openapi.models.operations.GETTestFailoverVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTestFailoverRequest req = new GETTestFailoverRequest(GETTestFailoverActionEnum.TEST_FAILOVER, "quis", "ipsum", GETTestFailoverVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            GETTestFailoverResponse res = sdk.sdk.getTestFailover(req);

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

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>

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
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            POSTAddTagsToResourceResponse res = sdk.sdk.postAddTagsToResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeCacheSecurityGroupIngress

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeCacheSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeCacheSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeCacheSecurityGroupIngressRequest req = new POSTAuthorizeCacheSecurityGroupIngressRequest(POSTAuthorizeCacheSecurityGroupIngressActionEnum.AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS, POSTAuthorizeCacheSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "sequi".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTAuthorizeCacheSecurityGroupIngressResponse res = sdk.sdk.postAuthorizeCacheSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchApplyUpdateActionActionEnum;
import org.openapis.openapi.models.operations.POSTBatchApplyUpdateActionRequest;
import org.openapis.openapi.models.operations.POSTBatchApplyUpdateActionResponse;
import org.openapis.openapi.models.operations.POSTBatchApplyUpdateActionVersionEnum;
import org.openapis.openapi.models.shared.BatchApplyUpdateActionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchApplyUpdateActionRequest req = new POSTBatchApplyUpdateActionRequest(POSTBatchApplyUpdateActionActionEnum.BATCH_APPLY_UPDATE_ACTION, POSTBatchApplyUpdateActionVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTBatchApplyUpdateActionResponse res = sdk.sdk.postBatchApplyUpdateAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchStopUpdateActionActionEnum;
import org.openapis.openapi.models.operations.POSTBatchStopUpdateActionRequest;
import org.openapis.openapi.models.operations.POSTBatchStopUpdateActionResponse;
import org.openapis.openapi.models.operations.POSTBatchStopUpdateActionVersionEnum;
import org.openapis.openapi.models.shared.BatchStopUpdateActionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchStopUpdateActionRequest req = new POSTBatchStopUpdateActionRequest(POSTBatchStopUpdateActionActionEnum.BATCH_STOP_UPDATE_ACTION, POSTBatchStopUpdateActionVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "vel";
                xAmzCredential = "possimus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTBatchStopUpdateActionResponse res = sdk.sdk.postBatchStopUpdateAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompleteMigration

Complete the migration of data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCompleteMigrationActionEnum;
import org.openapis.openapi.models.operations.POSTCompleteMigrationRequest;
import org.openapis.openapi.models.operations.POSTCompleteMigrationResponse;
import org.openapis.openapi.models.operations.POSTCompleteMigrationVersionEnum;
import org.openapis.openapi.models.shared.CompleteMigrationMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCompleteMigrationRequest req = new POSTCompleteMigrationRequest(POSTCompleteMigrationActionEnum.COMPLETE_MIGRATION, POSTCompleteMigrationVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTCompleteMigrationResponse res = sdk.sdk.postCompleteMigration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopySnapshot

<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopySnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCopySnapshotRequest;
import org.openapis.openapi.models.operations.POSTCopySnapshotResponse;
import org.openapis.openapi.models.operations.POSTCopySnapshotVersionEnum;
import org.openapis.openapi.models.shared.CopySnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopySnapshotRequest req = new POSTCopySnapshotRequest(POSTCopySnapshotActionEnum.COPY_SNAPSHOT, POSTCopySnapshotVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "inventore";
            }};            

            POSTCopySnapshotResponse res = sdk.sdk.postCopySnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCacheCluster

<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCacheClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCacheClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateCacheClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.AZModeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationDetails;
import org.openapis.openapi.models.shared.CreateCacheClusterMessage;
import org.openapis.openapi.models.shared.DestinationDetails;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.IpDiscoveryEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestinationDetails;
import org.openapis.openapi.models.shared.LogDeliveryConfigurationRequestList;
import org.openapis.openapi.models.shared.LogFormatEnum;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.NetworkTypeEnum;
import org.openapis.openapi.models.shared.OutpostModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateCacheClusterRequest req = new POSTCreateCacheClusterRequest(POSTCreateCacheClusterActionEnum.CREATE_CACHE_CLUSTER, POSTCreateCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            POSTCreateCacheClusterResponse res = sdk.sdk.postCreateCacheCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCacheParameterGroup

<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCacheParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCacheParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateCacheParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateCacheParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateCacheParameterGroupMessage;
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

            POSTCreateCacheParameterGroupRequest req = new POSTCreateCacheParameterGroupRequest(POSTCreateCacheParameterGroupActionEnum.CREATE_CACHE_PARAMETER_GROUP, POSTCreateCacheParameterGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            POSTCreateCacheParameterGroupResponse res = sdk.sdk.postCreateCacheParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCacheSecurityGroup

<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCacheSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCacheSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateCacheSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateCacheSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateCacheSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateCacheSecurityGroupRequest req = new POSTCreateCacheSecurityGroupRequest(POSTCreateCacheSecurityGroupActionEnum.CREATE_CACHE_SECURITY_GROUP, POSTCreateCacheSecurityGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTCreateCacheSecurityGroupResponse res = sdk.sdk.postCreateCacheSecurityGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCacheSubnetGroup

<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCacheSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCacheSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateCacheSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateCacheSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateCacheSubnetGroupMessage;
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

            POSTCreateCacheSubnetGroupRequest req = new POSTCreateCacheSubnetGroupRequest(POSTCreateCacheSubnetGroupActionEnum.CREATE_CACHE_SUBNET_GROUP, POSTCreateCacheSubnetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "assumenda".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            POSTCreateCacheSubnetGroupResponse res = sdk.sdk.postCreateCacheSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateGlobalReplicationGroupRequest req = new POSTCreateGlobalReplicationGroupRequest(POSTCreateGlobalReplicationGroupActionEnum.CREATE_GLOBAL_REPLICATION_GROUP, POSTCreateGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "odio";
                xAmzDate = "eius";
                xAmzSecurityToken = "esse";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "rem";
            }};            

            POSTCreateGlobalReplicationGroupResponse res = sdk.sdk.postCreateGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateReplicationGroup

<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationDetails;
import org.openapis.openapi.models.shared.CreateReplicationGroupMessage;
import org.openapis.openapi.models.shared.DestinationDetails;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.IpDiscoveryEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestinationDetails;
import org.openapis.openapi.models.shared.LogDeliveryConfigurationRequestList;
import org.openapis.openapi.models.shared.LogFormatEnum;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.NetworkTypeEnum;
import org.openapis.openapi.models.shared.NodeGroupConfigurationList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;
import org.openapis.openapi.models.shared.TransitEncryptionModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateReplicationGroupRequest req = new POSTCreateReplicationGroupRequest(POSTCreateReplicationGroupActionEnum.CREATE_REPLICATION_GROUP, POSTCreateReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
            }};            

            POSTCreateReplicationGroupResponse res = sdk.sdk.postCreateReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateSnapshot

<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCreateSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCreateSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCreateSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CreateSnapshotMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateSnapshotRequest req = new POSTCreateSnapshotRequest(POSTCreateSnapshotActionEnum.CREATE_SNAPSHOT, POSTCreateSnapshotVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            POSTCreateSnapshotResponse res = sdk.sdk.postCreateSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateUser

For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateUserActionEnum;
import org.openapis.openapi.models.operations.POSTCreateUserRequest;
import org.openapis.openapi.models.operations.POSTCreateUserResponse;
import org.openapis.openapi.models.operations.POSTCreateUserVersionEnum;
import org.openapis.openapi.models.shared.AuthenticationMode;
import org.openapis.openapi.models.shared.CreateUserMessage;
import org.openapis.openapi.models.shared.InputAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateUserRequest req = new POSTCreateUserRequest(POSTCreateUserActionEnum.CREATE_USER, POSTCreateUserVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "fuga".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTCreateUserResponse res = sdk.sdk.postCreateUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateUserGroup

For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateUserGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateUserGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateUserGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateUserGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateUserGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateUserGroupRequest req = new POSTCreateUserGroupRequest(POSTCreateUserGroupActionEnum.CREATE_USER_GROUP, POSTCreateUserGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "quo";
                xAmzDate = "esse";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTCreateUserGroupResponse res = sdk.sdk.postCreateUserGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.DecreaseNodeGroupsInGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest req = new POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest(POSTDecreaseNodeGroupsInGlobalReplicationGroupActionEnum.DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP, POSTDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDecreaseNodeGroupsInGlobalReplicationGroupResponse res = sdk.sdk.postDecreaseNodeGroupsInGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDecreaseReplicaCount

Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDecreaseReplicaCountActionEnum;
import org.openapis.openapi.models.operations.POSTDecreaseReplicaCountRequest;
import org.openapis.openapi.models.operations.POSTDecreaseReplicaCountResponse;
import org.openapis.openapi.models.operations.POSTDecreaseReplicaCountVersionEnum;
import org.openapis.openapi.models.shared.DecreaseReplicaCountMessage;
import org.openapis.openapi.models.shared.ReplicaConfigurationList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDecreaseReplicaCountRequest req = new POSTDecreaseReplicaCountRequest(POSTDecreaseReplicaCountActionEnum.DECREASE_REPLICA_COUNT, POSTDecreaseReplicaCountVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            POSTDecreaseReplicaCountResponse res = sdk.sdk.postDecreaseReplicaCount(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCacheClusterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCacheClusterRequest;
import org.openapis.openapi.models.operations.POSTDeleteCacheClusterResponse;
import org.openapis.openapi.models.operations.POSTDeleteCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.DeleteCacheClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCacheClusterRequest req = new POSTDeleteCacheClusterRequest(POSTDeleteCacheClusterActionEnum.DELETE_CACHE_CLUSTER, POSTDeleteCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "fuga";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "explicabo";
            }};            

            POSTDeleteCacheClusterResponse res = sdk.sdk.postDeleteCacheCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCacheParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCacheParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteCacheParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteCacheParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteCacheParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCacheParameterGroupRequest req = new POSTDeleteCacheParameterGroupRequest(POSTDeleteCacheParameterGroupActionEnum.DELETE_CACHE_PARAMETER_GROUP, POSTDeleteCacheParameterGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "nisi".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consequuntur";
                xAmzDate = "ratione";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDeleteCacheParameterGroupResponse res = sdk.sdk.postDeleteCacheParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCacheSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCacheSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteCacheSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteCacheSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteCacheSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCacheSecurityGroupRequest req = new POSTDeleteCacheSecurityGroupRequest(POSTDeleteCacheSecurityGroupActionEnum.DELETE_CACHE_SECURITY_GROUP, POSTDeleteCacheSecurityGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "accusamus";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "nam";
            }};            

            POSTDeleteCacheSecurityGroupResponse res = sdk.sdk.postDeleteCacheSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCacheSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCacheSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteCacheSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteCacheSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteCacheSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCacheSubnetGroupRequest req = new POSTDeleteCacheSubnetGroupRequest(POSTDeleteCacheSubnetGroupActionEnum.DELETE_CACHE_SUBNET_GROUP, POSTDeleteCacheSubnetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDeleteCacheSubnetGroupResponse res = sdk.sdk.postDeleteCacheSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGlobalReplicationGroupRequest req = new POSTDeleteGlobalReplicationGroupRequest(POSTDeleteGlobalReplicationGroupActionEnum.DELETE_GLOBAL_REPLICATION_GROUP, POSTDeleteGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sit";
                xAmzCredential = "culpa";
                xAmzDate = "tempore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTDeleteGlobalReplicationGroupResponse res = sdk.sdk.postDeleteGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteReplicationGroupRequest req = new POSTDeleteReplicationGroupRequest(POSTDeleteReplicationGroupActionEnum.DELETE_REPLICATION_GROUP, POSTDeleteReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
            }};            

            POSTDeleteReplicationGroupResponse res = sdk.sdk.postDeleteReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotRequest;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotResponse;
import org.openapis.openapi.models.operations.POSTDeleteSnapshotVersionEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSnapshotRequest req = new POSTDeleteSnapshotRequest(POSTDeleteSnapshotActionEnum.DELETE_SNAPSHOT, POSTDeleteSnapshotVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "a";
                xAmzDate = "error";
                xAmzSecurityToken = "sint";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "possimus";
            }};            

            POSTDeleteSnapshotResponse res = sdk.sdk.postDeleteSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUserActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUserRequest;
import org.openapis.openapi.models.operations.POSTDeleteUserResponse;
import org.openapis.openapi.models.operations.POSTDeleteUserVersionEnum;
import org.openapis.openapi.models.shared.DeleteUserMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUserRequest req = new POSTDeleteUserRequest(POSTDeleteUserActionEnum.DELETE_USER, POSTDeleteUserVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "eveniet".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facere";
                xAmzCredential = "veritatis";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTDeleteUserResponse res = sdk.sdk.postDeleteUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUserGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUserGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteUserGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteUserGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteUserGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUserGroupRequest req = new POSTDeleteUserGroupRequest(POSTDeleteUserGroupActionEnum.DELETE_USER_GROUP, POSTDeleteUserGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "tenetur".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "earum";
                xAmzCredential = "vel";
                xAmzDate = "in";
                xAmzSecurityToken = "eius";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "illum";
            }};            

            POSTDeleteUserGroupResponse res = sdk.sdk.postDeleteUserGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheClustersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheClustersRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheClustersResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheClustersVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheClustersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheClustersRequest req = new POSTDescribeCacheClustersRequest(POSTDescribeCacheClustersActionEnum.DESCRIBE_CACHE_CLUSTERS, POSTDescribeCacheClustersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "accusantium";
                maxRecords = "aliquam";
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatum";
            }};            

            POSTDescribeCacheClustersResponse res = sdk.sdk.postDescribeCacheClusters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheEngineVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheEngineVersionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheEngineVersionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheEngineVersionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheEngineVersionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheEngineVersionsRequest req = new POSTDescribeCacheEngineVersionsRequest(POSTDescribeCacheEngineVersionsActionEnum.DESCRIBE_CACHE_ENGINE_VERSIONS, POSTDescribeCacheEngineVersionsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "quibusdam";
                maxRecords = "ex";
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "omnis";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "at";
            }};            

            POSTDescribeCacheEngineVersionsResponse res = sdk.sdk.postDescribeCacheEngineVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheParameterGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheParameterGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheParameterGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheParameterGroupsRequest req = new POSTDescribeCacheParameterGroupsRequest(POSTDescribeCacheParameterGroupsActionEnum.DESCRIBE_CACHE_PARAMETER_GROUPS, POSTDescribeCacheParameterGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "voluptate";
                maxRecords = "ipsa";
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "adipisci";
                xAmzDate = "iste";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "rem";
            }};            

            POSTDescribeCacheParameterGroupsResponse res = sdk.sdk.postDescribeCacheParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheParametersRequest req = new POSTDescribeCacheParametersRequest(POSTDescribeCacheParametersActionEnum.DESCRIBE_CACHE_PARAMETERS, POSTDescribeCacheParametersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "laudantium";
                maxRecords = "eum";
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "non";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            POSTDescribeCacheParametersResponse res = sdk.sdk.postDescribeCacheParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheSecurityGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheSecurityGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheSecurityGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheSecurityGroupsRequest req = new POSTDescribeCacheSecurityGroupsRequest(POSTDescribeCacheSecurityGroupsActionEnum.DESCRIBE_CACHE_SECURITY_GROUPS, POSTDescribeCacheSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "explicabo";
                maxRecords = "voluptas";
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTDescribeCacheSecurityGroupsResponse res = sdk.sdk.postDescribeCacheSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeCacheSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeCacheSubnetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeCacheSubnetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeCacheSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeCacheSubnetGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCacheSubnetGroupsRequest req = new POSTDescribeCacheSubnetGroupsRequest(POSTDescribeCacheSubnetGroupsActionEnum.DESCRIBE_CACHE_SUBNET_GROUPS, POSTDescribeCacheSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "aperiam";
                maxRecords = "ea";
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "officia";
                xAmzDate = "maxime";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "asperiores";
            }};            

            POSTDescribeCacheSubnetGroupsResponse res = sdk.sdk.postDescribeCacheSubnetGroups(req);

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

Returns the default engine and system parameter information for the specified cache engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeEngineDefaultParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "quae";
                maxRecords = "quaerat";
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "labore";
                xAmzCredential = "ab";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "id";
                xAmzSignedHeaders = "suscipit";
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

## postDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "culpa";
                maxRecords = "est";
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
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

## postDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeGlobalReplicationGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeGlobalReplicationGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeGlobalReplicationGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeGlobalReplicationGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeGlobalReplicationGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeGlobalReplicationGroupsRequest req = new POSTDescribeGlobalReplicationGroupsRequest(POSTDescribeGlobalReplicationGroupsActionEnum.DESCRIBE_GLOBAL_REPLICATION_GROUPS, POSTDescribeGlobalReplicationGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "facilis";
                maxRecords = "cum";
                requestBody = "commodi".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "reiciendis";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aliquid";
            }};            

            POSTDescribeGlobalReplicationGroupsResponse res = sdk.sdk.postDescribeGlobalReplicationGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReplicationGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReplicationGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeReplicationGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeReplicationGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeReplicationGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReplicationGroupsRequest req = new POSTDescribeReplicationGroupsRequest(POSTDescribeReplicationGroupsActionEnum.DESCRIBE_REPLICATION_GROUPS, POSTDescribeReplicationGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "cum";
                maxRecords = "consectetur";
                requestBody = "in".getBytes();
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "earum";
                xAmzCredential = "facere";
                xAmzDate = "numquam";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "reiciendis";
            }};            

            POSTDescribeReplicationGroupsResponse res = sdk.sdk.postDescribeReplicationGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedCacheNodesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedCacheNodesRequest req = new POSTDescribeReservedCacheNodesRequest(POSTDescribeReservedCacheNodesActionEnum.DESCRIBE_RESERVED_CACHE_NODES, POSTDescribeReservedCacheNodesVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "saepe";
                maxRecords = "necessitatibus";
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTDescribeReservedCacheNodesResponse res = sdk.sdk.postDescribeReservedCacheNodes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesOfferingsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesOfferingsRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesOfferingsResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedCacheNodesOfferingsVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedCacheNodesOfferingsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedCacheNodesOfferingsRequest req = new POSTDescribeReservedCacheNodesOfferingsRequest(POSTDescribeReservedCacheNodesOfferingsActionEnum.DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS, POSTDescribeReservedCacheNodesOfferingsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "debitis";
                maxRecords = "consectetur";
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "ipsa";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "libero";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTDescribeReservedCacheNodesOfferingsResponse res = sdk.sdk.postDescribeReservedCacheNodesOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeServiceUpdates

Returns details of the service updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeServiceUpdatesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeServiceUpdatesRequest;
import org.openapis.openapi.models.operations.POSTDescribeServiceUpdatesResponse;
import org.openapis.openapi.models.operations.POSTDescribeServiceUpdatesVersionEnum;
import org.openapis.openapi.models.shared.DescribeServiceUpdatesMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeServiceUpdatesRequest req = new POSTDescribeServiceUpdatesRequest(POSTDescribeServiceUpdatesActionEnum.DESCRIBE_SERVICE_UPDATES, POSTDescribeServiceUpdatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "tempora";
                maxRecords = "aspernatur";
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "minima";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "minus";
            }};            

            POSTDescribeServiceUpdatesResponse res = sdk.sdk.postDescribeServiceUpdates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTDescribeSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSnapshotsRequest req = new POSTDescribeSnapshotsRequest(POSTDescribeSnapshotsActionEnum.DESCRIBE_SNAPSHOTS, POSTDescribeSnapshotsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "blanditiis";
                maxRecords = "in";
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "temporibus";
                xAmzDate = "ullam";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "blanditiis";
            }};            

            POSTDescribeSnapshotsResponse res = sdk.sdk.postDescribeSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeUpdateActions

Returns details of the update actions 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeUpdateActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeUpdateActionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeUpdateActionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeUpdateActionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeUpdateActionsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateStatusEnum;
import org.openapis.openapi.models.shared.TimeRangeFilter;
import org.openapis.openapi.models.shared.UpdateActionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeUpdateActionsRequest req = new POSTDescribeUpdateActionsRequest(POSTDescribeUpdateActionsActionEnum.DESCRIBE_UPDATE_ACTIONS, POSTDescribeUpdateActionsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "hic";
                maxRecords = "nesciunt";
                requestBody = "culpa".getBytes();
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "totam";
                xAmzDate = "hic";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "sit";
            }};            

            POSTDescribeUpdateActionsResponse res = sdk.sdk.postDescribeUpdateActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeUserGroups

Returns a list of user groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeUserGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeUserGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeUserGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeUserGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeUserGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeUserGroupsRequest req = new POSTDescribeUserGroupsRequest(POSTDescribeUserGroupsActionEnum.DESCRIBE_USER_GROUPS, POSTDescribeUserGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "sed";
                maxRecords = "reiciendis";
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "voluptate";
                xAmzDate = "expedita";
                xAmzSecurityToken = "ab";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTDescribeUserGroupsResponse res = sdk.sdk.postDescribeUserGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeUsers

Returns a list of users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeUsersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeUsersRequest;
import org.openapis.openapi.models.operations.POSTDescribeUsersResponse;
import org.openapis.openapi.models.operations.POSTDescribeUsersVersionEnum;
import org.openapis.openapi.models.shared.DescribeUsersMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeUsersRequest req = new POSTDescribeUsersRequest(POSTDescribeUsersActionEnum.DESCRIBE_USERS, POSTDescribeUsersVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                marker = "sed";
                maxRecords = "in";
                requestBody = "commodi".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
            }};            

            POSTDescribeUsersResponse res = sdk.sdk.postDescribeUsers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisassociateGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDisassociateGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTDisassociateGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTDisassociateGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.DisassociateGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisassociateGlobalReplicationGroupRequest req = new POSTDisassociateGlobalReplicationGroupRequest(POSTDisassociateGlobalReplicationGroupActionEnum.DISASSOCIATE_GLOBAL_REPLICATION_GROUP, POSTDisassociateGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "illo".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            POSTDisassociateGlobalReplicationGroupResponse res = sdk.sdk.postDisassociateGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTFailoverGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTFailoverGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTFailoverGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTFailoverGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.FailoverGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverGlobalReplicationGroupRequest req = new POSTFailoverGlobalReplicationGroupRequest(POSTFailoverGlobalReplicationGroupActionEnum.FAILOVER_GLOBAL_REPLICATION_GROUP, POSTFailoverGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ea";
                xAmzCredential = "occaecati";
                xAmzDate = "quos";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTFailoverGlobalReplicationGroupResponse res = sdk.sdk.postFailoverGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIncreaseNodeGroupsInGlobalReplicationGroup

Increase the number of node groups in the Global datastore

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.IncreaseNodeGroupsInGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.RegionalConfigurationList;
import org.openapis.openapi.models.shared.ReshardingConfigurationList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest req = new POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest(POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum.INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP, POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sit";
                xAmzCredential = "non";
                xAmzDate = "officiis";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTIncreaseNodeGroupsInGlobalReplicationGroupResponse res = sdk.sdk.postIncreaseNodeGroupsInGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIncreaseReplicaCount

Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTIncreaseReplicaCountActionEnum;
import org.openapis.openapi.models.operations.POSTIncreaseReplicaCountRequest;
import org.openapis.openapi.models.operations.POSTIncreaseReplicaCountResponse;
import org.openapis.openapi.models.operations.POSTIncreaseReplicaCountVersionEnum;
import org.openapis.openapi.models.shared.IncreaseReplicaCountMessage;
import org.openapis.openapi.models.shared.ReplicaConfigurationList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTIncreaseReplicaCountRequest req = new POSTIncreaseReplicaCountRequest(POSTIncreaseReplicaCountActionEnum.INCREASE_REPLICA_COUNT, POSTIncreaseReplicaCountVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "rem";
                xAmzCredential = "sit";
                xAmzDate = "nobis";
                xAmzSecurityToken = "error";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "minima";
            }};            

            POSTIncreaseReplicaCountResponse res = sdk.sdk.postIncreaseReplicaCount(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAllowedNodeTypeModificationsActionEnum;
import org.openapis.openapi.models.operations.POSTListAllowedNodeTypeModificationsRequest;
import org.openapis.openapi.models.operations.POSTListAllowedNodeTypeModificationsResponse;
import org.openapis.openapi.models.operations.POSTListAllowedNodeTypeModificationsVersionEnum;
import org.openapis.openapi.models.shared.ListAllowedNodeTypeModificationsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAllowedNodeTypeModificationsRequest req = new POSTListAllowedNodeTypeModificationsRequest(POSTListAllowedNodeTypeModificationsActionEnum.LIST_ALLOWED_NODE_TYPE_MODIFICATIONS, POSTListAllowedNodeTypeModificationsVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            POSTListAllowedNodeTypeModificationsResponse res = sdk.sdk.postListAllowedNodeTypeModifications(req);

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

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTListTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTListTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "beatae".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "praesentium";
                xAmzDate = "cum";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "voluptatum";
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

## postModifyCacheCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCacheClusterActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCacheClusterRequest;
import org.openapis.openapi.models.operations.POSTModifyCacheClusterResponse;
import org.openapis.openapi.models.operations.POSTModifyCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.AZModeEnum;
import org.openapis.openapi.models.shared.AuthTokenUpdateStrategyTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationDetails;
import org.openapis.openapi.models.shared.DestinationDetails;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.IpDiscoveryEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestinationDetails;
import org.openapis.openapi.models.shared.LogDeliveryConfigurationRequestList;
import org.openapis.openapi.models.shared.LogFormatEnum;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.ModifyCacheClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCacheClusterRequest req = new POSTModifyCacheClusterRequest(POSTModifyCacheClusterActionEnum.MODIFY_CACHE_CLUSTER, POSTModifyCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "neque";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTModifyCacheClusterResponse res = sdk.sdk.postModifyCacheCluster(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCacheParameterGroup

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCacheParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCacheParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyCacheParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyCacheParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyCacheParameterGroupMessage;
import org.openapis.openapi.models.shared.ParameterNameValueList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCacheParameterGroupRequest req = new POSTModifyCacheParameterGroupRequest(POSTModifyCacheParameterGroupActionEnum.MODIFY_CACHE_PARAMETER_GROUP, POSTModifyCacheParameterGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "atque";
                xAmzCredential = "fugit";
                xAmzDate = "ut";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTModifyCacheParameterGroupResponse res = sdk.sdk.postModifyCacheParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyCacheSubnetGroup

Modifies an existing cache subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyCacheSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyCacheSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyCacheSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyCacheSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyCacheSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyCacheSubnetGroupRequest req = new POSTModifyCacheSubnetGroupRequest(POSTModifyCacheSubnetGroupActionEnum.MODIFY_CACHE_SUBNET_GROUP, POSTModifyCacheSubnetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTModifyCacheSubnetGroupResponse res = sdk.sdk.postModifyCacheSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyGlobalReplicationGroupRequest req = new POSTModifyGlobalReplicationGroupRequest(POSTModifyGlobalReplicationGroupActionEnum.MODIFY_GLOBAL_REPLICATION_GROUP, POSTModifyGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sed";
                xAmzDate = "sit";
                xAmzSecurityToken = "vel";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTModifyGlobalReplicationGroupResponse res = sdk.sdk.postModifyGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyReplicationGroup

<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.AuthTokenUpdateStrategyTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationDetails;
import org.openapis.openapi.models.shared.DestinationDetails;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.IpDiscoveryEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestinationDetails;
import org.openapis.openapi.models.shared.LogDeliveryConfigurationRequestList;
import org.openapis.openapi.models.shared.LogFormatEnum;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.ModifyReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransitEncryptionModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyReplicationGroupRequest req = new POSTModifyReplicationGroupRequest(POSTModifyReplicationGroupActionEnum.MODIFY_REPLICATION_GROUP, POSTModifyReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "consequatur".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "dolorem";
                xAmzDate = "harum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTModifyReplicationGroupResponse res = sdk.sdk.postModifyReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyReplicationGroupShardConfiguration

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupShardConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupShardConfigurationRequest;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupShardConfigurationResponse;
import org.openapis.openapi.models.operations.POSTModifyReplicationGroupShardConfigurationVersionEnum;
import org.openapis.openapi.models.shared.ModifyReplicationGroupShardConfigurationMessage;
import org.openapis.openapi.models.shared.ReshardingConfigurationList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyReplicationGroupShardConfigurationRequest req = new POSTModifyReplicationGroupShardConfigurationRequest(POSTModifyReplicationGroupShardConfigurationActionEnum.MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION, POSTModifyReplicationGroupShardConfigurationVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "nam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "amet";
            }};            

            POSTModifyReplicationGroupShardConfigurationResponse res = sdk.sdk.postModifyReplicationGroupShardConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyUser

Changes user password(s) and/or access string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyUserActionEnum;
import org.openapis.openapi.models.operations.POSTModifyUserRequest;
import org.openapis.openapi.models.operations.POSTModifyUserResponse;
import org.openapis.openapi.models.operations.POSTModifyUserVersionEnum;
import org.openapis.openapi.models.shared.AuthenticationMode;
import org.openapis.openapi.models.shared.InputAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.ModifyUserMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyUserRequest req = new POSTModifyUserRequest(POSTModifyUserActionEnum.MODIFY_USER, POSTModifyUserVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTModifyUserResponse res = sdk.sdk.postModifyUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyUserGroup

Changes the list of users that belong to the user group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyUserGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyUserGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyUserGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyUserGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyUserGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyUserGroupRequest req = new POSTModifyUserGroupRequest(POSTModifyUserGroupActionEnum.MODIFY_USER_GROUP, POSTModifyUserGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            POSTModifyUserGroupResponse res = sdk.sdk.postModifyUserGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPurchaseReservedCacheNodesOffering

Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPurchaseReservedCacheNodesOfferingActionEnum;
import org.openapis.openapi.models.operations.POSTPurchaseReservedCacheNodesOfferingRequest;
import org.openapis.openapi.models.operations.POSTPurchaseReservedCacheNodesOfferingResponse;
import org.openapis.openapi.models.operations.POSTPurchaseReservedCacheNodesOfferingVersionEnum;
import org.openapis.openapi.models.shared.PurchaseReservedCacheNodesOfferingMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedCacheNodesOfferingRequest req = new POSTPurchaseReservedCacheNodesOfferingRequest(POSTPurchaseReservedCacheNodesOfferingActionEnum.PURCHASE_RESERVED_CACHE_NODES_OFFERING, POSTPurchaseReservedCacheNodesOfferingVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "repudiandae".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "atque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "totam";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTPurchaseReservedCacheNodesOfferingResponse res = sdk.sdk.postPurchaseReservedCacheNodesOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebalanceSlotsInGlobalReplicationGroupActionEnum;
import org.openapis.openapi.models.operations.POSTRebalanceSlotsInGlobalReplicationGroupRequest;
import org.openapis.openapi.models.operations.POSTRebalanceSlotsInGlobalReplicationGroupResponse;
import org.openapis.openapi.models.operations.POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum;
import org.openapis.openapi.models.shared.RebalanceSlotsInGlobalReplicationGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebalanceSlotsInGlobalReplicationGroupRequest req = new POSTRebalanceSlotsInGlobalReplicationGroupRequest(POSTRebalanceSlotsInGlobalReplicationGroupActionEnum.REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP, POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            POSTRebalanceSlotsInGlobalReplicationGroupResponse res = sdk.sdk.postRebalanceSlotsInGlobalReplicationGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebootCacheClusterActionEnum;
import org.openapis.openapi.models.operations.POSTRebootCacheClusterRequest;
import org.openapis.openapi.models.operations.POSTRebootCacheClusterResponse;
import org.openapis.openapi.models.operations.POSTRebootCacheClusterVersionEnum;
import org.openapis.openapi.models.shared.RebootCacheClusterMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootCacheClusterRequest req = new POSTRebootCacheClusterRequest(POSTRebootCacheClusterActionEnum.REBOOT_CACHE_CLUSTER, POSTRebootCacheClusterVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            POSTRebootCacheClusterResponse res = sdk.sdk.postRebootCacheCluster(req);

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

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "atque";
                xAmzDate = "atque";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTRemoveTagsFromResourceResponse res = sdk.sdk.postRemoveTagsFromResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetCacheParameterGroup

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetCacheParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTResetCacheParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTResetCacheParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTResetCacheParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ParameterNameValueList;
import org.openapis.openapi.models.shared.ResetCacheParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetCacheParameterGroupRequest req = new POSTResetCacheParameterGroupRequest(POSTResetCacheParameterGroupActionEnum.RESET_CACHE_PARAMETER_GROUP, POSTResetCacheParameterGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "labore".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "repudiandae";
                xAmzDate = "dicta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dolores";
            }};            

            POSTResetCacheParameterGroupResponse res = sdk.sdk.postResetCacheParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeCacheSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeCacheSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTRevokeCacheSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTRevokeCacheSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.RevokeCacheSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeCacheSecurityGroupIngressRequest req = new POSTRevokeCacheSecurityGroupIngressRequest(POSTRevokeCacheSecurityGroupIngressActionEnum.REVOKE_CACHE_SECURITY_GROUP_INGRESS, POSTRevokeCacheSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "a";
                xAmzCredential = "molestias";
                xAmzDate = "magnam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTRevokeCacheSecurityGroupIngressResponse res = sdk.sdk.postRevokeCacheSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartMigration

Start the migration of data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartMigrationActionEnum;
import org.openapis.openapi.models.operations.POSTStartMigrationRequest;
import org.openapis.openapi.models.operations.POSTStartMigrationResponse;
import org.openapis.openapi.models.operations.POSTStartMigrationVersionEnum;
import org.openapis.openapi.models.shared.CustomerNodeEndpoint;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMigrationMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartMigrationRequest req = new POSTStartMigrationRequest(POSTStartMigrationActionEnum.START_MIGRATION, POSTStartMigrationVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "perspiciatis".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "eveniet";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "id";
            }};            

            POSTStartMigrationResponse res = sdk.sdk.postStartMigration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTestFailoverActionEnum;
import org.openapis.openapi.models.operations.POSTTestFailoverRequest;
import org.openapis.openapi.models.operations.POSTTestFailoverResponse;
import org.openapis.openapi.models.operations.POSTTestFailoverVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestFailoverMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTestFailoverRequest req = new POSTTestFailoverRequest(POSTTestFailoverActionEnum.TEST_FAILOVER, POSTTestFailoverVersionEnum.TWO_THOUSAND_AND_FIFTEEN0202) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "illo";
                xAmzCredential = "corporis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "non";
                xAmzSignedHeaders = "vero";
            }};            

            POSTTestFailoverResponse res = sdk.sdk.postTestFailover(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
