# SDK

## Overview

<fullname>CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p> </note> <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudtrail/>
### Available Operations

* [addTags](#addtags) - Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).
* [cancelQuery](#cancelquery) - Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.
* [createChannel](#createchannel) - Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.
* [createEventDataStore](#createeventdatastore) - Creates a new event data store.
* [createTrail](#createtrail) - Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 
* [deleteChannel](#deletechannel) - Deletes a channel.
* [deleteEventDataStore](#deleteeventdatastore) - <p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>
* [deleteResourcePolicy](#deleteresourcepolicy) -  Deletes the resource-based policy attached to the CloudTrail channel. 
* [deleteTrail](#deletetrail) - Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
* [deregisterOrganizationDelegatedAdmin](#deregisterorganizationdelegatedadmin) - Removes CloudTrail delegated administrator permissions from a member account in an organization.
* [describeQuery](#describequery) - Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.
* [describeTrails](#describetrails) - Retrieves settings for one or more trails associated with the current region for your account.
* [getChannel](#getchannel) -  Returns information about a specific channel. 
* [getEventDataStore](#geteventdatastore) - Returns information about an event data store specified as either an ARN or the ID portion of the ARN.
* [getEventSelectors](#geteventselectors) - <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>
* [getImport](#getimport) -  Returns information about a specific import. 
* [getInsightSelectors](#getinsightselectors) - <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>
* [getQueryResults](#getqueryresults) - Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.
* [getResourcePolicy](#getresourcepolicy) -  Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 
* [getTrail](#gettrail) - Returns settings information for a specified trail.
* [getTrailStatus](#gettrailstatus) - Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.
* [listChannels](#listchannels) -  Lists the channels in the current account, and their source names. 
* [listEventDataStores](#listeventdatastores) - Returns information about all event data stores in the account, in the current region.
* [listImportFailures](#listimportfailures) -  Returns a list of failures for the specified import. 
* [listImports](#listimports) -  Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 
* [listPublicKeys](#listpublickeys) - <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>
* [listQueries](#listqueries) - Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.
* [listTags](#listtags) - Lists the tags for the trail, event data store, or channel in the current region.
* [listTrails](#listtrails) - Lists trails that are in the current account.
* [lookupEvents](#lookupevents) - <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>
* [putEventSelectors](#puteventselectors) - <p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>
* [putInsightSelectors](#putinsightselectors) - Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.
* [putResourcePolicy](#putresourcepolicy) -  Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 
* [registerOrganizationDelegatedAdmin](#registerorganizationdelegatedadmin) - Registers an organization’s member account as the CloudTrail delegated administrator.
* [removeTags](#removetags) - Removes the specified tags from a trail, event data store, or channel.
* [restoreEventDataStore](#restoreeventdatastore) - Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.
* [startImport](#startimport) - <p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>
* [startLogging](#startlogging) - Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
* [startQuery](#startquery) - Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.
* [stopImport](#stopimport) -  Stops a specified import. 
* [stopLogging](#stoplogging) - Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.
* [updateChannel](#updatechannel) - Updates a channel specified by a required channel ARN or UUID.
* [updateEventDataStore](#updateeventdatastore) - <p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>
* [updateTrail](#updatetrail) - Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

## addTags

Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsRequest = new AddTagsRequest();
    $request->addTagsRequest->resourceId = 'error';
    $request->addTagsRequest->tagsList = [
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
    $request->xAmzTarget = AddTagsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_ADD_TAGS;

    $response = $sdk->sdk->addTags($request);

    if ($response->addTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelQuery

Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelQueryRequest();
    $request->cancelQueryRequest = new CancelQueryRequest();
    $request->cancelQueryRequest->eventDataStore = 'suscipit';
    $request->cancelQueryRequest->queryId = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = CancelQueryXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CANCEL_QUERY;

    $response = $sdk->sdk->cancelQuery($request);

    if ($response->cancelQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChannel

Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\DestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->createChannelRequest = new CreateChannelRequest();
    $request->createChannelRequest->destinations = [
        new Destination(),
        new Destination(),
        new Destination(),
        new Destination(),
    ];
    $request->createChannelRequest->name = 'Erica Bogisich III';
    $request->createChannelRequest->source = 'repellendus';
    $request->createChannelRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateChannelXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_CHANNEL;

    $response = $sdk->sdk->createChannel($request);

    if ($response->createChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventDataStore

Creates a new event data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedEventSelector;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedFieldSelector;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventDataStoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventDataStoreRequest();
    $request->createEventDataStoreRequest = new CreateEventDataStoreRequest();
    $request->createEventDataStoreRequest->advancedEventSelectors = [
        new AdvancedEventSelector(),
        new AdvancedEventSelector(),
        new AdvancedEventSelector(),
        new AdvancedEventSelector(),
    ];
    $request->createEventDataStoreRequest->kmsKeyId = 'esse';
    $request->createEventDataStoreRequest->multiRegionEnabled = false;
    $request->createEventDataStoreRequest->name = 'Miss Lowell Parisian';
    $request->createEventDataStoreRequest->organizationEnabled = false;
    $request->createEventDataStoreRequest->retentionPeriod = 582020;
    $request->createEventDataStoreRequest->tagsList = [
        new Tag(),
    ];
    $request->createEventDataStoreRequest->terminationProtectionEnabled = false;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateEventDataStoreXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_EVENT_DATA_STORE;

    $response = $sdk->sdk->createEventDataStore($request);

    if ($response->createEventDataStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrail

Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrailRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTrailRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrailRequest();
    $request->createTrailRequest = new CreateTrailRequest();
    $request->createTrailRequest->cloudWatchLogsLogGroupArn = 'modi';
    $request->createTrailRequest->cloudWatchLogsRoleArn = 'qui';
    $request->createTrailRequest->enableLogFileValidation = false;
    $request->createTrailRequest->includeGlobalServiceEvents = false;
    $request->createTrailRequest->isMultiRegionTrail = false;
    $request->createTrailRequest->isOrganizationTrail = false;
    $request->createTrailRequest->kmsKeyId = 'impedit';
    $request->createTrailRequest->name = 'Cory Emmerich';
    $request->createTrailRequest->s3BucketName = 'perferendis';
    $request->createTrailRequest->s3KeyPrefix = 'ad';
    $request->createTrailRequest->snsTopicName = 'natus';
    $request->createTrailRequest->tagsList = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = CreateTrailXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_TRAIL;

    $response = $sdk->sdk->createTrail($request);

    if ($response->createTrailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannel

Deletes a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->deleteChannelRequest = new DeleteChannelRequest();
    $request->deleteChannelRequest->channel = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteChannelXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_CHANNEL;

    $response = $sdk->sdk->deleteChannel($request);

    if ($response->deleteChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventDataStore

<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventDataStoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventDataStoreRequest();
    $request->deleteEventDataStoreRequest = new DeleteEventDataStoreRequest();
    $request->deleteEventDataStoreRequest->eventDataStore = 'reiciendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DeleteEventDataStoreXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_EVENT_DATA_STORE;

    $response = $sdk->sdk->deleteEventDataStore($request);

    if ($response->deleteEventDataStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

 Deletes the resource-based policy attached to the CloudTrail channel. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->resourceArn = 'nobis';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrail

Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrailRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTrailRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrailRequest();
    $request->deleteTrailRequest = new DeleteTrailRequest();
    $request->deleteTrailRequest->name = 'Miss Aubrey Williamson';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteTrailXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_TRAIL;

    $response = $sdk->sdk->deleteTrail($request);

    if ($response->deleteTrailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterOrganizationDelegatedAdmin

Removes CloudTrail delegated administrator permissions from a member account in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOrganizationDelegatedAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterOrganizationDelegatedAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOrganizationDelegatedAdminXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterOrganizationDelegatedAdminRequest();
    $request->deregisterOrganizationDelegatedAdminRequest = new DeregisterOrganizationDelegatedAdminRequest();
    $request->deregisterOrganizationDelegatedAdminRequest->delegatedAdminAccountId = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeregisterOrganizationDelegatedAdminXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DEREGISTER_ORGANIZATION_DELEGATED_ADMIN;

    $response = $sdk->sdk->deregisterOrganizationDelegatedAdmin($request);

    if ($response->deregisterOrganizationDelegatedAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeQuery

Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeQueryRequest();
    $request->describeQueryRequest = new DescribeQueryRequest();
    $request->describeQueryRequest->eventDataStore = 'animi';
    $request->describeQueryRequest->queryId = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DescribeQueryXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DESCRIBE_QUERY;

    $response = $sdk->sdk->describeQuery($request);

    if ($response->describeQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTrails

Retrieves settings for one or more trails associated with the current region for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTrailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrailsRequest();
    $request->describeTrailsRequest = new DescribeTrailsRequest();
    $request->describeTrailsRequest->includeShadowTrails = false;
    $request->describeTrailsRequest->trailNameList = [
        'quasi',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeTrailsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DESCRIBE_TRAILS;

    $response = $sdk->sdk->describeTrails($request);

    if ($response->describeTrailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannel

 Returns information about a specific channel. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelRequest();
    $request->getChannelRequest = new GetChannelRequest();
    $request->getChannelRequest->channel = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetChannelXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_CHANNEL;

    $response = $sdk->sdk->getChannel($request);

    if ($response->getChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventDataStore

Returns information about an event data store specified as either an ARN or the ID portion of the ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventDataStoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventDataStoreRequest();
    $request->getEventDataStoreRequest = new GetEventDataStoreRequest();
    $request->getEventDataStoreRequest->eventDataStore = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = GetEventDataStoreXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_EVENT_DATA_STORE;

    $response = $sdk->sdk->getEventDataStore($request);

    if ($response->getEventDataStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventSelectors

<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEventSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSelectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventSelectorsRequest();
    $request->getEventSelectorsRequest = new GetEventSelectorsRequest();
    $request->getEventSelectorsRequest->trailName = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = GetEventSelectorsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_EVENT_SELECTORS;

    $response = $sdk->sdk->getEventSelectors($request);

    if ($response->getEventSelectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImport

 Returns information about a specific import. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImportRequest();
    $request->getImportRequest = new GetImportRequest();
    $request->getImportRequest->importId = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = GetImportXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_IMPORT;

    $response = $sdk->sdk->getImport($request);

    if ($response->getImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightSelectors

<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInsightSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightSelectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightSelectorsRequest();
    $request->getInsightSelectorsRequest = new GetInsightSelectorsRequest();
    $request->getInsightSelectorsRequest->trailName = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = GetInsightSelectorsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_INSIGHT_SELECTORS;

    $response = $sdk->sdk->getInsightSelectors($request);

    if ($response->getInsightSelectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryResults

Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryResultsRequest();
    $request->getQueryResultsRequest = new GetQueryResultsRequest();
    $request->getQueryResultsRequest->eventDataStore = 'est';
    $request->getQueryResultsRequest->maxQueryResults = 842342;
    $request->getQueryResultsRequest->nextToken = 'explicabo';
    $request->getQueryResultsRequest->queryId = 'deserunt';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = GetQueryResultsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_QUERY_RESULTS;

    $response = $sdk->sdk->getQueryResults($request);

    if ($response->getQueryResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

 Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest->resourceArn = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetResourcePolicyXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_RESOURCE_POLICY;

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrail

Returns settings information for a specified trail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrailRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTrailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrailRequest();
    $request->getTrailRequest = new GetTrailRequest();
    $request->getTrailRequest->name = 'Olivia Rice';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = GetTrailXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_TRAIL;

    $response = $sdk->sdk->getTrail($request);

    if ($response->getTrailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrailStatus

Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrailStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTrailStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrailStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrailStatusRequest();
    $request->getTrailStatusRequest = new GetTrailStatusRequest();
    $request->getTrailStatusRequest->name = 'Luke Fadel';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetTrailStatusXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_TRAIL_STATUS;

    $response = $sdk->sdk->getTrailStatus($request);

    if ($response->getTrailStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannels

 Lists the channels in the current account, and their source names. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelsRequest();
    $request->listChannelsRequest = new ListChannelsRequest();
    $request->listChannelsRequest->maxResults = 297437;
    $request->listChannelsRequest->nextToken = 'cumque';
    $request->maxResults = 'facere';
    $request->nextToken = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListChannelsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_CHANNELS;

    $response = $sdk->sdk->listChannels($request);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventDataStores

Returns information about all event data stores in the account, in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventDataStoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEventDataStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventDataStoresXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventDataStoresRequest();
    $request->listEventDataStoresRequest = new ListEventDataStoresRequest();
    $request->listEventDataStoresRequest->maxResults = 965417;
    $request->listEventDataStoresRequest->nextToken = 'quidem';
    $request->maxResults = 'provident';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = ListEventDataStoresXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_EVENT_DATA_STORES;

    $response = $sdk->sdk->listEventDataStores($request);

    if ($response->listEventDataStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImportFailures

 Returns a list of failures for the specified import. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportFailuresRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImportFailuresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImportFailuresXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportFailuresRequest();
    $request->listImportFailuresRequest = new ListImportFailuresRequest();
    $request->listImportFailuresRequest->importId = 'vel';
    $request->listImportFailuresRequest->maxResults = 618809;
    $request->listImportFailuresRequest->nextToken = 'omnis';
    $request->maxResults = 'molestiae';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ListImportFailuresXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_IMPORT_FAILURES;

    $response = $sdk->sdk->listImportFailures($request);

    if ($response->listImportFailuresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImports

 Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportsRequest();
    $request->listImportsRequest = new ListImportsRequest();
    $request->listImportsRequest->destination = 'natus';
    $request->listImportsRequest->importStatus = ImportStatusEnum::STOPPED;
    $request->listImportsRequest->maxResults = 428769;
    $request->listImportsRequest->nextToken = 'vero';
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListImportsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_IMPORTS;

    $response = $sdk->sdk->listImports($request);

    if ($response->listImportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPublicKeys

<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPublicKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPublicKeysRequest();
    $request->listPublicKeysRequest = new ListPublicKeysRequest();
    $request->listPublicKeysRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T13:57:38.738Z');
    $request->listPublicKeysRequest->nextToken = 'reiciendis';
    $request->listPublicKeysRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-11T16:07:41.164Z');
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListPublicKeysXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_PUBLIC_KEYS;

    $response = $sdk->sdk->listPublicKeys($request);

    if ($response->listPublicKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQueries

Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListQueriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQueriesRequest();
    $request->listQueriesRequest = new ListQueriesRequest();
    $request->listQueriesRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T22:14:24.691Z');
    $request->listQueriesRequest->eventDataStore = 'maxime';
    $request->listQueriesRequest->maxResults = 537023;
    $request->listQueriesRequest->nextToken = 'facilis';
    $request->listQueriesRequest->queryStatus = QueryStatusEnum::FINISHED;
    $request->listQueriesRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T15:46:28.441Z');
    $request->maxResults = 'repudiandae';
    $request->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = ListQueriesXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_QUERIES;

    $response = $sdk->sdk->listQueries($request);

    if ($response->listQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Lists the tags for the trail, event data store, or channel in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->listTagsRequest = new ListTagsRequest();
    $request->listTagsRequest->nextToken = 'accusantium';
    $request->listTagsRequest->resourceIdList = [
        'praesentium',
    ];
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrails

Lists trails that are in the current account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTrailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrailsRequest();
    $request->listTrailsRequest = new ListTrailsRequest();
    $request->listTrailsRequest->nextToken = 'excepturi';
    $request->nextToken = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = ListTrailsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_TRAILS;

    $response = $sdk->sdk->listTrails($request);

    if ($response->listTrailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lookupEvents

<p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LookupEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LookupEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookupAttribute;
use \OpenAPI\OpenAPI\Models\Shared\LookupAttributeKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\LookupEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LookupEventsRequest();
    $request->lookupEventsRequest = new LookupEventsRequest();
    $request->lookupEventsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T10:47:34.158Z');
    $request->lookupEventsRequest->eventCategory = EventCategoryEnum::INSIGHT;
    $request->lookupEventsRequest->lookupAttributes = [
        new LookupAttribute(),
    ];
    $request->lookupEventsRequest->maxResults = 866383;
    $request->lookupEventsRequest->nextToken = 'nemo';
    $request->lookupEventsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T19:01:00.083Z');
    $request->maxResults = 'fugiat';
    $request->nextToken = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = LookupEventsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LOOKUP_EVENTS;

    $response = $sdk->sdk->lookupEvents($request);

    if ($response->lookupEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEventSelectors

<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutEventSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedEventSelector;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedFieldSelector;
use \OpenAPI\OpenAPI\Models\Shared\EventSelector;
use \OpenAPI\OpenAPI\Models\Shared\DataResource;
use \OpenAPI\OpenAPI\Models\Shared\ReadWriteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutEventSelectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventSelectorsRequest();
    $request->putEventSelectorsRequest = new PutEventSelectorsRequest();
    $request->putEventSelectorsRequest->advancedEventSelectors = [
        new AdvancedEventSelector(),
        new AdvancedEventSelector(),
    ];
    $request->putEventSelectorsRequest->eventSelectors = [
        new EventSelector(),
        new EventSelector(),
        new EventSelector(),
    ];
    $request->putEventSelectorsRequest->trailName = 'dignissimos';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = PutEventSelectorsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_EVENT_SELECTORS;

    $response = $sdk->sdk->putEventSelectors($request);

    if ($response->putEventSelectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInsightSelectors

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInsightSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutInsightSelectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsightSelector;
use \OpenAPI\OpenAPI\Models\Shared\InsightTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutInsightSelectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInsightSelectorsRequest();
    $request->putInsightSelectorsRequest = new PutInsightSelectorsRequest();
    $request->putInsightSelectorsRequest->insightSelectors = [
        new InsightSelector(),
        new InsightSelector(),
    ];
    $request->putInsightSelectorsRequest->trailName = 'dolor';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = PutInsightSelectorsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_INSIGHT_SELECTORS;

    $response = $sdk->sdk->putInsightSelectors($request);

    if ($response->putInsightSelectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

 Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->resourceArn = 'voluptatem';
    $request->putResourcePolicyRequest->resourcePolicy = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerOrganizationDelegatedAdmin

Registers an organization’s member account as the CloudTrail delegated administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOrganizationDelegatedAdminRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterOrganizationDelegatedAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOrganizationDelegatedAdminXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterOrganizationDelegatedAdminRequest();
    $request->registerOrganizationDelegatedAdminRequest = new RegisterOrganizationDelegatedAdminRequest();
    $request->registerOrganizationDelegatedAdminRequest->memberAccountId = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = RegisterOrganizationDelegatedAdminXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_REGISTER_ORGANIZATION_DELEGATED_ADMIN;

    $response = $sdk->sdk->registerOrganizationDelegatedAdmin($request);

    if ($response->registerOrganizationDelegatedAdminResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTags

Removes the specified tags from a trail, event data store, or channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsRequest();
    $request->removeTagsRequest = new RemoveTagsRequest();
    $request->removeTagsRequest->resourceId = 'nobis';
    $request->removeTagsRequest->tagsList = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = RemoveTagsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_REMOVE_TAGS;

    $response = $sdk->sdk->removeTags($request);

    if ($response->removeTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreEventDataStore

Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreEventDataStoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreEventDataStoreRequest();
    $request->restoreEventDataStoreRequest = new RestoreEventDataStoreRequest();
    $request->restoreEventDataStoreRequest->eventDataStore = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = RestoreEventDataStoreXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_RESTORE_EVENT_DATA_STORE;

    $response = $sdk->sdk->restoreEventDataStore($request);

    if ($response->restoreEventDataStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImport

<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportSource;
use \OpenAPI\OpenAPI\Models\Shared\S3ImportSource;
use \OpenAPI\OpenAPI\Models\Operations\StartImportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportRequest();
    $request->startImportRequest = new StartImportRequest();
    $request->startImportRequest->destinations = [
        'dolorum',
    ];
    $request->startImportRequest->endEventTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T20:48:38.083Z');
    $request->startImportRequest->importId = 'ipsa';
    $request->startImportRequest->importSource = new ImportSource();
    $request->startImportRequest->importSource->s3 = new S3ImportSource();
    $request->startImportRequest->importSource->s3->s3BucketAccessRoleArn = 'ipsa';
    $request->startImportRequest->importSource->s3->s3BucketRegion = 'iure';
    $request->startImportRequest->importSource->s3->s3LocationUri = 'odio';
    $request->startImportRequest->startEventTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T10:24:00.119Z');
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = StartImportXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_IMPORT;

    $response = $sdk->sdk->startImport($request);

    if ($response->startImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startLogging

Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartLoggingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartLoggingRequest();
    $request->startLoggingRequest = new StartLoggingRequest();
    $request->startLoggingRequest->name = 'Stephen Roberts';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = StartLoggingXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_LOGGING;

    $response = $sdk->sdk->startLogging($request);

    if ($response->startLoggingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startQuery

Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartQueryRequest();
    $request->startQueryRequest = new StartQueryRequest();
    $request->startQueryRequest->deliveryS3Uri = 'nihil';
    $request->startQueryRequest->queryStatement = 'ipsum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = StartQueryXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_QUERY;

    $response = $sdk->sdk->startQuery($request);

    if ($response->startQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopImport

 Stops a specified import. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopImportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopImportRequest();
    $request->stopImportRequest = new StopImportRequest();
    $request->stopImportRequest->importId = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = StopImportXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_STOP_IMPORT;

    $response = $sdk->sdk->stopImport($request);

    if ($response->stopImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopLogging

Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopLoggingRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopLoggingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopLoggingRequest();
    $request->stopLoggingRequest = new StopLoggingRequest();
    $request->stopLoggingRequest->name = 'Dr. Jimmie Murphy';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = StopLoggingXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_STOP_LOGGING;

    $response = $sdk->sdk->stopLogging($request);

    if ($response->stopLoggingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChannel

Updates a channel specified by a required channel ARN or UUID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\DestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->updateChannelRequest = new UpdateChannelRequest();
    $request->updateChannelRequest->channel = 'esse';
    $request->updateChannelRequest->destinations = [
        new Destination(),
        new Destination(),
        new Destination(),
    ];
    $request->updateChannelRequest->name = 'Tracy Schamberger';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = UpdateChannelXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_CHANNEL;

    $response = $sdk->sdk->updateChannel($request);

    if ($response->updateChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEventDataStore

<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEventDataStoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedEventSelector;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedFieldSelector;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventDataStoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEventDataStoreRequest();
    $request->updateEventDataStoreRequest = new UpdateEventDataStoreRequest();
    $request->updateEventDataStoreRequest->advancedEventSelectors = [
        new AdvancedEventSelector(),
        new AdvancedEventSelector(),
    ];
    $request->updateEventDataStoreRequest->eventDataStore = 'sit';
    $request->updateEventDataStoreRequest->kmsKeyId = 'expedita';
    $request->updateEventDataStoreRequest->multiRegionEnabled = false;
    $request->updateEventDataStoreRequest->name = 'Jane Kassulke';
    $request->updateEventDataStoreRequest->organizationEnabled = false;
    $request->updateEventDataStoreRequest->retentionPeriod = 646265;
    $request->updateEventDataStoreRequest->terminationProtectionEnabled = false;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = UpdateEventDataStoreXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_EVENT_DATA_STORE;

    $response = $sdk->sdk->updateEventDataStore($request);

    if ($response->updateEventDataStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrail

Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrailRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrailRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrailRequest();
    $request->updateTrailRequest = new UpdateTrailRequest();
    $request->updateTrailRequest->cloudWatchLogsLogGroupArn = 'soluta';
    $request->updateTrailRequest->cloudWatchLogsRoleArn = 'dicta';
    $request->updateTrailRequest->enableLogFileValidation = false;
    $request->updateTrailRequest->includeGlobalServiceEvents = false;
    $request->updateTrailRequest->isMultiRegionTrail = false;
    $request->updateTrailRequest->isOrganizationTrail = false;
    $request->updateTrailRequest->kmsKeyId = 'laborum';
    $request->updateTrailRequest->name = 'Randall Cole';
    $request->updateTrailRequest->s3BucketName = 'facilis';
    $request->updateTrailRequest->s3KeyPrefix = 'aliquid';
    $request->updateTrailRequest->snsTopicName = 'quam';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = UpdateTrailXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_TRAIL;

    $response = $sdk->sdk->updateTrail($request);

    if ($response->updateTrailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
