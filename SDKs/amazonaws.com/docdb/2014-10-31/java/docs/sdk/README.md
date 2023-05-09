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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "suscipit", "iure", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
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

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplyPendingMaintenanceActionRequest req = new GETApplyPendingMaintenanceActionRequest(GETApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, "placeat", "voluptatum", "iusto", GETApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
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

## getCreateGlobalCluster

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateGlobalClusterRequest req = new GETCreateGlobalClusterRequest(GETCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, "perferendis", GETCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                databaseName = "ipsam";
                deletionProtection = false;
                engine = "repellendus";
                engineVersion = "sapiente";
                sourceDBClusterIdentifier = "quo";
                storageEncrypted = false;
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
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

## getDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterRequest req = new GETDeleteDBClusterRequest(GETDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, "totam", GETDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                finalDBSnapshotIdentifier = "porro";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
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

## getDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterParameterGroupRequest req = new GETDeleteDBClusterParameterGroupRequest(GETDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, "optio", GETDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
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

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBClusterSnapshotRequest req = new GETDeleteDBClusterSnapshotRequest(GETDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, "esse", GETDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
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

Deletes a previously provisioned instance.

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
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "dolor", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
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

## getDeleteDBSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "iure", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
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

Deletes an Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "dolores", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
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

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGlobalClusterRequest req = new GETDeleteGlobalClusterRequest(GETDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, "excepturi", GETDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
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

## getDescribeDBClusterSnapshotAttributes

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBClusterSnapshotAttributesRequest req = new GETDescribeDBClusterSnapshotAttributesRequest(GETDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, "culpa", GETDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
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

## getFailoverDBCluster

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETFailoverDBClusterRequest req = new GETFailoverDBClusterRequest(GETFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, GETFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbClusterIdentifier = "velit";
                targetDBInstanceIdentifier = "error";
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
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

## getModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBClusterCloudwatchLogsExportConfiguration;
import org.openapis.openapi.models.operations.GETModifyDBClusterRequest;
import org.openapis.openapi.models.operations.GETModifyDBClusterResponse;
import org.openapis.openapi.models.operations.GETModifyDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterRequest req = new GETModifyDBClusterRequest(GETModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, "sequi", GETModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                applyImmediately = false;
                backupRetentionPeriod = 949572L;
                cloudwatchLogsExportConfiguration = new GETModifyDBClusterCloudwatchLogsExportConfiguration() {{
                    disableLogTypes = new String[]{{
                        add("id"),
                        add("possimus"),
                    }};
                    enableLogTypes = new String[]{{
                        add("quasi"),
                    }};
                }};;
                dbClusterParameterGroupName = "error";
                deletionProtection = false;
                engineVersion = "temporibus";
                masterUserPassword = "laborum";
                newDBClusterIdentifier = "quasi";
                port = 971945L;
                preferredBackupWindow = "voluptatibus";
                preferredMaintenanceWindow = "vero";
                vpcSecurityGroupIds = new String[]{{
                    add("praesentium"),
                    add("voluptatibus"),
                }};
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
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

## getModifyDBClusterSnapshotAttribute

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBClusterSnapshotAttributeRequest req = new GETModifyDBClusterSnapshotAttributeRequest(GETModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, "maiores", "dicta", GETModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                valuesToAdd = new String[]{{
                    add("dolore"),
                    add("iusto"),
                }};
                valuesToRemove = new String[]{{
                    add("harum"),
                }};
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
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

## getModifyDBInstance

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.GETModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.GETModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBInstanceRequest req = new GETModifyDBInstanceRequest(GETModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, "excepturi", GETModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                caCertificateIdentifier = "pariatur";
                copyTagsToSnapshot = false;
                dbInstanceClass = "modi";
                enablePerformanceInsights = false;
                newDBInstanceIdentifier = "praesentium";
                performanceInsightsKMSKeyId = "rem";
                preferredMaintenanceWindow = "voluptates";
                promotionTier = 93940L;
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            GETModifyDBInstanceResponse res = sdk.sdk.getModifyDBInstance(req);

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

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "quibusdam",                 new String[]{{
                                add("deserunt"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                dbSubnetGroupDescription = "distinctio";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
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

Modifies an existing Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "magni", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("ipsam"),
                    add("alias"),
                    add("fugit"),
                    add("dolorum"),
                }};
                snsTopicArn = "excepturi";
                sourceType = "tempora";
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
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

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyGlobalClusterRequest req = new GETModifyGlobalClusterRequest(GETModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, "aliquid", GETModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                deletionProtection = false;
                newGlobalClusterIdentifier = "provident";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
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

## getRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "in", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                forceFailover = false;
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
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

## getRemoveFromGlobalCluster

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveFromGlobalClusterRequest req = new GETRemoveFromGlobalClusterRequest(GETRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, "aliquid", "laborum", GETRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
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

## getRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "nam", "id", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
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

Removes metadata tags from an Amazon DocumentDB resource.

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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "omnis",                 new String[]{{
                                add("perferendis"),
                                add("nihil"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
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

## getStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartDBClusterRequest req = new GETStartDBClusterRequest(GETStartDBClusterActionEnum.START_DB_CLUSTER, "eum", GETStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
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

## getStopDBCluster

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopDBClusterRequest req = new GETStopDBClusterRequest(GETStopDBClusterActionEnum.STOP_DB_CLUSTER, "quos", GETStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
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

## postAddSourceIdentifierToSubscription

Adds a source identifier to an existing event notification subscription.

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
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
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

Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.

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
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
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

Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).

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
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTApplyPendingMaintenanceActionRequest req = new POSTApplyPendingMaintenanceActionRequest(POSTApplyPendingMaintenanceActionActionEnum.APPLY_PENDING_MAINTENANCE_ACTION, POSTApplyPendingMaintenanceActionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "repellat".getBytes();
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "saepe";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "praesentium";
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

## postCopyDBClusterParameterGroup

Copies the specified cluster parameter group.

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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterParameterGroupRequest req = new POSTCopyDBClusterParameterGroupRequest(POSTCopyDBClusterParameterGroupActionEnum.COPY_DB_CLUSTER_PARAMETER_GROUP, POSTCopyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
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

<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>

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
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBClusterSnapshotRequest req = new POSTCopyDBClusterSnapshotRequest(POSTCopyDBClusterSnapshotActionEnum.COPY_DB_CLUSTER_SNAPSHOT, POSTCopyDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
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

## postCreateDBCluster

Creates a new Amazon DocumentDB cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBClusterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBClusterRequest;
import org.openapis.openapi.models.operations.POSTCreateDBClusterResponse;
import org.openapis.openapi.models.operations.POSTCreateDBClusterVersionEnum;
import org.openapis.openapi.models.shared.CreateDBClusterMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterRequest req = new POSTCreateDBClusterRequest(POSTCreateDBClusterActionEnum.CREATE_DB_CLUSTER, POSTCreateDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "eaque".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
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

## postCreateDBClusterParameterGroup

<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>

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
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterParameterGroupRequest req = new POSTCreateDBClusterParameterGroupRequest(POSTCreateDBClusterParameterGroupActionEnum.CREATE_DB_CLUSTER_PARAMETER_GROUP, POSTCreateDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
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

Creates a snapshot of a cluster. 

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
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBClusterSnapshotRequest req = new POSTCreateDBClusterSnapshotRequest(POSTCreateDBClusterSnapshotActionEnum.CREATE_DB_CLUSTER_SNAPSHOT, POSTCreateDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quis".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
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

Creates a new instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
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

## postCreateDBSubnetGroup

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
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

<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>

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
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "iste".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
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

<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateGlobalClusterRequest req = new POSTCreateGlobalClusterRequest(POSTCreateGlobalClusterActionEnum.CREATE_GLOBAL_CLUSTER, POSTCreateGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quos".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
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

## postDeleteDBCluster

<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>

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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterRequest req = new POSTDeleteDBClusterRequest(POSTDeleteDBClusterActionEnum.DELETE_DB_CLUSTER, POSTDeleteDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "cum".getBytes();
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
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

## postDeleteDBClusterParameterGroup

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

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
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterParameterGroupRequest req = new POSTDeleteDBClusterParameterGroupRequest(POSTDeleteDBClusterParameterGroupActionEnum.DELETE_DB_CLUSTER_PARAMETER_GROUP, POSTDeleteDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
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

<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>

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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBClusterSnapshotRequest req = new POSTDeleteDBClusterSnapshotRequest(POSTDeleteDBClusterSnapshotActionEnum.DELETE_DB_CLUSTER_SNAPSHOT, POSTDeleteDBClusterSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "eos".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
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

Deletes a previously provisioned instance.

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
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

## postDeleteDBSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "id".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
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

Deletes an Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
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

<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGlobalClusterRequest req = new POSTDeleteGlobalClusterRequest(POSTDeleteGlobalClusterActionEnum.DELETE_GLOBAL_CLUSTER, POSTDeleteGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "at".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
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

## postDescribeCertificates

Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.

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
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeCertificatesRequest req = new POSTDescribeCertificatesRequest(POSTDescribeCertificatesActionEnum.DESCRIBE_CERTIFICATES, POSTDescribeCertificatesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "esse";
                maxRecords = "harum";
                requestBody = "iusto".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "tenetur";
                xAmzDate = "amet";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "numquam";
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

## postDescribeDBClusterParameterGroups

Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 

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
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParameterGroupsRequest req = new POSTDescribeDBClusterParameterGroupsRequest(POSTDescribeDBClusterParameterGroupsActionEnum.DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS, POSTDescribeDBClusterParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "dolorem";
                maxRecords = "sapiente";
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
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

Returns the detailed parameter list for a particular cluster parameter group.

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
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterParametersRequest req = new POSTDescribeDBClusterParametersRequest(POSTDescribeDBClusterParametersActionEnum.DESCRIBE_DB_CLUSTER_PARAMETERS, POSTDescribeDBClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "deserunt";
                maxRecords = "quam";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cupiditate";
                xAmzDate = "maxime";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dicta";
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

<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>

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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterSnapshotAttributesRequest req = new POSTDescribeDBClusterSnapshotAttributesRequest(POSTDescribeDBClusterSnapshotAttributesActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES, POSTDescribeDBClusterSnapshotAttributesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
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

Returns information about cluster snapshots. This API operation supports pagination.

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
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClusterSnapshotsRequest req = new POSTDescribeDBClusterSnapshotsRequest(POSTDescribeDBClusterSnapshotsActionEnum.DESCRIBE_DB_CLUSTER_SNAPSHOTS, POSTDescribeDBClusterSnapshotsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "temporibus";
                maxRecords = "qui";
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
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

Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.

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
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBClustersRequest req = new POSTDescribeDBClustersRequest(POSTDescribeDBClustersActionEnum.DESCRIBE_DB_CLUSTERS, POSTDescribeDBClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "cumque";
                maxRecords = "soluta";
                requestBody = "nobis".getBytes();
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
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

Returns a list of the available engines.

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
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "aperiam";
                maxRecords = "delectus";
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
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

## postDescribeDBInstances

Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.

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
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "itaque";
                maxRecords = "consequatur";
                requestBody = "est".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "porro";
                xAmzCredential = "doloribus";
                xAmzDate = "ut";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "qui";
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

## postDescribeDBSubnetGroups

Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.

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
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "laudantium";
                maxRecords = "odio";
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
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

Returns the default engine and system parameter information for the cluster database engine.

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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultClusterParametersRequest req = new POSTDescribeEngineDefaultClusterParametersRequest(POSTDescribeEngineDefaultClusterParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS, POSTDescribeEngineDefaultClusterParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consectetur".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
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

## postDescribeEventCategories

Displays a list of categories for all event source types, or, if specified, for a specified source type. 

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
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
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
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "aut";
                maxRecords = "voluptatibus";
                requestBody = "exercitationem".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
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

Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.

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
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "alias";
                maxRecords = "officia";
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
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

## postDescribeGlobalClusters

<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeGlobalClustersRequest req = new POSTDescribeGlobalClustersRequest(POSTDescribeGlobalClustersActionEnum.DESCRIBE_GLOBAL_CLUSTERS, POSTDescribeGlobalClustersVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "laudantium";
                maxRecords = "dicta";
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
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

## postDescribeOrderableDBInstanceOptions

Returns a list of orderable instance options for the specified engine.

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
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "quisquam";
                maxRecords = "saepe";
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "veniam";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ea";
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

Returns a list of resources (for example, instances) that have at least one pending maintenance action.

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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePendingMaintenanceActionsRequest req = new POSTDescribePendingMaintenanceActionsRequest(POSTDescribePendingMaintenanceActionsActionEnum.DESCRIBE_PENDING_MAINTENANCE_ACTIONS, POSTDescribePendingMaintenanceActionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                marker = "consectetur";
                maxRecords = "recusandae";
                requestBody = "aspernatur".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "a";
                xAmzDate = "libero";
                xAmzSecurityToken = "aut";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "deleniti";
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

## postFailoverDBCluster

<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>

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
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTFailoverDBClusterRequest req = new POSTFailoverDBClusterRequest(POSTFailoverDBClusterActionEnum.FAILOVER_DB_CLUSTER, POSTFailoverDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "inventore";
                xAmzDate = "non";
                xAmzSecurityToken = "et";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "laborum";
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

## postListTagsForResource

Lists all tags on an Amazon DocumentDB resource.

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
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nobis";
                xAmzDate = "quas";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "voluptas";
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

## postModifyDBCluster

Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterRequest req = new POSTModifyDBClusterRequest(POSTModifyDBClusterActionEnum.MODIFY_DB_CLUSTER, POSTModifyDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "explicabo";
                xAmzDate = "provident";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "magnam";
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

## postModifyDBClusterParameterGroup

<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>

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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterParameterGroupRequest req = new POSTModifyDBClusterParameterGroupRequest(POSTModifyDBClusterParameterGroupActionEnum.MODIFY_DB_CLUSTER_PARAMETER_GROUP, POSTModifyDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "esse";
                xAmzCredential = "rem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "fugiat";
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

<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>

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
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBClusterSnapshotAttributeRequest req = new POSTModifyDBClusterSnapshotAttributeRequest(POSTModifyDBClusterSnapshotAttributeActionEnum.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE, POSTModifyDBClusterSnapshotAttributeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "eos";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
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

Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
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

## postModifyDBSubnetGroup

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

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
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
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

Modifies an existing Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
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

<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyGlobalClusterRequest req = new POSTModifyGlobalClusterRequest(POSTModifyGlobalClusterActionEnum.MODIFY_GLOBAL_CLUSTER, POSTModifyGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "commodi";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "deserunt";
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

## postRebootDBInstance

<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>

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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "accusantium".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quas";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "fugit";
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

## postRemoveFromGlobalCluster

<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>

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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveFromGlobalClusterRequest req = new POSTRemoveFromGlobalClusterRequest(POSTRemoveFromGlobalClusterActionEnum.REMOVE_FROM_GLOBAL_CLUSTER, POSTRemoveFromGlobalClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "atque";
                xAmzCredential = "explicabo";
                xAmzDate = "minima";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "sapiente";
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

## postRemoveSourceIdentifierFromSubscription

Removes a source identifier from an existing Amazon DocumentDB event notification subscription.

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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "ratione".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
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

Removes metadata tags from an Amazon DocumentDB resource.

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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quod";
                xAmzCredential = "nam";
                xAmzDate = "vero";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
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

<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>

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
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBClusterParameterGroupRequest req = new POSTResetDBClusterParameterGroupRequest(POSTResetDBClusterParameterGroupActionEnum.RESET_DB_CLUSTER_PARAMETER_GROUP, POSTResetDBClusterParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "harum".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "occaecati";
                xAmzDate = "minima";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sit";
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

## postRestoreDBClusterFromSnapshot

<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBClusterFromSnapshotVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBClusterFromSnapshotMessage;
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

            POSTRestoreDBClusterFromSnapshotRequest req = new POSTRestoreDBClusterFromSnapshotRequest(POSTRestoreDBClusterFromSnapshotActionEnum.RESTORE_DB_CLUSTER_FROM_SNAPSHOT, POSTRestoreDBClusterFromSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "tempore".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "consequuntur";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "sapiente";
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

Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 

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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBClusterToPointInTimeRequest req = new POSTRestoreDBClusterToPointInTimeRequest(POSTRestoreDBClusterToPointInTimeActionEnum.RESTORE_DB_CLUSTER_TO_POINT_IN_TIME, POSTRestoreDBClusterToPointInTimeVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "a";
                xAmzDate = "nulla";
                xAmzSecurityToken = "quas";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quasi";
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

## postStartDBCluster

Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartDBClusterRequest req = new POSTStartDBClusterRequest(POSTStartDBClusterActionEnum.START_DB_CLUSTER, POSTStartDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "possimus";
                xAmzDate = "quia";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facere";
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

## postStopDBCluster

Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

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
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopDBClusterRequest req = new POSTStopDBClusterRequest(POSTStopDBClusterActionEnum.STOP_DB_CLUSTER, POSTStopDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
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
