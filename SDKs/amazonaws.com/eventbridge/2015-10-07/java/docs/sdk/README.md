# SDK

## Overview

<p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your resources change state, they automatically send events to an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:</p> <ul> <li> <p>Automatically invoke an Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.</p> </li> <li> <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.</p> </li> <li> <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.</p> </li> </ul> <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/events/>
### Available Operations

* [activateEventSource](#activateeventsource) - Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
* [cancelReplay](#cancelreplay) - Cancels the specified replay.
* [createApiDestination](#createapidestination) - Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
* [createArchive](#createarchive) - Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
* [createConnection](#createconnection) - Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
* [createEndpoint](#createendpoint) - Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.
* [createEventBus](#createeventbus) - Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
* [createPartnerEventSource](#createpartnereventsource) - <p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>
* [deactivateEventSource](#deactivateeventsource) - <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
* [deauthorizeConnection](#deauthorizeconnection) - Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.
* [deleteApiDestination](#deleteapidestination) - Deletes the specified API destination.
* [deleteArchive](#deletearchive) - Deletes the specified archive.
* [deleteConnection](#deleteconnection) - Deletes a connection.
* [deleteEndpoint](#deleteendpoint) - Delete an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.
* [deleteEventBus](#deleteeventbus) - Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
* [deletePartnerEventSource](#deletepartnereventsource) - <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>
* [deleteRule](#deleterule) - <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
* [describeApiDestination](#describeapidestination) - Retrieves details about an API destination.
* [describeArchive](#describearchive) - Retrieves details about an archive.
* [describeConnection](#describeconnection) - Retrieves details about a connection.
* [describeEndpoint](#describeendpoint) - Get the information about an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..
* [describeEventBus](#describeeventbus) - <p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
* [describeEventSource](#describeeventsource) - This operation lists details about a partner event source that is shared with your account.
* [describePartnerEventSource](#describepartnereventsource) - An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.
* [describeReplay](#describereplay) - Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
* [describeRule](#describerule) - <p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
* [disableRule](#disablerule) - <p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
* [enableRule](#enablerule) - <p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
* [listApiDestinations](#listapidestinations) - Retrieves a list of API destination in the account in the current Region.
* [listArchives](#listarchives) - Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.
* [listConnections](#listconnections) - Retrieves a list of connections from the account.
* [listEndpoints](#listendpoints) - List the global endpoints associated with this account. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..
* [listEventBuses](#listeventbuses) - Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
* [listEventSources](#listeventsources) - You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.
* [listPartnerEventSourceAccounts](#listpartnereventsourceaccounts) - An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
* [listPartnerEventSources](#listpartnereventsources) - An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.
* [listReplays](#listreplays) - Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.
* [listRuleNamesByTarget](#listrulenamesbytarget) - Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
* [listRules](#listrules) - <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
* [listTargetsByRule](#listtargetsbyrule) - Lists the targets assigned to the specified rule.
* [putEvents](#putevents) - <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p> <note> <p>PutEvents will only process nested JSON up to 1100 levels deep.</p> </note>
* [putPartnerEvents](#putpartnerevents) - This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
* [putPermission](#putpermission) - <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
* [putRule](#putrule) - <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
* [putTargets](#puttargets) - <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <note> <p>Each rule can have up to five (5) targets associated with it at one time.</p> </note> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-gateway-target.html">API Gateway</a> </p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>EC2 Image Builder</p> </li> <li> <p>EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>EC2 <code>StopInstances</code> API call</p> </li> <li> <p>EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>ECS task</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cross-account.html">Event bus in a different account or Region</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-bus-to-bus.html">Event bus in the same account and Region</a> </p> </li> <li> <p>Firehose delivery stream</p> </li> <li> <p>Glue workflow</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-creation.html#incident-tracking-auto-eventbridge">Incident Manager response plan</a> </p> </li> <li> <p>Inspector assessment template</p> </li> <li> <p>Kinesis stream</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift cluster</p> </li> <li> <p>Redshift Serverless workgroup</p> </li> <li> <p>SageMaker Pipeline</p> </li> <li> <p>SNS topic</p> </li> <li> <p>SQS queue</p> </li> <li> <p>Step Functions state machine</p> </li> <li> <p>Systems Manager Automation</p> </li> <li> <p>Systems Manager OpsItem</p> </li> <li> <p>Systems Manager Run Command</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [removePermission](#removepermission) - Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.
* [removeTargets](#removetargets) - <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <note> <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p> </note> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [startReplay](#startreplay) - Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [testEventPattern](#testeventpattern) - <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.
* [updateApiDestination](#updateapidestination) - Updates an API destination.
* [updateArchive](#updatearchive) - Updates the specified archive.
* [updateConnection](#updateconnection) - Updates settings for a connection.
* [updateEndpoint](#updateendpoint) - Update an existing endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

## activateEventSource

Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateEventSourceRequest;
import org.openapis.openapi.models.operations.ActivateEventSourceResponse;
import org.openapis.openapi.models.operations.ActivateEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivateEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateEventSourceRequest req = new ActivateEventSourceRequest(                new ActivateEventSourceRequest("deserunt");, ActivateEventSourceXAmzTargetEnum.AWS_EVENTS_ACTIVATE_EVENT_SOURCE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            ActivateEventSourceResponse res = sdk.sdk.activateEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelReplay

Cancels the specified replay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelReplayRequest;
import org.openapis.openapi.models.operations.CancelReplayResponse;
import org.openapis.openapi.models.operations.CancelReplayXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelReplayRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelReplayRequest req = new CancelReplayRequest(                new CancelReplayRequest("molestiae");, CancelReplayXAmzTargetEnum.AWS_EVENTS_CANCEL_REPLAY) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CancelReplayResponse res = sdk.sdk.cancelReplay(req);

            if (res.cancelReplayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiDestination

Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiDestinationRequest;
import org.openapis.openapi.models.operations.CreateApiDestinationResponse;
import org.openapis.openapi.models.operations.CreateApiDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApiDestinationHttpMethodEnum;
import org.openapis.openapi.models.shared.CreateApiDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiDestinationRequest req = new CreateApiDestinationRequest(                new CreateApiDestinationRequest("ab", ApiDestinationHttpMethodEnum.HEAD, "veritatis", "deserunt") {{
                                description = "perferendis";
                                invocationRateLimitPerSecond = 368241L;
                            }};, CreateApiDestinationXAmzTargetEnum.AWS_EVENTS_CREATE_API_DESTINATION) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateApiDestinationResponse res = sdk.sdk.createApiDestination(req);

            if (res.createApiDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createArchive

Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArchiveRequest;
import org.openapis.openapi.models.operations.CreateArchiveResponse;
import org.openapis.openapi.models.operations.CreateArchiveXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateArchiveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateArchiveRequest req = new CreateArchiveRequest(                new CreateArchiveRequest("quod", "quod") {{
                                description = "esse";
                                eventPattern = "totam";
                                retentionDays = 780529L;
                            }};, CreateArchiveXAmzTargetEnum.AWS_EVENTS_CREATE_ARCHIVE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateArchiveResponse res = sdk.sdk.createArchive(req);

            if (res.createArchiveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnection

Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionAuthorizationTypeEnum;
import org.openapis.openapi.models.shared.ConnectionBodyParameter;
import org.openapis.openapi.models.shared.ConnectionHeaderParameter;
import org.openapis.openapi.models.shared.ConnectionHttpParameters;
import org.openapis.openapi.models.shared.ConnectionOAuthHttpMethodEnum;
import org.openapis.openapi.models.shared.ConnectionQueryStringParameter;
import org.openapis.openapi.models.shared.CreateConnectionApiKeyAuthRequestParameters;
import org.openapis.openapi.models.shared.CreateConnectionAuthRequestParameters;
import org.openapis.openapi.models.shared.CreateConnectionBasicAuthRequestParameters;
import org.openapis.openapi.models.shared.CreateConnectionOAuthClientRequestParameters;
import org.openapis.openapi.models.shared.CreateConnectionOAuthRequestParameters;
import org.openapis.openapi.models.shared.CreateConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionRequest req = new CreateConnectionRequest(                new CreateConnectionRequest(                new CreateConnectionAuthRequestParameters() {{
                                                apiKeyAuthParameters = new CreateConnectionApiKeyAuthRequestParameters("optio", "totam");;
                                                basicAuthParameters = new CreateConnectionBasicAuthRequestParameters("beatae", "commodi");;
                                                invocationHttpParameters = new ConnectionHttpParameters() {{
                                                    bodyParameters = new org.openapis.openapi.models.shared.ConnectionBodyParameter[]{{
                                                        add(new ConnectionBodyParameter() {{
                                                            isValueSecret = false;
                                                            key = "modi";
                                                            value = "qui";
                                                        }}),
                                                        add(new ConnectionBodyParameter() {{
                                                            isValueSecret = false;
                                                            key = "impedit";
                                                            value = "cum";
                                                        }}),
                                                    }};
                                                    headerParameters = new org.openapis.openapi.models.shared.ConnectionHeaderParameter[]{{
                                                        add(new ConnectionHeaderParameter() {{
                                                            isValueSecret = false;
                                                            key = "ipsum";
                                                            value = "excepturi";
                                                        }}),
                                                        add(new ConnectionHeaderParameter() {{
                                                            isValueSecret = false;
                                                            key = "aspernatur";
                                                            value = "perferendis";
                                                        }}),
                                                    }};
                                                    queryStringParameters = new org.openapis.openapi.models.shared.ConnectionQueryStringParameter[]{{
                                                        add(new ConnectionQueryStringParameter() {{
                                                            isValueSecret = false;
                                                            key = "natus";
                                                            value = "sed";
                                                        }}),
                                                        add(new ConnectionQueryStringParameter() {{
                                                            isValueSecret = false;
                                                            key = "iste";
                                                            value = "dolor";
                                                        }}),
                                                    }};
                                                }};;
                                                oAuthParameters = new CreateConnectionOAuthRequestParameters("natus",                 new CreateConnectionOAuthClientRequestParameters("laboriosam", "hic");, ConnectionOAuthHttpMethodEnum.PUT) {{
                                                    oAuthHttpParameters = new ConnectionHttpParameters() {{
                                                        bodyParameters = new org.openapis.openapi.models.shared.ConnectionBodyParameter[]{{
                                                            add(new ConnectionBodyParameter() {{
                                                                isValueSecret = false;
                                                                key = "in";
                                                                value = "corporis";
                                                            }}),
                                                            add(new ConnectionBodyParameter() {{
                                                                isValueSecret = false;
                                                                key = "iste";
                                                                value = "iure";
                                                            }}),
                                                            add(new ConnectionBodyParameter() {{
                                                                isValueSecret = false;
                                                                key = "saepe";
                                                                value = "quidem";
                                                            }}),
                                                        }};
                                                        headerParameters = new org.openapis.openapi.models.shared.ConnectionHeaderParameter[]{{
                                                            add(new ConnectionHeaderParameter() {{
                                                                isValueSecret = false;
                                                                key = "ipsa";
                                                                value = "reiciendis";
                                                            }}),
                                                        }};
                                                        queryStringParameters = new org.openapis.openapi.models.shared.ConnectionQueryStringParameter[]{{
                                                            add(new ConnectionQueryStringParameter() {{
                                                                isValueSecret = false;
                                                                key = "mollitia";
                                                                value = "laborum";
                                                            }}),
                                                            add(new ConnectionQueryStringParameter() {{
                                                                isValueSecret = false;
                                                                key = "dolores";
                                                                value = "dolorem";
                                                            }}),
                                                            add(new ConnectionQueryStringParameter() {{
                                                                isValueSecret = false;
                                                                key = "corporis";
                                                                value = "explicabo";
                                                            }}),
                                                        }};
                                                    }};;
                                                }};;
                                            }};, ConnectionAuthorizationTypeEnum.API_KEY, "enim") {{
                                description = "omnis";
                            }};, CreateConnectionXAmzTargetEnum.AWS_EVENTS_CREATE_CONNECTION) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            CreateConnectionResponse res = sdk.sdk.createConnection(req);

            if (res.createConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndpoint

Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndpointRequest;
import org.openapis.openapi.models.operations.CreateEndpointResponse;
import org.openapis.openapi.models.operations.CreateEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEndpointRequest;
import org.openapis.openapi.models.shared.EndpointEventBus;
import org.openapis.openapi.models.shared.FailoverConfig;
import org.openapis.openapi.models.shared.Primary;
import org.openapis.openapi.models.shared.ReplicationConfig;
import org.openapis.openapi.models.shared.ReplicationStateEnum;
import org.openapis.openapi.models.shared.RoutingConfig;
import org.openapis.openapi.models.shared.Secondary;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEndpointRequest req = new CreateEndpointRequest(                new CreateEndpointRequest(                new org.openapis.openapi.models.shared.EndpointEventBus[]{{
                                                add(new EndpointEventBus("dolorem") {{
                                                    eventBusArn = "mollitia";
                                                }}),
                                            }}, "culpa",                 new RoutingConfig(                new FailoverConfig(                new Primary("consequuntur");,                 new Secondary("repellat");););) {{
                                description = "mollitia";
                                replicationConfig = new ReplicationConfig() {{
                                    state = ReplicationStateEnum.DISABLED;
                                }};;
                                roleArn = "numquam";
                            }};, CreateEndpointXAmzTargetEnum.AWS_EVENTS_CREATE_ENDPOINT) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
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

## createEventBus

Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventBusRequest;
import org.openapis.openapi.models.operations.CreateEventBusResponse;
import org.openapis.openapi.models.operations.CreateEventBusXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEventBusRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventBusRequest req = new CreateEventBusRequest(                new CreateEventBusRequest("laborum") {{
                                eventSourceName = "animi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sequi", "tenetur") {{
                                        key = "odit";
                                        value = "quo";
                                    }}),
                                    add(new Tag("possimus", "aut") {{
                                        key = "ipsam";
                                        value = "id";
                                    }}),
                                }};
                            }};, CreateEventBusXAmzTargetEnum.AWS_EVENTS_CREATE_EVENT_BUS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            CreateEventBusResponse res = sdk.sdk.createEventBus(req);

            if (res.createEventBusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPartnerEventSource

<p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePartnerEventSourceRequest;
import org.openapis.openapi.models.operations.CreatePartnerEventSourceResponse;
import org.openapis.openapi.models.operations.CreatePartnerEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePartnerEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePartnerEventSourceRequest req = new CreatePartnerEventSourceRequest(                new CreatePartnerEventSourceRequest("nihil", "praesentium");, CreatePartnerEventSourceXAmzTargetEnum.AWS_EVENTS_CREATE_PARTNER_EVENT_SOURCE) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            CreatePartnerEventSourceResponse res = sdk.sdk.createPartnerEventSource(req);

            if (res.createPartnerEventSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateEventSource

<p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateEventSourceRequest;
import org.openapis.openapi.models.operations.DeactivateEventSourceResponse;
import org.openapis.openapi.models.operations.DeactivateEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeactivateEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateEventSourceRequest req = new DeactivateEventSourceRequest(                new DeactivateEventSourceRequest("ut");, DeactivateEventSourceXAmzTargetEnum.AWS_EVENTS_DEACTIVATE_EVENT_SOURCE) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            DeactivateEventSourceResponse res = sdk.sdk.deactivateEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deauthorizeConnection

Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeauthorizeConnectionRequest;
import org.openapis.openapi.models.operations.DeauthorizeConnectionResponse;
import org.openapis.openapi.models.operations.DeauthorizeConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeauthorizeConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeauthorizeConnectionRequest req = new DeauthorizeConnectionRequest(                new DeauthorizeConnectionRequest("accusamus");, DeauthorizeConnectionXAmzTargetEnum.AWS_EVENTS_DEAUTHORIZE_CONNECTION) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeauthorizeConnectionResponse res = sdk.sdk.deauthorizeConnection(req);

            if (res.deauthorizeConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiDestination

Deletes the specified API destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiDestinationRequest;
import org.openapis.openapi.models.operations.DeleteApiDestinationResponse;
import org.openapis.openapi.models.operations.DeleteApiDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApiDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiDestinationRequest req = new DeleteApiDestinationRequest(                new DeleteApiDestinationRequest("modi");, DeleteApiDestinationXAmzTargetEnum.AWS_EVENTS_DELETE_API_DESTINATION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteApiDestinationResponse res = sdk.sdk.deleteApiDestination(req);

            if (res.deleteApiDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArchive

Deletes the specified archive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArchiveRequest;
import org.openapis.openapi.models.operations.DeleteArchiveResponse;
import org.openapis.openapi.models.operations.DeleteArchiveXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteArchiveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteArchiveRequest req = new DeleteArchiveRequest(                new DeleteArchiveRequest("incidunt");, DeleteArchiveXAmzTargetEnum.AWS_EVENTS_DELETE_ARCHIVE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            DeleteArchiveResponse res = sdk.sdk.deleteArchive(req);

            if (res.deleteArchiveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnection

Deletes a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest(                new DeleteConnectionRequest("labore");, DeleteConnectionXAmzTargetEnum.AWS_EVENTS_DELETE_CONNECTION) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
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

Delete an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndpointRequest;
import org.openapis.openapi.models.operations.DeleteEndpointResponse;
import org.openapis.openapi.models.operations.DeleteEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEndpointRequest req = new DeleteEndpointRequest(                new DeleteEndpointRequest("ipsam");, DeleteEndpointXAmzTargetEnum.AWS_EVENTS_DELETE_ENDPOINT) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
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

## deleteEventBus

Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventBusRequest;
import org.openapis.openapi.models.operations.DeleteEventBusResponse;
import org.openapis.openapi.models.operations.DeleteEventBusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEventBusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventBusRequest req = new DeleteEventBusRequest(                new DeleteEventBusRequest("delectus");, DeleteEventBusXAmzTargetEnum.AWS_EVENTS_DELETE_EVENT_BUS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteEventBusResponse res = sdk.sdk.deleteEventBus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePartnerEventSource

<p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePartnerEventSourceRequest;
import org.openapis.openapi.models.operations.DeletePartnerEventSourceResponse;
import org.openapis.openapi.models.operations.DeletePartnerEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePartnerEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePartnerEventSourceRequest req = new DeletePartnerEventSourceRequest(                new DeletePartnerEventSourceRequest("officia", "dolor");, DeletePartnerEventSourceXAmzTargetEnum.AWS_EVENTS_DELETE_PARTNER_EVENT_SOURCE) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            DeletePartnerEventSourceResponse res = sdk.sdk.deletePartnerEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRule

<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleRequest;
import org.openapis.openapi.models.operations.DeleteRuleResponse;
import org.openapis.openapi.models.operations.DeleteRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleRequest req = new DeleteRuleRequest(                new DeleteRuleRequest("dicta") {{
                                eventBusName = "magnam";
                                force = false;
                            }};, DeleteRuleXAmzTargetEnum.AWS_EVENTS_DELETE_RULE) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            DeleteRuleResponse res = sdk.sdk.deleteRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApiDestination

Retrieves details about an API destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApiDestinationRequest;
import org.openapis.openapi.models.operations.DescribeApiDestinationResponse;
import org.openapis.openapi.models.operations.DescribeApiDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApiDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApiDestinationRequest req = new DescribeApiDestinationRequest(                new DescribeApiDestinationRequest("enim");, DescribeApiDestinationXAmzTargetEnum.AWS_EVENTS_DESCRIBE_API_DESTINATION) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
            }};            

            DescribeApiDestinationResponse res = sdk.sdk.describeApiDestination(req);

            if (res.describeApiDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeArchive

Retrieves details about an archive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeArchiveRequest;
import org.openapis.openapi.models.operations.DescribeArchiveResponse;
import org.openapis.openapi.models.operations.DescribeArchiveXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeArchiveRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeArchiveRequest req = new DescribeArchiveRequest(                new DescribeArchiveRequest("sapiente");, DescribeArchiveXAmzTargetEnum.AWS_EVENTS_DESCRIBE_ARCHIVE) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            DescribeArchiveResponse res = sdk.sdk.describeArchive(req);

            if (res.describeArchiveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnection

Retrieves details about a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionRequest;
import org.openapis.openapi.models.operations.DescribeConnectionResponse;
import org.openapis.openapi.models.operations.DescribeConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionRequest req = new DescribeConnectionRequest(                new DescribeConnectionRequest("nihil");, DescribeConnectionXAmzTargetEnum.AWS_EVENTS_DESCRIBE_CONNECTION) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            DescribeConnectionResponse res = sdk.sdk.describeConnection(req);

            if (res.describeConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpoint

Get the information about an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointRequest;
import org.openapis.openapi.models.operations.DescribeEndpointResponse;
import org.openapis.openapi.models.operations.DescribeEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointRequest req = new DescribeEndpointRequest(                new DescribeEndpointRequest("eum") {{
                                homeRegion = "vero";
                            }};, DescribeEndpointXAmzTargetEnum.AWS_EVENTS_DESCRIBE_ENDPOINT) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeEndpointResponse res = sdk.sdk.describeEndpoint(req);

            if (res.describeEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventBus

<p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventBusRequest;
import org.openapis.openapi.models.operations.DescribeEventBusResponse;
import org.openapis.openapi.models.operations.DescribeEventBusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventBusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventBusRequest req = new DescribeEventBusRequest(                new DescribeEventBusRequest() {{
                                name = "Kenneth O'Hara";
                            }};, DescribeEventBusXAmzTargetEnum.AWS_EVENTS_DESCRIBE_EVENT_BUS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeEventBusResponse res = sdk.sdk.describeEventBus(req);

            if (res.describeEventBusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventSource

This operation lists details about a partner event source that is shared with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventSourceRequest;
import org.openapis.openapi.models.operations.DescribeEventSourceResponse;
import org.openapis.openapi.models.operations.DescribeEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventSourceRequest req = new DescribeEventSourceRequest(                new DescribeEventSourceRequest("doloribus");, DescribeEventSourceXAmzTargetEnum.AWS_EVENTS_DESCRIBE_EVENT_SOURCE) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeEventSourceResponse res = sdk.sdk.describeEventSource(req);

            if (res.describeEventSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePartnerEventSource

An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePartnerEventSourceRequest;
import org.openapis.openapi.models.operations.DescribePartnerEventSourceResponse;
import org.openapis.openapi.models.operations.DescribePartnerEventSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePartnerEventSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePartnerEventSourceRequest req = new DescribePartnerEventSourceRequest(                new DescribePartnerEventSourceRequest("repudiandae");, DescribePartnerEventSourceXAmzTargetEnum.AWS_EVENTS_DESCRIBE_PARTNER_EVENT_SOURCE) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribePartnerEventSourceResponse res = sdk.sdk.describePartnerEventSource(req);

            if (res.describePartnerEventSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplay

Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplayRequest;
import org.openapis.openapi.models.operations.DescribeReplayResponse;
import org.openapis.openapi.models.operations.DescribeReplayXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReplayRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplayRequest req = new DescribeReplayRequest(                new DescribeReplayRequest("accusantium");, DescribeReplayXAmzTargetEnum.AWS_EVENTS_DESCRIBE_REPLAY) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            DescribeReplayResponse res = sdk.sdk.describeReplay(req);

            if (res.describeReplayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRule

<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRuleRequest;
import org.openapis.openapi.models.operations.DescribeRuleResponse;
import org.openapis.openapi.models.operations.DescribeRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRuleRequest req = new DescribeRuleRequest(                new DescribeRuleRequest("maxime") {{
                                eventBusName = "ea";
                            }};, DescribeRuleXAmzTargetEnum.AWS_EVENTS_DESCRIBE_RULE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "odit";
                xAmzCredential = "ea";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ab";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeRuleResponse res = sdk.sdk.describeRule(req);

            if (res.describeRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableRule

<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableRuleRequest;
import org.openapis.openapi.models.operations.DisableRuleResponse;
import org.openapis.openapi.models.operations.DisableRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableRuleRequest req = new DisableRuleRequest(                new DisableRuleRequest("voluptate") {{
                                eventBusName = "autem";
                            }};, DisableRuleXAmzTargetEnum.AWS_EVENTS_DISABLE_RULE) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
            }};            

            DisableRuleResponse res = sdk.sdk.disableRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableRule

<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableRuleRequest;
import org.openapis.openapi.models.operations.EnableRuleResponse;
import org.openapis.openapi.models.operations.EnableRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableRuleRequest req = new EnableRuleRequest(                new EnableRuleRequest("aut") {{
                                eventBusName = "cumque";
                            }};, EnableRuleXAmzTargetEnum.AWS_EVENTS_ENABLE_RULE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "hic";
                xAmzCredential = "libero";
                xAmzDate = "nobis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "totam";
            }};            

            EnableRuleResponse res = sdk.sdk.enableRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApiDestinations

Retrieves a list of API destination in the account in the current Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApiDestinationsRequest;
import org.openapis.openapi.models.operations.ListApiDestinationsResponse;
import org.openapis.openapi.models.operations.ListApiDestinationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApiDestinationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApiDestinationsRequest req = new ListApiDestinationsRequest(                new ListApiDestinationsRequest() {{
                                connectionArn = "eaque";
                                limit = 338985L;
                                namePrefix = "nesciunt";
                                nextToken = "eos";
                            }};, ListApiDestinationsXAmzTargetEnum.AWS_EVENTS_LIST_API_DESTINATIONS) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            ListApiDestinationsResponse res = sdk.sdk.listApiDestinations(req);

            if (res.listApiDestinationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArchives

Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArchivesRequest;
import org.openapis.openapi.models.operations.ListArchivesResponse;
import org.openapis.openapi.models.operations.ListArchivesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArchiveStateEnum;
import org.openapis.openapi.models.shared.ListArchivesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListArchivesRequest req = new ListArchivesRequest(                new ListArchivesRequest() {{
                                eventSourceArn = "recusandae";
                                limit = 608253L;
                                namePrefix = "facilis";
                                nextToken = "perspiciatis";
                                state = ArchiveStateEnum.ENABLED;
                            }};, ListArchivesXAmzTargetEnum.AWS_EVENTS_LIST_ARCHIVES) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
            }};            

            ListArchivesResponse res = sdk.sdk.listArchives(req);

            if (res.listArchivesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnections

Retrieves a list of connections from the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionsRequest;
import org.openapis.openapi.models.operations.ListConnectionsResponse;
import org.openapis.openapi.models.operations.ListConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionStateEnum;
import org.openapis.openapi.models.shared.ListConnectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectionsRequest req = new ListConnectionsRequest(                new ListConnectionsRequest() {{
                                connectionState = ConnectionStateEnum.DEAUTHORIZING;
                                limit = 934214L;
                                namePrefix = "modi";
                                nextToken = "iste";
                            }};, ListConnectionsXAmzTargetEnum.AWS_EVENTS_LIST_CONNECTIONS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            ListConnectionsResponse res = sdk.sdk.listConnections(req);

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndpoints

List the global endpoints associated with this account. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndpointsRequest;
import org.openapis.openapi.models.operations.ListEndpointsResponse;
import org.openapis.openapi.models.operations.ListEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEndpointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEndpointsRequest req = new ListEndpointsRequest(                new ListEndpointsRequest() {{
                                homeRegion = "quos";
                                maxResults = 398221L;
                                namePrefix = "dolorem";
                                nextToken = "dolorem";
                            }};, ListEndpointsXAmzTargetEnum.AWS_EVENTS_LIST_ENDPOINTS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListEndpointsResponse res = sdk.sdk.listEndpoints(req);

            if (res.listEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventBuses

Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventBusesRequest;
import org.openapis.openapi.models.operations.ListEventBusesResponse;
import org.openapis.openapi.models.operations.ListEventBusesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEventBusesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventBusesRequest req = new ListEventBusesRequest(                new ListEventBusesRequest() {{
                                limit = 970237L;
                                namePrefix = "amet";
                                nextToken = "dolorum";
                            }};, ListEventBusesXAmzTargetEnum.AWS_EVENTS_LIST_EVENT_BUSES) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            ListEventBusesResponse res = sdk.sdk.listEventBuses(req);

            if (res.listEventBusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventSources

You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventSourcesRequest;
import org.openapis.openapi.models.operations.ListEventSourcesResponse;
import org.openapis.openapi.models.operations.ListEventSourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEventSourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventSourcesRequest req = new ListEventSourcesRequest(                new ListEventSourcesRequest() {{
                                limit = 696344L;
                                namePrefix = "voluptatibus";
                                nextToken = "voluptas";
                            }};, ListEventSourcesXAmzTargetEnum.AWS_EVENTS_LIST_EVENT_SOURCES) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            ListEventSourcesResponse res = sdk.sdk.listEventSources(req);

            if (res.listEventSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPartnerEventSourceAccounts

An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPartnerEventSourceAccountsRequest;
import org.openapis.openapi.models.operations.ListPartnerEventSourceAccountsResponse;
import org.openapis.openapi.models.operations.ListPartnerEventSourceAccountsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPartnerEventSourceAccountsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPartnerEventSourceAccountsRequest req = new ListPartnerEventSourceAccountsRequest(                new ListPartnerEventSourceAccountsRequest("iusto") {{
                                limit = 453697L;
                                nextToken = "dolorum";
                            }};, ListPartnerEventSourceAccountsXAmzTargetEnum.AWS_EVENTS_LIST_PARTNER_EVENT_SOURCE_ACCOUNTS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListPartnerEventSourceAccountsResponse res = sdk.sdk.listPartnerEventSourceAccounts(req);

            if (res.listPartnerEventSourceAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPartnerEventSources

An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPartnerEventSourcesRequest;
import org.openapis.openapi.models.operations.ListPartnerEventSourcesResponse;
import org.openapis.openapi.models.operations.ListPartnerEventSourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPartnerEventSourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPartnerEventSourcesRequest req = new ListPartnerEventSourcesRequest(                new ListPartnerEventSourcesRequest("id") {{
                                limit = 906418L;
                                nextToken = "eius";
                            }};, ListPartnerEventSourcesXAmzTargetEnum.AWS_EVENTS_LIST_PARTNER_EVENT_SOURCES) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            ListPartnerEventSourcesResponse res = sdk.sdk.listPartnerEventSources(req);

            if (res.listPartnerEventSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReplays

Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReplaysRequest;
import org.openapis.openapi.models.operations.ListReplaysResponse;
import org.openapis.openapi.models.operations.ListReplaysXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReplaysRequest;
import org.openapis.openapi.models.shared.ReplayStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReplaysRequest req = new ListReplaysRequest(                new ListReplaysRequest() {{
                                eventSourceArn = "deserunt";
                                limit = 588317L;
                                namePrefix = "minima";
                                nextToken = "repellendus";
                                state = ReplayStateEnum.COMPLETED;
                            }};, ListReplaysXAmzTargetEnum.AWS_EVENTS_LIST_REPLAYS) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            ListReplaysResponse res = sdk.sdk.listReplays(req);

            if (res.listReplaysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuleNamesByTarget

Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRuleNamesByTargetRequest;
import org.openapis.openapi.models.operations.ListRuleNamesByTargetResponse;
import org.openapis.openapi.models.operations.ListRuleNamesByTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRuleNamesByTargetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRuleNamesByTargetRequest req = new ListRuleNamesByTargetRequest(                new ListRuleNamesByTargetRequest("qui") {{
                                eventBusName = "dolorum";
                                limit = 952792L;
                                nextToken = "esse";
                            }};, ListRuleNamesByTargetXAmzTargetEnum.AWS_EVENTS_LIST_RULE_NAMES_BY_TARGET) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
            }};            

            ListRuleNamesByTargetResponse res = sdk.sdk.listRuleNamesByTarget(req);

            if (res.listRuleNamesByTargetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRules

<p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRulesRequest;
import org.openapis.openapi.models.operations.ListRulesResponse;
import org.openapis.openapi.models.operations.ListRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRulesRequest req = new ListRulesRequest(                new ListRulesRequest() {{
                                eventBusName = "numquam";
                                limit = 313692L;
                                namePrefix = "dolorem";
                                nextToken = "sapiente";
                            }};, ListRulesXAmzTargetEnum.AWS_EVENTS_LIST_RULES) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            ListRulesResponse res = sdk.sdk.listRules(req);

            if (res.listRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("voluptas");, ListTagsForResourceXAmzTargetEnum.AWS_EVENTS_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
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

## listTargetsByRule

Lists the targets assigned to the specified rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetsByRuleRequest;
import org.openapis.openapi.models.operations.ListTargetsByRuleResponse;
import org.openapis.openapi.models.operations.ListTargetsByRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTargetsByRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetsByRuleRequest req = new ListTargetsByRuleRequest(                new ListTargetsByRuleRequest("soluta") {{
                                eventBusName = "dicta";
                                limit = 674848L;
                                nextToken = "totam";
                            }};, ListTargetsByRuleXAmzTargetEnum.AWS_EVENTS_LIST_TARGETS_BY_RULE) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            ListTargetsByRuleResponse res = sdk.sdk.listTargetsByRule(req);

            if (res.listTargetsByRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEvents

<p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p> <note> <p>PutEvents will only process nested JSON up to 1100 levels deep.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEventsRequest;
import org.openapis.openapi.models.operations.PutEventsResponse;
import org.openapis.openapi.models.operations.PutEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutEventsRequest;
import org.openapis.openapi.models.shared.PutEventsRequestEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEventsRequest req = new PutEventsRequest(                new PutEventsRequest(                new org.openapis.openapi.models.shared.PutEventsRequestEntry[]{{
                                                add(new PutEventsRequestEntry() {{
                                                    detail = "qui";
                                                    detailType = "neque";
                                                    eventBusName = "fugit";
                                                    resources = new String[]{{
                                                        add("odio"),
                                                    }};
                                                    source = "sunt";
                                                    time = OffsetDateTime.parse("2022-04-12T10:34:24.004Z");
                                                    traceHeader = "hic";
                                                }}),
                                                add(new PutEventsRequestEntry() {{
                                                    detail = "voluptatem";
                                                    detailType = "cumque";
                                                    eventBusName = "soluta";
                                                    resources = new String[]{{
                                                        add("et"),
                                                        add("saepe"),
                                                        add("ipsum"),
                                                    }};
                                                    source = "veritatis";
                                                    time = OffsetDateTime.parse("2021-11-23T21:35:15.992Z");
                                                    traceHeader = "tempore";
                                                }}),
                                                add(new PutEventsRequestEntry() {{
                                                    detail = "cupiditate";
                                                    detailType = "aperiam";
                                                    eventBusName = "delectus";
                                                    resources = new String[]{{
                                                        add("dolore"),
                                                    }};
                                                    source = "labore";
                                                    time = OffsetDateTime.parse("2022-04-28T19:10:24.037Z");
                                                    traceHeader = "architecto";
                                                }}),
                                                add(new PutEventsRequestEntry() {{
                                                    detail = "quae";
                                                    detailType = "aut";
                                                    eventBusName = "quas";
                                                    resources = new String[]{{
                                                        add("consequatur"),
                                                        add("est"),
                                                        add("repellendus"),
                                                        add("porro"),
                                                    }};
                                                    source = "doloribus";
                                                    time = OffsetDateTime.parse("2022-04-19T05:23:08.152Z");
                                                    traceHeader = "cupiditate";
                                                }}),
                                            }}) {{
                                endpointId = "qui";
                            }};, PutEventsXAmzTargetEnum.AWS_EVENTS_PUT_EVENTS) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "vero";
            }};            

            PutEventsResponse res = sdk.sdk.putEvents(req);

            if (res.putEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPartnerEvents

This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPartnerEventsRequest;
import org.openapis.openapi.models.operations.PutPartnerEventsResponse;
import org.openapis.openapi.models.operations.PutPartnerEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutPartnerEventsRequest;
import org.openapis.openapi.models.shared.PutPartnerEventsRequestEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPartnerEventsRequest req = new PutPartnerEventsRequest(                new PutPartnerEventsRequest(                new org.openapis.openapi.models.shared.PutPartnerEventsRequestEntry[]{{
                                                add(new PutPartnerEventsRequestEntry() {{
                                                    detail = "ipsum";
                                                    detailType = "delectus";
                                                    resources = new String[]{{
                                                        add("consectetur"),
                                                        add("vero"),
                                                    }};
                                                    source = "tenetur";
                                                    time = OffsetDateTime.parse("2022-01-22T09:31:52.637Z");
                                                }}),
                                                add(new PutPartnerEventsRequestEntry() {{
                                                    detail = "distinctio";
                                                    detailType = "quod";
                                                    resources = new String[]{{
                                                        add("similique"),
                                                        add("facilis"),
                                                    }};
                                                    source = "vero";
                                                    time = OffsetDateTime.parse("2022-09-16T01:08:31.616Z");
                                                }}),
                                            }});, PutPartnerEventsXAmzTargetEnum.AWS_EVENTS_PUT_PARTNER_EVENTS) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            PutPartnerEventsResponse res = sdk.sdk.putPartnerEvents(req);

            if (res.putPartnerEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermission

<p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionRequest;
import org.openapis.openapi.models.operations.PutPermissionResponse;
import org.openapis.openapi.models.operations.PutPermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.PutPermissionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPermissionRequest req = new PutPermissionRequest(                new PutPermissionRequest() {{
                                action = "nulla";
                                condition = new Condition("fugit", "porro", "maiores");;
                                eventBusName = "doloribus";
                                policy = "iusto";
                                principal = "eligendi";
                                statementId = "ducimus";
                            }};, PutPermissionXAmzTargetEnum.AWS_EVENTS_PUT_PERMISSION) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            PutPermissionResponse res = sdk.sdk.putPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRule

<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRuleRequest;
import org.openapis.openapi.models.operations.PutRuleResponse;
import org.openapis.openapi.models.operations.PutRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRuleRequest;
import org.openapis.openapi.models.shared.RuleStateEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRuleRequest req = new PutRuleRequest(                new PutRuleRequest("magnam") {{
                                description = "ratione";
                                eventBusName = "ex";
                                eventPattern = "laudantium";
                                roleArn = "dicta";
                                scheduleExpression = "dolor";
                                state = RuleStateEnum.DISABLED;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("excepturi", "voluptatibus") {{
                                        key = "ex";
                                        value = "nulla";
                                    }}),
                                }};
                            }};, PutRuleXAmzTargetEnum.AWS_EVENTS_PUT_RULE) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
            }};            

            PutRuleResponse res = sdk.sdk.putRule(req);

            if (res.putRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTargets

<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <note> <p>Each rule can have up to five (5) targets associated with it at one time.</p> </note> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-gateway-target.html">API Gateway</a> </p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>EC2 Image Builder</p> </li> <li> <p>EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>EC2 <code>StopInstances</code> API call</p> </li> <li> <p>EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>ECS task</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cross-account.html">Event bus in a different account or Region</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-bus-to-bus.html">Event bus in the same account and Region</a> </p> </li> <li> <p>Firehose delivery stream</p> </li> <li> <p>Glue workflow</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-creation.html#incident-tracking-auto-eventbridge">Incident Manager response plan</a> </p> </li> <li> <p>Inspector assessment template</p> </li> <li> <p>Kinesis stream</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift cluster</p> </li> <li> <p>Redshift Serverless workgroup</p> </li> <li> <p>SageMaker Pipeline</p> </li> <li> <p>SNS topic</p> </li> <li> <p>SQS queue</p> </li> <li> <p>Step Functions state machine</p> </li> <li> <p>Systems Manager Automation</p> </li> <li> <p>Systems Manager OpsItem</p> </li> <li> <p>Systems Manager Run Command</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTargetsRequest;
import org.openapis.openapi.models.operations.PutTargetsResponse;
import org.openapis.openapi.models.operations.PutTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.BatchArrayProperties;
import org.openapis.openapi.models.shared.BatchParameters;
import org.openapis.openapi.models.shared.BatchRetryStrategy;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.EcsParameters;
import org.openapis.openapi.models.shared.HttpParameters;
import org.openapis.openapi.models.shared.InputTransformer;
import org.openapis.openapi.models.shared.KinesisParameters;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.PutTargetsRequest;
import org.openapis.openapi.models.shared.RedshiftDataParameters;
import org.openapis.openapi.models.shared.RetryPolicy;
import org.openapis.openapi.models.shared.RunCommandParameters;
import org.openapis.openapi.models.shared.RunCommandTarget;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.SageMakerPipelineParameters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqsParameters;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTargetsRequest req = new PutTargetsRequest(                new PutTargetsRequest("aliquid",                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target("adipisci", "iste") {{
                                                    arn = "magnam";
                                                    batchParameters = new BatchParameters("aspernatur", "minima") {{
                                                        arrayProperties = new BatchArrayProperties() {{
                                                            size = 407241L;
                                                        }};
                                                        jobDefinition = "quo";
                                                        jobName = "consectetur";
                                                        retryStrategy = new BatchRetryStrategy() {{
                                                            attempts = 926213L;
                                                        }};
                                                    }};
                                                    deadLetterConfig = new DeadLetterConfig() {{
                                                        arn = "eaque";
                                                    }};
                                                    ecsParameters = new EcsParameters("cupiditate") {{
                                                        capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                                            add(new CapacityProviderStrategyItem("deleniti") {{
                                                                base = 725595L;
                                                                capacityProvider = "aut";
                                                                weight = 11427L;
                                                            }}),
                                                            add(new CapacityProviderStrategyItem("accusamus") {{
                                                                base = 770581L;
                                                                capacityProvider = "aliquam";
                                                                weight = 146946L;
                                                            }}),
                                                            add(new CapacityProviderStrategyItem("dolorum") {{
                                                                base = 79522L;
                                                                capacityProvider = "non";
                                                                weight = 89603L;
                                                            }}),
                                                            add(new CapacityProviderStrategyItem("eum") {{
                                                                base = 672048L;
                                                                capacityProvider = "placeat";
                                                                weight = 245367L;
                                                            }}),
                                                        }};
                                                        enableECSManagedTags = false;
                                                        enableExecuteCommand = false;
                                                        group = "autem";
                                                        launchType = LaunchTypeEnum.EXTERNAL;
                                                        networkConfiguration = new NetworkConfiguration() {{
                                                            awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                                add("ipsa"),
                                                                                add("molestiae"),
                                                                                add("magnam"),
                                                                            }}) {{
                                                                assignPublicIp = AssignPublicIpEnum.DISABLED;
                                                                securityGroups = new String[]{{
                                                                    add("nulla"),
                                                                    add("voluptas"),
                                                                    add("libero"),
                                                                    add("quasi"),
                                                                }};
                                                                subnets = new String[]{{
                                                                    add("numquam"),
                                                                    add("explicabo"),
                                                                }};
                                                            }};
                                                        }};
                                                        placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                                            add(new PlacementConstraint() {{
                                                                expression = "eius";
                                                                type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                                            }}),
                                                            add(new PlacementConstraint() {{
                                                                expression = "esse";
                                                                type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                            }}),
                                                        }};
                                                        placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                                            add(new PlacementStrategy() {{
                                                                field = "reprehenderit";
                                                                type = PlacementStrategyTypeEnum.BINPACK;
                                                            }}),
                                                            add(new PlacementStrategy() {{
                                                                field = "fugiat";
                                                                type = PlacementStrategyTypeEnum.RANDOM;
                                                            }}),
                                                            add(new PlacementStrategy() {{
                                                                field = "eum";
                                                                type = PlacementStrategyTypeEnum.SPREAD;
                                                            }}),
                                                        }};
                                                        platformVersion = "assumenda";
                                                        propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                                        referenceId = "eos";
                                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                            add(new Tag("ipsa", "id") {{
                                                                key = "quisquam";
                                                                value = "veritatis";
                                                            }}),
                                                            add(new Tag("quo", "illum") {{
                                                                key = "quidem";
                                                                value = "neque";
                                                            }}),
                                                            add(new Tag("eius", "eos") {{
                                                                key = "quo";
                                                                value = "fuga";
                                                            }}),
                                                        }};
                                                        taskCount = 373813L;
                                                        taskDefinitionArn = "ab";
                                                    }};
                                                    httpParameters = new HttpParameters() {{
                                                        headerParameters = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "debitis");
                                                        }};
                                                        pathParameterValues = new String[]{{
                                                            add("aspernatur"),
                                                            add("sequi"),
                                                        }};
                                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                                            put("esse", "recusandae");
                                                            put("aperiam", "distinctio");
                                                            put("quod", "dignissimos");
                                                            put("inventore", "nihil");
                                                        }};
                                                    }};
                                                    id = "8e4796f2-a70c-4688-a82a-a482562f222e";
                                                    input = "occaecati";
                                                    inputPath = "atque";
                                                    inputTransformer = new InputTransformer("veritatis") {{
                                                        inputPathsMap = new java.util.HashMap<String, String>() {{
                                                            put("esse", "eveniet");
                                                        }};
                                                        inputTemplate = "accusamus";
                                                    }};
                                                    kinesisParameters = new KinesisParameters("quod") {{
                                                        partitionKeyPath = "esse";
                                                    }};
                                                    redshiftDataParameters = new RedshiftDataParameters("minima") {{
                                                        database = "nam";
                                                        dbUser = "vero";
                                                        secretManagerArn = "aliquid";
                                                        sql = "quasi";
                                                        sqls = new String[]{{
                                                            add("vel"),
                                                            add("harum"),
                                                            add("molestiae"),
                                                            add("rerum"),
                                                        }};
                                                        statementName = "occaecati";
                                                        withEvent = false;
                                                    }};
                                                    retryPolicy = new RetryPolicy() {{
                                                        maximumEventAgeInSeconds = 716244L;
                                                        maximumRetryAttempts = 756779L;
                                                    }};
                                                    roleArn = "sit";
                                                    runCommandParameters = new RunCommandParameters(                new org.openapis.openapi.models.shared.RunCommandTarget[]{{
                                                                        add(new RunCommandTarget("earum",                 new String[]{{
                                                                                            add("in"),
                                                                                            add("eius"),
                                                                                        }}) {{
                                                                            key = "culpa";
                                                                            values = new String[]{{
                                                                                add("tenetur"),
                                                                                add("quae"),
                                                                            }};
                                                                        }}),
                                                                        add(new RunCommandTarget("dicta",                 new String[]{{
                                                                                            add("reprehenderit"),
                                                                                            add("ullam"),
                                                                                        }}) {{
                                                                            key = "libero";
                                                                            values = new String[]{{
                                                                                add("soluta"),
                                                                                add("accusantium"),
                                                                                add("aliquam"),
                                                                                add("sapiente"),
                                                                            }};
                                                                        }}),
                                                                        add(new RunCommandTarget("qui",                 new String[]{{
                                                                                            add("ex"),
                                                                                            add("deleniti"),
                                                                                            add("itaque"),
                                                                                            add("dolorum"),
                                                                                        }}) {{
                                                                            key = "nisi";
                                                                            values = new String[]{{
                                                                                add("voluptatum"),
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        runCommandTargets = new org.openapis.openapi.models.shared.RunCommandTarget[]{{
                                                            add(new RunCommandTarget("consequuntur",                 new String[]{{
                                                                                add("minus"),
                                                                            }}) {{
                                                                key = "tempore";
                                                                values = new String[]{{
                                                                    add("cumque"),
                                                                }};
                                                            }}),
                                                            add(new RunCommandTarget("a",                 new String[]{{
                                                                                add("quas"),
                                                                                add("esse"),
                                                                                add("quasi"),
                                                                                add("a"),
                                                                            }}) {{
                                                                key = "quaerat";
                                                                values = new String[]{{
                                                                    add("consectetur"),
                                                                    add("esse"),
                                                                    add("blanditiis"),
                                                                    add("provident"),
                                                                }};
                                                            }}),
                                                            add(new RunCommandTarget("eveniet",                 new String[]{{
                                                                                add("facere"),
                                                                                add("veritatis"),
                                                                                add("consequuntur"),
                                                                                add("quasi"),
                                                                            }}) {{
                                                                key = "error";
                                                                values = new String[]{{
                                                                    add("pariatur"),
                                                                    add("possimus"),
                                                                    add("quia"),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                                                        pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                                            add(new SageMakerPipelineParameter("minima", "veritatis") {{
                                                                name = "Irvin Boyle III";
                                                                value = "ipsa";
                                                            }}),
                                                        }};
                                                    }};
                                                    sqsParameters = new SqsParameters() {{
                                                        messageGroupId = "consectetur";
                                                    }};
                                                }}),
                                            }}) {{
                                eventBusName = "temporibus";
                            }};, PutTargetsXAmzTargetEnum.AWS_EVENTS_PUT_TARGETS) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "aut";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "eum";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ab";
            }};            

            PutTargetsResponse res = sdk.sdk.putTargets(req);

            if (res.putTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePermission

Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePermissionRequest;
import org.openapis.openapi.models.operations.RemovePermissionResponse;
import org.openapis.openapi.models.operations.RemovePermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemovePermissionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovePermissionRequest req = new RemovePermissionRequest(                new RemovePermissionRequest() {{
                                eventBusName = "non";
                                removeAllPermissions = false;
                                statementId = "voluptatem";
                            }};, RemovePermissionXAmzTargetEnum.AWS_EVENTS_REMOVE_PERMISSION) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "impedit";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "aut";
            }};            

            RemovePermissionResponse res = sdk.sdk.removePermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTargets

<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <note> <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p> </note> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTargetsRequest;
import org.openapis.openapi.models.operations.RemoveTargetsResponse;
import org.openapis.openapi.models.operations.RemoveTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTargetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTargetsRequest req = new RemoveTargetsRequest(                new RemoveTargetsRequest(                new String[]{{
                                                add("maiores"),
                                            }}, "natus") {{
                                eventBusName = "velit";
                                force = false;
                            }};, RemoveTargetsXAmzTargetEnum.AWS_EVENTS_REMOVE_TARGETS) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            RemoveTargetsResponse res = sdk.sdk.removeTargets(req);

            if (res.removeTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplay

Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReplayRequest;
import org.openapis.openapi.models.operations.StartReplayResponse;
import org.openapis.openapi.models.operations.StartReplayXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReplayDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReplayRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplayRequest req = new StartReplayRequest(                new StartReplayRequest(                new ReplayDestination("officia") {{
                                                filterArns = new String[]{{
                                                    add("dignissimos"),
                                                    add("officia"),
                                                    add("asperiores"),
                                                    add("nemo"),
                                                }};
                                            }};, OffsetDateTime.parse("2022-09-08T20:16:51.473Z"), "porro", OffsetDateTime.parse("2022-02-19T04:53:13.708Z"), "ab") {{
                                description = "adipisci";
                            }};, StartReplayXAmzTargetEnum.AWS_EVENTS_START_REPLAY) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "id";
                xAmzCredential = "suscipit";
                xAmzDate = "velit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "est";
                xAmzSignedHeaders = "recusandae";
            }};            

            StartReplayResponse res = sdk.sdk.startReplay(req);

            if (res.startReplayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("fugiat",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("vel", "labore") {{
                                                    key = "ducimus";
                                                    value = "quos";
                                                }}),
                                                add(new Tag("cum", "commodi") {{
                                                    key = "possimus";
                                                    value = "facilis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_EVENTS_TAG_RESOURCE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "reiciendis";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aliquid";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testEventPattern

<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestEventPatternRequest;
import org.openapis.openapi.models.operations.TestEventPatternResponse;
import org.openapis.openapi.models.operations.TestEventPatternXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestEventPatternRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestEventPatternRequest req = new TestEventPatternRequest(                new TestEventPatternRequest("cum", "consectetur");, TestEventPatternXAmzTargetEnum.AWS_EVENTS_TEST_EVENT_PATTERN) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "earum";
                xAmzDate = "facere";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "suscipit";
            }};            

            TestEventPatternResponse res = sdk.sdk.testEventPattern(req);

            if (res.testEventPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("quidem",                 new String[]{{
                                                add("necessitatibus"),
                                                add("dolore"),
                                                add("sunt"),
                                                add("asperiores"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_EVENTS_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "non";
                xAmzCredential = "amet";
                xAmzDate = "beatae";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "a";
                xAmzSignedHeaders = "debitis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApiDestination

Updates an API destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiDestinationRequest;
import org.openapis.openapi.models.operations.UpdateApiDestinationResponse;
import org.openapis.openapi.models.operations.UpdateApiDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApiDestinationHttpMethodEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApiDestinationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApiDestinationRequest req = new UpdateApiDestinationRequest(                new UpdateApiDestinationRequest("corporis") {{
                                connectionArn = "harum";
                                description = "laboriosam";
                                httpMethod = ApiDestinationHttpMethodEnum.POST;
                                invocationEndpoint = "voluptates";
                                invocationRateLimitPerSecond = 730709L;
                            }};, UpdateApiDestinationXAmzTargetEnum.AWS_EVENTS_UPDATE_API_DESTINATION) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "similique";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateApiDestinationResponse res = sdk.sdk.updateApiDestination(req);

            if (res.updateApiDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArchive

Updates the specified archive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArchiveRequest;
import org.openapis.openapi.models.operations.UpdateArchiveResponse;
import org.openapis.openapi.models.operations.UpdateArchiveXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateArchiveRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateArchiveRequest req = new UpdateArchiveRequest(                new UpdateArchiveRequest("minima") {{
                                description = "nobis";
                                eventPattern = "dolorum";
                                retentionDays = 237807L;
                            }};, UpdateArchiveXAmzTargetEnum.AWS_EVENTS_UPDATE_ARCHIVE) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateArchiveResponse res = sdk.sdk.updateArchive(req);

            if (res.updateArchiveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnection

Updates settings for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionRequest;
import org.openapis.openapi.models.operations.UpdateConnectionResponse;
import org.openapis.openapi.models.operations.UpdateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionAuthorizationTypeEnum;
import org.openapis.openapi.models.shared.ConnectionBodyParameter;
import org.openapis.openapi.models.shared.ConnectionHeaderParameter;
import org.openapis.openapi.models.shared.ConnectionHttpParameters;
import org.openapis.openapi.models.shared.ConnectionOAuthHttpMethodEnum;
import org.openapis.openapi.models.shared.ConnectionQueryStringParameter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConnectionApiKeyAuthRequestParameters;
import org.openapis.openapi.models.shared.UpdateConnectionAuthRequestParameters;
import org.openapis.openapi.models.shared.UpdateConnectionBasicAuthRequestParameters;
import org.openapis.openapi.models.shared.UpdateConnectionOAuthClientRequestParameters;
import org.openapis.openapi.models.shared.UpdateConnectionOAuthRequestParameters;
import org.openapis.openapi.models.shared.UpdateConnectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectionRequest req = new UpdateConnectionRequest(                new UpdateConnectionRequest("ullam") {{
                                authParameters = new UpdateConnectionAuthRequestParameters() {{
                                    apiKeyAuthParameters = new UpdateConnectionApiKeyAuthRequestParameters() {{
                                        apiKeyName = "adipisci";
                                        apiKeyValue = "cum";
                                    }};;
                                    basicAuthParameters = new UpdateConnectionBasicAuthRequestParameters() {{
                                        password = "blanditiis";
                                        username = "Kaylee63";
                                    }};;
                                    invocationHttpParameters = new ConnectionHttpParameters() {{
                                        bodyParameters = new org.openapis.openapi.models.shared.ConnectionBodyParameter[]{{
                                            add(new ConnectionBodyParameter() {{
                                                isValueSecret = false;
                                                key = "pariatur";
                                                value = "totam";
                                            }}),
                                            add(new ConnectionBodyParameter() {{
                                                isValueSecret = false;
                                                key = "hic";
                                                value = "exercitationem";
                                            }}),
                                            add(new ConnectionBodyParameter() {{
                                                isValueSecret = false;
                                                key = "nobis";
                                                value = "sit";
                                            }}),
                                        }};
                                        headerParameters = new org.openapis.openapi.models.shared.ConnectionHeaderParameter[]{{
                                            add(new ConnectionHeaderParameter() {{
                                                isValueSecret = false;
                                                key = "sed";
                                                value = "reiciendis";
                                            }}),
                                            add(new ConnectionHeaderParameter() {{
                                                isValueSecret = false;
                                                key = "explicabo";
                                                value = "asperiores";
                                            }}),
                                            add(new ConnectionHeaderParameter() {{
                                                isValueSecret = false;
                                                key = "facilis";
                                                value = "voluptate";
                                            }}),
                                        }};
                                        queryStringParameters = new org.openapis.openapi.models.shared.ConnectionQueryStringParameter[]{{
                                            add(new ConnectionQueryStringParameter() {{
                                                isValueSecret = false;
                                                key = "ab";
                                                value = "iste";
                                            }}),
                                            add(new ConnectionQueryStringParameter() {{
                                                isValueSecret = false;
                                                key = "dolore";
                                                value = "laborum";
                                            }}),
                                            add(new ConnectionQueryStringParameter() {{
                                                isValueSecret = false;
                                                key = "sed";
                                                value = "in";
                                            }}),
                                        }};
                                    }};;
                                    oAuthParameters = new UpdateConnectionOAuthRequestParameters() {{
                                        authorizationEndpoint = "commodi";
                                        clientParameters = new UpdateConnectionOAuthClientRequestParameters() {{
                                            clientID = "quidem";
                                            clientSecret = "explicabo";
                                        }};;
                                        httpMethod = ConnectionOAuthHttpMethodEnum.POST;
                                        oAuthHttpParameters = new ConnectionHttpParameters() {{
                                            bodyParameters = new org.openapis.openapi.models.shared.ConnectionBodyParameter[]{{
                                                add(new ConnectionBodyParameter() {{
                                                    isValueSecret = false;
                                                    key = "architecto";
                                                    value = "suscipit";
                                                }}),
                                                add(new ConnectionBodyParameter() {{
                                                    isValueSecret = false;
                                                    key = "sapiente";
                                                    value = "debitis";
                                                }}),
                                                add(new ConnectionBodyParameter() {{
                                                    isValueSecret = false;
                                                    key = "illo";
                                                    value = "reiciendis";
                                                }}),
                                            }};
                                            headerParameters = new org.openapis.openapi.models.shared.ConnectionHeaderParameter[]{{
                                                add(new ConnectionHeaderParameter() {{
                                                    isValueSecret = false;
                                                    key = "corrupti";
                                                    value = "maiores";
                                                }}),
                                            }};
                                            queryStringParameters = new org.openapis.openapi.models.shared.ConnectionQueryStringParameter[]{{
                                                add(new ConnectionQueryStringParameter() {{
                                                    isValueSecret = false;
                                                    key = "sed";
                                                    value = "provident";
                                                }}),
                                                add(new ConnectionQueryStringParameter() {{
                                                    isValueSecret = false;
                                                    key = "eius";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                                authorizationType = ConnectionAuthorizationTypeEnum.BASIC;
                                description = "ea";
                            }};, UpdateConnectionXAmzTargetEnum.AWS_EVENTS_UPDATE_CONNECTION) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "quos";
                xAmzCredential = "voluptatibus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateConnectionResponse res = sdk.sdk.updateConnection(req);

            if (res.updateConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEndpoint

Update an existing endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEndpointRequest;
import org.openapis.openapi.models.operations.UpdateEndpointResponse;
import org.openapis.openapi.models.operations.UpdateEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.EndpointEventBus;
import org.openapis.openapi.models.shared.FailoverConfig;
import org.openapis.openapi.models.shared.Primary;
import org.openapis.openapi.models.shared.ReplicationConfig;
import org.openapis.openapi.models.shared.ReplicationStateEnum;
import org.openapis.openapi.models.shared.RoutingConfig;
import org.openapis.openapi.models.shared.Secondary;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEndpointRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEndpointRequest req = new UpdateEndpointRequest(                new UpdateEndpointRequest("sit") {{
                                description = "non";
                                eventBuses = new org.openapis.openapi.models.shared.EndpointEventBus[]{{
                                    add(new EndpointEventBus("facilis") {{
                                        eventBusArn = "praesentium";
                                    }}),
                                    add(new EndpointEventBus("incidunt") {{
                                        eventBusArn = "quaerat";
                                    }}),
                                    add(new EndpointEventBus("debitis") {{
                                        eventBusArn = "ipsam";
                                    }}),
                                    add(new EndpointEventBus("sit") {{
                                        eventBusArn = "rem";
                                    }}),
                                }};
                                replicationConfig = new ReplicationConfig() {{
                                    state = ReplicationStateEnum.DISABLED;
                                }};;
                                roleArn = "error";
                                routingConfig = new RoutingConfig(                new FailoverConfig(                new Primary("veniam");,                 new Secondary("minima");););;
                            }};, UpdateEndpointXAmzTargetEnum.AWS_EVENTS_UPDATE_ENDPOINT) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "nulla";
                xAmzDate = "magni";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "numquam";
            }};            

            UpdateEndpointResponse res = sdk.sdk.updateEndpoint(req);

            if (res.updateEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
