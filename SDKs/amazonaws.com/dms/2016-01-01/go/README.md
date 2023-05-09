# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dms/2016-01-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AddTagsToResource(ctx, operations.AddTagsToResourceRequest{
        AddTagsToResourceMessage: shared.AddTagsToResourceMessage{
            ResourceArn: "corrupti",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("distinctio"),
                    ResourceArn: sdk.String("quibusdam"),
                    Value: sdk.String("unde"),
                },
                shared.Tag{
                    Key: sdk.String("nulla"),
                    ResourceArn: sdk.String("corrupti"),
                    Value: sdk.String("illum"),
                },
                shared.Tag{
                    Key: sdk.String("vel"),
                    ResourceArn: sdk.String("error"),
                    Value: sdk.String("deserunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AddTagsToResourceXAmzTargetEnumAmazonDmSv20160101AddTagsToResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddTagsToResource](docs/sdk/README.md#addtagstoresource) - Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [ApplyPendingMaintenanceAction](docs/sdk/README.md#applypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a replication instance).
* [BatchStartRecommendations](docs/sdk/README.md#batchstartrecommendations) - <p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
* [CancelReplicationTaskAssessmentRun](docs/sdk/README.md#cancelreplicationtaskassessmentrun) - <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
* [CreateEndpoint](docs/sdk/README.md#createendpoint) - <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [CreateEventSubscription](docs/sdk/README.md#createeventsubscription) - <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
* [CreateFleetAdvisorCollector](docs/sdk/README.md#createfleetadvisorcollector) - Creates a Fleet Advisor collector using the specified parameters.
* [CreateReplicationInstance](docs/sdk/README.md#createreplicationinstance) - <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
* [CreateReplicationSubnetGroup](docs/sdk/README.md#createreplicationsubnetgroup) - <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
* [CreateReplicationTask](docs/sdk/README.md#createreplicationtask) - Creates a replication task using the specified parameters.
* [DeleteCertificate](docs/sdk/README.md#deletecertificate) - Deletes the specified certificate. 
* [DeleteConnection](docs/sdk/README.md#deleteconnection) - Deletes the connection between a replication instance and an endpoint.
* [DeleteEndpoint](docs/sdk/README.md#deleteendpoint) - <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
* [DeleteEventSubscription](docs/sdk/README.md#deleteeventsubscription) -  Deletes an DMS event subscription. 
* [DeleteFleetAdvisorCollector](docs/sdk/README.md#deletefleetadvisorcollector) - Deletes the specified Fleet Advisor collector.
* [DeleteFleetAdvisorDatabases](docs/sdk/README.md#deletefleetadvisordatabases) - Deletes the specified Fleet Advisor collector databases.
* [DeleteReplicationInstance](docs/sdk/README.md#deletereplicationinstance) - <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
* [DeleteReplicationSubnetGroup](docs/sdk/README.md#deletereplicationsubnetgroup) - Deletes a subnet group.
* [DeleteReplicationTask](docs/sdk/README.md#deletereplicationtask) - Deletes the specified replication task.
* [DeleteReplicationTaskAssessmentRun](docs/sdk/README.md#deletereplicationtaskassessmentrun) - <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
* [DescribeAccountAttributes](docs/sdk/README.md#describeaccountattributes) - <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
* [DescribeApplicableIndividualAssessments](docs/sdk/README.md#describeapplicableindividualassessments) - <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
* [DescribeCertificates](docs/sdk/README.md#describecertificates) - Provides a description of the certificate.
* [DescribeConnections](docs/sdk/README.md#describeconnections) - Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
* [DescribeEndpointSettings](docs/sdk/README.md#describeendpointsettings) - Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
* [DescribeEndpointTypes](docs/sdk/README.md#describeendpointtypes) - Returns information about the type of endpoints available.
* [DescribeEndpoints](docs/sdk/README.md#describeendpoints) - Returns information about the endpoints for your account in the current region.
* [DescribeEventCategories](docs/sdk/README.md#describeeventcategories) - Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [DescribeEventSubscriptions](docs/sdk/README.md#describeeventsubscriptions) - <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
* [DescribeEvents](docs/sdk/README.md#describeevents) -  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [DescribeFleetAdvisorCollectors](docs/sdk/README.md#describefleetadvisorcollectors) - Returns a list of the Fleet Advisor collectors in your account.
* [DescribeFleetAdvisorDatabases](docs/sdk/README.md#describefleetadvisordatabases) - Returns a list of Fleet Advisor databases in your account.
* [DescribeFleetAdvisorLsaAnalysis](docs/sdk/README.md#describefleetadvisorlsaanalysis) - Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 
* [DescribeFleetAdvisorSchemaObjectSummary](docs/sdk/README.md#describefleetadvisorschemaobjectsummary) - Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
* [DescribeFleetAdvisorSchemas](docs/sdk/README.md#describefleetadvisorschemas) - Returns a list of schemas detected by Fleet Advisor Collectors in your account.
* [DescribeOrderableReplicationInstances](docs/sdk/README.md#describeorderablereplicationinstances) - Returns information about the replication instance types that can be created in the specified region.
* [DescribePendingMaintenanceActions](docs/sdk/README.md#describependingmaintenanceactions) - For internal use only
* [DescribeRecommendationLimitations](docs/sdk/README.md#describerecommendationlimitations) - Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
* [DescribeRecommendations](docs/sdk/README.md#describerecommendations) - Returns a paginated list of target engine recommendations for your source databases.
* [DescribeRefreshSchemasStatus](docs/sdk/README.md#describerefreshschemasstatus) - Returns the status of the RefreshSchemas operation.
* [DescribeReplicationInstanceTaskLogs](docs/sdk/README.md#describereplicationinstancetasklogs) - Returns information about the task logs for the specified task.
* [DescribeReplicationInstances](docs/sdk/README.md#describereplicationinstances) - Returns information about replication instances for your account in the current region.
* [DescribeReplicationSubnetGroups](docs/sdk/README.md#describereplicationsubnetgroups) - Returns information about the replication subnet groups.
* [DescribeReplicationTaskAssessmentResults](docs/sdk/README.md#describereplicationtaskassessmentresults) - <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [DescribeReplicationTaskAssessmentRuns](docs/sdk/README.md#describereplicationtaskassessmentruns) - <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
* [DescribeReplicationTaskIndividualAssessments](docs/sdk/README.md#describereplicationtaskindividualassessments) - <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
* [DescribeReplicationTasks](docs/sdk/README.md#describereplicationtasks) - Returns information about replication tasks for your account in the current region.
* [DescribeSchemas](docs/sdk/README.md#describeschemas) - <p>Returns information about the schema for the specified endpoint.</p> <p/>
* [DescribeTableStatistics](docs/sdk/README.md#describetablestatistics) - <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
* [ImportCertificate](docs/sdk/README.md#importcertificate) - Uploads the specified certificate.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [ModifyEndpoint](docs/sdk/README.md#modifyendpoint) - <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [ModifyEventSubscription](docs/sdk/README.md#modifyeventsubscription) - Modifies an existing DMS event notification subscription. 
* [ModifyReplicationInstance](docs/sdk/README.md#modifyreplicationinstance) - <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
* [ModifyReplicationSubnetGroup](docs/sdk/README.md#modifyreplicationsubnetgroup) - Modifies the settings for the specified replication subnet group.
* [ModifyReplicationTask](docs/sdk/README.md#modifyreplicationtask) - <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
* [MoveReplicationTask](docs/sdk/README.md#movereplicationtask) - Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
* [RebootReplicationInstance](docs/sdk/README.md#rebootreplicationinstance) - Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
* [RefreshSchemas](docs/sdk/README.md#refreshschemas) - Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
* [ReloadTables](docs/sdk/README.md#reloadtables) - <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
* [RemoveTagsFromResource](docs/sdk/README.md#removetagsfromresource) - Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [RunFleetAdvisorLsaAnalysis](docs/sdk/README.md#runfleetadvisorlsaanalysis) - Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
* [StartRecommendations](docs/sdk/README.md#startrecommendations) - <p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>
* [StartReplicationTask](docs/sdk/README.md#startreplicationtask) - <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
* [StartReplicationTaskAssessment](docs/sdk/README.md#startreplicationtaskassessment) - <p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [StartReplicationTaskAssessmentRun](docs/sdk/README.md#startreplicationtaskassessmentrun) - <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
* [StopReplicationTask](docs/sdk/README.md#stopreplicationtask) - Stops the replication task.
* [TestConnection](docs/sdk/README.md#testconnection) - Tests the connection between the replication instance and the endpoint.
* [UpdateSubscriptionsToEventBridge](docs/sdk/README.md#updatesubscriptionstoeventbridge) - <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
