# SDK

## Overview

Amazon DocumentDB API documentation

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [getAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [getApplyPendingMaintenanceAction](#getapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* [getCreateGlobalCluster](#getcreateglobalcluster) - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [getDeleteDBCluster](#getdeletedbcluster) - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* [getDeleteDBClusterParameterGroup](#getdeletedbclusterparametergroup) - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* [getDeleteDBClusterSnapshot](#getdeletedbclustersnapshot) - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [getDeleteDBInstance](#getdeletedbinstance) - Deletes a previously provisioned instance.
* [getDeleteDBSubnetGroup](#getdeletedbsubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [getDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an Amazon DocumentDB event notification subscription.
* [getDeleteGlobalCluster](#getdeleteglobalcluster) - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [getDescribeDBClusterSnapshotAttributes](#getdescribedbclustersnapshotattributes) - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
* [getFailoverDBCluster](#getfailoverdbcluster) - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* [getModifyDBCluster](#getmodifydbcluster) - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* [getModifyDBClusterSnapshotAttribute](#getmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* [getModifyDBInstance](#getmodifydbinstance) - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [getModifyDBSubnetGroup](#getmodifydbsubnetgroup) - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [getModifyEventSubscription](#getmodifyeventsubscription) - Modifies an existing Amazon DocumentDB event notification subscription.
* [getModifyGlobalCluster](#getmodifyglobalcluster) - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [getRebootDBInstance](#getrebootdbinstance) - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* [getRemoveFromGlobalCluster](#getremovefromglobalcluster) - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [getRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription) - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* [getRemoveTagsFromResource](#getremovetagsfromresource) - Removes metadata tags from an Amazon DocumentDB resource.
* [getStartDBCluster](#getstartdbcluster) - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [getStopDBCluster](#getstopdbcluster) - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [postAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [postAddTagsToResource](#postaddtagstoresource) - Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
* [postApplyPendingMaintenanceAction](#postapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* [postCopyDBClusterParameterGroup](#postcopydbclusterparametergroup) - Copies the specified cluster parameter group.
* [postCopyDBClusterSnapshot](#postcopydbclustersnapshot) - <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
* [postCreateDBCluster](#postcreatedbcluster) - Creates a new Amazon DocumentDB cluster.
* [postCreateDBClusterParameterGroup](#postcreatedbclusterparametergroup) - <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
* [postCreateDBClusterSnapshot](#postcreatedbclustersnapshot) - Creates a snapshot of a cluster. 
* [postCreateDBInstance](#postcreatedbinstance) - Creates a new instance.
* [postCreateDBSubnetGroup](#postcreatedbsubnetgroup) - Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [postCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
* [postCreateGlobalCluster](#postcreateglobalcluster) - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [postDeleteDBCluster](#postdeletedbcluster) - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* [postDeleteDBClusterParameterGroup](#postdeletedbclusterparametergroup) - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* [postDeleteDBClusterSnapshot](#postdeletedbclustersnapshot) - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [postDeleteDBInstance](#postdeletedbinstance) - Deletes a previously provisioned instance.
* [postDeleteDBSubnetGroup](#postdeletedbsubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [postDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an Amazon DocumentDB event notification subscription.
* [postDeleteGlobalCluster](#postdeleteglobalcluster) - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [postDescribeCertificates](#postdescribecertificates) - Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
* [postDescribeDBClusterParameterGroups](#postdescribedbclusterparametergroups) - Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 
* [postDescribeDBClusterParameters](#postdescribedbclusterparameters) - Returns the detailed parameter list for a particular cluster parameter group.
* [postDescribeDBClusterSnapshotAttributes](#postdescribedbclustersnapshotattributes) - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
* [postDescribeDBClusterSnapshots](#postdescribedbclustersnapshots) - Returns information about cluster snapshots. This API operation supports pagination.
* [postDescribeDBClusters](#postdescribedbclusters) - Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
* [postDescribeDBEngineVersions](#postdescribedbengineversions) - Returns a list of the available engines.
* [postDescribeDBInstances](#postdescribedbinstances) - Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
* [postDescribeDBSubnetGroups](#postdescribedbsubnetgroups) - Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
* [postDescribeEngineDefaultClusterParameters](#postdescribeenginedefaultclusterparameters) - Returns the default engine and system parameter information for the cluster database engine.
* [postDescribeEventCategories](#postdescribeeventcategories) - Displays a list of categories for all event source types, or, if specified, for a specified source type. 
* [postDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* [postDescribeEvents](#postdescribeevents) - Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
* [postDescribeGlobalClusters](#postdescribeglobalclusters) - <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [postDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions) - Returns a list of orderable instance options for the specified engine.
* [postDescribePendingMaintenanceActions](#postdescribependingmaintenanceactions) - Returns a list of resources (for example, instances) that have at least one pending maintenance action.
* [postFailoverDBCluster](#postfailoverdbcluster) - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* [postListTagsForResource](#postlisttagsforresource) - Lists all tags on an Amazon DocumentDB resource.
* [postModifyDBCluster](#postmodifydbcluster) - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* [postModifyDBClusterParameterGroup](#postmodifydbclusterparametergroup) - <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
* [postModifyDBClusterSnapshotAttribute](#postmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* [postModifyDBInstance](#postmodifydbinstance) - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [postModifyDBSubnetGroup](#postmodifydbsubnetgroup) - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [postModifyEventSubscription](#postmodifyeventsubscription) - Modifies an existing Amazon DocumentDB event notification subscription.
* [postModifyGlobalCluster](#postmodifyglobalcluster) - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [postRebootDBInstance](#postrebootdbinstance) - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* [postRemoveFromGlobalCluster](#postremovefromglobalcluster) - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [postRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription) - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* [postRemoveTagsFromResource](#postremovetagsfromresource) - Removes metadata tags from an Amazon DocumentDB resource.
* [postResetDBClusterParameterGroup](#postresetdbclusterparametergroup) - <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
* [postRestoreDBClusterFromSnapshot](#postrestoredbclusterfromsnapshot) - <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
* [postRestoreDBClusterToPointInTime](#postrestoredbclustertopointintime) - Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 
* [postStartDBCluster](#poststartdbcluster) - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [postStopDBCluster](#poststopdbcluster) - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
    $request->sourceIdentifier = 'error';
    $request->subscriptionName = 'deserunt';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
    $request->applyAction = 'suscipit';
    $request->optInType = 'molestiae';
    $request->resourceIdentifier = 'minus';
    $request->version = GETApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateGlobalCluster

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->databaseName = 'ab';
    $request->deletionProtection = false;
    $request->engine = 'quis';
    $request->engineVersion = 'veritatis';
    $request->globalClusterIdentifier = 'deserunt';
    $request->sourceDBClusterIdentifier = 'perferendis';
    $request->storageEncrypted = false;
    $request->version = GETCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
    $request->dbClusterIdentifier = 'maiores';
    $request->finalDBSnapshotIdentifier = 'molestiae';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
    $request->dbClusterParameterGroupName = 'nam';
    $request->version = GETDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBClusterSnapshot

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
    $request->dbClusterSnapshotIdentifier = 'beatae';
    $request->version = GETDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBInstance

Deletes a previously provisioned instance.

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
    $request->dbInstanceIdentifier = 'ipsum';
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->getDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
    $request->dbSubnetGroupName = 'dolor';
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEventSubscription

Deletes an Amazon DocumentDB event notification subscription.

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
    $request->subscriptionName = 'iste';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGlobalCluster

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->globalClusterIdentifier = 'mollitia';
    $request->version = GETDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBClusterSnapshotAttributes

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
    $request->dbClusterSnapshotIdentifier = 'omnis';
    $request->version = GETDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->getDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverDBCluster

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
    $request->dbClusterIdentifier = 'sapiente';
    $request->targetDBInstanceIdentifier = 'architecto';
    $request->version = GETFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

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
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBClusterRequest();
    $request->action = GETModifyDBClusterActionEnum::MODIFY_DB_CLUSTER;
    $request->applyImmediately = false;
    $request->backupRetentionPeriod = 253291;
    $request->cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration();
    $request->cloudwatchLogsExportConfiguration->disableLogTypes = [
        'quam',
        'molestiae',
    ];
    $request->cloudwatchLogsExportConfiguration->enableLogTypes = [
        'error',
    ];
    $request->dbClusterIdentifier = 'quia';
    $request->dbClusterParameterGroupName = 'quis';
    $request->deletionProtection = false;
    $request->engineVersion = 'vitae';
    $request->masterUserPassword = 'laborum';
    $request->newDBClusterIdentifier = 'animi';
    $request->port = 317202;
    $request->preferredBackupWindow = 'odit';
    $request->preferredMaintenanceWindow = 'quo';
    $request->version = GETModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->vpcSecurityGroupIds = [
        'tenetur',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
    $request->attributeName = 'laborum';
    $request->dbClusterSnapshotIdentifier = 'quasi';
    $request->valuesToAdd = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->valuesToRemove = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->version = GETModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBInstance

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBInstanceRequest();
    $request->action = GETModifyDBInstanceActionEnum::MODIFY_DB_INSTANCE;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->caCertificateIdentifier = 'dolore';
    $request->copyTagsToSnapshot = false;
    $request->dbInstanceClass = 'iusto';
    $request->dbInstanceIdentifier = 'dicta';
    $request->enablePerformanceInsights = false;
    $request->newDBInstanceIdentifier = 'harum';
    $request->performanceInsightsKMSKeyId = 'enim';
    $request->preferredMaintenanceWindow = 'accusamus';
    $request->promotionTier = 414263;
    $request->version = GETModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->getModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSubnetGroup

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
    $request->dbSubnetGroupDescription = 'modi';
    $request->dbSubnetGroupName = 'praesentium';
    $request->subnetIds = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEventSubscription

Modifies an existing Amazon DocumentDB event notification subscription.

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
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->snsTopicArn = 'labore';
    $request->sourceType = 'modi';
    $request->subscriptionName = 'qui';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyGlobalCluster

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->deletionProtection = false;
    $request->globalClusterIdentifier = 'alias';
    $request->newGlobalClusterIdentifier = 'fugit';
    $request->version = GETModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
    $request->dbInstanceIdentifier = 'eum';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveFromGlobalCluster

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->dbClusterIdentifier = 'officia';
    $request->globalClusterIdentifier = 'dolor';
    $request->version = GETRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
    $request->sourceIdentifier = 'rerum';
    $request->subscriptionName = 'dicta';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTagsFromResource

Removes metadata tags from an Amazon DocumentDB resource.

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
    $request->resourceName = 'non';
    $request->tagKeys = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
    $request->dbClusterIdentifier = 'amet';
    $request->version = GETStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopDBCluster

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
    $request->dbClusterIdentifier = 'nihil';
    $request->version = GETStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getStopDBCluster($request);

    if ($response->body !== null) {
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
    $request->requestBody = 'nobis';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTagsToResource

Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.

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
    $request->requestBody = 'ullam';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->postAddTagsToResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
    $request->requestBody = 'ad';
    $request->version = POSTApplyPendingMaintenanceActionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->postApplyPendingMaintenanceAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBClusterParameterGroup

Copies the specified cluster parameter group.

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
    $request->requestBody = 'doloribus';
    $request->version = POSTCopyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postCopyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBClusterSnapshot

<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>

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
    $request->requestBody = 'architecto';
    $request->version = POSTCopyDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postCopyDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBCluster

Creates a new Amazon DocumentDB cluster.

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
    $request->requestBody = 'saepe';
    $request->version = POSTCreateDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postCreateDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterParameterGroup

<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>

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
    $request->requestBody = 'quo';
    $request->version = POSTCreateDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postCreateDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBClusterSnapshot

Creates a snapshot of a cluster. 

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
    $request->requestBody = 'accusantium';
    $request->version = POSTCreateDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postCreateDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstance

Creates a new instance.

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
    $request->requestBody = 'eaque';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postCreateDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSubnetGroup

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
    $request->requestBody = 'cumque';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postCreateDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEventSubscription

<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>

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
    $request->requestBody = 'dignissimos';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postCreateEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateGlobalCluster

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->requestBody = 'quam';
    $request->version = POSTCreateGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postCreateGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
    $request->requestBody = 'perspiciatis';
    $request->version = POSTDeleteDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postDeleteDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
    $request->requestBody = 'rerum';
    $request->version = POSTDeleteDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postDeleteDBClusterParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBClusterSnapshot

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
    $request->requestBody = 'pariatur';
    $request->version = POSTDeleteDBClusterSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postDeleteDBClusterSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBInstance

Deletes a previously provisioned instance.

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
    $request->requestBody = 'dolorem';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->postDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
    $request->requestBody = 'voluptate';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEventSubscription

Deletes an Amazon DocumentDB event notification subscription.

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
    $request->requestBody = 'ipsa';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGlobalCluster

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->requestBody = 'natus';
    $request->version = POSTDeleteGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postDeleteGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeCertificates

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

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
    $request->marker = 'iusto';
    $request->maxRecords = 'voluptate';
    $request->requestBody = 'dolorum';
    $request->version = POSTDescribeCertificatesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->postDescribeCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameterGroups

Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 

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
    $request->marker = 'voluptate';
    $request->maxRecords = 'id';
    $request->requestBody = 'saepe';
    $request->version = POSTDescribeDBClusterParameterGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->postDescribeDBClusterParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterParameters

Returns the detailed parameter list for a particular cluster parameter group.

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
    $request->marker = 'saepe';
    $request->maxRecords = 'suscipit';
    $request->requestBody = 'deserunt';
    $request->version = POSTDescribeDBClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->postDescribeDBClusterParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshotAttributes

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
    $request->requestBody = 'quaerat';
    $request->version = POSTDescribeDBClusterSnapshotAttributesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->postDescribeDBClusterSnapshotAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusterSnapshots

Returns information about cluster snapshots. This API operation supports pagination.

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
    $request->marker = 'esse';
    $request->maxRecords = 'harum';
    $request->requestBody = 'iusto';
    $request->version = POSTDescribeDBClusterSnapshotsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postDescribeDBClusterSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBClusters

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.

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
    $request->marker = 'enim';
    $request->maxRecords = 'dolorem';
    $request->requestBody = 'sapiente';
    $request->version = POSTDescribeDBClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDescribeDBClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBEngineVersions

Returns a list of the available engines.

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
    $request->marker = 'libero';
    $request->maxRecords = 'voluptas';
    $request->requestBody = 'deserunt';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postDescribeDBEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBInstances

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

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
    $request->marker = 'soluta';
    $request->maxRecords = 'dicta';
    $request->requestBody = 'laborum';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSubnetGroups

Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.

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
    $request->marker = 'quam';
    $request->maxRecords = 'molestias';
    $request->requestBody = 'temporibus';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';

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
    $request->requestBody = 'nam';
    $request->version = POSTDescribeEngineDefaultClusterParametersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postDescribeEngineDefaultClusterParameters($request);

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
    $request->requestBody = 'ipsum';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';

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
    $request->marker = 'dolorem';
    $request->maxRecords = 'dolore';
    $request->requestBody = 'labore';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';

    $response = $sdk->sdk->postDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.

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
    $request->marker = 'consequatur';
    $request->maxRecords = 'est';
    $request->requestBody = 'repellendus';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeGlobalClusters

<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->marker = 'laudantium';
    $request->maxRecords = 'odio';
    $request->requestBody = 'occaecati';
    $request->version = POSTDescribeGlobalClustersVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postDescribeGlobalClusters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOrderableDBInstanceOptions

Returns a list of orderable instance options for the specified engine.

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
    $request->marker = 'voluptate';
    $request->maxRecords = 'consectetur';
    $request->requestBody = 'vero';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->postDescribeOrderableDBInstanceOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePendingMaintenanceActions

Returns a list of resources (for example, instances) that have at least one pending maintenance action.

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
    $request->marker = 'facilis';
    $request->maxRecords = 'vero';
    $request->requestBody = 'ducimus';
    $request->version = POSTDescribePendingMaintenanceActionsVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postDescribePendingMaintenanceActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFailoverDBCluster

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
    $request->requestBody = 'voluptatibus';
    $request->version = POSTFailoverDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postFailoverDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

Lists all tags on an Amazon DocumentDB resource.

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
    $request->requestBody = 'eligendi';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

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
    $request->requestBody = 'vel';
    $request->version = POSTModifyDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->postModifyDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterParameterGroup

<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>

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
    $request->requestBody = 'maiores';
    $request->version = POSTModifyDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postModifyDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
    $request->requestBody = 'quisquam';
    $request->version = POSTModifyDBClusterSnapshotAttributeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->postModifyDBClusterSnapshotAttribute($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBInstance

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

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
    $request->requestBody = 'magnam';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->postModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSubnetGroup

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
    $request->requestBody = 'a';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEventSubscription

Modifies an existing Amazon DocumentDB event notification subscription.

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
    $request->requestBody = 'accusamus';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->postModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyGlobalCluster

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->requestBody = 'eum';
    $request->version = POSTModifyGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postModifyGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
    $request->requestBody = 'quasi';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveFromGlobalCluster

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
    $request->requestBody = 'odio';
    $request->version = POSTRemoveFromGlobalClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postRemoveFromGlobalCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
    $request->requestBody = 'fugiat';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->postRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTagsFromResource

Removes metadata tags from an Amazon DocumentDB resource.

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
    $request->requestBody = 'veritatis';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->postRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetDBClusterParameterGroup

<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>

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
    $request->requestBody = 'fuga';
    $request->version = POSTResetDBClusterParameterGroupVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postResetDBClusterParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterFromSnapshot

<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>

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
    $request->requestBody = 'debitis';
    $request->version = POSTRestoreDBClusterFromSnapshotVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postRestoreDBClusterFromSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBClusterToPointInTime

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 

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
    $request->requestBody = 'distinctio';
    $request->version = POSTRestoreDBClusterToPointInTimeVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->postRestoreDBClusterToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
    $request->requestBody = 'odio';
    $request->version = POSTStartDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postStartDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopDBCluster

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
    $request->requestBody = 'porro';
    $request->version = POSTStopDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postStopDBCluster($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
