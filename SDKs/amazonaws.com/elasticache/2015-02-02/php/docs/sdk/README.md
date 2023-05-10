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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeCacheSecurityGroupIngressRequest();
    $request->action = GETAuthorizeCacheSecurityGroupIngressActionEnum::AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS;
    $request->cacheSecurityGroupName = 'deserunt';
    $request->ec2SecurityGroupName = 'suscipit';
    $request->ec2SecurityGroupOwnerId = 'iure';
    $request->version = GETAuthorizeCacheSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getAuthorizeCacheSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchApplyUpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchApplyUpdateActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchApplyUpdateActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBatchApplyUpdateActionRequest();
    $request->action = GETBatchApplyUpdateActionActionEnum::BATCH_APPLY_UPDATE_ACTION;
    $request->cacheClusterIds = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->replicationGroupIds = [
        'recusandae',
        'temporibus',
    ];
    $request->serviceUpdateName = 'ab';
    $request->version = GETBatchApplyUpdateActionVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getBatchApplyUpdateAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchStopUpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchStopUpdateActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBatchStopUpdateActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBatchStopUpdateActionRequest();
    $request->action = GETBatchStopUpdateActionActionEnum::BATCH_STOP_UPDATE_ACTION;
    $request->cacheClusterIds = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->replicationGroupIds = [
        'quod',
        'quod',
    ];
    $request->serviceUpdateName = 'esse';
    $request->version = GETBatchStopUpdateActionVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getBatchStopUpdateAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompleteMigration

Complete the migration of data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteMigrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteMigrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCompleteMigrationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCompleteMigrationRequest();
    $request->action = GETCompleteMigrationActionEnum::COMPLETE_MIGRATION;
    $request->force = false;
    $request->replicationGroupId = 'fugit';
    $request->version = GETCompleteMigrationVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getCompleteMigration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateGlobalReplicationGroupRequest();
    $request->action = GETCreateGlobalReplicationGroupActionEnum::CREATE_GLOBAL_REPLICATION_GROUP;
    $request->globalReplicationGroupDescription = 'modi';
    $request->globalReplicationGroupIdSuffix = 'qui';
    $request->primaryReplicationGroupId = 'impedit';
    $request->version = GETCreateGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->getCreateGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDecreaseNodeGroupsInGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDecreaseNodeGroupsInGlobalReplicationGroupRequest();
    $request->action = GETDecreaseNodeGroupsInGlobalReplicationGroupActionEnum::DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP;
    $request->applyImmediately = false;
    $request->globalNodeGroupsToRemove = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->globalNodeGroupsToRetain = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->globalReplicationGroupId = 'fuga';
    $request->nodeGroupCount = 449950;
    $request->version = GETDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDecreaseNodeGroupsInGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCacheClusterRequest();
    $request->action = GETDeleteCacheClusterActionEnum::DELETE_CACHE_CLUSTER;
    $request->cacheClusterId = 'reiciendis';
    $request->finalSnapshotIdentifier = 'est';
    $request->version = GETDeleteCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDeleteCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCacheParameterGroupRequest();
    $request->action = GETDeleteCacheParameterGroupActionEnum::DELETE_CACHE_PARAMETER_GROUP;
    $request->cacheParameterGroupName = 'enim';
    $request->version = GETDeleteCacheParameterGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->getDeleteCacheParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCacheSecurityGroupRequest();
    $request->action = GETDeleteCacheSecurityGroupActionEnum::DELETE_CACHE_SECURITY_GROUP;
    $request->cacheSecurityGroupName = 'doloribus';
    $request->version = GETDeleteCacheSecurityGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->getDeleteCacheSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCacheSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCacheSubnetGroupRequest();
    $request->action = GETDeleteCacheSubnetGroupActionEnum::DELETE_CACHE_SUBNET_GROUP;
    $request->cacheSubnetGroupName = 'mollitia';
    $request->version = GETDeleteCacheSubnetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getDeleteCacheSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteGlobalReplicationGroupRequest();
    $request->action = GETDeleteGlobalReplicationGroupActionEnum::DELETE_GLOBAL_REPLICATION_GROUP;
    $request->globalReplicationGroupId = 'quia';
    $request->retainPrimaryReplicationGroup = false;
    $request->version = GETDeleteGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getDeleteGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteReplicationGroupRequest();
    $request->action = GETDeleteReplicationGroupActionEnum::DELETE_REPLICATION_GROUP;
    $request->finalSnapshotIdentifier = 'sequi';
    $request->replicationGroupId = 'tenetur';
    $request->retainPrimaryCluster = false;
    $request->version = GETDeleteReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getDeleteReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSnapshotRequest();
    $request->action = GETDeleteSnapshotActionEnum::DELETE_SNAPSHOT;
    $request->snapshotName = 'laborum';
    $request->version = GETDeleteSnapshotVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getDeleteSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUserRequest();
    $request->action = GETDeleteUserActionEnum::DELETE_USER;
    $request->userId = 'ipsa';
    $request->version = GETDeleteUserVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->getDeleteUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUserGroupRequest();
    $request->action = GETDeleteUserGroupActionEnum::DELETE_USER_GROUP;
    $request->userGroupId = 'maiores';
    $request->version = GETDeleteUserGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDeleteUserGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheClustersRequest();
    $request->action = GETDescribeCacheClustersActionEnum::DESCRIBE_CACHE_CLUSTERS;
    $request->cacheClusterId = 'accusamus';
    $request->marker = 'commodi';
    $request->maxRecords = 918236;
    $request->showCacheClustersNotInReplicationGroups = false;
    $request->showCacheNodeInfo = false;
    $request->version = GETDescribeCacheClustersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getDescribeCacheClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheEngineVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheEngineVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheEngineVersionsRequest();
    $request->action = GETDescribeCacheEngineVersionsActionEnum::DESCRIBE_CACHE_ENGINE_VERSIONS;
    $request->cacheParameterGroupFamily = 'praesentium';
    $request->defaultOnly = false;
    $request->engine = 'rem';
    $request->engineVersion = 'voluptates';
    $request->marker = 'quasi';
    $request->maxRecords = 921158;
    $request->version = GETDescribeCacheEngineVersionsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getDescribeCacheEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheParameterGroupsRequest();
    $request->action = GETDescribeCacheParameterGroupsActionEnum::DESCRIBE_CACHE_PARAMETER_GROUPS;
    $request->cacheParameterGroupName = 'quibusdam';
    $request->marker = 'explicabo';
    $request->maxRecords = 647174;
    $request->version = GETDescribeCacheParameterGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getDescribeCacheParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheParametersRequest();
    $request->action = GETDescribeCacheParametersActionEnum::DESCRIBE_CACHE_PARAMETERS;
    $request->cacheParameterGroupName = 'quos';
    $request->marker = 'perferendis';
    $request->maxRecords = 164940;
    $request->source = 'assumenda';
    $request->version = GETDescribeCacheParametersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getDescribeCacheParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheSecurityGroupsRequest();
    $request->action = GETDescribeCacheSecurityGroupsActionEnum::DESCRIBE_CACHE_SECURITY_GROUPS;
    $request->cacheSecurityGroupName = 'tempore';
    $request->marker = 'labore';
    $request->maxRecords = 962189;
    $request->version = GETDescribeCacheSecurityGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getDescribeCacheSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeCacheSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeCacheSubnetGroupsRequest();
    $request->action = GETDescribeCacheSubnetGroupsActionEnum::DESCRIBE_CACHE_SUBNET_GROUPS;
    $request->cacheSubnetGroupName = 'sint';
    $request->marker = 'officia';
    $request->maxRecords = 223081;
    $request->version = GETDescribeCacheSubnetGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getDescribeCacheSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified cache engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEngineDefaultParametersRequest();
    $request->action = GETDescribeEngineDefaultParametersActionEnum::DESCRIBE_ENGINE_DEFAULT_PARAMETERS;
    $request->cacheParameterGroupFamily = 'rerum';
    $request->marker = 'dicta';
    $request->maxRecords = 297437;
    $request->version = GETDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventsRequest();
    $request->action = GETDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->duration = 581273;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T03:59:53.583Z');
    $request->marker = 'delectus';
    $request->maxRecords = 692532;
    $request->sourceIdentifier = 'provident';
    $request->sourceType = GETDescribeEventsSourceTypeEnum::USER;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T00:47:48.012Z');
    $request->version = GETDescribeEventsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalReplicationGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalReplicationGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeGlobalReplicationGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeGlobalReplicationGroupsRequest();
    $request->action = GETDescribeGlobalReplicationGroupsActionEnum::DESCRIBE_GLOBAL_REPLICATION_GROUPS;
    $request->globalReplicationGroupId = 'omnis';
    $request->marker = 'molestiae';
    $request->maxRecords = 19193;
    $request->showMemberInfo = false;
    $request->version = GETDescribeGlobalReplicationGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getDescribeGlobalReplicationGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReplicationGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReplicationGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReplicationGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReplicationGroupsRequest();
    $request->action = GETDescribeReplicationGroupsActionEnum::DESCRIBE_REPLICATION_GROUPS;
    $request->marker = 'natus';
    $request->maxRecords = 749170;
    $request->replicationGroupId = 'eum';
    $request->version = GETDescribeReplicationGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->getDescribeReplicationGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedCacheNodesRequest();
    $request->action = GETDescribeReservedCacheNodesActionEnum::DESCRIBE_RESERVED_CACHE_NODES;
    $request->cacheNodeType = 'provident';
    $request->duration = 'quos';
    $request->marker = 'sint';
    $request->maxRecords = 33625;
    $request->offeringType = 'mollitia';
    $request->productDescription = 'reiciendis';
    $request->reservedCacheNodeId = 'mollitia';
    $request->reservedCacheNodesOfferingId = 'ad';
    $request->version = GETDescribeReservedCacheNodesVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->getDescribeReservedCacheNodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedCacheNodesOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedCacheNodesOfferingsRequest();
    $request->action = GETDescribeReservedCacheNodesOfferingsActionEnum::DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS;
    $request->cacheNodeType = 'doloribus';
    $request->duration = 'debitis';
    $request->marker = 'eius';
    $request->maxRecords = 806194;
    $request->offeringType = 'deleniti';
    $request->productDescription = 'facilis';
    $request->reservedCacheNodesOfferingId = 'in';
    $request->version = GETDescribeReservedCacheNodesOfferingsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->getDescribeReservedCacheNodesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeServiceUpdates

Returns details of the service updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceUpdatesActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeServiceUpdatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeServiceUpdatesRequest();
    $request->action = GETDescribeServiceUpdatesActionEnum::DESCRIBE_SERVICE_UPDATES;
    $request->marker = 'quibusdam';
    $request->maxRecords = 149448;
    $request->serviceUpdateName = 'saepe';
    $request->serviceUpdateStatus = [
        ServiceUpdateStatusEnum::AVAILABLE,
        ServiceUpdateStatusEnum::AVAILABLE,
        ServiceUpdateStatusEnum::CANCELLED,
        ServiceUpdateStatusEnum::CANCELLED,
    ];
    $request->version = GETDescribeServiceUpdatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getDescribeServiceUpdates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSnapshotsRequest();
    $request->action = GETDescribeSnapshotsActionEnum::DESCRIBE_SNAPSHOTS;
    $request->cacheClusterId = 'excepturi';
    $request->marker = 'odit';
    $request->maxRecords = 407183;
    $request->replicationGroupId = 'accusantium';
    $request->showNodeGroupConfig = false;
    $request->snapshotName = 'ab';
    $request->snapshotSource = 'maiores';
    $request->version = GETDescribeSnapshotsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->getDescribeSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeUpdateActions

Returns details of the update actions 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUpdateActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUpdateActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUpdateActionsServiceUpdateTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUpdateActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeUpdateActionsRequest();
    $request->action = GETDescribeUpdateActionsActionEnum::DESCRIBE_UPDATE_ACTIONS;
    $request->cacheClusterIds = [
        'voluptatibus',
        'perferendis',
    ];
    $request->engine = 'fugiat';
    $request->marker = 'amet';
    $request->maxRecords = 11714;
    $request->replicationGroupIds = [
        'corporis',
        'hic',
        'libero',
        'nobis',
    ];
    $request->serviceUpdateName = 'dolores';
    $request->serviceUpdateStatus = [
        ServiceUpdateStatusEnum::CANCELLED,
        ServiceUpdateStatusEnum::CANCELLED,
    ];
    $request->serviceUpdateTimeRange = new GETDescribeUpdateActionsServiceUpdateTimeRange();
    $request->serviceUpdateTimeRange->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T06:29:24.707Z');
    $request->serviceUpdateTimeRange->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T11:39:54.088Z');
    $request->showNodeLevelUpdateStatus = false;
    $request->updateActionStatus = [
        UpdateActionStatusEnum::WAITING_TO_START,
    ];
    $request->version = GETDescribeUpdateActionsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getDescribeUpdateActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeUserGroups

Returns a list of user groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUserGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUserGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeUserGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeUserGroupsRequest();
    $request->action = GETDescribeUserGroupsActionEnum::DESCRIBE_USER_GROUPS;
    $request->marker = 'omnis';
    $request->maxRecords = 704415;
    $request->userGroupId = 'perspiciatis';
    $request->version = GETDescribeUserGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getDescribeUserGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisassociateGlobalReplicationGroupRequest();
    $request->action = GETDisassociateGlobalReplicationGroupActionEnum::DISASSOCIATE_GLOBAL_REPLICATION_GROUP;
    $request->globalReplicationGroupId = 'rerum';
    $request->replicationGroupId = 'adipisci';
    $request->replicationGroupRegion = 'asperiores';
    $request->version = GETDisassociateGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getDisassociateGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETFailoverGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETFailoverGlobalReplicationGroupRequest();
    $request->action = GETFailoverGlobalReplicationGroupActionEnum::FAILOVER_GLOBAL_REPLICATION_GROUP;
    $request->globalReplicationGroupId = 'nobis';
    $request->primaryRegion = 'libero';
    $request->primaryReplicationGroupId = 'delectus';
    $request->version = GETFailoverGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getFailoverGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAllowedNodeTypeModificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAllowedNodeTypeModificationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAllowedNodeTypeModificationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAllowedNodeTypeModificationsRequest();
    $request->action = GETListAllowedNodeTypeModificationsActionEnum::LIST_ALLOWED_NODE_TYPE_MODIFICATIONS;
    $request->cacheClusterId = 'ipsum';
    $request->replicationGroupId = 'hic';
    $request->version = GETListAllowedNodeTypeModificationsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getListAllowedNodeTypeModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTagsForResource

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTagsForResourceRequest();
    $request->action = GETListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->resourceName = 'numquam';
    $request->version = GETListTagsForResourceVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyCacheSubnetGroup

Modifies an existing cache subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCacheSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCacheSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyCacheSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyCacheSubnetGroupRequest();
    $request->action = GETModifyCacheSubnetGroupActionEnum::MODIFY_CACHE_SUBNET_GROUP;
    $request->cacheSubnetGroupDescription = 'quidem';
    $request->cacheSubnetGroupName = 'voluptatibus';
    $request->subnetIds = [
        'natus',
        'eos',
    ];
    $request->version = GETModifyCacheSubnetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getModifyCacheSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyGlobalReplicationGroupRequest();
    $request->action = GETModifyGlobalReplicationGroupActionEnum::MODIFY_GLOBAL_REPLICATION_GROUP;
    $request->applyImmediately = false;
    $request->automaticFailoverEnabled = false;
    $request->cacheNodeType = 'voluptate';
    $request->cacheParameterGroupName = 'dolorum';
    $request->engineVersion = 'deleniti';
    $request->globalReplicationGroupDescription = 'omnis';
    $request->globalReplicationGroupId = 'necessitatibus';
    $request->version = GETModifyGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getModifyGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyUser

Changes user password(s) and/or access string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserAuthenticationMode;
use \OpenAPI\OpenAPI\Models\Shared\InputAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyUserRequest();
    $request->accessString = 'eius';
    $request->action = GETModifyUserActionEnum::MODIFY_USER;
    $request->appendAccessString = 'aspernatur';
    $request->authenticationMode = new GETModifyUserAuthenticationMode();
    $request->authenticationMode->passwords = [
        'amet',
    ];
    $request->authenticationMode->type = InputAuthenticationTypeEnum::IAM;
    $request->noPasswordRequired = false;
    $request->passwords = [
        'ad',
        'saepe',
        'suscipit',
        'deserunt',
    ];
    $request->userId = 'provident';
    $request->version = GETModifyUserVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->getModifyUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyUserGroup

Changes the list of users that belong to the user group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyUserGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyUserGroupRequest();
    $request->action = GETModifyUserGroupActionEnum::MODIFY_USER_GROUP;
    $request->userGroupId = 'tempora';
    $request->userIdsToAdd = [
        'quod',
        'officiis',
    ];
    $request->userIdsToRemove = [
        'dolorum',
    ];
    $request->version = GETModifyUserGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->getModifyUserGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebalanceSlotsInGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebalanceSlotsInGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebalanceSlotsInGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebalanceSlotsInGlobalReplicationGroupRequest();
    $request->action = GETRebalanceSlotsInGlobalReplicationGroupActionEnum::REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP;
    $request->applyImmediately = false;
    $request->globalReplicationGroupId = 'amet';
    $request->version = GETRebalanceSlotsInGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getRebalanceSlotsInGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebootCacheClusterRequest();
    $request->action = GETRebootCacheClusterActionEnum::REBOOT_CACHE_CLUSTER;
    $request->cacheClusterId = 'nihil';
    $request->cacheNodeIdsToReboot = [
        'expedita',
    ];
    $request->version = GETRebootCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getRebootCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTagsFromResource

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
    $request->resourceName = 'ipsum';
    $request->tagKeys = [
        'qui',
        'cupiditate',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeCacheSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeCacheSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeCacheSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeCacheSecurityGroupIngressRequest();
    $request->action = GETRevokeCacheSecurityGroupIngressActionEnum::REVOKE_CACHE_SECURITY_GROUP_INGRESS;
    $request->cacheSecurityGroupName = 'aspernatur';
    $request->ec2SecurityGroupName = 'dolores';
    $request->ec2SecurityGroupOwnerId = 'distinctio';
    $request->version = GETRevokeCacheSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->getRevokeCacheSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTestFailoverRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETTestFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTestFailoverVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTestFailoverRequest();
    $request->action = GETTestFailoverActionEnum::TEST_FAILOVER;
    $request->nodeGroupId = 'fugit';
    $request->replicationGroupId = 'magni';
    $request->version = GETTestFailoverVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->getTestFailover($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTagsToResource

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>

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
    $request->requestBody = 'soluta';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postAddTagsToResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeCacheSecurityGroupIngress

<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeCacheSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeCacheSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeCacheSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeCacheSecurityGroupIngressRequest();
    $request->action = POSTAuthorizeCacheSecurityGroupIngressActionEnum::AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'tempore';
    $request->version = POSTAuthorizeCacheSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postAuthorizeCacheSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchApplyUpdateAction

Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchApplyUpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchApplyUpdateActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchApplyUpdateActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchApplyUpdateActionRequest();
    $request->action = POSTBatchApplyUpdateActionActionEnum::BATCH_APPLY_UPDATE_ACTION;
    $request->requestBody = 'dolorum';
    $request->version = POSTBatchApplyUpdateActionVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->postBatchApplyUpdateAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchStopUpdateAction

Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchStopUpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchStopUpdateActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchStopUpdateActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchStopUpdateActionRequest();
    $request->action = POSTBatchStopUpdateActionActionEnum::BATCH_STOP_UPDATE_ACTION;
    $request->requestBody = 'repellendus';
    $request->version = POSTBatchStopUpdateActionVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postBatchStopUpdateAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompleteMigration

Complete the migration of data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteMigrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteMigrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCompleteMigrationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCompleteMigrationRequest();
    $request->action = POSTCompleteMigrationActionEnum::COMPLETE_MIGRATION;
    $request->requestBody = 'laudantium';
    $request->version = POSTCompleteMigrationVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->postCompleteMigration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopySnapshot

<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopySnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopySnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopySnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopySnapshotRequest();
    $request->action = POSTCopySnapshotActionEnum::COPY_SNAPSHOT;
    $request->requestBody = 'ipsum';
    $request->version = POSTCopySnapshotVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postCopySnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCacheCluster

<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCacheClusterRequest();
    $request->action = POSTCreateCacheClusterActionEnum::CREATE_CACHE_CLUSTER;
    $request->requestBody = 'distinctio';
    $request->version = POSTCreateCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->postCreateCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCacheParameterGroup

<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCacheParameterGroupRequest();
    $request->action = POSTCreateCacheParameterGroupActionEnum::CREATE_CACHE_PARAMETER_GROUP;
    $request->requestBody = 'quibusdam';
    $request->version = POSTCreateCacheParameterGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postCreateCacheParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCacheSecurityGroup

<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCacheSecurityGroupRequest();
    $request->action = POSTCreateCacheSecurityGroupActionEnum::CREATE_CACHE_SECURITY_GROUP;
    $request->requestBody = 'nulla';
    $request->version = POSTCreateCacheSecurityGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postCreateCacheSecurityGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCacheSubnetGroup

<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCacheSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCacheSubnetGroupRequest();
    $request->action = POSTCreateCacheSubnetGroupActionEnum::CREATE_CACHE_SUBNET_GROUP;
    $request->requestBody = 'alias';
    $request->version = POSTCreateCacheSubnetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->postCreateCacheSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateGlobalReplicationGroup

<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateGlobalReplicationGroupRequest();
    $request->action = POSTCreateGlobalReplicationGroupActionEnum::CREATE_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'magnam';
    $request->version = POSTCreateGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postCreateGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateReplicationGroup

<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateReplicationGroupRequest();
    $request->action = POSTCreateReplicationGroupActionEnum::CREATE_REPLICATION_GROUP;
    $request->requestBody = 'ex';
    $request->version = POSTCreateReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postCreateReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateSnapshot

<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateSnapshotRequest();
    $request->action = POSTCreateSnapshotActionEnum::CREATE_SNAPSHOT;
    $request->requestBody = 'ea';
    $request->version = POSTCreateSnapshotVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postCreateSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateUser

For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateUserRequest();
    $request->action = POSTCreateUserActionEnum::CREATE_USER;
    $request->requestBody = 'quo';
    $request->version = POSTCreateUserVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postCreateUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateUserGroup

For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateUserGroupRequest();
    $request->action = POSTCreateUserGroupActionEnum::CREATE_USER_GROUP;
    $request->requestBody = 'aut';
    $request->version = POSTCreateUserGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->postCreateUserGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDecreaseNodeGroupsInGlobalReplicationGroup

Decreases the number of node groups in a Global datastore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDecreaseNodeGroupsInGlobalReplicationGroupRequest();
    $request->action = POSTDecreaseNodeGroupsInGlobalReplicationGroupActionEnum::DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'non';
    $request->version = POSTDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->postDecreaseNodeGroupsInGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDecreaseReplicaCount

Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseReplicaCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseReplicaCountActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDecreaseReplicaCountVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDecreaseReplicaCountRequest();
    $request->action = POSTDecreaseReplicaCountActionEnum::DECREASE_REPLICA_COUNT;
    $request->requestBody = 'nobis';
    $request->version = POSTDecreaseReplicaCountVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postDecreaseReplicaCount($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCacheCluster

<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCacheClusterRequest();
    $request->action = POSTDeleteCacheClusterActionEnum::DELETE_CACHE_CLUSTER;
    $request->requestBody = 'numquam';
    $request->version = POSTDeleteCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->postDeleteCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCacheParameterGroup

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCacheParameterGroupRequest();
    $request->action = POSTDeleteCacheParameterGroupActionEnum::DELETE_CACHE_PARAMETER_GROUP;
    $request->requestBody = 'esse';
    $request->version = POSTDeleteCacheParameterGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->postDeleteCacheParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCacheSecurityGroup

<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCacheSecurityGroupRequest();
    $request->action = POSTDeleteCacheSecurityGroupActionEnum::DELETE_CACHE_SECURITY_GROUP;
    $request->requestBody = 'eum';
    $request->version = POSTDeleteCacheSecurityGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postDeleteCacheSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCacheSubnetGroup

<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCacheSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCacheSubnetGroupRequest();
    $request->action = POSTDeleteCacheSubnetGroupActionEnum::DELETE_CACHE_SUBNET_GROUP;
    $request->requestBody = 'id';
    $request->version = POSTDeleteCacheSubnetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->postDeleteCacheSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGlobalReplicationGroup

<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteGlobalReplicationGroupRequest();
    $request->action = POSTDeleteGlobalReplicationGroupActionEnum::DELETE_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'eos';
    $request->version = POSTDeleteGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postDeleteGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteReplicationGroup

<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteReplicationGroupRequest();
    $request->action = POSTDeleteReplicationGroupActionEnum::DELETE_REPLICATION_GROUP;
    $request->requestBody = 'aspernatur';
    $request->version = POSTDeleteReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->postDeleteReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSnapshot

<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSnapshotRequest();
    $request->action = POSTDeleteSnapshotActionEnum::DELETE_SNAPSHOT;
    $request->requestBody = 'dignissimos';
    $request->version = POSTDeleteSnapshotVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postDeleteSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUser

For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUserRequest();
    $request->action = POSTDeleteUserActionEnum::DELETE_USER;
    $request->requestBody = 'commodi';
    $request->version = POSTDeleteUserVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postDeleteUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUserGroup

For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUserGroupRequest();
    $request->action = POSTDeleteUserGroupActionEnum::DELETE_USER_GROUP;
    $request->requestBody = 'quas';
    $request->version = POSTDeleteUserGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->postDeleteUserGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheClusters

<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheClustersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheClustersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheClustersRequest();
    $request->action = POSTDescribeCacheClustersActionEnum::DESCRIBE_CACHE_CLUSTERS;
    $request->marker = 'atque';
    $request->maxRecords = 'explicabo';
    $request->requestBody = 'minima';
    $request->version = POSTDescribeCacheClustersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postDescribeCacheClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheEngineVersions

Returns a list of the available cache engines and their versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheEngineVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheEngineVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheEngineVersionsRequest();
    $request->action = POSTDescribeCacheEngineVersionsActionEnum::DESCRIBE_CACHE_ENGINE_VERSIONS;
    $request->marker = 'occaecati';
    $request->maxRecords = 'atque';
    $request->requestBody = 'et';
    $request->version = POSTDescribeCacheEngineVersionsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postDescribeCacheEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheParameterGroups

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheParameterGroupsRequest();
    $request->action = POSTDescribeCacheParameterGroupsActionEnum::DESCRIBE_CACHE_PARAMETER_GROUPS;
    $request->marker = 'vero';
    $request->maxRecords = 'aliquid';
    $request->requestBody = 'quasi';
    $request->version = POSTDescribeCacheParameterGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postDescribeCacheParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheParameters

Returns the detailed parameter list for a particular cache parameter group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheParametersRequest();
    $request->action = POSTDescribeCacheParametersActionEnum::DESCRIBE_CACHE_PARAMETERS;
    $request->marker = 'distinctio';
    $request->maxRecords = 'eligendi';
    $request->requestBody = 'sit';
    $request->version = POSTDescribeCacheParametersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postDescribeCacheParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheSecurityGroups

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheSecurityGroupsRequest();
    $request->action = POSTDescribeCacheSecurityGroupsActionEnum::DESCRIBE_CACHE_SECURITY_GROUPS;
    $request->marker = 'quaerat';
    $request->maxRecords = 'sapiente';
    $request->requestBody = 'consectetur';
    $request->version = POSTDescribeCacheSecurityGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postDescribeCacheSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCacheSubnetGroups

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeCacheSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeCacheSubnetGroupsRequest();
    $request->action = POSTDescribeCacheSubnetGroupsActionEnum::DESCRIBE_CACHE_SUBNET_GROUPS;
    $request->marker = 'quasi';
    $request->maxRecords = 'a';
    $request->requestBody = 'error';
    $request->version = POSTDescribeCacheSubnetGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postDescribeCacheSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEngineDefaultParameters

Returns the default engine and system parameter information for the specified cache engine.

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
    $request->marker = 'veritatis';
    $request->maxRecords = 'consequuntur';
    $request->requestBody = 'quasi';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
    $request->marker = 'in';
    $request->maxRecords = 'eius';
    $request->requestBody = 'libero';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeGlobalReplicationGroups

Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalReplicationGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalReplicationGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeGlobalReplicationGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeGlobalReplicationGroupsRequest();
    $request->action = POSTDescribeGlobalReplicationGroupsActionEnum::DESCRIBE_GLOBAL_REPLICATION_GROUPS;
    $request->marker = 'reprehenderit';
    $request->maxRecords = 'ullam';
    $request->requestBody = 'nisi';
    $request->version = POSTDescribeGlobalReplicationGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'itaque';

    $response = $sdk->sdk->postDescribeGlobalReplicationGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReplicationGroups

<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReplicationGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReplicationGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReplicationGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReplicationGroupsRequest();
    $request->action = POSTDescribeReplicationGroupsActionEnum::DESCRIBE_REPLICATION_GROUPS;
    $request->marker = 'dolorum';
    $request->maxRecords = 'architecto';
    $request->requestBody = 'omnis';
    $request->version = POSTDescribeReplicationGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postDescribeReplicationGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedCacheNodes

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedCacheNodesRequest();
    $request->action = POSTDescribeReservedCacheNodesActionEnum::DESCRIBE_RESERVED_CACHE_NODES;
    $request->marker = 'veritatis';
    $request->maxRecords = 'consectetur';
    $request->requestBody = 'adipisci';
    $request->version = POSTDescribeReservedCacheNodesVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postDescribeReservedCacheNodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedCacheNodesOfferings

Lists available reserved cache node offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedCacheNodesOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedCacheNodesOfferingsRequest();
    $request->action = POSTDescribeReservedCacheNodesOfferingsActionEnum::DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS;
    $request->marker = 'mollitia';
    $request->maxRecords = 'ab';
    $request->requestBody = 'corrupti';
    $request->version = POSTDescribeReservedCacheNodesOfferingsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postDescribeReservedCacheNodesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeServiceUpdates

Returns details of the service updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceUpdatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeServiceUpdatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeServiceUpdatesRequest();
    $request->action = POSTDescribeServiceUpdatesActionEnum::DESCRIBE_SERVICE_UPDATES;
    $request->marker = 'voluptas';
    $request->maxRecords = 'aut';
    $request->requestBody = 'dignissimos';
    $request->version = POSTDescribeServiceUpdatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->postDescribeServiceUpdates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSnapshots

<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSnapshotsRequest();
    $request->action = POSTDescribeSnapshotsActionEnum::DESCRIBE_SNAPSHOTS;
    $request->marker = 'aperiam';
    $request->maxRecords = 'ea';
    $request->requestBody = 'quaerat';
    $request->version = POSTDescribeSnapshotsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->postDescribeSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeUpdateActions

Returns details of the update actions 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUpdateActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUpdateActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUpdateActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeUpdateActionsRequest();
    $request->action = POSTDescribeUpdateActionsActionEnum::DESCRIBE_UPDATE_ACTIONS;
    $request->marker = 'nemo';
    $request->maxRecords = 'quae';
    $request->requestBody = 'quaerat';
    $request->version = POSTDescribeUpdateActionsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postDescribeUpdateActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeUserGroups

Returns a list of user groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUserGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUserGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUserGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeUserGroupsRequest();
    $request->action = POSTDescribeUserGroupsActionEnum::DESCRIBE_USER_GROUPS;
    $request->marker = 'suscipit';
    $request->maxRecords = 'velit';
    $request->requestBody = 'culpa';
    $request->version = POSTDescribeUserGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postDescribeUserGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeUsers

Returns a list of users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeUsersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeUsersRequest();
    $request->action = POSTDescribeUsersActionEnum::DESCRIBE_USERS;
    $request->marker = 'vel';
    $request->maxRecords = 'labore';
    $request->requestBody = 'possimus';
    $request->version = POSTDescribeUsersVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postDescribeUsers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisassociateGlobalReplicationGroup

Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisassociateGlobalReplicationGroupRequest();
    $request->action = POSTDisassociateGlobalReplicationGroupActionEnum::DISASSOCIATE_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'nemo';
    $request->version = POSTDisassociateGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postDisassociateGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverGlobalReplicationGroup

Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTFailoverGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTFailoverGlobalReplicationGroupRequest();
    $request->action = POSTFailoverGlobalReplicationGroupActionEnum::FAILOVER_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'earum';
    $request->version = POSTFailoverGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postFailoverGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIncreaseNodeGroupsInGlobalReplicationGroup

Increase the number of node groups in the Global datastore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest();
    $request->action = POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum::INCREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postIncreaseNodeGroupsInGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIncreaseReplicaCount

Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseReplicaCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseReplicaCountActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTIncreaseReplicaCountVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTIncreaseReplicaCountRequest();
    $request->action = POSTIncreaseReplicaCountActionEnum::INCREASE_REPLICA_COUNT;
    $request->requestBody = 'dignissimos';
    $request->version = POSTIncreaseReplicaCountVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postIncreaseReplicaCount($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAllowedNodeTypeModifications

<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAllowedNodeTypeModificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAllowedNodeTypeModificationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAllowedNodeTypeModificationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAllowedNodeTypeModificationsRequest();
    $request->action = POSTListAllowedNodeTypeModificationsActionEnum::LIST_ALLOWED_NODE_TYPE_MODIFICATIONS;
    $request->requestBody = 'voluptates';
    $request->version = POSTListAllowedNodeTypeModificationsVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postListAllowedNodeTypeModifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>

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
    $request->requestBody = 'voluptas';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCacheCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCacheClusterRequest();
    $request->action = POSTModifyCacheClusterActionEnum::MODIFY_CACHE_CLUSTER;
    $request->requestBody = 'blanditiis';
    $request->version = POSTModifyCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postModifyCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCacheParameterGroup

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCacheParameterGroupRequest();
    $request->action = POSTModifyCacheParameterGroupActionEnum::MODIFY_CACHE_PARAMETER_GROUP;
    $request->requestBody = 'cum';
    $request->version = POSTModifyCacheParameterGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postModifyCacheParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyCacheSubnetGroup

Modifies an existing cache subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyCacheSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyCacheSubnetGroupRequest();
    $request->action = POSTModifyCacheSubnetGroupActionEnum::MODIFY_CACHE_SUBNET_GROUP;
    $request->requestBody = 'totam';
    $request->version = POSTModifyCacheSubnetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postModifyCacheSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyGlobalReplicationGroup

Modifies the settings for a Global datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyGlobalReplicationGroupRequest();
    $request->action = POSTModifyGlobalReplicationGroupActionEnum::MODIFY_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'explicabo';
    $request->version = POSTModifyGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->postModifyGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyReplicationGroup

<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyReplicationGroupRequest();
    $request->action = POSTModifyReplicationGroupActionEnum::MODIFY_REPLICATION_GROUP;
    $request->requestBody = 'laborum';
    $request->version = POSTModifyReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'unde';

    $response = $sdk->sdk->postModifyReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyReplicationGroupShardConfiguration

Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupShardConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupShardConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyReplicationGroupShardConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyReplicationGroupShardConfigurationRequest();
    $request->action = POSTModifyReplicationGroupShardConfigurationActionEnum::MODIFY_REPLICATION_GROUP_SHARD_CONFIGURATION;
    $request->requestBody = 'architecto';
    $request->version = POSTModifyReplicationGroupShardConfigurationVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'corrupti';

    $response = $sdk->sdk->postModifyReplicationGroupShardConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyUser

Changes user password(s) and/or access string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyUserRequest();
    $request->action = POSTModifyUserActionEnum::MODIFY_USER;
    $request->requestBody = 'maiores';
    $request->version = POSTModifyUserVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postModifyUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyUserGroup

Changes the list of users that belong to the user group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyUserGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyUserGroupRequest();
    $request->action = POSTModifyUserGroupActionEnum::MODIFY_USER_GROUP;
    $request->requestBody = 'occaecati';
    $request->version = POSTModifyUserGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->postModifyUserGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPurchaseReservedCacheNodesOffering

Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedCacheNodesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedCacheNodesOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedCacheNodesOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPurchaseReservedCacheNodesOfferingRequest();
    $request->action = POSTPurchaseReservedCacheNodesOfferingActionEnum::PURCHASE_RESERVED_CACHE_NODES_OFFERING;
    $request->requestBody = 'sit';
    $request->version = POSTPurchaseReservedCacheNodesOfferingVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postPurchaseReservedCacheNodesOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebalanceSlotsInGlobalReplicationGroup

Redistribute slots to ensure uniform distribution across existing shards in the cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebalanceSlotsInGlobalReplicationGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebalanceSlotsInGlobalReplicationGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebalanceSlotsInGlobalReplicationGroupRequest();
    $request->action = POSTRebalanceSlotsInGlobalReplicationGroupActionEnum::REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP;
    $request->requestBody = 'debitis';
    $request->version = POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postRebalanceSlotsInGlobalReplicationGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootCacheCluster

<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootCacheClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootCacheClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootCacheClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebootCacheClusterRequest();
    $request->action = POSTRebootCacheClusterActionEnum::REBOOT_CACHE_CLUSTER;
    $request->requestBody = 'reiciendis';
    $request->version = POSTRebootCacheClusterVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postRebootCacheCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTagsFromResource

Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.

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
    $request->requestBody = 'officiis';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postRemoveTagsFromResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetCacheParameterGroup

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetCacheParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetCacheParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetCacheParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetCacheParameterGroupRequest();
    $request->action = POSTResetCacheParameterGroupActionEnum::RESET_CACHE_PARAMETER_GROUP;
    $request->requestBody = 'voluptatum';
    $request->version = POSTResetCacheParameterGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postResetCacheParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeCacheSecurityGroupIngress

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeCacheSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeCacheSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeCacheSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeCacheSecurityGroupIngressRequest();
    $request->action = POSTRevokeCacheSecurityGroupIngressActionEnum::REVOKE_CACHE_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'officia';
    $request->version = POSTRevokeCacheSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->postRevokeCacheSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartMigration

Start the migration of data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMigrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMigrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMigrationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartMigrationRequest();
    $request->action = POSTStartMigrationActionEnum::START_MIGRATION;
    $request->requestBody = 'fugiat';
    $request->version = POSTStartMigrationVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postStartMigration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestFailover

<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestFailoverRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestFailoverVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTestFailoverRequest();
    $request->action = POSTTestFailoverActionEnum::TEST_FAILOVER;
    $request->requestBody = 'sit';
    $request->version = POSTTestFailoverVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->postTestFailover($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
