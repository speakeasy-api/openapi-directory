# SDK

## Overview

Amazon DocumentDB API documentation

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [GETAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [GETApplyPendingMaintenanceAction](#getapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* [GETCreateGlobalCluster](#getcreateglobalcluster) - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [GETDeleteDBCluster](#getdeletedbcluster) - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* [GETDeleteDBClusterParameterGroup](#getdeletedbclusterparametergroup) - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* [GETDeleteDBClusterSnapshot](#getdeletedbclustersnapshot) - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [GETDeleteDBInstance](#getdeletedbinstance) - Deletes a previously provisioned instance.
* [GETDeleteDBSubnetGroup](#getdeletedbsubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [GETDeleteEventSubscription](#getdeleteeventsubscription) - Deletes an Amazon DocumentDB event notification subscription.
* [GETDeleteGlobalCluster](#getdeleteglobalcluster) - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [GETDescribeDBClusterSnapshotAttributes](#getdescribedbclustersnapshotattributes) - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
* [GETFailoverDBCluster](#getfailoverdbcluster) - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* [GETModifyDBCluster](#getmodifydbcluster) - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* [GETModifyDBClusterSnapshotAttribute](#getmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* [GETModifyDBInstance](#getmodifydbinstance) - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [GETModifyDBSubnetGroup](#getmodifydbsubnetgroup) - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [GETModifyEventSubscription](#getmodifyeventsubscription) - Modifies an existing Amazon DocumentDB event notification subscription.
* [GETModifyGlobalCluster](#getmodifyglobalcluster) - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [GETRebootDBInstance](#getrebootdbinstance) - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* [GETRemoveFromGlobalCluster](#getremovefromglobalcluster) - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [GETRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription) - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* [GETRemoveTagsFromResource](#getremovetagsfromresource) - Removes metadata tags from an Amazon DocumentDB resource.
* [GETStartDBCluster](#getstartdbcluster) - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [GETStopDBCluster](#getstopdbcluster) - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [POSTAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription) - Adds a source identifier to an existing event notification subscription.
* [POSTAddTagsToResource](#postaddtagstoresource) - Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
* [POSTApplyPendingMaintenanceAction](#postapplypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* [POSTCopyDBClusterParameterGroup](#postcopydbclusterparametergroup) - Copies the specified cluster parameter group.
* [POSTCopyDBClusterSnapshot](#postcopydbclustersnapshot) - <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
* [POSTCreateDBCluster](#postcreatedbcluster) - Creates a new Amazon DocumentDB cluster.
* [POSTCreateDBClusterParameterGroup](#postcreatedbclusterparametergroup) - <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
* [POSTCreateDBClusterSnapshot](#postcreatedbclustersnapshot) - Creates a snapshot of a cluster. 
* [POSTCreateDBInstance](#postcreatedbinstance) - Creates a new instance.
* [POSTCreateDBSubnetGroup](#postcreatedbsubnetgroup) - Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [POSTCreateEventSubscription](#postcreateeventsubscription) - <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
* [POSTCreateGlobalCluster](#postcreateglobalcluster) - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [POSTDeleteDBCluster](#postdeletedbcluster) - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* [POSTDeleteDBClusterParameterGroup](#postdeletedbclusterparametergroup) - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* [POSTDeleteDBClusterSnapshot](#postdeletedbclustersnapshot) - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* [POSTDeleteDBInstance](#postdeletedbinstance) - Deletes a previously provisioned instance.
* [POSTDeleteDBSubnetGroup](#postdeletedbsubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* [POSTDeleteEventSubscription](#postdeleteeventsubscription) - Deletes an Amazon DocumentDB event notification subscription.
* [POSTDeleteGlobalCluster](#postdeleteglobalcluster) - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [POSTDescribeCertificates](#postdescribecertificates) - Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
* [POSTDescribeDBClusterParameterGroups](#postdescribedbclusterparametergroups) - Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 
* [POSTDescribeDBClusterParameters](#postdescribedbclusterparameters) - Returns the detailed parameter list for a particular cluster parameter group.
* [POSTDescribeDBClusterSnapshotAttributes](#postdescribedbclustersnapshotattributes) - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
* [POSTDescribeDBClusterSnapshots](#postdescribedbclustersnapshots) - Returns information about cluster snapshots. This API operation supports pagination.
* [POSTDescribeDBClusters](#postdescribedbclusters) - Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
* [POSTDescribeDBEngineVersions](#postdescribedbengineversions) - Returns a list of the available engines.
* [POSTDescribeDBInstances](#postdescribedbinstances) - Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
* [POSTDescribeDBSubnetGroups](#postdescribedbsubnetgroups) - Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
* [POSTDescribeEngineDefaultClusterParameters](#postdescribeenginedefaultclusterparameters) - Returns the default engine and system parameter information for the cluster database engine.
* [POSTDescribeEventCategories](#postdescribeeventcategories) - Displays a list of categories for all event source types, or, if specified, for a specified source type. 
* [POSTDescribeEventSubscriptions](#postdescribeeventsubscriptions) - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* [POSTDescribeEvents](#postdescribeevents) - Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
* [POSTDescribeGlobalClusters](#postdescribeglobalclusters) - <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [POSTDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions) - Returns a list of orderable instance options for the specified engine.
* [POSTDescribePendingMaintenanceActions](#postdescribependingmaintenanceactions) - Returns a list of resources (for example, instances) that have at least one pending maintenance action.
* [POSTFailoverDBCluster](#postfailoverdbcluster) - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* [POSTListTagsForResource](#postlisttagsforresource) - Lists all tags on an Amazon DocumentDB resource.
* [POSTModifyDBCluster](#postmodifydbcluster) - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* [POSTModifyDBClusterParameterGroup](#postmodifydbclusterparametergroup) - <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
* [POSTModifyDBClusterSnapshotAttribute](#postmodifydbclustersnapshotattribute) - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* [POSTModifyDBInstance](#postmodifydbinstance) - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* [POSTModifyDBSubnetGroup](#postmodifydbsubnetgroup) - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
* [POSTModifyEventSubscription](#postmodifyeventsubscription) - Modifies an existing Amazon DocumentDB event notification subscription.
* [POSTModifyGlobalCluster](#postmodifyglobalcluster) - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [POSTRebootDBInstance](#postrebootdbinstance) - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* [POSTRemoveFromGlobalCluster](#postremovefromglobalcluster) - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* [POSTRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription) - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* [POSTRemoveTagsFromResource](#postremovetagsfromresource) - Removes metadata tags from an Amazon DocumentDB resource.
* [POSTResetDBClusterParameterGroup](#postresetdbclusterparametergroup) - <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
* [POSTRestoreDBClusterFromSnapshot](#postrestoredbclusterfromsnapshot) - <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
* [POSTRestoreDBClusterToPointInTime](#postrestoredbclustertopointintime) - Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 
* [POSTStartDBCluster](#poststartdbcluster) - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* [POSTStopDBCluster](#poststopdbcluster) - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

## GETAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

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
        SourceIdentifier: "error",
        SubscriptionName: "deserunt",
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
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

## GETApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
        ApplyAction: "suscipit",
        OptInType: "molestiae",
        ResourceIdentifier: "minus",
        Version: operations.GETApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
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

## GETCreateGlobalCluster

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        DatabaseName: sdk.String("ab"),
        DeletionProtection: sdk.Bool(false),
        Engine: sdk.String("quis"),
        EngineVersion: sdk.String("veritatis"),
        GlobalClusterIdentifier: "deserunt",
        SourceDBClusterIdentifier: sdk.String("perferendis"),
        StorageEncrypted: sdk.Bool(false),
        Version: operations.GETCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
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

## GETDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
        DBClusterIdentifier: "maiores",
        FinalDBSnapshotIdentifier: sdk.String("molestiae"),
        SkipFinalSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteDBClusterVersionEnumTwoThousandAndFourteen1031,
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

## GETDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
        DBClusterParameterGroupName: "nam",
        Version: operations.GETDeleteDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
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

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
        DBClusterSnapshotIdentifier: "beatae",
        Version: operations.GETDeleteDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
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

## GETDeleteDBInstance

Deletes a previously provisioned instance.

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
        DBInstanceIdentifier: "ipsum",
        Version: operations.GETDeleteDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
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

## GETDeleteDBSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
        DBSubnetGroupName: "dolor",
        Version: operations.GETDeleteDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
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

Deletes an Amazon DocumentDB event notification subscription.

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
        SubscriptionName: "iste",
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
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

## GETDeleteGlobalCluster

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        GlobalClusterIdentifier: "mollitia",
        Version: operations.GETDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
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

## GETDescribeDBClusterSnapshotAttributes

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
        DBClusterSnapshotIdentifier: "omnis",
        Version: operations.GETDescribeDBClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
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

## GETFailoverDBCluster

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
        DBClusterIdentifier: sdk.String("sapiente"),
        TargetDBInstanceIdentifier: sdk.String("architecto"),
        Version: operations.GETFailoverDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
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

## GETModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

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
        ApplyImmediately: sdk.Bool(false),
        BackupRetentionPeriod: sdk.Int64(253291),
        CloudwatchLogsExportConfiguration: &operations.GETModifyDBClusterCloudwatchLogsExportConfiguration{
            DisableLogTypes: []string{
                "quam",
                "molestiae",
            },
            EnableLogTypes: []string{
                "error",
            },
        },
        DBClusterIdentifier: "quia",
        DBClusterParameterGroupName: sdk.String("quis"),
        DeletionProtection: sdk.Bool(false),
        EngineVersion: sdk.String("vitae"),
        MasterUserPassword: sdk.String("laborum"),
        NewDBClusterIdentifier: sdk.String("animi"),
        Port: sdk.Int64(317202),
        PreferredBackupWindow: sdk.String("odit"),
        PreferredMaintenanceWindow: sdk.String("quo"),
        Version: operations.GETModifyDBClusterVersionEnumTwoThousandAndFourteen1031,
        VpcSecurityGroupIds: []string{
            "tenetur",
        },
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

## GETModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
        AttributeName: "laborum",
        DBClusterSnapshotIdentifier: "quasi",
        ValuesToAdd: []string{
            "voluptatibus",
            "vero",
            "nihil",
            "praesentium",
        },
        ValuesToRemove: []string{
            "ipsa",
            "omnis",
            "voluptate",
            "cum",
        },
        Version: operations.GETModifyDBClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
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

## GETModifyDBInstance

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

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
    res, err := s.SDK.GETModifyDBInstance(ctx, operations.GETModifyDBInstanceRequest{
        Action: operations.GETModifyDBInstanceActionEnumModifyDbInstance,
        ApplyImmediately: sdk.Bool(false),
        AutoMinorVersionUpgrade: sdk.Bool(false),
        CACertificateIdentifier: sdk.String("dolore"),
        CopyTagsToSnapshot: sdk.Bool(false),
        DBInstanceClass: sdk.String("iusto"),
        DBInstanceIdentifier: "dicta",
        EnablePerformanceInsights: sdk.Bool(false),
        NewDBInstanceIdentifier: sdk.String("harum"),
        PerformanceInsightsKMSKeyID: sdk.String("enim"),
        PreferredMaintenanceWindow: sdk.String("accusamus"),
        PromotionTier: sdk.Int64(414263),
        Version: operations.GETModifyDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
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

## GETModifyDBSubnetGroup

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
        DBSubnetGroupDescription: sdk.String("modi"),
        DBSubnetGroupName: "praesentium",
        SubnetIds: []string{
            "voluptates",
            "quasi",
            "repudiandae",
        },
        Version: operations.GETModifyDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
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

## GETModifyEventSubscription

Modifies an existing Amazon DocumentDB event notification subscription.

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
            "explicabo",
            "deserunt",
            "distinctio",
            "quibusdam",
        },
        SnsTopicArn: sdk.String("labore"),
        SourceType: sdk.String("modi"),
        SubscriptionName: "qui",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
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

## GETModifyGlobalCluster

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        DeletionProtection: sdk.Bool(false),
        GlobalClusterIdentifier: "alias",
        NewGlobalClusterIdentifier: sdk.String("fugit"),
        Version: operations.GETModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031,
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

    if res.Body != nil {
        // handle response
    }
}
```

## GETRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
        DBInstanceIdentifier: "eum",
        ForceFailover: sdk.Bool(false),
        Version: operations.GETRebootDBInstanceVersionEnumTwoThousandAndFourteen1031,
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

## GETRemoveFromGlobalCluster

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        DbClusterIdentifier: "officia",
        GlobalClusterIdentifier: "dolor",
        Version: operations.GETRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031,
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

## GETRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
        SourceIdentifier: "rerum",
        SubscriptionName: "dicta",
        Version: operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
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

## GETRemoveTagsFromResource

Removes metadata tags from an Amazon DocumentDB resource.

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
        ResourceName: "non",
        TagKeys: []string{
            "enim",
            "accusamus",
            "delectus",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
        DBClusterIdentifier: "amet",
        Version: operations.GETStartDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
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

## GETStopDBCluster

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
        DBClusterIdentifier: "nihil",
        Version: operations.GETStopDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
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

## POSTAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

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
        RequestBody: []byte("nobis"),
        Version: operations.POSTAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
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

## POSTAddTagsToResource

Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.

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
        RequestBody: []byte("ullam"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("mollitia"),
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

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
        RequestBody: []byte("ad"),
        Version: operations.POSTApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031,
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

## POSTCopyDBClusterParameterGroup

Copies the specified cluster parameter group.

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
        RequestBody: []byte("doloribus"),
        Version: operations.POSTCopyDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
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

## POSTCopyDBClusterSnapshot

<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>

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
        RequestBody: []byte("architecto"),
        Version: operations.POSTCopyDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quibusdam"),
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

## POSTCreateDBCluster

Creates a new Amazon DocumentDB cluster.

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
        RequestBody: []byte("saepe"),
        Version: operations.POSTCreateDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
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

<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>

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
        RequestBody: []byte("quo"),
        Version: operations.POSTCreateDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
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

## POSTCreateDBClusterSnapshot

Creates a snapshot of a cluster. 

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
        RequestBody: []byte("accusantium"),
        Version: operations.POSTCreateDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
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

## POSTCreateDBInstance

Creates a new instance.

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
        RequestBody: []byte("eaque"),
        Version: operations.POSTCreateDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
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

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
        RequestBody: []byte("cumque"),
        Version: operations.POSTCreateDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
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

## POSTCreateEventSubscription

<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>

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
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
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

## POSTCreateGlobalCluster

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        RequestBody: []byte("quam"),
        Version: operations.POSTCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
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

## POSTDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
        RequestBody: []byte("perspiciatis"),
        Version: operations.POSTDeleteDBClusterVersionEnumTwoThousandAndFourteen1031,
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

## POSTDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
        RequestBody: []byte("rerum"),
        Version: operations.POSTDeleteDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
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

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
        RequestBody: []byte("pariatur"),
        Version: operations.POSTDeleteDBClusterSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
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

## POSTDeleteDBInstance

Deletes a previously provisioned instance.

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
        RequestBody: []byte("dolorem"),
        Version: operations.POSTDeleteDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
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

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
        RequestBody: []byte("voluptate"),
        Version: operations.POSTDeleteDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
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

## POSTDeleteEventSubscription

Deletes an Amazon DocumentDB event notification subscription.

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
        RequestBody: []byte("ipsa"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
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

## POSTDeleteGlobalCluster

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        RequestBody: []byte("natus"),
        Version: operations.POSTDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
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

## POSTDescribeCertificates

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

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
        Marker: sdk.String("iusto"),
        MaxRecords: sdk.String("voluptate"),
        RequestBody: []byte("dolorum"),
        Version: operations.POSTDescribeCertificatesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
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

## POSTDescribeDBClusterParameterGroups

Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 

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
        Marker: sdk.String("voluptate"),
        MaxRecords: sdk.String("id"),
        RequestBody: []byte("saepe"),
        Version: operations.POSTDescribeDBClusterParameterGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
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

## POSTDescribeDBClusterParameters

Returns the detailed parameter list for a particular cluster parameter group.

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
        Marker: sdk.String("saepe"),
        MaxRecords: sdk.String("suscipit"),
        RequestBody: []byte("deserunt"),
        Version: operations.POSTDescribeDBClusterParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
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

## POSTDescribeDBClusterSnapshotAttributes

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
        RequestBody: []byte("quaerat"),
        Version: operations.POSTDescribeDBClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("dolorum"),
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

## POSTDescribeDBClusterSnapshots

Returns information about cluster snapshots. This API operation supports pagination.

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
        Marker: sdk.String("esse"),
        MaxRecords: sdk.String("harum"),
        RequestBody: []byte("iusto"),
        Version: operations.POSTDescribeDBClusterSnapshotsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
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

## POSTDescribeDBClusters

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.

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
        Marker: sdk.String("enim"),
        MaxRecords: sdk.String("dolorem"),
        RequestBody: []byte("sapiente"),
        Version: operations.POSTDescribeDBClustersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
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

## POSTDescribeDBEngineVersions

Returns a list of the available engines.

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
        Marker: sdk.String("libero"),
        MaxRecords: sdk.String("voluptas"),
        RequestBody: []byte("deserunt"),
        Version: operations.POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
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

## POSTDescribeDBInstances

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

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
        Marker: sdk.String("soluta"),
        MaxRecords: sdk.String("dicta"),
        RequestBody: []byte("laborum"),
        Version: operations.POSTDescribeDBInstancesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
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

## POSTDescribeDBSubnetGroups

Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.

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
        Marker: sdk.String("quam"),
        MaxRecords: sdk.String("molestias"),
        RequestBody: []byte("temporibus"),
        Version: operations.POSTDescribeDBSubnetGroupsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
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

## POSTDescribeEngineDefaultClusterParameters

Returns the default engine and system parameter information for the cluster database engine.

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
        RequestBody: []byte("nam"),
        Version: operations.POSTDescribeEngineDefaultClusterParametersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
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

## POSTDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type. 

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
        RequestBody: []byte("ipsum"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
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
        Marker: sdk.String("dolorem"),
        MaxRecords: sdk.String("dolore"),
        RequestBody: []byte("labore"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
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

## POSTDescribeEvents

Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.

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
        Marker: sdk.String("consequatur"),
        MaxRecords: sdk.String("est"),
        RequestBody: []byte("repellendus"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndFourteen1031,
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

## POSTDescribeGlobalClusters

<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        Marker: sdk.String("laudantium"),
        MaxRecords: sdk.String("odio"),
        RequestBody: []byte("occaecati"),
        Version: operations.POSTDescribeGlobalClustersVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
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

## POSTDescribeOrderableDBInstanceOptions

Returns a list of orderable instance options for the specified engine.

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
        Marker: sdk.String("voluptate"),
        MaxRecords: sdk.String("consectetur"),
        RequestBody: []byte("vero"),
        Version: operations.POSTDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("odio"),
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

## POSTDescribePendingMaintenanceActions

Returns a list of resources (for example, instances) that have at least one pending maintenance action.

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
        Marker: sdk.String("facilis"),
        MaxRecords: sdk.String("vero"),
        RequestBody: []byte("ducimus"),
        Version: operations.POSTDescribePendingMaintenanceActionsVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
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

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
        RequestBody: []byte("voluptatibus"),
        Version: operations.POSTFailoverDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
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

## POSTListTagsForResource

Lists all tags on an Amazon DocumentDB resource.

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
        RequestBody: []byte("eligendi"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
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

## POSTModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

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
        RequestBody: []byte("vel"),
        Version: operations.POSTModifyDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
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

<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>

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
        RequestBody: []byte("maiores"),
        Version: operations.POSTModifyDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
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

## POSTModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
        RequestBody: []byte("quisquam"),
        Version: operations.POSTModifyDBClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("aliquid"),
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

## POSTModifyDBInstance

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

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
        RequestBody: []byte("magnam"),
        Version: operations.POSTModifyDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
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

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
        RequestBody: []byte("a"),
        Version: operations.POSTModifyDBSubnetGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aliquam"),
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

## POSTModifyEventSubscription

Modifies an existing Amazon DocumentDB event notification subscription.

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
        RequestBody: []byte("accusamus"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("placeat"),
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

## POSTModifyGlobalCluster

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        RequestBody: []byte("eum"),
        Version: operations.POSTModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
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

## POSTRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
        RequestBody: []byte("quasi"),
        Version: operations.POSTRebootDBInstanceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
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

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
        RequestBody: []byte("odio"),
        Version: operations.POSTRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("reprehenderit"),
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

## POSTRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
        RequestBody: []byte("fugiat"),
        Version: operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
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

## POSTRemoveTagsFromResource

Removes metadata tags from an Amazon DocumentDB resource.

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
        RequestBody: []byte("veritatis"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
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

## POSTResetDBClusterParameterGroup

<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>

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
        RequestBody: []byte("fuga"),
        Version: operations.POSTResetDBClusterParameterGroupVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
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

## POSTRestoreDBClusterFromSnapshot

<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>

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
        RequestBody: []byte("debitis"),
        Version: operations.POSTRestoreDBClusterFromSnapshotVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("recusandae"),
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

## POSTRestoreDBClusterToPointInTime

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 

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
        RequestBody: []byte("distinctio"),
        Version: operations.POSTRestoreDBClusterToPointInTimeVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("accusamus"),
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

## POSTStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
        RequestBody: []byte("odio"),
        Version: operations.POSTStartDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("accusantium"),
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

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
        RequestBody: []byte("porro"),
        Version: operations.POSTStopDBClusterVersionEnumTwoThousandAndFourteen1031,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("fugit"),
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
