# SDK

## Overview

<fullname>Database Migration Service</fullname> <p>Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a> in the <i>Database Migration Service User Guide.</i> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dms/>
### Available Operations

* [AddTagsToResource](#addtagstoresource) - Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [ApplyPendingMaintenanceAction](#applypendingmaintenanceaction) - Applies a pending maintenance action to a resource (for example, to a replication instance).
* [BatchStartRecommendations](#batchstartrecommendations) - <p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
* [CancelReplicationTaskAssessmentRun](#cancelreplicationtaskassessmentrun) - <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
* [CreateEndpoint](#createendpoint) - <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [CreateEventSubscription](#createeventsubscription) - <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
* [CreateFleetAdvisorCollector](#createfleetadvisorcollector) - Creates a Fleet Advisor collector using the specified parameters.
* [CreateReplicationInstance](#createreplicationinstance) - <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
* [CreateReplicationSubnetGroup](#createreplicationsubnetgroup) - <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
* [CreateReplicationTask](#createreplicationtask) - Creates a replication task using the specified parameters.
* [DeleteCertificate](#deletecertificate) - Deletes the specified certificate. 
* [DeleteConnection](#deleteconnection) - Deletes the connection between a replication instance and an endpoint.
* [DeleteEndpoint](#deleteendpoint) - <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
* [DeleteEventSubscription](#deleteeventsubscription) -  Deletes an DMS event subscription. 
* [DeleteFleetAdvisorCollector](#deletefleetadvisorcollector) - Deletes the specified Fleet Advisor collector.
* [DeleteFleetAdvisorDatabases](#deletefleetadvisordatabases) - Deletes the specified Fleet Advisor collector databases.
* [DeleteReplicationInstance](#deletereplicationinstance) - <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
* [DeleteReplicationSubnetGroup](#deletereplicationsubnetgroup) - Deletes a subnet group.
* [DeleteReplicationTask](#deletereplicationtask) - Deletes the specified replication task.
* [DeleteReplicationTaskAssessmentRun](#deletereplicationtaskassessmentrun) - <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
* [DescribeAccountAttributes](#describeaccountattributes) - <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
* [DescribeApplicableIndividualAssessments](#describeapplicableindividualassessments) - <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
* [DescribeCertificates](#describecertificates) - Provides a description of the certificate.
* [DescribeConnections](#describeconnections) - Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
* [DescribeEndpointSettings](#describeendpointsettings) - Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
* [DescribeEndpointTypes](#describeendpointtypes) - Returns information about the type of endpoints available.
* [DescribeEndpoints](#describeendpoints) - Returns information about the endpoints for your account in the current region.
* [DescribeEventCategories](#describeeventcategories) - Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [DescribeEventSubscriptions](#describeeventsubscriptions) - <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
* [DescribeEvents](#describeevents) -  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* [DescribeFleetAdvisorCollectors](#describefleetadvisorcollectors) - Returns a list of the Fleet Advisor collectors in your account.
* [DescribeFleetAdvisorDatabases](#describefleetadvisordatabases) - Returns a list of Fleet Advisor databases in your account.
* [DescribeFleetAdvisorLsaAnalysis](#describefleetadvisorlsaanalysis) - Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 
* [DescribeFleetAdvisorSchemaObjectSummary](#describefleetadvisorschemaobjectsummary) - Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
* [DescribeFleetAdvisorSchemas](#describefleetadvisorschemas) - Returns a list of schemas detected by Fleet Advisor Collectors in your account.
* [DescribeOrderableReplicationInstances](#describeorderablereplicationinstances) - Returns information about the replication instance types that can be created in the specified region.
* [DescribePendingMaintenanceActions](#describependingmaintenanceactions) - For internal use only
* [DescribeRecommendationLimitations](#describerecommendationlimitations) - Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
* [DescribeRecommendations](#describerecommendations) - Returns a paginated list of target engine recommendations for your source databases.
* [DescribeRefreshSchemasStatus](#describerefreshschemasstatus) - Returns the status of the RefreshSchemas operation.
* [DescribeReplicationInstanceTaskLogs](#describereplicationinstancetasklogs) - Returns information about the task logs for the specified task.
* [DescribeReplicationInstances](#describereplicationinstances) - Returns information about replication instances for your account in the current region.
* [DescribeReplicationSubnetGroups](#describereplicationsubnetgroups) - Returns information about the replication subnet groups.
* [DescribeReplicationTaskAssessmentResults](#describereplicationtaskassessmentresults) - <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [DescribeReplicationTaskAssessmentRuns](#describereplicationtaskassessmentruns) - <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
* [DescribeReplicationTaskIndividualAssessments](#describereplicationtaskindividualassessments) - <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
* [DescribeReplicationTasks](#describereplicationtasks) - Returns information about replication tasks for your account in the current region.
* [DescribeSchemas](#describeschemas) - <p>Returns information about the schema for the specified endpoint.</p> <p/>
* [DescribeTableStatistics](#describetablestatistics) - <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
* [ImportCertificate](#importcertificate) - Uploads the specified certificate.
* [ListTagsForResource](#listtagsforresource) - Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [ModifyEndpoint](#modifyendpoint) - <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* [ModifyEventSubscription](#modifyeventsubscription) - Modifies an existing DMS event notification subscription. 
* [ModifyReplicationInstance](#modifyreplicationinstance) - <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
* [ModifyReplicationSubnetGroup](#modifyreplicationsubnetgroup) - Modifies the settings for the specified replication subnet group.
* [ModifyReplicationTask](#modifyreplicationtask) - <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
* [MoveReplicationTask](#movereplicationtask) - Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
* [RebootReplicationInstance](#rebootreplicationinstance) - Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
* [RefreshSchemas](#refreshschemas) - Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
* [ReloadTables](#reloadtables) - <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
* [RemoveTagsFromResource](#removetagsfromresource) - Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* [RunFleetAdvisorLsaAnalysis](#runfleetadvisorlsaanalysis) - Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
* [StartRecommendations](#startrecommendations) - <p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>
* [StartReplicationTask](#startreplicationtask) - <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
* [StartReplicationTaskAssessment](#startreplicationtaskassessment) - <p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>
* [StartReplicationTaskAssessmentRun](#startreplicationtaskassessmentrun) - <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
* [StopReplicationTask](#stopreplicationtask) - Stops the replication task.
* [TestConnection](#testconnection) - Tests the connection between the replication instance and the endpoint.
* [UpdateSubscriptionsToEventBridge](#updatesubscriptionstoeventbridge) - <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

## AddTagsToResource

Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

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
    res, err := s.SDK.AddTagsToResource(ctx, operations.AddTagsToResourceRequest{
        AddTagsToResourceMessage: shared.AddTagsToResourceMessage{
            ResourceArn: "suscipit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("minus"),
                    ResourceArn: sdk.String("placeat"),
                    Value: sdk.String("voluptatum"),
                },
                shared.Tag{
                    Key: sdk.String("iusto"),
                    ResourceArn: sdk.String("excepturi"),
                    Value: sdk.String("nisi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
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

## ApplyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a replication instance).

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
    res, err := s.SDK.ApplyPendingMaintenanceAction(ctx, operations.ApplyPendingMaintenanceActionRequest{
        ApplyPendingMaintenanceActionMessage: shared.ApplyPendingMaintenanceActionMessage{
            ApplyAction: "ipsam",
            OptInType: "repellendus",
            ReplicationInstanceArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.ApplyPendingMaintenanceActionXAmzTargetEnumAmazonDmSv20160101ApplyPendingMaintenanceAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplyPendingMaintenanceActionResponse != nil {
        // handle response
    }
}
```

## BatchStartRecommendations

<p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>

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
    res, err := s.SDK.BatchStartRecommendations(ctx, operations.BatchStartRecommendationsRequest{
        BatchStartRecommendationsRequest: shared.BatchStartRecommendationsRequest{
            Data: []shared.StartRecommendationsRequestEntry{
                shared.StartRecommendationsRequestEntry{
                    DatabaseID: "esse",
                    Settings: shared.RecommendationSettings{
                        InstanceSizingType: "totam",
                        WorkloadType: "porro",
                    },
                },
                shared.StartRecommendationsRequestEntry{
                    DatabaseID: "dolorum",
                    Settings: shared.RecommendationSettings{
                        InstanceSizingType: "dicta",
                        WorkloadType: "nam",
                    },
                },
                shared.StartRecommendationsRequestEntry{
                    DatabaseID: "officia",
                    Settings: shared.RecommendationSettings{
                        InstanceSizingType: "occaecati",
                        WorkloadType: "fugit",
                    },
                },
                shared.StartRecommendationsRequestEntry{
                    DatabaseID: "deleniti",
                    Settings: shared.RecommendationSettings{
                        InstanceSizingType: "hic",
                        WorkloadType: "optio",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.BatchStartRecommendationsXAmzTargetEnumAmazonDmSv20160101BatchStartRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchStartRecommendationsResponse != nil {
        // handle response
    }
}
```

## CancelReplicationTaskAssessmentRun

<p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>

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
    res, err := s.SDK.CancelReplicationTaskAssessmentRun(ctx, operations.CancelReplicationTaskAssessmentRunRequest{
        CancelReplicationTaskAssessmentRunMessage: shared.CancelReplicationTaskAssessmentRunMessage{
            ReplicationTaskAssessmentRunArn: "cum",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CancelReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101CancelReplicationTaskAssessmentRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelReplicationTaskAssessmentRunResponse != nil {
        // handle response
    }
}
```

## CreateEndpoint

<p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

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
    res, err := s.SDK.CreateEndpoint(ctx, operations.CreateEndpointRequest{
        CreateEndpointMessage: shared.CreateEndpointMessage{
            CertificateArn: sdk.String("sed"),
            DatabaseName: sdk.String("iste"),
            DmsTransferSettings: &shared.DmsTransferSettings{
                BucketName: sdk.String("dolor"),
                ServiceAccessRoleArn: sdk.String("natus"),
            },
            DocDbSettings: &shared.DocDbSettings{
                DatabaseName: sdk.String("laboriosam"),
                DocsToInvestigate: sdk.Int64(943749),
                ExtractDocID: sdk.Bool(false),
                KmsKeyID: sdk.String("saepe"),
                NestingLevel: shared.NestingLevelValueEnumOne.ToPointer(),
                Password: sdk.String("in"),
                Port: sdk.Int64(359508),
                SecretsManagerAccessRoleArn: sdk.String("iste"),
                SecretsManagerSecretID: sdk.String("iure"),
                ServerName: sdk.String("saepe"),
                Username: sdk.String("Maxie96"),
            },
            DynamoDbSettings: &shared.DynamoDbSettings{
                ServiceAccessRoleArn: "est",
            },
            ElasticsearchSettings: &shared.ElasticsearchSettings{
                EndpointURI: "mollitia",
                ErrorRetryDuration: sdk.Int64(670638),
                FullLoadErrorPercentage: sdk.Int64(170909),
                ServiceAccessRoleArn: "dolorem",
                UseNewMappingType: sdk.Bool(false),
            },
            EndpointIdentifier: "corporis",
            EndpointType: shared.ReplicationEndpointTypeValueEnumSource,
            EngineName: "nobis",
            ExternalTableDefinition: sdk.String("enim"),
            ExtraConnectionAttributes: sdk.String("omnis"),
            GcpMySQLSettings: &shared.GcpMySQLSettings{
                AfterConnectScript: sdk.String("nemo"),
                CleanSourceMetadataOnMismatch: sdk.Bool(false),
                DatabaseName: sdk.String("minima"),
                EventsPollInterval: sdk.Int64(570197),
                MaxFileSize: sdk.Int64(38425),
                ParallelLoadThreads: sdk.Int64(438601),
                Password: sdk.String("culpa"),
                Port: sdk.Int64(988374),
                SecretsManagerAccessRoleArn: sdk.String("sapiente"),
                SecretsManagerSecretID: sdk.String("architecto"),
                ServerName: sdk.String("mollitia"),
                ServerTimezone: sdk.String("dolorem"),
                TargetDbType: shared.TargetDbTypeEnumMultipleDatabases.ToPointer(),
                Username: sdk.String("Caroline_Ziemann"),
            },
            IBMDb2Settings: &shared.IBMDb2Settings{
                CurrentLsn: sdk.String("numquam"),
                DatabaseName: sdk.String("commodi"),
                MaxKBytesPerRead: sdk.Int64(466311),
                Password: sdk.String("molestiae"),
                Port: sdk.Int64(244425),
                SecretsManagerAccessRoleArn: sdk.String("error"),
                SecretsManagerSecretID: sdk.String("quia"),
                ServerName: sdk.String("quis"),
                SetDataCaptureChanges: sdk.Bool(false),
                Username: sdk.String("Bernie.Padberg"),
            },
            KafkaSettings: &shared.KafkaSettings{
                Broker: sdk.String("odit"),
                IncludeControlDetails: sdk.Bool(false),
                IncludeNullAndEmpty: sdk.Bool(false),
                IncludePartitionValue: sdk.Bool(false),
                IncludeTableAlterOperations: sdk.Bool(false),
                IncludeTransactionDetails: sdk.Bool(false),
                MessageFormat: shared.MessageFormatValueEnumJSONUnformatted.ToPointer(),
                MessageMaxBytes: sdk.Int64(196582),
                NoHexPrefix: sdk.Bool(false),
                PartitionIncludeSchemaTable: sdk.Bool(false),
                SaslMechanism: shared.KafkaSaslMechanismEnumPlain.ToPointer(),
                SaslPassword: sdk.String("ipsam"),
                SaslUsername: sdk.String("id"),
                SecurityProtocol: shared.KafkaSecurityProtocolEnumSaslSsl.ToPointer(),
                SslCaCertificateArn: sdk.String("aut"),
                SslClientCertificateArn: sdk.String("quasi"),
                SslClientKeyArn: sdk.String("error"),
                SslClientKeyPassword: sdk.String("temporibus"),
                Topic: sdk.String("laborum"),
            },
            KinesisSettings: &shared.KinesisSettings{
                IncludeControlDetails: sdk.Bool(false),
                IncludeNullAndEmpty: sdk.Bool(false),
                IncludePartitionValue: sdk.Bool(false),
                IncludeTableAlterOperations: sdk.Bool(false),
                IncludeTransactionDetails: sdk.Bool(false),
                MessageFormat: shared.MessageFormatValueEnumJSON.ToPointer(),
                NoHexPrefix: sdk.Bool(false),
                PartitionIncludeSchemaTable: sdk.Bool(false),
                ServiceAccessRoleArn: sdk.String("reiciendis"),
                StreamArn: sdk.String("voluptatibus"),
            },
            KmsKeyID: sdk.String("vero"),
            MicrosoftSQLServerSettings: &shared.MicrosoftSQLServerSettings{
                BcpPacketSize: sdk.Int64(468651),
                ControlTablesFileGroup: sdk.String("praesentium"),
                DatabaseName: sdk.String("voluptatibus"),
                ForceLobLookup: sdk.Bool(false),
                Password: sdk.String("ipsa"),
                Port: sdk.Int64(604846),
                QuerySingleAlwaysOnNode: sdk.Bool(false),
                ReadBackupOnly: sdk.Bool(false),
                SafeguardPolicy: shared.SafeguardPolicyEnumExclusiveAutomaticTruncation.ToPointer(),
                SecretsManagerAccessRoleArn: sdk.String("cum"),
                SecretsManagerSecretID: sdk.String("perferendis"),
                ServerName: sdk.String("doloremque"),
                TlogAccessMode: shared.TlogAccessModeEnumPreferBackup.ToPointer(),
                TrimSpaceInChar: sdk.Bool(false),
                UseBcpFullLoad: sdk.Bool(false),
                UseThirdPartyBackupDevice: sdk.Bool(false),
                Username: sdk.String("Easter35"),
            },
            MongoDbSettings: &shared.MongoDbSettings{
                AuthMechanism: shared.AuthMechanismValueEnumDefault.ToPointer(),
                AuthSource: sdk.String("iusto"),
                AuthType: shared.AuthTypeValueEnumNo.ToPointer(),
                DatabaseName: sdk.String("harum"),
                DocsToInvestigate: sdk.String("enim"),
                ExtractDocID: sdk.String("accusamus"),
                KmsKeyID: sdk.String("commodi"),
                NestingLevel: shared.NestingLevelValueEnumOne.ToPointer(),
                Password: sdk.String("quae"),
                Port: sdk.Int64(216822),
                SecretsManagerAccessRoleArn: sdk.String("quidem"),
                SecretsManagerSecretID: sdk.String("molestias"),
                ServerName: sdk.String("excepturi"),
                Username: sdk.String("Samantha_Gleason"),
            },
            MySQLSettings: &shared.MySQLSettings{
                AfterConnectScript: sdk.String("voluptates"),
                CleanSourceMetadataOnMismatch: sdk.Bool(false),
                DatabaseName: sdk.String("quasi"),
                EventsPollInterval: sdk.Int64(921158),
                MaxFileSize: sdk.Int64(575947),
                ParallelLoadThreads: sdk.Int64(83112),
                Password: sdk.String("itaque"),
                Port: sdk.Int64(277718),
                SecretsManagerAccessRoleArn: sdk.String("enim"),
                SecretsManagerSecretID: sdk.String("consequatur"),
                ServerName: sdk.String("est"),
                ServerTimezone: sdk.String("quibusdam"),
                TargetDbType: shared.TargetDbTypeEnumSpecificDatabase.ToPointer(),
                Username: sdk.String("Luther.Rau26"),
            },
            NeptuneSettings: &shared.NeptuneSettings{
                ErrorRetryDuration: sdk.Int64(183191),
                IamAuthEnabled: sdk.Bool(false),
                MaxFileSize: sdk.Int64(397821),
                MaxRetryCount: sdk.Int64(586513),
                S3BucketFolder: "quos",
                S3BucketName: "perferendis",
                ServiceAccessRoleArn: sdk.String("magni"),
            },
            OracleSettings: &shared.OracleSettings{
                AccessAlternateDirectly: sdk.Bool(false),
                AddSupplementalLogging: sdk.Bool(false),
                AdditionalArchivedLogDestID: sdk.Int64(828940),
                AllowSelectNestedTables: sdk.Bool(false),
                ArchivedLogDestID: sdk.Int64(369808),
                ArchivedLogsOnly: sdk.Bool(false),
                AsmPassword: sdk.String("alias"),
                AsmServer: sdk.String("fugit"),
                AsmUser: sdk.String("dolorum"),
                CharLengthSemantics: shared.CharLengthSemanticsEnumChar.ToPointer(),
                ConvertTimestampWithZoneToUTC: sdk.Bool(false),
                DatabaseName: sdk.String("tempora"),
                DirectPathNoLog: sdk.Bool(false),
                DirectPathParallelLoad: sdk.Bool(false),
                EnableHomogenousTablespace: sdk.Bool(false),
                ExtraArchivedLogDestIds: []int64{
                    735194,
                    288476,
                    962189,
                },
                FailTasksOnLobTruncation: sdk.Bool(false),
                NumberDatatypeScale: sdk.Int64(433288),
                OraclePathPrefix: sdk.String("non"),
                ParallelAsmReadThreads: sdk.Int64(756107),
                Password: sdk.String("sint"),
                Port: sdk.Int64(396098),
                ReadAheadBlocks: sdk.Int64(592042),
                ReadTableSpaceName: sdk.Bool(false),
                ReplacePathPrefix: sdk.Bool(false),
                RetryInterval: sdk.Int64(896039),
                SecretsManagerAccessRoleArn: sdk.String("sint"),
                SecretsManagerOracleAsmAccessRoleArn: sdk.String("officia"),
                SecretsManagerOracleAsmSecretID: sdk.String("dolor"),
                SecretsManagerSecretID: sdk.String("debitis"),
                SecurityDbEncryption: sdk.String("a"),
                SecurityDbEncryptionName: sdk.String("dolorum"),
                ServerName: sdk.String("in"),
                SpatialDataOptionToGeoJSONFunctionName: sdk.String("in"),
                StandbyDelayTime: sdk.Int64(846409),
                TrimSpaceInChar: sdk.Bool(false),
                UseAlternateFolderForOnline: sdk.Bool(false),
                UseBFile: sdk.Bool(false),
                UseDirectPathFullLoad: sdk.Bool(false),
                UseLogminerReader: sdk.Bool(false),
                UsePathPrefix: sdk.String("maiores"),
                Username: sdk.String("Maximo76"),
            },
            Password: sdk.String("facere"),
            Port: sdk.Int64(411820),
            PostgreSQLSettings: &shared.PostgreSQLSettings{
                AfterConnectScript: sdk.String("aliquid"),
                CaptureDdls: sdk.Bool(false),
                DatabaseName: sdk.String("laborum"),
                DdlArtifactsSchema: sdk.String("accusamus"),
                ExecuteTimeout: sdk.Int64(249796),
                FailTasksOnLobTruncation: sdk.Bool(false),
                HeartbeatEnable: sdk.Bool(false),
                HeartbeatFrequency: sdk.Int64(581273),
                HeartbeatSchema: sdk.String("enim"),
                MapBooleanAsBoolean: sdk.Bool(false),
                MaxFileSize: sdk.Int64(881736),
                Password: sdk.String("delectus"),
                PluginName: shared.PluginNameValueEnumPglogical.ToPointer(),
                Port: sdk.Int64(588465),
                SecretsManagerAccessRoleArn: sdk.String("nam"),
                SecretsManagerSecretID: sdk.String("id"),
                ServerName: sdk.String("blanditiis"),
                SlotName: sdk.String("deleniti"),
                TrimSpaceInChar: sdk.Bool(false),
                Username: sdk.String("Verlie.Feeney"),
            },
            RedisSettings: &shared.RedisSettings{
                AuthPassword: sdk.String("vel"),
                AuthType: shared.RedisAuthTypeValueEnumAuthRole.ToPointer(),
                AuthUserName: sdk.String("omnis"),
                Port: 474867,
                ServerName: "perferendis",
                SslCaCertificateArn: sdk.String("nihil"),
                SslSecurityProtocol: shared.SslSecurityProtocolValueEnumPlaintext.ToPointer(),
            },
            RedshiftSettings: &shared.RedshiftSettings{
                AcceptAnyDate: sdk.Bool(false),
                AfterConnectScript: sdk.String("distinctio"),
                BucketFolder: sdk.String("id"),
                BucketName: sdk.String("labore"),
                CaseSensitiveNames: sdk.Bool(false),
                CompUpdate: sdk.Bool(false),
                ConnectionTimeout: sdk.Int64(290077),
                DatabaseName: sdk.String("suscipit"),
                DateFormat: sdk.String("natus"),
                EmptyAsNull: sdk.Bool(false),
                EncryptionMode: shared.EncryptionModeValueEnumSseKms.ToPointer(),
                ExplicitIds: sdk.Bool(false),
                FileTransferUploadStreams: sdk.Int64(428769),
                LoadTimeout: sdk.Int64(878453),
                MapBooleanAsBoolean: sdk.Bool(false),
                MaxFileSize: sdk.Int64(135474),
                Password: sdk.String("architecto"),
                Port: sdk.Int64(298282),
                RemoveQuotes: sdk.Bool(false),
                ReplaceChars: sdk.String("et"),
                ReplaceInvalidChars: sdk.String("excepturi"),
                SecretsManagerAccessRoleArn: sdk.String("ullam"),
                SecretsManagerSecretID: sdk.String("provident"),
                ServerName: sdk.String("quos"),
                ServerSideEncryptionKmsKeyID: sdk.String("sint"),
                ServiceAccessRoleArn: sdk.String("accusantium"),
                TimeFormat: sdk.String("mollitia"),
                TrimBlanks: sdk.Bool(false),
                TruncateColumns: sdk.Bool(false),
                Username: sdk.String("Vivienne43"),
                WriteBufferSize: sdk.Int64(221262),
            },
            ResourceIdentifier: sdk.String("necessitatibus"),
            S3Settings: &shared.S3Settings{
                AddColumnName: sdk.Bool(false),
                AddTrailingPaddingCharacter: sdk.Bool(false),
                BucketFolder: sdk.String("odit"),
                BucketName: sdk.String("nemo"),
                CannedACLForObjects: shared.CannedACLForObjectsValueEnumNone.ToPointer(),
                CdcInsertsAndUpdates: sdk.Bool(false),
                CdcInsertsOnly: sdk.Bool(false),
                CdcMaxBatchInterval: sdk.Int64(435865),
                CdcMinFileSize: sdk.Int64(984043),
                CdcPath: sdk.String("debitis"),
                CompressionType: shared.CompressionTypeValueEnumNone.ToPointer(),
                CsvDelimiter: sdk.String("maxime"),
                CsvNoSupValue: sdk.String("deleniti"),
                CsvNullValue: sdk.String("facilis"),
                CsvRowDelimiter: sdk.String("in"),
                DataFormat: shared.DataFormatValueEnumCsv.ToPointer(),
                DataPageSize: sdk.Int64(99569),
                DatePartitionDelimiter: shared.DatePartitionDelimiterValueEnumNone.ToPointer(),
                DatePartitionEnabled: sdk.Bool(false),
                DatePartitionSequence: shared.DatePartitionSequenceValueEnumYyyymmddhh.ToPointer(),
                DatePartitionTimezone: sdk.String("expedita"),
                DictPageSizeLimit: sdk.Int64(469249),
                EnableStatistics: sdk.Bool(false),
                EncodingType: shared.EncodingTypeValueEnumRleDictionary.ToPointer(),
                EncryptionMode: shared.EncryptionModeValueEnumSseKms.ToPointer(),
                ExpectedBucketOwner: sdk.String("sed"),
                ExternalTableDefinition: sdk.String("saepe"),
                GlueCatalogGeneration: sdk.Bool(false),
                IgnoreHeaderRows: sdk.Int64(868126),
                IncludeOpForFullLoad: sdk.Bool(false),
                MaxFileSize: sdk.Int64(37559),
                ParquetTimestampInMillisecond: sdk.Bool(false),
                ParquetVersion: shared.ParquetVersionValueEnumParquet10.ToPointer(),
                PreserveTransactions: sdk.Bool(false),
                Rfc4180: sdk.Bool(false),
                RowGroupLength: sdk.Int64(508315),
                ServerSideEncryptionKmsKeyID: sdk.String("natus"),
                ServiceAccessRoleArn: sdk.String("magni"),
                TimestampColumnName: sdk.String("sunt"),
                UseCsvNoSupValue: sdk.Bool(false),
                UseTaskStartTimeForFullLoadTimestamp: sdk.Bool(false),
            },
            ServerName: sdk.String("quo"),
            ServiceAccessRoleArn: sdk.String("illum"),
            SslMode: shared.DmsSslModeValueEnumVerifyFull.ToPointer(),
            SybaseSettings: &shared.SybaseSettings{
                DatabaseName: sdk.String("maxime"),
                Password: sdk.String("ea"),
                Port: sdk.Int64(569101),
                SecretsManagerAccessRoleArn: sdk.String("odit"),
                SecretsManagerSecretID: sdk.String("ea"),
                ServerName: sdk.String("accusantium"),
                Username: sdk.String("Annie.Wunsch45"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nam"),
                    ResourceArn: sdk.String("eaque"),
                    Value: sdk.String("pariatur"),
                },
                shared.Tag{
                    Key: sdk.String("nemo"),
                    ResourceArn: sdk.String("voluptatibus"),
                    Value: sdk.String("perferendis"),
                },
            },
            Username: sdk.String("Russ76"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreateEndpointXAmzTargetEnumAmazonDmSv20160101CreateEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointResponse != nil {
        // handle response
    }
}
```

## CreateEventSubscription

<p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>

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
    res, err := s.SDK.CreateEventSubscription(ctx, operations.CreateEventSubscriptionRequest{
        CreateEventSubscriptionMessage: shared.CreateEventSubscriptionMessage{
            Enabled: sdk.Bool(false),
            EventCategories: []string{
                "eaque",
                "quis",
            },
            SnsTopicArn: "nesciunt",
            SourceIds: []string{
                "perferendis",
            },
            SourceType: sdk.String("dolores"),
            SubscriptionName: "minus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("dolor"),
                    ResourceArn: sdk.String("vero"),
                    Value: sdk.String("nostrum"),
                },
                shared.Tag{
                    Key: sdk.String("hic"),
                    ResourceArn: sdk.String("recusandae"),
                    Value: sdk.String("omnis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateEventSubscriptionXAmzTargetEnumAmazonDmSv20160101CreateEventSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventSubscriptionResponse != nil {
        // handle response
    }
}
```

## CreateFleetAdvisorCollector

Creates a Fleet Advisor collector using the specified parameters.

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
    res, err := s.SDK.CreateFleetAdvisorCollector(ctx, operations.CreateFleetAdvisorCollectorRequest{
        CreateFleetAdvisorCollectorRequest: shared.CreateFleetAdvisorCollectorRequest{
            CollectorName: "eaque",
            Description: sdk.String("occaecati"),
            S3BucketName: "rerum",
            ServiceAccessRoleArn: "adipisci",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.CreateFleetAdvisorCollectorXAmzTargetEnumAmazonDmSv20160101CreateFleetAdvisorCollector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetAdvisorCollectorResponse != nil {
        // handle response
    }
}
```

## CreateReplicationInstance

<p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>

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
    res, err := s.SDK.CreateReplicationInstance(ctx, operations.CreateReplicationInstanceRequest{
        CreateReplicationInstanceMessage: shared.CreateReplicationInstanceMessage{
            AllocatedStorage: sdk.Int64(589910),
            AutoMinorVersionUpgrade: sdk.Bool(false),
            AvailabilityZone: sdk.String("nobis"),
            DNSNameServers: sdk.String("libero"),
            EngineVersion: sdk.String("delectus"),
            KmsKeyID: sdk.String("quaerat"),
            MultiAZ: sdk.Bool(false),
            NetworkType: sdk.String("quos"),
            PreferredMaintenanceWindow: sdk.String("aliquid"),
            PubliclyAccessible: sdk.Bool(false),
            ReplicationInstanceClass: "dolorem",
            ReplicationInstanceIdentifier: "dolorem",
            ReplicationSubnetGroupIdentifier: sdk.String("dolor"),
            ResourceIdentifier: sdk.String("qui"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("hic"),
                    ResourceArn: sdk.String("excepturi"),
                    Value: sdk.String("cum"),
                },
            },
            VpcSecurityGroupIds: []string{
                "dignissimos",
                "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateReplicationInstanceXAmzTargetEnumAmazonDmSv20160101CreateReplicationInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationInstanceResponse != nil {
        // handle response
    }
}
```

## CreateReplicationSubnetGroup

<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>

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
    res, err := s.SDK.CreateReplicationSubnetGroup(ctx, operations.CreateReplicationSubnetGroupRequest{
        CreateReplicationSubnetGroupMessage: shared.CreateReplicationSubnetGroupMessage{
            ReplicationSubnetGroupDescription: "odio",
            ReplicationSubnetGroupIdentifier: "quaerat",
            SubnetIds: []string{
                "quidem",
                "voluptatibus",
                "voluptas",
                "natus",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("atque"),
                    ResourceArn: sdk.String("sit"),
                    Value: sdk.String("fugiat"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101CreateReplicationSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSubnetGroupResponse != nil {
        // handle response
    }
}
```

## CreateReplicationTask

Creates a replication task using the specified parameters.

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
    res, err := s.SDK.CreateReplicationTask(ctx, operations.CreateReplicationTaskRequest{
        CreateReplicationTaskMessage: shared.CreateReplicationTaskMessage{
            CdcStartPosition: sdk.String("omnis"),
            CdcStartTime: types.MustTimeFromString("2020-11-09T09:45:52.295Z"),
            CdcStopPosition: sdk.String("asperiores"),
            MigrationType: shared.MigrationTypeValueEnumCdc,
            ReplicationInstanceArn: "ipsum",
            ReplicationTaskIdentifier: "voluptate",
            ReplicationTaskSettings: sdk.String("id"),
            ResourceIdentifier: sdk.String("saepe"),
            SourceEndpointArn: "eius",
            TableMappings: "aspernatur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("amet"),
                    ResourceArn: sdk.String("optio"),
                    Value: sdk.String("accusamus"),
                },
            },
            TargetEndpointArn: "ad",
            TaskData: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.CreateReplicationTaskXAmzTargetEnumAmazonDmSv20160101CreateReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationTaskResponse != nil {
        // handle response
    }
}
```

## DeleteCertificate

Deletes the specified certificate. 

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
    res, err := s.SDK.DeleteCertificate(ctx, operations.DeleteCertificateRequest{
        DeleteCertificateMessage: shared.DeleteCertificateMessage{
            CertificateArn: "alias",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DeleteCertificateXAmzTargetEnumAmazonDmSv20160101DeleteCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCertificateResponse != nil {
        // handle response
    }
}
```

## DeleteConnection

Deletes the connection between a replication instance and an endpoint.

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
    res, err := s.SDK.DeleteConnection(ctx, operations.DeleteConnectionRequest{
        DeleteConnectionMessage: shared.DeleteConnectionMessage{
            EndpointArn: "dolorum",
            ReplicationInstanceArn: "a",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DeleteConnectionXAmzTargetEnumAmazonDmSv20160101DeleteConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectionResponse != nil {
        // handle response
    }
}
```

## DeleteEndpoint

<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>

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
    res, err := s.SDK.DeleteEndpoint(ctx, operations.DeleteEndpointRequest{
        DeleteEndpointMessage: shared.DeleteEndpointMessage{
            EndpointArn: "tempore",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DeleteEndpointXAmzTargetEnumAmazonDmSv20160101DeleteEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEndpointResponse != nil {
        // handle response
    }
}
```

## DeleteEventSubscription

 Deletes an DMS event subscription. 

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
    res, err := s.SDK.DeleteEventSubscription(ctx, operations.DeleteEventSubscriptionRequest{
        DeleteEventSubscriptionMessage: shared.DeleteEventSubscriptionMessage{
            SubscriptionName: "sit",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteEventSubscriptionXAmzTargetEnumAmazonDmSv20160101DeleteEventSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEventSubscriptionResponse != nil {
        // handle response
    }
}
```

## DeleteFleetAdvisorCollector

Deletes the specified Fleet Advisor collector.

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
    res, err := s.SDK.DeleteFleetAdvisorCollector(ctx, operations.DeleteFleetAdvisorCollectorRequest{
        DeleteCollectorRequest: shared.DeleteCollectorRequest{
            CollectorReferencedID: "quam",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DeleteFleetAdvisorCollectorXAmzTargetEnumAmazonDmSv20160101DeleteFleetAdvisorCollector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFleetAdvisorDatabases

Deletes the specified Fleet Advisor collector databases.

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
    res, err := s.SDK.DeleteFleetAdvisorDatabases(ctx, operations.DeleteFleetAdvisorDatabasesRequest{
        DeleteFleetAdvisorDatabasesRequest: shared.DeleteFleetAdvisorDatabasesRequest{
            DatabaseIds: []string{
                "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteFleetAdvisorDatabasesXAmzTargetEnumAmazonDmSv20160101DeleteFleetAdvisorDatabases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFleetAdvisorDatabasesResponse != nil {
        // handle response
    }
}
```

## DeleteReplicationInstance

<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>

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
    res, err := s.SDK.DeleteReplicationInstance(ctx, operations.DeleteReplicationInstanceRequest{
        DeleteReplicationInstanceMessage: shared.DeleteReplicationInstanceMessage{
            ReplicationInstanceArn: "quam",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DeleteReplicationInstanceXAmzTargetEnumAmazonDmSv20160101DeleteReplicationInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationInstanceResponse != nil {
        // handle response
    }
}
```

## DeleteReplicationSubnetGroup

Deletes a subnet group.

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
    res, err := s.SDK.DeleteReplicationSubnetGroup(ctx, operations.DeleteReplicationSubnetGroupRequest{
        DeleteReplicationSubnetGroupMessage: shared.DeleteReplicationSubnetGroupMessage{
            ReplicationSubnetGroupIdentifier: "sunt",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DeleteReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101DeleteReplicationSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationSubnetGroupResponse != nil {
        // handle response
    }
}
```

## DeleteReplicationTask

Deletes the specified replication task.

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
    res, err := s.SDK.DeleteReplicationTask(ctx, operations.DeleteReplicationTaskRequest{
        DeleteReplicationTaskMessage: shared.DeleteReplicationTaskMessage{
            ReplicationTaskArn: "et",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.DeleteReplicationTaskXAmzTargetEnumAmazonDmSv20160101DeleteReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationTaskResponse != nil {
        // handle response
    }
}
```

## DeleteReplicationTaskAssessmentRun

<p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>

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
    res, err := s.SDK.DeleteReplicationTaskAssessmentRun(ctx, operations.DeleteReplicationTaskAssessmentRunRequest{
        DeleteReplicationTaskAssessmentRunMessage: shared.DeleteReplicationTaskAssessmentRunMessage{
            ReplicationTaskAssessmentRunArn: "aperiam",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DeleteReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101DeleteReplicationTaskAssessmentRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationTaskAssessmentRunResponse != nil {
        // handle response
    }
}
```

## DescribeAccountAttributes

<p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>

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
    res, err := s.SDK.DescribeAccountAttributes(ctx, operations.DescribeAccountAttributesRequest{
        RequestBody: map[string]interface{}{
            "aut": "quas",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.DescribeAccountAttributesXAmzTargetEnumAmazonDmSv20160101DescribeAccountAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountAttributesResponse != nil {
        // handle response
    }
}
```

## DescribeApplicableIndividualAssessments

<p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>

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
    res, err := s.SDK.DescribeApplicableIndividualAssessments(ctx, operations.DescribeApplicableIndividualAssessmentsRequest{
        DescribeApplicableIndividualAssessmentsMessage: shared.DescribeApplicableIndividualAssessmentsMessage{
            Marker: sdk.String("facilis"),
            MaxRecords: sdk.Int64(586410),
            MigrationType: shared.MigrationTypeValueEnumFullLoad.ToPointer(),
            ReplicationInstanceArn: sdk.String("quae"),
            ReplicationTaskArn: sdk.String("laudantium"),
            SourceEngineName: sdk.String("odio"),
            TargetEngineName: sdk.String("occaecati"),
        },
        Marker: sdk.String("voluptatibus"),
        MaxRecords: sdk.String("quisquam"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DescribeApplicableIndividualAssessmentsXAmzTargetEnumAmazonDmSv20160101DescribeApplicableIndividualAssessments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicableIndividualAssessmentsResponse != nil {
        // handle response
    }
}
```

## DescribeCertificates

Provides a description of the certificate.

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
    res, err := s.SDK.DescribeCertificates(ctx, operations.DescribeCertificatesRequest{
        DescribeCertificatesMessage: shared.DescribeCertificatesMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Julio Weissnat",
                    Values: []string{
                        "similique",
                        "facilis",
                    },
                },
                shared.Filter{
                    Name: "Allan Greenholt",
                    Values: []string{
                        "natus",
                    },
                },
                shared.Filter{
                    Name: "Richard Wiza",
                    Values: []string{
                        "porro",
                    },
                },
                shared.Filter{
                    Name: "Domingo Kris",
                    Values: []string{
                        "officia",
                    },
                },
            },
            Marker: sdk.String("tempora"),
            MaxRecords: sdk.Int64(368584),
        },
        Marker: sdk.String("ea"),
        MaxRecords: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeCertificatesXAmzTargetEnumAmazonDmSv20160101DescribeCertificates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificatesResponse != nil {
        // handle response
    }
}
```

## DescribeConnections

Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.

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
    res, err := s.SDK.DescribeConnections(ctx, operations.DescribeConnectionsRequest{
        DescribeConnectionsMessage: shared.DescribeConnectionsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Ryan Jaskolski",
                    Values: []string{
                        "nostrum",
                        "sapiente",
                        "quisquam",
                        "saepe",
                    },
                },
            },
            Marker: sdk.String("ea"),
            MaxRecords: sdk.Int64(774048),
        },
        Marker: sdk.String("corporis"),
        MaxRecords: sdk.String("veniam"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.DescribeConnectionsXAmzTargetEnumAmazonDmSv20160101DescribeConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectionsResponse != nil {
        // handle response
    }
}
```

## DescribeEndpointSettings

Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.

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
    res, err := s.SDK.DescribeEndpointSettings(ctx, operations.DescribeEndpointSettingsRequest{
        DescribeEndpointSettingsMessage: shared.DescribeEndpointSettingsMessage{
            EngineName: "aspernatur",
            Marker: sdk.String("minima"),
            MaxRecords: sdk.Int64(53427),
        },
        Marker: sdk.String("a"),
        MaxRecords: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DescribeEndpointSettingsXAmzTargetEnumAmazonDmSv20160101DescribeEndpointSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointSettingsResponse != nil {
        // handle response
    }
}
```

## DescribeEndpointTypes

Returns information about the type of endpoints available.

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
    res, err := s.SDK.DescribeEndpointTypes(ctx, operations.DescribeEndpointTypesRequest{
        DescribeEndpointTypesMessage: shared.DescribeEndpointTypesMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Janet Pagac",
                    Values: []string{
                        "eum",
                    },
                },
            },
            Marker: sdk.String("autem"),
            MaxRecords: sdk.Int64(752135),
        },
        Marker: sdk.String("quas"),
        MaxRecords: sdk.String("assumenda"),
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeEndpointTypesXAmzTargetEnumAmazonDmSv20160101DescribeEndpointTypes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointTypesResponse != nil {
        // handle response
    }
}
```

## DescribeEndpoints

Returns information about the endpoints for your account in the current region.

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
    res, err := s.SDK.DescribeEndpoints(ctx, operations.DescribeEndpointsRequest{
        DescribeEndpointsMessage: shared.DescribeEndpointsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Minnie Gutkowski",
                    Values: []string{
                        "esse",
                        "rem",
                    },
                },
                shared.Filter{
                    Name: "Mitchell Predovic",
                    Values: []string{
                        "suscipit",
                        "assumenda",
                    },
                },
                shared.Filter{
                    Name: "Mr. Irma Schaefer",
                    Values: []string{
                        "neque",
                        "quo",
                        "illum",
                    },
                },
            },
            Marker: sdk.String("quo"),
            MaxRecords: sdk.Int64(681359),
        },
        Marker: sdk.String("eius"),
        MaxRecords: sdk.String("eos"),
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DescribeEndpointsXAmzTargetEnumAmazonDmSv20160101DescribeEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointsResponse != nil {
        // handle response
    }
}
```

## DescribeEventCategories

Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

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
    res, err := s.SDK.DescribeEventCategories(ctx, operations.DescribeEventCategoriesRequest{
        DescribeEventCategoriesMessage: shared.DescribeEventCategoriesMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Angelica Koelpin MD",
                    Values: []string{
                        "dignissimos",
                        "inventore",
                        "nihil",
                        "totam",
                    },
                },
            },
            SourceType: sdk.String("accusamus"),
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeEventCategoriesXAmzTargetEnumAmazonDmSv20160101DescribeEventCategories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventCategoriesResponse != nil {
        // handle response
    }
}
```

## DescribeEventSubscriptions

<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>

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
    res, err := s.SDK.DescribeEventSubscriptions(ctx, operations.DescribeEventSubscriptionsRequest{
        DescribeEventSubscriptionsMessage: shared.DescribeEventSubscriptionsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Robyn Keeling",
                    Values: []string{
                        "deleniti",
                    },
                },
                shared.Filter{
                    Name: "Lee O'Conner",
                    Values: []string{
                        "minima",
                    },
                },
            },
            Marker: sdk.String("nisi"),
            MaxRecords: sdk.Int64(147014),
            SubscriptionName: sdk.String("sapiente"),
        },
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.String("ratione"),
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.DescribeEventSubscriptionsXAmzTargetEnumAmazonDmSv20160101DescribeEventSubscriptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventSubscriptionsResponse != nil {
        // handle response
    }
}
```

## DescribeEvents

 Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

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
    res, err := s.SDK.DescribeEvents(ctx, operations.DescribeEventsRequest{
        DescribeEventsMessage: shared.DescribeEventsMessage{
            Duration: sdk.Int64(882042),
            EndTime: types.MustTimeFromString("2022-07-17T14:37:45.086Z"),
            EventCategories: []string{
                "nam",
                "vero",
                "aliquid",
                "quasi",
            },
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Opal Kozey",
                    Values: []string{
                        "distinctio",
                        "eligendi",
                    },
                },
                shared.Filter{
                    Name: "Kristi Renner",
                    Values: []string{
                        "consequatur",
                    },
                },
                shared.Filter{
                    Name: "Calvin Williamson",
                    Values: []string{
                        "provident",
                        "a",
                        "nulla",
                    },
                },
                shared.Filter{
                    Name: "Cory Boyle",
                    Values: []string{
                        "pariatur",
                        "possimus",
                        "quia",
                    },
                },
            },
            Marker: sdk.String("eveniet"),
            MaxRecords: sdk.Int64(992430),
            SourceIdentifier: sdk.String("facere"),
            SourceType: shared.SourceTypeEnumReplicationInstance.ToPointer(),
            StartTime: types.MustTimeFromString("2022-11-03T19:31:44.626Z"),
        },
        Marker: sdk.String("quasi"),
        MaxRecords: sdk.String("similique"),
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeEventsXAmzTargetEnumAmazonDmSv20160101DescribeEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventsResponse != nil {
        // handle response
    }
}
```

## DescribeFleetAdvisorCollectors

Returns a list of the Fleet Advisor collectors in your account.

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
    res, err := s.SDK.DescribeFleetAdvisorCollectors(ctx, operations.DescribeFleetAdvisorCollectorsRequest{
        DescribeFleetAdvisorCollectorsRequest: shared.DescribeFleetAdvisorCollectorsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Mrs. Gilberto Roberts",
                    Values: []string{
                        "ullam",
                    },
                },
                shared.Filter{
                    Name: "Ms. Dana Huel",
                    Values: []string{
                        "ex",
                        "deleniti",
                        "itaque",
                        "dolorum",
                    },
                },
            },
            MaxRecords: sdk.Int64(99615),
            NextToken: sdk.String("omnis"),
        },
        MaxRecords: sdk.String("tenetur"),
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DescribeFleetAdvisorCollectorsXAmzTargetEnumAmazonDmSv20160101DescribeFleetAdvisorCollectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAdvisorCollectorsResponse != nil {
        // handle response
    }
}
```

## DescribeFleetAdvisorDatabases

Returns a list of Fleet Advisor databases in your account.

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
    res, err := s.SDK.DescribeFleetAdvisorDatabases(ctx, operations.DescribeFleetAdvisorDatabasesRequest{
        DescribeFleetAdvisorDatabasesRequest: shared.DescribeFleetAdvisorDatabasesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Lionel Bartoletti IV",
                    Values: []string{
                        "mollitia",
                        "ab",
                    },
                },
            },
            MaxRecords: sdk.Int64(544591),
            NextToken: sdk.String("non"),
        },
        MaxRecords: sdk.String("voluptatem"),
        NextToken: sdk.String("dolor"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeFleetAdvisorDatabasesXAmzTargetEnumAmazonDmSv20160101DescribeFleetAdvisorDatabases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAdvisorDatabasesResponse != nil {
        // handle response
    }
}
```

## DescribeFleetAdvisorLsaAnalysis

Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 

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
    res, err := s.SDK.DescribeFleetAdvisorLsaAnalysis(ctx, operations.DescribeFleetAdvisorLsaAnalysisRequest{
        DescribeFleetAdvisorLsaAnalysisRequest: shared.DescribeFleetAdvisorLsaAnalysisRequest{
            MaxRecords: sdk.Int64(115484),
            NextToken: sdk.String("maiores"),
        },
        MaxRecords: sdk.String("natus"),
        NextToken: sdk.String("velit"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.DescribeFleetAdvisorLsaAnalysisXAmzTargetEnumAmazonDmSv20160101DescribeFleetAdvisorLsaAnalysis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAdvisorLsaAnalysisResponse != nil {
        // handle response
    }
}
```

## DescribeFleetAdvisorSchemaObjectSummary

Provides descriptions of the schemas discovered by your Fleet Advisor collectors.

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
    res, err := s.SDK.DescribeFleetAdvisorSchemaObjectSummary(ctx, operations.DescribeFleetAdvisorSchemaObjectSummaryRequest{
        DescribeFleetAdvisorSchemaObjectSummaryRequest: shared.DescribeFleetAdvisorSchemaObjectSummaryRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Simon Kuhn",
                    Values: []string{
                        "quae",
                        "quaerat",
                    },
                },
                shared.Filter{
                    Name: "Mrs. Forrest Green",
                    Values: []string{
                        "suscipit",
                        "velit",
                        "culpa",
                    },
                },
                shared.Filter{
                    Name: "Clay Larson",
                    Values: []string{
                        "quos",
                        "vel",
                    },
                },
                shared.Filter{
                    Name: "Elena Quigley",
                    Values: []string{
                        "corporis",
                        "reiciendis",
                    },
                },
            },
            MaxRecords: sdk.Int64(828657),
            NextToken: sdk.String("nemo"),
        },
        MaxRecords: sdk.String("recusandae"),
        NextToken: sdk.String("aliquid"),
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnumAmazonDmSv20160101DescribeFleetAdvisorSchemaObjectSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAdvisorSchemaObjectSummaryResponse != nil {
        // handle response
    }
}
```

## DescribeFleetAdvisorSchemas

Returns a list of schemas detected by Fleet Advisor Collectors in your account.

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
    res, err := s.SDK.DescribeFleetAdvisorSchemas(ctx, operations.DescribeFleetAdvisorSchemasRequest{
        DescribeFleetAdvisorSchemasRequest: shared.DescribeFleetAdvisorSchemasRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Ricardo Wisozk",
                    Values: []string{
                        "dolore",
                        "sunt",
                        "asperiores",
                        "adipisci",
                    },
                },
                shared.Filter{
                    Name: "Wendy Breitenberg",
                    Values: []string{
                        "consectetur",
                        "corporis",
                        "harum",
                        "laboriosam",
                    },
                },
            },
            MaxRecords: sdk.Int64(58356),
            NextToken: sdk.String("voluptates"),
        },
        MaxRecords: sdk.String("libero"),
        NextToken: sdk.String("vitae"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DescribeFleetAdvisorSchemasXAmzTargetEnumAmazonDmSv20160101DescribeFleetAdvisorSchemas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetAdvisorSchemasResponse != nil {
        // handle response
    }
}
```

## DescribeOrderableReplicationInstances

Returns information about the replication instance types that can be created in the specified region.

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
    res, err := s.SDK.DescribeOrderableReplicationInstances(ctx, operations.DescribeOrderableReplicationInstancesRequest{
        DescribeOrderableReplicationInstancesMessage: shared.DescribeOrderableReplicationInstancesMessage{
            Marker: sdk.String("minima"),
            MaxRecords: sdk.Int64(748789),
        },
        Marker: sdk.String("dolorum"),
        MaxRecords: sdk.String("adipisci"),
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.DescribeOrderableReplicationInstancesXAmzTargetEnumAmazonDmSv20160101DescribeOrderableReplicationInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrderableReplicationInstancesResponse != nil {
        // handle response
    }
}
```

## DescribePendingMaintenanceActions

For internal use only

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
    res, err := s.SDK.DescribePendingMaintenanceActions(ctx, operations.DescribePendingMaintenanceActionsRequest{
        DescribePendingMaintenanceActionsMessage: shared.DescribePendingMaintenanceActionsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Sherry Ritchie",
                    Values: []string{
                        "nesciunt",
                        "culpa",
                        "corrupti",
                        "pariatur",
                    },
                },
                shared.Filter{
                    Name: "Terrell Heidenreich MD",
                    Values: []string{
                        "reiciendis",
                    },
                },
                shared.Filter{
                    Name: "Jaime Quigley",
                    Values: []string{
                        "iste",
                    },
                },
                shared.Filter{
                    Name: "Janie Cremin",
                    Values: []string{
                        "explicabo",
                        "voluptas",
                        "unde",
                    },
                },
            },
            Marker: sdk.String("architecto"),
            MaxRecords: sdk.Int64(382808),
            ReplicationInstanceArn: sdk.String("sapiente"),
        },
        Marker: sdk.String("debitis"),
        MaxRecords: sdk.String("illo"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribePendingMaintenanceActionsXAmzTargetEnumAmazonDmSv20160101DescribePendingMaintenanceActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePendingMaintenanceActionsResponse != nil {
        // handle response
    }
}
```

## DescribeRecommendationLimitations

Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.

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
    res, err := s.SDK.DescribeRecommendationLimitations(ctx, operations.DescribeRecommendationLimitationsRequest{
        DescribeRecommendationLimitationsRequest: shared.DescribeRecommendationLimitationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Nathan Jaskolski",
                    Values: []string{
                        "tempora",
                        "tempora",
                        "voluptate",
                        "reiciendis",
                    },
                },
                shared.Filter{
                    Name: "Karen Franey",
                    Values: []string{
                        "quaerat",
                        "incidunt",
                        "ipsam",
                    },
                },
            },
            MaxRecords: sdk.Int64(894864),
            NextToken: sdk.String("rem"),
        },
        MaxRecords: sdk.String("sit"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DescribeRecommendationLimitationsXAmzTargetEnumAmazonDmSv20160101DescribeRecommendationLimitations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecommendationLimitationsResponse != nil {
        // handle response
    }
}
```

## DescribeRecommendations

Returns a paginated list of target engine recommendations for your source databases.

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
    res, err := s.SDK.DescribeRecommendations(ctx, operations.DescribeRecommendationsRequest{
        DescribeRecommendationsRequest: shared.DescribeRecommendationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Francis Harris",
                    Values: []string{
                        "laudantium",
                    },
                },
            },
            MaxRecords: sdk.Int64(348476),
            NextToken: sdk.String("praesentium"),
        },
        MaxRecords: sdk.String("cum"),
        NextToken: sdk.String("laboriosam"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DescribeRecommendationsXAmzTargetEnumAmazonDmSv20160101DescribeRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecommendationsResponse != nil {
        // handle response
    }
}
```

## DescribeRefreshSchemasStatus

Returns the status of the RefreshSchemas operation.

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
    res, err := s.SDK.DescribeRefreshSchemasStatus(ctx, operations.DescribeRefreshSchemasStatusRequest{
        DescribeRefreshSchemasStatusMessage: shared.DescribeRefreshSchemasStatusMessage{
            EndpointArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DescribeRefreshSchemasStatusXAmzTargetEnumAmazonDmSv20160101DescribeRefreshSchemasStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRefreshSchemasStatusResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationInstanceTaskLogs

Returns information about the task logs for the specified task.

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
    res, err := s.SDK.DescribeReplicationInstanceTaskLogs(ctx, operations.DescribeReplicationInstanceTaskLogsRequest{
        DescribeReplicationInstanceTaskLogsMessage: shared.DescribeReplicationInstanceTaskLogsMessage{
            Marker: sdk.String("fugit"),
            MaxRecords: sdk.Int64(282699),
            ReplicationInstanceArn: "fugiat",
        },
        Marker: sdk.String("voluptatem"),
        MaxRecords: sdk.String("culpa"),
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.DescribeReplicationInstanceTaskLogsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationInstanceTaskLogs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationInstanceTaskLogsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationInstances

Returns information about replication instances for your account in the current region.

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
    res, err := s.SDK.DescribeReplicationInstances(ctx, operations.DescribeReplicationInstancesRequest{
        DescribeReplicationInstancesMessage: shared.DescribeReplicationInstancesMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Zachary Borer",
                    Values: []string{
                        "sit",
                    },
                },
                shared.Filter{
                    Name: "Bernice Ullrich II",
                    Values: []string{
                        "dolorem",
                        "harum",
                        "dicta",
                        "architecto",
                    },
                },
                shared.Filter{
                    Name: "Francisco Powlowski",
                    Values: []string{
                        "tenetur",
                        "laboriosam",
                        "alias",
                    },
                },
            },
            Marker: sdk.String("amet"),
            MaxRecords: sdk.Int64(647197),
        },
        Marker: sdk.String("voluptate"),
        MaxRecords: sdk.String("unde"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.DescribeReplicationInstancesXAmzTargetEnumAmazonDmSv20160101DescribeReplicationInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationInstancesResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationSubnetGroups

Returns information about the replication subnet groups.

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
    res, err := s.SDK.DescribeReplicationSubnetGroups(ctx, operations.DescribeReplicationSubnetGroupsRequest{
        DescribeReplicationSubnetGroupsMessage: shared.DescribeReplicationSubnetGroupsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Chelsea Pfannerstill",
                    Values: []string{
                        "voluptatem",
                        "quisquam",
                    },
                },
                shared.Filter{
                    Name: "Ryan Littel",
                    Values: []string{
                        "suscipit",
                        "quidem",
                        "maxime",
                    },
                },
                shared.Filter{
                    Name: "Georgia Farrell",
                    Values: []string{
                        "error",
                        "officiis",
                        "officiis",
                    },
                },
            },
            Marker: sdk.String("accusamus"),
            MaxRecords: sdk.Int64(618826),
        },
        Marker: sdk.String("minima"),
        MaxRecords: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.DescribeReplicationSubnetGroupsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationSubnetGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationSubnetGroupsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationTaskAssessmentResults

<p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

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
    res, err := s.SDK.DescribeReplicationTaskAssessmentResults(ctx, operations.DescribeReplicationTaskAssessmentResultsRequest{
        DescribeReplicationTaskAssessmentResultsMessage: shared.DescribeReplicationTaskAssessmentResultsMessage{
            Marker: sdk.String("repudiandae"),
            MaxRecords: sdk.Int64(542129),
            ReplicationTaskArn: sdk.String("atque"),
        },
        Marker: sdk.String("sunt"),
        MaxRecords: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeReplicationTaskAssessmentResultsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskAssessmentResults,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationTaskAssessmentResultsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationTaskAssessmentRuns

<p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>

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
    res, err := s.SDK.DescribeReplicationTaskAssessmentRuns(ctx, operations.DescribeReplicationTaskAssessmentRunsRequest{
        DescribeReplicationTaskAssessmentRunsMessage: shared.DescribeReplicationTaskAssessmentRunsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Bonnie Halvorson",
                    Values: []string{
                        "molestias",
                        "magnam",
                        "saepe",
                        "consequuntur",
                    },
                },
            },
            Marker: sdk.String("occaecati"),
            MaxRecords: sdk.Int64(886305),
        },
        Marker: sdk.String("perspiciatis"),
        MaxRecords: sdk.String("in"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeReplicationTaskAssessmentRunsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskAssessmentRuns,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationTaskAssessmentRunsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationTaskIndividualAssessments

<p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>

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
    res, err := s.SDK.DescribeReplicationTaskIndividualAssessments(ctx, operations.DescribeReplicationTaskIndividualAssessmentsRequest{
        DescribeReplicationTaskIndividualAssessmentsMessage: shared.DescribeReplicationTaskIndividualAssessmentsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Jerry Hessel",
                    Values: []string{
                        "vero",
                    },
                },
                shared.Filter{
                    Name: "Vera Beier IV",
                    Values: []string{
                        "qui",
                        "cum",
                        "iure",
                        "necessitatibus",
                    },
                },
            },
            Marker: sdk.String("ratione"),
            MaxRecords: sdk.Int64(672582),
        },
        Marker: sdk.String("distinctio"),
        MaxRecords: sdk.String("voluptatum"),
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTaskIndividualAssessments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationTaskIndividualAssessmentsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationTasks

Returns information about replication tasks for your account in the current region.

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
    res, err := s.SDK.DescribeReplicationTasks(ctx, operations.DescribeReplicationTasksRequest{
        DescribeReplicationTasksMessage: shared.DescribeReplicationTasksMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Shane Abshire",
                    Values: []string{
                        "id",
                    },
                },
                shared.Filter{
                    Name: "Joanne Parisian DVM",
                    Values: []string{
                        "quaerat",
                        "molestiae",
                        "ex",
                    },
                },
            },
            Marker: sdk.String("ut"),
            MaxRecords: sdk.Int64(633062),
            WithoutSettings: sdk.Bool(false),
        },
        Marker: sdk.String("adipisci"),
        MaxRecords: sdk.String("debitis"),
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeReplicationTasksXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationTasksResponse != nil {
        // handle response
    }
}
```

## DescribeSchemas

<p>Returns information about the schema for the specified endpoint.</p> <p/>

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
    res, err := s.SDK.DescribeSchemas(ctx, operations.DescribeSchemasRequest{
        DescribeSchemasMessage: shared.DescribeSchemasMessage{
            EndpointArn: "eum",
            Marker: sdk.String("reiciendis"),
            MaxRecords: sdk.Int64(592780),
        },
        Marker: sdk.String("aspernatur"),
        MaxRecords: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.DescribeSchemasXAmzTargetEnumAmazonDmSv20160101DescribeSchemas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSchemasResponse != nil {
        // handle response
    }
}
```

## DescribeTableStatistics

<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>

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
    res, err := s.SDK.DescribeTableStatistics(ctx, operations.DescribeTableStatisticsRequest{
        DescribeTableStatisticsMessage: shared.DescribeTableStatisticsMessage{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Ruth Zulauf",
                    Values: []string{
                        "nam",
                        "earum",
                    },
                },
                shared.Filter{
                    Name: "Neal Schulist",
                    Values: []string{
                        "officiis",
                        "sapiente",
                        "cumque",
                    },
                },
            },
            Marker: sdk.String("vitae"),
            MaxRecords: sdk.Int64(698249),
            ReplicationTaskArn: "tempora",
        },
        Marker: sdk.String("quis"),
        MaxRecords: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DescribeTableStatisticsXAmzTargetEnumAmazonDmSv20160101DescribeTableStatistics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableStatisticsResponse != nil {
        // handle response
    }
}
```

## ImportCertificate

Uploads the specified certificate.

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
    res, err := s.SDK.ImportCertificate(ctx, operations.ImportCertificateRequest{
        ImportCertificateMessage: shared.ImportCertificateMessage{
            CertificateIdentifier: "eius",
            CertificatePem: sdk.String("rem"),
            CertificateWallet: sdk.String("at"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("eos"),
                    ResourceArn: sdk.String("sapiente"),
                    Value: sdk.String("eum"),
                },
                shared.Tag{
                    Key: sdk.String("dicta"),
                    ResourceArn: sdk.String("minima"),
                    Value: sdk.String("beatae"),
                },
                shared.Tag{
                    Key: sdk.String("cupiditate"),
                    ResourceArn: sdk.String("provident"),
                    Value: sdk.String("earum"),
                },
                shared.Tag{
                    Key: sdk.String("soluta"),
                    ResourceArn: sdk.String("hic"),
                    Value: sdk.String("illum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ImportCertificateXAmzTargetEnumAmazonDmSv20160101ImportCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportCertificateResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceMessage: shared.ListTagsForResourceMessage{
            ResourceArn: sdk.String("suscipit"),
            ResourceArnList: []string{
                "fugit",
            },
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonDmSv20160101ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ModifyEndpoint

<p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

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
    res, err := s.SDK.ModifyEndpoint(ctx, operations.ModifyEndpointRequest{
        ModifyEndpointMessage: shared.ModifyEndpointMessage{
            CertificateArn: sdk.String("quasi"),
            DatabaseName: sdk.String("et"),
            DmsTransferSettings: &shared.DmsTransferSettings{
                BucketName: sdk.String("ducimus"),
                ServiceAccessRoleArn: sdk.String("natus"),
            },
            DocDbSettings: &shared.DocDbSettings{
                DatabaseName: sdk.String("occaecati"),
                DocsToInvestigate: sdk.Int64(382440),
                ExtractDocID: sdk.Bool(false),
                KmsKeyID: sdk.String("adipisci"),
                NestingLevel: shared.NestingLevelValueEnumNone.ToPointer(),
                Password: sdk.String("magni"),
                Port: sdk.Int64(984934),
                SecretsManagerAccessRoleArn: sdk.String("nulla"),
                SecretsManagerSecretID: sdk.String("necessitatibus"),
                ServerName: sdk.String("ipsa"),
                Username: sdk.String("Donato.Kovacek"),
            },
            DynamoDbSettings: &shared.DynamoDbSettings{
                ServiceAccessRoleArn: "iusto",
            },
            ElasticsearchSettings: &shared.ElasticsearchSettings{
                EndpointURI: "esse",
                ErrorRetryDuration: sdk.Int64(508390),
                FullLoadErrorPercentage: sdk.Int64(979963),
                ServiceAccessRoleArn: "reiciendis",
                UseNewMappingType: sdk.Bool(false),
            },
            EndpointArn: "vel",
            EndpointIdentifier: sdk.String("architecto"),
            EndpointType: shared.ReplicationEndpointTypeValueEnumTarget.ToPointer(),
            EngineName: sdk.String("doloremque"),
            ExactSettings: sdk.Bool(false),
            ExternalTableDefinition: sdk.String("dicta"),
            ExtraConnectionAttributes: sdk.String("odio"),
            GcpMySQLSettings: &shared.GcpMySQLSettings{
                AfterConnectScript: sdk.String("tempora"),
                CleanSourceMetadataOnMismatch: sdk.Bool(false),
                DatabaseName: sdk.String("esse"),
                EventsPollInterval: sdk.Int64(403793),
                MaxFileSize: sdk.Int64(235263),
                ParallelLoadThreads: sdk.Int64(399812),
                Password: sdk.String("ipsa"),
                Port: sdk.Int64(671384),
                SecretsManagerAccessRoleArn: sdk.String("sunt"),
                SecretsManagerSecretID: sdk.String("nostrum"),
                ServerName: sdk.String("fugiat"),
                ServerTimezone: sdk.String("expedita"),
                TargetDbType: shared.TargetDbTypeEnumSpecificDatabase.ToPointer(),
                Username: sdk.String("Lucas.Homenick"),
            },
            IBMDb2Settings: &shared.IBMDb2Settings{
                CurrentLsn: sdk.String("eum"),
                DatabaseName: sdk.String("voluptas"),
                MaxKBytesPerRead: sdk.Int64(614528),
                Password: sdk.String("id"),
                Port: sdk.Int64(70042),
                SecretsManagerAccessRoleArn: sdk.String("error"),
                SecretsManagerSecretID: sdk.String("possimus"),
                ServerName: sdk.String("voluptates"),
                SetDataCaptureChanges: sdk.Bool(false),
                Username: sdk.String("Madalyn.Osinski53"),
            },
            KafkaSettings: &shared.KafkaSettings{
                Broker: sdk.String("enim"),
                IncludeControlDetails: sdk.Bool(false),
                IncludeNullAndEmpty: sdk.Bool(false),
                IncludePartitionValue: sdk.Bool(false),
                IncludeTableAlterOperations: sdk.Bool(false),
                IncludeTransactionDetails: sdk.Bool(false),
                MessageFormat: shared.MessageFormatValueEnumJSON.ToPointer(),
                MessageMaxBytes: sdk.Int64(833316),
                NoHexPrefix: sdk.Bool(false),
                PartitionIncludeSchemaTable: sdk.Bool(false),
                SaslMechanism: shared.KafkaSaslMechanismEnumScramSha512.ToPointer(),
                SaslPassword: sdk.String("quo"),
                SaslUsername: sdk.String("ex"),
                SecurityProtocol: shared.KafkaSecurityProtocolEnumSslAuthentication.ToPointer(),
                SslCaCertificateArn: sdk.String("ad"),
                SslClientCertificateArn: sdk.String("expedita"),
                SslClientKeyArn: sdk.String("voluptatem"),
                SslClientKeyPassword: sdk.String("molestias"),
                Topic: sdk.String("cum"),
            },
            KinesisSettings: &shared.KinesisSettings{
                IncludeControlDetails: sdk.Bool(false),
                IncludeNullAndEmpty: sdk.Bool(false),
                IncludePartitionValue: sdk.Bool(false),
                IncludeTableAlterOperations: sdk.Bool(false),
                IncludeTransactionDetails: sdk.Bool(false),
                MessageFormat: shared.MessageFormatValueEnumJSON.ToPointer(),
                NoHexPrefix: sdk.Bool(false),
                PartitionIncludeSchemaTable: sdk.Bool(false),
                ServiceAccessRoleArn: sdk.String("beatae"),
                StreamArn: sdk.String("voluptatum"),
            },
            MicrosoftSQLServerSettings: &shared.MicrosoftSQLServerSettings{
                BcpPacketSize: sdk.Int64(606308),
                ControlTablesFileGroup: sdk.String("veritatis"),
                DatabaseName: sdk.String("rerum"),
                ForceLobLookup: sdk.Bool(false),
                Password: sdk.String("est"),
                Port: sdk.Int64(634786),
                QuerySingleAlwaysOnNode: sdk.Bool(false),
                ReadBackupOnly: sdk.Bool(false),
                SafeguardPolicy: shared.SafeguardPolicyEnumRelyOnSQLServerReplicationAgent.ToPointer(),
                SecretsManagerAccessRoleArn: sdk.String("sapiente"),
                SecretsManagerSecretID: sdk.String("officiis"),
                ServerName: sdk.String("architecto"),
                TlogAccessMode: shared.TlogAccessModeEnumPreferTlog.ToPointer(),
                TrimSpaceInChar: sdk.Bool(false),
                UseBcpFullLoad: sdk.Bool(false),
                UseThirdPartyBackupDevice: sdk.Bool(false),
                Username: sdk.String("Sandra0"),
            },
            MongoDbSettings: &shared.MongoDbSettings{
                AuthMechanism: shared.AuthMechanismValueEnumMongodbCr.ToPointer(),
                AuthSource: sdk.String("earum"),
                AuthType: shared.AuthTypeValueEnumNo.ToPointer(),
                DatabaseName: sdk.String("sapiente"),
                DocsToInvestigate: sdk.String("rem"),
                ExtractDocID: sdk.String("minus"),
                KmsKeyID: sdk.String("nemo"),
                NestingLevel: shared.NestingLevelValueEnumOne.ToPointer(),
                Password: sdk.String("ratione"),
                Port: sdk.Int64(355225),
                SecretsManagerAccessRoleArn: sdk.String("perferendis"),
                SecretsManagerSecretID: sdk.String("illum"),
                ServerName: sdk.String("totam"),
                Username: sdk.String("Olaf.Spinka63"),
            },
            MySQLSettings: &shared.MySQLSettings{
                AfterConnectScript: sdk.String("dolor"),
                CleanSourceMetadataOnMismatch: sdk.Bool(false),
                DatabaseName: sdk.String("aliquam"),
                EventsPollInterval: sdk.Int64(80532),
                MaxFileSize: sdk.Int64(537279),
                ParallelLoadThreads: sdk.Int64(85311),
                Password: sdk.String("tempora"),
                Port: sdk.Int64(221396),
                SecretsManagerAccessRoleArn: sdk.String("consequatur"),
                SecretsManagerSecretID: sdk.String("architecto"),
                ServerName: sdk.String("sit"),
                ServerTimezone: sdk.String("modi"),
                TargetDbType: shared.TargetDbTypeEnumSpecificDatabase.ToPointer(),
                Username: sdk.String("Annabel22"),
            },
            NeptuneSettings: &shared.NeptuneSettings{
                ErrorRetryDuration: sdk.Int64(856277),
                IamAuthEnabled: sdk.Bool(false),
                MaxFileSize: sdk.Int64(369490),
                MaxRetryCount: sdk.Int64(162120),
                S3BucketFolder: "ipsa",
                S3BucketName: "quas",
                ServiceAccessRoleArn: sdk.String("eveniet"),
            },
            OracleSettings: &shared.OracleSettings{
                AccessAlternateDirectly: sdk.Bool(false),
                AddSupplementalLogging: sdk.Bool(false),
                AdditionalArchivedLogDestID: sdk.Int64(773456),
                AllowSelectNestedTables: sdk.Bool(false),
                ArchivedLogDestID: sdk.Int64(884952),
                ArchivedLogsOnly: sdk.Bool(false),
                AsmPassword: sdk.String("esse"),
                AsmServer: sdk.String("necessitatibus"),
                AsmUser: sdk.String("sed"),
                CharLengthSemantics: shared.CharLengthSemanticsEnumDefault.ToPointer(),
                ConvertTimestampWithZoneToUTC: sdk.Bool(false),
                DatabaseName: sdk.String("nesciunt"),
                DirectPathNoLog: sdk.Bool(false),
                DirectPathParallelLoad: sdk.Bool(false),
                EnableHomogenousTablespace: sdk.Bool(false),
                ExtraArchivedLogDestIds: []int64{
                    432984,
                    426943,
                    528234,
                },
                FailTasksOnLobTruncation: sdk.Bool(false),
                NumberDatatypeScale: sdk.Int64(301692),
                OraclePathPrefix: sdk.String("exercitationem"),
                ParallelAsmReadThreads: sdk.Int64(70410),
                Password: sdk.String("porro"),
                Port: sdk.Int64(421844),
                ReadAheadBlocks: sdk.Int64(751022),
                ReadTableSpaceName: sdk.Bool(false),
                ReplacePathPrefix: sdk.Bool(false),
                RetryInterval: sdk.Int64(388319),
                SecretsManagerAccessRoleArn: sdk.String("recusandae"),
                SecretsManagerOracleAsmAccessRoleArn: sdk.String("consequuntur"),
                SecretsManagerOracleAsmSecretID: sdk.String("voluptatem"),
                SecretsManagerSecretID: sdk.String("exercitationem"),
                SecurityDbEncryption: sdk.String("necessitatibus"),
                SecurityDbEncryptionName: sdk.String("quasi"),
                ServerName: sdk.String("nisi"),
                SpatialDataOptionToGeoJSONFunctionName: sdk.String("at"),
                StandbyDelayTime: sdk.Int64(878373),
                TrimSpaceInChar: sdk.Bool(false),
                UseAlternateFolderForOnline: sdk.Bool(false),
                UseBFile: sdk.Bool(false),
                UseDirectPathFullLoad: sdk.Bool(false),
                UseLogminerReader: sdk.Bool(false),
                UsePathPrefix: sdk.String("est"),
                Username: sdk.String("Maryse_Dickinson75"),
            },
            Password: sdk.String("occaecati"),
            Port: sdk.Int64(364544),
            PostgreSQLSettings: &shared.PostgreSQLSettings{
                AfterConnectScript: sdk.String("voluptate"),
                CaptureDdls: sdk.Bool(false),
                DatabaseName: sdk.String("blanditiis"),
                DdlArtifactsSchema: sdk.String("officia"),
                ExecuteTimeout: sdk.Int64(376389),
                FailTasksOnLobTruncation: sdk.Bool(false),
                HeartbeatEnable: sdk.Bool(false),
                HeartbeatFrequency: sdk.Int64(254025),
                HeartbeatSchema: sdk.String("nemo"),
                MapBooleanAsBoolean: sdk.Bool(false),
                MaxFileSize: sdk.Int64(551079),
                Password: sdk.String("eius"),
                PluginName: shared.PluginNameValueEnumNoPreference.ToPointer(),
                Port: sdk.Int64(495970),
                SecretsManagerAccessRoleArn: sdk.String("nesciunt"),
                SecretsManagerSecretID: sdk.String("fuga"),
                ServerName: sdk.String("laudantium"),
                SlotName: sdk.String("incidunt"),
                TrimSpaceInChar: sdk.Bool(false),
                Username: sdk.String("Avis.Leffler39"),
            },
            RedisSettings: &shared.RedisSettings{
                AuthPassword: sdk.String("consequuntur"),
                AuthType: shared.RedisAuthTypeValueEnumNone.ToPointer(),
                AuthUserName: sdk.String("aperiam"),
                Port: 585432,
                ServerName: "reiciendis",
                SslCaCertificateArn: sdk.String("soluta"),
                SslSecurityProtocol: shared.SslSecurityProtocolValueEnumPlaintext.ToPointer(),
            },
            RedshiftSettings: &shared.RedshiftSettings{
                AcceptAnyDate: sdk.Bool(false),
                AfterConnectScript: sdk.String("omnis"),
                BucketFolder: sdk.String("eos"),
                BucketName: sdk.String("occaecati"),
                CaseSensitiveNames: sdk.Bool(false),
                CompUpdate: sdk.Bool(false),
                ConnectionTimeout: sdk.Int64(612867),
                DatabaseName: sdk.String("magni"),
                DateFormat: sdk.String("inventore"),
                EmptyAsNull: sdk.Bool(false),
                EncryptionMode: shared.EncryptionModeValueEnumSseKms.ToPointer(),
                ExplicitIds: sdk.Bool(false),
                FileTransferUploadStreams: sdk.Int64(881897),
                LoadTimeout: sdk.Int64(976802),
                MapBooleanAsBoolean: sdk.Bool(false),
                MaxFileSize: sdk.Int64(719620),
                Password: sdk.String("omnis"),
                Port: sdk.Int64(966390),
                RemoveQuotes: sdk.Bool(false),
                ReplaceChars: sdk.String("minima"),
                ReplaceInvalidChars: sdk.String("praesentium"),
                SecretsManagerAccessRoleArn: sdk.String("maxime"),
                SecretsManagerSecretID: sdk.String("magnam"),
                ServerName: sdk.String("temporibus"),
                ServerSideEncryptionKmsKeyID: sdk.String("quos"),
                ServiceAccessRoleArn: sdk.String("commodi"),
                TimeFormat: sdk.String("itaque"),
                TrimBlanks: sdk.Bool(false),
                TruncateColumns: sdk.Bool(false),
                Username: sdk.String("Hassie.Lebsack72"),
                WriteBufferSize: sdk.Int64(877399),
            },
            S3Settings: &shared.S3Settings{
                AddColumnName: sdk.Bool(false),
                AddTrailingPaddingCharacter: sdk.Bool(false),
                BucketFolder: sdk.String("voluptatem"),
                BucketName: sdk.String("ipsam"),
                CannedACLForObjects: shared.CannedACLForObjectsValueEnumPublicReadWrite.ToPointer(),
                CdcInsertsAndUpdates: sdk.Bool(false),
                CdcInsertsOnly: sdk.Bool(false),
                CdcMaxBatchInterval: sdk.Int64(1383),
                CdcMinFileSize: sdk.Int64(93894),
                CdcPath: sdk.String("non"),
                CompressionType: shared.CompressionTypeValueEnumGzip.ToPointer(),
                CsvDelimiter: sdk.String("enim"),
                CsvNoSupValue: sdk.String("sint"),
                CsvNullValue: sdk.String("nulla"),
                CsvRowDelimiter: sdk.String("deserunt"),
                DataFormat: shared.DataFormatValueEnumCsv.ToPointer(),
                DataPageSize: sdk.Int64(364463),
                DatePartitionDelimiter: shared.DatePartitionDelimiterValueEnumUnderscore.ToPointer(),
                DatePartitionEnabled: sdk.Bool(false),
                DatePartitionSequence: shared.DatePartitionSequenceValueEnumMmyyyydd.ToPointer(),
                DatePartitionTimezone: sdk.String("quis"),
                DictPageSizeLimit: sdk.Int64(571844),
                EnableStatistics: sdk.Bool(false),
                EncodingType: shared.EncodingTypeValueEnumRleDictionary.ToPointer(),
                EncryptionMode: shared.EncryptionModeValueEnumSseKms.ToPointer(),
                ExpectedBucketOwner: sdk.String("hic"),
                ExternalTableDefinition: sdk.String("necessitatibus"),
                GlueCatalogGeneration: sdk.Bool(false),
                IgnoreHeaderRows: sdk.Int64(991891),
                IncludeOpForFullLoad: sdk.Bool(false),
                MaxFileSize: sdk.Int64(404306),
                ParquetTimestampInMillisecond: sdk.Bool(false),
                ParquetVersion: shared.ParquetVersionValueEnumParquet10.ToPointer(),
                PreserveTransactions: sdk.Bool(false),
                Rfc4180: sdk.Bool(false),
                RowGroupLength: sdk.Int64(895346),
                ServerSideEncryptionKmsKeyID: sdk.String("delectus"),
                ServiceAccessRoleArn: sdk.String("quae"),
                TimestampColumnName: sdk.String("minus"),
                UseCsvNoSupValue: sdk.Bool(false),
                UseTaskStartTimeForFullLoadTimestamp: sdk.Bool(false),
            },
            ServerName: sdk.String("fuga"),
            ServiceAccessRoleArn: sdk.String("laborum"),
            SslMode: shared.DmsSslModeValueEnumNone.ToPointer(),
            SybaseSettings: &shared.SybaseSettings{
                DatabaseName: sdk.String("velit"),
                Password: sdk.String("atque"),
                Port: sdk.Int64(216457),
                SecretsManagerAccessRoleArn: sdk.String("impedit"),
                SecretsManagerSecretID: sdk.String("magni"),
                ServerName: sdk.String("soluta"),
                Username: sdk.String("Theresa48"),
            },
            Username: sdk.String("Jace.Dickinson"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ModifyEndpointXAmzTargetEnumAmazonDmSv20160101ModifyEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyEndpointResponse != nil {
        // handle response
    }
}
```

## ModifyEventSubscription

Modifies an existing DMS event notification subscription. 

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
    res, err := s.SDK.ModifyEventSubscription(ctx, operations.ModifyEventSubscriptionRequest{
        ModifyEventSubscriptionMessage: shared.ModifyEventSubscriptionMessage{
            Enabled: sdk.Bool(false),
            EventCategories: []string{
                "quibusdam",
                "inventore",
            },
            SnsTopicArn: sdk.String("facere"),
            SourceType: sdk.String("libero"),
            SubscriptionName: "architecto",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.ModifyEventSubscriptionXAmzTargetEnumAmazonDmSv20160101ModifyEventSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyEventSubscriptionResponse != nil {
        // handle response
    }
}
```

## ModifyReplicationInstance

<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>

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
    res, err := s.SDK.ModifyReplicationInstance(ctx, operations.ModifyReplicationInstanceRequest{
        ModifyReplicationInstanceMessage: shared.ModifyReplicationInstanceMessage{
            AllocatedStorage: sdk.Int64(424663),
            AllowMajorVersionUpgrade: sdk.Bool(false),
            ApplyImmediately: sdk.Bool(false),
            AutoMinorVersionUpgrade: sdk.Bool(false),
            EngineVersion: sdk.String("ea"),
            MultiAZ: sdk.Bool(false),
            NetworkType: sdk.String("beatae"),
            PreferredMaintenanceWindow: sdk.String("vero"),
            ReplicationInstanceArn: "excepturi",
            ReplicationInstanceClass: sdk.String("eum"),
            ReplicationInstanceIdentifier: sdk.String("velit"),
            VpcSecurityGroupIds: []string{
                "perspiciatis",
                "earum",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.ModifyReplicationInstanceXAmzTargetEnumAmazonDmSv20160101ModifyReplicationInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyReplicationInstanceResponse != nil {
        // handle response
    }
}
```

## ModifyReplicationSubnetGroup

Modifies the settings for the specified replication subnet group.

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
    res, err := s.SDK.ModifyReplicationSubnetGroup(ctx, operations.ModifyReplicationSubnetGroupRequest{
        ModifyReplicationSubnetGroupMessage: shared.ModifyReplicationSubnetGroupMessage{
            ReplicationSubnetGroupDescription: sdk.String("itaque"),
            ReplicationSubnetGroupIdentifier: "velit",
            SubnetIds: []string{
                "non",
                "dolor",
                "iusto",
            },
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ModifyReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101ModifyReplicationSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyReplicationSubnetGroupResponse != nil {
        // handle response
    }
}
```

## ModifyReplicationTask

<p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>

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
    res, err := s.SDK.ModifyReplicationTask(ctx, operations.ModifyReplicationTaskRequest{
        ModifyReplicationTaskMessage: shared.ModifyReplicationTaskMessage{
            CdcStartPosition: sdk.String("voluptas"),
            CdcStartTime: types.MustTimeFromString("2021-05-20T03:55:32.372Z"),
            CdcStopPosition: sdk.String("perspiciatis"),
            MigrationType: shared.MigrationTypeValueEnumFullLoadAndCdc.ToPointer(),
            ReplicationTaskArn: "deleniti",
            ReplicationTaskIdentifier: sdk.String("a"),
            ReplicationTaskSettings: sdk.String("voluptate"),
            TableMappings: sdk.String("ullam"),
            TaskData: sdk.String("unde"),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ModifyReplicationTaskXAmzTargetEnumAmazonDmSv20160101ModifyReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyReplicationTaskResponse != nil {
        // handle response
    }
}
```

## MoveReplicationTask

Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.

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
    res, err := s.SDK.MoveReplicationTask(ctx, operations.MoveReplicationTaskRequest{
        MoveReplicationTaskMessage: shared.MoveReplicationTaskMessage{
            ReplicationTaskArn: "esse",
            TargetReplicationInstanceArn: "labore",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.MoveReplicationTaskXAmzTargetEnumAmazonDmSv20160101MoveReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveReplicationTaskResponse != nil {
        // handle response
    }
}
```

## RebootReplicationInstance

Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.

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
    res, err := s.SDK.RebootReplicationInstance(ctx, operations.RebootReplicationInstanceRequest{
        RebootReplicationInstanceMessage: shared.RebootReplicationInstanceMessage{
            ForceFailover: sdk.Bool(false),
            ForcePlannedFailover: sdk.Bool(false),
            ReplicationInstanceArn: "qui",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.RebootReplicationInstanceXAmzTargetEnumAmazonDmSv20160101RebootReplicationInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootReplicationInstanceResponse != nil {
        // handle response
    }
}
```

## RefreshSchemas

Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.

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
    res, err := s.SDK.RefreshSchemas(ctx, operations.RefreshSchemasRequest{
        RefreshSchemasMessage: shared.RefreshSchemasMessage{
            EndpointArn: "odio",
            ReplicationInstanceArn: "fugit",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.RefreshSchemasXAmzTargetEnumAmazonDmSv20160101RefreshSchemas,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshSchemasResponse != nil {
        // handle response
    }
}
```

## ReloadTables

<p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>

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
    res, err := s.SDK.ReloadTables(ctx, operations.ReloadTablesRequest{
        ReloadTablesMessage: shared.ReloadTablesMessage{
            ReloadOption: shared.ReloadOptionValueEnumDataReload.ToPointer(),
            ReplicationTaskArn: "itaque",
            TablesToReload: []shared.TableToReload{
                shared.TableToReload{
                    SchemaName: "ipsum",
                    TableName: "unde",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.ReloadTablesXAmzTargetEnumAmazonDmSv20160101ReloadTables,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReloadTablesResponse != nil {
        // handle response
    }
}
```

## RemoveTagsFromResource

Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

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
    res, err := s.SDK.RemoveTagsFromResource(ctx, operations.RemoveTagsFromResourceRequest{
        RemoveTagsFromResourceMessage: shared.RemoveTagsFromResourceMessage{
            ResourceArn: "libero",
            TagKeys: []string{
                "id",
            },
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.RemoveTagsFromResourceXAmzTargetEnumAmazonDmSv20160101RemoveTagsFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsFromResourceResponse != nil {
        // handle response
    }
}
```

## RunFleetAdvisorLsaAnalysis

Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.

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
    res, err := s.SDK.RunFleetAdvisorLsaAnalysis(ctx, operations.RunFleetAdvisorLsaAnalysisRequest{
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.RunFleetAdvisorLsaAnalysisXAmzTargetEnumAmazonDmSv20160101RunFleetAdvisorLsaAnalysis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunFleetAdvisorLsaAnalysisResponse != nil {
        // handle response
    }
}
```

## StartRecommendations

<p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>

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
    res, err := s.SDK.StartRecommendations(ctx, operations.StartRecommendationsRequest{
        StartRecommendationsRequest: shared.StartRecommendationsRequest{
            DatabaseID: "distinctio",
            Settings: shared.RecommendationSettings{
                InstanceSizingType: "voluptatem",
                WorkloadType: "autem",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.StartRecommendationsXAmzTargetEnumAmazonDmSv20160101StartRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartReplicationTask

<p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>

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
    res, err := s.SDK.StartReplicationTask(ctx, operations.StartReplicationTaskRequest{
        StartReplicationTaskMessage: shared.StartReplicationTaskMessage{
            CdcStartPosition: sdk.String("molestiae"),
            CdcStartTime: types.MustTimeFromString("2021-03-27T22:23:24.313Z"),
            CdcStopPosition: sdk.String("necessitatibus"),
            ReplicationTaskArn: "tempore",
            StartReplicationTaskType: shared.StartReplicationTaskTypeValueEnumResumeProcessing,
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.StartReplicationTaskXAmzTargetEnumAmazonDmSv20160101StartReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReplicationTaskResponse != nil {
        // handle response
    }
}
```

## StartReplicationTaskAssessment

<p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

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
    res, err := s.SDK.StartReplicationTaskAssessment(ctx, operations.StartReplicationTaskAssessmentRequest{
        StartReplicationTaskAssessmentMessage: shared.StartReplicationTaskAssessmentMessage{
            ReplicationTaskArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.StartReplicationTaskAssessmentXAmzTargetEnumAmazonDmSv20160101StartReplicationTaskAssessment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReplicationTaskAssessmentResponse != nil {
        // handle response
    }
}
```

## StartReplicationTaskAssessmentRun

<p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>

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
    res, err := s.SDK.StartReplicationTaskAssessmentRun(ctx, operations.StartReplicationTaskAssessmentRunRequest{
        StartReplicationTaskAssessmentRunMessage: shared.StartReplicationTaskAssessmentRunMessage{
            AssessmentRunName: "accusantium",
            Exclude: []string{
                "officiis",
                "eos",
                "quibusdam",
            },
            IncludeOnly: []string{
                "praesentium",
                "odit",
            },
            ReplicationTaskArn: "explicabo",
            ResultEncryptionMode: sdk.String("corporis"),
            ResultKmsKeyArn: sdk.String("error"),
            ResultLocationBucket: "earum",
            ResultLocationFolder: sdk.String("adipisci"),
            ServiceAccessRoleArn: "recusandae",
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.StartReplicationTaskAssessmentRunXAmzTargetEnumAmazonDmSv20160101StartReplicationTaskAssessmentRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReplicationTaskAssessmentRunResponse != nil {
        // handle response
    }
}
```

## StopReplicationTask

Stops the replication task.

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
    res, err := s.SDK.StopReplicationTask(ctx, operations.StopReplicationTaskRequest{
        StopReplicationTaskMessage: shared.StopReplicationTaskMessage{
            ReplicationTaskArn: "delectus",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.StopReplicationTaskXAmzTargetEnumAmazonDmSv20160101StopReplicationTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopReplicationTaskResponse != nil {
        // handle response
    }
}
```

## TestConnection

Tests the connection between the replication instance and the endpoint.

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
    res, err := s.SDK.TestConnection(ctx, operations.TestConnectionRequest{
        TestConnectionMessage: shared.TestConnectionMessage{
            EndpointArn: "dignissimos",
            ReplicationInstanceArn: "optio",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.TestConnectionXAmzTargetEnumAmazonDmSv20160101TestConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestConnectionResponse != nil {
        // handle response
    }
}
```

## UpdateSubscriptionsToEventBridge

<p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

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
    res, err := s.SDK.UpdateSubscriptionsToEventBridge(ctx, operations.UpdateSubscriptionsToEventBridgeRequest{
        UpdateSubscriptionsToEventBridgeMessage: shared.UpdateSubscriptionsToEventBridgeMessage{
            ForceMove: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.UpdateSubscriptionsToEventBridgeXAmzTargetEnumAmazonDmSv20160101UpdateSubscriptionsToEventBridge,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriptionsToEventBridgeResponse != nil {
        // handle response
    }
}
```
