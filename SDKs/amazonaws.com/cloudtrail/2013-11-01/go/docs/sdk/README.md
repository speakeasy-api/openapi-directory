# SDK

## Overview

<fullname>CloudTrail</fullname> <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p> <p>CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.</p> <note> <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p> </note> <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudtrail/>
### Available Operations

* [AddTags](#addtags) - Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).
* [CancelQuery](#cancelquery) - Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.
* [CreateChannel](#createchannel) - Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.
* [CreateEventDataStore](#createeventdatastore) - Creates a new event data store.
* [CreateTrail](#createtrail) - Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 
* [DeleteChannel](#deletechannel) - Deletes a channel.
* [DeleteEventDataStore](#deleteeventdatastore) - <p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>
* [DeleteResourcePolicy](#deleteresourcepolicy) -  Deletes the resource-based policy attached to the CloudTrail channel. 
* [DeleteTrail](#deletetrail) - Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
* [DeregisterOrganizationDelegatedAdmin](#deregisterorganizationdelegatedadmin) - Removes CloudTrail delegated administrator permissions from a member account in an organization.
* [DescribeQuery](#describequery) - Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.
* [DescribeTrails](#describetrails) - Retrieves settings for one or more trails associated with the current region for your account.
* [GetChannel](#getchannel) -  Returns information about a specific channel. 
* [GetEventDataStore](#geteventdatastore) - Returns information about an event data store specified as either an ARN or the ID portion of the ARN.
* [GetEventSelectors](#geteventselectors) - <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>
* [GetImport](#getimport) -  Returns information about a specific import. 
* [GetInsightSelectors](#getinsightselectors) - <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>
* [GetQueryResults](#getqueryresults) - Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.
* [GetResourcePolicy](#getresourcepolicy) -  Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 
* [GetTrail](#gettrail) - Returns settings information for a specified trail.
* [GetTrailStatus](#gettrailstatus) - Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.
* [ListChannels](#listchannels) -  Lists the channels in the current account, and their source names. 
* [ListEventDataStores](#listeventdatastores) - Returns information about all event data stores in the account, in the current region.
* [ListImportFailures](#listimportfailures) -  Returns a list of failures for the specified import. 
* [ListImports](#listimports) -  Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 
* [ListPublicKeys](#listpublickeys) - <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>
* [ListQueries](#listqueries) - Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.
* [ListTags](#listtags) - Lists the tags for the trail, event data store, or channel in the current region.
* [ListTrails](#listtrails) - Lists trails that are in the current account.
* [LookupEvents](#lookupevents) - <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>
* [PutEventSelectors](#puteventselectors) - <p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>
* [PutInsightSelectors](#putinsightselectors) - Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.
* [PutResourcePolicy](#putresourcepolicy) -  Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 
* [RegisterOrganizationDelegatedAdmin](#registerorganizationdelegatedadmin) - Registers an organization’s member account as the CloudTrail delegated administrator.
* [RemoveTags](#removetags) - Removes the specified tags from a trail, event data store, or channel.
* [RestoreEventDataStore](#restoreeventdatastore) - Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.
* [StartImport](#startimport) - <p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>
* [StartLogging](#startlogging) - Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
* [StartQuery](#startquery) - Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.
* [StopImport](#stopimport) -  Stops a specified import. 
* [StopLogging](#stoplogging) - Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.
* [UpdateChannel](#updatechannel) - Updates a channel specified by a required channel ARN or UUID.
* [UpdateEventDataStore](#updateeventdatastore) - <p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>
* [UpdateTrail](#updatetrail) - Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

## AddTags

Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).

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
    res, err := s.SDK.AddTags(ctx, operations.AddTagsRequest{
        AddTagsRequest: shared.AddTagsRequest{
            ResourceID: "ipsa",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "tempora",
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: sdk.String("minus"),
                },
                shared.Tag{
                    Key: "placeat",
                    Value: sdk.String("voluptatum"),
                },
                shared.Tag{
                    Key: "iusto",
                    Value: sdk.String("excepturi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsResponse != nil {
        // handle response
    }
}
```

## CancelQuery

Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.

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
    res, err := s.SDK.CancelQuery(ctx, operations.CancelQueryRequest{
        CancelQueryRequest: shared.CancelQueryRequest{
            EventDataStore: sdk.String("perferendis"),
            QueryID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.CancelQueryXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelQueryResponse != nil {
        // handle response
    }
}
```

## CreateChannel

Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.

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
    res, err := s.SDK.CreateChannel(ctx, operations.CreateChannelRequest{
        CreateChannelRequest: shared.CreateChannelRequest{
            Destinations: []shared.Destination{
                shared.Destination{
                    Location: "quod",
                    Type: shared.DestinationTypeEnumAwsService,
                },
                shared.Destination{
                    Location: "esse",
                    Type: shared.DestinationTypeEnumAwsService,
                },
            },
            Name: "Omar Carroll",
            Source: "occaecati",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deleniti",
                    Value: sdk.String("hic"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CreateChannelXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChannelResponse != nil {
        // handle response
    }
}
```

## CreateEventDataStore

Creates a new event data store.

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
    res, err := s.SDK.CreateEventDataStore(ctx, operations.CreateEventDataStoreRequest{
        CreateEventDataStoreRequest: shared.CreateEventDataStoreRequest{
            AdvancedEventSelectors: []shared.AdvancedEventSelector{
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "ipsum",
                                "excepturi",
                            },
                            Equals: []string{
                                "perferendis",
                            },
                            Field: "ad",
                            NotEndsWith: []string{
                                "sed",
                                "iste",
                                "dolor",
                            },
                            NotEquals: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                            NotStartsWith: []string{
                                "in",
                                "corporis",
                                "iste",
                            },
                            StartsWith: []string{
                                "saepe",
                                "quidem",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "ipsa",
                            },
                            Equals: []string{
                                "est",
                                "mollitia",
                                "laborum",
                                "dolores",
                            },
                            Field: "dolorem",
                            NotEndsWith: []string{
                                "explicabo",
                                "nobis",
                            },
                            NotEquals: []string{
                                "omnis",
                                "nemo",
                            },
                            NotStartsWith: []string{
                                "excepturi",
                                "accusantium",
                            },
                            StartsWith: []string{
                                "culpa",
                                "doloribus",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "architecto",
                                "mollitia",
                                "dolorem",
                                "culpa",
                            },
                            Equals: []string{
                                "repellat",
                            },
                            Field: "mollitia",
                            NotEndsWith: []string{
                                "numquam",
                                "commodi",
                                "quam",
                            },
                            NotEquals: []string{
                                "velit",
                                "error",
                            },
                            NotStartsWith: []string{
                                "quis",
                            },
                            StartsWith: []string{
                                "laborum",
                            },
                        },
                    },
                    Name: sdk.String("Bill Conn"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "id",
                                "possimus",
                            },
                            Equals: []string{
                                "quasi",
                            },
                            Field: "error",
                            NotEndsWith: []string{
                                "laborum",
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                            NotEquals: []string{
                                "nihil",
                                "praesentium",
                                "voluptatibus",
                                "ipsa",
                            },
                            NotStartsWith: []string{
                                "voluptate",
                                "cum",
                                "perferendis",
                            },
                            StartsWith: []string{
                                "reprehenderit",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "maiores",
                                "dicta",
                            },
                            Equals: []string{
                                "dolore",
                                "iusto",
                            },
                            Field: "dicta",
                            NotEndsWith: []string{
                                "enim",
                                "accusamus",
                                "commodi",
                            },
                            NotEquals: []string{
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            },
                            NotStartsWith: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                            StartsWith: []string{
                                "voluptates",
                                "quasi",
                                "repudiandae",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "veritatis",
                                "itaque",
                                "incidunt",
                            },
                            Equals: []string{
                                "consequatur",
                                "est",
                            },
                            Field: "quibusdam",
                            NotEndsWith: []string{
                                "deserunt",
                            },
                            NotEquals: []string{
                                "quibusdam",
                                "labore",
                                "modi",
                            },
                            NotStartsWith: []string{
                                "aliquid",
                            },
                            StartsWith: []string{
                                "quos",
                                "perferendis",
                                "magni",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                            Equals: []string{
                                "tempora",
                                "facilis",
                                "tempore",
                            },
                            Field: "labore",
                            NotEndsWith: []string{
                                "eum",
                                "non",
                                "eligendi",
                                "sint",
                            },
                            NotEquals: []string{
                                "provident",
                                "necessitatibus",
                            },
                            NotStartsWith: []string{
                                "officia",
                                "dolor",
                                "debitis",
                            },
                            StartsWith: []string{
                                "dolorum",
                                "in",
                                "in",
                                "illum",
                            },
                        },
                    },
                    Name: sdk.String("Jean Buckridge"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "aliquid",
                                "laborum",
                            },
                            Equals: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                            Field: "delectus",
                            NotEndsWith: []string{
                                "provident",
                                "nam",
                                "id",
                            },
                            NotEquals: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                            NotStartsWith: []string{
                                "nisi",
                                "vel",
                                "natus",
                            },
                            StartsWith: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "distinctio",
                                "id",
                            },
                            Equals: []string{
                                "labore",
                                "suscipit",
                            },
                            Field: "natus",
                            NotEndsWith: []string{
                                "eum",
                                "vero",
                                "aspernatur",
                            },
                            NotEquals: []string{
                                "magnam",
                            },
                            NotStartsWith: []string{
                                "excepturi",
                            },
                            StartsWith: []string{
                                "provident",
                                "quos",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "accusantium",
                                "mollitia",
                                "reiciendis",
                            },
                            Equals: []string{
                                "ad",
                                "eum",
                                "dolor",
                            },
                            Field: "necessitatibus",
                            NotEndsWith: []string{
                                "nemo",
                            },
                            NotEquals: []string{
                                "iure",
                            },
                            NotStartsWith: []string{
                                "debitis",
                                "eius",
                                "maxime",
                                "deleniti",
                            },
                            StartsWith: []string{
                                "in",
                                "architecto",
                                "architecto",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "ullam",
                                "expedita",
                                "nihil",
                                "repellat",
                            },
                            Equals: []string{
                                "sed",
                                "saepe",
                                "pariatur",
                                "accusantium",
                            },
                            Field: "consequuntur",
                            NotEndsWith: []string{
                                "natus",
                                "magni",
                                "sunt",
                            },
                            NotEquals: []string{
                                "illum",
                                "pariatur",
                                "maxime",
                                "ea",
                            },
                            NotStartsWith: []string{
                                "odit",
                                "ea",
                                "accusantium",
                            },
                            StartsWith: []string{
                                "maiores",
                            },
                        },
                    },
                    Name: sdk.String("Clyde Kling"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "nemo",
                                "voluptatibus",
                                "perferendis",
                                "fugiat",
                            },
                            Equals: []string{
                                "aut",
                            },
                            Field: "cumque",
                            NotEndsWith: []string{
                                "hic",
                                "libero",
                            },
                            NotEquals: []string{
                                "dolores",
                                "quis",
                                "totam",
                            },
                            NotStartsWith: []string{
                                "eaque",
                                "quis",
                            },
                            StartsWith: []string{
                                "eos",
                            },
                        },
                    },
                    Name: sdk.String("Jacqueline Schimmel"),
                },
            },
            KmsKeyID: sdk.String("vero"),
            MultiRegionEnabled: sdk.Bool(false),
            Name: "Mindy Walter",
            OrganizationEnabled: sdk.Bool(false),
            RetentionPeriod: sdk.Int64(596656),
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "porro",
                    Value: sdk.String("consequuntur"),
                },
            },
            TerminationProtectionEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.CreateEventDataStoreXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventDataStoreResponse != nil {
        // handle response
    }
}
```

## CreateTrail

Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. 

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
    res, err := s.SDK.CreateTrail(ctx, operations.CreateTrailRequest{
        CreateTrailRequest: shared.CreateTrailRequest{
            CloudWatchLogsLogGroupArn: sdk.String("earum"),
            CloudWatchLogsRoleArn: sdk.String("modi"),
            EnableLogFileValidation: sdk.Bool(false),
            IncludeGlobalServiceEvents: sdk.Bool(false),
            IsMultiRegionTrail: sdk.Bool(false),
            IsOrganizationTrail: sdk.Bool(false),
            KmsKeyID: sdk.String("iste"),
            Name: "Casey Stracke",
            S3BucketName: "libero",
            S3KeyPrefix: sdk.String("delectus"),
            SnsTopicName: sdk.String("quaerat"),
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "aliquid",
                    Value: sdk.String("dolorem"),
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: sdk.String("dolor"),
                },
                shared.Tag{
                    Key: "qui",
                    Value: sdk.String("ipsum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.CreateTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrailResponse != nil {
        // handle response
    }
}
```

## DeleteChannel

Deletes a channel.

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
    res, err := s.SDK.DeleteChannel(ctx, operations.DeleteChannelRequest{
        DeleteChannelRequest: shared.DeleteChannelRequest{
            Channel: "dolorum",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DeleteChannelXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteChannelResponse != nil {
        // handle response
    }
}
```

## DeleteEventDataStore

<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>

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
    res, err := s.SDK.DeleteEventDataStore(ctx, operations.DeleteEventDataStoreRequest{
        DeleteEventDataStoreRequest: shared.DeleteEventDataStoreRequest{
            EventDataStore: "accusamus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DeleteEventDataStoreXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEventDataStoreResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

 Deletes the resource-based policy attached to the CloudTrail channel. 

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest{
            ResourceArn: "fugiat",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DeleteTrail

Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

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
    res, err := s.SDK.DeleteTrail(ctx, operations.DeleteTrailRequest{
        DeleteTrailRequest: shared.DeleteTrailRequest{
            Name: "Terence Rau",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrailResponse != nil {
        // handle response
    }
}
```

## DeregisterOrganizationDelegatedAdmin

Removes CloudTrail delegated administrator permissions from a member account in an organization.

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
    res, err := s.SDK.DeregisterOrganizationDelegatedAdmin(ctx, operations.DeregisterOrganizationDelegatedAdminRequest{
        DeregisterOrganizationDelegatedAdminRequest: shared.DeregisterOrganizationDelegatedAdminRequest{
            DelegatedAdminAccountID: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeregisterOrganizationDelegatedAdminXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdmin,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterOrganizationDelegatedAdminResponse != nil {
        // handle response
    }
}
```

## DescribeQuery

Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.

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
    res, err := s.SDK.DescribeQuery(ctx, operations.DescribeQueryRequest{
        DescribeQueryRequest: shared.DescribeQueryRequest{
            EventDataStore: sdk.String("minima"),
            QueryID: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeQueryXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeQueryResponse != nil {
        // handle response
    }
}
```

## DescribeTrails

Retrieves settings for one or more trails associated with the current region for your account.

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
    res, err := s.SDK.DescribeTrails(ctx, operations.DescribeTrailsRequest{
        DescribeTrailsRequest: shared.DescribeTrailsRequest{
            IncludeShadowTrails: sdk.Bool(false),
            TrailNameList: []string{
                "officiis",
                "qui",
                "dolorum",
                "a",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DescribeTrailsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrailsResponse != nil {
        // handle response
    }
}
```

## GetChannel

 Returns information about a specific channel. 

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
    res, err := s.SDK.GetChannel(ctx, operations.GetChannelRequest{
        GetChannelRequest: shared.GetChannelRequest{
            Channel: "tempore",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.GetChannelXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChannelResponse != nil {
        // handle response
    }
}
```

## GetEventDataStore

Returns information about an event data store specified as either an ARN or the ID portion of the ARN.

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
    res, err := s.SDK.GetEventDataStore(ctx, operations.GetEventDataStoreRequest{
        GetEventDataStoreRequest: shared.GetEventDataStoreRequest{
            EventDataStore: "sit",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.GetEventDataStoreXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventDataStoreResponse != nil {
        // handle response
    }
}
```

## GetEventSelectors

<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a> </p> </li> </ul>

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
    res, err := s.SDK.GetEventSelectors(ctx, operations.GetEventSelectorsRequest{
        GetEventSelectorsRequest: shared.GetEventSelectorsRequest{
            TrailName: "quam",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.GetEventSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventSelectorsResponse != nil {
        // handle response
    }
}
```

## GetImport

 Returns information about a specific import. 

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
    res, err := s.SDK.GetImport(ctx, operations.GetImportRequest{
        GetImportRequest: shared.GetImportRequest{
            ImportID: "dicta",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.GetImportXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetImport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImportResponse != nil {
        // handle response
    }
}
```

## GetInsightSelectors

<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>

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
    res, err := s.SDK.GetInsightSelectors(ctx, operations.GetInsightSelectorsRequest{
        GetInsightSelectorsRequest: shared.GetInsightSelectorsRequest{
            TrailName: "aliquid",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.GetInsightSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightSelectorsResponse != nil {
        // handle response
    }
}
```

## GetQueryResults

Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.

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
    res, err := s.SDK.GetQueryResults(ctx, operations.GetQueryResultsRequest{
        GetQueryResultsRequest: shared.GetQueryResultsRequest{
            EventDataStore: sdk.String("odio"),
            MaxQueryResults: sdk.Int64(124833),
            NextToken: sdk.String("ullam"),
            QueryID: "nam",
        },
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.GetQueryResultsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResults,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryResultsResponse != nil {
        // handle response
    }
}
```

## GetResourcePolicy

 Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. 

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
    res, err := s.SDK.GetResourcePolicy(ctx, operations.GetResourcePolicyRequest{
        GetResourcePolicyRequest: shared.GetResourcePolicyRequest{
            ResourceArn: "veritatis",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.GetResourcePolicyXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePolicyResponse != nil {
        // handle response
    }
}
```

## GetTrail

Returns settings information for a specified trail.

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
    res, err := s.SDK.GetTrail(ctx, operations.GetTrailRequest{
        GetTrailRequest: shared.GetTrailRequest{
            Name: "Clara Fisher Jr.",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.GetTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrailResponse != nil {
        // handle response
    }
}
```

## GetTrailStatus

Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.

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
    res, err := s.SDK.GetTrailStatus(ctx, operations.GetTrailStatusRequest{
        GetTrailStatusRequest: shared.GetTrailStatusRequest{
            Name: "Alexander Prosacco",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.GetTrailStatusXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrailStatusResponse != nil {
        // handle response
    }
}
```

## ListChannels

 Lists the channels in the current account, and their source names. 

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
    res, err := s.SDK.ListChannels(ctx, operations.ListChannelsRequest{
        ListChannelsRequest: shared.ListChannelsRequest{
            MaxResults: sdk.Int64(606476),
            NextToken: sdk.String("quis"),
        },
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("delectus"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListChannelsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## ListEventDataStores

Returns information about all event data stores in the account, in the current region.

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
    res, err := s.SDK.ListEventDataStores(ctx, operations.ListEventDataStoresRequest{
        ListEventDataStoresRequest: shared.ListEventDataStoresRequest{
            MaxResults: sdk.Int64(799203),
            NextToken: sdk.String("odio"),
        },
        MaxResults: sdk.String("similique"),
        NextToken: sdk.String("facilis"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ListEventDataStoresXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStores,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventDataStoresResponse != nil {
        // handle response
    }
}
```

## ListImportFailures

 Returns a list of failures for the specified import. 

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
    res, err := s.SDK.ListImportFailures(ctx, operations.ListImportFailuresRequest{
        ListImportFailuresRequest: shared.ListImportFailuresRequest{
            ImportID: "impedit",
            MaxResults: sdk.Int64(13236),
            NextToken: sdk.String("voluptatibus"),
        },
        MaxResults: sdk.String("exercitationem"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.ListImportFailuresXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailures,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportFailuresResponse != nil {
        // handle response
    }
}
```

## ListImports

 Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. 

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
    res, err := s.SDK.ListImports(ctx, operations.ListImportsRequest{
        ListImportsRequest: shared.ListImportsRequest{
            Destination: sdk.String("alias"),
            ImportStatus: shared.ImportStatusEnumStopped.ToPointer(),
            MaxResults: sdk.Int64(269479),
            NextToken: sdk.String("ipsam"),
        },
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.ListImportsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListImports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportsResponse != nil {
        // handle response
    }
}
```

## ListPublicKeys

<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>

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
    res, err := s.SDK.ListPublicKeys(ctx, operations.ListPublicKeysRequest{
        ListPublicKeysRequest: shared.ListPublicKeysRequest{
            EndTime: types.MustTimeFromString("2022-01-08T01:04:15.076Z"),
            NextToken: sdk.String("quasi"),
            StartTime: types.MustTimeFromString("2022-02-20T07:12:08.273Z"),
        },
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListPublicKeysXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPublicKeysResponse != nil {
        // handle response
    }
}
```

## ListQueries

Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.

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
    res, err := s.SDK.ListQueries(ctx, operations.ListQueriesRequest{
        ListQueriesRequest: shared.ListQueriesRequest{
            EndTime: types.MustTimeFromString("2022-09-01T09:38:53.685Z"),
            EventDataStore: "aliquid",
            MaxResults: sdk.Int64(81101),
            NextToken: sdk.String("magnam"),
            QueryStatus: shared.QueryStatusEnumFinished.ToPointer(),
            StartTime: types.MustTimeFromString("2022-04-21T16:53:11.568Z"),
        },
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ListQueriesXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueriesResponse != nil {
        // handle response
    }
}
```

## ListTags

Lists the tags for the trail, event data store, or channel in the current region.

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
    res, err := s.SDK.ListTags(ctx, operations.ListTagsRequest{
        ListTagsRequest: shared.ListTagsRequest{
            NextToken: sdk.String("impedit"),
            ResourceIDList: []string{
                "fugit",
                "accusamus",
            },
        },
        NextToken: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## ListTrails

Lists trails that are in the current account.

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
    res, err := s.SDK.ListTrails(ctx, operations.ListTrailsRequest{
        ListTrailsRequest: shared.ListTrailsRequest{
            NextToken: sdk.String("autem"),
        },
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListTrailsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrailsResponse != nil {
        // handle response
    }
}
```

## LookupEvents

<p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>

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
    res, err := s.SDK.LookupEvents(ctx, operations.LookupEventsRequest{
        LookupEventsRequest: shared.LookupEventsRequest{
            EndTime: types.MustTimeFromString("2022-11-14T00:12:37.683Z"),
            EventCategory: shared.EventCategoryEnumInsight.ToPointer(),
            LookupAttributes: []shared.LookupAttribute{
                shared.LookupAttribute{
                    AttributeKey: shared.LookupAttributeKeyEnumEventID,
                    AttributeValue: "molestiae",
                },
                shared.LookupAttribute{
                    AttributeKey: shared.LookupAttributeKeyEnumReadOnly,
                    AttributeValue: "odio",
                },
                shared.LookupAttribute{
                    AttributeKey: shared.LookupAttributeKeyEnumReadOnly,
                    AttributeValue: "esse",
                },
            },
            MaxResults: sdk.Int64(456141),
            NextToken: sdk.String("rem"),
            StartTime: types.MustTimeFromString("2022-02-12T07:53:29.219Z"),
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("fugiat"),
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.LookupEventsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupEventsResponse != nil {
        // handle response
    }
}
```

## PutEventSelectors

<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails </a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails </a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>

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
    res, err := s.SDK.PutEventSelectors(ctx, operations.PutEventSelectorsRequest{
        PutEventSelectorsRequest: shared.PutEventSelectorsRequest{
            AdvancedEventSelectors: []shared.AdvancedEventSelector{
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "quidem",
                                "neque",
                                "quo",
                            },
                            Equals: []string{
                                "quo",
                                "fuga",
                                "eius",
                                "eos",
                            },
                            Field: "voluptas",
                            NotEndsWith: []string{
                                "cupiditate",
                            },
                            NotEquals: []string{
                                "tempora",
                            },
                            NotStartsWith: []string{
                                "ipsam",
                                "aspernatur",
                                "sequi",
                                "quo",
                            },
                            StartsWith: []string{
                                "recusandae",
                                "aperiam",
                            },
                        },
                    },
                    Name: sdk.String("Ms. Jermaine Kulas"),
                },
            },
            EventSelectors: []shared.EventSelector{
                shared.EventSelector{
                    DataResources: []shared.DataResource{
                        shared.DataResource{
                            Type: sdk.String("odio"),
                            Values: []string{
                                "commodi",
                                "sapiente",
                                "dolores",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("deserunt"),
                            Values: []string{
                                "accusantium",
                                "porro",
                            },
                        },
                    },
                    ExcludeManagementEventSources: []string{
                        "quas",
                        "praesentium",
                    },
                    IncludeManagementEvents: sdk.Bool(false),
                    ReadWriteType: shared.ReadWriteTypeEnumReadOnly.ToPointer(),
                },
                shared.EventSelector{
                    DataResources: []shared.DataResource{
                        shared.DataResource{
                            Type: sdk.String("fugit"),
                            Values: []string{
                                "mollitia",
                                "incidunt",
                                "atque",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("explicabo"),
                            Values: []string{
                                "nisi",
                                "fugit",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("sapiente"),
                            Values: []string{
                                "ratione",
                            },
                        },
                    },
                    ExcludeManagementEventSources: []string{
                        "saepe",
                    },
                    IncludeManagementEvents: sdk.Bool(false),
                    ReadWriteType: shared.ReadWriteTypeEnumWriteOnly.ToPointer(),
                },
                shared.EventSelector{
                    DataResources: []shared.DataResource{
                        shared.DataResource{
                            Type: sdk.String("et"),
                            Values: []string{
                                "eveniet",
                                "accusamus",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("veritatis"),
                            Values: []string{
                                "quod",
                                "nam",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("vero"),
                            Values: []string{
                                "quasi",
                                "saepe",
                            },
                        },
                    },
                    ExcludeManagementEventSources: []string{
                        "harum",
                        "molestiae",
                    },
                    IncludeManagementEvents: sdk.Bool(false),
                    ReadWriteType: shared.ReadWriteTypeEnumAll.ToPointer(),
                },
                shared.EventSelector{
                    DataResources: []shared.DataResource{
                        shared.DataResource{
                            Type: sdk.String("minima"),
                            Values: []string{
                                "eligendi",
                                "sit",
                                "culpa",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("tempore"),
                            Values: []string{
                                "cumque",
                            },
                        },
                        shared.DataResource{
                            Type: sdk.String("consequuntur"),
                            Values: []string{
                                "minus",
                            },
                        },
                    },
                    ExcludeManagementEventSources: []string{
                        "sapiente",
                        "consectetur",
                    },
                    IncludeManagementEvents: sdk.Bool(false),
                    ReadWriteType: shared.ReadWriteTypeEnumWriteOnly.ToPointer(),
                },
            },
            TrailName: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.PutEventSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEventSelectorsResponse != nil {
        // handle response
    }
}
```

## PutInsightSelectors

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.

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
    res, err := s.SDK.PutInsightSelectors(ctx, operations.PutInsightSelectorsRequest{
        PutInsightSelectorsRequest: shared.PutInsightSelectorsRequest{
            InsightSelectors: []shared.InsightSelector{
                shared.InsightSelector{
                    InsightType: shared.InsightTypeEnumAPIErrorRateInsight.ToPointer(),
                },
                shared.InsightSelector{
                    InsightType: shared.InsightTypeEnumAPIErrorRateInsight.ToPointer(),
                },
                shared.InsightSelector{
                    InsightType: shared.InsightTypeEnumAPIErrorRateInsight.ToPointer(),
                },
            },
            TrailName: "quia",
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.PutInsightSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutInsightSelectorsResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

 Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. 

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            ResourceArn: "culpa",
            ResourcePolicy: "aliquid",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## RegisterOrganizationDelegatedAdmin

Registers an organization’s member account as the CloudTrail delegated administrator.

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
    res, err := s.SDK.RegisterOrganizationDelegatedAdmin(ctx, operations.RegisterOrganizationDelegatedAdminRequest{
        RegisterOrganizationDelegatedAdminRequest: shared.RegisterOrganizationDelegatedAdminRequest{
            MemberAccountID: "illum",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.RegisterOrganizationDelegatedAdminXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdmin,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterOrganizationDelegatedAdminResponse != nil {
        // handle response
    }
}
```

## RemoveTags

Removes the specified tags from a trail, event data store, or channel.

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
    res, err := s.SDK.RemoveTags(ctx, operations.RemoveTagsRequest{
        RemoveTagsRequest: shared.RemoveTagsRequest{
            ResourceID: "ullam",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "aut",
                    Value: sdk.String("voluptatum"),
                },
                shared.Tag{
                    Key: "qui",
                    Value: sdk.String("quibusdam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.RemoveTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsResponse != nil {
        // handle response
    }
}
```

## RestoreEventDataStore

Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.

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
    res, err := s.SDK.RestoreEventDataStore(ctx, operations.RestoreEventDataStoreRequest{
        RestoreEventDataStoreRequest: shared.RestoreEventDataStoreRequest{
            EventDataStore: "quasi",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.RestoreEventDataStoreXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreEventDataStoreResponse != nil {
        // handle response
    }
}
```

## StartImport

<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>

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
    res, err := s.SDK.StartImport(ctx, operations.StartImportRequest{
        StartImportRequest: shared.StartImportRequest{
            Destinations: []string{
                "iste",
            },
            EndEventTime: types.MustTimeFromString("2022-11-25T18:47:58.319Z"),
            ImportID: sdk.String("rem"),
            ImportSource: &shared.ImportSource{
                S3: shared.S3ImportSource{
                    S3BucketAccessRoleArn: "aut",
                    S3BucketRegion: "laudantium",
                    S3LocationURI: "eum",
                },
            },
            StartEventTime: types.MustTimeFromString("2022-11-12T07:20:30.934Z"),
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.StartImportXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StartImport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImportResponse != nil {
        // handle response
    }
}
```

## StartLogging

Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.

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
    res, err := s.SDK.StartLogging(ctx, operations.StartLoggingRequest{
        StartLoggingRequest: shared.StartLoggingRequest{
            Name: "Loretta Anderson DVM",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.StartLoggingXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartLoggingResponse != nil {
        // handle response
    }
}
```

## StartQuery

Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.

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
    res, err := s.SDK.StartQuery(ctx, operations.StartQueryRequest{
        StartQueryRequest: shared.StartQueryRequest{
            DeliveryS3URI: sdk.String("quaerat"),
            QueryStatement: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.StartQueryXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StartQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartQueryResponse != nil {
        // handle response
    }
}
```

## StopImport

 Stops a specified import. 

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
    res, err := s.SDK.StopImport(ctx, operations.StopImportRequest{
        StopImportRequest: shared.StopImportRequest{
            ImportID: "quae",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.StopImportXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StopImport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopImportResponse != nil {
        // handle response
    }
}
```

## StopLogging

Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.

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
    res, err := s.SDK.StopLogging(ctx, operations.StopLoggingRequest{
        StopLoggingRequest: shared.StopLoggingRequest{
            Name: "Ricardo Franecki",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.StopLoggingXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopLoggingResponse != nil {
        // handle response
    }
}
```

## UpdateChannel

Updates a channel specified by a required channel ARN or UUID.

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
    res, err := s.SDK.UpdateChannel(ctx, operations.UpdateChannelRequest{
        UpdateChannelRequest: shared.UpdateChannelRequest{
            Channel: "labore",
            Destinations: []shared.Destination{
                shared.Destination{
                    Location: "facilis",
                    Type: shared.DestinationTypeEnumAwsService,
                },
                shared.Destination{
                    Location: "commodi",
                    Type: shared.DestinationTypeEnumEventDataStore,
                },
                shared.Destination{
                    Location: "corporis",
                    Type: shared.DestinationTypeEnumAwsService,
                },
                shared.Destination{
                    Location: "assumenda",
                    Type: shared.DestinationTypeEnumEventDataStore,
                },
            },
            Name: sdk.String("Gilbert Bayer"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.UpdateChannelXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateChannelResponse != nil {
        // handle response
    }
}
```

## UpdateEventDataStore

<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>

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
    res, err := s.SDK.UpdateEventDataStore(ctx, operations.UpdateEventDataStoreRequest{
        UpdateEventDataStoreRequest: shared.UpdateEventDataStoreRequest{
            AdvancedEventSelectors: []shared.AdvancedEventSelector{
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "necessitatibus",
                                "dolore",
                                "sunt",
                                "asperiores",
                            },
                            Equals: []string{
                                "non",
                            },
                            Field: "amet",
                            NotEndsWith: []string{
                                "dignissimos",
                            },
                            NotEquals: []string{
                                "debitis",
                                "consectetur",
                                "corporis",
                                "harum",
                            },
                            NotStartsWith: []string{
                                "ipsa",
                                "voluptates",
                            },
                            StartsWith: []string{
                                "vitae",
                                "accusamus",
                                "similique",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "aspernatur",
                                "voluptas",
                            },
                            Equals: []string{
                                "voluptas",
                                "minima",
                            },
                            Field: "nobis",
                            NotEndsWith: []string{
                                "adipisci",
                                "minus",
                                "dolores",
                            },
                            NotEquals: []string{
                                "in",
                                "dolore",
                                "aliquam",
                            },
                            NotStartsWith: []string{
                                "temporibus",
                                "ullam",
                                "adipisci",
                                "cum",
                            },
                            StartsWith: []string{
                                "quas",
                                "hic",
                                "nesciunt",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "corrupti",
                                "pariatur",
                                "totam",
                            },
                            Equals: []string{
                                "exercitationem",
                                "nobis",
                                "sit",
                                "rerum",
                            },
                            Field: "sed",
                            NotEndsWith: []string{
                                "explicabo",
                                "asperiores",
                                "facilis",
                                "voluptate",
                            },
                            NotEquals: []string{
                                "ab",
                                "iste",
                                "dolore",
                            },
                            NotStartsWith: []string{
                                "sed",
                                "in",
                                "commodi",
                            },
                            StartsWith: []string{
                                "explicabo",
                                "voluptas",
                                "unde",
                            },
                        },
                    },
                    Name: sdk.String("Laurie Willms DVM"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "maiores",
                                "incidunt",
                                "sed",
                            },
                            Equals: []string{
                                "eius",
                                "necessitatibus",
                                "ipsum",
                            },
                            Field: "ea",
                            NotEndsWith: []string{
                                "quos",
                                "voluptatibus",
                                "tempora",
                            },
                            NotEquals: []string{
                                "voluptate",
                                "reiciendis",
                            },
                            NotStartsWith: []string{
                                "sit",
                                "non",
                            },
                            StartsWith: []string{
                                "praesentium",
                                "facilis",
                                "quaerat",
                                "incidunt",
                            },
                        },
                    },
                    Name: sdk.String("Miss Alyssa Leffler"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "recusandae",
                                "reiciendis",
                            },
                            Equals: []string{
                                "magni",
                                "aperiam",
                                "saepe",
                                "numquam",
                            },
                            Field: "veniam",
                            NotEndsWith: []string{
                                "officiis",
                                "beatae",
                            },
                            NotEquals: []string{
                                "exercitationem",
                                "praesentium",
                                "cum",
                            },
                            NotStartsWith: []string{
                                "dolorum",
                                "voluptatum",
                            },
                            StartsWith: []string{
                                "hic",
                                "expedita",
                                "debitis",
                            },
                        },
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "dolorum",
                            },
                            Equals: []string{
                                "officia",
                                "dolorum",
                            },
                            Field: "corrupti",
                            NotEndsWith: []string{
                                "tempora",
                                "atque",
                                "fugit",
                                "ut",
                            },
                            NotEquals: []string{
                                "voluptatem",
                                "culpa",
                                "expedita",
                                "magnam",
                            },
                            NotStartsWith: []string{
                                "esse",
                            },
                            StartsWith: []string{
                                "sit",
                                "voluptatum",
                            },
                        },
                    },
                    Name: sdk.String("Ms. Lamar Hessel"),
                },
                shared.AdvancedEventSelector{
                    FieldSelectors: []shared.AdvancedFieldSelector{
                        shared.AdvancedFieldSelector{
                            EndsWith: []string{
                                "vel",
                            },
                            Equals: []string{
                                "saepe",
                                "error",
                            },
                            Field: "consequatur",
                            NotEndsWith: []string{
                                "reiciendis",
                                "dolorem",
                            },
                            NotEquals: []string{
                                "dicta",
                                "architecto",
                                "occaecati",
                            },
                            NotStartsWith: []string{
                                "quidem",
                                "atque",
                            },
                            StartsWith: []string{
                                "nam",
                                "tenetur",
                                "laboriosam",
                            },
                        },
                    },
                    Name: sdk.String("Grace O'Connell"),
                },
            },
            EventDataStore: "reiciendis",
            KmsKeyID: sdk.String("provident"),
            MultiRegionEnabled: sdk.Bool(false),
            Name: sdk.String("Miss Brendan Volkman"),
            OrganizationEnabled: sdk.Bool(false),
            RetentionPeriod: sdk.Int64(440666),
            TerminationProtectionEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.UpdateEventDataStoreXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEventDataStoreResponse != nil {
        // handle response
    }
}
```

## UpdateTrail

Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.

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
    res, err := s.SDK.UpdateTrail(ctx, operations.UpdateTrailRequest{
        UpdateTrailRequest: shared.UpdateTrailRequest{
            CloudWatchLogsLogGroupArn: sdk.String("repudiandae"),
            CloudWatchLogsRoleArn: sdk.String("quasi"),
            EnableLogFileValidation: sdk.Bool(false),
            IncludeGlobalServiceEvents: sdk.Bool(false),
            IsMultiRegionTrail: sdk.Bool(false),
            IsOrganizationTrail: sdk.Bool(false),
            KmsKeyID: sdk.String("atque"),
            Name: "Tabitha Leannon",
            S3BucketName: sdk.String("maxime"),
            S3KeyPrefix: sdk.String("et"),
            SnsTopicName: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.UpdateTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrailResponse != nil {
        // handle response
    }
}
```
