# SDK

## Overview

<p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your resources change state, they automatically send events to an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/events/>
### Available Operations

* [ActivateEventSource](#activateeventsource) - Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
* [CancelReplay](#cancelreplay) - Cancels the specified replay.
* [CreateAPIDestination](#createapidestination) - Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
* [CreateArchive](#createarchive) - Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
* [CreateConnection](#createconnection) - Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
* [CreateEventBus](#createeventbus) - Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
* [CreatePartnerEventSource](#createpartnereventsource) - <p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>
* [DeactivateEventSource](#deactivateeventsource) - <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
* [DeauthorizeConnection](#deauthorizeconnection) - Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.
* [DeleteAPIDestination](#deleteapidestination) - Deletes the specified API destination.
* [DeleteArchive](#deletearchive) - Deletes the specified archive.
* [DeleteConnection](#deleteconnection) - Deletes a connection.
* [DeleteEventBus](#deleteeventbus) - Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
* [DeletePartnerEventSource](#deletepartnereventsource) - <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>
* [DeleteRule](#deleterule) - <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
* [DescribeAPIDestination](#describeapidestination) - Retrieves details about an API destination.
* [DescribeArchive](#describearchive) - Retrieves details about an archive.
* [DescribeConnection](#describeconnection) - Retrieves details about a connection.
* [DescribeEventBus](#describeeventbus) - <p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
* [DescribeEventSource](#describeeventsource) - This operation lists details about a partner event source that is shared with your account.
* [DescribePartnerEventSource](#describepartnereventsource) - An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.
* [DescribeReplay](#describereplay) - Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
* [DescribeRule](#describerule) - <p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
* [DisableRule](#disablerule) - <p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
* [EnableRule](#enablerule) - <p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
* [ListAPIDestinations](#listapidestinations) - Retrieves a list of API destination in the account in the current Region.
* [ListArchives](#listarchives) - Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.
* [ListConnections](#listconnections) - Retrieves a list of connections from the account.
* [ListEventBuses](#listeventbuses) - Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
* [ListEventSources](#listeventsources) - You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.
* [ListPartnerEventSourceAccounts](#listpartnereventsourceaccounts) - An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
* [ListPartnerEventSources](#listpartnereventsources) - An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.
* [ListReplays](#listreplays) - Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.
* [ListRuleNamesByTarget](#listrulenamesbytarget) - Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
* [ListRules](#listrules) - <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
* [ListTagsForResource](#listtagsforresource) - Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
* [ListTargetsByRule](#listtargetsbyrule) - Lists the targets assigned to the specified rule.
* [PutEvents](#putevents) - Sends custom events to Amazon EventBridge so that they can be matched to rules.
* [PutPartnerEvents](#putpartnerevents) - This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
* [PutPermission](#putpermission) - <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
* [PutRule](#putrule) - <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
* [PutTargets](#puttargets) - <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [RemovePermission](#removepermission) - Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.
* [RemoveTargets](#removetargets) - <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [StartReplay](#startreplay) - Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [TestEventPattern](#testeventpattern) - <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.
* [UpdateAPIDestination](#updateapidestination) - Updates an API destination.
* [UpdateArchive](#updatearchive) - Updates the specified archive.
* [UpdateConnection](#updateconnection) - Updates settings for a connection.

## ActivateEventSource

Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.

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
    res, err := s.SDK.ActivateEventSource(ctx, operations.ActivateEventSourceRequest{
        ActivateEventSourceRequest: shared.ActivateEventSourceRequest{
            Name: "Dr. Valerie Toy",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.ActivateEventSourceXAmzTargetEnumAwsEventsActivateEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelReplay

Cancels the specified replay.

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
    res, err := s.SDK.CancelReplay(ctx, operations.CancelReplayRequest{
        CancelReplayRequest: shared.CancelReplayRequest{
            ReplayName: "nisi",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CancelReplayXAmzTargetEnumAwsEventsCancelReplay,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelReplayResponse != nil {
        // handle response
    }
}
```

## CreateAPIDestination

Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.

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
    res, err := s.SDK.CreateAPIDestination(ctx, operations.CreateAPIDestinationRequest{
        CreateAPIDestinationRequest: shared.CreateAPIDestinationRequest{
            ConnectionArn: "ipsam",
            Description: sdk.String("repellendus"),
            HTTPMethod: shared.APIDestinationHTTPMethodEnumDelete,
            InvocationEndpoint: "quo",
            InvocationRateLimitPerSecond: sdk.Int64(140350),
            Name: "Wilfred Wolff",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.CreateAPIDestinationXAmzTargetEnumAwsEventsCreateAPIDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIDestinationResponse != nil {
        // handle response
    }
}
```

## CreateArchive

Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.

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
    res, err := s.SDK.CreateArchive(ctx, operations.CreateArchiveRequest{
        CreateArchiveRequest: shared.CreateArchiveRequest{
            ArchiveName: "officia",
            Description: sdk.String("occaecati"),
            EventPattern: sdk.String("fugit"),
            EventSourceArn: "deleniti",
            RetentionDays: sdk.Int64(944669),
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CreateArchiveXAmzTargetEnumAwsEventsCreateArchive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateArchiveResponse != nil {
        // handle response
    }
}
```

## CreateConnection

Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.

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
    res, err := s.SDK.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionRequest: shared.CreateConnectionRequest{
            AuthParameters: shared.CreateConnectionAuthRequestParameters{
                APIKeyAuthParameters: &shared.CreateConnectionAPIKeyAuthRequestParameters{
                    APIKeyName: "impedit",
                    APIKeyValue: "cum",
                },
                BasicAuthParameters: &shared.CreateConnectionBasicAuthRequestParameters{
                    Password: "esse",
                    Username: "Cullen1",
                },
                InvocationHTTPParameters: &shared.ConnectionHTTPParameters{
                    BodyParameters: []shared.ConnectionBodyParameter{
                        shared.ConnectionBodyParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("natus"),
                            Value: sdk.String("sed"),
                        },
                        shared.ConnectionBodyParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("iste"),
                            Value: sdk.String("dolor"),
                        },
                    },
                    HeaderParameters: []shared.ConnectionHeaderParameter{
                        shared.ConnectionHeaderParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("laboriosam"),
                            Value: sdk.String("hic"),
                        },
                        shared.ConnectionHeaderParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("saepe"),
                            Value: sdk.String("fuga"),
                        },
                        shared.ConnectionHeaderParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("in"),
                            Value: sdk.String("corporis"),
                        },
                    },
                    QueryStringParameters: []shared.ConnectionQueryStringParameter{
                        shared.ConnectionQueryStringParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("iure"),
                            Value: sdk.String("saepe"),
                        },
                        shared.ConnectionQueryStringParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("quidem"),
                            Value: sdk.String("architecto"),
                        },
                        shared.ConnectionQueryStringParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("ipsa"),
                            Value: sdk.String("reiciendis"),
                        },
                    },
                },
                OAuthParameters: &shared.CreateConnectionOAuthRequestParameters{
                    AuthorizationEndpoint: "est",
                    ClientParameters: shared.CreateConnectionOAuthClientRequestParameters{
                        ClientID: "mollitia",
                        ClientSecret: "laborum",
                    },
                    HTTPMethod: shared.ConnectionOAuthHTTPMethodEnumGet,
                    OAuthHTTPParameters: &shared.ConnectionHTTPParameters{
                        BodyParameters: []shared.ConnectionBodyParameter{
                            shared.ConnectionBodyParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("corporis"),
                                Value: sdk.String("explicabo"),
                            },
                        },
                        HeaderParameters: []shared.ConnectionHeaderParameter{
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("enim"),
                                Value: sdk.String("omnis"),
                            },
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("nemo"),
                                Value: sdk.String("minima"),
                            },
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("excepturi"),
                                Value: sdk.String("accusantium"),
                            },
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("iure"),
                                Value: sdk.String("culpa"),
                            },
                        },
                        QueryStringParameters: []shared.ConnectionQueryStringParameter{
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("sapiente"),
                                Value: sdk.String("architecto"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("mollitia"),
                                Value: sdk.String("dolorem"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("culpa"),
                                Value: sdk.String("consequuntur"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("repellat"),
                                Value: sdk.String("mollitia"),
                            },
                        },
                    },
                },
            },
            AuthorizationType: shared.ConnectionAuthorizationTypeEnumOauthClientCredentials,
            Description: sdk.String("numquam"),
            Name: "Claudia Krajcik",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumAwsEventsCreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionResponse != nil {
        // handle response
    }
}
```

## CreateEventBus

Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.

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
    res, err := s.SDK.CreateEventBus(ctx, operations.CreateEventBusRequest{
        CreateEventBusRequest: shared.CreateEventBusRequest{
            EventSourceName: sdk.String("quo"),
            Name: "Mandy Hills",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quasi",
                    Value: "error",
                },
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.CreateEventBusXAmzTargetEnumAwsEventsCreateEventBus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventBusResponse != nil {
        // handle response
    }
}
```

## CreatePartnerEventSource

<p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>

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
    res, err := s.SDK.CreatePartnerEventSource(ctx, operations.CreatePartnerEventSourceRequest{
        CreatePartnerEventSourceRequest: shared.CreatePartnerEventSourceRequest{
            Account: "praesentium",
            Name: "Jose Moen",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreatePartnerEventSourceXAmzTargetEnumAwsEventsCreatePartnerEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePartnerEventSourceResponse != nil {
        // handle response
    }
}
```

## DeactivateEventSource

<p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>

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
    res, err := s.SDK.DeactivateEventSource(ctx, operations.DeactivateEventSourceRequest{
        DeactivateEventSourceRequest: shared.DeactivateEventSourceRequest{
            Name: "Heidi Carter",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.DeactivateEventSourceXAmzTargetEnumAwsEventsDeactivateEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeauthorizeConnection

Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.

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
    res, err := s.SDK.DeauthorizeConnection(ctx, operations.DeauthorizeConnectionRequest{
        DeauthorizeConnectionRequest: shared.DeauthorizeConnectionRequest{
            Name: "Ervin Gleason",
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DeauthorizeConnectionXAmzTargetEnumAwsEventsDeauthorizeConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeauthorizeConnectionResponse != nil {
        // handle response
    }
}
```

## DeleteAPIDestination

Deletes the specified API destination.

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
    res, err := s.SDK.DeleteAPIDestination(ctx, operations.DeleteAPIDestinationRequest{
        DeleteAPIDestinationRequest: shared.DeleteAPIDestinationRequest{
            Name: "Elizabeth Orn",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteAPIDestinationXAmzTargetEnumAwsEventsDeleteAPIDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteArchive

Deletes the specified archive.

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
    res, err := s.SDK.DeleteArchive(ctx, operations.DeleteArchiveRequest{
        DeleteArchiveRequest: shared.DeleteArchiveRequest{
            ArchiveName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DeleteArchiveXAmzTargetEnumAwsEventsDeleteArchive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteArchiveResponse != nil {
        // handle response
    }
}
```

## DeleteConnection

Deletes a connection.

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
        DeleteConnectionRequest: shared.DeleteConnectionRequest{
            Name: "Marshall Glover",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteConnectionXAmzTargetEnumAwsEventsDeleteConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectionResponse != nil {
        // handle response
    }
}
```

## DeleteEventBus

Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.

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
    res, err := s.SDK.DeleteEventBus(ctx, operations.DeleteEventBusRequest{
        DeleteEventBusRequest: shared.DeleteEventBusRequest{
            Name: "Terence Marquardt",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteEventBusXAmzTargetEnumAwsEventsDeleteEventBus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePartnerEventSource

<p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>

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
    res, err := s.SDK.DeletePartnerEventSource(ctx, operations.DeletePartnerEventSourceRequest{
        DeletePartnerEventSourceRequest: shared.DeletePartnerEventSourceRequest{
            Account: "rerum",
            Name: "Valerie Runolfsson",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeletePartnerEventSourceXAmzTargetEnumAwsEventsDeletePartnerEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRule

<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>

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
    res, err := s.SDK.DeleteRule(ctx, operations.DeleteRuleRequest{
        DeleteRuleRequest: shared.DeleteRuleRequest{
            EventBusName: sdk.String("delectus"),
            Force: sdk.Bool(false),
            Name: "Rene Reinger",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteRuleXAmzTargetEnumAwsEventsDeleteRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAPIDestination

Retrieves details about an API destination.

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
    res, err := s.SDK.DescribeAPIDestination(ctx, operations.DescribeAPIDestinationRequest{
        DescribeAPIDestinationRequest: shared.DescribeAPIDestinationRequest{
            Name: "Fernando Aufderhar",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeAPIDestinationXAmzTargetEnumAwsEventsDescribeAPIDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAPIDestinationResponse != nil {
        // handle response
    }
}
```

## DescribeArchive

Retrieves details about an archive.

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
    res, err := s.SDK.DescribeArchive(ctx, operations.DescribeArchiveRequest{
        DescribeArchiveRequest: shared.DescribeArchiveRequest{
            ArchiveName: "eum",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.DescribeArchiveXAmzTargetEnumAwsEventsDescribeArchive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeArchiveResponse != nil {
        // handle response
    }
}
```

## DescribeConnection

Retrieves details about a connection.

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
    res, err := s.SDK.DescribeConnection(ctx, operations.DescribeConnectionRequest{
        DescribeConnectionRequest: shared.DescribeConnectionRequest{
            Name: "Miss Julian Marvin",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DescribeConnectionXAmzTargetEnumAwsEventsDescribeConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectionResponse != nil {
        // handle response
    }
}
```

## DescribeEventBus

<p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>

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
    res, err := s.SDK.DescribeEventBus(ctx, operations.DescribeEventBusRequest{
        DescribeEventBusRequest: shared.DescribeEventBusRequest{
            Name: sdk.String("Vera Wyman"),
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DescribeEventBusXAmzTargetEnumAwsEventsDescribeEventBus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventBusResponse != nil {
        // handle response
    }
}
```

## DescribeEventSource

This operation lists details about a partner event source that is shared with your account.

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
    res, err := s.SDK.DescribeEventSource(ctx, operations.DescribeEventSourceRequest{
        DescribeEventSourceRequest: shared.DescribeEventSourceRequest{
            Name: "Lola Koss",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeEventSourceXAmzTargetEnumAwsEventsDescribeEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventSourceResponse != nil {
        // handle response
    }
}
```

## DescribePartnerEventSource

An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.

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
    res, err := s.SDK.DescribePartnerEventSource(ctx, operations.DescribePartnerEventSourceRequest{
        DescribePartnerEventSourceRequest: shared.DescribePartnerEventSourceRequest{
            Name: "Joan Satterfield",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribePartnerEventSourceXAmzTargetEnumAwsEventsDescribePartnerEventSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePartnerEventSourceResponse != nil {
        // handle response
    }
}
```

## DescribeReplay

Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

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
    res, err := s.SDK.DescribeReplay(ctx, operations.DescribeReplayRequest{
        DescribeReplayRequest: shared.DescribeReplayRequest{
            ReplayName: "maiores",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeReplayXAmzTargetEnumAwsEventsDescribeReplay,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplayResponse != nil {
        // handle response
    }
}
```

## DescribeRule

<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

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
    res, err := s.SDK.DescribeRule(ctx, operations.DescribeRuleRequest{
        DescribeRuleRequest: shared.DescribeRuleRequest{
            EventBusName: sdk.String("nemo"),
            Name: "Joseph Steuber DDS",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeRuleXAmzTargetEnumAwsEventsDescribeRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuleResponse != nil {
        // handle response
    }
}
```

## DisableRule

<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>

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
    res, err := s.SDK.DisableRule(ctx, operations.DisableRuleRequest{
        DisableRuleRequest: shared.DisableRuleRequest{
            EventBusName: sdk.String("dignissimos"),
            Name: "Beatrice Dooley Sr.",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.DisableRuleXAmzTargetEnumAwsEventsDisableRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableRule

<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>

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
    res, err := s.SDK.EnableRule(ctx, operations.EnableRuleRequest{
        EnableRuleRequest: shared.EnableRuleRequest{
            EventBusName: sdk.String("omnis"),
            Name: "Freddie Bartoletti",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.EnableRuleXAmzTargetEnumAwsEventsEnableRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListAPIDestinations

Retrieves a list of API destination in the account in the current Region.

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
    res, err := s.SDK.ListAPIDestinations(ctx, operations.ListAPIDestinationsRequest{
        ListAPIDestinationsRequest: shared.ListAPIDestinationsRequest{
            ConnectionArn: sdk.String("earum"),
            Limit: sdk.Int64(267262),
            NamePrefix: sdk.String("iste"),
            NextToken: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ListAPIDestinationsXAmzTargetEnumAwsEventsListAPIDestinations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIDestinationsResponse != nil {
        // handle response
    }
}
```

## ListArchives

Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.

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
    res, err := s.SDK.ListArchives(ctx, operations.ListArchivesRequest{
        ListArchivesRequest: shared.ListArchivesRequest{
            EventSourceArn: sdk.String("quos"),
            Limit: sdk.Int64(398221),
            NamePrefix: sdk.String("dolorem"),
            NextToken: sdk.String("dolorem"),
            State: shared.ArchiveStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListArchivesXAmzTargetEnumAwsEventsListArchives,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArchivesResponse != nil {
        // handle response
    }
}
```

## ListConnections

Retrieves a list of connections from the account.

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
    res, err := s.SDK.ListConnections(ctx, operations.ListConnectionsRequest{
        ListConnectionsRequest: shared.ListConnectionsRequest{
            ConnectionState: shared.ConnectionStateEnumDeauthorizing.ToPointer(),
            Limit: sdk.Int64(227414),
            NamePrefix: sdk.String("dolorum"),
            NextToken: sdk.String("numquam"),
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListConnectionsXAmzTargetEnumAwsEventsListConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## ListEventBuses

Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.

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
    res, err := s.SDK.ListEventBuses(ctx, operations.ListEventBusesRequest{
        ListEventBusesRequest: shared.ListEventBusesRequest{
            Limit: sdk.Int64(696344),
            NamePrefix: sdk.String("voluptatibus"),
            NextToken: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListEventBusesXAmzTargetEnumAwsEventsListEventBuses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventBusesResponse != nil {
        // handle response
    }
}
```

## ListEventSources

You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.

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
    res, err := s.SDK.ListEventSources(ctx, operations.ListEventSourcesRequest{
        ListEventSourcesRequest: shared.ListEventSourcesRequest{
            Limit: sdk.Int64(679393),
            NamePrefix: sdk.String("iusto"),
            NextToken: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.ListEventSourcesXAmzTargetEnumAwsEventsListEventSources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventSourcesResponse != nil {
        // handle response
    }
}
```

## ListPartnerEventSourceAccounts

An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.

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
    res, err := s.SDK.ListPartnerEventSourceAccounts(ctx, operations.ListPartnerEventSourceAccountsRequest{
        ListPartnerEventSourceAccountsRequest: shared.ListPartnerEventSourceAccountsRequest{
            EventSourceName: "ipsum",
            Limit: sdk.Int64(456015),
            NextToken: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListPartnerEventSourceAccountsXAmzTargetEnumAwsEventsListPartnerEventSourceAccounts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPartnerEventSourceAccountsResponse != nil {
        // handle response
    }
}
```

## ListPartnerEventSources

An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.

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
    res, err := s.SDK.ListPartnerEventSources(ctx, operations.ListPartnerEventSourcesRequest{
        ListPartnerEventSourcesRequest: shared.ListPartnerEventSourcesRequest{
            Limit: sdk.Int64(320017),
            NamePrefix: "saepe",
            NextToken: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.ListPartnerEventSourcesXAmzTargetEnumAwsEventsListPartnerEventSources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPartnerEventSourcesResponse != nil {
        // handle response
    }
}
```

## ListReplays

Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.

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
    res, err := s.SDK.ListReplays(ctx, operations.ListReplaysRequest{
        ListReplaysRequest: shared.ListReplaysRequest{
            EventSourceArn: sdk.String("at"),
            Limit: sdk.Int64(311860),
            NamePrefix: sdk.String("tempora"),
            NextToken: sdk.String("vel"),
            State: shared.ReplayStateEnumCancelled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.ListReplaysXAmzTargetEnumAwsEventsListReplays,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReplaysResponse != nil {
        // handle response
    }
}
```

## ListRuleNamesByTarget

Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.

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
    res, err := s.SDK.ListRuleNamesByTarget(ctx, operations.ListRuleNamesByTargetRequest{
        ListRuleNamesByTargetRequest: shared.ListRuleNamesByTargetRequest{
            EventBusName: sdk.String("ipsum"),
            Limit: sdk.Int64(788740),
            NextToken: sdk.String("tenetur"),
            TargetArn: "amet",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ListRuleNamesByTargetXAmzTargetEnumAwsEventsListRuleNamesByTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuleNamesByTargetResponse != nil {
        // handle response
    }
}
```

## ListRules

<p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

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
    res, err := s.SDK.ListRules(ctx, operations.ListRulesRequest{
        ListRulesRequest: shared.ListRulesRequest{
            EventBusName: sdk.String("nihil"),
            Limit: sdk.Int64(25662),
            NamePrefix: sdk.String("expedita"),
            NextToken: sdk.String("neque"),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.ListRulesXAmzTargetEnumAwsEventsListRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRulesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.

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
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "incidunt",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsEventsListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTargetsByRule

Lists the targets assigned to the specified rule.

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
    res, err := s.SDK.ListTargetsByRule(ctx, operations.ListTargetsByRuleRequest{
        ListTargetsByRuleRequest: shared.ListTargetsByRuleRequest{
            EventBusName: sdk.String("totam"),
            Limit: sdk.Int64(276894),
            NextToken: sdk.String("aspernatur"),
            Rule: "dolores",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.ListTargetsByRuleXAmzTargetEnumAwsEventsListTargetsByRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsByRuleResponse != nil {
        // handle response
    }
}
```

## PutEvents

Sends custom events to Amazon EventBridge so that they can be matched to rules.

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
    res, err := s.SDK.PutEvents(ctx, operations.PutEventsRequest{
        PutEventsRequest: shared.PutEventsRequest{
            Entries: []shared.PutEventsRequestEntry{
                shared.PutEventsRequestEntry{
                    Detail: sdk.String("fugit"),
                    DetailType: sdk.String("magni"),
                    EventBusName: sdk.String("odio"),
                    Resources: []string{
                        "ullam",
                    },
                    Source: sdk.String("nam"),
                    Time: types.MustTimeFromString("2022-11-28T15:41:44.846Z"),
                    TraceHeader: sdk.String("cumque"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.PutEventsXAmzTargetEnumAwsEventsPutEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEventsResponse != nil {
        // handle response
    }
}
```

## PutPartnerEvents

This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.

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
    res, err := s.SDK.PutPartnerEvents(ctx, operations.PutPartnerEventsRequest{
        PutPartnerEventsRequest: shared.PutPartnerEventsRequest{
            Entries: []shared.PutPartnerEventsRequestEntry{
                shared.PutPartnerEventsRequestEntry{
                    Detail: sdk.String("tempore"),
                    DetailType: sdk.String("cupiditate"),
                    Resources: []string{
                        "delectus",
                    },
                    Source: sdk.String("dolorem"),
                    Time: types.MustTimeFromString("2022-09-18T06:37:26.413Z"),
                },
                shared.PutPartnerEventsRequestEntry{
                    Detail: sdk.String("adipisci"),
                    DetailType: sdk.String("dolorum"),
                    Resources: []string{
                        "quae",
                    },
                    Source: sdk.String("aut"),
                    Time: types.MustTimeFromString("2021-02-21T10:38:46.777Z"),
                },
                shared.PutPartnerEventsRequestEntry{
                    Detail: sdk.String("consequatur"),
                    DetailType: sdk.String("est"),
                    Resources: []string{
                        "porro",
                        "doloribus",
                        "ut",
                        "facilis",
                    },
                    Source: sdk.String("cupiditate"),
                    Time: types.MustTimeFromString("2022-12-08T15:45:05.802Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.PutPartnerEventsXAmzTargetEnumAwsEventsPutPartnerEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPartnerEventsResponse != nil {
        // handle response
    }
}
```

## PutPermission

<p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>

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
    res, err := s.SDK.PutPermission(ctx, operations.PutPermissionRequest{
        PutPermissionRequest: shared.PutPermissionRequest{
            Action: sdk.String("quis"),
            Condition: &shared.Condition{
                Key: "ipsum",
                Type: "delectus",
                Value: "voluptate",
            },
            EventBusName: sdk.String("consectetur"),
            Policy: sdk.String("vero"),
            Principal: sdk.String("tenetur"),
            StatementID: sdk.String("dignissimos"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.PutPermissionXAmzTargetEnumAwsEventsPutPermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutRule

<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>

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
    res, err := s.SDK.PutRule(ctx, operations.PutRuleRequest{
        PutRuleRequest: shared.PutRuleRequest{
            Description: sdk.String("ducimus"),
            EventBusName: sdk.String("dolore"),
            EventPattern: sdk.String("quibusdam"),
            Name: "Earl Mosciski DVM",
            RoleArn: sdk.String("exercitationem"),
            ScheduleExpression: sdk.String("nulla"),
            State: shared.RuleStateEnumEnabled.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maiores",
                    Value: "doloribus",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "eligendi",
                },
                shared.Tag{
                    Key: "ducimus",
                    Value: "alias",
                },
                shared.Tag{
                    Key: "officia",
                    Value: "tempora",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ratione"),
        XAmzTarget: operations.PutRuleXAmzTargetEnumAwsEventsPutRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRuleResponse != nil {
        // handle response
    }
}
```

## PutTargets

<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

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
    res, err := s.SDK.PutTargets(ctx, operations.PutTargetsRequest{
        PutTargetsRequest: shared.PutTargetsRequest{
            EventBusName: sdk.String("ex"),
            Rule: "laudantium",
            Targets: []shared.Target{
                shared.Target{
                    Arn: "dolor",
                    BatchParameters: &shared.BatchParameters{
                        ArrayProperties: &shared.BatchArrayProperties{
                            Size: sdk.Int64(980700),
                        },
                        JobDefinition: "quasi",
                        JobName: "ex",
                        RetryStrategy: &shared.BatchRetryStrategy{
                            Attempts: sdk.Int64(862192),
                        },
                    },
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("excepturi"),
                    },
                    EcsParameters: &shared.EcsParameters{
                        CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                            shared.CapacityProviderStrategyItem{
                                Base: sdk.Int64(343605),
                                CapacityProvider: "sapiente",
                                Weight: sdk.Int64(788873),
                            },
                            shared.CapacityProviderStrategyItem{
                                Base: sdk.Int64(906556),
                                CapacityProvider: "ea",
                                Weight: sdk.Int64(774048),
                            },
                            shared.CapacityProviderStrategyItem{
                                Base: sdk.Int64(359271),
                                CapacityProvider: "veniam",
                                Weight: sdk.Int64(399499),
                            },
                            shared.CapacityProviderStrategyItem{
                                Base: sdk.Int64(81101),
                                CapacityProvider: "magnam",
                                Weight: sdk.Int64(407241),
                            },
                        },
                        EnableECSManagedTags: sdk.Bool(false),
                        EnableExecuteCommand: sdk.Bool(false),
                        Group: sdk.String("quo"),
                        LaunchType: shared.LaunchTypeEnumEc2.ToPointer(),
                        NetworkConfiguration: &shared.NetworkConfiguration{
                            AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                                AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                                SecurityGroups: []string{
                                    "minima",
                                },
                                Subnets: []string{
                                    "a",
                                },
                            },
                        },
                        PlacementConstraints: []shared.PlacementConstraint{
                            shared.PlacementConstraint{
                                Expression: sdk.String("aut"),
                                Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                            },
                            shared.PlacementConstraint{
                                Expression: sdk.String("deleniti"),
                                Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                            },
                            shared.PlacementConstraint{
                                Expression: sdk.String("aliquam"),
                                Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                            },
                        },
                        PlacementStrategy: []shared.PlacementStrategy{
                            shared.PlacementStrategy{
                                Field: sdk.String("inventore"),
                                Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                            },
                            shared.PlacementStrategy{
                                Field: sdk.String("et"),
                                Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                            },
                            shared.PlacementStrategy{
                                Field: sdk.String("laborum"),
                                Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                            },
                            shared.PlacementStrategy{
                                Field: sdk.String("velit"),
                                Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                            },
                        },
                        PlatformVersion: sdk.String("autem"),
                        PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                        ReferenceID: sdk.String("nobis"),
                        Tags: []shared.Tag{
                            shared.Tag{
                                Key: "assumenda",
                                Value: "nulla",
                            },
                            shared.Tag{
                                Key: "voluptas",
                                Value: "libero",
                            },
                            shared.Tag{
                                Key: "quasi",
                                Value: "tempora",
                            },
                        },
                        TaskCount: sdk.Int64(256139),
                        TaskDefinitionArn: "explicabo",
                    },
                    HTTPParameters: &shared.HTTPParameters{
                        HeaderParameters: map[string]string{
                            "ipsa": "molestiae",
                            "magnam": "odio",
                            "eius": "esse",
                        },
                        PathParameterValues: []string{
                            "rem",
                            "fuga",
                        },
                        QueryStringParameters: map[string]string{
                            "quidem": "fugiat",
                            "ut": "eum",
                        },
                    },
                    ID: "6d28c10a-b3cd-4ca4-a519-04e523c7e0bc",
                    Input: sdk.String("dignissimos"),
                    InputPath: sdk.String("inventore"),
                    InputTransformer: &shared.InputTransformer{
                        InputPathsMap: map[string]string{
                            "totam": "accusamus",
                            "aliquam": "odio",
                        },
                        InputTemplate: "occaecati",
                    },
                    KinesisParameters: &shared.KinesisParameters{
                        PartitionKeyPath: "commodi",
                    },
                    RedshiftDataParameters: &shared.RedshiftDataParameters{
                        Database: "sapiente",
                        DbUser: sdk.String("dolores"),
                        SecretManagerArn: sdk.String("deserunt"),
                        SQL: "molestiae",
                        StatementName: sdk.String("accusantium"),
                        WithEvent: sdk.Bool(false),
                    },
                    RetryPolicy: &shared.RetryPolicy{
                        MaximumEventAgeInSeconds: sdk.Int64(783648),
                        MaximumRetryAttempts: sdk.Int64(430402),
                    },
                    RoleArn: sdk.String("quas"),
                    RunCommandParameters: &shared.RunCommandParameters{
                        RunCommandTargets: []shared.RunCommandTarget{
                            shared.RunCommandTarget{
                                Key: "consequuntur",
                                Values: []string{
                                    "fugit",
                                    "fuga",
                                    "mollitia",
                                },
                            },
                            shared.RunCommandTarget{
                                Key: "incidunt",
                                Values: []string{
                                    "explicabo",
                                    "minima",
                                    "nisi",
                                },
                            },
                            shared.RunCommandTarget{
                                Key: "fugit",
                                Values: []string{
                                    "consequuntur",
                                    "ratione",
                                    "explicabo",
                                    "saepe",
                                },
                            },
                        },
                    },
                    SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                        PipelineParameterList: []shared.SageMakerPipelineParameter{
                            shared.SageMakerPipelineParameter{
                                Name: "Carl Koch",
                                Value: "veritatis",
                            },
                            shared.SageMakerPipelineParameter{
                                Name: "Traci Reilly",
                                Value: "quasi",
                            },
                            shared.SageMakerPipelineParameter{
                                Name: "Cecil Pollich",
                                Value: "occaecati",
                            },
                        },
                    },
                    SqsParameters: &shared.SqsParameters{
                        MessageGroupID: sdk.String("minima"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.PutTargetsXAmzTargetEnumAwsEventsPutTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutTargetsResponse != nil {
        // handle response
    }
}
```

## RemovePermission

Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.

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
    res, err := s.SDK.RemovePermission(ctx, operations.RemovePermissionRequest{
        RemovePermissionRequest: shared.RemovePermissionRequest{
            EventBusName: sdk.String("consequuntur"),
            RemoveAllPermissions: sdk.Bool(false),
            StatementID: sdk.String("consequatur"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.RemovePermissionXAmzTargetEnumAwsEventsRemovePermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveTargets

<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

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
    res, err := s.SDK.RemoveTargets(ctx, operations.RemoveTargetsRequest{
        RemoveTargetsRequest: shared.RemoveTargetsRequest{
            EventBusName: sdk.String("a"),
            Force: sdk.Bool(false),
            Ids: []string{
                "quas",
                "esse",
                "quasi",
                "a",
            },
            Rule: "error",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.RemoveTargetsXAmzTargetEnumAwsEventsRemoveTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTargetsResponse != nil {
        // handle response
    }
}
```

## StartReplay

Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

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
    res, err := s.SDK.StartReplay(ctx, operations.StartReplayRequest{
        StartReplayRequest: shared.StartReplayRequest{
            Description: sdk.String("veritatis"),
            Destination: shared.ReplayDestination{
                Arn: "consequuntur",
                FilterArns: []string{
                    "similique",
                },
            },
            EventEndTime: types.MustTimeFromString("2022-03-16T03:25:53.830Z"),
            EventSourceArn: "tenetur",
            EventStartTime: types.MustTimeFromString("2022-01-24T02:06:03.033Z"),
            ReplayName: "vel",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.StartReplayXAmzTargetEnumAwsEventsStartReplay,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReplayResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "sapiente",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ullam",
                    Value: "reprehenderit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsEventsTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestEventPattern

<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>

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
    res, err := s.SDK.TestEventPattern(ctx, operations.TestEventPatternRequest{
        TestEventPatternRequest: shared.TestEventPatternRequest{
            Event: "deleniti",
            EventPattern: "itaque",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.TestEventPatternXAmzTargetEnumAwsEventsTestEventPattern,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestEventPatternResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "voluptate",
            TagKeys: []string{
                "minima",
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsEventsUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAPIDestination

Updates an API destination.

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
    res, err := s.SDK.UpdateAPIDestination(ctx, operations.UpdateAPIDestinationRequest{
        UpdateAPIDestinationRequest: shared.UpdateAPIDestinationRequest{
            ConnectionArn: sdk.String("aut"),
            Description: sdk.String("laudantium"),
            HTTPMethod: shared.APIDestinationHTTPMethodEnumOptions.ToPointer(),
            InvocationEndpoint: sdk.String("mollitia"),
            InvocationRateLimitPerSecond: sdk.Int64(68074),
            Name: "Kyle Bartoletti",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateAPIDestinationXAmzTargetEnumAwsEventsUpdateAPIDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAPIDestinationResponse != nil {
        // handle response
    }
}
```

## UpdateArchive

Updates the specified archive.

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
    res, err := s.SDK.UpdateArchive(ctx, operations.UpdateArchiveRequest{
        UpdateArchiveRequest: shared.UpdateArchiveRequest{
            ArchiveName: "maiores",
            Description: sdk.String("natus"),
            EventPattern: sdk.String("velit"),
            RetentionDays: sdk.Int64(974257),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.UpdateArchiveXAmzTargetEnumAwsEventsUpdateArchive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateArchiveResponse != nil {
        // handle response
    }
}
```

## UpdateConnection

Updates settings for a connection.

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
    res, err := s.SDK.UpdateConnection(ctx, operations.UpdateConnectionRequest{
        UpdateConnectionRequest: shared.UpdateConnectionRequest{
            AuthParameters: &shared.UpdateConnectionAuthRequestParameters{
                APIKeyAuthParameters: &shared.UpdateConnectionAPIKeyAuthRequestParameters{
                    APIKeyName: sdk.String("officia"),
                    APIKeyValue: sdk.String("maxime"),
                },
                BasicAuthParameters: &shared.UpdateConnectionBasicAuthRequestParameters{
                    Password: sdk.String("dignissimos"),
                    Username: sdk.String("Lucienne.Yundt"),
                },
                InvocationHTTPParameters: &shared.ConnectionHTTPParameters{
                    BodyParameters: []shared.ConnectionBodyParameter{
                        shared.ConnectionBodyParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("porro"),
                            Value: sdk.String("quod"),
                        },
                        shared.ConnectionBodyParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("labore"),
                            Value: sdk.String("ab"),
                        },
                    },
                    HeaderParameters: []shared.ConnectionHeaderParameter{
                        shared.ConnectionHeaderParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("fuga"),
                            Value: sdk.String("id"),
                        },
                    },
                    QueryStringParameters: []shared.ConnectionQueryStringParameter{
                        shared.ConnectionQueryStringParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("velit"),
                            Value: sdk.String("culpa"),
                        },
                        shared.ConnectionQueryStringParameter{
                            IsValueSecret: sdk.Bool(false),
                            Key: sdk.String("est"),
                            Value: sdk.String("recusandae"),
                        },
                    },
                },
                OAuthParameters: &shared.UpdateConnectionOAuthRequestParameters{
                    AuthorizationEndpoint: sdk.String("totam"),
                    ClientParameters: &shared.UpdateConnectionOAuthClientRequestParameters{
                        ClientID: sdk.String("fugiat"),
                        ClientSecret: sdk.String("vel"),
                    },
                    HTTPMethod: shared.ConnectionOAuthHTTPMethodEnumPost.ToPointer(),
                    OAuthHTTPParameters: &shared.ConnectionHTTPParameters{
                        BodyParameters: []shared.ConnectionBodyParameter{
                            shared.ConnectionBodyParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("vel"),
                                Value: sdk.String("labore"),
                            },
                            shared.ConnectionBodyParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("possimus"),
                                Value: sdk.String("facilis"),
                            },
                            shared.ConnectionBodyParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("cum"),
                                Value: sdk.String("commodi"),
                            },
                        },
                        HeaderParameters: []shared.ConnectionHeaderParameter{
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("corporis"),
                                Value: sdk.String("reiciendis"),
                            },
                            shared.ConnectionHeaderParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("assumenda"),
                                Value: sdk.String("nemo"),
                            },
                        },
                        QueryStringParameters: []shared.ConnectionQueryStringParameter{
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("aliquid"),
                                Value: sdk.String("aperiam"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("cum"),
                                Value: sdk.String("consectetur"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("in"),
                                Value: sdk.String("exercitationem"),
                            },
                            shared.ConnectionQueryStringParameter{
                                IsValueSecret: sdk.Bool(false),
                                Key: sdk.String("earum"),
                                Value: sdk.String("facere"),
                            },
                        },
                    },
                },
            },
            AuthorizationType: shared.ConnectionAuthorizationTypeEnumBasic.ToPointer(),
            Description: sdk.String("doloribus"),
            Name: "Lela Predovic",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.UpdateConnectionXAmzTargetEnumAwsEventsUpdateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectionResponse != nil {
        // handle response
    }
}
```
