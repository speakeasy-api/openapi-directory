# SDK

## Overview

<fullname>Database Migration Service</fullname> <p>Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a> in the <i>Database Migration Service User Guide.</i> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dms/>
### Available Operations

* [addTagsToResource](#addtagstoresource) - Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [applyPendingMaintenanceAction](#applypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a replication instance).
* [batchStartRecommendations](#batchstartrecommendations) - <p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
* [cancelReplicationTaskAssessmentRun](#cancelreplicationtaskassessmentrun) - <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
* [createEndpoint](#createendpoint) - <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [createEventSubscription](#createeventsubscription) - <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
* [createFleetAdvisorCollector](#createfleetadvisorcollector) - Creates a Fleet Advisor collector using the specified parameters.
* [createReplicationInstance](#createreplicationinstance) - <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
* [createReplicationSubnetGroup](#createreplicationsubnetgroup) - <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
* [createReplicationTask](#createreplicationtask) - Creates a replication task using the specified parameters.
* [deleteCertificate](#deletecertificate) - Deletes the specified certificate. 
* [deleteConnection](#deleteconnection) - Deletes the connection between a replication instance and an endpoint.
* [deleteEndpoint](#deleteendpoint) - <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
* [deleteEventSubscription](#deleteeventsubscription) -  Deletes an DMS event subscription. 
* [deleteFleetAdvisorCollector](#deletefleetadvisorcollector) - Deletes the specified Fleet Advisor collector.
* [deleteFleetAdvisorDatabases](#deletefleetadvisordatabases) - Deletes the specified Fleet Advisor collector databases.
* [deleteReplicationInstance](#deletereplicationinstance) - <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
* [deleteReplicationSubnetGroup](#deletereplicationsubnetgroup) - Deletes a subnet group.
* [deleteReplicationTask](#deletereplicationtask) - Deletes the specified replication task.
* [deleteReplicationTaskAssessmentRun](#deletereplicationtaskassessmentrun) - <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
* [describeAccountAttributes](#describeaccountattributes) - <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
* [describeApplicableIndividualAssessments](#describeapplicableindividualassessments) - <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
* [describeCertificates](#describecertificates) - Provides a description of the certificate.
* [describeConnections](#describeconnections) - Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
* [describeEndpointSettings](#describeendpointsettings) - Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
* [describeEndpointTypes](#describeendpointtypes) - Returns information about the type of endpoints available.
* [describeEndpoints](#describeendpoints) - Returns information about the endpoints for your account in the current region.
* [describeEventCategories](#describeeventcategories) - Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [describeEventSubscriptions](#describeeventsubscriptions) - <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
* [describeEvents](#describeevents) -  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [describeFleetAdvisorCollectors](#describefleetadvisorcollectors) - Returns a list of the Fleet Advisor collectors in your account.
* [describeFleetAdvisorDatabases](#describefleetadvisordatabases) - Returns a list of Fleet Advisor databases in your account.
* [describeFleetAdvisorLsaAnalysis](#describefleetadvisorlsaanalysis) - Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 
* [describeFleetAdvisorSchemaObjectSummary](#describefleetadvisorschemaobjectsummary) - Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
* [describeFleetAdvisorSchemas](#describefleetadvisorschemas) - Returns a list of schemas detected by Fleet Advisor Collectors in your account.
* [describeOrderableReplicationInstances](#describeorderablereplicationinstances) - Returns information about the replication instance types that can be created in the specified region.
* [describePendingMaintenanceActions](#describependingmaintenanceactions) - For internal use only
* [describeRecommendationLimitations](#describerecommendationlimitations) - Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
* [describeRecommendations](#describerecommendations) - Returns a paginated list of target engine recommendations for your source databases.
* [describeRefreshSchemasStatus](#describerefreshschemasstatus) - Returns the status of the RefreshSchemas operation.
* [describeReplicationInstanceTaskLogs](#describereplicationinstancetasklogs) - Returns information about the task logs for the specified task.
* [describeReplicationInstances](#describereplicationinstances) - Returns information about replication instances for your account in the current region.
* [describeReplicationSubnetGroups](#describereplicationsubnetgroups) - Returns information about the replication subnet groups.
* [describeReplicationTaskAssessmentResults](#describereplicationtaskassessmentresults) - <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [describeReplicationTaskAssessmentRuns](#describereplicationtaskassessmentruns) - <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
* [describeReplicationTaskIndividualAssessments](#describereplicationtaskindividualassessments) - <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
* [describeReplicationTasks](#describereplicationtasks) - Returns information about replication tasks for your account in the current region.
* [describeSchemas](#describeschemas) - <p>Returns information about the schema for the specified endpoint.</p> <p/>
* [describeTableStatistics](#describetablestatistics) - <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
* [importCertificate](#importcertificate) - Uploads the specified certificate.
* [listTagsForResource](#listtagsforresource) - Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [modifyEndpoint](#modifyendpoint) - <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [modifyEventSubscription](#modifyeventsubscription) - Modifies an existing DMS event notification subscription. 
* [modifyReplicationInstance](#modifyreplicationinstance) - <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
* [modifyReplicationSubnetGroup](#modifyreplicationsubnetgroup) - Modifies the settings for the specified replication subnet group.
* [modifyReplicationTask](#modifyreplicationtask) - <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
* [moveReplicationTask](#movereplicationtask) - Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
* [rebootReplicationInstance](#rebootreplicationinstance) - Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
* [refreshSchemas](#refreshschemas) - Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
* [reloadTables](#reloadtables) - <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
* [removeTagsFromResource](#removetagsfromresource) - Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [runFleetAdvisorLsaAnalysis](#runfleetadvisorlsaanalysis) - Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
* [startRecommendations](#startrecommendations) - <p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>
* [startReplicationTask](#startreplicationtask) - <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
* [startReplicationTaskAssessment](#startreplicationtaskassessment) - <p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [startReplicationTaskAssessmentRun](#startreplicationtaskassessmentrun) - <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
* [stopReplicationTask](#stopreplicationtask) - Stops the replication task.
* [testConnection](#testconnection) - Tests the connection between the replication instance and the endpoint.
* [updateSubscriptionsToEventBridge](#updatesubscriptionstoeventbridge) - <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

## addTagsToResource

Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToResourceRequest req = new AddTagsToResourceRequest(                new AddTagsToResourceMessage("minus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "voluptatum";
                                                    resourceArn = "iusto";
                                                    value = "excepturi";
                                                }}),
                                                add(new Tag() {{
                                                    key = "nisi";
                                                    resourceArn = "recusandae";
                                                    value = "temporibus";
                                                }}),
                                                add(new Tag() {{
                                                    key = "ab";
                                                    resourceArn = "quis";
                                                    value = "veritatis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "deserunt";
                                                    resourceArn = "perferendis";
                                                    value = "ipsam";
                                                }}),
                                            }});, AddTagsToResourceXAmzTargetEnum.AMAZON_DM_SV20160101_ADD_TAGS_TO_RESOURCE) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            AddTagsToResourceResponse res = sdk.sdk.addTagsToResource(req);

            if (res.addTagsToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a replication instance).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplyPendingMaintenanceActionRequest;
import org.openapis.openapi.models.operations.ApplyPendingMaintenanceActionResponse;
import org.openapis.openapi.models.operations.ApplyPendingMaintenanceActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplyPendingMaintenanceActionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApplyPendingMaintenanceActionRequest req = new ApplyPendingMaintenanceActionRequest(                new ApplyPendingMaintenanceActionMessage("quod", "quod", "esse");, ApplyPendingMaintenanceActionXAmzTargetEnum.AMAZON_DM_SV20160101_APPLY_PENDING_MAINTENANCE_ACTION) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            ApplyPendingMaintenanceActionResponse res = sdk.sdk.applyPendingMaintenanceAction(req);

            if (res.applyPendingMaintenanceActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchStartRecommendations

<p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchStartRecommendationsRequest;
import org.openapis.openapi.models.operations.BatchStartRecommendationsResponse;
import org.openapis.openapi.models.operations.BatchStartRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchStartRecommendationsRequest;
import org.openapis.openapi.models.shared.RecommendationSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRecommendationsRequestEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchStartRecommendationsRequest req = new BatchStartRecommendationsRequest(                new BatchStartRecommendationsRequest() {{
                                data = new org.openapis.openapi.models.shared.StartRecommendationsRequestEntry[]{{
                                    add(new StartRecommendationsRequestEntry("molestiae",                 new RecommendationSettings("modi", "qui");) {{
                                        databaseId = "hic";
                                        settings = new RecommendationSettings("beatae", "commodi") {{
                                            instanceSizingType = "optio";
                                            workloadType = "totam";
                                        }};
                                    }}),
                                    add(new StartRecommendationsRequestEntry("aspernatur",                 new RecommendationSettings("perferendis", "ad");) {{
                                        databaseId = "impedit";
                                        settings = new RecommendationSettings("ipsum", "excepturi") {{
                                            instanceSizingType = "cum";
                                            workloadType = "esse";
                                        }};
                                    }}),
                                    add(new StartRecommendationsRequestEntry("laboriosam",                 new RecommendationSettings("hic", "saepe");) {{
                                        databaseId = "natus";
                                        settings = new RecommendationSettings("dolor", "natus") {{
                                            instanceSizingType = "sed";
                                            workloadType = "iste";
                                        }};
                                    }}),
                                }};
                            }};, BatchStartRecommendationsXAmzTargetEnum.AMAZON_DM_SV20160101_BATCH_START_RECOMMENDATIONS) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            BatchStartRecommendationsResponse res = sdk.sdk.batchStartRecommendations(req);

            if (res.batchStartRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelReplicationTaskAssessmentRun

<p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelReplicationTaskAssessmentRunRequest;
import org.openapis.openapi.models.operations.CancelReplicationTaskAssessmentRunResponse;
import org.openapis.openapi.models.operations.CancelReplicationTaskAssessmentRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelReplicationTaskAssessmentRunMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelReplicationTaskAssessmentRunRequest req = new CancelReplicationTaskAssessmentRunRequest(                new CancelReplicationTaskAssessmentRunMessage("ipsa");, CancelReplicationTaskAssessmentRunXAmzTargetEnum.AMAZON_DM_SV20160101_CANCEL_REPLICATION_TASK_ASSESSMENT_RUN) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            CancelReplicationTaskAssessmentRunResponse res = sdk.sdk.cancelReplicationTaskAssessmentRun(req);

            if (res.cancelReplicationTaskAssessmentRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndpoint

<p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndpointRequest;
import org.openapis.openapi.models.operations.CreateEndpointResponse;
import org.openapis.openapi.models.operations.CreateEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthMechanismValueEnum;
import org.openapis.openapi.models.shared.AuthTypeValueEnum;
import org.openapis.openapi.models.shared.CannedAclForObjectsValueEnum;
import org.openapis.openapi.models.shared.CharLengthSemanticsEnum;
import org.openapis.openapi.models.shared.CompressionTypeValueEnum;
import org.openapis.openapi.models.shared.CreateEndpointMessage;
import org.openapis.openapi.models.shared.DataFormatValueEnum;
import org.openapis.openapi.models.shared.DatePartitionDelimiterValueEnum;
import org.openapis.openapi.models.shared.DatePartitionSequenceValueEnum;
import org.openapis.openapi.models.shared.DmsSslModeValueEnum;
import org.openapis.openapi.models.shared.DmsTransferSettings;
import org.openapis.openapi.models.shared.DocDbSettings;
import org.openapis.openapi.models.shared.DynamoDbSettings;
import org.openapis.openapi.models.shared.ElasticsearchSettings;
import org.openapis.openapi.models.shared.EncodingTypeValueEnum;
import org.openapis.openapi.models.shared.EncryptionModeValueEnum;
import org.openapis.openapi.models.shared.GcpMySQLSettings;
import org.openapis.openapi.models.shared.IBMDb2Settings;
import org.openapis.openapi.models.shared.KafkaSaslMechanismEnum;
import org.openapis.openapi.models.shared.KafkaSecurityProtocolEnum;
import org.openapis.openapi.models.shared.KafkaSettings;
import org.openapis.openapi.models.shared.KinesisSettings;
import org.openapis.openapi.models.shared.MessageFormatValueEnum;
import org.openapis.openapi.models.shared.MicrosoftSQLServerSettings;
import org.openapis.openapi.models.shared.MongoDbSettings;
import org.openapis.openapi.models.shared.MySQLSettings;
import org.openapis.openapi.models.shared.NeptuneSettings;
import org.openapis.openapi.models.shared.NestingLevelValueEnum;
import org.openapis.openapi.models.shared.OracleSettings;
import org.openapis.openapi.models.shared.ParquetVersionValueEnum;
import org.openapis.openapi.models.shared.PluginNameValueEnum;
import org.openapis.openapi.models.shared.PostgreSQLSettings;
import org.openapis.openapi.models.shared.RedisAuthTypeValueEnum;
import org.openapis.openapi.models.shared.RedisSettings;
import org.openapis.openapi.models.shared.RedshiftSettings;
import org.openapis.openapi.models.shared.ReplicationEndpointTypeValueEnum;
import org.openapis.openapi.models.shared.S3Settings;
import org.openapis.openapi.models.shared.SafeguardPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SslSecurityProtocolValueEnum;
import org.openapis.openapi.models.shared.SybaseSettings;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetDbTypeEnum;
import org.openapis.openapi.models.shared.TlogAccessModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEndpointRequest req = new CreateEndpointRequest(                new CreateEndpointMessage("nobis", ReplicationEndpointTypeValueEnum.SOURCE, "omnis") {{
                                certificateArn = "nemo";
                                databaseName = "minima";
                                dmsTransferSettings = new DmsTransferSettings() {{
                                    bucketName = "excepturi";
                                    serviceAccessRoleArn = "accusantium";
                                }};;
                                docDbSettings = new DocDbSettings() {{
                                    databaseName = "iure";
                                    docsToInvestigate = 634274L;
                                    extractDocId = false;
                                    kmsKeyId = "doloribus";
                                    nestingLevel = NestingLevelValueEnum.ONE;
                                    password = "architecto";
                                    port = 652790L;
                                    secretsManagerAccessRoleArn = "dolorem";
                                    secretsManagerSecretId = "culpa";
                                    serverName = "consequuntur";
                                    username = "Zechariah.OHara";
                                }};;
                                dynamoDbSettings = new DynamoDbSettings("commodi");;
                                elasticsearchSettings = new ElasticsearchSettings("quam", "molestiae") {{
                                    errorRetryDuration = 244425L;
                                    fullLoadErrorPercentage = 623510L;
                                    useNewMappingType = false;
                                }};;
                                externalTableDefinition = "quia";
                                extraConnectionAttributes = "quis";
                                gcpMySQLSettings = new GcpMySQLSettings() {{
                                    afterConnectScript = "vitae";
                                    cleanSourceMetadataOnMismatch = false;
                                    databaseName = "laborum";
                                    eventsPollInterval = 656330L;
                                    maxFileSize = 317202L;
                                    parallelLoadThreads = 138183L;
                                    password = "quo";
                                    port = 196582L;
                                    secretsManagerAccessRoleArn = "tenetur";
                                    secretsManagerSecretId = "ipsam";
                                    serverName = "id";
                                    serverTimezone = "possimus";
                                    targetDbType = TargetDbTypeEnum.SPECIFIC_DATABASE;
                                    username = "Avery_Mueller9";
                                }};;
                                ibmDb2Settings = new IBMDb2Settings() {{
                                    currentLsn = "reiciendis";
                                    databaseName = "voluptatibus";
                                    maxKBytesPerRead = 878194L;
                                    password = "nihil";
                                    port = 509624L;
                                    secretsManagerAccessRoleArn = "voluptatibus";
                                    secretsManagerSecretId = "ipsa";
                                    serverName = "omnis";
                                    setDataCaptureChanges = false;
                                    username = "Ivah3";
                                }};;
                                kafkaSettings = new KafkaSettings() {{
                                    broker = "reprehenderit";
                                    includeControlDetails = false;
                                    includeNullAndEmpty = false;
                                    includePartitionValue = false;
                                    includeTableAlterOperations = false;
                                    includeTransactionDetails = false;
                                    messageFormat = MessageFormatValueEnum.JSON;
                                    messageMaxBytes = 979587L;
                                    noHexPrefix = false;
                                    partitionIncludeSchemaTable = false;
                                    saslMechanism = KafkaSaslMechanismEnum.SCRAM_SHA512;
                                    saslPassword = "corporis";
                                    saslUsername = "dolore";
                                    securityProtocol = KafkaSecurityProtocolEnum.SSL_AUTHENTICATION;
                                    sslCaCertificateArn = "dicta";
                                    sslClientCertificateArn = "harum";
                                    sslClientKeyArn = "enim";
                                    sslClientKeyPassword = "accusamus";
                                    topic = "commodi";
                                }};;
                                kinesisSettings = new KinesisSettings() {{
                                    includeControlDetails = false;
                                    includeNullAndEmpty = false;
                                    includePartitionValue = false;
                                    includeTableAlterOperations = false;
                                    includeTransactionDetails = false;
                                    messageFormat = MessageFormatValueEnum.JSON_UNFORMATTED;
                                    noHexPrefix = false;
                                    partitionIncludeSchemaTable = false;
                                    serviceAccessRoleArn = "quae";
                                    streamArn = "ipsum";
                                }};;
                                kmsKeyId = "quidem";
                                microsoftSQLServerSettings = new MicrosoftSQLServerSettings() {{
                                    bcpPacketSize = 565189L;
                                    controlTablesFileGroup = "excepturi";
                                    databaseName = "pariatur";
                                    forceLobLookup = false;
                                    password = "modi";
                                    port = 508969L;
                                    querySingleAlwaysOnNode = false;
                                    readBackupOnly = false;
                                    safeguardPolicy = SafeguardPolicyEnum.EXCLUSIVE_AUTOMATIC_TRUNCATION;
                                    secretsManagerAccessRoleArn = "voluptates";
                                    secretsManagerSecretId = "quasi";
                                    serverName = "repudiandae";
                                    tlogAccessMode = TlogAccessModeEnum.PREFER_TLOG;
                                    trimSpaceInChar = false;
                                    useBcpFullLoad = false;
                                    useThirdPartyBackupDevice = false;
                                    username = "Arnoldo31";
                                }};;
                                mongoDbSettings = new MongoDbSettings() {{
                                    authMechanism = AuthMechanismValueEnum.DEFAULT_;
                                    authSource = "est";
                                    authType = AuthTypeValueEnum.PASSWORD;
                                    databaseName = "explicabo";
                                    docsToInvestigate = "deserunt";
                                    extractDocId = "distinctio";
                                    kmsKeyId = "quibusdam";
                                    nestingLevel = NestingLevelValueEnum.NONE;
                                    password = "modi";
                                    port = 183191L;
                                    secretsManagerAccessRoleArn = "aliquid";
                                    secretsManagerSecretId = "cupiditate";
                                    serverName = "quos";
                                    username = "Aiyana.Cummerata0";
                                }};;
                                mySQLSettings = new MySQLSettings() {{
                                    afterConnectScript = "fugit";
                                    cleanSourceMetadataOnMismatch = false;
                                    databaseName = "dolorum";
                                    eventsPollInterval = 569618L;
                                    maxFileSize = 270008L;
                                    parallelLoadThreads = 703737L;
                                    password = "tempore";
                                    port = 288476L;
                                    secretsManagerAccessRoleArn = "delectus";
                                    secretsManagerSecretId = "eum";
                                    serverName = "non";
                                    serverTimezone = "eligendi";
                                    targetDbType = TargetDbTypeEnum.MULTIPLE_DATABASES;
                                    username = "Grace_Medhurst63";
                                }};;
                                neptuneSettings = new NeptuneSettings("dolor", "debitis") {{
                                    errorRetryDuration = 952749L;
                                    iamAuthEnabled = false;
                                    maxFileSize = 680056L;
                                    maxRetryCount = 447125L;
                                    serviceAccessRoleArn = "in";
                                }};;
                                oracleSettings = new OracleSettings() {{
                                    accessAlternateDirectly = false;
                                    addSupplementalLogging = false;
                                    additionalArchivedLogDestId = 846409L;
                                    allowSelectNestedTables = false;
                                    archivedLogDestId = 978571L;
                                    archivedLogsOnly = false;
                                    asmPassword = "rerum";
                                    asmServer = "dicta";
                                    asmUser = "magnam";
                                    charLengthSemantics = CharLengthSemanticsEnum.BYTE;
                                    convertTimestampWithZoneToUTC = false;
                                    databaseName = "facere";
                                    directPathNoLog = false;
                                    directPathParallelLoad = false;
                                    enableHomogenousTablespace = false;
                                    extraArchivedLogDestIds = new Long[]{{
                                        add(396506L),
                                        add(675439L),
                                    }};
                                    failTasksOnLobTruncation = false;
                                    numberDatatypeScale = 881104L;
                                    oraclePathPrefix = "non";
                                    parallelAsmReadThreads = 581273L;
                                    password = "enim";
                                    port = 881736L;
                                    readAheadBlocks = 965417L;
                                    readTableSpaceName = false;
                                    replacePathPrefix = false;
                                    retryInterval = 692532L;
                                    secretsManagerAccessRoleArn = "provident";
                                    secretsManagerOracleAsmAccessRoleArn = "nam";
                                    secretsManagerOracleAsmSecretId = "id";
                                    secretsManagerSecretId = "blanditiis";
                                    securityDbEncryption = "deleniti";
                                    securityDbEncryptionName = "sapiente";
                                    serverName = "amet";
                                    spatialDataOptionToGeoJsonFunctionName = "deserunt";
                                    standbyDelayTime = 394869L;
                                    trimSpaceInChar = false;
                                    useAlternateFolderForOnline = false;
                                    useBFile = false;
                                    useDirectPathFullLoad = false;
                                    useLogminerReader = false;
                                    usePathPrefix = "vel";
                                    username = "Libby.Moen";
                                }};;
                                password = "nihil";
                                port = 301575L;
                                postgreSQLSettings = new PostgreSQLSettings() {{
                                    afterConnectScript = "distinctio";
                                    captureDdls = false;
                                    databaseName = "id";
                                    ddlArtifactsSchema = "labore";
                                    executeTimeout = 290077L;
                                    failTasksOnLobTruncation = false;
                                    heartbeatEnable = false;
                                    heartbeatFrequency = 383462L;
                                    heartbeatSchema = "natus";
                                    mapBooleanAsBoolean = false;
                                    maxFileSize = 749170L;
                                    password = "eum";
                                    pluginName = PluginNameValueEnum.PGLOGICAL;
                                    port = 135474L;
                                    secretsManagerAccessRoleArn = "architecto";
                                    secretsManagerSecretId = "magnam";
                                    serverName = "et";
                                    slotName = "excepturi";
                                    trimSpaceInChar = false;
                                    username = "Ferne_McLaughlin";
                                }};;
                                redisSettings = new RedisSettings(33625L, "mollitia") {{
                                    authPassword = "reiciendis";
                                    authType = RedisAuthTypeValueEnum.AUTH_ROLE;
                                    authUserName = "ad";
                                    sslCaCertificateArn = "eum";
                                    sslSecurityProtocol = SslSecurityProtocolValueEnum.PLAINTEXT;
                                }};;
                                redshiftSettings = new RedshiftSettings() {{
                                    acceptAnyDate = false;
                                    afterConnectScript = "necessitatibus";
                                    bucketFolder = "odit";
                                    bucketName = "nemo";
                                    caseSensitiveNames = false;
                                    compUpdate = false;
                                    connectionTimeout = 97260L;
                                    databaseName = "iure";
                                    dateFormat = "doloribus";
                                    emptyAsNull = false;
                                    encryptionMode = EncryptionModeValueEnum.SSE_KMS;
                                    explicitIds = false;
                                    fileTransferUploadStreams = 260341L;
                                    loadTimeout = 806194L;
                                    mapBooleanAsBoolean = false;
                                    maxFileSize = 537023L;
                                    password = "facilis";
                                    port = 447926L;
                                    removeQuotes = false;
                                    replaceChars = "architecto";
                                    replaceInvalidChars = "architecto";
                                    secretsManagerAccessRoleArn = "repudiandae";
                                    secretsManagerSecretId = "ullam";
                                    serverName = "expedita";
                                    serverSideEncryptionKmsKeyId = "nihil";
                                    serviceAccessRoleArn = "repellat";
                                    timeFormat = "quibusdam";
                                    trimBlanks = false;
                                    truncateColumns = false;
                                    username = "Camden.Turner16";
                                    writeBufferSize = 508315L;
                                }};;
                                resourceIdentifier = "natus";
                                s3Settings = new S3Settings() {{
                                    addColumnName = false;
                                    addTrailingPaddingCharacter = false;
                                    bucketFolder = "magni";
                                    bucketName = "sunt";
                                    cannedAclForObjects = CannedAclForObjectsValueEnum.BUCKET_OWNER_READ;
                                    cdcInsertsAndUpdates = false;
                                    cdcInsertsOnly = false;
                                    cdcMaxBatchInterval = 848009L;
                                    cdcMinFileSize = 864934L;
                                    cdcPath = "maxime";
                                    compressionType = CompressionTypeValueEnum.NONE;
                                    csvDelimiter = "excepturi";
                                    csvNoSupValue = "odit";
                                    csvNullValue = "ea";
                                    csvRowDelimiter = "accusantium";
                                    dataFormat = DataFormatValueEnum.CSV;
                                    dataPageSize = 982575L;
                                    datePartitionDelimiter = DatePartitionDelimiterValueEnum.DASH;
                                    datePartitionEnabled = false;
                                    datePartitionSequence = DatePartitionSequenceValueEnum.YYYYMMDDHH;
                                    datePartitionTimezone = "voluptate";
                                    dictPageSizeLimit = 420075L;
                                    enableStatistics = false;
                                    encodingType = EncodingTypeValueEnum.RLE_DICTIONARY;
                                    encryptionMode = EncryptionModeValueEnum.SSE_S3;
                                    expectedBucketOwner = "pariatur";
                                    externalTableDefinition = "nemo";
                                    glueCatalogGeneration = false;
                                    ignoreHeaderRows = 975522L;
                                    includeOpForFullLoad = false;
                                    maxFileSize = 16627L;
                                    parquetTimestampInMillisecond = false;
                                    parquetVersion = ParquetVersionValueEnum.PARQUET20;
                                    preserveTransactions = false;
                                    rfc4180 = false;
                                    rowGroupLength = 230742L;
                                    serverSideEncryptionKmsKeyId = "aut";
                                    serviceAccessRoleArn = "cumque";
                                    timestampColumnName = "corporis";
                                    useCsvNoSupValue = false;
                                    useTaskStartTimeForFullLoadTimestamp = false;
                                }};;
                                serverName = "hic";
                                serviceAccessRoleArn = "libero";
                                sslMode = DmsSslModeValueEnum.VERIFY_CA;
                                sybaseSettings = new SybaseSettings() {{
                                    databaseName = "dolores";
                                    password = "quis";
                                    port = 521037L;
                                    secretsManagerAccessRoleArn = "dignissimos";
                                    secretsManagerSecretId = "eaque";
                                    serverName = "quis";
                                    username = "Cody17";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quam";
                                        resourceArn = "dolor";
                                        value = "vero";
                                    }}),
                                    add(new Tag() {{
                                        key = "nostrum";
                                        resourceArn = "hic";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag() {{
                                        key = "omnis";
                                        resourceArn = "facilis";
                                        value = "perspiciatis";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptatem";
                                        resourceArn = "porro";
                                        value = "consequuntur";
                                    }}),
                                }};
                                username = "Jett57";
                            }};, CreateEndpointXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_ENDPOINT) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateEndpointResponse res = sdk.sdk.createEndpoint(req);

            if (res.createEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventSubscription

<p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateEventSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateEventSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventSubscriptionRequest req = new CreateEventSubscriptionRequest(                new CreateEventSubscriptionMessage("pariatur", "provident") {{
                                enabled = false;
                                eventCategories = new String[]{{
                                    add("libero"),
                                    add("delectus"),
                                    add("quaerat"),
                                    add("quos"),
                                }};
                                sourceIds = new String[]{{
                                    add("dolorem"),
                                    add("dolorem"),
                                }};
                                sourceType = "dolor";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsum";
                                        resourceArn = "hic";
                                        value = "excepturi";
                                    }}),
                                }};
                            }};, CreateEventSubscriptionXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_EVENT_SUBSCRIPTION) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            CreateEventSubscriptionResponse res = sdk.sdk.createEventSubscription(req);

            if (res.createEventSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFleetAdvisorCollector

Creates a Fleet Advisor collector using the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetAdvisorCollectorRequest;
import org.openapis.openapi.models.operations.CreateFleetAdvisorCollectorResponse;
import org.openapis.openapi.models.operations.CreateFleetAdvisorCollectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFleetAdvisorCollectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetAdvisorCollectorRequest req = new CreateFleetAdvisorCollectorRequest(                new CreateFleetAdvisorCollectorRequest("ipsa", "ipsa", "iure") {{
                                description = "odio";
                            }};, CreateFleetAdvisorCollectorXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_FLEET_ADVISOR_COLLECTOR) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            CreateFleetAdvisorCollectorResponse res = sdk.sdk.createFleetAdvisorCollector(req);

            if (res.createFleetAdvisorCollectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationInstance

<p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationInstanceRequest;
import org.openapis.openapi.models.operations.CreateReplicationInstanceResponse;
import org.openapis.openapi.models.operations.CreateReplicationInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReplicationInstanceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationInstanceRequest req = new CreateReplicationInstanceRequest(                new CreateReplicationInstanceMessage("sit", "fugiat") {{
                                allocatedStorage = 67249L;
                                autoMinorVersionUpgrade = false;
                                availabilityZone = "soluta";
                                dnsNameServers = "dolorum";
                                engineVersion = "iusto";
                                kmsKeyId = "voluptate";
                                multiAZ = false;
                                networkType = "dolorum";
                                preferredMaintenanceWindow = "deleniti";
                                publiclyAccessible = false;
                                replicationSubnetGroupIdentifier = "omnis";
                                resourceIdentifier = "necessitatibus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "asperiores";
                                        resourceArn = "nihil";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag() {{
                                        key = "voluptate";
                                        resourceArn = "id";
                                        value = "saepe";
                                    }}),
                                    add(new Tag() {{
                                        key = "eius";
                                        resourceArn = "aspernatur";
                                        value = "perferendis";
                                    }}),
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("optio"),
                                }};
                            }};, CreateReplicationInstanceXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_REPLICATION_INSTANCE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            CreateReplicationInstanceResponse res = sdk.sdk.createReplicationInstance(req);

            if (res.createReplicationInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationSubnetGroup

<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationSubnetGroupRequest;
import org.openapis.openapi.models.operations.CreateReplicationSubnetGroupResponse;
import org.openapis.openapi.models.operations.CreateReplicationSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReplicationSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationSubnetGroupRequest req = new CreateReplicationSubnetGroupRequest(                new CreateReplicationSubnetGroupMessage("totam", "similique",                 new String[]{{
                                                add("at"),
                                            }}) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "tempora";
                                        resourceArn = "vel";
                                        value = "quod";
                                    }}),
                                    add(new Tag() {{
                                        key = "officiis";
                                        resourceArn = "qui";
                                        value = "dolorum";
                                    }}),
                                }};
                            }};, CreateReplicationSubnetGroupXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_REPLICATION_SUBNET_GROUP) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            CreateReplicationSubnetGroupResponse res = sdk.sdk.createReplicationSubnetGroup(req);

            if (res.createReplicationSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationTask

Creates a replication task using the specified parameters.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationTaskRequest;
import org.openapis.openapi.models.operations.CreateReplicationTaskResponse;
import org.openapis.openapi.models.operations.CreateReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReplicationTaskMessage;
import org.openapis.openapi.models.shared.MigrationTypeValueEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationTaskRequest req = new CreateReplicationTaskRequest(                new CreateReplicationTaskMessage(MigrationTypeValueEnum.FULL_LOAD_AND_CDC, "accusamus", "numquam", "enim", "dolorem", "sapiente") {{
                                cdcStartPosition = "totam";
                                cdcStartTime = OffsetDateTime.parse("2022-12-22T15:11:39.695Z");
                                cdcStopPosition = "expedita";
                                replicationTaskSettings = "neque";
                                resourceIdentifier = "sed";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "libero";
                                        resourceArn = "voluptas";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag() {{
                                        key = "quam";
                                        resourceArn = "ipsum";
                                        value = "incidunt";
                                    }}),
                                }};
                                taskData = "qui";
                            }};, CreateReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_CREATE_REPLICATION_TASK) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
            }};            

            CreateReplicationTaskResponse res = sdk.sdk.createReplicationTask(req);

            if (res.createReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCertificate

Deletes the specified certificate. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateRequest;
import org.openapis.openapi.models.operations.DeleteCertificateResponse;
import org.openapis.openapi.models.operations.DeleteCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCertificateMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCertificateRequest req = new DeleteCertificateRequest(                new DeleteCertificateMessage("aspernatur");, DeleteCertificateXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_CERTIFICATE) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            DeleteCertificateResponse res = sdk.sdk.deleteCertificate(req);

            if (res.deleteCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnection

Deletes the connection between a replication instance and an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest(                new DeleteConnectionMessage("neque", "fugit");, DeleteConnectionXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_CONNECTION) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DeleteConnectionResponse res = sdk.sdk.deleteConnection(req);

            if (res.deleteConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEndpoint

<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndpointRequest;
import org.openapis.openapi.models.operations.DeleteEndpointResponse;
import org.openapis.openapi.models.operations.DeleteEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEndpointMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEndpointRequest req = new DeleteEndpointRequest(                new DeleteEndpointMessage("soluta");, DeleteEndpointXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_ENDPOINT) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteEndpointResponse res = sdk.sdk.deleteEndpoint(req);

            if (res.deleteEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventSubscription

 Deletes an DMS event subscription. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteEventSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventSubscriptionRequest req = new DeleteEventSubscriptionRequest(                new DeleteEventSubscriptionMessage("cupiditate");, DeleteEventSubscriptionXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_EVENT_SUBSCRIPTION) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteEventSubscriptionResponse res = sdk.sdk.deleteEventSubscription(req);

            if (res.deleteEventSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFleetAdvisorCollector

Deletes the specified Fleet Advisor collector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorCollectorRequest;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorCollectorResponse;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorCollectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCollectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetAdvisorCollectorRequest req = new DeleteFleetAdvisorCollectorRequest(                new DeleteCollectorRequest("quae");, DeleteFleetAdvisorCollectorXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_FLEET_ADVISOR_COLLECTOR) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteFleetAdvisorCollectorResponse res = sdk.sdk.deleteFleetAdvisorCollector(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFleetAdvisorDatabases

Deletes the specified Fleet Advisor collector databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorDatabasesRequest;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorDatabasesResponse;
import org.openapis.openapi.models.operations.DeleteFleetAdvisorDatabasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFleetAdvisorDatabasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetAdvisorDatabasesRequest req = new DeleteFleetAdvisorDatabasesRequest(                new DeleteFleetAdvisorDatabasesRequest(                new String[]{{
                                                add("facilis"),
                                                add("cupiditate"),
                                            }});, DeleteFleetAdvisorDatabasesXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_FLEET_ADVISOR_DATABASES) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            DeleteFleetAdvisorDatabasesResponse res = sdk.sdk.deleteFleetAdvisorDatabases(req);

            if (res.deleteFleetAdvisorDatabasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationInstance

<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationInstanceRequest;
import org.openapis.openapi.models.operations.DeleteReplicationInstanceResponse;
import org.openapis.openapi.models.operations.DeleteReplicationInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReplicationInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationInstanceRequest req = new DeleteReplicationInstanceRequest(                new DeleteReplicationInstanceMessage("omnis");, DeleteReplicationInstanceXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_REPLICATION_INSTANCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteReplicationInstanceResponse res = sdk.sdk.deleteReplicationInstance(req);

            if (res.deleteReplicationInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationSubnetGroup

Deletes a subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationSubnetGroupRequest;
import org.openapis.openapi.models.operations.DeleteReplicationSubnetGroupResponse;
import org.openapis.openapi.models.operations.DeleteReplicationSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReplicationSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationSubnetGroupRequest req = new DeleteReplicationSubnetGroupRequest(                new DeleteReplicationSubnetGroupMessage("hic");, DeleteReplicationSubnetGroupXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_REPLICATION_SUBNET_GROUP) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quod";
                xAmzCredential = "odio";
                xAmzDate = "similique";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "ducimus";
            }};            

            DeleteReplicationSubnetGroupResponse res = sdk.sdk.deleteReplicationSubnetGroup(req);

            if (res.deleteReplicationSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationTask

Deletes the specified replication task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationTaskRequest;
import org.openapis.openapi.models.operations.DeleteReplicationTaskResponse;
import org.openapis.openapi.models.operations.DeleteReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReplicationTaskMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationTaskRequest req = new DeleteReplicationTaskRequest(                new DeleteReplicationTaskMessage("quibusdam");, DeleteReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_REPLICATION_TASK) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DeleteReplicationTaskResponse res = sdk.sdk.deleteReplicationTask(req);

            if (res.deleteReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationTaskAssessmentRun

<p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationTaskAssessmentRunRequest;
import org.openapis.openapi.models.operations.DeleteReplicationTaskAssessmentRunResponse;
import org.openapis.openapi.models.operations.DeleteReplicationTaskAssessmentRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReplicationTaskAssessmentRunMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationTaskAssessmentRunRequest req = new DeleteReplicationTaskAssessmentRunRequest(                new DeleteReplicationTaskAssessmentRunMessage("fugit");, DeleteReplicationTaskAssessmentRunXAmzTargetEnum.AMAZON_DM_SV20160101_DELETE_REPLICATION_TASK_ASSESSMENT_RUN) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "doloribus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "alias";
            }};            

            DeleteReplicationTaskAssessmentRunResponse res = sdk.sdk.deleteReplicationTaskAssessmentRun(req);

            if (res.deleteReplicationTaskAssessmentRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountAttributes

<p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.DescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.DescribeAccountAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountAttributesRequest req = new DescribeAccountAttributesRequest(                new java.util.HashMap<String, Object>() {{
                                put("ipsam", "ea");
                                put("aspernatur", "vel");
                            }}, DescribeAccountAttributesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_ACCOUNT_ATTRIBUTES) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeAccountAttributesResponse res = sdk.sdk.describeAccountAttributes(req);

            if (res.describeAccountAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplicableIndividualAssessments

<p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicableIndividualAssessmentsRequest;
import org.openapis.openapi.models.operations.DescribeApplicableIndividualAssessmentsResponse;
import org.openapis.openapi.models.operations.DescribeApplicableIndividualAssessmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicableIndividualAssessmentsMessage;
import org.openapis.openapi.models.shared.MigrationTypeValueEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicableIndividualAssessmentsRequest req = new DescribeApplicableIndividualAssessmentsRequest(                new DescribeApplicableIndividualAssessmentsMessage() {{
                                marker = "quasi";
                                maxRecords = 406120L;
                                migrationType = MigrationTypeValueEnum.FULL_LOAD_AND_CDC;
                                replicationInstanceArn = "excepturi";
                                replicationTaskArn = "voluptatibus";
                                sourceEngineName = "nostrum";
                                targetEngineName = "sapiente";
                            }};, DescribeApplicableIndividualAssessmentsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS) {{
                marker = "quisquam";
                maxRecords = "saepe";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "corporis";
                xAmzDate = "veniam";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeApplicableIndividualAssessmentsResponse res = sdk.sdk.describeApplicableIndividualAssessments(req);

            if (res.describeApplicableIndividualAssessmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificates

Provides a description of the certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificatesRequest;
import org.openapis.openapi.models.operations.DescribeCertificatesResponse;
import org.openapis.openapi.models.operations.DescribeCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificatesMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificatesRequest req = new DescribeCertificatesRequest(                new DescribeCertificatesMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("impedit",                 new String[]{{
                                                        add("fugit"),
                                                        add("accusamus"),
                                                    }}) {{
                                        name = "Kate Cole DVM";
                                        values = new String[]{{
                                            add("aut"),
                                            add("aut"),
                                            add("deleniti"),
                                        }};
                                    }}),
                                    add(new Filter("quas",                 new String[]{{
                                                        add("nulla"),
                                                        add("voluptas"),
                                                        add("libero"),
                                                        add("quasi"),
                                                    }}) {{
                                        name = "Ellen Borer";
                                        values = new String[]{{
                                            add("velit"),
                                            add("eum"),
                                            add("autem"),
                                            add("nobis"),
                                        }};
                                    }}),
                                    add(new Filter("esse",                 new String[]{{
                                                        add("rem"),
                                                        add("fuga"),
                                                    }}) {{
                                        name = "Carrie Cole IV";
                                        values = new String[]{{
                                            add("odio"),
                                            add("eius"),
                                        }};
                                    }}),
                                    add(new Filter("praesentium",                 new String[]{{
                                                        add("veritatis"),
                                                        add("ipsa"),
                                                        add("id"),
                                                        add("quidem"),
                                                    }}) {{
                                        name = "Yvette Stehr";
                                        values = new String[]{{
                                            add("assumenda"),
                                            add("eos"),
                                        }};
                                    }}),
                                }};
                                marker = "neque";
                                maxRecords = 778696L;
                            }};, DescribeCertificatesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_CERTIFICATES) {{
                marker = "illum";
                maxRecords = "quo";
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "eius";
                xAmzCredential = "eos";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "ab";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "consequatur";
            }};            

            DescribeCertificatesResponse res = sdk.sdk.describeCertificates(req);

            if (res.describeCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnections

Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionsRequest;
import org.openapis.openapi.models.operations.DescribeConnectionsResponse;
import org.openapis.openapi.models.operations.DescribeConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionsRequest req = new DescribeConnectionsRequest(                new DescribeConnectionsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("inventore",                 new String[]{{
                                                        add("totam"),
                                                        add("accusamus"),
                                                    }}) {{
                                        name = "Kelly Donnelly";
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("distinctio"),
                                            add("quod"),
                                            add("dignissimos"),
                                        }};
                                    }}),
                                    add(new Filter("molestiae",                 new String[]{{
                                                        add("porro"),
                                                    }}) {{
                                        name = "Courtney Mayert";
                                        values = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new Filter("mollitia",                 new String[]{{
                                                        add("atque"),
                                                        add("explicabo"),
                                                    }}) {{
                                        name = "Dianne Langosh";
                                        values = new String[]{{
                                            add("fuga"),
                                        }};
                                    }}),
                                    add(new Filter("saepe",                 new String[]{{
                                                        add("atque"),
                                                        add("et"),
                                                        add("esse"),
                                                    }}) {{
                                        name = "Sue Corkery";
                                        values = new String[]{{
                                            add("explicabo"),
                                        }};
                                    }}),
                                }};
                                marker = "eveniet";
                                maxRecords = 882042L;
                            }};, DescribeConnectionsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_CONNECTIONS) {{
                marker = "veritatis";
                maxRecords = "esse";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeConnectionsResponse res = sdk.sdk.describeConnections(req);

            if (res.describeConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpointSettings

Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointSettingsRequest;
import org.openapis.openapi.models.operations.DescribeEndpointSettingsResponse;
import org.openapis.openapi.models.operations.DescribeEndpointSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointSettingsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointSettingsRequest req = new DescribeEndpointSettingsRequest(                new DescribeEndpointSettingsMessage("molestiae") {{
                                marker = "rerum";
                                maxRecords = 580197L;
                            }};, DescribeEndpointSettingsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_ENDPOINT_SETTINGS) {{
                marker = "minima";
                maxRecords = "distinctio";
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sit";
                xAmzCredential = "culpa";
                xAmzDate = "tempore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeEndpointSettingsResponse res = sdk.sdk.describeEndpointSettings(req);

            if (res.describeEndpointSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpointTypes

Returns information about the type of endpoints available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointTypesRequest;
import org.openapis.openapi.models.operations.DescribeEndpointTypesResponse;
import org.openapis.openapi.models.operations.DescribeEndpointTypesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointTypesMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointTypesRequest req = new DescribeEndpointTypesRequest(                new DescribeEndpointTypesMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("esse",                 new String[]{{
                                                        add("a"),
                                                    }}) {{
                                        name = "Miranda Feest";
                                        values = new String[]{{
                                            add("a"),
                                            add("nulla"),
                                            add("quas"),
                                        }};
                                    }}),
                                    add(new Filter("quasi",                 new String[]{{
                                                        add("culpa"),
                                                        add("aliquid"),
                                                        add("tenetur"),
                                                    }}) {{
                                        name = "Kirk Stracke";
                                        values = new String[]{{
                                            add("asperiores"),
                                            add("facere"),
                                            add("veritatis"),
                                            add("consequuntur"),
                                        }};
                                    }}),
                                    add(new Filter("aliquam",                 new String[]{{
                                                        add("dicta"),
                                                        add("ullam"),
                                                        add("reprehenderit"),
                                                        add("ullam"),
                                                    }}) {{
                                        name = "Lila Kassulke";
                                        values = new String[]{{
                                            add("illum"),
                                            add("soluta"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                    add(new Filter("dolorum",                 new String[]{{
                                                        add("omnis"),
                                                    }}) {{
                                        name = "Margaret Lemke";
                                        values = new String[]{{
                                            add("deleniti"),
                                            add("itaque"),
                                        }};
                                    }}),
                                }};
                                marker = "tenetur";
                                maxRecords = 98478L;
                            }};, DescribeEndpointTypesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_ENDPOINT_TYPES) {{
                marker = "at";
                maxRecords = "et";
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
            }};            

            DescribeEndpointTypesResponse res = sdk.sdk.describeEndpointTypes(req);

            if (res.describeEndpointTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpoints

Returns information about the endpoints for your account in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointsRequest;
import org.openapis.openapi.models.operations.DescribeEndpointsResponse;
import org.openapis.openapi.models.operations.DescribeEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointsRequest req = new DescribeEndpointsRequest(                new DescribeEndpointsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("non",                 new String[]{{
                                                        add("dolor"),
                                                    }}) {{
                                        name = "Charles Langworth";
                                        values = new String[]{{
                                            add("corrupti"),
                                        }};
                                    }}),
                                }};
                                marker = "occaecati";
                                maxRecords = 253191L;
                            }};, DescribeEndpointsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_ENDPOINTS) {{
                marker = "impedit";
                maxRecords = "explicabo";
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "aut";
                xAmzCredential = "dignissimos";
                xAmzDate = "dicta";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeEndpointsResponse res = sdk.sdk.describeEndpoints(req);

            if (res.describeEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventCategories

Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.DescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.DescribeEventCategoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventCategoriesMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventCategoriesRequest req = new DescribeEventCategoriesRequest(                new DescribeEventCategoriesMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("asperiores",                 new String[]{{
                                                        add("quae"),
                                                        add("quaerat"),
                                                    }}) {{
                                        name = "Kevin Jast";
                                        values = new String[]{{
                                            add("officia"),
                                            add("maxime"),
                                            add("dignissimos"),
                                            add("officia"),
                                        }};
                                    }}),
                                    add(new Filter("est",                 new String[]{{
                                                        add("totam"),
                                                        add("fugiat"),
                                                        add("vel"),
                                                        add("ducimus"),
                                                    }}) {{
                                        name = "Mrs. Forrest Green";
                                        values = new String[]{{
                                            add("suscipit"),
                                            add("velit"),
                                            add("culpa"),
                                        }};
                                    }}),
                                }};
                                sourceType = "quos";
                            }};, DescribeEventCategoriesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_EVENT_CATEGORIES) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "labore";
                xAmzCredential = "possimus";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cum";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "in";
            }};            

            DescribeEventCategoriesResponse res = sdk.sdk.describeEventCategories(req);

            if (res.describeEventCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventSubscriptions

<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.DescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.DescribeEventSubscriptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventSubscriptionsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventSubscriptionsRequest req = new DescribeEventSubscriptionsRequest(                new DescribeEventSubscriptionsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("exercitationem",                 new String[]{{
                                                        add("facere"),
                                                        add("numquam"),
                                                        add("doloribus"),
                                                        add("suscipit"),
                                                    }}) {{
                                        name = "Corey Walsh DDS";
                                        values = new String[]{{
                                            add("in"),
                                        }};
                                    }}),
                                    add(new Filter("adipisci",                 new String[]{{
                                                        add("amet"),
                                                    }}) {{
                                        name = "Rickey Ullrich";
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new Filter("ipsa",                 new String[]{{
                                                        add("libero"),
                                                        add("vitae"),
                                                        add("accusamus"),
                                                        add("similique"),
                                                    }}) {{
                                        name = "Courtney Wiegand";
                                        values = new String[]{{
                                            add("harum"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new Filter("adipisci",                 new String[]{{
                                                        add("dolores"),
                                                        add("blanditiis"),
                                                        add("in"),
                                                        add("dolore"),
                                                    }}) {{
                                        name = "Kelly Hoeger";
                                        values = new String[]{{
                                            add("nobis"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                }};
                                marker = "aliquam";
                                maxRecords = 885963L;
                                subscriptionName = "temporibus";
                            }};, DescribeEventSubscriptionsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_EVENT_SUBSCRIPTIONS) {{
                marker = "ullam";
                maxRecords = "adipisci";
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            DescribeEventSubscriptionsResponse res = sdk.sdk.describeEventSubscriptions(req);

            if (res.describeEventSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEvents

 Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventsRequest;
import org.openapis.openapi.models.operations.DescribeEventsResponse;
import org.openapis.openapi.models.operations.DescribeEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventsRequest req = new DescribeEventsRequest(                new DescribeEventsMessage() {{
                                duration = 519643L;
                                endTime = OffsetDateTime.parse("2021-12-15T01:59:29.520Z");
                                eventCategories = new String[]{{
                                    add("sit"),
                                    add("rerum"),
                                    add("sed"),
                                    add("reiciendis"),
                                }};
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("in",                 new String[]{{
                                                        add("quidem"),
                                                        add("explicabo"),
                                                    }}) {{
                                        name = "Johnathan Klein V";
                                        values = new String[]{{
                                            add("laborum"),
                                            add("sed"),
                                        }};
                                    }}),
                                }};
                                marker = "voluptas";
                                maxRecords = 604118L;
                                sourceIdentifier = "architecto";
                                sourceType = SourceTypeEnum.REPLICATION_INSTANCE;
                                startTime = OffsetDateTime.parse("2022-01-15T12:09:02.064Z");
                            }};, DescribeEventsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_EVENTS) {{
                marker = "debitis";
                maxRecords = "illo";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeEventsResponse res = sdk.sdk.describeEvents(req);

            if (res.describeEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAdvisorCollectors

Returns a list of the Fleet Advisor collectors in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorCollectorsRequest;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorCollectorsResponse;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorCollectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAdvisorCollectorsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAdvisorCollectorsRequest req = new DescribeFleetAdvisorCollectorsRequest(                new DescribeFleetAdvisorCollectorsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("reiciendis",                 new String[]{{
                                                        add("sit"),
                                                        add("non"),
                                                    }}) {{
                                        name = "Rosemary McClure";
                                        values = new String[]{{
                                            add("tempora"),
                                            add("voluptate"),
                                        }};
                                    }}),
                                    add(new Filter("sit",                 new String[]{{
                                                        add("error"),
                                                        add("veniam"),
                                                        add("minima"),
                                                        add("recusandae"),
                                                    }}) {{
                                        name = "Clayton Quitzon";
                                        values = new String[]{{
                                            add("debitis"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new Filter("beatae",                 new String[]{{
                                                        add("exercitationem"),
                                                        add("praesentium"),
                                                        add("cum"),
                                                    }}) {{
                                        name = "Dr. Jody Cummings";
                                        values = new String[]{{
                                            add("in"),
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new Filter("nostrum",                 new String[]{{
                                                        add("dolorum"),
                                                        add("corrupti"),
                                                        add("accusamus"),
                                                    }}) {{
                                        name = "Lee Lehner";
                                        values = new String[]{{
                                            add("debitis"),
                                            add("neque"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 272683L;
                                nextToken = "atque";
                            }};, DescribeFleetAdvisorCollectorsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_COLLECTORS) {{
                maxRecords = "fugit";
                nextToken = "ut";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "culpa";
                xAmzDate = "expedita";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "esse";
            }};            

            DescribeFleetAdvisorCollectorsResponse res = sdk.sdk.describeFleetAdvisorCollectors(req);

            if (res.describeFleetAdvisorCollectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAdvisorDatabases

Returns a list of Fleet Advisor databases in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorDatabasesRequest;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorDatabasesResponse;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorDatabasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAdvisorDatabasesRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAdvisorDatabasesRequest req = new DescribeFleetAdvisorDatabasesRequest(                new DescribeFleetAdvisorDatabasesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("vel",                 new String[]{{
                                                        add("saepe"),
                                                        add("error"),
                                                    }}) {{
                                        name = "Willard Walker IV";
                                        values = new String[]{{
                                            add("sed"),
                                            add("sit"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 8511L;
                                nextToken = "incidunt";
                            }};, DescribeFleetAdvisorDatabasesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_DATABASES) {{
                maxRecords = "reiciendis";
                nextToken = "dolorem";
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "architecto";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "labore";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "atque";
            }};            

            DescribeFleetAdvisorDatabasesResponse res = sdk.sdk.describeFleetAdvisorDatabases(req);

            if (res.describeFleetAdvisorDatabasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAdvisorLsaAnalysis

Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorLsaAnalysisRequest;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorLsaAnalysisResponse;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAdvisorLsaAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAdvisorLsaAnalysisRequest req = new DescribeFleetAdvisorLsaAnalysisRequest(                new DescribeFleetAdvisorLsaAnalysisRequest() {{
                                maxRecords = 724148L;
                                nextToken = "tenetur";
                            }};, DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_LSA_ANALYSIS) {{
                maxRecords = "laboriosam";
                nextToken = "alias";
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "voluptate";
                xAmzDate = "unde";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "repellendus";
            }};            

            DescribeFleetAdvisorLsaAnalysisResponse res = sdk.sdk.describeFleetAdvisorLsaAnalysis(req);

            if (res.describeFleetAdvisorLsaAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAdvisorSchemaObjectSummary

Provides descriptions of the schemas discovered by your Fleet Advisor collectors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemaObjectSummaryRequest;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemaObjectSummaryResponse;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAdvisorSchemaObjectSummaryRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAdvisorSchemaObjectSummaryRequest req = new DescribeFleetAdvisorSchemaObjectSummaryRequest(                new DescribeFleetAdvisorSchemaObjectSummaryRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("voluptatem",                 new String[]{{
                                                        add("repudiandae"),
                                                        add("quasi"),
                                                        add("atque"),
                                                        add("reprehenderit"),
                                                    }}) {{
                                        name = "Monique Predovic";
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("mollitia"),
                                            add("veniam"),
                                        }};
                                    }}),
                                    add(new Filter("amet",                 new String[]{{
                                                        add("ea"),
                                                        add("atque"),
                                                        add("error"),
                                                        add("officiis"),
                                                    }}) {{
                                        name = "Jimmie Hoppe";
                                        values = new String[]{{
                                            add("esse"),
                                        }};
                                    }}),
                                    add(new Filter("at",                 new String[]{{
                                                        add("blanditiis"),
                                                        add("suscipit"),
                                                        add("repudiandae"),
                                                    }}) {{
                                        name = "Tomas Mosciski";
                                        values = new String[]{{
                                            add("maiores"),
                                            add("corrupti"),
                                        }};
                                    }}),
                                    add(new Filter("dicta",                 new String[]{{
                                                        add("beatae"),
                                                    }}) {{
                                        name = "Dave Cartwright";
                                        values = new String[]{{
                                            add("labore"),
                                            add("reiciendis"),
                                            add("doloremque"),
                                            add("repudiandae"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 174772L;
                                nextToken = "enim";
                            }};, DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_SCHEMA_OBJECT_SUMMARY) {{
                maxRecords = "laboriosam";
                nextToken = "velit";
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "magnam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "officiis";
            }};            

            DescribeFleetAdvisorSchemaObjectSummaryResponse res = sdk.sdk.describeFleetAdvisorSchemaObjectSummary(req);

            if (res.describeFleetAdvisorSchemaObjectSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleetAdvisorSchemas

Returns a list of schemas detected by Fleet Advisor Collectors in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemasRequest;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemasResponse;
import org.openapis.openapi.models.operations.DescribeFleetAdvisorSchemasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetAdvisorSchemasRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetAdvisorSchemasRequest req = new DescribeFleetAdvisorSchemasRequest(                new DescribeFleetAdvisorSchemasRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("illo",                 new String[]{{
                                                        add("quidem"),
                                                        add("eveniet"),
                                                    }}) {{
                                        name = "Tricia McClure";
                                        values = new String[]{{
                                            add("quis"),
                                            add("reprehenderit"),
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Filter("eveniet",                 new String[]{{
                                                        add("cum"),
                                                    }}) {{
                                        name = "Meghan Batz IV";
                                        values = new String[]{{
                                            add("molestiae"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 434761L;
                                nextToken = "necessitatibus";
                            }};, DescribeFleetAdvisorSchemasXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_SCHEMAS) {{
                maxRecords = "ratione";
                nextToken = "laborum";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "rem";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "ad";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeFleetAdvisorSchemasResponse res = sdk.sdk.describeFleetAdvisorSchemas(req);

            if (res.describeFleetAdvisorSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrderableReplicationInstances

Returns information about the replication instance types that can be created in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrderableReplicationInstancesRequest;
import org.openapis.openapi.models.operations.DescribeOrderableReplicationInstancesResponse;
import org.openapis.openapi.models.operations.DescribeOrderableReplicationInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrderableReplicationInstancesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrderableReplicationInstancesRequest req = new DescribeOrderableReplicationInstancesRequest(                new DescribeOrderableReplicationInstancesMessage() {{
                                marker = "perspiciatis";
                                maxRecords = 470649L;
                            }};, DescribeOrderableReplicationInstancesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_ORDERABLE_REPLICATION_INSTANCES) {{
                marker = "mollitia";
                maxRecords = "voluptas";
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "reiciendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "id";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "dolore";
            }};            

            DescribeOrderableReplicationInstancesResponse res = sdk.sdk.describeOrderableReplicationInstances(req);

            if (res.describeOrderableReplicationInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePendingMaintenanceActions

For internal use only

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePendingMaintenanceActionsRequest;
import org.openapis.openapi.models.operations.DescribePendingMaintenanceActionsResponse;
import org.openapis.openapi.models.operations.DescribePendingMaintenanceActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePendingMaintenanceActionsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePendingMaintenanceActionsRequest req = new DescribePendingMaintenanceActionsRequest(                new DescribePendingMaintenanceActionsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("adipisci",                 new String[]{{
                                                        add("laudantium"),
                                                        add("eum"),
                                                        add("nemo"),
                                                        add("recusandae"),
                                                    }}) {{
                                        name = "Sophie Mohr";
                                        values = new String[]{{
                                            add("ut"),
                                            add("culpa"),
                                        }};
                                    }}),
                                }};
                                marker = "esse";
                                maxRecords = 592081L;
                                replicationInstanceArn = "quis";
                            }};, DescribePendingMaintenanceActionsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_PENDING_MAINTENANCE_ACTIONS) {{
                marker = "eum";
                maxRecords = "reiciendis";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ullam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "animi";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribePendingMaintenanceActionsResponse res = sdk.sdk.describePendingMaintenanceActions(req);

            if (res.describePendingMaintenanceActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecommendationLimitations

Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecommendationLimitationsRequest;
import org.openapis.openapi.models.operations.DescribeRecommendationLimitationsResponse;
import org.openapis.openapi.models.operations.DescribeRecommendationLimitationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecommendationLimitationsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecommendationLimitationsRequest req = new DescribeRecommendationLimitationsRequest(                new DescribeRecommendationLimitationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("earum",                 new String[]{{
                                                        add("laborum"),
                                                        add("placeat"),
                                                        add("modi"),
                                                    }}) {{
                                        name = "Dr. Reginald Hyatt";
                                        values = new String[]{{
                                            add("in"),
                                            add("nam"),
                                        }};
                                    }}),
                                    add(new Filter("tempora",                 new String[]{{
                                                        add("inventore"),
                                                        add("fugit"),
                                                    }}) {{
                                        name = "Virgil Towne";
                                        values = new String[]{{
                                            add("rerum"),
                                        }};
                                    }}),
                                    add(new Filter("at",                 new String[]{{
                                                        add("eos"),
                                                        add("sapiente"),
                                                        add("eum"),
                                                        add("dicta"),
                                                    }}) {{
                                        name = "Scott Bahringer";
                                        values = new String[]{{
                                            add("eius"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new Filter("earum",                 new String[]{{
                                                        add("maiores"),
                                                        add("debitis"),
                                                        add("aliquid"),
                                                    }}) {{
                                        name = "Teresa McCullough";
                                        values = new String[]{{
                                            add("hic"),
                                            add("illum"),
                                            add("eaque"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 780931L;
                                nextToken = "suscipit";
                            }};, DescribeRecommendationLimitationsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_RECOMMENDATION_LIMITATIONS) {{
                maxRecords = "dolorem";
                nextToken = "fugit";
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "ratione";
                xAmzDate = "animi";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "consequatur";
            }};            

            DescribeRecommendationLimitationsResponse res = sdk.sdk.describeRecommendationLimitations(req);

            if (res.describeRecommendationLimitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecommendations

Returns a paginated list of target engine recommendations for your source databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecommendationsRequest;
import org.openapis.openapi.models.operations.DescribeRecommendationsResponse;
import org.openapis.openapi.models.operations.DescribeRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRecommendationsRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecommendationsRequest req = new DescribeRecommendationsRequest(                new DescribeRecommendationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("doloribus",                 new String[]{{
                                                        add("necessitatibus"),
                                                        add("ipsa"),
                                                        add("tempora"),
                                                        add("nihil"),
                                                    }}) {{
                                        name = "Ada McClure";
                                        values = new String[]{{
                                            add("magni"),
                                        }};
                                    }}),
                                }};
                                maxRecords = 473190L;
                                nextToken = "dicta";
                            }};, DescribeRecommendationsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_RECOMMENDATIONS) {{
                maxRecords = "iusto";
                nextToken = "esse";
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "reiciendis";
                xAmzDate = "vel";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "doloremque";
            }};            

            DescribeRecommendationsResponse res = sdk.sdk.describeRecommendations(req);

            if (res.describeRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRefreshSchemasStatus

Returns the status of the RefreshSchemas operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRefreshSchemasStatusRequest;
import org.openapis.openapi.models.operations.DescribeRefreshSchemasStatusResponse;
import org.openapis.openapi.models.operations.DescribeRefreshSchemasStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRefreshSchemasStatusMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRefreshSchemasStatusRequest req = new DescribeRefreshSchemasStatusRequest(                new DescribeRefreshSchemasStatusMessage("odio");, DescribeRefreshSchemasStatusXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REFRESH_SCHEMAS_STATUS) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ex";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeRefreshSchemasStatusResponse res = sdk.sdk.describeRefreshSchemasStatus(req);

            if (res.describeRefreshSchemasStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationInstanceTaskLogs

Returns information about the task logs for the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationInstanceTaskLogsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationInstanceTaskLogsResponse;
import org.openapis.openapi.models.operations.DescribeReplicationInstanceTaskLogsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationInstanceTaskLogsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationInstanceTaskLogsRequest req = new DescribeReplicationInstanceTaskLogsRequest(                new DescribeReplicationInstanceTaskLogsMessage("nostrum") {{
                                marker = "fugiat";
                                maxRecords = 713767L;
                            }};, DescribeReplicationInstanceTaskLogsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS) {{
                marker = "aliquid";
                maxRecords = "officia";
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "perferendis";
                xAmzDate = "eum";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "id";
            }};            

            DescribeReplicationInstanceTaskLogsResponse res = sdk.sdk.describeReplicationInstanceTaskLogs(req);

            if (res.describeReplicationInstanceTaskLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationInstances

Returns information about replication instances for your account in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationInstancesRequest;
import org.openapis.openapi.models.operations.DescribeReplicationInstancesResponse;
import org.openapis.openapi.models.operations.DescribeReplicationInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationInstancesMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationInstancesRequest req = new DescribeReplicationInstancesRequest(                new DescribeReplicationInstancesMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("vitae",                 new String[]{{
                                                        add("ex"),
                                                        add("quo"),
                                                        add("ex"),
                                                        add("ut"),
                                                    }}) {{
                                        name = "Pat O'Keefe";
                                        values = new String[]{{
                                            add("deleniti"),
                                            add("enim"),
                                        }};
                                    }}),
                                    add(new Filter("omnis",                 new String[]{{
                                                        add("rerum"),
                                                    }}) {{
                                        name = "Lula Bartell";
                                        values = new String[]{{
                                            add("beatae"),
                                            add("voluptatum"),
                                        }};
                                    }}),
                                    add(new Filter("pariatur",                 new String[]{{
                                                        add("voluptatem"),
                                                        add("alias"),
                                                        add("deleniti"),
                                                        add("earum"),
                                                    }}) {{
                                        name = "Trevor Bartell";
                                        values = new String[]{{
                                            add("fuga"),
                                        }};
                                    }}),
                                }};
                                marker = "ex";
                                maxRecords = 958308L;
                            }};, DescribeReplicationInstancesXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_INSTANCES) {{
                marker = "rem";
                maxRecords = "minus";
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "ratione";
                xAmzDate = "ullam";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "totam";
            }};            

            DescribeReplicationInstancesResponse res = sdk.sdk.describeReplicationInstances(req);

            if (res.describeReplicationInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationSubnetGroups

Returns information about the replication subnet groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationSubnetGroupsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationSubnetGroupsResponse;
import org.openapis.openapi.models.operations.DescribeReplicationSubnetGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationSubnetGroupsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationSubnetGroupsRequest req = new DescribeReplicationSubnetGroupsRequest(                new DescribeReplicationSubnetGroupsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("veritatis",                 new String[]{{
                                                        add("dolor"),
                                                        add("consequatur"),
                                                    }}) {{
                                        name = "Clyde Nader";
                                        values = new String[]{{
                                            add("deleniti"),
                                        }};
                                    }}),
                                    add(new Filter("fugiat",                 new String[]{{
                                                        add("consequuntur"),
                                                        add("ipsa"),
                                                    }}) {{
                                        name = "Karen Gleason IV";
                                        values = new String[]{{
                                            add("dolor"),
                                        }};
                                    }}),
                                    add(new Filter("eum",                 new String[]{{
                                                        add("voluptatum"),
                                                        add("magnam"),
                                                    }}) {{
                                        name = "Conrad Rutherford";
                                        values = new String[]{{
                                            add("sed"),
                                            add("veniam"),
                                            add("nesciunt"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new Filter("voluptatem",                 new String[]{{
                                                        add("necessitatibus"),
                                                        add("quasi"),
                                                    }}) {{
                                        name = "Kathleen Sauer";
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("consequuntur"),
                                        }};
                                    }}),
                                }};
                                marker = "nisi";
                                maxRecords = 871103L;
                            }};, DescribeReplicationSubnetGroupsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_SUBNET_GROUPS) {{
                marker = "vero";
                maxRecords = "est";
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "doloribus";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "optio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
            }};            

            DescribeReplicationSubnetGroupsResponse res = sdk.sdk.describeReplicationSubnetGroups(req);

            if (res.describeReplicationSubnetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationTaskAssessmentResults

<p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentResultsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentResultsResponse;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationTaskAssessmentResultsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationTaskAssessmentResultsRequest req = new DescribeReplicationTaskAssessmentResultsRequest(                new DescribeReplicationTaskAssessmentResultsMessage() {{
                                marker = "blanditiis";
                                maxRecords = 642352L;
                                replicationTaskArn = "voluptas";
                            }};, DescribeReplicationTaskAssessmentResultsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS) {{
                marker = "numquam";
                maxRecords = "nemo";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "laudantium";
            }};            

            DescribeReplicationTaskAssessmentResultsResponse res = sdk.sdk.describeReplicationTaskAssessmentResults(req);

            if (res.describeReplicationTaskAssessmentResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationTaskAssessmentRuns

<p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentRunsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentRunsResponse;
import org.openapis.openapi.models.operations.DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationTaskAssessmentRunsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationTaskAssessmentRunsRequest req = new DescribeReplicationTaskAssessmentRunsRequest(                new DescribeReplicationTaskAssessmentRunsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("cupiditate",                 new String[]{{
                                                        add("soluta"),
                                                        add("alias"),
                                                        add("omnis"),
                                                        add("eos"),
                                                    }}) {{
                                        name = "Clint Carroll";
                                        values = new String[]{{
                                            add("aperiam"),
                                        }};
                                    }}),
                                }};
                                marker = "occaecati";
                                maxRecords = 612867L;
                            }};, DescribeReplicationTaskAssessmentRunsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS) {{
                marker = "magni";
                maxRecords = "inventore";
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "voluptatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeReplicationTaskAssessmentRunsResponse res = sdk.sdk.describeReplicationTaskAssessmentRuns(req);

            if (res.describeReplicationTaskAssessmentRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationTaskIndividualAssessments

<p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationTaskIndividualAssessmentsRequest;
import org.openapis.openapi.models.operations.DescribeReplicationTaskIndividualAssessmentsResponse;
import org.openapis.openapi.models.operations.DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationTaskIndividualAssessmentsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationTaskIndividualAssessmentsRequest req = new DescribeReplicationTaskIndividualAssessmentsRequest(                new DescribeReplicationTaskIndividualAssessmentsMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("modi",                 new String[]{{
                                                        add("vero"),
                                                        add("voluptatem"),
                                                        add("ipsam"),
                                                    }}) {{
                                        name = "Paulette Lowe";
                                        values = new String[]{{
                                            add("totam"),
                                            add("earum"),
                                        }};
                                    }}),
                                    add(new Filter("deserunt",                 new String[]{{
                                                        add("nemo"),
                                                        add("reprehenderit"),
                                                    }}) {{
                                        name = "Mary Botsford";
                                        values = new String[]{{
                                            add("sint"),
                                            add("nulla"),
                                        }};
                                    }}),
                                    add(new Filter("debitis",                 new String[]{{
                                                        add("quae"),
                                                        add("minus"),
                                                        add("fuga"),
                                                        add("laborum"),
                                                    }}) {{
                                        name = "Alvin Marquardt";
                                        values = new String[]{{
                                            add("necessitatibus"),
                                            add("asperiores"),
                                            add("ex"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new Filter("repudiandae",                 new String[]{{
                                                        add("dolore"),
                                                        add("iusto"),
                                                        add("voluptate"),
                                                    }}) {{
                                        name = "Shannon Lind";
                                        values = new String[]{{
                                            add("soluta"),
                                        }};
                                    }}),
                                }};
                                marker = "sequi";
                                maxRecords = 493958L;
                            }};, DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_INDIVIDUAL_ASSESSMENTS) {{
                marker = "neque";
                maxRecords = "quo";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "iure";
                xAmzDate = "odit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeReplicationTaskIndividualAssessmentsResponse res = sdk.sdk.describeReplicationTaskIndividualAssessments(req);

            if (res.describeReplicationTaskIndividualAssessmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationTasks

Returns information about replication tasks for your account in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationTasksRequest;
import org.openapis.openapi.models.operations.DescribeReplicationTasksResponse;
import org.openapis.openapi.models.operations.DescribeReplicationTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplicationTasksMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationTasksRequest req = new DescribeReplicationTasksRequest(                new DescribeReplicationTasksMessage() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("vel",                 new String[]{{
                                                        add("beatae"),
                                                        add("vero"),
                                                    }}) {{
                                        name = "Wm Brakus";
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("velit"),
                                            add("illo"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                }};
                                marker = "excepturi";
                                maxRecords = 431994L;
                                withoutSettings = false;
                            }};, DescribeReplicationTasksXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASKS) {{
                marker = "velit";
                maxRecords = "ut";
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "earum";
                xAmzCredential = "dicta";
                xAmzDate = "impedit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "itaque";
            }};            

            DescribeReplicationTasksResponse res = sdk.sdk.describeReplicationTasks(req);

            if (res.describeReplicationTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSchemas

<p>Returns information about the schema for the specified endpoint.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSchemasRequest;
import org.openapis.openapi.models.operations.DescribeSchemasResponse;
import org.openapis.openapi.models.operations.DescribeSchemasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSchemasMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSchemasRequest req = new DescribeSchemasRequest(                new DescribeSchemasMessage("nisi") {{
                                marker = "itaque";
                                maxRecords = 242178L;
                            }};, DescribeSchemasXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_SCHEMAS) {{
                marker = "laborum";
                maxRecords = "non";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "sit";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeSchemasResponse res = sdk.sdk.describeSchemas(req);

            if (res.describeSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTableStatistics

<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTableStatisticsRequest;
import org.openapis.openapi.models.operations.DescribeTableStatisticsResponse;
import org.openapis.openapi.models.operations.DescribeTableStatisticsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTableStatisticsMessage;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTableStatisticsRequest req = new DescribeTableStatisticsRequest(                new DescribeTableStatisticsMessage("quidem") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("animi",                 new String[]{{
                                                        add("ipsam"),
                                                        add("corporis"),
                                                        add("est"),
                                                        add("error"),
                                                    }}) {{
                                        name = "Guadalupe Mertz";
                                        values = new String[]{{
                                            add("voluptate"),
                                            add("ullam"),
                                            add("unde"),
                                            add("necessitatibus"),
                                        }};
                                    }}),
                                    add(new Filter("dolorem",                 new String[]{{
                                                        add("qui"),
                                                        add("iste"),
                                                    }}) {{
                                        name = "Lucille Bogan";
                                        values = new String[]{{
                                            add("inventore"),
                                        }};
                                    }}),
                                }};
                                marker = "ex";
                                maxRecords = 367626L;
                            }};, DescribeTableStatisticsXAmzTargetEnum.AMAZON_DM_SV20160101_DESCRIBE_TABLE_STATISTICS) {{
                marker = "soluta";
                maxRecords = "libero";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "odio";
                xAmzDate = "fugit";
                xAmzSecurityToken = "alias";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeTableStatisticsResponse res = sdk.sdk.describeTableStatistics(req);

            if (res.describeTableStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCertificate

Uploads the specified certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCertificateRequest;
import org.openapis.openapi.models.operations.ImportCertificateResponse;
import org.openapis.openapi.models.operations.ImportCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportCertificateMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportCertificateRequest req = new ImportCertificateRequest(                new ImportCertificateMessage("quae") {{
                                certificatePem = "modi";
                                certificateWallet = "neque";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "itaque";
                                        resourceArn = "et";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag() {{
                                        key = "unde";
                                        resourceArn = "nulla";
                                        value = "distinctio";
                                    }}),
                                }};
                            }};, ImportCertificateXAmzTargetEnum.AMAZON_DM_SV20160101_IMPORT_CERTIFICATE) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quia";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "dicta";
            }};            

            ImportCertificateResponse res = sdk.sdk.importCertificate(req);

            if (res.importCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceMessage() {{
                                resourceArn = "libero";
                                resourceArnList = new String[]{{
                                    add("officia"),
                                    add("quos"),
                                    add("placeat"),
                                    add("sit"),
                                }};
                            }};, ListTagsForResourceXAmzTargetEnum.AMAZON_DM_SV20160101_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "voluptates";
                xAmzDate = "inventore";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dolore";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyEndpoint

<p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyEndpointRequest;
import org.openapis.openapi.models.operations.ModifyEndpointResponse;
import org.openapis.openapi.models.operations.ModifyEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthMechanismValueEnum;
import org.openapis.openapi.models.shared.AuthTypeValueEnum;
import org.openapis.openapi.models.shared.CannedAclForObjectsValueEnum;
import org.openapis.openapi.models.shared.CharLengthSemanticsEnum;
import org.openapis.openapi.models.shared.CompressionTypeValueEnum;
import org.openapis.openapi.models.shared.DataFormatValueEnum;
import org.openapis.openapi.models.shared.DatePartitionDelimiterValueEnum;
import org.openapis.openapi.models.shared.DatePartitionSequenceValueEnum;
import org.openapis.openapi.models.shared.DmsSslModeValueEnum;
import org.openapis.openapi.models.shared.DmsTransferSettings;
import org.openapis.openapi.models.shared.DocDbSettings;
import org.openapis.openapi.models.shared.DynamoDbSettings;
import org.openapis.openapi.models.shared.ElasticsearchSettings;
import org.openapis.openapi.models.shared.EncodingTypeValueEnum;
import org.openapis.openapi.models.shared.EncryptionModeValueEnum;
import org.openapis.openapi.models.shared.GcpMySQLSettings;
import org.openapis.openapi.models.shared.IBMDb2Settings;
import org.openapis.openapi.models.shared.KafkaSaslMechanismEnum;
import org.openapis.openapi.models.shared.KafkaSecurityProtocolEnum;
import org.openapis.openapi.models.shared.KafkaSettings;
import org.openapis.openapi.models.shared.KinesisSettings;
import org.openapis.openapi.models.shared.MessageFormatValueEnum;
import org.openapis.openapi.models.shared.MicrosoftSQLServerSettings;
import org.openapis.openapi.models.shared.ModifyEndpointMessage;
import org.openapis.openapi.models.shared.MongoDbSettings;
import org.openapis.openapi.models.shared.MySQLSettings;
import org.openapis.openapi.models.shared.NeptuneSettings;
import org.openapis.openapi.models.shared.NestingLevelValueEnum;
import org.openapis.openapi.models.shared.OracleSettings;
import org.openapis.openapi.models.shared.ParquetVersionValueEnum;
import org.openapis.openapi.models.shared.PluginNameValueEnum;
import org.openapis.openapi.models.shared.PostgreSQLSettings;
import org.openapis.openapi.models.shared.RedisAuthTypeValueEnum;
import org.openapis.openapi.models.shared.RedisSettings;
import org.openapis.openapi.models.shared.RedshiftSettings;
import org.openapis.openapi.models.shared.ReplicationEndpointTypeValueEnum;
import org.openapis.openapi.models.shared.S3Settings;
import org.openapis.openapi.models.shared.SafeguardPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SslSecurityProtocolValueEnum;
import org.openapis.openapi.models.shared.SybaseSettings;
import org.openapis.openapi.models.shared.TargetDbTypeEnum;
import org.openapis.openapi.models.shared.TlogAccessModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyEndpointRequest req = new ModifyEndpointRequest(                new ModifyEndpointMessage("distinctio") {{
                                certificateArn = "voluptatem";
                                databaseName = "autem";
                                dmsTransferSettings = new DmsTransferSettings() {{
                                    bucketName = "esse";
                                    serviceAccessRoleArn = "dolores";
                                }};;
                                docDbSettings = new DocDbSettings() {{
                                    databaseName = "assumenda";
                                    docsToInvestigate = 107210L;
                                    extractDocId = false;
                                    kmsKeyId = "est";
                                    nestingLevel = NestingLevelValueEnum.ONE;
                                    password = "corrupti";
                                    port = 473143L;
                                    secretsManagerAccessRoleArn = "provident";
                                    secretsManagerSecretId = "accusamus";
                                    serverName = "necessitatibus";
                                    username = "Mozelle.Mayer";
                                }};;
                                dynamoDbSettings = new DynamoDbSettings("ipsam");;
                                elasticsearchSettings = new ElasticsearchSettings("rerum", "laudantium") {{
                                    errorRetryDuration = 357207L;
                                    fullLoadErrorPercentage = 889060L;
                                    useNewMappingType = false;
                                }};;
                                endpointIdentifier = "voluptatibus";
                                endpointType = ReplicationEndpointTypeValueEnum.TARGET;
                                engineName = "at";
                                exactSettings = false;
                                externalTableDefinition = "alias";
                                extraConnectionAttributes = "quia";
                                gcpMySQLSettings = new GcpMySQLSettings() {{
                                    afterConnectScript = "quidem";
                                    cleanSourceMetadataOnMismatch = false;
                                    databaseName = "fuga";
                                    eventsPollInterval = 919508L;
                                    maxFileSize = 34070L;
                                    parallelLoadThreads = 710456L;
                                    password = "officiis";
                                    port = 177005L;
                                    secretsManagerAccessRoleArn = "quibusdam";
                                    secretsManagerSecretId = "odio";
                                    serverName = "praesentium";
                                    serverTimezone = "odit";
                                    targetDbType = TargetDbTypeEnum.SPECIFIC_DATABASE;
                                    username = "Florine.Mraz92";
                                }};;
                                ibmDb2Settings = new IBMDb2Settings() {{
                                    currentLsn = "similique";
                                    databaseName = "ut";
                                    maxKBytesPerRead = 693746L;
                                    password = "quis";
                                    port = 106255L;
                                    secretsManagerAccessRoleArn = "unde";
                                    secretsManagerSecretId = "molestiae";
                                    serverName = "delectus";
                                    setDataCaptureChanges = false;
                                    username = "Kyle25";
                                }};;
                                kafkaSettings = new KafkaSettings() {{
                                    broker = "nesciunt";
                                    includeControlDetails = false;
                                    includeNullAndEmpty = false;
                                    includePartitionValue = false;
                                    includeTableAlterOperations = false;
                                    includeTransactionDetails = false;
                                    messageFormat = MessageFormatValueEnum.JSON_UNFORMATTED;
                                    messageMaxBytes = 637856L;
                                    noHexPrefix = false;
                                    partitionIncludeSchemaTable = false;
                                    saslMechanism = KafkaSaslMechanismEnum.SCRAM_SHA512;
                                    saslPassword = "optio";
                                    saslUsername = "necessitatibus";
                                    securityProtocol = KafkaSecurityProtocolEnum.SSL_AUTHENTICATION;
                                    sslCaCertificateArn = "qui";
                                    sslClientCertificateArn = "expedita";
                                    sslClientKeyArn = "voluptatum";
                                    sslClientKeyPassword = "cupiditate";
                                    topic = "minima";
                                }};;
                                kinesisSettings = new KinesisSettings() {{
                                    includeControlDetails = false;
                                    includeNullAndEmpty = false;
                                    includePartitionValue = false;
                                    includeTableAlterOperations = false;
                                    includeTransactionDetails = false;
                                    messageFormat = MessageFormatValueEnum.JSON_UNFORMATTED;
                                    noHexPrefix = false;
                                    partitionIncludeSchemaTable = false;
                                    serviceAccessRoleArn = "enim";
                                    streamArn = "neque";
                                }};;
                                microsoftSQLServerSettings = new MicrosoftSQLServerSettings() {{
                                    bcpPacketSize = 446877L;
                                    controlTablesFileGroup = "minus";
                                    databaseName = "eum";
                                    forceLobLookup = false;
                                    password = "modi";
                                    port = 357347L;
                                    querySingleAlwaysOnNode = false;
                                    readBackupOnly = false;
                                    safeguardPolicy = SafeguardPolicyEnum.RELY_ON_SQL_SERVER_REPLICATION_AGENT;
                                    secretsManagerAccessRoleArn = "voluptates";
                                    secretsManagerSecretId = "maiores";
                                    serverName = "tempore";
                                    tlogAccessMode = TlogAccessModeEnum.BACKUP_ONLY;
                                    trimSpaceInChar = false;
                                    useBcpFullLoad = false;
                                    useThirdPartyBackupDevice = false;
                                    username = "Monique52";
                                }};;
                                mongoDbSettings = new MongoDbSettings() {{
                                    authMechanism = AuthMechanismValueEnum.MONGODB_CR;
                                    authSource = "voluptas";
                                    authType = AuthTypeValueEnum.PASSWORD;
                                    databaseName = "velit";
                                    docsToInvestigate = "minus";
                                    extractDocId = "fuga";
                                    kmsKeyId = "nostrum";
                                    nestingLevel = NestingLevelValueEnum.ONE;
                                    password = "impedit";
                                    port = 963741L;
                                    secretsManagerAccessRoleArn = "tempore";
                                    secretsManagerSecretId = "vero";
                                    serverName = "odit";
                                    username = "Zita.Streich";
                                }};;
                                mySQLSettings = new MySQLSettings() {{
                                    afterConnectScript = "aperiam";
                                    cleanSourceMetadataOnMismatch = false;
                                    databaseName = "odio";
                                    eventsPollInterval = 325297L;
                                    maxFileSize = 448369L;
                                    parallelLoadThreads = 496915L;
                                    password = "excepturi";
                                    port = 172195L;
                                    secretsManagerAccessRoleArn = "error";
                                    secretsManagerSecretId = "veritatis";
                                    serverName = "ducimus";
                                    serverTimezone = "voluptate";
                                    targetDbType = TargetDbTypeEnum.MULTIPLE_DATABASES;
                                    username = "Torey.Murazik31";
                                }};;
                                neptuneSettings = new NeptuneSettings("commodi", "officiis") {{
                                    errorRetryDuration = 810839L;
                                    iamAuthEnabled = false;
                                    maxFileSize = 697274L;
                                    maxRetryCount = 348192L;
                                    serviceAccessRoleArn = "quam";
                                }};;
                                oracleSettings = new OracleSettings() {{
                                    accessAlternateDirectly = false;
                                    addSupplementalLogging = false;
                                    additionalArchivedLogDestId = 211455L;
                                    allowSelectNestedTables = false;
                                    archivedLogDestId = 264619L;
                                    archivedLogsOnly = false;
                                    asmPassword = "ipsa";
                                    asmServer = "sint";
                                    asmUser = "vero";
                                    charLengthSemantics = CharLengthSemanticsEnum.DEFAULT_;
                                    convertTimestampWithZoneToUTC = false;
                                    databaseName = "repudiandae";
                                    directPathNoLog = false;
                                    directPathParallelLoad = false;
                                    enableHomogenousTablespace = false;
                                    extraArchivedLogDestIds = new Long[]{{
                                        add(120120L),
                                        add(936928L),
                                        add(334474L),
                                    }};
                                    failTasksOnLobTruncation = false;
                                    numberDatatypeScale = 659268L;
                                    oraclePathPrefix = "dolores";
                                    parallelAsmReadThreads = 724994L;
                                    password = "dicta";
                                    port = 164488L;
                                    readAheadBlocks = 899867L;
                                    readTableSpaceName = false;
                                    replacePathPrefix = false;
                                    retryInterval = 748224L;
                                    secretsManagerAccessRoleArn = "ipsa";
                                    secretsManagerOracleAsmAccessRoleArn = "ducimus";
                                    secretsManagerOracleAsmSecretId = "maiores";
                                    secretsManagerSecretId = "veritatis";
                                    securityDbEncryption = "quasi";
                                    securityDbEncryptionName = "laboriosam";
                                    serverName = "pariatur";
                                    spatialDataOptionToGeoJsonFunctionName = "libero";
                                    standbyDelayTime = 566506L;
                                    trimSpaceInChar = false;
                                    useAlternateFolderForOnline = false;
                                    useBFile = false;
                                    useDirectPathFullLoad = false;
                                    useLogminerReader = false;
                                    usePathPrefix = "occaecati";
                                    username = "Fredy_Haag";
                                }};;
                                password = "eligendi";
                                port = 574032L;
                                postgreSQLSettings = new PostgreSQLSettings() {{
                                    afterConnectScript = "enim";
                                    captureDdls = false;
                                    databaseName = "hic";
                                    ddlArtifactsSchema = "animi";
                                    executeTimeout = 559774L;
                                    failTasksOnLobTruncation = false;
                                    heartbeatEnable = false;
                                    heartbeatFrequency = 517326L;
                                    heartbeatSchema = "molestias";
                                    mapBooleanAsBoolean = false;
                                    maxFileSize = 484966L;
                                    password = "eaque";
                                    pluginName = PluginNameValueEnum.PGLOGICAL;
                                    port = 104078L;
                                    secretsManagerAccessRoleArn = "quos";
                                    secretsManagerSecretId = "iste";
                                    serverName = "assumenda";
                                    slotName = "tempore";
                                    trimSpaceInChar = false;
                                    username = "Mohammed96";
                                }};;
                                redisSettings = new RedisSettings(773110L, "cum") {{
                                    authPassword = "ipsum";
                                    authType = RedisAuthTypeValueEnum.NONE;
                                    authUserName = "saepe";
                                    sslCaCertificateArn = "deserunt";
                                    sslSecurityProtocol = SslSecurityProtocolValueEnum.PLAINTEXT;
                                }};;
                                redshiftSettings = new RedshiftSettings() {{
                                    acceptAnyDate = false;
                                    afterConnectScript = "quis";
                                    bucketFolder = "veniam";
                                    bucketName = "libero";
                                    caseSensitiveNames = false;
                                    compUpdate = false;
                                    connectionTimeout = 99733L;
                                    databaseName = "cupiditate";
                                    dateFormat = "molestiae";
                                    emptyAsNull = false;
                                    encryptionMode = EncryptionModeValueEnum.SSE_KMS;
                                    explicitIds = false;
                                    fileTransferUploadStreams = 820023L;
                                    loadTimeout = 251464L;
                                    mapBooleanAsBoolean = false;
                                    maxFileSize = 298187L;
                                    password = "itaque";
                                    port = 150935L;
                                    removeQuotes = false;
                                    replaceChars = "asperiores";
                                    replaceInvalidChars = "veniam";
                                    secretsManagerAccessRoleArn = "consequuntur";
                                    secretsManagerSecretId = "facere";
                                    serverName = "laudantium";
                                    serverSideEncryptionKmsKeyId = "odit";
                                    serviceAccessRoleArn = "pariatur";
                                    timeFormat = "amet";
                                    trimBlanks = false;
                                    truncateColumns = false;
                                    username = "Fannie70";
                                    writeBufferSize = 731065L;
                                }};;
                                s3Settings = new S3Settings() {{
                                    addColumnName = false;
                                    addTrailingPaddingCharacter = false;
                                    bucketFolder = "nisi";
                                    bucketName = "voluptatibus";
                                    cannedAclForObjects = CannedAclForObjectsValueEnum.PUBLIC_READ;
                                    cdcInsertsAndUpdates = false;
                                    cdcInsertsOnly = false;
                                    cdcMaxBatchInterval = 503748L;
                                    cdcMinFileSize = 718627L;
                                    cdcPath = "nisi";
                                    compressionType = CompressionTypeValueEnum.NONE;
                                    csvDelimiter = "nisi";
                                    csvNoSupValue = "libero";
                                    csvNullValue = "minus";
                                    csvRowDelimiter = "facere";
                                    dataFormat = DataFormatValueEnum.PARQUET;
                                    dataPageSize = 217663L;
                                    datePartitionDelimiter = DatePartitionDelimiterValueEnum.UNDERSCORE;
                                    datePartitionEnabled = false;
                                    datePartitionSequence = DatePartitionSequenceValueEnum.DDMMYYYY;
                                    datePartitionTimezone = "voluptatibus";
                                    dictPageSizeLimit = 162358L;
                                    enableStatistics = false;
                                    encodingType = EncodingTypeValueEnum.RLE_DICTIONARY;
                                    encryptionMode = EncryptionModeValueEnum.SSE_S3;
                                    expectedBucketOwner = "rerum";
                                    externalTableDefinition = "eos";
                                    glueCatalogGeneration = false;
                                    ignoreHeaderRows = 440777L;
                                    includeOpForFullLoad = false;
                                    maxFileSize = 345506L;
                                    parquetTimestampInMillisecond = false;
                                    parquetVersion = ParquetVersionValueEnum.PARQUET10;
                                    preserveTransactions = false;
                                    rfc4180 = false;
                                    rowGroupLength = 480061L;
                                    serverSideEncryptionKmsKeyId = "est";
                                    serviceAccessRoleArn = "rem";
                                    timestampColumnName = "eligendi";
                                    useCsvNoSupValue = false;
                                    useTaskStartTimeForFullLoadTimestamp = false;
                                }};;
                                serverName = "fugiat";
                                serviceAccessRoleArn = "unde";
                                sslMode = DmsSslModeValueEnum.VERIFY_FULL;
                                sybaseSettings = new SybaseSettings() {{
                                    databaseName = "ducimus";
                                    password = "dolor";
                                    port = 118041L;
                                    secretsManagerAccessRoleArn = "error";
                                    secretsManagerSecretId = "porro";
                                    serverName = "vitae";
                                    username = "Jerad.Koelpin13";
                                }};;
                                username = "Emil.Wintheiser";
                            }};, ModifyEndpointXAmzTargetEnum.AMAZON_DM_SV20160101_MODIFY_ENDPOINT) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illo";
                xAmzCredential = "ab";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "tempore";
            }};            

            ModifyEndpointResponse res = sdk.sdk.modifyEndpoint(req);

            if (res.modifyEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyEventSubscription

Modifies an existing DMS event notification subscription. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.ModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.ModifyEventSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyEventSubscriptionRequest req = new ModifyEventSubscriptionRequest(                new ModifyEventSubscriptionMessage("eos") {{
                                enabled = false;
                                eventCategories = new String[]{{
                                    add("earum"),
                                    add("reprehenderit"),
                                    add("praesentium"),
                                    add("nemo"),
                                }};
                                snsTopicArn = "repellat";
                                sourceType = "quisquam";
                            }};, ModifyEventSubscriptionXAmzTargetEnum.AMAZON_DM_SV20160101_MODIFY_EVENT_SUBSCRIPTION) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "deleniti";
                xAmzDate = "illo";
                xAmzSecurityToken = "labore";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "aliquam";
            }};            

            ModifyEventSubscriptionResponse res = sdk.sdk.modifyEventSubscription(req);

            if (res.modifyEventSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyReplicationInstance

<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyReplicationInstanceRequest;
import org.openapis.openapi.models.operations.ModifyReplicationInstanceResponse;
import org.openapis.openapi.models.operations.ModifyReplicationInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyReplicationInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyReplicationInstanceRequest req = new ModifyReplicationInstanceRequest(                new ModifyReplicationInstanceMessage("provident") {{
                                allocatedStorage = 514993L;
                                allowMajorVersionUpgrade = false;
                                applyImmediately = false;
                                autoMinorVersionUpgrade = false;
                                engineVersion = "repudiandae";
                                multiAZ = false;
                                networkType = "consequatur";
                                preferredMaintenanceWindow = "maxime";
                                replicationInstanceClass = "aspernatur";
                                replicationInstanceIdentifier = "nam";
                                vpcSecurityGroupIds = new String[]{{
                                    add("quas"),
                                    add("provident"),
                                    add("repudiandae"),
                                }};
                            }};, ModifyReplicationInstanceXAmzTargetEnum.AMAZON_DM_SV20160101_MODIFY_REPLICATION_INSTANCE) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "corporis";
                xAmzDate = "vero";
                xAmzSecurityToken = "similique";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "iure";
            }};            

            ModifyReplicationInstanceResponse res = sdk.sdk.modifyReplicationInstance(req);

            if (res.modifyReplicationInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyReplicationSubnetGroup

Modifies the settings for the specified replication subnet group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyReplicationSubnetGroupRequest;
import org.openapis.openapi.models.operations.ModifyReplicationSubnetGroupResponse;
import org.openapis.openapi.models.operations.ModifyReplicationSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyReplicationSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyReplicationSubnetGroupRequest req = new ModifyReplicationSubnetGroupRequest(                new ModifyReplicationSubnetGroupMessage("commodi",                 new String[]{{
                                                add("commodi"),
                                                add("aut"),
                                                add("voluptatem"),
                                                add("ad"),
                                            }}) {{
                                replicationSubnetGroupDescription = "quae";
                            }};, ModifyReplicationSubnetGroupXAmzTargetEnum.AMAZON_DM_SV20160101_MODIFY_REPLICATION_SUBNET_GROUP) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "illum";
                xAmzCredential = "praesentium";
                xAmzDate = "quidem";
                xAmzSecurityToken = "cum";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "quasi";
            }};            

            ModifyReplicationSubnetGroupResponse res = sdk.sdk.modifyReplicationSubnetGroup(req);

            if (res.modifyReplicationSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyReplicationTask

<p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyReplicationTaskRequest;
import org.openapis.openapi.models.operations.ModifyReplicationTaskResponse;
import org.openapis.openapi.models.operations.ModifyReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.MigrationTypeValueEnum;
import org.openapis.openapi.models.shared.ModifyReplicationTaskMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyReplicationTaskRequest req = new ModifyReplicationTaskRequest(                new ModifyReplicationTaskMessage("laudantium") {{
                                cdcStartPosition = "doloremque";
                                cdcStartTime = OffsetDateTime.parse("2021-07-24T17:17:44.726Z");
                                cdcStopPosition = "amet";
                                migrationType = MigrationTypeValueEnum.CDC;
                                replicationTaskIdentifier = "dolorum";
                                replicationTaskSettings = "necessitatibus";
                                tableMappings = "provident";
                                taskData = "repudiandae";
                            }};, ModifyReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_MODIFY_REPLICATION_TASK) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "molestiae";
                xAmzDate = "itaque";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "aperiam";
            }};            

            ModifyReplicationTaskResponse res = sdk.sdk.modifyReplicationTask(req);

            if (res.modifyReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveReplicationTask

Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveReplicationTaskRequest;
import org.openapis.openapi.models.operations.MoveReplicationTaskResponse;
import org.openapis.openapi.models.operations.MoveReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.MoveReplicationTaskMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveReplicationTaskRequest req = new MoveReplicationTaskRequest(                new MoveReplicationTaskMessage("accusamus", "eos");, MoveReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_MOVE_REPLICATION_TASK) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "voluptatem";
                xAmzDate = "velit";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "a";
            }};            

            MoveReplicationTaskResponse res = sdk.sdk.moveReplicationTask(req);

            if (res.moveReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootReplicationInstance

Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootReplicationInstanceRequest;
import org.openapis.openapi.models.operations.RebootReplicationInstanceResponse;
import org.openapis.openapi.models.operations.RebootReplicationInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootReplicationInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootReplicationInstanceRequest req = new RebootReplicationInstanceRequest(                new RebootReplicationInstanceMessage("occaecati") {{
                                forceFailover = false;
                                forcePlannedFailover = false;
                            }};, RebootReplicationInstanceXAmzTargetEnum.AMAZON_DM_SV20160101_REBOOT_REPLICATION_INSTANCE) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "at";
                xAmzDate = "labore";
                xAmzSecurityToken = "minus";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "voluptatem";
            }};            

            RebootReplicationInstanceResponse res = sdk.sdk.rebootReplicationInstance(req);

            if (res.rebootReplicationInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshSchemas

Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshSchemasRequest;
import org.openapis.openapi.models.operations.RefreshSchemasResponse;
import org.openapis.openapi.models.operations.RefreshSchemasXAmzTargetEnum;
import org.openapis.openapi.models.shared.RefreshSchemasMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefreshSchemasRequest req = new RefreshSchemasRequest(                new RefreshSchemasMessage("rerum", "ea");, RefreshSchemasXAmzTargetEnum.AMAZON_DM_SV20160101_REFRESH_SCHEMAS) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "repellat";
                xAmzDate = "velit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "consectetur";
            }};            

            RefreshSchemasResponse res = sdk.sdk.refreshSchemas(req);

            if (res.refreshSchemasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reloadTables

<p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReloadTablesRequest;
import org.openapis.openapi.models.operations.ReloadTablesResponse;
import org.openapis.openapi.models.operations.ReloadTablesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReloadOptionValueEnum;
import org.openapis.openapi.models.shared.ReloadTablesMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableToReload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReloadTablesRequest req = new ReloadTablesRequest(                new ReloadTablesMessage("dignissimos",                 new org.openapis.openapi.models.shared.TableToReload[]{{
                                                add(new TableToReload("temporibus", "officia") {{
                                                    schemaName = "soluta";
                                                    tableName = "natus";
                                                }}),
                                            }}) {{
                                reloadOption = ReloadOptionValueEnum.DATA_RELOAD;
                            }};, ReloadTablesXAmzTargetEnum.AMAZON_DM_SV20160101_RELOAD_TABLES) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "quo";
                xAmzDate = "itaque";
                xAmzSecurityToken = "illum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dignissimos";
            }};            

            ReloadTablesResponse res = sdk.sdk.reloadTables(req);

            if (res.reloadTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagsFromResource

Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsFromResourceRequest req = new RemoveTagsFromResourceRequest(                new RemoveTagsFromResourceMessage("qui",                 new String[]{{
                                                add("repellat"),
                                            }});, RemoveTagsFromResourceXAmzTargetEnum.AMAZON_DM_SV20160101_REMOVE_TAGS_FROM_RESOURCE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "exercitationem";
                xAmzDate = "nihil";
                xAmzSecurityToken = "non";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "illo";
            }};            

            RemoveTagsFromResourceResponse res = sdk.sdk.removeTagsFromResource(req);

            if (res.removeTagsFromResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runFleetAdvisorLsaAnalysis

Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunFleetAdvisorLsaAnalysisRequest;
import org.openapis.openapi.models.operations.RunFleetAdvisorLsaAnalysisResponse;
import org.openapis.openapi.models.operations.RunFleetAdvisorLsaAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RunFleetAdvisorLsaAnalysisRequest req = new RunFleetAdvisorLsaAnalysisRequest(RunFleetAdvisorLsaAnalysisXAmzTargetEnum.AMAZON_DM_SV20160101_RUN_FLEET_ADVISOR_LSA_ANALYSIS) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "non";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "in";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "labore";
            }};            

            RunFleetAdvisorLsaAnalysisResponse res = sdk.sdk.runFleetAdvisorLsaAnalysis(req);

            if (res.runFleetAdvisorLsaAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRecommendations

<p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRecommendationsRequest;
import org.openapis.openapi.models.operations.StartRecommendationsResponse;
import org.openapis.openapi.models.operations.StartRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RecommendationSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRecommendationsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRecommendationsRequest req = new StartRecommendationsRequest(                new StartRecommendationsRequest("repudiandae",                 new RecommendationSettings("modi", "in"););, StartRecommendationsXAmzTargetEnum.AMAZON_DM_SV20160101_START_RECOMMENDATIONS) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "rem";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "odit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "enim";
            }};            

            StartRecommendationsResponse res = sdk.sdk.startRecommendations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplicationTask

<p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReplicationTaskRequest;
import org.openapis.openapi.models.operations.StartReplicationTaskResponse;
import org.openapis.openapi.models.operations.StartReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReplicationTaskMessage;
import org.openapis.openapi.models.shared.StartReplicationTaskTypeValueEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplicationTaskRequest req = new StartReplicationTaskRequest(                new StartReplicationTaskMessage("similique", StartReplicationTaskTypeValueEnum.START_REPLICATION) {{
                                cdcStartPosition = "libero";
                                cdcStartTime = OffsetDateTime.parse("2022-12-23T03:22:14.898Z");
                                cdcStopPosition = "modi";
                            }};, StartReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_START_REPLICATION_TASK) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "mollitia";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "molestiae";
            }};            

            StartReplicationTaskResponse res = sdk.sdk.startReplicationTask(req);

            if (res.startReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplicationTaskAssessment

<p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentRequest;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentResponse;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReplicationTaskAssessmentMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplicationTaskAssessmentRequest req = new StartReplicationTaskAssessmentRequest(                new StartReplicationTaskAssessmentMessage("reiciendis");, StartReplicationTaskAssessmentXAmzTargetEnum.AMAZON_DM_SV20160101_START_REPLICATION_TASK_ASSESSMENT) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "modi";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "commodi";
            }};            

            StartReplicationTaskAssessmentResponse res = sdk.sdk.startReplicationTaskAssessment(req);

            if (res.startReplicationTaskAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplicationTaskAssessmentRun

<p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentRunRequest;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentRunResponse;
import org.openapis.openapi.models.operations.StartReplicationTaskAssessmentRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReplicationTaskAssessmentRunMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplicationTaskAssessmentRunRequest req = new StartReplicationTaskAssessmentRunRequest(                new StartReplicationTaskAssessmentRunMessage("dolorum", "possimus", "voluptate", "consectetur") {{
                                exclude = new String[]{{
                                    add("quaerat"),
                                }};
                                includeOnly = new String[]{{
                                    add("minus"),
                                    add("sunt"),
                                    add("distinctio"),
                                    add("iusto"),
                                }};
                                resultEncryptionMode = "quas";
                                resultKmsKeyArn = "et";
                                resultLocationFolder = "facilis";
                            }};, StartReplicationTaskAssessmentRunXAmzTargetEnum.AMAZON_DM_SV20160101_START_REPLICATION_TASK_ASSESSMENT_RUN) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "autem";
                xAmzCredential = "fuga";
                xAmzDate = "alias";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quos";
            }};            

            StartReplicationTaskAssessmentRunResponse res = sdk.sdk.startReplicationTaskAssessmentRun(req);

            if (res.startReplicationTaskAssessmentRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopReplicationTask

Stops the replication task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopReplicationTaskRequest;
import org.openapis.openapi.models.operations.StopReplicationTaskResponse;
import org.openapis.openapi.models.operations.StopReplicationTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopReplicationTaskMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopReplicationTaskRequest req = new StopReplicationTaskRequest(                new StopReplicationTaskMessage("repellendus");, StopReplicationTaskXAmzTargetEnum.AMAZON_DM_SV20160101_STOP_REPLICATION_TASK) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "quae";
                xAmzCredential = "eaque";
                xAmzDate = "saepe";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "nulla";
            }};            

            StopReplicationTaskResponse res = sdk.sdk.stopReplicationTask(req);

            if (res.stopReplicationTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testConnection

Tests the connection between the replication instance and the endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestConnectionRequest;
import org.openapis.openapi.models.operations.TestConnectionResponse;
import org.openapis.openapi.models.operations.TestConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestConnectionMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestConnectionRequest req = new TestConnectionRequest(                new TestConnectionMessage("sed", "voluptatem");, TestConnectionXAmzTargetEnum.AMAZON_DM_SV20160101_TEST_CONNECTION) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "qui";
            }};            

            TestConnectionResponse res = sdk.sdk.testConnection(req);

            if (res.testConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionsToEventBridge

<p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionsToEventBridgeRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionsToEventBridgeResponse;
import org.openapis.openapi.models.operations.UpdateSubscriptionsToEventBridgeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSubscriptionsToEventBridgeMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionsToEventBridgeRequest req = new UpdateSubscriptionsToEventBridgeRequest(                new UpdateSubscriptionsToEventBridgeMessage() {{
                                forceMove = false;
                            }};, UpdateSubscriptionsToEventBridgeXAmzTargetEnum.AMAZON_DM_SV20160101_UPDATE_SUBSCRIPTIONS_TO_EVENT_BRIDGE) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "beatae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "modi";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateSubscriptionsToEventBridgeResponse res = sdk.sdk.updateSubscriptionsToEventBridge(req);

            if (res.updateSubscriptionsToEventBridgeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
