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
* [createEventBus](#createeventbus) - Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
* [createPartnerEventSource](#createpartnereventsource) - <p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>
* [deactivateEventSource](#deactivateeventsource) - <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
* [deauthorizeConnection](#deauthorizeconnection) - Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.
* [deleteApiDestination](#deleteapidestination) - Deletes the specified API destination.
* [deleteArchive](#deletearchive) - Deletes the specified archive.
* [deleteConnection](#deleteconnection) - Deletes a connection.
* [deleteEventBus](#deleteeventbus) - Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
* [deletePartnerEventSource](#deletepartnereventsource) - <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>
* [deleteRule](#deleterule) - <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
* [describeApiDestination](#describeapidestination) - Retrieves details about an API destination.
* [describeArchive](#describearchive) - Retrieves details about an archive.
* [describeConnection](#describeconnection) - Retrieves details about a connection.
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
* [listEventBuses](#listeventbuses) - Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
* [listEventSources](#listeventsources) - You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.
* [listPartnerEventSourceAccounts](#listpartnereventsourceaccounts) - An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
* [listPartnerEventSources](#listpartnereventsources) - An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.
* [listReplays](#listreplays) - Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.
* [listRuleNamesByTarget](#listrulenamesbytarget) - Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
* [listRules](#listrules) - <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
* [listTargetsByRule](#listtargetsbyrule) - Lists the targets assigned to the specified rule.
* [putEvents](#putevents) - Sends custom events to Amazon EventBridge so that they can be matched to rules.
* [putPartnerEvents](#putpartnerevents) - This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
* [putPermission](#putpermission) - <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
* [putRule](#putrule) - <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
* [putTargets](#puttargets) - <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [removePermission](#removepermission) - Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.
* [removeTargets](#removetargets) - <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
* [startReplay](#startreplay) - Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [testEventPattern](#testeventpattern) - <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.
* [updateApiDestination](#updateapidestination) - Updates an API destination.
* [updateArchive](#updatearchive) - Updates the specified archive.
* [updateConnection](#updateconnection) - Updates settings for a connection.

## activateEventSource

Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateEventSourceRequest();
    $request->activateEventSourceRequest = new ActivateEventSourceRequest();
    $request->activateEventSourceRequest->name = 'Dr. Valerie Toy';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = ActivateEventSourceXAmzTargetEnum::AWS_EVENTS_ACTIVATE_EVENT_SOURCE;

    $response = $sdk->sdk->activateEventSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelReplay

Cancels the specified replay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelReplayRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelReplayRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelReplayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelReplayRequest();
    $request->cancelReplayRequest = new CancelReplayRequest();
    $request->cancelReplayRequest->replayName = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CancelReplayXAmzTargetEnum::AWS_EVENTS_CANCEL_REPLAY;

    $response = $sdk->sdk->cancelReplay($request);

    if ($response->cancelReplayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiDestination

Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiDestinationHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiDestinationRequest();
    $request->createApiDestinationRequest = new CreateApiDestinationRequest();
    $request->createApiDestinationRequest->connectionArn = 'ipsam';
    $request->createApiDestinationRequest->description = 'repellendus';
    $request->createApiDestinationRequest->httpMethod = ApiDestinationHttpMethodEnum::DELETE;
    $request->createApiDestinationRequest->invocationEndpoint = 'quo';
    $request->createApiDestinationRequest->invocationRateLimitPerSecond = 140350;
    $request->createApiDestinationRequest->name = 'Wilfred Wolff';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = CreateApiDestinationXAmzTargetEnum::AWS_EVENTS_CREATE_API_DESTINATION;

    $response = $sdk->sdk->createApiDestination($request);

    if ($response->createApiDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createArchive

Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateArchiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArchiveRequest();
    $request->createArchiveRequest = new CreateArchiveRequest();
    $request->createArchiveRequest->archiveName = 'officia';
    $request->createArchiveRequest->description = 'occaecati';
    $request->createArchiveRequest->eventPattern = 'fugit';
    $request->createArchiveRequest->eventSourceArn = 'deleniti';
    $request->createArchiveRequest->retentionDays = 944669;
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = CreateArchiveXAmzTargetEnum::AWS_EVENTS_CREATE_ARCHIVE;

    $response = $sdk->sdk->createArchive($request);

    if ($response->createArchiveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnection

Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionApiKeyAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionBasicAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionHttpParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionBodyParameter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionHeaderParameter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionQueryStringParameter;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionOAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionOAuthClientRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionOAuthHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionAuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionRequest = new CreateConnectionRequest();
    $request->createConnectionRequest->authParameters = new CreateConnectionAuthRequestParameters();
    $request->createConnectionRequest->authParameters->apiKeyAuthParameters = new CreateConnectionApiKeyAuthRequestParameters();
    $request->createConnectionRequest->authParameters->apiKeyAuthParameters->apiKeyName = 'impedit';
    $request->createConnectionRequest->authParameters->apiKeyAuthParameters->apiKeyValue = 'cum';
    $request->createConnectionRequest->authParameters->basicAuthParameters = new CreateConnectionBasicAuthRequestParameters();
    $request->createConnectionRequest->authParameters->basicAuthParameters->password = 'esse';
    $request->createConnectionRequest->authParameters->basicAuthParameters->username = 'Cullen1';
    $request->createConnectionRequest->authParameters->invocationHttpParameters = new ConnectionHttpParameters();
    $request->createConnectionRequest->authParameters->invocationHttpParameters->bodyParameters = [
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
    ];
    $request->createConnectionRequest->authParameters->invocationHttpParameters->headerParameters = [
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
    ];
    $request->createConnectionRequest->authParameters->invocationHttpParameters->queryStringParameters = [
        new ConnectionQueryStringParameter(),
    ];
    $request->createConnectionRequest->authParameters->oAuthParameters = new CreateConnectionOAuthRequestParameters();
    $request->createConnectionRequest->authParameters->oAuthParameters->authorizationEndpoint = 'iste';
    $request->createConnectionRequest->authParameters->oAuthParameters->clientParameters = new CreateConnectionOAuthClientRequestParameters();
    $request->createConnectionRequest->authParameters->oAuthParameters->clientParameters->clientID = 'dolor';
    $request->createConnectionRequest->authParameters->oAuthParameters->clientParameters->clientSecret = 'natus';
    $request->createConnectionRequest->authParameters->oAuthParameters->httpMethod = ConnectionOAuthHttpMethodEnum::POST;
    $request->createConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters = new ConnectionHttpParameters();
    $request->createConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->bodyParameters = [
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
    ];
    $request->createConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->headerParameters = [
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
    ];
    $request->createConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->queryStringParameters = [
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
    ];
    $request->createConnectionRequest->authorizationType = ConnectionAuthorizationTypeEnum::OAUTH_CLIENT_CREDENTIALS;
    $request->createConnectionRequest->description = 'corporis';
    $request->createConnectionRequest->name = 'Brad Turcotte Jr.';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::AWS_EVENTS_CREATE_CONNECTION;

    $response = $sdk->sdk->createConnection($request);

    if ($response->createConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventBus

Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventBusRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEventBusRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventBusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventBusRequest();
    $request->createEventBusRequest = new CreateEventBusRequest();
    $request->createEventBusRequest->eventSourceName = 'explicabo';
    $request->createEventBusRequest->name = 'Ronnie Mohr';
    $request->createEventBusRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CreateEventBusXAmzTargetEnum::AWS_EVENTS_CREATE_EVENT_BUS;

    $response = $sdk->sdk->createEventBus($request);

    if ($response->createEventBusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPartnerEventSource

<p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartnerEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePartnerEventSourceRequest();
    $request->createPartnerEventSourceRequest = new CreatePartnerEventSourceRequest();
    $request->createPartnerEventSourceRequest->account = 'dolorem';
    $request->createPartnerEventSourceRequest->name = 'Carlos Ziemann';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = CreatePartnerEventSourceXAmzTargetEnum::AWS_EVENTS_CREATE_PARTNER_EVENT_SOURCE;

    $response = $sdk->sdk->createPartnerEventSource($request);

    if ($response->createPartnerEventSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateEventSource

<p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeactivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateEventSourceRequest();
    $request->deactivateEventSourceRequest = new DeactivateEventSourceRequest();
    $request->deactivateEventSourceRequest->name = 'Gloria Padberg';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DeactivateEventSourceXAmzTargetEnum::AWS_EVENTS_DEACTIVATE_EVENT_SOURCE;

    $response = $sdk->sdk->deactivateEventSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deauthorizeConnection

Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeauthorizeConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeauthorizeConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeauthorizeConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeauthorizeConnectionRequest();
    $request->deauthorizeConnectionRequest = new DeauthorizeConnectionRequest();
    $request->deauthorizeConnectionRequest->name = 'Joyce Mueller';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeauthorizeConnectionXAmzTargetEnum::AWS_EVENTS_DEAUTHORIZE_CONNECTION;

    $response = $sdk->sdk->deauthorizeConnection($request);

    if ($response->deauthorizeConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiDestination

Deletes the specified API destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiDestinationRequest();
    $request->deleteApiDestinationRequest = new DeleteApiDestinationRequest();
    $request->deleteApiDestinationRequest->name = 'Geneva Klein Jr.';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DeleteApiDestinationXAmzTargetEnum::AWS_EVENTS_DELETE_API_DESTINATION;

    $response = $sdk->sdk->deleteApiDestination($request);

    if ($response->deleteApiDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArchive

Deletes the specified archive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArchiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArchiveRequest();
    $request->deleteArchiveRequest = new DeleteArchiveRequest();
    $request->deleteArchiveRequest->archiveName = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteArchiveXAmzTargetEnum::AWS_EVENTS_DELETE_ARCHIVE;

    $response = $sdk->sdk->deleteArchive($request);

    if ($response->deleteArchiveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

Deletes a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionRequest = new DeleteConnectionRequest();
    $request->deleteConnectionRequest->name = 'Virgil Mante';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::AWS_EVENTS_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->deleteConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventBus

Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventBusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEventBusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventBusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventBusRequest();
    $request->deleteEventBusRequest = new DeleteEventBusRequest();
    $request->deleteEventBusRequest->name = 'Miss Randall Hamill';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteEventBusXAmzTargetEnum::AWS_EVENTS_DELETE_EVENT_BUS;

    $response = $sdk->sdk->deleteEventBus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePartnerEventSource

<p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartnerEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePartnerEventSourceRequest();
    $request->deletePartnerEventSourceRequest = new DeletePartnerEventSourceRequest();
    $request->deletePartnerEventSourceRequest->account = 'aliquid';
    $request->deletePartnerEventSourceRequest->name = 'Isaac Aufderhar';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DeletePartnerEventSourceXAmzTargetEnum::AWS_EVENTS_DELETE_PARTNER_EVENT_SOURCE;

    $response = $sdk->sdk->deletePartnerEventSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRule

<p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleRequest();
    $request->deleteRuleRequest = new DeleteRuleRequest();
    $request->deleteRuleRequest->eventBusName = 'tempore';
    $request->deleteRuleRequest->force = false;
    $request->deleteRuleRequest->name = 'Lucia Kemmer';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteRuleXAmzTargetEnum::AWS_EVENTS_DELETE_RULE;

    $response = $sdk->sdk->deleteRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApiDestination

Retrieves details about an API destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApiDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApiDestinationRequest();
    $request->describeApiDestinationRequest = new DescribeApiDestinationRequest();
    $request->describeApiDestinationRequest->name = 'Randal Parisian';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DescribeApiDestinationXAmzTargetEnum::AWS_EVENTS_DESCRIBE_API_DESTINATION;

    $response = $sdk->sdk->describeApiDestination($request);

    if ($response->describeApiDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeArchive

Retrieves details about an archive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeArchiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeArchiveRequest();
    $request->describeArchiveRequest = new DescribeArchiveRequest();
    $request->describeArchiveRequest->archiveName = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeArchiveXAmzTargetEnum::AWS_EVENTS_DESCRIBE_ARCHIVE;

    $response = $sdk->sdk->describeArchive($request);

    if ($response->describeArchiveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnection

Retrieves details about a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionRequest();
    $request->describeConnectionRequest = new DescribeConnectionRequest();
    $request->describeConnectionRequest->name = 'Abraham McKenzie';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeConnectionXAmzTargetEnum::AWS_EVENTS_DESCRIBE_CONNECTION;

    $response = $sdk->sdk->describeConnection($request);

    if ($response->describeConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventBus

<p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventBusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventBusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventBusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventBusRequest();
    $request->describeEventBusRequest = new DescribeEventBusRequest();
    $request->describeEventBusRequest->name = 'Ms. Arturo Krajcik';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DescribeEventBusXAmzTargetEnum::AWS_EVENTS_DESCRIBE_EVENT_BUS;

    $response = $sdk->sdk->describeEventBus($request);

    if ($response->describeEventBusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventSource

This operation lists details about a partner event source that is shared with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventSourceRequest();
    $request->describeEventSourceRequest = new DescribeEventSourceRequest();
    $request->describeEventSourceRequest->name = 'Mrs. Meghan Collins V';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DescribeEventSourceXAmzTargetEnum::AWS_EVENTS_DESCRIBE_EVENT_SOURCE;

    $response = $sdk->sdk->describeEventSource($request);

    if ($response->describeEventSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePartnerEventSource

An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePartnerEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePartnerEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePartnerEventSourceRequest();
    $request->describePartnerEventSourceRequest = new DescribePartnerEventSourceRequest();
    $request->describePartnerEventSourceRequest->name = 'Tommy Kemmer';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DescribePartnerEventSourceXAmzTargetEnum::AWS_EVENTS_DESCRIBE_PARTNER_EVENT_SOURCE;

    $response = $sdk->sdk->describePartnerEventSource($request);

    if ($response->describePartnerEventSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplay

Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplayRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReplayRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplayRequest();
    $request->describeReplayRequest = new DescribeReplayRequest();
    $request->describeReplayRequest->replayName = 'maxime';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DescribeReplayXAmzTargetEnum::AWS_EVENTS_DESCRIBE_REPLAY;

    $response = $sdk->sdk->describeReplay($request);

    if ($response->describeReplayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRule

<p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuleRequest();
    $request->describeRuleRequest = new DescribeRuleRequest();
    $request->describeRuleRequest->eventBusName = 'expedita';
    $request->describeRuleRequest->name = 'Kristie Spencer';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = DescribeRuleXAmzTargetEnum::AWS_EVENTS_DESCRIBE_RULE;

    $response = $sdk->sdk->describeRule($request);

    if ($response->describeRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableRule

<p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRuleRequest();
    $request->disableRuleRequest = new DisableRuleRequest();
    $request->disableRuleRequest->eventBusName = 'quo';
    $request->disableRuleRequest->name = 'Ervin Schoen';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DisableRuleXAmzTargetEnum::AWS_EVENTS_DISABLE_RULE;

    $response = $sdk->sdk->disableRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableRule

<p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableRuleRequest();
    $request->enableRuleRequest = new EnableRuleRequest();
    $request->enableRuleRequest->eventBusName = 'voluptate';
    $request->enableRuleRequest->name = 'Candice Beatty';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = EnableRuleXAmzTargetEnum::AWS_EVENTS_ENABLE_RULE;

    $response = $sdk->sdk->enableRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApiDestinations

Retrieves a list of API destination in the account in the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApiDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApiDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApiDestinationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApiDestinationsRequest();
    $request->listApiDestinationsRequest = new ListApiDestinationsRequest();
    $request->listApiDestinationsRequest->connectionArn = 'hic';
    $request->listApiDestinationsRequest->limit = 729991;
    $request->listApiDestinationsRequest->namePrefix = 'nobis';
    $request->listApiDestinationsRequest->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = ListApiDestinationsXAmzTargetEnum::AWS_EVENTS_LIST_API_DESTINATIONS;

    $response = $sdk->sdk->listApiDestinations($request);

    if ($response->listApiDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArchives

Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListArchivesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListArchivesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArchiveStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListArchivesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArchivesRequest();
    $request->listArchivesRequest = new ListArchivesRequest();
    $request->listArchivesRequest->eventSourceArn = 'perferendis';
    $request->listArchivesRequest->limit = 170986;
    $request->listArchivesRequest->namePrefix = 'minus';
    $request->listArchivesRequest->nextToken = 'quam';
    $request->listArchivesRequest->state = ArchiveStateEnum::DISABLED;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListArchivesXAmzTargetEnum::AWS_EVENTS_LIST_ARCHIVES;

    $response = $sdk->sdk->listArchives($request);

    if ($response->listArchivesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnections

Retrieves a list of connections from the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionsRequest();
    $request->listConnectionsRequest = new ListConnectionsRequest();
    $request->listConnectionsRequest->connectionState = ConnectionStateEnum::CREATING;
    $request->listConnectionsRequest->limit = 783645;
    $request->listConnectionsRequest->namePrefix = 'consequuntur';
    $request->listConnectionsRequest->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ListConnectionsXAmzTargetEnum::AWS_EVENTS_LIST_CONNECTIONS;

    $response = $sdk->sdk->listConnections($request);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventBuses

Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventBusesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEventBusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventBusesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventBusesRequest();
    $request->listEventBusesRequest = new ListEventBusesRequest();
    $request->listEventBusesRequest->limit = 267262;
    $request->listEventBusesRequest->namePrefix = 'iste';
    $request->listEventBusesRequest->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListEventBusesXAmzTargetEnum::AWS_EVENTS_LIST_EVENT_BUSES;

    $response = $sdk->sdk->listEventBuses($request);

    if ($response->listEventBusesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventSources

You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEventSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventSourcesRequest();
    $request->listEventSourcesRequest = new ListEventSourcesRequest();
    $request->listEventSourcesRequest->limit = 554242;
    $request->listEventSourcesRequest->namePrefix = 'aliquid';
    $request->listEventSourcesRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ListEventSourcesXAmzTargetEnum::AWS_EVENTS_LIST_EVENT_SOURCES;

    $response = $sdk->sdk->listEventSources($request);

    if ($response->listEventSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPartnerEventSourceAccounts

An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPartnerEventSourceAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPartnerEventSourceAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPartnerEventSourceAccountsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPartnerEventSourceAccountsRequest();
    $request->listPartnerEventSourceAccountsRequest = new ListPartnerEventSourceAccountsRequest();
    $request->listPartnerEventSourceAccountsRequest->eventSourceName = 'voluptate';
    $request->listPartnerEventSourceAccountsRequest->limit = 490459;
    $request->listPartnerEventSourceAccountsRequest->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ListPartnerEventSourceAccountsXAmzTargetEnum::AWS_EVENTS_LIST_PARTNER_EVENT_SOURCE_ACCOUNTS;

    $response = $sdk->sdk->listPartnerEventSourceAccounts($request);

    if ($response->listPartnerEventSourceAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPartnerEventSources

An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPartnerEventSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPartnerEventSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPartnerEventSourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPartnerEventSourcesRequest();
    $request->listPartnerEventSourcesRequest = new ListPartnerEventSourcesRequest();
    $request->listPartnerEventSourcesRequest->limit = 487838;
    $request->listPartnerEventSourcesRequest->namePrefix = 'quaerat';
    $request->listPartnerEventSourcesRequest->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = ListPartnerEventSourcesXAmzTargetEnum::AWS_EVENTS_LIST_PARTNER_EVENT_SOURCES;

    $response = $sdk->sdk->listPartnerEventSources($request);

    if ($response->listPartnerEventSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReplays

Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReplaysRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReplaysRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplayStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReplaysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReplaysRequest();
    $request->listReplaysRequest = new ListReplaysRequest();
    $request->listReplaysRequest->eventSourceArn = 'fugiat';
    $request->listReplaysRequest->limit = 67249;
    $request->listReplaysRequest->namePrefix = 'soluta';
    $request->listReplaysRequest->nextToken = 'dolorum';
    $request->listReplaysRequest->state = ReplayStateEnum::CANCELLING;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = ListReplaysXAmzTargetEnum::AWS_EVENTS_LIST_REPLAYS;

    $response = $sdk->sdk->listReplays($request);

    if ($response->listReplaysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRuleNamesByTarget

Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRuleNamesByTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRuleNamesByTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRuleNamesByTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRuleNamesByTargetRequest();
    $request->listRuleNamesByTargetRequest = new ListRuleNamesByTargetRequest();
    $request->listRuleNamesByTargetRequest->eventBusName = 'nihil';
    $request->listRuleNamesByTargetRequest->limit = 216897;
    $request->listRuleNamesByTargetRequest->nextToken = 'voluptate';
    $request->listRuleNamesByTargetRequest->targetArn = 'id';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListRuleNamesByTargetXAmzTargetEnum::AWS_EVENTS_LIST_RULE_NAMES_BY_TARGET;

    $response = $sdk->sdk->listRuleNamesByTarget($request);

    if ($response->listRuleNamesByTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRules

<p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRulesRequest();
    $request->listRulesRequest = new ListRulesRequest();
    $request->listRulesRequest->eventBusName = 'ad';
    $request->listRulesRequest->limit = 904425;
    $request->listRulesRequest->namePrefix = 'suscipit';
    $request->listRulesRequest->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = ListRulesXAmzTargetEnum::AWS_EVENTS_LIST_RULES;

    $response = $sdk->sdk->listRules($request);

    if ($response->listRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_EVENTS_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetsByRule

Lists the targets assigned to the specified rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsByRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetsByRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsByRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetsByRuleRequest();
    $request->listTargetsByRuleRequest = new ListTargetsByRuleRequest();
    $request->listTargetsByRuleRequest->eventBusName = 'esse';
    $request->listTargetsByRuleRequest->limit = 687488;
    $request->listTargetsByRuleRequest->nextToken = 'iusto';
    $request->listTargetsByRuleRequest->rule = 'ipsum';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListTargetsByRuleXAmzTargetEnum::AWS_EVENTS_LIST_TARGETS_BY_RULE;

    $response = $sdk->sdk->listTargetsByRule($request);

    if ($response->listTargetsByRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEvents

Sends custom events to Amazon EventBridge so that they can be matched to rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutEventsRequestEntry;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsRequest();
    $request->putEventsRequest = new PutEventsRequest();
    $request->putEventsRequest->entries = [
        new PutEventsRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = PutEventsXAmzTargetEnum::AWS_EVENTS_PUT_EVENTS;

    $response = $sdk->sdk->putEvents($request);

    if ($response->putEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPartnerEvents

This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPartnerEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPartnerEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPartnerEventsRequestEntry;
use \OpenAPI\OpenAPI\Models\Operations\PutPartnerEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPartnerEventsRequest();
    $request->putPartnerEventsRequest = new PutPartnerEventsRequest();
    $request->putPartnerEventsRequest->entries = [
        new PutPartnerEventsRequestEntry(),
        new PutPartnerEventsRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = PutPartnerEventsXAmzTargetEnum::AWS_EVENTS_PUT_PARTNER_EVENTS;

    $response = $sdk->sdk->putPartnerEvents($request);

    if ($response->putPartnerEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPermission

<p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPermissionRequest();
    $request->putPermissionRequest = new PutPermissionRequest();
    $request->putPermissionRequest->action = 'cupiditate';
    $request->putPermissionRequest->condition = new Condition();
    $request->putPermissionRequest->condition->key = 'maxime';
    $request->putPermissionRequest->condition->type = 'pariatur';
    $request->putPermissionRequest->condition->value = 'soluta';
    $request->putPermissionRequest->eventBusName = 'dicta';
    $request->putPermissionRequest->policy = 'laborum';
    $request->putPermissionRequest->principal = 'totam';
    $request->putPermissionRequest->statementId = 'incidunt';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = PutPermissionXAmzTargetEnum::AWS_EVENTS_PUT_PERMISSION;

    $response = $sdk->sdk->putPermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRule

<p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\PutRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRuleRequest();
    $request->putRuleRequest = new PutRuleRequest();
    $request->putRuleRequest->description = 'temporibus';
    $request->putRuleRequest->eventBusName = 'qui';
    $request->putRuleRequest->eventPattern = 'neque';
    $request->putRuleRequest->name = 'Mrs. Louise Kuhlman';
    $request->putRuleRequest->roleArn = 'hic';
    $request->putRuleRequest->scheduleExpression = 'voluptatem';
    $request->putRuleRequest->state = RuleStateEnum::DISABLED;
    $request->putRuleRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = PutRuleXAmzTargetEnum::AWS_EVENTS_PUT_RULE;

    $response = $sdk->sdk->putRule($request);

    if ($response->putRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTargets

<p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\BatchParameters;
use \OpenAPI\OpenAPI\Models\Shared\BatchArrayProperties;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\DeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Shared\EcsParameters;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\HttpParameters;
use \OpenAPI\OpenAPI\Models\Shared\InputTransformer;
use \OpenAPI\OpenAPI\Models\Shared\KinesisParameters;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDataParameters;
use \OpenAPI\OpenAPI\Models\Shared\RetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RunCommandParameters;
use \OpenAPI\OpenAPI\Models\Shared\RunCommandTarget;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameters;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameter;
use \OpenAPI\OpenAPI\Models\Shared\SqsParameters;
use \OpenAPI\OpenAPI\Models\Operations\PutTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTargetsRequest();
    $request->putTargetsRequest = new PutTargetsRequest();
    $request->putTargetsRequest->eventBusName = 'tempore';
    $request->putTargetsRequest->rule = 'cupiditate';
    $request->putTargetsRequest->targets = [
        new Target(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = PutTargetsXAmzTargetEnum::AWS_EVENTS_PUT_TARGETS;

    $response = $sdk->sdk->putTargets($request);

    if ($response->putTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePermission

Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovePermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemovePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemovePermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePermissionRequest();
    $request->removePermissionRequest = new RemovePermissionRequest();
    $request->removePermissionRequest->eventBusName = 'quae';
    $request->removePermissionRequest->removeAllPermissions = false;
    $request->removePermissionRequest->statementId = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = RemovePermissionXAmzTargetEnum::AWS_EVENTS_REMOVE_PERMISSION;

    $response = $sdk->sdk->removePermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTargets

<p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTargetsRequest();
    $request->removeTargetsRequest = new RemoveTargetsRequest();
    $request->removeTargetsRequest->eventBusName = 'ut';
    $request->removeTargetsRequest->force = false;
    $request->removeTargetsRequest->ids = [
        'cupiditate',
        'qui',
        'quae',
    ];
    $request->removeTargetsRequest->rule = 'laudantium';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = RemoveTargetsXAmzTargetEnum::AWS_EVENTS_REMOVE_TARGETS;

    $response = $sdk->sdk->removeTargets($request);

    if ($response->removeTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplay

Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReplayRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartReplayRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplayDestination;
use \OpenAPI\OpenAPI\Models\Operations\StartReplayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReplayRequest();
    $request->startReplayRequest = new StartReplayRequest();
    $request->startReplayRequest->description = 'ipsum';
    $request->startReplayRequest->destination = new ReplayDestination();
    $request->startReplayRequest->destination->arn = 'delectus';
    $request->startReplayRequest->destination->filterArns = [
        'consectetur',
        'vero',
    ];
    $request->startReplayRequest->eventEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T23:11:25.857Z');
    $request->startReplayRequest->eventSourceArn = 'hic';
    $request->startReplayRequest->eventStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-27T13:58:14.379Z');
    $request->startReplayRequest->replayName = 'odio';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = StartReplayXAmzTargetEnum::AWS_EVENTS_START_REPLAY;

    $response = $sdk->sdk->startReplay($request);

    if ($response->startReplayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'sequi';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_EVENTS_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testEventPattern

<p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestEventPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestEventPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestEventPatternXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestEventPatternRequest();
    $request->testEventPatternRequest = new TestEventPatternRequest();
    $request->testEventPatternRequest->event = 'maiores';
    $request->testEventPatternRequest->eventPattern = 'doloribus';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = TestEventPatternXAmzTargetEnum::AWS_EVENTS_TEST_EVENT_PATTERN;

    $response = $sdk->sdk->testEventPattern($request);

    if ($response->testEventPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'ea';
    $request->untagResourceRequest->tagKeys = [
        'vel',
    ];
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_EVENTS_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiDestination

Updates an API destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApiDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiDestinationHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiDestinationRequest();
    $request->updateApiDestinationRequest = new UpdateApiDestinationRequest();
    $request->updateApiDestinationRequest->connectionArn = 'maiores';
    $request->updateApiDestinationRequest->description = 'quasi';
    $request->updateApiDestinationRequest->httpMethod = ApiDestinationHttpMethodEnum::HEAD;
    $request->updateApiDestinationRequest->invocationEndpoint = 'nulla';
    $request->updateApiDestinationRequest->invocationRateLimitPerSecond = 569211;
    $request->updateApiDestinationRequest->name = 'Gordon Willms';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UpdateApiDestinationXAmzTargetEnum::AWS_EVENTS_UPDATE_API_DESTINATION;

    $response = $sdk->sdk->updateApiDestination($request);

    if ($response->updateApiDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArchive

Updates the specified archive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArchiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArchiveRequest();
    $request->updateArchiveRequest = new UpdateArchiveRequest();
    $request->updateArchiveRequest->archiveName = 'ea';
    $request->updateArchiveRequest->description = 'quo';
    $request->updateArchiveRequest->eventPattern = 'consectetur';
    $request->updateArchiveRequest->retentionDays = 926213;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = UpdateArchiveXAmzTargetEnum::AWS_EVENTS_UPDATE_ARCHIVE;

    $response = $sdk->sdk->updateArchive($request);

    if ($response->updateArchiveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnection

Updates settings for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionApiKeyAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionBasicAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionHttpParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionBodyParameter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionHeaderParameter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionQueryStringParameter;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionOAuthRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionOAuthClientRequestParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionOAuthHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionAuthorizationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionRequest();
    $request->updateConnectionRequest = new UpdateConnectionRequest();
    $request->updateConnectionRequest->authParameters = new UpdateConnectionAuthRequestParameters();
    $request->updateConnectionRequest->authParameters->apiKeyAuthParameters = new UpdateConnectionApiKeyAuthRequestParameters();
    $request->updateConnectionRequest->authParameters->apiKeyAuthParameters->apiKeyName = 'deleniti';
    $request->updateConnectionRequest->authParameters->apiKeyAuthParameters->apiKeyValue = 'impedit';
    $request->updateConnectionRequest->authParameters->basicAuthParameters = new UpdateConnectionBasicAuthRequestParameters();
    $request->updateConnectionRequest->authParameters->basicAuthParameters->password = 'aliquam';
    $request->updateConnectionRequest->authParameters->basicAuthParameters->username = 'Caesar25';
    $request->updateConnectionRequest->authParameters->invocationHttpParameters = new ConnectionHttpParameters();
    $request->updateConnectionRequest->authParameters->invocationHttpParameters->bodyParameters = [
        new ConnectionBodyParameter(),
    ];
    $request->updateConnectionRequest->authParameters->invocationHttpParameters->headerParameters = [
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
    ];
    $request->updateConnectionRequest->authParameters->invocationHttpParameters->queryStringParameters = [
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
    ];
    $request->updateConnectionRequest->authParameters->oAuthParameters = new UpdateConnectionOAuthRequestParameters();
    $request->updateConnectionRequest->authParameters->oAuthParameters->authorizationEndpoint = 'placeat';
    $request->updateConnectionRequest->authParameters->oAuthParameters->clientParameters = new UpdateConnectionOAuthClientRequestParameters();
    $request->updateConnectionRequest->authParameters->oAuthParameters->clientParameters->clientID = 'velit';
    $request->updateConnectionRequest->authParameters->oAuthParameters->clientParameters->clientSecret = 'eum';
    $request->updateConnectionRequest->authParameters->oAuthParameters->httpMethod = ConnectionOAuthHttpMethodEnum::POST;
    $request->updateConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters = new ConnectionHttpParameters();
    $request->updateConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->bodyParameters = [
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
        new ConnectionBodyParameter(),
    ];
    $request->updateConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->headerParameters = [
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
        new ConnectionHeaderParameter(),
    ];
    $request->updateConnectionRequest->authParameters->oAuthParameters->oAuthHttpParameters->queryStringParameters = [
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
        new ConnectionQueryStringParameter(),
    ];
    $request->updateConnectionRequest->authorizationType = ConnectionAuthorizationTypeEnum::API_KEY;
    $request->updateConnectionRequest->description = 'voluptas';
    $request->updateConnectionRequest->name = 'Ryan Glover';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = UpdateConnectionXAmzTargetEnum::AWS_EVENTS_UPDATE_CONNECTION;

    $response = $sdk->sdk->updateConnection($request);

    if ($response->updateConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
