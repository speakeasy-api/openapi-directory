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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToResourceMessage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToResourceRequest();
    $request->addTagsToResourceMessage = new AddTagsToResourceMessage();
    $request->addTagsToResourceMessage->resourceArn = 'error';
    $request->addTagsToResourceMessage->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AddTagsToResourceXAmzTargetEnum::AMAZON_DM_SV20160101_ADD_TAGS_TO_RESOURCE;

    $response = $sdk->sdk->addTagsToResource($request);

    if ($response->addTagsToResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applyPendingMaintenanceAction

Applies a pending maintenance action to a resource (for example, to a replication instance).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplyPendingMaintenanceActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplyPendingMaintenanceActionMessage;
use \OpenAPI\OpenAPI\Models\Operations\ApplyPendingMaintenanceActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplyPendingMaintenanceActionRequest();
    $request->applyPendingMaintenanceActionMessage = new ApplyPendingMaintenanceActionMessage();
    $request->applyPendingMaintenanceActionMessage->applyAction = 'suscipit';
    $request->applyPendingMaintenanceActionMessage->optInType = 'molestiae';
    $request->applyPendingMaintenanceActionMessage->replicationInstanceArn = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = ApplyPendingMaintenanceActionXAmzTargetEnum::AMAZON_DM_SV20160101_APPLY_PENDING_MAINTENANCE_ACTION;

    $response = $sdk->sdk->applyPendingMaintenanceAction($request);

    if ($response->applyPendingMaintenanceActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchStartRecommendations

<p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchStartRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchStartRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRecommendationsRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationSettings;
use \OpenAPI\OpenAPI\Models\Operations\BatchStartRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchStartRecommendationsRequest();
    $request->batchStartRecommendationsRequest = new BatchStartRecommendationsRequest();
    $request->batchStartRecommendationsRequest->data = [
        new StartRecommendationsRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = BatchStartRecommendationsXAmzTargetEnum::AMAZON_DM_SV20160101_BATCH_START_RECOMMENDATIONS;

    $response = $sdk->sdk->batchStartRecommendations($request);

    if ($response->batchStartRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelReplicationTaskAssessmentRun

<p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelReplicationTaskAssessmentRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelReplicationTaskAssessmentRunMessage;
use \OpenAPI\OpenAPI\Models\Operations\CancelReplicationTaskAssessmentRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelReplicationTaskAssessmentRunRequest();
    $request->cancelReplicationTaskAssessmentRunMessage = new CancelReplicationTaskAssessmentRunMessage();
    $request->cancelReplicationTaskAssessmentRunMessage->replicationTaskAssessmentRunArn = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CancelReplicationTaskAssessmentRunXAmzTargetEnum::AMAZON_DM_SV20160101_CANCEL_REPLICATION_TASK_ASSESSMENT_RUN;

    $response = $sdk->sdk->cancelReplicationTaskAssessmentRun($request);

    if ($response->cancelReplicationTaskAssessmentRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpoint

<p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointMessage;
use \OpenAPI\OpenAPI\Models\Shared\DmsTransferSettings;
use \OpenAPI\OpenAPI\Models\Shared\DocDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevelValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchSettings;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationEndpointTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcpMySQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\TargetDbTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IBMDb2Settings;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSettings;
use \OpenAPI\OpenAPI\Models\Shared\MessageFormatValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSaslMechanismEnum;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSecurityProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisSettings;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerSettings;
use \OpenAPI\OpenAPI\Models\Shared\SafeguardPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlogAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MongoDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\AuthMechanismValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\MySQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\NeptuneSettings;
use \OpenAPI\OpenAPI\Models\Shared\OracleSettings;
use \OpenAPI\OpenAPI\Models\Shared\CharLengthSemanticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\PluginNameValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedisSettings;
use \OpenAPI\OpenAPI\Models\Shared\RedisAuthTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSecurityProtocolValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSettings;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionModeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Settings;
use \OpenAPI\OpenAPI\Models\Shared\CannedAclForObjectsValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatePartitionDelimiterValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatePartitionSequenceValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncodingTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetVersionValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DmsSslModeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\SybaseSettings;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointRequest();
    $request->createEndpointMessage = new CreateEndpointMessage();
    $request->createEndpointMessage->certificateArn = 'esse';
    $request->createEndpointMessage->databaseName = 'totam';
    $request->createEndpointMessage->dmsTransferSettings = new DmsTransferSettings();
    $request->createEndpointMessage->dmsTransferSettings->bucketName = 'porro';
    $request->createEndpointMessage->dmsTransferSettings->serviceAccessRoleArn = 'dolorum';
    $request->createEndpointMessage->docDbSettings = new DocDbSettings();
    $request->createEndpointMessage->docDbSettings->databaseName = 'dicta';
    $request->createEndpointMessage->docDbSettings->docsToInvestigate = 720633;
    $request->createEndpointMessage->docDbSettings->extractDocId = false;
    $request->createEndpointMessage->docDbSettings->kmsKeyId = 'officia';
    $request->createEndpointMessage->docDbSettings->nestingLevel = NestingLevelValueEnum::ONE;
    $request->createEndpointMessage->docDbSettings->password = 'fugit';
    $request->createEndpointMessage->docDbSettings->port = 537373;
    $request->createEndpointMessage->docDbSettings->secretsManagerAccessRoleArn = 'hic';
    $request->createEndpointMessage->docDbSettings->secretsManagerSecretId = 'optio';
    $request->createEndpointMessage->docDbSettings->serverName = 'totam';
    $request->createEndpointMessage->docDbSettings->username = 'Benjamin.Johns';
    $request->createEndpointMessage->dynamoDbSettings = new DynamoDbSettings();
    $request->createEndpointMessage->dynamoDbSettings->serviceAccessRoleArn = 'qui';
    $request->createEndpointMessage->elasticsearchSettings = new ElasticsearchSettings();
    $request->createEndpointMessage->elasticsearchSettings->endpointUri = 'impedit';
    $request->createEndpointMessage->elasticsearchSettings->errorRetryDuration = 736918;
    $request->createEndpointMessage->elasticsearchSettings->fullLoadErrorPercentage = 456150;
    $request->createEndpointMessage->elasticsearchSettings->serviceAccessRoleArn = 'ipsum';
    $request->createEndpointMessage->elasticsearchSettings->useNewMappingType = false;
    $request->createEndpointMessage->endpointIdentifier = 'excepturi';
    $request->createEndpointMessage->endpointType = ReplicationEndpointTypeValueEnum::SOURCE;
    $request->createEndpointMessage->engineName = 'perferendis';
    $request->createEndpointMessage->externalTableDefinition = 'ad';
    $request->createEndpointMessage->extraConnectionAttributes = 'natus';
    $request->createEndpointMessage->gcpMySQLSettings = new GcpMySQLSettings();
    $request->createEndpointMessage->gcpMySQLSettings->afterConnectScript = 'sed';
    $request->createEndpointMessage->gcpMySQLSettings->cleanSourceMetadataOnMismatch = false;
    $request->createEndpointMessage->gcpMySQLSettings->databaseName = 'iste';
    $request->createEndpointMessage->gcpMySQLSettings->eventsPollInterval = 222321;
    $request->createEndpointMessage->gcpMySQLSettings->maxFileSize = 616934;
    $request->createEndpointMessage->gcpMySQLSettings->parallelLoadThreads = 386489;
    $request->createEndpointMessage->gcpMySQLSettings->password = 'hic';
    $request->createEndpointMessage->gcpMySQLSettings->port = 902599;
    $request->createEndpointMessage->gcpMySQLSettings->secretsManagerAccessRoleArn = 'fuga';
    $request->createEndpointMessage->gcpMySQLSettings->secretsManagerSecretId = 'in';
    $request->createEndpointMessage->gcpMySQLSettings->serverName = 'corporis';
    $request->createEndpointMessage->gcpMySQLSettings->serverTimezone = 'iste';
    $request->createEndpointMessage->gcpMySQLSettings->targetDbType = TargetDbTypeEnum::SPECIFIC_DATABASE;
    $request->createEndpointMessage->gcpMySQLSettings->username = 'Sterling6';
    $request->createEndpointMessage->ibmDb2Settings = new IBMDb2Settings();
    $request->createEndpointMessage->ibmDb2Settings->currentLsn = 'reiciendis';
    $request->createEndpointMessage->ibmDb2Settings->databaseName = 'est';
    $request->createEndpointMessage->ibmDb2Settings->maxKBytesPerRead = 653140;
    $request->createEndpointMessage->ibmDb2Settings->password = 'laborum';
    $request->createEndpointMessage->ibmDb2Settings->port = 170909;
    $request->createEndpointMessage->ibmDb2Settings->secretsManagerAccessRoleArn = 'dolorem';
    $request->createEndpointMessage->ibmDb2Settings->secretsManagerSecretId = 'corporis';
    $request->createEndpointMessage->ibmDb2Settings->serverName = 'explicabo';
    $request->createEndpointMessage->ibmDb2Settings->setDataCaptureChanges = false;
    $request->createEndpointMessage->ibmDb2Settings->username = 'Nestor.Halvorson';
    $request->createEndpointMessage->kafkaSettings = new KafkaSettings();
    $request->createEndpointMessage->kafkaSettings->broker = 'minima';
    $request->createEndpointMessage->kafkaSettings->includeControlDetails = false;
    $request->createEndpointMessage->kafkaSettings->includeNullAndEmpty = false;
    $request->createEndpointMessage->kafkaSettings->includePartitionValue = false;
    $request->createEndpointMessage->kafkaSettings->includeTableAlterOperations = false;
    $request->createEndpointMessage->kafkaSettings->includeTransactionDetails = false;
    $request->createEndpointMessage->kafkaSettings->messageFormat = MessageFormatValueEnum::JSON_UNFORMATTED;
    $request->createEndpointMessage->kafkaSettings->messageMaxBytes = 38425;
    $request->createEndpointMessage->kafkaSettings->noHexPrefix = false;
    $request->createEndpointMessage->kafkaSettings->partitionIncludeSchemaTable = false;
    $request->createEndpointMessage->kafkaSettings->saslMechanism = KafkaSaslMechanismEnum::SCRAM_SHA512;
    $request->createEndpointMessage->kafkaSettings->saslPassword = 'culpa';
    $request->createEndpointMessage->kafkaSettings->saslUsername = 'doloribus';
    $request->createEndpointMessage->kafkaSettings->securityProtocol = KafkaSecurityProtocolEnum::SASL_SSL;
    $request->createEndpointMessage->kafkaSettings->sslCaCertificateArn = 'architecto';
    $request->createEndpointMessage->kafkaSettings->sslClientCertificateArn = 'mollitia';
    $request->createEndpointMessage->kafkaSettings->sslClientKeyArn = 'dolorem';
    $request->createEndpointMessage->kafkaSettings->sslClientKeyPassword = 'culpa';
    $request->createEndpointMessage->kafkaSettings->topic = 'consequuntur';
    $request->createEndpointMessage->kinesisSettings = new KinesisSettings();
    $request->createEndpointMessage->kinesisSettings->includeControlDetails = false;
    $request->createEndpointMessage->kinesisSettings->includeNullAndEmpty = false;
    $request->createEndpointMessage->kinesisSettings->includePartitionValue = false;
    $request->createEndpointMessage->kinesisSettings->includeTableAlterOperations = false;
    $request->createEndpointMessage->kinesisSettings->includeTransactionDetails = false;
    $request->createEndpointMessage->kinesisSettings->messageFormat = MessageFormatValueEnum::JSON_UNFORMATTED;
    $request->createEndpointMessage->kinesisSettings->noHexPrefix = false;
    $request->createEndpointMessage->kinesisSettings->partitionIncludeSchemaTable = false;
    $request->createEndpointMessage->kinesisSettings->serviceAccessRoleArn = 'mollitia';
    $request->createEndpointMessage->kinesisSettings->streamArn = 'occaecati';
    $request->createEndpointMessage->kmsKeyId = 'numquam';
    $request->createEndpointMessage->microsoftSQLServerSettings = new MicrosoftSQLServerSettings();
    $request->createEndpointMessage->microsoftSQLServerSettings->bcpPacketSize = 414369;
    $request->createEndpointMessage->microsoftSQLServerSettings->controlTablesFileGroup = 'quam';
    $request->createEndpointMessage->microsoftSQLServerSettings->databaseName = 'molestiae';
    $request->createEndpointMessage->microsoftSQLServerSettings->forceLobLookup = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->password = 'velit';
    $request->createEndpointMessage->microsoftSQLServerSettings->port = 623510;
    $request->createEndpointMessage->microsoftSQLServerSettings->querySingleAlwaysOnNode = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->readBackupOnly = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->safeguardPolicy = SafeguardPolicyEnum::RELY_ON_SQL_SERVER_REPLICATION_AGENT;
    $request->createEndpointMessage->microsoftSQLServerSettings->secretsManagerAccessRoleArn = 'quis';
    $request->createEndpointMessage->microsoftSQLServerSettings->secretsManagerSecretId = 'vitae';
    $request->createEndpointMessage->microsoftSQLServerSettings->serverName = 'laborum';
    $request->createEndpointMessage->microsoftSQLServerSettings->tlogAccessMode = TlogAccessModeEnum::PREFER_TLOG;
    $request->createEndpointMessage->microsoftSQLServerSettings->trimSpaceInChar = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->useBcpFullLoad = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->useThirdPartyBackupDevice = false;
    $request->createEndpointMessage->microsoftSQLServerSettings->username = 'Emilia.Conn94';
    $request->createEndpointMessage->mongoDbSettings = new MongoDbSettings();
    $request->createEndpointMessage->mongoDbSettings->authMechanism = AuthMechanismValueEnum::MONGODB_CR;
    $request->createEndpointMessage->mongoDbSettings->authSource = 'id';
    $request->createEndpointMessage->mongoDbSettings->authType = AuthTypeValueEnum::PASSWORD;
    $request->createEndpointMessage->mongoDbSettings->databaseName = 'aut';
    $request->createEndpointMessage->mongoDbSettings->docsToInvestigate = 'quasi';
    $request->createEndpointMessage->mongoDbSettings->extractDocId = 'error';
    $request->createEndpointMessage->mongoDbSettings->kmsKeyId = 'temporibus';
    $request->createEndpointMessage->mongoDbSettings->nestingLevel = NestingLevelValueEnum::ONE;
    $request->createEndpointMessage->mongoDbSettings->password = 'quasi';
    $request->createEndpointMessage->mongoDbSettings->port = 971945;
    $request->createEndpointMessage->mongoDbSettings->secretsManagerAccessRoleArn = 'voluptatibus';
    $request->createEndpointMessage->mongoDbSettings->secretsManagerSecretId = 'vero';
    $request->createEndpointMessage->mongoDbSettings->serverName = 'nihil';
    $request->createEndpointMessage->mongoDbSettings->username = 'John60';
    $request->createEndpointMessage->mySQLSettings = new MySQLSettings();
    $request->createEndpointMessage->mySQLSettings->afterConnectScript = 'voluptate';
    $request->createEndpointMessage->mySQLSettings->cleanSourceMetadataOnMismatch = false;
    $request->createEndpointMessage->mySQLSettings->databaseName = 'cum';
    $request->createEndpointMessage->mySQLSettings->eventsPollInterval = 19987;
    $request->createEndpointMessage->mySQLSettings->maxFileSize = 39187;
    $request->createEndpointMessage->mySQLSettings->parallelLoadThreads = 441711;
    $request->createEndpointMessage->mySQLSettings->password = 'ut';
    $request->createEndpointMessage->mySQLSettings->port = 979587;
    $request->createEndpointMessage->mySQLSettings->secretsManagerAccessRoleArn = 'dicta';
    $request->createEndpointMessage->mySQLSettings->secretsManagerSecretId = 'corporis';
    $request->createEndpointMessage->mySQLSettings->serverName = 'dolore';
    $request->createEndpointMessage->mySQLSettings->serverTimezone = 'iusto';
    $request->createEndpointMessage->mySQLSettings->targetDbType = TargetDbTypeEnum::SPECIFIC_DATABASE;
    $request->createEndpointMessage->mySQLSettings->username = 'Martine.Hamill91';
    $request->createEndpointMessage->neptuneSettings = new NeptuneSettings();
    $request->createEndpointMessage->neptuneSettings->errorRetryDuration = 64147;
    $request->createEndpointMessage->neptuneSettings->iamAuthEnabled = false;
    $request->createEndpointMessage->neptuneSettings->maxFileSize = 216822;
    $request->createEndpointMessage->neptuneSettings->maxRetryCount = 692472;
    $request->createEndpointMessage->neptuneSettings->s3BucketFolder = 'molestias';
    $request->createEndpointMessage->neptuneSettings->s3BucketName = 'excepturi';
    $request->createEndpointMessage->neptuneSettings->serviceAccessRoleArn = 'pariatur';
    $request->createEndpointMessage->oracleSettings = new OracleSettings();
    $request->createEndpointMessage->oracleSettings->accessAlternateDirectly = false;
    $request->createEndpointMessage->oracleSettings->addSupplementalLogging = false;
    $request->createEndpointMessage->oracleSettings->additionalArchivedLogDestId = 265389;
    $request->createEndpointMessage->oracleSettings->allowSelectNestedTables = false;
    $request->createEndpointMessage->oracleSettings->archivedLogDestId = 508969;
    $request->createEndpointMessage->oracleSettings->archivedLogsOnly = false;
    $request->createEndpointMessage->oracleSettings->asmPassword = 'rem';
    $request->createEndpointMessage->oracleSettings->asmServer = 'voluptates';
    $request->createEndpointMessage->oracleSettings->asmUser = 'quasi';
    $request->createEndpointMessage->oracleSettings->charLengthSemantics = CharLengthSemanticsEnum::BYTE;
    $request->createEndpointMessage->oracleSettings->convertTimestampWithZoneToUTC = false;
    $request->createEndpointMessage->oracleSettings->databaseName = 'sint';
    $request->createEndpointMessage->oracleSettings->directPathNoLog = false;
    $request->createEndpointMessage->oracleSettings->directPathParallelLoad = false;
    $request->createEndpointMessage->oracleSettings->enableHomogenousTablespace = false;
    $request->createEndpointMessage->oracleSettings->extraArchivedLogDestIds = [
        929297,
    ];
    $request->createEndpointMessage->oracleSettings->failTasksOnLobTruncation = false;
    $request->createEndpointMessage->oracleSettings->numberDatatypeScale = 277718;
    $request->createEndpointMessage->oracleSettings->oraclePathPrefix = 'enim';
    $request->createEndpointMessage->oracleSettings->parallelAsmReadThreads = 9356;
    $request->createEndpointMessage->oracleSettings->password = 'est';
    $request->createEndpointMessage->oracleSettings->port = 842342;
    $request->createEndpointMessage->oracleSettings->readAheadBlocks = 131797;
    $request->createEndpointMessage->oracleSettings->readTableSpaceName = false;
    $request->createEndpointMessage->oracleSettings->replacePathPrefix = false;
    $request->createEndpointMessage->oracleSettings->retryInterval = 647174;
    $request->createEndpointMessage->oracleSettings->secretsManagerAccessRoleArn = 'distinctio';
    $request->createEndpointMessage->oracleSettings->secretsManagerOracleAsmAccessRoleArn = 'quibusdam';
    $request->createEndpointMessage->oracleSettings->secretsManagerOracleAsmSecretId = 'labore';
    $request->createEndpointMessage->oracleSettings->secretsManagerSecretId = 'modi';
    $request->createEndpointMessage->oracleSettings->securityDbEncryption = 'qui';
    $request->createEndpointMessage->oracleSettings->securityDbEncryptionName = 'aliquid';
    $request->createEndpointMessage->oracleSettings->serverName = 'cupiditate';
    $request->createEndpointMessage->oracleSettings->spatialDataOptionToGeoJsonFunctionName = 'quos';
    $request->createEndpointMessage->oracleSettings->standbyDelayTime = 20107;
    $request->createEndpointMessage->oracleSettings->trimSpaceInChar = false;
    $request->createEndpointMessage->oracleSettings->useAlternateFolderForOnline = false;
    $request->createEndpointMessage->oracleSettings->useBFile = false;
    $request->createEndpointMessage->oracleSettings->useDirectPathFullLoad = false;
    $request->createEndpointMessage->oracleSettings->useLogminerReader = false;
    $request->createEndpointMessage->oracleSettings->usePathPrefix = 'magni';
    $request->createEndpointMessage->oracleSettings->username = 'Rhoda14';
    $request->createEndpointMessage->password = 'dolorum';
    $request->createEndpointMessage->port = 569618;
    $request->createEndpointMessage->postgreSQLSettings = new PostgreSQLSettings();
    $request->createEndpointMessage->postgreSQLSettings->afterConnectScript = 'tempora';
    $request->createEndpointMessage->postgreSQLSettings->captureDdls = false;
    $request->createEndpointMessage->postgreSQLSettings->databaseName = 'facilis';
    $request->createEndpointMessage->postgreSQLSettings->ddlArtifactsSchema = 'tempore';
    $request->createEndpointMessage->postgreSQLSettings->executeTimeout = 288476;
    $request->createEndpointMessage->postgreSQLSettings->failTasksOnLobTruncation = false;
    $request->createEndpointMessage->postgreSQLSettings->heartbeatEnable = false;
    $request->createEndpointMessage->postgreSQLSettings->heartbeatFrequency = 962189;
    $request->createEndpointMessage->postgreSQLSettings->heartbeatSchema = 'eum';
    $request->createEndpointMessage->postgreSQLSettings->mapBooleanAsBoolean = false;
    $request->createEndpointMessage->postgreSQLSettings->maxFileSize = 248753;
    $request->createEndpointMessage->postgreSQLSettings->password = 'eligendi';
    $request->createEndpointMessage->postgreSQLSettings->pluginName = PluginNameValueEnum::TEST_DECODING;
    $request->createEndpointMessage->postgreSQLSettings->port = 396098;
    $request->createEndpointMessage->postgreSQLSettings->secretsManagerAccessRoleArn = 'provident';
    $request->createEndpointMessage->postgreSQLSettings->secretsManagerSecretId = 'necessitatibus';
    $request->createEndpointMessage->postgreSQLSettings->serverName = 'sint';
    $request->createEndpointMessage->postgreSQLSettings->slotName = 'officia';
    $request->createEndpointMessage->postgreSQLSettings->trimSpaceInChar = false;
    $request->createEndpointMessage->postgreSQLSettings->username = 'Damien_Toy44';
    $request->createEndpointMessage->redisSettings = new RedisSettings();
    $request->createEndpointMessage->redisSettings->authPassword = 'in';
    $request->createEndpointMessage->redisSettings->authType = RedisAuthTypeValueEnum::AUTH_TOKEN;
    $request->createEndpointMessage->redisSettings->authUserName = 'maiores';
    $request->createEndpointMessage->redisSettings->port = 699479;
    $request->createEndpointMessage->redisSettings->serverName = 'dicta';
    $request->createEndpointMessage->redisSettings->sslCaCertificateArn = 'magnam';
    $request->createEndpointMessage->redisSettings->sslSecurityProtocol = SslSecurityProtocolValueEnum::SSL_ENCRYPTION;
    $request->createEndpointMessage->redshiftSettings = new RedshiftSettings();
    $request->createEndpointMessage->redshiftSettings->acceptAnyDate = false;
    $request->createEndpointMessage->redshiftSettings->afterConnectScript = 'facere';
    $request->createEndpointMessage->redshiftSettings->bucketFolder = 'ea';
    $request->createEndpointMessage->redshiftSettings->bucketName = 'aliquid';
    $request->createEndpointMessage->redshiftSettings->caseSensitiveNames = false;
    $request->createEndpointMessage->redshiftSettings->compUpdate = false;
    $request->createEndpointMessage->redshiftSettings->connectionTimeout = 675439;
    $request->createEndpointMessage->redshiftSettings->databaseName = 'accusamus';
    $request->createEndpointMessage->redshiftSettings->dateFormat = 'non';
    $request->createEndpointMessage->redshiftSettings->emptyAsNull = false;
    $request->createEndpointMessage->redshiftSettings->encryptionMode = EncryptionModeValueEnum::SSE_KMS;
    $request->createEndpointMessage->redshiftSettings->explicitIds = false;
    $request->createEndpointMessage->redshiftSettings->fileTransferUploadStreams = 313218;
    $request->createEndpointMessage->redshiftSettings->loadTimeout = 881736;
    $request->createEndpointMessage->redshiftSettings->mapBooleanAsBoolean = false;
    $request->createEndpointMessage->redshiftSettings->maxFileSize = 965417;
    $request->createEndpointMessage->redshiftSettings->password = 'quidem';
    $request->createEndpointMessage->redshiftSettings->port = 588465;
    $request->createEndpointMessage->redshiftSettings->removeQuotes = false;
    $request->createEndpointMessage->redshiftSettings->replaceChars = 'nam';
    $request->createEndpointMessage->redshiftSettings->replaceInvalidChars = 'id';
    $request->createEndpointMessage->redshiftSettings->secretsManagerAccessRoleArn = 'blanditiis';
    $request->createEndpointMessage->redshiftSettings->secretsManagerSecretId = 'deleniti';
    $request->createEndpointMessage->redshiftSettings->serverName = 'sapiente';
    $request->createEndpointMessage->redshiftSettings->serverSideEncryptionKmsKeyId = 'amet';
    $request->createEndpointMessage->redshiftSettings->serviceAccessRoleArn = 'deserunt';
    $request->createEndpointMessage->redshiftSettings->timeFormat = 'nisi';
    $request->createEndpointMessage->redshiftSettings->trimBlanks = false;
    $request->createEndpointMessage->redshiftSettings->truncateColumns = false;
    $request->createEndpointMessage->redshiftSettings->username = 'Henry.Mosciski';
    $request->createEndpointMessage->redshiftSettings->writeBufferSize = 19193;
    $request->createEndpointMessage->resourceIdentifier = 'nihil';
    $request->createEndpointMessage->s3Settings = new S3Settings();
    $request->createEndpointMessage->s3Settings->addColumnName = false;
    $request->createEndpointMessage->s3Settings->addTrailingPaddingCharacter = false;
    $request->createEndpointMessage->s3Settings->bucketFolder = 'magnam';
    $request->createEndpointMessage->s3Settings->bucketName = 'distinctio';
    $request->createEndpointMessage->s3Settings->cannedAclForObjects = CannedAclForObjectsValueEnum::AWS_EXEC_READ;
    $request->createEndpointMessage->s3Settings->cdcInsertsAndUpdates = false;
    $request->createEndpointMessage->s3Settings->cdcInsertsOnly = false;
    $request->createEndpointMessage->s3Settings->cdcMaxBatchInterval = 287991;
    $request->createEndpointMessage->s3Settings->cdcMinFileSize = 290077;
    $request->createEndpointMessage->s3Settings->cdcPath = 'suscipit';
    $request->createEndpointMessage->s3Settings->compressionType = CompressionTypeValueEnum::GZIP;
    $request->createEndpointMessage->s3Settings->csvDelimiter = 'nobis';
    $request->createEndpointMessage->s3Settings->csvNoSupValue = 'eum';
    $request->createEndpointMessage->s3Settings->csvNullValue = 'vero';
    $request->createEndpointMessage->s3Settings->csvRowDelimiter = 'aspernatur';
    $request->createEndpointMessage->s3Settings->dataFormat = DataFormatValueEnum::CSV;
    $request->createEndpointMessage->s3Settings->dataPageSize = 298282;
    $request->createEndpointMessage->s3Settings->datePartitionDelimiter = DatePartitionDelimiterValueEnum::SLASH;
    $request->createEndpointMessage->s3Settings->datePartitionEnabled = false;
    $request->createEndpointMessage->s3Settings->datePartitionSequence = DatePartitionSequenceValueEnum::YYYYMM;
    $request->createEndpointMessage->s3Settings->datePartitionTimezone = 'ullam';
    $request->createEndpointMessage->s3Settings->dictPageSizeLimit = 590873;
    $request->createEndpointMessage->s3Settings->enableStatistics = false;
    $request->createEndpointMessage->s3Settings->encodingType = EncodingTypeValueEnum::PLAIN_DICTIONARY;
    $request->createEndpointMessage->s3Settings->encryptionMode = EncryptionModeValueEnum::SSE_KMS;
    $request->createEndpointMessage->s3Settings->expectedBucketOwner = 'accusantium';
    $request->createEndpointMessage->s3Settings->externalTableDefinition = 'mollitia';
    $request->createEndpointMessage->s3Settings->glueCatalogGeneration = false;
    $request->createEndpointMessage->s3Settings->ignoreHeaderRows = 968962;
    $request->createEndpointMessage->s3Settings->includeOpForFullLoad = false;
    $request->createEndpointMessage->s3Settings->maxFileSize = 652103;
    $request->createEndpointMessage->s3Settings->parquetTimestampInMillisecond = false;
    $request->createEndpointMessage->s3Settings->parquetVersion = ParquetVersionValueEnum::PARQUET10;
    $request->createEndpointMessage->s3Settings->preserveTransactions = false;
    $request->createEndpointMessage->s3Settings->rfc4180 = false;
    $request->createEndpointMessage->s3Settings->rowGroupLength = 431418;
    $request->createEndpointMessage->s3Settings->serverSideEncryptionKmsKeyId = 'dolor';
    $request->createEndpointMessage->s3Settings->serviceAccessRoleArn = 'necessitatibus';
    $request->createEndpointMessage->s3Settings->timestampColumnName = 'odit';
    $request->createEndpointMessage->s3Settings->useCsvNoSupValue = false;
    $request->createEndpointMessage->s3Settings->useTaskStartTimeForFullLoadTimestamp = false;
    $request->createEndpointMessage->serverName = 'nemo';
    $request->createEndpointMessage->serviceAccessRoleArn = 'quasi';
    $request->createEndpointMessage->sslMode = DmsSslModeValueEnum::REQUIRE;
    $request->createEndpointMessage->sybaseSettings = new SybaseSettings();
    $request->createEndpointMessage->sybaseSettings->databaseName = 'doloribus';
    $request->createEndpointMessage->sybaseSettings->password = 'debitis';
    $request->createEndpointMessage->sybaseSettings->port = 260341;
    $request->createEndpointMessage->sybaseSettings->secretsManagerAccessRoleArn = 'maxime';
    $request->createEndpointMessage->sybaseSettings->secretsManagerSecretId = 'deleniti';
    $request->createEndpointMessage->sybaseSettings->serverName = 'facilis';
    $request->createEndpointMessage->sybaseSettings->username = 'Isaias91';
    $request->createEndpointMessage->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createEndpointMessage->username = 'Michael_Koss14';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = CreateEndpointXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_ENDPOINT;

    $response = $sdk->sdk->createEndpoint($request);

    if ($response->createEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventSubscription

<p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEventSubscriptionMessage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventSubscriptionRequest();
    $request->createEventSubscriptionMessage = new CreateEventSubscriptionMessage();
    $request->createEventSubscriptionMessage->enabled = false;
    $request->createEventSubscriptionMessage->eventCategories = [
        'quo',
    ];
    $request->createEventSubscriptionMessage->snsTopicArn = 'illum';
    $request->createEventSubscriptionMessage->sourceIds = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->createEventSubscriptionMessage->sourceType = 'ea';
    $request->createEventSubscriptionMessage->subscriptionName = 'accusantium';
    $request->createEventSubscriptionMessage->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = CreateEventSubscriptionXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_EVENT_SUBSCRIPTION;

    $response = $sdk->sdk->createEventSubscription($request);

    if ($response->createEventSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleetAdvisorCollector

Creates a Fleet Advisor collector using the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetAdvisorCollectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFleetAdvisorCollectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetAdvisorCollectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetAdvisorCollectorRequest();
    $request->createFleetAdvisorCollectorRequest = new CreateFleetAdvisorCollectorRequest();
    $request->createFleetAdvisorCollectorRequest->collectorName = 'pariatur';
    $request->createFleetAdvisorCollectorRequest->description = 'nemo';
    $request->createFleetAdvisorCollectorRequest->s3BucketName = 'voluptatibus';
    $request->createFleetAdvisorCollectorRequest->serviceAccessRoleArn = 'perferendis';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = CreateFleetAdvisorCollectorXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_FLEET_ADVISOR_COLLECTOR;

    $response = $sdk->sdk->createFleetAdvisorCollector($request);

    if ($response->createFleetAdvisorCollectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplicationInstance

<p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicationInstanceMessage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationInstanceRequest();
    $request->createReplicationInstanceMessage = new CreateReplicationInstanceMessage();
    $request->createReplicationInstanceMessage->allocatedStorage = 749999;
    $request->createReplicationInstanceMessage->autoMinorVersionUpgrade = false;
    $request->createReplicationInstanceMessage->availabilityZone = 'dolores';
    $request->createReplicationInstanceMessage->dnsNameServers = 'quis';
    $request->createReplicationInstanceMessage->engineVersion = 'totam';
    $request->createReplicationInstanceMessage->kmsKeyId = 'dignissimos';
    $request->createReplicationInstanceMessage->multiAZ = false;
    $request->createReplicationInstanceMessage->networkType = 'eaque';
    $request->createReplicationInstanceMessage->preferredMaintenanceWindow = 'quis';
    $request->createReplicationInstanceMessage->publiclyAccessible = false;
    $request->createReplicationInstanceMessage->replicationInstanceClass = 'nesciunt';
    $request->createReplicationInstanceMessage->replicationInstanceIdentifier = 'eos';
    $request->createReplicationInstanceMessage->replicationSubnetGroupIdentifier = 'perferendis';
    $request->createReplicationInstanceMessage->resourceIdentifier = 'dolores';
    $request->createReplicationInstanceMessage->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createReplicationInstanceMessage->vpcSecurityGroupIds = [
        'dolor',
        'vero',
    ];
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = CreateReplicationInstanceXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_REPLICATION_INSTANCE;

    $response = $sdk->sdk->createReplicationInstance($request);

    if ($response->createReplicationInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplicationSubnetGroup

<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicationSubnetGroupMessage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationSubnetGroupRequest();
    $request->createReplicationSubnetGroupMessage = new CreateReplicationSubnetGroupMessage();
    $request->createReplicationSubnetGroupMessage->replicationSubnetGroupDescription = 'porro';
    $request->createReplicationSubnetGroupMessage->replicationSubnetGroupIdentifier = 'consequuntur';
    $request->createReplicationSubnetGroupMessage->subnetIds = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->createReplicationSubnetGroupMessage->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateReplicationSubnetGroupXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_REPLICATION_SUBNET_GROUP;

    $response = $sdk->sdk->createReplicationSubnetGroup($request);

    if ($response->createReplicationSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplicationTask

Creates a replication task using the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Shared\MigrationTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationTaskRequest();
    $request->createReplicationTaskMessage = new CreateReplicationTaskMessage();
    $request->createReplicationTaskMessage->cdcStartPosition = 'pariatur';
    $request->createReplicationTaskMessage->cdcStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T21:12:31.408Z');
    $request->createReplicationTaskMessage->cdcStopPosition = 'libero';
    $request->createReplicationTaskMessage->migrationType = MigrationTypeValueEnum::FULL_LOAD_AND_CDC;
    $request->createReplicationTaskMessage->replicationInstanceArn = 'quaerat';
    $request->createReplicationTaskMessage->replicationTaskIdentifier = 'quos';
    $request->createReplicationTaskMessage->replicationTaskSettings = 'aliquid';
    $request->createReplicationTaskMessage->resourceIdentifier = 'dolorem';
    $request->createReplicationTaskMessage->sourceEndpointArn = 'dolorem';
    $request->createReplicationTaskMessage->tableMappings = 'dolor';
    $request->createReplicationTaskMessage->tags = [
        new Tag(),
    ];
    $request->createReplicationTaskMessage->targetEndpointArn = 'ipsum';
    $request->createReplicationTaskMessage->taskData = 'hic';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_CREATE_REPLICATION_TASK;

    $response = $sdk->sdk->createReplicationTask($request);

    if ($response->createReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificate

Deletes the specified certificate. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCertificateMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->deleteCertificateMessage = new DeleteCertificateMessage();
    $request->deleteCertificateMessage->certificateArn = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteCertificateXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_CERTIFICATE;

    $response = $sdk->sdk->deleteCertificate($request);

    if ($response->deleteCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

Deletes the connection between a replication instance and an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionMessage = new DeleteConnectionMessage();
    $request->deleteConnectionMessage->endpointArn = 'quidem';
    $request->deleteConnectionMessage->replicationInstanceArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->deleteConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpoint

<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointRequest();
    $request->deleteEndpointMessage = new DeleteEndpointMessage();
    $request->deleteEndpointMessage->endpointArn = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DeleteEndpointXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_ENDPOINT;

    $response = $sdk->sdk->deleteEndpoint($request);

    if ($response->deleteEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventSubscription

 Deletes an DMS event subscription. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEventSubscriptionMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventSubscriptionRequest();
    $request->deleteEventSubscriptionMessage = new DeleteEventSubscriptionMessage();
    $request->deleteEventSubscriptionMessage->subscriptionName = 'distinctio';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DeleteEventSubscriptionXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_EVENT_SUBSCRIPTION;

    $response = $sdk->sdk->deleteEventSubscription($request);

    if ($response->deleteEventSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleetAdvisorCollector

Deletes the specified Fleet Advisor collector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetAdvisorCollectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCollectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetAdvisorCollectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetAdvisorCollectorRequest();
    $request->deleteCollectorRequest = new DeleteCollectorRequest();
    $request->deleteCollectorRequest->collectorReferencedId = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DeleteFleetAdvisorCollectorXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_FLEET_ADVISOR_COLLECTOR;

    $response = $sdk->sdk->deleteFleetAdvisorCollector($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleetAdvisorDatabases

Deletes the specified Fleet Advisor collector databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetAdvisorDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFleetAdvisorDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetAdvisorDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetAdvisorDatabasesRequest();
    $request->deleteFleetAdvisorDatabasesRequest = new DeleteFleetAdvisorDatabasesRequest();
    $request->deleteFleetAdvisorDatabasesRequest->databaseIds = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteFleetAdvisorDatabasesXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_FLEET_ADVISOR_DATABASES;

    $response = $sdk->sdk->deleteFleetAdvisorDatabases($request);

    if ($response->deleteFleetAdvisorDatabasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationInstance

<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationInstanceMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationInstanceRequest();
    $request->deleteReplicationInstanceMessage = new DeleteReplicationInstanceMessage();
    $request->deleteReplicationInstanceMessage->replicationInstanceArn = 'quod';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DeleteReplicationInstanceXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_REPLICATION_INSTANCE;

    $response = $sdk->sdk->deleteReplicationInstance($request);

    if ($response->deleteReplicationInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationSubnetGroup

Deletes a subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationSubnetGroupMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationSubnetGroupRequest();
    $request->deleteReplicationSubnetGroupMessage = new DeleteReplicationSubnetGroupMessage();
    $request->deleteReplicationSubnetGroupMessage->replicationSubnetGroupIdentifier = 'ipsum';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteReplicationSubnetGroupXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_REPLICATION_SUBNET_GROUP;

    $response = $sdk->sdk->deleteReplicationSubnetGroup($request);

    if ($response->deleteReplicationSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationTask

Deletes the specified replication task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationTaskRequest();
    $request->deleteReplicationTaskMessage = new DeleteReplicationTaskMessage();
    $request->deleteReplicationTaskMessage->replicationTaskArn = 'dolorem';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DeleteReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_REPLICATION_TASK;

    $response = $sdk->sdk->deleteReplicationTask($request);

    if ($response->deleteReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationTaskAssessmentRun

<p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationTaskAssessmentRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationTaskAssessmentRunMessage;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationTaskAssessmentRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationTaskAssessmentRunRequest();
    $request->deleteReplicationTaskAssessmentRunMessage = new DeleteReplicationTaskAssessmentRunMessage();
    $request->deleteReplicationTaskAssessmentRunMessage->replicationTaskAssessmentRunArn = 'vel';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteReplicationTaskAssessmentRunXAmzTargetEnum::AMAZON_DM_SV20160101_DELETE_REPLICATION_TASK_ASSESSMENT_RUN;

    $response = $sdk->sdk->deleteReplicationTaskAssessmentRun($request);

    if ($response->deleteReplicationTaskAssessmentRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountAttributes

<p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountAttributesRequest();
    $request->requestBody = [
        'maxime' => 'pariatur',
        'soluta' => 'dicta',
        'laborum' => 'totam',
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeAccountAttributesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_ACCOUNT_ATTRIBUTES;

    $response = $sdk->sdk->describeAccountAttributes($request);

    if ($response->describeAccountAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplicableIndividualAssessments

<p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicableIndividualAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicableIndividualAssessmentsMessage;
use \OpenAPI\OpenAPI\Models\Shared\MigrationTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicableIndividualAssessmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicableIndividualAssessmentsRequest();
    $request->describeApplicableIndividualAssessmentsMessage = new DescribeApplicableIndividualAssessmentsMessage();
    $request->describeApplicableIndividualAssessmentsMessage->marker = 'molestias';
    $request->describeApplicableIndividualAssessmentsMessage->maxRecords = 840429;
    $request->describeApplicableIndividualAssessmentsMessage->migrationType = MigrationTypeValueEnum::FULL_LOAD;
    $request->describeApplicableIndividualAssessmentsMessage->replicationInstanceArn = 'neque';
    $request->describeApplicableIndividualAssessmentsMessage->replicationTaskArn = 'fugit';
    $request->describeApplicableIndividualAssessmentsMessage->sourceEngineName = 'magni';
    $request->describeApplicableIndividualAssessmentsMessage->targetEngineName = 'odio';
    $request->marker = 'sunt';
    $request->maxRecords = 'ullam';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DescribeApplicableIndividualAssessmentsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_APPLICABLE_INDIVIDUAL_ASSESSMENTS;

    $response = $sdk->sdk->describeApplicableIndividualAssessments($request);

    if ($response->describeApplicableIndividualAssessmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificates

Provides a description of the certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificatesMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificatesRequest();
    $request->describeCertificatesMessage = new DescribeCertificatesMessage();
    $request->describeCertificatesMessage->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeCertificatesMessage->marker = 'ipsum';
    $request->describeCertificatesMessage->maxRecords = 83422;
    $request->marker = 'nobis';
    $request->maxRecords = 'quos';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeCertificatesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_CERTIFICATES;

    $response = $sdk->sdk->describeCertificates($request);

    if ($response->describeCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnections

Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionsRequest();
    $request->describeConnectionsMessage = new DescribeConnectionsMessage();
    $request->describeConnectionsMessage->filters = [
        new Filter(),
    ];
    $request->describeConnectionsMessage->marker = 'dolorum';
    $request->describeConnectionsMessage->maxRecords = 100294;
    $request->marker = 'quae';
    $request->maxRecords = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DescribeConnectionsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_CONNECTIONS;

    $response = $sdk->sdk->describeConnections($request);

    if ($response->describeConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpointSettings

Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointSettingsMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointSettingsRequest();
    $request->describeEndpointSettingsMessage = new DescribeEndpointSettingsMessage();
    $request->describeEndpointSettingsMessage->engineName = 'ut';
    $request->describeEndpointSettingsMessage->marker = 'facilis';
    $request->describeEndpointSettingsMessage->maxRecords = 586410;
    $request->marker = 'qui';
    $request->maxRecords = 'quae';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeEndpointSettingsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_ENDPOINT_SETTINGS;

    $response = $sdk->sdk->describeEndpointSettings($request);

    if ($response->describeEndpointSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpointTypes

Returns information about the type of endpoints available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointTypesMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointTypesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointTypesRequest();
    $request->describeEndpointTypesMessage = new DescribeEndpointTypesMessage();
    $request->describeEndpointTypesMessage->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeEndpointTypesMessage->marker = 'ipsum';
    $request->describeEndpointTypesMessage->maxRecords = 961571;
    $request->marker = 'voluptate';
    $request->maxRecords = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DescribeEndpointTypesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_ENDPOINT_TYPES;

    $response = $sdk->sdk->describeEndpointTypes($request);

    if ($response->describeEndpointTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoints

Returns information about the endpoints for your account in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointsRequest();
    $request->describeEndpointsMessage = new DescribeEndpointsMessage();
    $request->describeEndpointsMessage->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeEndpointsMessage->marker = 'facilis';
    $request->describeEndpointsMessage->maxRecords = 874288;
    $request->marker = 'ducimus';
    $request->maxRecords = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DescribeEndpointsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_ENDPOINTS;

    $response = $sdk->sdk->describeEndpoints($request);

    if ($response->describeEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventCategories

Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventCategoriesMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventCategoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventCategoriesRequest();
    $request->describeEventCategoriesMessage = new DescribeEventCategoriesMessage();
    $request->describeEventCategoriesMessage->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeEventCategoriesMessage->sourceType = 'nulla';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = DescribeEventCategoriesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_EVENT_CATEGORIES;

    $response = $sdk->sdk->describeEventCategories($request);

    if ($response->describeEventCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventSubscriptions

<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventSubscriptionsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventSubscriptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventSubscriptionsRequest();
    $request->describeEventSubscriptionsMessage = new DescribeEventSubscriptionsMessage();
    $request->describeEventSubscriptionsMessage->filters = [
        new Filter(),
    ];
    $request->describeEventSubscriptionsMessage->marker = 'officia';
    $request->describeEventSubscriptionsMessage->maxRecords = 269479;
    $request->describeEventSubscriptionsMessage->subscriptionName = 'ipsam';
    $request->marker = 'ea';
    $request->maxRecords = 'aspernatur';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DescribeEventSubscriptionsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_EVENT_SUBSCRIPTIONS;

    $response = $sdk->sdk->describeEventSubscriptions($request);

    if ($response->describeEventSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEvents

 Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventsRequest();
    $request->describeEventsMessage = new DescribeEventsMessage();
    $request->describeEventsMessage->duration = 224317;
    $request->describeEventsMessage->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T20:38:47.955Z');
    $request->describeEventsMessage->eventCategories = [
        'nulla',
        'excepturi',
    ];
    $request->describeEventsMessage->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeEventsMessage->marker = 'nostrum';
    $request->describeEventsMessage->maxRecords = 960835;
    $request->describeEventsMessage->sourceIdentifier = 'quisquam';
    $request->describeEventsMessage->sourceType = SourceTypeEnum::REPLICATION_INSTANCE;
    $request->describeEventsMessage->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T13:07:57.949Z');
    $request->marker = 'impedit';
    $request->maxRecords = 'corporis';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = DescribeEventsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_EVENTS;

    $response = $sdk->sdk->describeEvents($request);

    if ($response->describeEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAdvisorCollectors

Returns a list of the Fleet Advisor collectors in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorCollectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAdvisorCollectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorCollectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAdvisorCollectorsRequest();
    $request->describeFleetAdvisorCollectorsRequest = new DescribeFleetAdvisorCollectorsRequest();
    $request->describeFleetAdvisorCollectorsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeFleetAdvisorCollectorsRequest->maxRecords = 132487;
    $request->describeFleetAdvisorCollectorsRequest->nextToken = 'minima';
    $request->maxRecords = 'eaque';
    $request->nextToken = 'a';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DescribeFleetAdvisorCollectorsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_COLLECTORS;

    $response = $sdk->sdk->describeFleetAdvisorCollectors($request);

    if ($response->describeFleetAdvisorCollectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAdvisorDatabases

Returns a list of Fleet Advisor databases in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAdvisorDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAdvisorDatabasesRequest();
    $request->describeFleetAdvisorDatabasesRequest = new DescribeFleetAdvisorDatabasesRequest();
    $request->describeFleetAdvisorDatabasesRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeFleetAdvisorDatabasesRequest->maxRecords = 79522;
    $request->describeFleetAdvisorDatabasesRequest->nextToken = 'non';
    $request->maxRecords = 'et';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DescribeFleetAdvisorDatabasesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_DATABASES;

    $response = $sdk->sdk->describeFleetAdvisorDatabases($request);

    if ($response->describeFleetAdvisorDatabasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAdvisorLsaAnalysis

Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorLsaAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAdvisorLsaAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAdvisorLsaAnalysisRequest();
    $request->describeFleetAdvisorLsaAnalysisRequest = new DescribeFleetAdvisorLsaAnalysisRequest();
    $request->describeFleetAdvisorLsaAnalysisRequest->maxRecords = 829603;
    $request->describeFleetAdvisorLsaAnalysisRequest->nextToken = 'nulla';
    $request->maxRecords = 'voluptas';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeFleetAdvisorLsaAnalysisXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_LSA_ANALYSIS;

    $response = $sdk->sdk->describeFleetAdvisorLsaAnalysis($request);

    if ($response->describeFleetAdvisorLsaAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAdvisorSchemaObjectSummary

Provides descriptions of the schemas discovered by your Fleet Advisor collectors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorSchemaObjectSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAdvisorSchemaObjectSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAdvisorSchemaObjectSummaryRequest();
    $request->describeFleetAdvisorSchemaObjectSummaryRequest = new DescribeFleetAdvisorSchemaObjectSummaryRequest();
    $request->describeFleetAdvisorSchemaObjectSummaryRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeFleetAdvisorSchemaObjectSummaryRequest->maxRecords = 487935;
    $request->describeFleetAdvisorSchemaObjectSummaryRequest->nextToken = 'eius';
    $request->maxRecords = 'esse';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_SCHEMA_OBJECT_SUMMARY;

    $response = $sdk->sdk->describeFleetAdvisorSchemaObjectSummary($request);

    if ($response->describeFleetAdvisorSchemaObjectSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetAdvisorSchemas

Returns a list of schemas detected by Fleet Advisor Collectors in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetAdvisorSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetAdvisorSchemasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetAdvisorSchemasRequest();
    $request->describeFleetAdvisorSchemasRequest = new DescribeFleetAdvisorSchemasRequest();
    $request->describeFleetAdvisorSchemasRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeFleetAdvisorSchemasRequest->maxRecords = 826871;
    $request->describeFleetAdvisorSchemasRequest->nextToken = 'eos';
    $request->maxRecords = 'praesentium';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeFleetAdvisorSchemasXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_FLEET_ADVISOR_SCHEMAS;

    $response = $sdk->sdk->describeFleetAdvisorSchemas($request);

    if ($response->describeFleetAdvisorSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrderableReplicationInstances

Returns information about the replication instance types that can be created in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrderableReplicationInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOrderableReplicationInstancesMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrderableReplicationInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrderableReplicationInstancesRequest();
    $request->describeOrderableReplicationInstancesMessage = new DescribeOrderableReplicationInstancesMessage();
    $request->describeOrderableReplicationInstancesMessage->marker = 'quo';
    $request->describeOrderableReplicationInstancesMessage->maxRecords = 681359;
    $request->marker = 'eius';
    $request->maxRecords = 'eos';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeOrderableReplicationInstancesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_ORDERABLE_REPLICATION_INSTANCES;

    $response = $sdk->sdk->describeOrderableReplicationInstances($request);

    if ($response->describeOrderableReplicationInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePendingMaintenanceActions

For internal use only

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePendingMaintenanceActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePendingMaintenanceActionsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribePendingMaintenanceActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePendingMaintenanceActionsRequest();
    $request->describePendingMaintenanceActionsMessage = new DescribePendingMaintenanceActionsMessage();
    $request->describePendingMaintenanceActionsMessage->filters = [
        new Filter(),
    ];
    $request->describePendingMaintenanceActionsMessage->marker = 'sequi';
    $request->describePendingMaintenanceActionsMessage->maxRecords = 779192;
    $request->describePendingMaintenanceActionsMessage->replicationInstanceArn = 'esse';
    $request->marker = 'recusandae';
    $request->maxRecords = 'aperiam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribePendingMaintenanceActionsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_PENDING_MAINTENANCE_ACTIONS;

    $response = $sdk->sdk->describePendingMaintenanceActions($request);

    if ($response->describePendingMaintenanceActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecommendationLimitations

Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationLimitationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecommendationLimitationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationLimitationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecommendationLimitationsRequest();
    $request->describeRecommendationLimitationsRequest = new DescribeRecommendationLimitationsRequest();
    $request->describeRecommendationLimitationsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeRecommendationLimitationsRequest->maxRecords = 488410;
    $request->describeRecommendationLimitationsRequest->nextToken = 'occaecati';
    $request->maxRecords = 'commodi';
    $request->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DescribeRecommendationLimitationsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_RECOMMENDATION_LIMITATIONS;

    $response = $sdk->sdk->describeRecommendationLimitations($request);

    if ($response->describeRecommendationLimitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecommendations

Returns a paginated list of target engine recommendations for your source databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecommendationsRequest();
    $request->describeRecommendationsRequest = new DescribeRecommendationsRequest();
    $request->describeRecommendationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeRecommendationsRequest->maxRecords = 159867;
    $request->describeRecommendationsRequest->nextToken = 'deleniti';
    $request->maxRecords = 'fugit';
    $request->nextToken = 'fuga';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DescribeRecommendationsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_RECOMMENDATIONS;

    $response = $sdk->sdk->describeRecommendations($request);

    if ($response->describeRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRefreshSchemasStatus

Returns the status of the RefreshSchemas operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRefreshSchemasStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRefreshSchemasStatusMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRefreshSchemasStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRefreshSchemasStatusRequest();
    $request->describeRefreshSchemasStatusMessage = new DescribeRefreshSchemasStatusMessage();
    $request->describeRefreshSchemasStatusMessage->endpointArn = 'sapiente';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DescribeRefreshSchemasStatusXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REFRESH_SCHEMAS_STATUS;

    $response = $sdk->sdk->describeRefreshSchemasStatus($request);

    if ($response->describeRefreshSchemasStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationInstanceTaskLogs

Returns information about the task logs for the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationInstanceTaskLogsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationInstanceTaskLogsMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationInstanceTaskLogsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationInstanceTaskLogsRequest();
    $request->describeReplicationInstanceTaskLogsMessage = new DescribeReplicationInstanceTaskLogsMessage();
    $request->describeReplicationInstanceTaskLogsMessage->marker = 'esse';
    $request->describeReplicationInstanceTaskLogsMessage->maxRecords = 910545;
    $request->describeReplicationInstanceTaskLogsMessage->replicationInstanceArn = 'accusamus';
    $request->marker = 'veritatis';
    $request->maxRecords = 'esse';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeReplicationInstanceTaskLogsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS;

    $response = $sdk->sdk->describeReplicationInstanceTaskLogs($request);

    if ($response->describeReplicationInstanceTaskLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationInstances

Returns information about replication instances for your account in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationInstancesMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationInstancesRequest();
    $request->describeReplicationInstancesMessage = new DescribeReplicationInstancesMessage();
    $request->describeReplicationInstancesMessage->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeReplicationInstancesMessage->marker = 'molestiae';
    $request->describeReplicationInstancesMessage->maxRecords = 699622;
    $request->marker = 'occaecati';
    $request->maxRecords = 'minima';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeReplicationInstancesXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_INSTANCES;

    $response = $sdk->sdk->describeReplicationInstances($request);

    if ($response->describeReplicationInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationSubnetGroups

Returns information about the replication subnet groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationSubnetGroupsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationSubnetGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationSubnetGroupsRequest();
    $request->describeReplicationSubnetGroupsMessage = new DescribeReplicationSubnetGroupsMessage();
    $request->describeReplicationSubnetGroupsMessage->filters = [
        new Filter(),
    ];
    $request->describeReplicationSubnetGroupsMessage->marker = 'consequatur';
    $request->describeReplicationSubnetGroupsMessage->maxRecords = 796392;
    $request->marker = 'quaerat';
    $request->maxRecords = 'sapiente';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DescribeReplicationSubnetGroupsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_SUBNET_GROUPS;

    $response = $sdk->sdk->describeReplicationSubnetGroups($request);

    if ($response->describeReplicationSubnetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationTaskAssessmentResults

<p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskAssessmentResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationTaskAssessmentResultsMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationTaskAssessmentResultsRequest();
    $request->describeReplicationTaskAssessmentResultsMessage = new DescribeReplicationTaskAssessmentResultsMessage();
    $request->describeReplicationTaskAssessmentResultsMessage->marker = 'esse';
    $request->describeReplicationTaskAssessmentResultsMessage->maxRecords = 97468;
    $request->describeReplicationTaskAssessmentResultsMessage->replicationTaskArn = 'a';
    $request->marker = 'error';
    $request->maxRecords = 'sint';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeReplicationTaskAssessmentResultsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RESULTS;

    $response = $sdk->sdk->describeReplicationTaskAssessmentResults($request);

    if ($response->describeReplicationTaskAssessmentResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationTaskAssessmentRuns

<p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskAssessmentRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationTaskAssessmentRunsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationTaskAssessmentRunsRequest();
    $request->describeReplicationTaskAssessmentRunsMessage = new DescribeReplicationTaskAssessmentRunsMessage();
    $request->describeReplicationTaskAssessmentRunsMessage->filters = [
        new Filter(),
    ];
    $request->describeReplicationTaskAssessmentRunsMessage->marker = 'quasi';
    $request->describeReplicationTaskAssessmentRunsMessage->maxRecords = 628899;
    $request->marker = 'culpa';
    $request->maxRecords = 'aliquid';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribeReplicationTaskAssessmentRunsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS;

    $response = $sdk->sdk->describeReplicationTaskAssessmentRuns($request);

    if ($response->describeReplicationTaskAssessmentRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationTaskIndividualAssessments

<p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskIndividualAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationTaskIndividualAssessmentsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationTaskIndividualAssessmentsRequest();
    $request->describeReplicationTaskIndividualAssessmentsMessage = new DescribeReplicationTaskIndividualAssessmentsMessage();
    $request->describeReplicationTaskIndividualAssessmentsMessage->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->describeReplicationTaskIndividualAssessmentsMessage->marker = 'soluta';
    $request->describeReplicationTaskIndividualAssessmentsMessage->maxRecords = 33304;
    $request->marker = 'aliquam';
    $request->maxRecords = 'sapiente';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_INDIVIDUAL_ASSESSMENTS;

    $response = $sdk->sdk->describeReplicationTaskIndividualAssessments($request);

    if ($response->describeReplicationTaskIndividualAssessmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationTasks

Returns information about replication tasks for your account in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplicationTasksMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationTasksRequest();
    $request->describeReplicationTasksMessage = new DescribeReplicationTasksMessage();
    $request->describeReplicationTasksMessage->filters = [
        new Filter(),
    ];
    $request->describeReplicationTasksMessage->marker = 'quibusdam';
    $request->describeReplicationTasksMessage->maxRecords = 401259;
    $request->describeReplicationTasksMessage->withoutSettings = false;
    $request->marker = 'deleniti';
    $request->maxRecords = 'itaque';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DescribeReplicationTasksXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASKS;

    $response = $sdk->sdk->describeReplicationTasks($request);

    if ($response->describeReplicationTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSchemas

<p>Returns information about the schema for the specified endpoint.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSchemasMessage;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchemasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSchemasRequest();
    $request->describeSchemasMessage = new DescribeSchemasMessage();
    $request->describeSchemasMessage->endpointArn = 'voluptate';
    $request->describeSchemasMessage->marker = 'ipsa';
    $request->describeSchemasMessage->maxRecords = 326701;
    $request->marker = 'veritatis';
    $request->maxRecords = 'consectetur';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = DescribeSchemasXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_SCHEMAS;

    $response = $sdk->sdk->describeSchemas($request);

    if ($response->describeSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTableStatistics

<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTableStatisticsMessage;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableStatisticsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableStatisticsRequest();
    $request->describeTableStatisticsMessage = new DescribeTableStatisticsMessage();
    $request->describeTableStatisticsMessage->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->describeTableStatisticsMessage->marker = 'mollitia';
    $request->describeTableStatisticsMessage->maxRecords = 68074;
    $request->describeTableStatisticsMessage->replicationTaskArn = 'corrupti';
    $request->marker = 'non';
    $request->maxRecords = 'voluptatem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeTableStatisticsXAmzTargetEnum::AMAZON_DM_SV20160101_DESCRIBE_TABLE_STATISTICS;

    $response = $sdk->sdk->describeTableStatistics($request);

    if ($response->describeTableStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCertificate

Uploads the specified certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCertificateMessage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCertificateRequest();
    $request->importCertificateMessage = new ImportCertificateMessage();
    $request->importCertificateMessage->certificateIdentifier = 'dignissimos';
    $request->importCertificateMessage->certificatePem = 'dicta';
    $request->importCertificateMessage->certificateWallet = 'maiores';
    $request->importCertificateMessage->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ImportCertificateXAmzTargetEnum::AMAZON_DM_SV20160101_IMPORT_CERTIFICATE;

    $response = $sdk->sdk->importCertificate($request);

    if ($response->importCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceMessage;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceMessage = new ListTagsForResourceMessage();
    $request->listTagsForResourceMessage->resourceArn = 'consequuntur';
    $request->listTagsForResourceMessage->resourceArnList = [
        'officia',
        'maxime',
        'dignissimos',
        'officia',
    ];
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_DM_SV20160101_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyEndpoint

<p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyEndpointMessage;
use \OpenAPI\OpenAPI\Models\Shared\DmsTransferSettings;
use \OpenAPI\OpenAPI\Models\Shared\DocDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevelValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchSettings;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationEndpointTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcpMySQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\TargetDbTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IBMDb2Settings;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSettings;
use \OpenAPI\OpenAPI\Models\Shared\MessageFormatValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSaslMechanismEnum;
use \OpenAPI\OpenAPI\Models\Shared\KafkaSecurityProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisSettings;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerSettings;
use \OpenAPI\OpenAPI\Models\Shared\SafeguardPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlogAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MongoDbSettings;
use \OpenAPI\OpenAPI\Models\Shared\AuthMechanismValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\MySQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\NeptuneSettings;
use \OpenAPI\OpenAPI\Models\Shared\OracleSettings;
use \OpenAPI\OpenAPI\Models\Shared\CharLengthSemanticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLSettings;
use \OpenAPI\OpenAPI\Models\Shared\PluginNameValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedisSettings;
use \OpenAPI\OpenAPI\Models\Shared\RedisAuthTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSecurityProtocolValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSettings;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionModeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Settings;
use \OpenAPI\OpenAPI\Models\Shared\CannedAclForObjectsValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatePartitionDelimiterValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatePartitionSequenceValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncodingTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParquetVersionValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\DmsSslModeValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\SybaseSettings;
use \OpenAPI\OpenAPI\Models\Operations\ModifyEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyEndpointRequest();
    $request->modifyEndpointMessage = new ModifyEndpointMessage();
    $request->modifyEndpointMessage->certificateArn = 'ab';
    $request->modifyEndpointMessage->databaseName = 'adipisci';
    $request->modifyEndpointMessage->dmsTransferSettings = new DmsTransferSettings();
    $request->modifyEndpointMessage->dmsTransferSettings->bucketName = 'fuga';
    $request->modifyEndpointMessage->dmsTransferSettings->serviceAccessRoleArn = 'id';
    $request->modifyEndpointMessage->docDbSettings = new DocDbSettings();
    $request->modifyEndpointMessage->docDbSettings->databaseName = 'suscipit';
    $request->modifyEndpointMessage->docDbSettings->docsToInvestigate = 246063;
    $request->modifyEndpointMessage->docDbSettings->extractDocId = false;
    $request->modifyEndpointMessage->docDbSettings->kmsKeyId = 'culpa';
    $request->modifyEndpointMessage->docDbSettings->nestingLevel = NestingLevelValueEnum::ONE;
    $request->modifyEndpointMessage->docDbSettings->password = 'recusandae';
    $request->modifyEndpointMessage->docDbSettings->port = 517309;
    $request->modifyEndpointMessage->docDbSettings->secretsManagerAccessRoleArn = 'fugiat';
    $request->modifyEndpointMessage->docDbSettings->secretsManagerSecretId = 'vel';
    $request->modifyEndpointMessage->docDbSettings->serverName = 'ducimus';
    $request->modifyEndpointMessage->docDbSettings->username = 'Kayla82';
    $request->modifyEndpointMessage->dynamoDbSettings = new DynamoDbSettings();
    $request->modifyEndpointMessage->dynamoDbSettings->serviceAccessRoleArn = 'facilis';
    $request->modifyEndpointMessage->elasticsearchSettings = new ElasticsearchSettings();
    $request->modifyEndpointMessage->elasticsearchSettings->endpointUri = 'cum';
    $request->modifyEndpointMessage->elasticsearchSettings->errorRetryDuration = 414857;
    $request->modifyEndpointMessage->elasticsearchSettings->fullLoadErrorPercentage = 447144;
    $request->modifyEndpointMessage->elasticsearchSettings->serviceAccessRoleArn = 'corporis';
    $request->modifyEndpointMessage->elasticsearchSettings->useNewMappingType = false;
    $request->modifyEndpointMessage->endpointArn = 'reiciendis';
    $request->modifyEndpointMessage->endpointIdentifier = 'assumenda';
    $request->modifyEndpointMessage->endpointType = ReplicationEndpointTypeValueEnum::SOURCE;
    $request->modifyEndpointMessage->engineName = 'recusandae';
    $request->modifyEndpointMessage->exactSettings = false;
    $request->modifyEndpointMessage->externalTableDefinition = 'aliquid';
    $request->modifyEndpointMessage->extraConnectionAttributes = 'aperiam';
    $request->modifyEndpointMessage->gcpMySQLSettings = new GcpMySQLSettings();
    $request->modifyEndpointMessage->gcpMySQLSettings->afterConnectScript = 'cum';
    $request->modifyEndpointMessage->gcpMySQLSettings->cleanSourceMetadataOnMismatch = false;
    $request->modifyEndpointMessage->gcpMySQLSettings->databaseName = 'consectetur';
    $request->modifyEndpointMessage->gcpMySQLSettings->eventsPollInterval = 449083;
    $request->modifyEndpointMessage->gcpMySQLSettings->maxFileSize = 348519;
    $request->modifyEndpointMessage->gcpMySQLSettings->parallelLoadThreads = 937285;
    $request->modifyEndpointMessage->gcpMySQLSettings->password = 'facere';
    $request->modifyEndpointMessage->gcpMySQLSettings->port = 257233;
    $request->modifyEndpointMessage->gcpMySQLSettings->secretsManagerAccessRoleArn = 'doloribus';
    $request->modifyEndpointMessage->gcpMySQLSettings->secretsManagerSecretId = 'suscipit';
    $request->modifyEndpointMessage->gcpMySQLSettings->serverName = 'reiciendis';
    $request->modifyEndpointMessage->gcpMySQLSettings->serverTimezone = 'quidem';
    $request->modifyEndpointMessage->gcpMySQLSettings->targetDbType = TargetDbTypeEnum::MULTIPLE_DATABASES;
    $request->modifyEndpointMessage->gcpMySQLSettings->username = 'Spencer99';
    $request->modifyEndpointMessage->ibmDb2Settings = new IBMDb2Settings();
    $request->modifyEndpointMessage->ibmDb2Settings->currentLsn = 'adipisci';
    $request->modifyEndpointMessage->ibmDb2Settings->databaseName = 'non';
    $request->modifyEndpointMessage->ibmDb2Settings->maxKBytesPerRead = 228263;
    $request->modifyEndpointMessage->ibmDb2Settings->password = 'beatae';
    $request->modifyEndpointMessage->ibmDb2Settings->port = 489509;
    $request->modifyEndpointMessage->ibmDb2Settings->secretsManagerAccessRoleArn = 'a';
    $request->modifyEndpointMessage->ibmDb2Settings->secretsManagerSecretId = 'debitis';
    $request->modifyEndpointMessage->ibmDb2Settings->serverName = 'consectetur';
    $request->modifyEndpointMessage->ibmDb2Settings->setDataCaptureChanges = false;
    $request->modifyEndpointMessage->ibmDb2Settings->username = 'Florian.Pollich';
    $request->modifyEndpointMessage->kafkaSettings = new KafkaSettings();
    $request->modifyEndpointMessage->kafkaSettings->broker = 'voluptates';
    $request->modifyEndpointMessage->kafkaSettings->includeControlDetails = false;
    $request->modifyEndpointMessage->kafkaSettings->includeNullAndEmpty = false;
    $request->modifyEndpointMessage->kafkaSettings->includePartitionValue = false;
    $request->modifyEndpointMessage->kafkaSettings->includeTableAlterOperations = false;
    $request->modifyEndpointMessage->kafkaSettings->includeTransactionDetails = false;
    $request->modifyEndpointMessage->kafkaSettings->messageFormat = MessageFormatValueEnum::JSON_UNFORMATTED;
    $request->modifyEndpointMessage->kafkaSettings->messageMaxBytes = 113816;
    $request->modifyEndpointMessage->kafkaSettings->noHexPrefix = false;
    $request->modifyEndpointMessage->kafkaSettings->partitionIncludeSchemaTable = false;
    $request->modifyEndpointMessage->kafkaSettings->saslMechanism = KafkaSaslMechanismEnum::PLAIN;
    $request->modifyEndpointMessage->kafkaSettings->saslPassword = 'similique';
    $request->modifyEndpointMessage->kafkaSettings->saslUsername = 'tempora';
    $request->modifyEndpointMessage->kafkaSettings->securityProtocol = KafkaSecurityProtocolEnum::PLAINTEXT;
    $request->modifyEndpointMessage->kafkaSettings->sslCaCertificateArn = 'voluptas';
    $request->modifyEndpointMessage->kafkaSettings->sslClientCertificateArn = 'voluptas';
    $request->modifyEndpointMessage->kafkaSettings->sslClientKeyArn = 'voluptas';
    $request->modifyEndpointMessage->kafkaSettings->sslClientKeyPassword = 'minima';
    $request->modifyEndpointMessage->kafkaSettings->topic = 'nobis';
    $request->modifyEndpointMessage->kinesisSettings = new KinesisSettings();
    $request->modifyEndpointMessage->kinesisSettings->includeControlDetails = false;
    $request->modifyEndpointMessage->kinesisSettings->includeNullAndEmpty = false;
    $request->modifyEndpointMessage->kinesisSettings->includePartitionValue = false;
    $request->modifyEndpointMessage->kinesisSettings->includeTableAlterOperations = false;
    $request->modifyEndpointMessage->kinesisSettings->includeTransactionDetails = false;
    $request->modifyEndpointMessage->kinesisSettings->messageFormat = MessageFormatValueEnum::JSON_UNFORMATTED;
    $request->modifyEndpointMessage->kinesisSettings->noHexPrefix = false;
    $request->modifyEndpointMessage->kinesisSettings->partitionIncludeSchemaTable = false;
    $request->modifyEndpointMessage->kinesisSettings->serviceAccessRoleArn = 'adipisci';
    $request->modifyEndpointMessage->kinesisSettings->streamArn = 'minus';
    $request->modifyEndpointMessage->microsoftSQLServerSettings = new MicrosoftSQLServerSettings();
    $request->modifyEndpointMessage->microsoftSQLServerSettings->bcpPacketSize = 171853;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->controlTablesFileGroup = 'blanditiis';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->databaseName = 'in';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->forceLobLookup = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->password = 'dolore';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->port = 304468;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->querySingleAlwaysOnNode = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->readBackupOnly = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->safeguardPolicy = SafeguardPolicyEnum::SHARED_AUTOMATIC_TRUNCATION;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->secretsManagerAccessRoleArn = 'temporibus';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->secretsManagerSecretId = 'ullam';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->serverName = 'adipisci';
    $request->modifyEndpointMessage->microsoftSQLServerSettings->tlogAccessMode = TlogAccessModeEnum::PREFER_TLOG;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->trimSpaceInChar = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->useBcpFullLoad = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->useThirdPartyBackupDevice = false;
    $request->modifyEndpointMessage->microsoftSQLServerSettings->username = 'Jimmy.Luettgen63';
    $request->modifyEndpointMessage->mongoDbSettings = new MongoDbSettings();
    $request->modifyEndpointMessage->mongoDbSettings->authMechanism = AuthMechanismValueEnum::MONGODB_CR;
    $request->modifyEndpointMessage->mongoDbSettings->authSource = 'pariatur';
    $request->modifyEndpointMessage->mongoDbSettings->authType = AuthTypeValueEnum::PASSWORD;
    $request->modifyEndpointMessage->mongoDbSettings->databaseName = 'hic';
    $request->modifyEndpointMessage->mongoDbSettings->docsToInvestigate = 'exercitationem';
    $request->modifyEndpointMessage->mongoDbSettings->extractDocId = 'nobis';
    $request->modifyEndpointMessage->mongoDbSettings->kmsKeyId = 'sit';
    $request->modifyEndpointMessage->mongoDbSettings->nestingLevel = NestingLevelValueEnum::ONE;
    $request->modifyEndpointMessage->mongoDbSettings->password = 'sed';
    $request->modifyEndpointMessage->mongoDbSettings->port = 967966;
    $request->modifyEndpointMessage->mongoDbSettings->secretsManagerAccessRoleArn = 'explicabo';
    $request->modifyEndpointMessage->mongoDbSettings->secretsManagerSecretId = 'asperiores';
    $request->modifyEndpointMessage->mongoDbSettings->serverName = 'facilis';
    $request->modifyEndpointMessage->mongoDbSettings->username = 'Ivy61';
    $request->modifyEndpointMessage->mySQLSettings = new MySQLSettings();
    $request->modifyEndpointMessage->mySQLSettings->afterConnectScript = 'dolore';
    $request->modifyEndpointMessage->mySQLSettings->cleanSourceMetadataOnMismatch = false;
    $request->modifyEndpointMessage->mySQLSettings->databaseName = 'laborum';
    $request->modifyEndpointMessage->mySQLSettings->eventsPollInterval = 152354;
    $request->modifyEndpointMessage->mySQLSettings->maxFileSize = 447516;
    $request->modifyEndpointMessage->mySQLSettings->parallelLoadThreads = 417486;
    $request->modifyEndpointMessage->mySQLSettings->password = 'quidem';
    $request->modifyEndpointMessage->mySQLSettings->port = 131289;
    $request->modifyEndpointMessage->mySQLSettings->secretsManagerAccessRoleArn = 'voluptas';
    $request->modifyEndpointMessage->mySQLSettings->secretsManagerSecretId = 'unde';
    $request->modifyEndpointMessage->mySQLSettings->serverName = 'architecto';
    $request->modifyEndpointMessage->mySQLSettings->serverTimezone = 'suscipit';
    $request->modifyEndpointMessage->mySQLSettings->targetDbType = TargetDbTypeEnum::MULTIPLE_DATABASES;
    $request->modifyEndpointMessage->mySQLSettings->username = 'Sonia.Bins54';
    $request->modifyEndpointMessage->neptuneSettings = new NeptuneSettings();
    $request->modifyEndpointMessage->neptuneSettings->errorRetryDuration = 979574;
    $request->modifyEndpointMessage->neptuneSettings->iamAuthEnabled = false;
    $request->modifyEndpointMessage->neptuneSettings->maxFileSize = 274823;
    $request->modifyEndpointMessage->neptuneSettings->maxRetryCount = 148478;
    $request->modifyEndpointMessage->neptuneSettings->s3BucketFolder = 'provident';
    $request->modifyEndpointMessage->neptuneSettings->s3BucketName = 'eius';
    $request->modifyEndpointMessage->neptuneSettings->serviceAccessRoleArn = 'necessitatibus';
    $request->modifyEndpointMessage->oracleSettings = new OracleSettings();
    $request->modifyEndpointMessage->oracleSettings->accessAlternateDirectly = false;
    $request->modifyEndpointMessage->oracleSettings->addSupplementalLogging = false;
    $request->modifyEndpointMessage->oracleSettings->additionalArchivedLogDestId = 215529;
    $request->modifyEndpointMessage->oracleSettings->allowSelectNestedTables = false;
    $request->modifyEndpointMessage->oracleSettings->archivedLogDestId = 406733;
    $request->modifyEndpointMessage->oracleSettings->archivedLogsOnly = false;
    $request->modifyEndpointMessage->oracleSettings->asmPassword = 'occaecati';
    $request->modifyEndpointMessage->oracleSettings->asmServer = 'quos';
    $request->modifyEndpointMessage->oracleSettings->asmUser = 'voluptatibus';
    $request->modifyEndpointMessage->oracleSettings->charLengthSemantics = CharLengthSemanticsEnum::DEFAULT;
    $request->modifyEndpointMessage->oracleSettings->convertTimestampWithZoneToUTC = false;
    $request->modifyEndpointMessage->oracleSettings->databaseName = 'tempora';
    $request->modifyEndpointMessage->oracleSettings->directPathNoLog = false;
    $request->modifyEndpointMessage->oracleSettings->directPathParallelLoad = false;
    $request->modifyEndpointMessage->oracleSettings->enableHomogenousTablespace = false;
    $request->modifyEndpointMessage->oracleSettings->extraArchivedLogDestIds = [
        970076,
        401713,
    ];
    $request->modifyEndpointMessage->oracleSettings->failTasksOnLobTruncation = false;
    $request->modifyEndpointMessage->oracleSettings->numberDatatypeScale = 25497;
    $request->modifyEndpointMessage->oracleSettings->oraclePathPrefix = 'non';
    $request->modifyEndpointMessage->oracleSettings->parallelAsmReadThreads = 888044;
    $request->modifyEndpointMessage->oracleSettings->password = 'praesentium';
    $request->modifyEndpointMessage->oracleSettings->port = 708609;
    $request->modifyEndpointMessage->oracleSettings->readAheadBlocks = 310381;
    $request->modifyEndpointMessage->oracleSettings->readTableSpaceName = false;
    $request->modifyEndpointMessage->oracleSettings->replacePathPrefix = false;
    $request->modifyEndpointMessage->oracleSettings->retryInterval = 277773;
    $request->modifyEndpointMessage->oracleSettings->secretsManagerAccessRoleArn = 'ipsam';
    $request->modifyEndpointMessage->oracleSettings->secretsManagerOracleAsmAccessRoleArn = 'debitis';
    $request->modifyEndpointMessage->oracleSettings->secretsManagerOracleAsmSecretId = 'rem';
    $request->modifyEndpointMessage->oracleSettings->secretsManagerSecretId = 'sit';
    $request->modifyEndpointMessage->oracleSettings->securityDbEncryption = 'nobis';
    $request->modifyEndpointMessage->oracleSettings->securityDbEncryptionName = 'error';
    $request->modifyEndpointMessage->oracleSettings->serverName = 'veniam';
    $request->modifyEndpointMessage->oracleSettings->spatialDataOptionToGeoJsonFunctionName = 'minima';
    $request->modifyEndpointMessage->oracleSettings->standbyDelayTime = 924159;
    $request->modifyEndpointMessage->oracleSettings->trimSpaceInChar = false;
    $request->modifyEndpointMessage->oracleSettings->useAlternateFolderForOnline = false;
    $request->modifyEndpointMessage->oracleSettings->useBFile = false;
    $request->modifyEndpointMessage->oracleSettings->useDirectPathFullLoad = false;
    $request->modifyEndpointMessage->oracleSettings->useLogminerReader = false;
    $request->modifyEndpointMessage->oracleSettings->usePathPrefix = 'reiciendis';
    $request->modifyEndpointMessage->oracleSettings->username = 'Saige90';
    $request->modifyEndpointMessage->password = 'numquam';
    $request->modifyEndpointMessage->port = 329935;
    $request->modifyEndpointMessage->postgreSQLSettings = new PostgreSQLSettings();
    $request->modifyEndpointMessage->postgreSQLSettings->afterConnectScript = 'in';
    $request->modifyEndpointMessage->postgreSQLSettings->captureDdls = false;
    $request->modifyEndpointMessage->postgreSQLSettings->databaseName = 'officiis';
    $request->modifyEndpointMessage->postgreSQLSettings->ddlArtifactsSchema = 'beatae';
    $request->modifyEndpointMessage->postgreSQLSettings->executeTimeout = 512452;
    $request->modifyEndpointMessage->postgreSQLSettings->failTasksOnLobTruncation = false;
    $request->modifyEndpointMessage->postgreSQLSettings->heartbeatEnable = false;
    $request->modifyEndpointMessage->postgreSQLSettings->heartbeatFrequency = 348476;
    $request->modifyEndpointMessage->postgreSQLSettings->heartbeatSchema = 'praesentium';
    $request->modifyEndpointMessage->postgreSQLSettings->mapBooleanAsBoolean = false;
    $request->modifyEndpointMessage->postgreSQLSettings->maxFileSize = 740098;
    $request->modifyEndpointMessage->postgreSQLSettings->password = 'laboriosam';
    $request->modifyEndpointMessage->postgreSQLSettings->pluginName = PluginNameValueEnum::PGLOGICAL;
    $request->modifyEndpointMessage->postgreSQLSettings->port = 530089;
    $request->modifyEndpointMessage->postgreSQLSettings->secretsManagerAccessRoleArn = 'error';
    $request->modifyEndpointMessage->postgreSQLSettings->secretsManagerSecretId = 'hic';
    $request->modifyEndpointMessage->postgreSQLSettings->serverName = 'expedita';
    $request->modifyEndpointMessage->postgreSQLSettings->slotName = 'debitis';
    $request->modifyEndpointMessage->postgreSQLSettings->trimSpaceInChar = false;
    $request->modifyEndpointMessage->postgreSQLSettings->username = 'Conor_Pagac';
    $request->modifyEndpointMessage->redisSettings = new RedisSettings();
    $request->modifyEndpointMessage->redisSettings->authPassword = 'dolorum';
    $request->modifyEndpointMessage->redisSettings->authType = RedisAuthTypeValueEnum::AUTH_ROLE;
    $request->modifyEndpointMessage->redisSettings->authUserName = 'accusamus';
    $request->modifyEndpointMessage->redisSettings->port = 272683;
    $request->modifyEndpointMessage->redisSettings->serverName = 'atque';
    $request->modifyEndpointMessage->redisSettings->sslCaCertificateArn = 'fugit';
    $request->modifyEndpointMessage->redisSettings->sslSecurityProtocol = SslSecurityProtocolValueEnum::PLAINTEXT;
    $request->modifyEndpointMessage->redshiftSettings = new RedshiftSettings();
    $request->modifyEndpointMessage->redshiftSettings->acceptAnyDate = false;
    $request->modifyEndpointMessage->redshiftSettings->afterConnectScript = 'fugiat';
    $request->modifyEndpointMessage->redshiftSettings->bucketFolder = 'voluptatem';
    $request->modifyEndpointMessage->redshiftSettings->bucketName = 'culpa';
    $request->modifyEndpointMessage->redshiftSettings->caseSensitiveNames = false;
    $request->modifyEndpointMessage->redshiftSettings->compUpdate = false;
    $request->modifyEndpointMessage->redshiftSettings->connectionTimeout = 710337;
    $request->modifyEndpointMessage->redshiftSettings->databaseName = 'magnam';
    $request->modifyEndpointMessage->redshiftSettings->dateFormat = 'consequatur';
    $request->modifyEndpointMessage->redshiftSettings->emptyAsNull = false;
    $request->modifyEndpointMessage->redshiftSettings->encryptionMode = EncryptionModeValueEnum::SSE_S3;
    $request->modifyEndpointMessage->redshiftSettings->explicitIds = false;
    $request->modifyEndpointMessage->redshiftSettings->fileTransferUploadStreams = 372679;
    $request->modifyEndpointMessage->redshiftSettings->loadTimeout = 24527;
    $request->modifyEndpointMessage->redshiftSettings->mapBooleanAsBoolean = false;
    $request->modifyEndpointMessage->redshiftSettings->maxFileSize = 530537;
    $request->modifyEndpointMessage->redshiftSettings->password = 'quas';
    $request->modifyEndpointMessage->redshiftSettings->port = 922112;
    $request->modifyEndpointMessage->redshiftSettings->removeQuotes = false;
    $request->modifyEndpointMessage->redshiftSettings->replaceChars = 'corporis';
    $request->modifyEndpointMessage->redshiftSettings->replaceInvalidChars = 'et';
    $request->modifyEndpointMessage->redshiftSettings->secretsManagerAccessRoleArn = 'blanditiis';
    $request->modifyEndpointMessage->redshiftSettings->secretsManagerSecretId = 'ex';
    $request->modifyEndpointMessage->redshiftSettings->serverName = 'sed';
    $request->modifyEndpointMessage->redshiftSettings->serverSideEncryptionKmsKeyId = 'sit';
    $request->modifyEndpointMessage->redshiftSettings->serviceAccessRoleArn = 'vel';
    $request->modifyEndpointMessage->redshiftSettings->timeFormat = 'nostrum';
    $request->modifyEndpointMessage->redshiftSettings->trimBlanks = false;
    $request->modifyEndpointMessage->redshiftSettings->truncateColumns = false;
    $request->modifyEndpointMessage->redshiftSettings->username = 'Suzanne27';
    $request->modifyEndpointMessage->redshiftSettings->writeBufferSize = 968865;
    $request->modifyEndpointMessage->s3Settings = new S3Settings();
    $request->modifyEndpointMessage->s3Settings->addColumnName = false;
    $request->modifyEndpointMessage->s3Settings->addTrailingPaddingCharacter = false;
    $request->modifyEndpointMessage->s3Settings->bucketFolder = 'dolorem';
    $request->modifyEndpointMessage->s3Settings->bucketName = 'harum';
    $request->modifyEndpointMessage->s3Settings->cannedAclForObjects = CannedAclForObjectsValueEnum::NONE;
    $request->modifyEndpointMessage->s3Settings->cdcInsertsAndUpdates = false;
    $request->modifyEndpointMessage->s3Settings->cdcInsertsOnly = false;
    $request->modifyEndpointMessage->s3Settings->cdcMaxBatchInterval = 99416;
    $request->modifyEndpointMessage->s3Settings->cdcMinFileSize = 577140;
    $request->modifyEndpointMessage->s3Settings->cdcPath = 'labore';
    $request->modifyEndpointMessage->s3Settings->compressionType = CompressionTypeValueEnum::GZIP;
    $request->modifyEndpointMessage->s3Settings->csvDelimiter = 'atque';
    $request->modifyEndpointMessage->s3Settings->csvNoSupValue = 'laborum';
    $request->modifyEndpointMessage->s3Settings->csvNullValue = 'nam';
    $request->modifyEndpointMessage->s3Settings->csvRowDelimiter = 'tenetur';
    $request->modifyEndpointMessage->s3Settings->dataFormat = DataFormatValueEnum::CSV;
    $request->modifyEndpointMessage->s3Settings->dataPageSize = 2703;
    $request->modifyEndpointMessage->s3Settings->datePartitionDelimiter = DatePartitionDelimiterValueEnum::SLASH;
    $request->modifyEndpointMessage->s3Settings->datePartitionEnabled = false;
    $request->modifyEndpointMessage->s3Settings->datePartitionSequence = DatePartitionSequenceValueEnum::MMYYYYDD;
    $request->modifyEndpointMessage->s3Settings->datePartitionTimezone = 'voluptate';
    $request->modifyEndpointMessage->s3Settings->dictPageSizeLimit = 600392;
    $request->modifyEndpointMessage->s3Settings->enableStatistics = false;
    $request->modifyEndpointMessage->s3Settings->encodingType = EncodingTypeValueEnum::RLE_DICTIONARY;
    $request->modifyEndpointMessage->s3Settings->encryptionMode = EncryptionModeValueEnum::SSE_KMS;
    $request->modifyEndpointMessage->s3Settings->expectedBucketOwner = 'repellendus';
    $request->modifyEndpointMessage->s3Settings->externalTableDefinition = 'delectus';
    $request->modifyEndpointMessage->s3Settings->glueCatalogGeneration = false;
    $request->modifyEndpointMessage->s3Settings->ignoreHeaderRows = 914791;
    $request->modifyEndpointMessage->s3Settings->includeOpForFullLoad = false;
    $request->modifyEndpointMessage->s3Settings->maxFileSize = 16871;
    $request->modifyEndpointMessage->s3Settings->parquetTimestampInMillisecond = false;
    $request->modifyEndpointMessage->s3Settings->parquetVersion = ParquetVersionValueEnum::PARQUET20;
    $request->modifyEndpointMessage->s3Settings->preserveTransactions = false;
    $request->modifyEndpointMessage->s3Settings->rfc4180 = false;
    $request->modifyEndpointMessage->s3Settings->rowGroupLength = 696483;
    $request->modifyEndpointMessage->s3Settings->serverSideEncryptionKmsKeyId = 'reprehenderit';
    $request->modifyEndpointMessage->s3Settings->serviceAccessRoleArn = 'facere';
    $request->modifyEndpointMessage->s3Settings->timestampColumnName = 'fuga';
    $request->modifyEndpointMessage->s3Settings->useCsvNoSupValue = false;
    $request->modifyEndpointMessage->s3Settings->useTaskStartTimeForFullLoadTimestamp = false;
    $request->modifyEndpointMessage->serverName = 'praesentium';
    $request->modifyEndpointMessage->serviceAccessRoleArn = 'mollitia';
    $request->modifyEndpointMessage->sslMode = DmsSslModeValueEnum::REQUIRE;
    $request->modifyEndpointMessage->sybaseSettings = new SybaseSettings();
    $request->modifyEndpointMessage->sybaseSettings->databaseName = 'voluptatem';
    $request->modifyEndpointMessage->sybaseSettings->password = 'quisquam';
    $request->modifyEndpointMessage->sybaseSettings->port = 919532;
    $request->modifyEndpointMessage->sybaseSettings->secretsManagerAccessRoleArn = 'quasi';
    $request->modifyEndpointMessage->sybaseSettings->secretsManagerSecretId = 'atque';
    $request->modifyEndpointMessage->sybaseSettings->serverName = 'reprehenderit';
    $request->modifyEndpointMessage->sybaseSettings->username = 'Yvette_Leannon';
    $request->modifyEndpointMessage->username = 'Rae.Borer';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ModifyEndpointXAmzTargetEnum::AMAZON_DM_SV20160101_MODIFY_ENDPOINT;

    $response = $sdk->sdk->modifyEndpoint($request);

    if ($response->modifyEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyEventSubscription

Modifies an existing DMS event notification subscription. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyEventSubscriptionMessage;
use \OpenAPI\OpenAPI\Models\Operations\ModifyEventSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyEventSubscriptionRequest();
    $request->modifyEventSubscriptionMessage = new ModifyEventSubscriptionMessage();
    $request->modifyEventSubscriptionMessage->enabled = false;
    $request->modifyEventSubscriptionMessage->eventCategories = [
        'minima',
        'aspernatur',
        'ex',
    ];
    $request->modifyEventSubscriptionMessage->snsTopicArn = 'maiores';
    $request->modifyEventSubscriptionMessage->sourceType = 'corrupti';
    $request->modifyEventSubscriptionMessage->subscriptionName = 'at';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = ModifyEventSubscriptionXAmzTargetEnum::AMAZON_DM_SV20160101_MODIFY_EVENT_SUBSCRIPTION;

    $response = $sdk->sdk->modifyEventSubscription($request);

    if ($response->modifyEventSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyReplicationInstance

<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyReplicationInstanceMessage;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyReplicationInstanceRequest();
    $request->modifyReplicationInstanceMessage = new ModifyReplicationInstanceMessage();
    $request->modifyReplicationInstanceMessage->allocatedStorage = 923306;
    $request->modifyReplicationInstanceMessage->allowMajorVersionUpgrade = false;
    $request->modifyReplicationInstanceMessage->applyImmediately = false;
    $request->modifyReplicationInstanceMessage->autoMinorVersionUpgrade = false;
    $request->modifyReplicationInstanceMessage->engineVersion = 'dolorum';
    $request->modifyReplicationInstanceMessage->multiAZ = false;
    $request->modifyReplicationInstanceMessage->networkType = 'repellendus';
    $request->modifyReplicationInstanceMessage->preferredMaintenanceWindow = 'labore';
    $request->modifyReplicationInstanceMessage->replicationInstanceArn = 'reiciendis';
    $request->modifyReplicationInstanceMessage->replicationInstanceClass = 'doloremque';
    $request->modifyReplicationInstanceMessage->replicationInstanceIdentifier = 'repudiandae';
    $request->modifyReplicationInstanceMessage->vpcSecurityGroupIds = [
        'accusantium',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = ModifyReplicationInstanceXAmzTargetEnum::AMAZON_DM_SV20160101_MODIFY_REPLICATION_INSTANCE;

    $response = $sdk->sdk->modifyReplicationInstance($request);

    if ($response->modifyReplicationInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyReplicationSubnetGroup

Modifies the settings for the specified replication subnet group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyReplicationSubnetGroupMessage;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationSubnetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyReplicationSubnetGroupRequest();
    $request->modifyReplicationSubnetGroupMessage = new ModifyReplicationSubnetGroupMessage();
    $request->modifyReplicationSubnetGroupMessage->replicationSubnetGroupDescription = 'magnam';
    $request->modifyReplicationSubnetGroupMessage->replicationSubnetGroupIdentifier = 'saepe';
    $request->modifyReplicationSubnetGroupMessage->subnetIds = [
        'occaecati',
    ];
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = ModifyReplicationSubnetGroupXAmzTargetEnum::AMAZON_DM_SV20160101_MODIFY_REPLICATION_SUBNET_GROUP;

    $response = $sdk->sdk->modifyReplicationSubnetGroup($request);

    if ($response->modifyReplicationSubnetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyReplicationTask

<p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Shared\MigrationTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyReplicationTaskRequest();
    $request->modifyReplicationTaskMessage = new ModifyReplicationTaskMessage();
    $request->modifyReplicationTaskMessage->cdcStartPosition = 'fugit';
    $request->modifyReplicationTaskMessage->cdcStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-30T23:44:42.233Z');
    $request->modifyReplicationTaskMessage->cdcStopPosition = 'reprehenderit';
    $request->modifyReplicationTaskMessage->migrationType = MigrationTypeValueEnum::CDC;
    $request->modifyReplicationTaskMessage->replicationTaskArn = 'illo';
    $request->modifyReplicationTaskMessage->replicationTaskIdentifier = 'corporis';
    $request->modifyReplicationTaskMessage->replicationTaskSettings = 'quidem';
    $request->modifyReplicationTaskMessage->tableMappings = 'eveniet';
    $request->modifyReplicationTaskMessage->taskData = 'non';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ModifyReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_MODIFY_REPLICATION_TASK;

    $response = $sdk->sdk->modifyReplicationTask($request);

    if ($response->modifyReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveReplicationTask

Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\MoveReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Operations\MoveReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveReplicationTaskRequest();
    $request->moveReplicationTaskMessage = new MoveReplicationTaskMessage();
    $request->moveReplicationTaskMessage->replicationTaskArn = 'eveniet';
    $request->moveReplicationTaskMessage->targetReplicationInstanceArn = 'qui';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = MoveReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_MOVE_REPLICATION_TASK;

    $response = $sdk->sdk->moveReplicationTask($request);

    if ($response->moveReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootReplicationInstance

Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootReplicationInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootReplicationInstanceMessage;
use \OpenAPI\OpenAPI\Models\Operations\RebootReplicationInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootReplicationInstanceRequest();
    $request->rebootReplicationInstanceMessage = new RebootReplicationInstanceMessage();
    $request->rebootReplicationInstanceMessage->forceFailover = false;
    $request->rebootReplicationInstanceMessage->forcePlannedFailover = false;
    $request->rebootReplicationInstanceMessage->replicationInstanceArn = 'rem';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = RebootReplicationInstanceXAmzTargetEnum::AMAZON_DM_SV20160101_REBOOT_REPLICATION_INSTANCE;

    $response = $sdk->sdk->rebootReplicationInstance($request);

    if ($response->rebootReplicationInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshSchemas

Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefreshSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\RefreshSchemasMessage;
use \OpenAPI\OpenAPI\Models\Operations\RefreshSchemasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshSchemasRequest();
    $request->refreshSchemasMessage = new RefreshSchemasMessage();
    $request->refreshSchemasMessage->endpointArn = 'mollitia';
    $request->refreshSchemasMessage->replicationInstanceArn = 'voluptas';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = RefreshSchemasXAmzTargetEnum::AMAZON_DM_SV20160101_REFRESH_SCHEMAS;

    $response = $sdk->sdk->refreshSchemas($request);

    if ($response->refreshSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reloadTables

<p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReloadTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReloadTablesMessage;
use \OpenAPI\OpenAPI\Models\Shared\ReloadOptionValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableToReload;
use \OpenAPI\OpenAPI\Models\Operations\ReloadTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReloadTablesRequest();
    $request->reloadTablesMessage = new ReloadTablesMessage();
    $request->reloadTablesMessage->reloadOption = ReloadOptionValueEnum::VALIDATE_ONLY;
    $request->reloadTablesMessage->replicationTaskArn = 'nesciunt';
    $request->reloadTablesMessage->tablesToReload = [
        new TableToReload(),
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = ReloadTablesXAmzTargetEnum::AMAZON_DM_SV20160101_RELOAD_TABLES;

    $response = $sdk->sdk->reloadTables($request);

    if ($response->reloadTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagsFromResource

Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsFromResourceMessage;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsFromResourceRequest();
    $request->removeTagsFromResourceMessage = new RemoveTagsFromResourceMessage();
    $request->removeTagsFromResourceMessage->resourceArn = 'adipisci';
    $request->removeTagsFromResourceMessage->tagKeys = [
        'laudantium',
        'eum',
        'nemo',
        'recusandae',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = RemoveTagsFromResourceXAmzTargetEnum::AMAZON_DM_SV20160101_REMOVE_TAGS_FROM_RESOURCE;

    $response = $sdk->sdk->removeTagsFromResource($request);

    if ($response->removeTagsFromResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runFleetAdvisorLsaAnalysis

Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunFleetAdvisorLsaAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunFleetAdvisorLsaAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunFleetAdvisorLsaAnalysisRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = RunFleetAdvisorLsaAnalysisXAmzTargetEnum::AMAZON_DM_SV20160101_RUN_FLEET_ADVISOR_LSA_ANALYSIS;

    $response = $sdk->sdk->runFleetAdvisorLsaAnalysis($request);

    if ($response->runFleetAdvisorLsaAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRecommendations

<p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationSettings;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRecommendationsRequest();
    $request->startRecommendationsRequest = new StartRecommendationsRequest();
    $request->startRecommendationsRequest->databaseId = 'animi';
    $request->startRecommendationsRequest->settings = new RecommendationSettings();
    $request->startRecommendationsRequest->settings->instanceSizingType = 'ex';
    $request->startRecommendationsRequest->settings->workloadType = 'aliquid';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = StartRecommendationsXAmzTargetEnum::AMAZON_DM_SV20160101_START_RECOMMENDATIONS;

    $response = $sdk->sdk->startRecommendations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplicationTask

<p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Shared\StartReplicationTaskTypeValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReplicationTaskRequest();
    $request->startReplicationTaskMessage = new StartReplicationTaskMessage();
    $request->startReplicationTaskMessage->cdcStartPosition = 'officia';
    $request->startReplicationTaskMessage->cdcStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-17T11:17:46.661Z');
    $request->startReplicationTaskMessage->cdcStopPosition = 'modi';
    $request->startReplicationTaskMessage->replicationTaskArn = 'voluptatibus';
    $request->startReplicationTaskMessage->startReplicationTaskType = StartReplicationTaskTypeValueEnum::RESUME_PROCESSING;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = StartReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_START_REPLICATION_TASK;

    $response = $sdk->sdk->startReplicationTask($request);

    if ($response->startReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplicationTaskAssessment

<p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartReplicationTaskAssessmentMessage;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskAssessmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReplicationTaskAssessmentRequest();
    $request->startReplicationTaskAssessmentMessage = new StartReplicationTaskAssessmentMessage();
    $request->startReplicationTaskAssessmentMessage->replicationTaskArn = 'inventore';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = StartReplicationTaskAssessmentXAmzTargetEnum::AMAZON_DM_SV20160101_START_REPLICATION_TASK_ASSESSMENT;

    $response = $sdk->sdk->startReplicationTaskAssessment($request);

    if ($response->startReplicationTaskAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplicationTaskAssessmentRun

<p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskAssessmentRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartReplicationTaskAssessmentRunMessage;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationTaskAssessmentRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReplicationTaskAssessmentRunRequest();
    $request->startReplicationTaskAssessmentRunMessage = new StartReplicationTaskAssessmentRunMessage();
    $request->startReplicationTaskAssessmentRunMessage->assessmentRunName = 'eius';
    $request->startReplicationTaskAssessmentRunMessage->exclude = [
        'at',
        'impedit',
        'eos',
    ];
    $request->startReplicationTaskAssessmentRunMessage->includeOnly = [
        'eum',
        'dicta',
        'minima',
        'beatae',
    ];
    $request->startReplicationTaskAssessmentRunMessage->replicationTaskArn = 'cupiditate';
    $request->startReplicationTaskAssessmentRunMessage->resultEncryptionMode = 'provident';
    $request->startReplicationTaskAssessmentRunMessage->resultKmsKeyArn = 'earum';
    $request->startReplicationTaskAssessmentRunMessage->resultLocationBucket = 'soluta';
    $request->startReplicationTaskAssessmentRunMessage->resultLocationFolder = 'hic';
    $request->startReplicationTaskAssessmentRunMessage->serviceAccessRoleArn = 'illum';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = StartReplicationTaskAssessmentRunXAmzTargetEnum::AMAZON_DM_SV20160101_START_REPLICATION_TASK_ASSESSMENT_RUN;

    $response = $sdk->sdk->startReplicationTaskAssessmentRun($request);

    if ($response->startReplicationTaskAssessmentRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopReplicationTask

Stops the replication task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopReplicationTaskMessage;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopReplicationTaskRequest();
    $request->stopReplicationTaskMessage = new StopReplicationTaskMessage();
    $request->stopReplicationTaskMessage->replicationTaskArn = 'suscipit';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = StopReplicationTaskXAmzTargetEnum::AMAZON_DM_SV20160101_STOP_REPLICATION_TASK;

    $response = $sdk->sdk->stopReplicationTask($request);

    if ($response->stopReplicationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testConnection

Tests the connection between the replication instance and the endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestConnectionMessage;
use \OpenAPI\OpenAPI\Models\Operations\TestConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestConnectionRequest();
    $request->testConnectionMessage = new TestConnectionMessage();
    $request->testConnectionMessage->endpointArn = 'nulla';
    $request->testConnectionMessage->replicationInstanceArn = 'consequatur';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = TestConnectionXAmzTargetEnum::AMAZON_DM_SV20160101_TEST_CONNECTION;

    $response = $sdk->sdk->testConnection($request);

    if ($response->testConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionsToEventBridge

<p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionsToEventBridgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriptionsToEventBridgeMessage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionsToEventBridgeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionsToEventBridgeRequest();
    $request->updateSubscriptionsToEventBridgeMessage = new UpdateSubscriptionsToEventBridgeMessage();
    $request->updateSubscriptionsToEventBridgeMessage->forceMove = false;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateSubscriptionsToEventBridgeXAmzTargetEnum::AMAZON_DM_SV20160101_UPDATE_SUBSCRIPTIONS_TO_EVENT_BRIDGE;

    $response = $sdk->sdk->updateSubscriptionsToEventBridge($request);

    if ($response->updateSubscriptionsToEventBridgeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
