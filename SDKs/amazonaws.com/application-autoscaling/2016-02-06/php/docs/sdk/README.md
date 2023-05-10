# SDK

## Overview

<p>With Application Auto Scaling, you can configure automatic scaling for the following resources:</p> <ul> <li> <p>Amazon AppStream 2.0 fleets</p> </li> <li> <p>Amazon Aurora Replicas</p> </li> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p> </li> <li> <p>Amazon ECS services</p> </li> <li> <p>Amazon ElastiCache for Redis clusters (replication groups)</p> </li> <li> <p>Amazon EMR clusters</p> </li> <li> <p>Amazon Keyspaces (for Apache Cassandra) tables</p> </li> <li> <p>Lambda function provisioned concurrency</p> </li> <li> <p>Amazon Managed Streaming for Apache Kafka broker storage</p> </li> <li> <p>Amazon Neptune clusters</p> </li> <li> <p>Amazon SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets (Amazon EC2)</p> </li> <li> <p>Custom resources provided by your own applications or services</p> </li> </ul> <p>To learn more about Application Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p> <p> <b>API Summary</b> </p> <p>The Application Auto Scaling service API includes three key sets of actions: </p> <ul> <li> <p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and retrieve information on existing scalable targets.</p> </li> <li> <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions, and retrieve your recent scaling activity history.</p> </li> <li> <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can suspend and resume (individually or in combination) scale-out activities that are triggered by a scaling policy, scale-in activities that are triggered by a scaling policy, and scheduled scaling.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/application-autoscaling/>
### Available Operations

* [deleteScalingPolicy](#deletescalingpolicy) - <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [deleteScheduledAction](#deletescheduledaction) - <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [deregisterScalableTarget](#deregisterscalabletarget) - <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>
* [describeScalableTargets](#describescalabletargets) - <p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>
* [describeScalingActivities](#describescalingactivities) - <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
* [describeScalingPolicies](#describescalingpolicies) - <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [describeScheduledActions](#describescheduledactions) - <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [listTagsForResource](#listtagsforresource) - <p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
* [putScalingPolicy](#putscalingpolicy) - <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>
* [putScheduledAction](#putscheduledaction) - <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>
* [registerScalableTarget](#registerscalabletarget) - <p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>
* [tagResource](#tagresource) - <p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [untagResource](#untagresource) - Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

## deleteScalingPolicy

<p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScalingPolicyRequest();
    $request->deleteScalingPolicyRequest = new DeleteScalingPolicyRequest();
    $request->deleteScalingPolicyRequest->policyName = 'suscipit';
    $request->deleteScalingPolicyRequest->resourceId = 'iure';
    $request->deleteScalingPolicyRequest->scalableDimension = ScalableDimensionEnum::DYNAMODB_TABLE_WRITE_CAPACITY_UNITS;
    $request->deleteScalingPolicyRequest->serviceNamespace = ServiceNamespaceEnum::ELASTICACHE;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = DeleteScalingPolicyXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DELETE_SCALING_POLICY;

    $response = $sdk->sdk->deleteScalingPolicy($request);

    if ($response->deleteScalingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScheduledAction

<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduledActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduledActionRequest();
    $request->deleteScheduledActionRequest = new DeleteScheduledActionRequest();
    $request->deleteScheduledActionRequest->resourceId = 'voluptatum';
    $request->deleteScheduledActionRequest->scalableDimension = ScalableDimensionEnum::SAGEMAKER_VARIANT_DESIRED_INSTANCE_COUNT;
    $request->deleteScheduledActionRequest->scheduledActionName = 'excepturi';
    $request->deleteScheduledActionRequest->serviceNamespace = ServiceNamespaceEnum::RDS;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteScheduledActionXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DELETE_SCHEDULED_ACTION;

    $response = $sdk->sdk->deleteScheduledAction($request);

    if ($response->deleteScheduledActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterScalableTarget

<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterScalableTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterScalableTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterScalableTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterScalableTargetRequest();
    $request->deregisterScalableTargetRequest = new DeregisterScalableTargetRequest();
    $request->deregisterScalableTargetRequest->resourceId = 'ipsam';
    $request->deregisterScalableTargetRequest->scalableDimension = ScalableDimensionEnum::KAFKA_BROKER_STORAGE_VOLUME_SIZE;
    $request->deregisterScalableTargetRequest->serviceNamespace = ServiceNamespaceEnum::NEPTUNE;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeregisterScalableTargetXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DEREGISTER_SCALABLE_TARGET;

    $response = $sdk->sdk->deregisterScalableTarget($request);

    if ($response->deregisterScalableTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalableTargets

<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalableTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalableTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalableTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalableTargetsRequest();
    $request->describeScalableTargetsRequest = new DescribeScalableTargetsRequest();
    $request->describeScalableTargetsRequest->maxResults = 800911;
    $request->describeScalableTargetsRequest->nextToken = 'esse';
    $request->describeScalableTargetsRequest->resourceIds = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->describeScalableTargetsRequest->scalableDimension = ScalableDimensionEnum::CASSANDRA_TABLE_READ_CAPACITY_UNITS;
    $request->describeScalableTargetsRequest->serviceNamespace = ServiceNamespaceEnum::COMPREHEND;
    $request->maxResults = 'occaecati';
    $request->nextToken = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeScalableTargetsXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALABLE_TARGETS;

    $response = $sdk->sdk->describeScalableTargets($request);

    if ($response->describeScalableTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalingActivities

<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalingActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingActivitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalingActivitiesRequest();
    $request->describeScalingActivitiesRequest = new DescribeScalingActivitiesRequest();
    $request->describeScalingActivitiesRequest->includeNotScaledActivities = false;
    $request->describeScalingActivitiesRequest->maxResults = 264555;
    $request->describeScalingActivitiesRequest->nextToken = 'qui';
    $request->describeScalingActivitiesRequest->resourceId = 'impedit';
    $request->describeScalingActivitiesRequest->scalableDimension = ScalableDimensionEnum::CASSANDRA_TABLE_READ_CAPACITY_UNITS;
    $request->describeScalingActivitiesRequest->serviceNamespace = ServiceNamespaceEnum::SAGEMAKER;
    $request->maxResults = 'ipsum';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeScalingActivitiesXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALING_ACTIVITIES;

    $response = $sdk->sdk->describeScalingActivities($request);

    if ($response->describeScalingActivitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalingPolicies

<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalingPoliciesRequest();
    $request->describeScalingPoliciesRequest = new DescribeScalingPoliciesRequest();
    $request->describeScalingPoliciesRequest->maxResults = 616934;
    $request->describeScalingPoliciesRequest->nextToken = 'laboriosam';
    $request->describeScalingPoliciesRequest->policyNames = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->describeScalingPoliciesRequest->resourceId = 'iste';
    $request->describeScalingPoliciesRequest->scalableDimension = ScalableDimensionEnum::RDS_CLUSTER_READ_REPLICA_COUNT;
    $request->describeScalingPoliciesRequest->serviceNamespace = ServiceNamespaceEnum::ELASTICACHE;
    $request->maxResults = 'quidem';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeScalingPoliciesXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALING_POLICIES;

    $response = $sdk->sdk->describeScalingPolicies($request);

    if ($response->describeScalingPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScheduledActions

<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScheduledActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScheduledActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScheduledActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScheduledActionsRequest();
    $request->describeScheduledActionsRequest = new DescribeScheduledActionsRequest();
    $request->describeScheduledActionsRequest->maxResults = 358152;
    $request->describeScheduledActionsRequest->nextToken = 'explicabo';
    $request->describeScheduledActionsRequest->resourceId = 'nobis';
    $request->describeScheduledActionsRequest->scalableDimension = ScalableDimensionEnum::DYNAMODB_INDEX_READ_CAPACITY_UNITS;
    $request->describeScheduledActionsRequest->scheduledActionNames = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->describeScheduledActionsRequest->serviceNamespace = ServiceNamespaceEnum::ECS;
    $request->maxResults = 'iure';
    $request->nextToken = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeScheduledActionsXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCHEDULED_ACTIONS;

    $response = $sdk->sdk->describeScheduledActions($request);

    if ($response->describeScheduledActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>

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
    $request->listTagsForResourceRequest->resourceARN = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putScalingPolicy

<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepScalingPolicyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingScalingPolicyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomizedMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingMetricDataQuery;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingMetricStat;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingMetric;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingMetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredefinedMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutScalingPolicyRequest();
    $request->putScalingPolicyRequest = new PutScalingPolicyRequest();
    $request->putScalingPolicyRequest->policyName = 'error';
    $request->putScalingPolicyRequest->policyType = PolicyTypeEnum::STEP_SCALING;
    $request->putScalingPolicyRequest->resourceId = 'quis';
    $request->putScalingPolicyRequest->scalableDimension = ScalableDimensionEnum::ELASTICMAPREDUCE_INSTANCEGROUP_INSTANCE_COUNT;
    $request->putScalingPolicyRequest->serviceNamespace = ServiceNamespaceEnum::LAMBDA;
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration = new StepScalingPolicyConfiguration();
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration->adjustmentType = AdjustmentTypeEnum::PERCENT_CHANGE_IN_CAPACITY;
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration->cooldown = 317202;
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration->metricAggregationType = MetricAggregationTypeEnum::AVERAGE;
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration->minAdjustmentMagnitude = 778346;
    $request->putScalingPolicyRequest->stepScalingPolicyConfiguration->stepAdjustments = [
        new StepAdjustment(),
    ];
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration = new TargetTrackingScalingPolicyConfiguration();
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification = new CustomizedMetricSpecification();
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->dimensions = [
        new MetricDimension(),
        new MetricDimension(),
        new MetricDimension(),
        new MetricDimension(),
    ];
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->metricName = 'ipsam';
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->metrics = [
        new TargetTrackingMetricDataQuery(),
        new TargetTrackingMetricDataQuery(),
        new TargetTrackingMetricDataQuery(),
    ];
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->namespace = 'possimus';
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->statistic = MetricStatisticEnum::AVERAGE;
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->customizedMetricSpecification->unit = 'quasi';
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->disableScaleIn = false;
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->predefinedMetricSpecification = new PredefinedMetricSpecification();
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->predefinedMetricSpecification->predefinedMetricType = MetricTypeEnum::LAMBDA_PROVISIONED_CONCURRENCY_UTILIZATION;
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->predefinedMetricSpecification->resourceLabel = 'temporibus';
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->scaleInCooldown = 673660;
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->scaleOutCooldown = 96098;
    $request->putScalingPolicyRequest->targetTrackingScalingPolicyConfiguration->targetValue = 9719.45;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = PutScalingPolicyXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_PUT_SCALING_POLICY;

    $response = $sdk->sdk->putScalingPolicy($request);

    if ($response->putScalingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putScheduledAction

<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutScheduledActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalableTargetAction;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutScheduledActionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutScheduledActionRequest();
    $request->putScheduledActionRequest = new PutScheduledActionRequest();
    $request->putScheduledActionRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-06T04:03:03.438Z');
    $request->putScheduledActionRequest->resourceId = 'perferendis';
    $request->putScheduledActionRequest->scalableDimension = ScalableDimensionEnum::ECS_SERVICE_DESIRED_COUNT;
    $request->putScheduledActionRequest->scalableTargetAction = new ScalableTargetAction();
    $request->putScheduledActionRequest->scalableTargetAction->maxCapacity = 441711;
    $request->putScheduledActionRequest->scalableTargetAction->minCapacity = 282807;
    $request->putScheduledActionRequest->schedule = 'maiores';
    $request->putScheduledActionRequest->scheduledActionName = 'dicta';
    $request->putScheduledActionRequest->serviceNamespace = ServiceNamespaceEnum::RDS;
    $request->putScheduledActionRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T11:22:20.922Z');
    $request->putScheduledActionRequest->timezone = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = PutScheduledActionXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_PUT_SCHEDULED_ACTION;

    $response = $sdk->sdk->putScheduledAction($request);

    if ($response->putScheduledActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerScalableTarget

<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterScalableTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterScalableTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuspendedState;
use \OpenAPI\OpenAPI\Models\Operations\RegisterScalableTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterScalableTargetRequest();
    $request->registerScalableTargetRequest = new RegisterScalableTargetRequest();
    $request->registerScalableTargetRequest->maxCapacity = 692472;
    $request->registerScalableTargetRequest->minCapacity = 565189;
    $request->registerScalableTargetRequest->resourceId = 'excepturi';
    $request->registerScalableTargetRequest->roleARN = 'pariatur';
    $request->registerScalableTargetRequest->scalableDimension = ScalableDimensionEnum::DYNAMODB_TABLE_WRITE_CAPACITY_UNITS;
    $request->registerScalableTargetRequest->serviceNamespace = ServiceNamespaceEnum::CUSTOM_RESOURCE;
    $request->registerScalableTargetRequest->suspendedState = new SuspendedState();
    $request->registerScalableTargetRequest->suspendedState->dynamicScalingInSuspended = false;
    $request->registerScalableTargetRequest->suspendedState->dynamicScalingOutSuspended = false;
    $request->registerScalableTargetRequest->suspendedState->scheduledScalingSuspended = false;
    $request->registerScalableTargetRequest->tags = [
        'voluptates' => 'quasi',
        'repudiandae' => 'sint',
        'veritatis' => 'itaque',
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = RegisterScalableTargetXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_REGISTER_SCALABLE_TARGET;

    $response = $sdk->sdk->registerScalableTarget($request);

    if ($response->registerScalableTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'distinctio';
    $request->tagResourceRequest->tags = [
        'labore' => 'modi',
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
        'perferendis' => 'magni',
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

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
    $request->untagResourceRequest->resourceARN = 'facilis';
    $request->untagResourceRequest->tagKeys = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
