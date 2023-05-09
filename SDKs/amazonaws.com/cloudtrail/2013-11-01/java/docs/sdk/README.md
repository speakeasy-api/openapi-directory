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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsRequest;
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

            AddTagsRequest req = new AddTagsRequest(                new AddTagsRequest("minus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("excepturi") {{
                                                    key = "voluptatum";
                                                    value = "iusto";
                                                }}),
                                                add(new Tag("temporibus") {{
                                                    key = "nisi";
                                                    value = "recusandae";
                                                }}),
                                                add(new Tag("veritatis") {{
                                                    key = "ab";
                                                    value = "quis";
                                                }}),
                                                add(new Tag("ipsam") {{
                                                    key = "deserunt";
                                                    value = "perferendis";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_ADD_TAGS) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            AddTagsResponse res = sdk.sdk.addTags(req);

            if (res.addTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelQuery

Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelQueryRequest;
import org.openapis.openapi.models.operations.CancelQueryResponse;
import org.openapis.openapi.models.operations.CancelQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelQueryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelQueryRequest req = new CancelQueryRequest(                new CancelQueryRequest("quod") {{
                                eventDataStore = "quod";
                            }};, CancelQueryXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CANCEL_QUERY) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CancelQueryResponse res = sdk.sdk.cancelQuery(req);

            if (res.cancelQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createChannel

Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateChannelRequest;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChannelRequest req = new CreateChannelRequest(                new CreateChannelRequest(                new org.openapis.openapi.models.shared.Destination[]{{
                                                add(new Destination("optio", DestinationTypeEnum.AWS_SERVICE) {{
                                                    location = "deleniti";
                                                    type = DestinationTypeEnum.AWS_SERVICE;
                                                }}),
                                            }}, "beatae", "commodi") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("impedit") {{
                                        key = "modi";
                                        value = "qui";
                                    }}),
                                    add(new Tag("ipsum") {{
                                        key = "cum";
                                        value = "esse";
                                    }}),
                                }};
                            }};, CreateChannelXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_CHANNEL) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            CreateChannelResponse res = sdk.sdk.createChannel(req);

            if (res.createChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventDataStore

Creates a new event data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventDataStoreRequest;
import org.openapis.openapi.models.operations.CreateEventDataStoreResponse;
import org.openapis.openapi.models.operations.CreateEventDataStoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdvancedEventSelector;
import org.openapis.openapi.models.shared.AdvancedFieldSelector;
import org.openapis.openapi.models.shared.CreateEventDataStoreRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventDataStoreRequest req = new CreateEventDataStoreRequest(                new CreateEventDataStoreRequest("natus") {{
                                advancedEventSelectors = new org.openapis.openapi.models.shared.AdvancedEventSelector[]{{
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("assumenda") {{
                                                            endsWith = new String[]{{
                                                                add("sint"),
                                                                add("veritatis"),
                                                                add("itaque"),
                                                                add("incidunt"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("consequatur"),
                                                                add("est"),
                                                            }};
                                                            field = "quibusdam";
                                                            notEndsWith = new String[]{{
                                                                add("deserunt"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("quibusdam"),
                                                                add("labore"),
                                                                add("modi"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("aliquid"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("quos"),
                                                                add("perferendis"),
                                                                add("magni"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("enim") {{
                                                endsWith = new String[]{{
                                                    add("fuga"),
                                                    add("in"),
                                                    add("corporis"),
                                                    add("iste"),
                                                }};
                                                equals = new String[]{{
                                                    add("saepe"),
                                                    add("quidem"),
                                                }};
                                                field = "architecto";
                                                notEndsWith = new String[]{{
                                                    add("reiciendis"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("mollitia"),
                                                    add("laborum"),
                                                    add("dolores"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("corporis"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("nobis"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("quia") {{
                                                endsWith = new String[]{{
                                                    add("nemo"),
                                                    add("minima"),
                                                    add("excepturi"),
                                                }};
                                                equals = new String[]{{
                                                    add("iure"),
                                                }};
                                                field = "culpa";
                                                notEndsWith = new String[]{{
                                                    add("sapiente"),
                                                    add("architecto"),
                                                    add("mollitia"),
                                                    add("dolorem"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("consequuntur"),
                                                    add("repellat"),
                                                    add("mollitia"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("numquam"),
                                                    add("commodi"),
                                                    add("quam"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("velit"),
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("omnis") {{
                                                endsWith = new String[]{{
                                                    add("vitae"),
                                                    add("laborum"),
                                                }};
                                                equals = new String[]{{
                                                    add("enim"),
                                                    add("odit"),
                                                    add("quo"),
                                                }};
                                                field = "sequi";
                                                notEndsWith = new String[]{{
                                                    add("ipsam"),
                                                    add("id"),
                                                    add("possimus"),
                                                    add("aut"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("error"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("laborum"),
                                                    add("quasi"),
                                                    add("reiciendis"),
                                                    add("voluptatibus"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("nihil"),
                                                    add("praesentium"),
                                                    add("voluptatibus"),
                                                    add("ipsa"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("excepturi") {{
                                                endsWith = new String[]{{
                                                    add("cum"),
                                                    add("perferendis"),
                                                }};
                                                equals = new String[]{{
                                                    add("reprehenderit"),
                                                }};
                                                field = "ut";
                                                notEndsWith = new String[]{{
                                                    add("dicta"),
                                                    add("corporis"),
                                                    add("dolore"),
                                                    add("iusto"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("harum"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("accusamus"),
                                                    add("commodi"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("quae"),
                                                    add("ipsum"),
                                                    add("quidem"),
                                                    add("molestias"),
                                                }};
                                            }}),
                                        }};
                                        name = "Joel Lang";
                                    }}),
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("sint") {{
                                                            endsWith = new String[]{{
                                                                add("magnam"),
                                                                add("distinctio"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("labore"),
                                                                add("labore"),
                                                                add("suscipit"),
                                                            }};
                                                            field = "natus";
                                                            notEndsWith = new String[]{{
                                                                add("eum"),
                                                                add("vero"),
                                                                add("aspernatur"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("magnam"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("excepturi"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("provident"),
                                                                add("quos"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("a") {{
                                                endsWith = new String[]{{
                                                    add("fugit"),
                                                }};
                                                equals = new String[]{{
                                                    add("excepturi"),
                                                    add("tempora"),
                                                    add("facilis"),
                                                }};
                                                field = "tempore";
                                                notEndsWith = new String[]{{
                                                    add("delectus"),
                                                    add("eum"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("eligendi"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("aliquid"),
                                                    add("provident"),
                                                    add("necessitatibus"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("deserunt") {{
                                                endsWith = new String[]{{
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                                equals = new String[]{{
                                                    add("rerum"),
                                                    add("dicta"),
                                                    add("magnam"),
                                                    add("cumque"),
                                                }};
                                                field = "facere";
                                                notEndsWith = new String[]{{
                                                    add("aliquid"),
                                                    add("laborum"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("non"),
                                                    add("occaecati"),
                                                    add("enim"),
                                                    add("accusamus"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("quidem"),
                                                    add("provident"),
                                                    add("nam"),
                                                    add("id"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("deleniti"),
                                                    add("sapiente"),
                                                    add("amet"),
                                                }};
                                            }}),
                                        }};
                                        name = "Wilma Mosciski";
                                    }}),
                                }};
                                kmsKeyId = "accusantium";
                                multiRegionEnabled = false;
                                organizationEnabled = false;
                                retentionPeriod = 653201L;
                                tagsList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("eum") {{
                                        key = "mollitia";
                                        value = "ad";
                                    }}),
                                    add(new Tag("odit") {{
                                        key = "dolor";
                                        value = "necessitatibus";
                                    }}),
                                    add(new Tag("iure") {{
                                        key = "nemo";
                                        value = "quasi";
                                    }}),
                                    add(new Tag("eius") {{
                                        key = "doloribus";
                                        value = "debitis";
                                    }}),
                                }};
                                terminationProtectionEnabled = false;
                            }};, CreateEventDataStoreXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_EVENT_DATA_STORE) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateEventDataStoreResponse res = sdk.sdk.createEventDataStore(req);

            if (res.createEventDataStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrail

Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrailRequest;
import org.openapis.openapi.models.operations.CreateTrailResponse;
import org.openapis.openapi.models.operations.CreateTrailXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTrailRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTrailRequest req = new CreateTrailRequest(                new CreateTrailRequest("expedita", "nihil") {{
                                cloudWatchLogsLogGroupArn = "repellat";
                                cloudWatchLogsRoleArn = "quibusdam";
                                enableLogFileValidation = false;
                                includeGlobalServiceEvents = false;
                                isMultiRegionTrail = false;
                                isOrganizationTrail = false;
                                kmsKeyId = "sed";
                                s3KeyPrefix = "saepe";
                                snsTopicName = "pariatur";
                                tagsList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("natus") {{
                                        key = "consequuntur";
                                        value = "praesentium";
                                    }}),
                                }};
                            }};, CreateTrailXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_CREATE_TRAIL) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            CreateTrailResponse res = sdk.sdk.createTrail(req);

            if (res.createTrailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannel

Deletes a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelRequest;
import org.openapis.openapi.models.operations.DeleteChannelResponse;
import org.openapis.openapi.models.operations.DeleteChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteChannelRequest req = new DeleteChannelRequest(                new DeleteChannelRequest("odit");, DeleteChannelXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_CHANNEL) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ab";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteChannelResponse res = sdk.sdk.deleteChannel(req);

            if (res.deleteChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventDataStore

<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventDataStoreRequest;
import org.openapis.openapi.models.operations.DeleteEventDataStoreResponse;
import org.openapis.openapi.models.operations.DeleteEventDataStoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEventDataStoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventDataStoreRequest req = new DeleteEventDataStoreRequest(                new DeleteEventDataStoreRequest("nam");, DeleteEventDataStoreXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_EVENT_DATA_STORE) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteEventDataStoreResponse res = sdk.sdk.deleteEventDataStore(req);

            if (res.deleteEventDataStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

 Deletes the resource-based policy attached to the CloudTrail channel. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest("cumque");, DeleteResourcePolicyXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTrail

Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrailRequest;
import org.openapis.openapi.models.operations.DeleteTrailResponse;
import org.openapis.openapi.models.operations.DeleteTrailXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTrailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTrailRequest req = new DeleteTrailRequest(                new DeleteTrailRequest("eaque");, DeleteTrailXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DELETE_TRAIL) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            DeleteTrailResponse res = sdk.sdk.deleteTrail(req);

            if (res.deleteTrailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterOrganizationDelegatedAdmin

Removes CloudTrail delegated administrator permissions from a member account in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterOrganizationDelegatedAdminRequest;
import org.openapis.openapi.models.operations.DeregisterOrganizationDelegatedAdminResponse;
import org.openapis.openapi.models.operations.DeregisterOrganizationDelegatedAdminXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterOrganizationDelegatedAdminRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterOrganizationDelegatedAdminRequest req = new DeregisterOrganizationDelegatedAdminRequest(                new DeregisterOrganizationDelegatedAdminRequest("vero");, DeregisterOrganizationDelegatedAdminXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DEREGISTER_ORGANIZATION_DELEGATED_ADMIN) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DeregisterOrganizationDelegatedAdminResponse res = sdk.sdk.deregisterOrganizationDelegatedAdmin(req);

            if (res.deregisterOrganizationDelegatedAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeQuery

Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeQueryRequest;
import org.openapis.openapi.models.operations.DescribeQueryResponse;
import org.openapis.openapi.models.operations.DescribeQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeQueryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeQueryRequest req = new DescribeQueryRequest(                new DescribeQueryRequest("consequuntur") {{
                                eventDataStore = "blanditiis";
                            }};, DescribeQueryXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DESCRIBE_QUERY) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            DescribeQueryResponse res = sdk.sdk.describeQuery(req);

            if (res.describeQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTrails

Retrieves settings for one or more trails associated with the current region for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTrailsRequest;
import org.openapis.openapi.models.operations.DescribeTrailsResponse;
import org.openapis.openapi.models.operations.DescribeTrailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTrailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTrailsRequest req = new DescribeTrailsRequest(                new DescribeTrailsRequest() {{
                                includeShadowTrails = false;
                                trailNameList = new String[]{{
                                    add("dolorum"),
                                    add("deleniti"),
                                    add("pariatur"),
                                }};
                            }};, DescribeTrailsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_DESCRIBE_TRAILS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "libero";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "aliquid";
            }};            

            DescribeTrailsResponse res = sdk.sdk.describeTrails(req);

            if (res.describeTrailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannel

 Returns information about a specific channel. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelRequest;
import org.openapis.openapi.models.operations.GetChannelResponse;
import org.openapis.openapi.models.operations.GetChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChannelRequest req = new GetChannelRequest(                new GetChannelRequest("dolorem");, GetChannelXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_CHANNEL) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetChannelResponse res = sdk.sdk.getChannel(req);

            if (res.getChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventDataStore

Returns information about an event data store specified as either an ARN or the ID portion of the ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventDataStoreRequest;
import org.openapis.openapi.models.operations.GetEventDataStoreResponse;
import org.openapis.openapi.models.operations.GetEventDataStoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEventDataStoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventDataStoreRequest req = new GetEventDataStoreRequest(                new GetEventDataStoreRequest("reiciendis");, GetEventDataStoreXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_EVENT_DATA_STORE) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
            }};            

            GetEventDataStoreResponse res = sdk.sdk.getEventDataStore(req);

            if (res.getEventDataStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventSelectors

<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventSelectorsRequest;
import org.openapis.openapi.models.operations.GetEventSelectorsResponse;
import org.openapis.openapi.models.operations.GetEventSelectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEventSelectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventSelectorsRequest req = new GetEventSelectorsRequest(                new GetEventSelectorsRequest("quaerat");, GetEventSelectorsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_EVENT_SELECTORS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            GetEventSelectorsResponse res = sdk.sdk.getEventSelectors(req);

            if (res.getEventSelectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImport

 Returns information about a specific import. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImportRequest;
import org.openapis.openapi.models.operations.GetImportResponse;
import org.openapis.openapi.models.operations.GetImportXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetImportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImportRequest req = new GetImportRequest(                new GetImportRequest("fugiat");, GetImportXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_IMPORT) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetImportResponse res = sdk.sdk.getImport(req);

            if (res.getImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsightSelectors

<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightSelectorsRequest;
import org.openapis.openapi.models.operations.GetInsightSelectorsResponse;
import org.openapis.openapi.models.operations.GetInsightSelectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInsightSelectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightSelectorsRequest req = new GetInsightSelectorsRequest(                new GetInsightSelectorsRequest("necessitatibus");, GetInsightSelectorsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_INSIGHT_SELECTORS) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            GetInsightSelectorsResponse res = sdk.sdk.getInsightSelectors(req);

            if (res.getInsightSelectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryResults

Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryResultsRequest;
import org.openapis.openapi.models.operations.GetQueryResultsResponse;
import org.openapis.openapi.models.operations.GetQueryResultsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQueryResultsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryResultsRequest req = new GetQueryResultsRequest(                new GetQueryResultsRequest("aspernatur") {{
                                eventDataStore = "perferendis";
                                maxQueryResults = 229219L;
                                nextToken = "optio";
                            }};, GetQueryResultsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_QUERY_RESULTS) {{
                nextToken = "accusamus";
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
            }};            

            GetQueryResultsResponse res = sdk.sdk.getQueryResults(req);

            if (res.getQueryResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicy

 Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePolicyRequest;
import org.openapis.openapi.models.operations.GetResourcePolicyResponse;
import org.openapis.openapi.models.operations.GetResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePolicyRequest req = new GetResourcePolicyRequest(                new GetResourcePolicyRequest("similique");, GetResourcePolicyXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_RESOURCE_POLICY) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "at";
                xAmzCredential = "quaerat";
                xAmzDate = "tempora";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "officiis";
            }};            

            GetResourcePolicyResponse res = sdk.sdk.getResourcePolicy(req);

            if (res.getResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrail

Returns settings information for a specified trail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrailRequest;
import org.openapis.openapi.models.operations.GetTrailResponse;
import org.openapis.openapi.models.operations.GetTrailXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTrailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrailRequest req = new GetTrailRequest(                new GetTrailRequest("dolorum");, GetTrailXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_TRAIL) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            GetTrailResponse res = sdk.sdk.getTrail(req);

            if (res.getTrailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrailStatus

Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrailStatusRequest;
import org.openapis.openapi.models.operations.GetTrailStatusResponse;
import org.openapis.openapi.models.operations.GetTrailStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTrailStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrailStatusRequest req = new GetTrailStatusRequest(                new GetTrailStatusRequest("tempore");, GetTrailStatusXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_GET_TRAIL_STATUS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
            }};            

            GetTrailStatusResponse res = sdk.sdk.getTrailStatus(req);

            if (res.getTrailStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannels

 Lists the channels in the current account, and their source names. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelsRequest;
import org.openapis.openapi.models.operations.ListChannelsResponse;
import org.openapis.openapi.models.operations.ListChannelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListChannelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListChannelsRequest req = new ListChannelsRequest(                new ListChannelsRequest() {{
                                maxResults = 711584L;
                                nextToken = "neque";
                            }};, ListChannelsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_CHANNELS) {{
                maxResults = "sed";
                nextToken = "vel";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            ListChannelsResponse res = sdk.sdk.listChannels(req);

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventDataStores

Returns information about all event data stores in the account, in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventDataStoresRequest;
import org.openapis.openapi.models.operations.ListEventDataStoresResponse;
import org.openapis.openapi.models.operations.ListEventDataStoresXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEventDataStoresRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventDataStoresRequest req = new ListEventDataStoresRequest(                new ListEventDataStoresRequest() {{
                                maxResults = 807581L;
                                nextToken = "pariatur";
                            }};, ListEventDataStoresXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_EVENT_DATA_STORES) {{
                maxResults = "soluta";
                nextToken = "dicta";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            ListEventDataStoresResponse res = sdk.sdk.listEventDataStores(req);

            if (res.listEventDataStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImportFailures

 Returns a list of failures for the specified import. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportFailuresRequest;
import org.openapis.openapi.models.operations.ListImportFailuresResponse;
import org.openapis.openapi.models.operations.ListImportFailuresXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListImportFailuresRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportFailuresRequest req = new ListImportFailuresRequest(                new ListImportFailuresRequest("quam") {{
                                maxResults = 565421L;
                                nextToken = "temporibus";
                            }};, ListImportFailuresXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_IMPORT_FAILURES) {{
                maxResults = "qui";
                nextToken = "neque";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            ListImportFailuresResponse res = sdk.sdk.listImportFailures(req);

            if (res.listImportFailuresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImports

 Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportsRequest;
import org.openapis.openapi.models.operations.ListImportsResponse;
import org.openapis.openapi.models.operations.ListImportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportStatusEnum;
import org.openapis.openapi.models.shared.ListImportsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportsRequest req = new ListImportsRequest(                new ListImportsRequest() {{
                                destination = "cumque";
                                importStatus = ImportStatusEnum.STOPPED;
                                maxResults = 748664L;
                                nextToken = "et";
                            }};, ListImportsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_IMPORTS) {{
                maxResults = "saepe";
                nextToken = "ipsum";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            ListImportsResponse res = sdk.sdk.listImports(req);

            if (res.listImportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPublicKeys

<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPublicKeysRequest;
import org.openapis.openapi.models.operations.ListPublicKeysResponse;
import org.openapis.openapi.models.operations.ListPublicKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPublicKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPublicKeysRequest req = new ListPublicKeysRequest(                new ListPublicKeysRequest() {{
                                endTime = OffsetDateTime.parse("2022-09-18T06:37:26.413Z");
                                nextToken = "adipisci";
                                startTime = OffsetDateTime.parse("2022-10-19T18:50:59.428Z");
                            }};, ListPublicKeysXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_PUBLIC_KEYS) {{
                nextToken = "quae";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            ListPublicKeysResponse res = sdk.sdk.listPublicKeys(req);

            if (res.listPublicKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQueries

Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQueriesRequest;
import org.openapis.openapi.models.operations.ListQueriesResponse;
import org.openapis.openapi.models.operations.ListQueriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListQueriesRequest;
import org.openapis.openapi.models.shared.QueryStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListQueriesRequest req = new ListQueriesRequest(                new ListQueriesRequest("ut") {{
                                endTime = OffsetDateTime.parse("2021-10-29T22:05:37.347Z");
                                maxResults = 181631L;
                                nextToken = "quae";
                                queryStatus = QueryStatusEnum.FAILED;
                                startTime = OffsetDateTime.parse("2022-06-03T03:16:58.870Z");
                            }};, ListQueriesXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_QUERIES) {{
                maxResults = "voluptatibus";
                nextToken = "quisquam";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            ListQueriesResponse res = sdk.sdk.listQueries(req);

            if (res.listQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Lists the tags for the trail, event data store, or channel in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.operations.ListTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest(                new String[]{{
                                                add("dignissimos"),
                                                add("hic"),
                                                add("distinctio"),
                                                add("quod"),
                                            }}) {{
                                nextToken = "odio";
                            }};, ListTagsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_TAGS) {{
                nextToken = "similique";
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "vero";
                xAmzCredential = "ducimus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "sequi";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrails

Lists trails that are in the current account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrailsRequest;
import org.openapis.openapi.models.operations.ListTrailsResponse;
import org.openapis.openapi.models.operations.ListTrailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTrailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrailsRequest req = new ListTrailsRequest(                new ListTrailsRequest() {{
                                nextToken = "impedit";
                            }};, ListTrailsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LIST_TRAILS) {{
                nextToken = "aut";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListTrailsResponse res = sdk.sdk.listTrails(req);

            if (res.listTrailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lookupEvents

<p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LookupEventsRequest;
import org.openapis.openapi.models.operations.LookupEventsResponse;
import org.openapis.openapi.models.operations.LookupEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EventCategoryEnum;
import org.openapis.openapi.models.shared.LookupAttribute;
import org.openapis.openapi.models.shared.LookupAttributeKeyEnum;
import org.openapis.openapi.models.shared.LookupEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LookupEventsRequest req = new LookupEventsRequest(                new LookupEventsRequest() {{
                                endTime = OffsetDateTime.parse("2021-07-05T08:33:16.995Z");
                                eventCategory = EventCategoryEnum.INSIGHT;
                                lookupAttributes = new org.openapis.openapi.models.shared.LookupAttribute[]{{
                                    add(new LookupAttribute(LookupAttributeKeyEnum.READ_ONLY, "ea") {{
                                        attributeKey = LookupAttributeKeyEnum.RESOURCE_NAME;
                                        attributeValue = "tempora";
                                    }}),
                                }};
                                maxResults = 136900L;
                                nextToken = "vel";
                                startTime = OffsetDateTime.parse("2022-02-08T20:43:00.221Z");
                            }};, LookupEventsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_LOOKUP_EVENTS) {{
                maxResults = "ratione";
                nextToken = "ex";
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "dolor";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nulla";
            }};            

            LookupEventsResponse res = sdk.sdk.lookupEvents(req);

            if (res.lookupEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEventSelectors

<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEventSelectorsRequest;
import org.openapis.openapi.models.operations.PutEventSelectorsResponse;
import org.openapis.openapi.models.operations.PutEventSelectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdvancedEventSelector;
import org.openapis.openapi.models.shared.AdvancedFieldSelector;
import org.openapis.openapi.models.shared.DataResource;
import org.openapis.openapi.models.shared.EventSelector;
import org.openapis.openapi.models.shared.PutEventSelectorsRequest;
import org.openapis.openapi.models.shared.ReadWriteTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventSelectorsRequest req = new PutEventSelectorsRequest(                new PutEventSelectorsRequest("voluptatibus") {{
                                advancedEventSelectors = new org.openapis.openapi.models.shared.AdvancedEventSelector[]{{
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("occaecati") {{
                                                            endsWith = new String[]{{
                                                                add("molestiae"),
                                                                add("accusantium"),
                                                                add("porro"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("quas"),
                                                                add("praesentium"),
                                                            }};
                                                            field = "consequuntur";
                                                            notEndsWith = new String[]{{
                                                                add("fugit"),
                                                                add("fuga"),
                                                                add("mollitia"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("atque"),
                                                                add("explicabo"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("nisi"),
                                                                add("fugit"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("consequuntur"),
                                                                add("ratione"),
                                                                add("explicabo"),
                                                                add("saepe"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("non") {{
                                                endsWith = new String[]{{
                                                    add("saepe"),
                                                    add("ea"),
                                                    add("impedit"),
                                                    add("corporis"),
                                                }};
                                                equals = new String[]{{
                                                    add("aliquid"),
                                                    add("inventore"),
                                                }};
                                                field = "magnam";
                                                notEndsWith = new String[]{{
                                                    add("quo"),
                                                    add("consectetur"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("aspernatur"),
                                                    add("minima"),
                                                    add("eaque"),
                                                    add("a"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("aut"),
                                                    add("aut"),
                                                    add("deleniti"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("aliquam"),
                                                    add("fugit"),
                                                    add("accusamus"),
                                                    add("inventore"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("magnam") {{
                                                endsWith = new String[]{{
                                                    add("dolorum"),
                                                }};
                                                equals = new String[]{{
                                                    add("placeat"),
                                                    add("velit"),
                                                    add("eum"),
                                                }};
                                                field = "autem";
                                                notEndsWith = new String[]{{
                                                    add("quas"),
                                                    add("assumenda"),
                                                    add("nulla"),
                                                    add("voluptas"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("quasi"),
                                                    add("tempora"),
                                                    add("numquam"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("provident"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("molestiae"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("illum") {{
                                                endsWith = new String[]{{
                                                    add("eius"),
                                                    add("esse"),
                                                }};
                                                equals = new String[]{{
                                                    add("rem"),
                                                    add("fuga"),
                                                }};
                                                field = "reprehenderit";
                                                notEndsWith = new String[]{{
                                                    add("fugiat"),
                                                    add("ut"),
                                                    add("eum"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("assumenda"),
                                                    add("eos"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("quisquam"),
                                                    add("veritatis"),
                                                    add("ipsa"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("quidem"),
                                                    add("neque"),
                                                    add("quo"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("accusamus") {{
                                                endsWith = new String[]{{
                                                    add("fuga"),
                                                    add("eius"),
                                                    add("eos"),
                                                    add("voluptas"),
                                                }};
                                                equals = new String[]{{
                                                    add("cupiditate"),
                                                }};
                                                field = "consequatur";
                                                notEndsWith = new String[]{{
                                                    add("debitis"),
                                                    add("ipsam"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("sequi"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("esse"),
                                                    add("recusandae"),
                                                    add("aperiam"),
                                                    add("distinctio"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("dignissimos"),
                                                    add("inventore"),
                                                    add("nihil"),
                                                    add("totam"),
                                                }};
                                            }}),
                                        }};
                                        name = "Courtney Mayert";
                                    }}),
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("eum") {{
                                                            endsWith = new String[]{{
                                                                add("deleniti"),
                                                                add("itaque"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("architecto"),
                                                                add("omnis"),
                                                                add("tenetur"),
                                                            }};
                                                            field = "quasi";
                                                            notEndsWith = new String[]{{
                                                                add("et"),
                                                                add("voluptate"),
                                                                add("ipsa"),
                                                                add("minima"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("consectetur"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("iste"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("accusantium"),
                                                                add("rem"),
                                                                add("aut"),
                                                                add("laudantium"),
                                                            }};
                                                        }}),
                                                        add(new AdvancedFieldSelector("asperiores") {{
                                                            endsWith = new String[]{{
                                                                add("ab"),
                                                                add("corrupti"),
                                                                add("non"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("dolor"),
                                                            }};
                                                            field = "occaecati";
                                                            notEndsWith = new String[]{{
                                                                add("impedit"),
                                                                add("explicabo"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("aut"),
                                                                add("dignissimos"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("maiores"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("velit"),
                                                                add("voluptatibus"),
                                                                add("voluptas"),
                                                            }};
                                                        }}),
                                                        add(new AdvancedFieldSelector("culpa") {{
                                                            endsWith = new String[]{{
                                                                add("ea"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("consequuntur"),
                                                                add("repellendus"),
                                                            }};
                                                            field = "officia";
                                                            notEndsWith = new String[]{{
                                                                add("dignissimos"),
                                                                add("officia"),
                                                                add("asperiores"),
                                                                add("nemo"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("quaerat"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("quod"),
                                                                add("labore"),
                                                                add("ab"),
                                                                add("adipisci"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("id"),
                                                                add("suscipit"),
                                                                add("velit"),
                                                            }};
                                                        }}),
                                                        add(new AdvancedFieldSelector("consectetur") {{
                                                            endsWith = new String[]{{
                                                                add("recusandae"),
                                                                add("totam"),
                                                                add("fugiat"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("ducimus"),
                                                                add("quos"),
                                                            }};
                                                            field = "vel";
                                                            notEndsWith = new String[]{{
                                                                add("possimus"),
                                                                add("facilis"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("commodi"),
                                                                add("in"),
                                                                add("corporis"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("assumenda"),
                                                                add("nemo"),
                                                                add("recusandae"),
                                                                add("aliquid"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("cum"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("tempore") {{
                                                endsWith = new String[]{{
                                                    add("esse"),
                                                }};
                                                equals = new String[]{{
                                                    add("accusamus"),
                                                    add("veritatis"),
                                                    add("esse"),
                                                    add("quod"),
                                                }};
                                                field = "nam";
                                                notEndsWith = new String[]{{
                                                    add("aliquid"),
                                                    add("quasi"),
                                                    add("saepe"),
                                                    add("vel"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("molestiae"),
                                                    add("rerum"),
                                                    add("occaecati"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("distinctio"),
                                                    add("eligendi"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("culpa"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("quia") {{
                                                endsWith = new String[]{{
                                                    add("cumque"),
                                                }};
                                                equals = new String[]{{
                                                    add("consequatur"),
                                                }};
                                                field = "minus";
                                                notEndsWith = new String[]{{
                                                    add("sapiente"),
                                                    add("consectetur"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("blanditiis"),
                                                    add("provident"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("nulla"),
                                                    add("quas"),
                                                    add("esse"),
                                                    add("quasi"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("error"),
                                                    add("sint"),
                                                    add("pariatur"),
                                                    add("possimus"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("reprehenderit") {{
                                                endsWith = new String[]{{
                                                    add("asperiores"),
                                                    add("facere"),
                                                    add("veritatis"),
                                                    add("consequuntur"),
                                                }};
                                                equals = new String[]{{
                                                    add("similique"),
                                                }};
                                                field = "culpa";
                                                notEndsWith = new String[]{{
                                                    add("tenetur"),
                                                    add("quae"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("vel"),
                                                    add("in"),
                                                    add("eius"),
                                                    add("libero"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("soluta"),
                                                    add("accusantium"),
                                                    add("aliquam"),
                                                    add("sapiente"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("ullam"),
                                                }};
                                            }}),
                                        }};
                                        name = "Alma Armstrong";
                                    }}),
                                }};
                                eventSelectors = new org.openapis.openapi.models.shared.EventSelector[]{{
                                    add(new EventSelector() {{
                                        dataResources = new org.openapis.openapi.models.shared.DataResource[]{{
                                            add(new DataResource() {{
                                                type = "earum";
                                                values = new String[]{{
                                                    add("numquam"),
                                                    add("doloribus"),
                                                    add("suscipit"),
                                                    add("reiciendis"),
                                                }};
                                            }}),
                                            add(new DataResource() {{
                                                type = "quidem";
                                                values = new String[]{{
                                                    add("necessitatibus"),
                                                    add("dolore"),
                                                    add("sunt"),
                                                    add("asperiores"),
                                                }};
                                            }}),
                                        }};
                                        excludeManagementEventSources = new String[]{{
                                            add("non"),
                                        }};
                                        includeManagementEvents = false;
                                        readWriteType = ReadWriteTypeEnum.READ_ONLY;
                                    }}),
                                    add(new EventSelector() {{
                                        dataResources = new org.openapis.openapi.models.shared.DataResource[]{{
                                            add(new DataResource() {{
                                                type = "dignissimos";
                                                values = new String[]{{
                                                    add("debitis"),
                                                    add("consectetur"),
                                                    add("corporis"),
                                                    add("harum"),
                                                }};
                                            }}),
                                        }};
                                        excludeManagementEventSources = new String[]{{
                                            add("ipsa"),
                                            add("voluptates"),
                                        }};
                                        includeManagementEvents = false;
                                        readWriteType = ReadWriteTypeEnum.ALL;
                                    }}),
                                }};
                            }};, PutEventSelectorsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_EVENT_SELECTORS) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "similique";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "voluptas";
            }};            

            PutEventSelectorsResponse res = sdk.sdk.putEventSelectors(req);

            if (res.putEventSelectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInsightSelectors

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInsightSelectorsRequest;
import org.openapis.openapi.models.operations.PutInsightSelectorsResponse;
import org.openapis.openapi.models.operations.PutInsightSelectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.InsightSelector;
import org.openapis.openapi.models.shared.InsightTypeEnum;
import org.openapis.openapi.models.shared.PutInsightSelectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInsightSelectorsRequest req = new PutInsightSelectorsRequest(                new PutInsightSelectorsRequest(                new org.openapis.openapi.models.shared.InsightSelector[]{{
                                                add(new InsightSelector() {{
                                                    insightType = InsightTypeEnum.API_ERROR_RATE_INSIGHT;
                                                }}),
                                                add(new InsightSelector() {{
                                                    insightType = InsightTypeEnum.API_ERROR_RATE_INSIGHT;
                                                }}),
                                            }}, "adipisci");, PutInsightSelectorsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_INSIGHT_SELECTORS) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            PutInsightSelectorsResponse res = sdk.sdk.putInsightSelectors(req);

            if (res.putInsightSelectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

 Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest("ullam", "adipisci");, PutResourcePolicyXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerOrganizationDelegatedAdmin

Registers an organization’s member account as the CloudTrail delegated administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterOrganizationDelegatedAdminRequest;
import org.openapis.openapi.models.operations.RegisterOrganizationDelegatedAdminResponse;
import org.openapis.openapi.models.operations.RegisterOrganizationDelegatedAdminXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterOrganizationDelegatedAdminRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterOrganizationDelegatedAdminRequest req = new RegisterOrganizationDelegatedAdminRequest(                new RegisterOrganizationDelegatedAdminRequest("totam");, RegisterOrganizationDelegatedAdminXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_REGISTER_ORGANIZATION_DELEGATED_ADMIN) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            RegisterOrganizationDelegatedAdminResponse res = sdk.sdk.registerOrganizationDelegatedAdmin(req);

            if (res.registerOrganizationDelegatedAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTags

Removes the specified tags from a trail, event data store, or channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsRequest;
import org.openapis.openapi.models.operations.RemoveTagsResponse;
import org.openapis.openapi.models.operations.RemoveTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsRequest req = new RemoveTagsRequest(                new RemoveTagsRequest("asperiores",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("ab") {{
                                                    key = "voluptate";
                                                    value = "expedita";
                                                }}),
                                                add(new Tag("laborum") {{
                                                    key = "iste";
                                                    value = "dolore";
                                                }}),
                                                add(new Tag("commodi") {{
                                                    key = "sed";
                                                    value = "in";
                                                }}),
                                            }});, RemoveTagsXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_REMOVE_TAGS) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
            }};            

            RemoveTagsResponse res = sdk.sdk.removeTags(req);

            if (res.removeTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreEventDataStore

Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreEventDataStoreRequest;
import org.openapis.openapi.models.operations.RestoreEventDataStoreResponse;
import org.openapis.openapi.models.operations.RestoreEventDataStoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreEventDataStoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreEventDataStoreRequest req = new RestoreEventDataStoreRequest(                new RestoreEventDataStoreRequest("illo");, RestoreEventDataStoreXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_RESTORE_EVENT_DATA_STORE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            RestoreEventDataStoreResponse res = sdk.sdk.restoreEventDataStore(req);

            if (res.restoreEventDataStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImport

<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImportRequest;
import org.openapis.openapi.models.operations.StartImportResponse;
import org.openapis.openapi.models.operations.StartImportXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportSource;
import org.openapis.openapi.models.shared.S3ImportSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartImportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImportRequest req = new StartImportRequest(                new StartImportRequest() {{
                                destinations = new String[]{{
                                    add("ipsum"),
                                    add("ea"),
                                    add("occaecati"),
                                    add("quos"),
                                }};
                                endEventTime = OffsetDateTime.parse("2022-03-09T12:57:54.030Z");
                                importId = "tempora";
                                importSource = new ImportSource(                new S3ImportSource("voluptate", "reiciendis", "ex"););;
                                startEventTime = OffsetDateTime.parse("2022-10-02T07:53:52.364Z");
                            }};, StartImportXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_IMPORT) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
            }};            

            StartImportResponse res = sdk.sdk.startImport(req);

            if (res.startImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startLogging

Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartLoggingRequest;
import org.openapis.openapi.models.operations.StartLoggingResponse;
import org.openapis.openapi.models.operations.StartLoggingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartLoggingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartLoggingRequest req = new StartLoggingRequest(                new StartLoggingRequest("sit");, StartLoggingXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_LOGGING) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "error";
                xAmzCredential = "veniam";
                xAmzDate = "minima";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "nulla";
            }};            

            StartLoggingResponse res = sdk.sdk.startLogging(req);

            if (res.startLoggingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startQuery

Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartQueryRequest;
import org.openapis.openapi.models.operations.StartQueryResponse;
import org.openapis.openapi.models.operations.StartQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartQueryRequest req = new StartQueryRequest(                new StartQueryRequest("aperiam") {{
                                deliveryS3Uri = "saepe";
                            }};, StartQueryXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_START_QUERY) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "in";
                xAmzDate = "officiis";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "exercitationem";
            }};            

            StartQueryResponse res = sdk.sdk.startQuery(req);

            if (res.startQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopImport

 Stops a specified import. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopImportRequest;
import org.openapis.openapi.models.operations.StopImportResponse;
import org.openapis.openapi.models.operations.StopImportXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopImportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopImportRequest req = new StopImportRequest(                new StopImportRequest("cum");, StopImportXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_STOP_IMPORT) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "voluptatum";
                xAmzDate = "error";
                xAmzSecurityToken = "hic";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "debitis";
            }};            

            StopImportResponse res = sdk.sdk.stopImport(req);

            if (res.stopImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopLogging

Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopLoggingRequest;
import org.openapis.openapi.models.operations.StopLoggingResponse;
import org.openapis.openapi.models.operations.StopLoggingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopLoggingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopLoggingRequest req = new StopLoggingRequest(                new StopLoggingRequest("dolorum");, StopLoggingXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_STOP_LOGGING) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolorum";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "atque";
            }};            

            StopLoggingResponse res = sdk.sdk.stopLogging(req);

            if (res.stopLoggingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChannel

Updates a channel specified by a required channel ARN or UUID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.operations.UpdateChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.DestinationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateChannelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest(                new UpdateChannelRequest("ut") {{
                                destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                    add(new Destination("expedita", DestinationTypeEnum.EVENT_DATA_STORE) {{
                                        location = "voluptatem";
                                        type = DestinationTypeEnum.AWS_SERVICE;
                                    }}),
                                    add(new Destination("ipsam", DestinationTypeEnum.EVENT_DATA_STORE) {{
                                        location = "consequatur";
                                        type = DestinationTypeEnum.EVENT_DATA_STORE;
                                    }}),
                                    add(new Destination("repudiandae", DestinationTypeEnum.EVENT_DATA_STORE) {{
                                        location = "voluptatum";
                                        type = DestinationTypeEnum.AWS_SERVICE;
                                    }}),
                                    add(new Destination("ex", DestinationTypeEnum.EVENT_DATA_STORE) {{
                                        location = "et";
                                        type = DestinationTypeEnum.AWS_SERVICE;
                                    }}),
                                }};
                                name = "Gina Heathcote";
                            }};, UpdateChannelXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_CHANNEL) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "reiciendis";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "harum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "architecto";
            }};            

            UpdateChannelResponse res = sdk.sdk.updateChannel(req);

            if (res.updateChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEventDataStore

<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEventDataStoreRequest;
import org.openapis.openapi.models.operations.UpdateEventDataStoreResponse;
import org.openapis.openapi.models.operations.UpdateEventDataStoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdvancedEventSelector;
import org.openapis.openapi.models.shared.AdvancedFieldSelector;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEventDataStoreRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEventDataStoreRequest req = new UpdateEventDataStoreRequest(                new UpdateEventDataStoreRequest("labore") {{
                                advancedEventSelectors = new org.openapis.openapi.models.shared.AdvancedEventSelector[]{{
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("doloremque") {{
                                                            endsWith = new String[]{{
                                                                add("molestias"),
                                                                add("magnam"),
                                                                add("saepe"),
                                                                add("consequuntur"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("officiis"),
                                                                add("perspiciatis"),
                                                                add("in"),
                                                            }};
                                                            field = "adipisci";
                                                            notEndsWith = new String[]{{
                                                                add("occaecati"),
                                                                add("consequuntur"),
                                                                add("fugit"),
                                                                add("id"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("reprehenderit"),
                                                                add("error"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("corporis"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("eveniet"),
                                                                add("non"),
                                                                add("vero"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("praesentium") {{
                                                endsWith = new String[]{{
                                                    add("nam"),
                                                    add("tenetur"),
                                                    add("laboriosam"),
                                                }};
                                                equals = new String[]{{
                                                    add("amet"),
                                                }};
                                                field = "deserunt";
                                                notEndsWith = new String[]{{
                                                    add("unde"),
                                                    add("reiciendis"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("repellendus"),
                                                    add("delectus"),
                                                    add("voluptates"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("est"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("reprehenderit"),
                                                    add("facere"),
                                                    add("fuga"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("officiis") {{
                                                endsWith = new String[]{{
                                                    add("veniam"),
                                                    add("voluptatem"),
                                                    add("quisquam"),
                                                }};
                                                equals = new String[]{{
                                                    add("quasi"),
                                                    add("atque"),
                                                    add("reprehenderit"),
                                                    add("asperiores"),
                                                }};
                                                field = "totam";
                                                notEndsWith = new String[]{{
                                                    add("quidem"),
                                                    add("maxime"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("esse"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("assumenda"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("atque"),
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("dicta") {{
                                                endsWith = new String[]{{
                                                    add("accusamus"),
                                                    add("natus"),
                                                    add("minima"),
                                                    add("aspernatur"),
                                                }};
                                                equals = new String[]{{
                                                    add("maiores"),
                                                    add("corrupti"),
                                                }};
                                                field = "at";
                                                notEndsWith = new String[]{{
                                                    add("blanditiis"),
                                                    add("suscipit"),
                                                    add("repudiandae"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("atque"),
                                                    add("sunt"),
                                                    add("recusandae"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("repellendus"),
                                                    add("labore"),
                                                    add("reiciendis"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                            }}),
                                        }};
                                        name = "Teresa Daniel";
                                    }}),
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("voluptatibus") {{
                                                            endsWith = new String[]{{
                                                                add("esse"),
                                                                add("provident"),
                                                                add("quis"),
                                                                add("eum"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("provident"),
                                                                add("aspernatur"),
                                                                add("ullam"),
                                                                add("quasi"),
                                                            }};
                                                            field = "animi";
                                                            notEndsWith = new String[]{{
                                                                add("mollitia"),
                                                                add("provident"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("animi"),
                                                                add("ex"),
                                                                add("aliquid"),
                                                                add("accusantium"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("doloribus"),
                                                                add("ullam"),
                                                                add("in"),
                                                                add("nam"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("officia"),
                                                                add("laborum"),
                                                                add("placeat"),
                                                                add("modi"),
                                                            }};
                                                        }}),
                                                        add(new AdvancedFieldSelector("dicta") {{
                                                            endsWith = new String[]{{
                                                                add("officiis"),
                                                                add("sapiente"),
                                                                add("cumque"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("rerum"),
                                                            }};
                                                            field = "tempora";
                                                            notEndsWith = new String[]{{
                                                                add("inventore"),
                                                                add("fugit"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("quae"),
                                                                add("perferendis"),
                                                                add("velit"),
                                                                add("aspernatur"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("eius"),
                                                                add("rem"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("impedit"),
                                                                add("eos"),
                                                                add("sapiente"),
                                                                add("eum"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("alias") {{
                                                endsWith = new String[]{{
                                                    add("totam"),
                                                }};
                                                equals = new String[]{{
                                                    add("molestiae"),
                                                }};
                                                field = "eveniet";
                                                notEndsWith = new String[]{{
                                                    add("cum"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("necessitatibus"),
                                                    add("ratione"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("distinctio"),
                                                    add("voluptatum"),
                                                    add("rem"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("ad"),
                                                    add("repellat"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("ut") {{
                                                endsWith = new String[]{{
                                                    add("perspiciatis"),
                                                    add("nihil"),
                                                }};
                                                equals = new String[]{{
                                                    add("voluptas"),
                                                    add("alias"),
                                                    add("maiores"),
                                                }};
                                                field = "reiciendis";
                                                notEndsWith = new String[]{{
                                                    add("id"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("dolore"),
                                                    add("dolorum"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("quae"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("omnis"),
                                                    add("quaerat"),
                                                    add("molestiae"),
                                                    add("ex"),
                                                }};
                                            }}),
                                        }};
                                        name = "Jeff Toy";
                                    }}),
                                    add(new AdvancedEventSelector(                new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                                        add(new AdvancedFieldSelector("voluptas") {{
                                                            endsWith = new String[]{{
                                                                add("odio"),
                                                            }};
                                                            equals = new String[]{{
                                                                add("esse"),
                                                                add("ex"),
                                                            }};
                                                            field = "consectetur";
                                                            notEndsWith = new String[]{{
                                                                add("ipsa"),
                                                                add("laborum"),
                                                            }};
                                                            notEquals = new String[]{{
                                                                add("nostrum"),
                                                            }};
                                                            notStartsWith = new String[]{{
                                                                add("expedita"),
                                                                add("aliquid"),
                                                                add("officia"),
                                                                add("suscipit"),
                                                            }};
                                                            startsWith = new String[]{{
                                                                add("perferendis"),
                                                                add("eum"),
                                                            }};
                                                        }}),
                                                    }}) {{
                                        fieldSelectors = new org.openapis.openapi.models.shared.AdvancedFieldSelector[]{{
                                            add(new AdvancedFieldSelector("nulla") {{
                                                endsWith = new String[]{{
                                                    add("cupiditate"),
                                                }};
                                                equals = new String[]{{
                                                    add("earum"),
                                                    add("soluta"),
                                                    add("hic"),
                                                }};
                                                field = "illum";
                                                notEndsWith = new String[]{{
                                                    add("earum"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("maiores"),
                                                    add("debitis"),
                                                    add("aliquid"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("suscipit"),
                                                    add("dolorem"),
                                                    add("fugit"),
                                                    add("cumque"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("ratione"),
                                                    add("animi"),
                                                    add("necessitatibus"),
                                                }};
                                            }}),
                                            add(new AdvancedFieldSelector("esse") {{
                                                endsWith = new String[]{{
                                                    add("quasi"),
                                                }};
                                                equals = new String[]{{
                                                    add("ducimus"),
                                                }};
                                                field = "natus";
                                                notEndsWith = new String[]{{
                                                    add("suscipit"),
                                                    add("adipisci"),
                                                    add("quasi"),
                                                }};
                                                notEquals = new String[]{{
                                                    add("doloribus"),
                                                }};
                                                notStartsWith = new String[]{{
                                                    add("necessitatibus"),
                                                    add("ipsa"),
                                                    add("tempora"),
                                                    add("nihil"),
                                                }};
                                                startsWith = new String[]{{
                                                    add("dicta"),
                                                    add("iusto"),
                                                }};
                                            }}),
                                        }};
                                        name = "Emilio Wisoky PhD";
                                    }}),
                                }};
                                kmsKeyId = "iste";
                                multiRegionEnabled = false;
                                name = "Raymond Muller";
                                organizationEnabled = false;
                                retentionPeriod = 653421L;
                                terminationProtectionEnabled = false;
                            }};, UpdateEventDataStoreXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_EVENT_DATA_STORE) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "libero";
                xAmzCredential = "ad";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "enim";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "repellendus";
            }};            

            UpdateEventDataStoreResponse res = sdk.sdk.updateEventDataStore(req);

            if (res.updateEventDataStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrail

Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrailRequest;
import org.openapis.openapi.models.operations.UpdateTrailResponse;
import org.openapis.openapi.models.operations.UpdateTrailXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTrailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrailRequest req = new UpdateTrailRequest(                new UpdateTrailRequest("quo") {{
                                cloudWatchLogsLogGroupArn = "ex";
                                cloudWatchLogsRoleArn = "ut";
                                enableLogFileValidation = false;
                                includeGlobalServiceEvents = false;
                                isMultiRegionTrail = false;
                                isOrganizationTrail = false;
                                kmsKeyId = "ad";
                                s3BucketName = "expedita";
                                s3KeyPrefix = "voluptatem";
                                snsTopicName = "molestias";
                            }};, UpdateTrailXAmzTargetEnum.COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_UPDATE_TRAIL) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "beatae";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "rerum";
            }};            

            UpdateTrailResponse res = sdk.sdk.updateTrail(req);

            if (res.updateTrailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
