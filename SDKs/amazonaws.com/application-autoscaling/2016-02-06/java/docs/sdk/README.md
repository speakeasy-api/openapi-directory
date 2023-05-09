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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteScalingPolicyResponse;
import org.openapis.openapi.models.operations.DeleteScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScalingPolicyRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScalingPolicyRequest req = new DeleteScalingPolicyRequest(                new DeleteScalingPolicyRequest("magnam", "debitis", ScalableDimensionEnum.EC2_SPOT_FLEET_REQUEST_TARGET_CAPACITY, ServiceNamespaceEnum.NEPTUNE);, DeleteScalingPolicyXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DELETE_SCALING_POLICY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            DeleteScalingPolicyResponse res = sdk.sdk.deleteScalingPolicy(req);

            if (res.deleteScalingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScheduledAction

<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScheduledActionRequest;
import org.openapis.openapi.models.operations.DeleteScheduledActionResponse;
import org.openapis.openapi.models.operations.DeleteScheduledActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScheduledActionRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScheduledActionRequest req = new DeleteScheduledActionRequest(                new DeleteScheduledActionRequest("nisi", ScalableDimensionEnum.ELASTICACHE_REPLICATION_GROUP_REPLICAS, "temporibus", ServiceNamespaceEnum.ECS);, DeleteScheduledActionXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DELETE_SCHEDULED_ACTION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            DeleteScheduledActionResponse res = sdk.sdk.deleteScheduledAction(req);

            if (res.deleteScheduledActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterScalableTarget

<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterScalableTargetRequest;
import org.openapis.openapi.models.operations.DeregisterScalableTargetResponse;
import org.openapis.openapi.models.operations.DeregisterScalableTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterScalableTargetRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterScalableTargetRequest req = new DeregisterScalableTargetRequest(                new DeregisterScalableTargetRequest("odit", ScalableDimensionEnum.ELASTICACHE_REPLICATION_GROUP_NODE_GROUPS, ServiceNamespaceEnum.ELASTICACHE);, DeregisterScalableTargetXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DEREGISTER_SCALABLE_TARGET) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }};            

            DeregisterScalableTargetResponse res = sdk.sdk.deregisterScalableTarget(req);

            if (res.deregisterScalableTargetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalableTargets

<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalableTargetsRequest;
import org.openapis.openapi.models.operations.DescribeScalableTargetsResponse;
import org.openapis.openapi.models.operations.DescribeScalableTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScalableTargetsRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalableTargetsRequest req = new DescribeScalableTargetsRequest(                new DescribeScalableTargetsRequest(ServiceNamespaceEnum.ELASTICMAPREDUCE) {{
                                maxResults = 720633L;
                                nextToken = "officia";
                                resourceIds = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                scalableDimension = ScalableDimensionEnum.CASSANDRA_TABLE_WRITE_CAPACITY_UNITS;
                            }};, DescribeScalableTargetsXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALABLE_TARGETS) {{
                maxResults = "totam";
                nextToken = "beatae";
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            DescribeScalableTargetsResponse res = sdk.sdk.describeScalableTargets(req);

            if (res.describeScalableTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalingActivities

<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalingActivitiesRequest;
import org.openapis.openapi.models.operations.DescribeScalingActivitiesResponse;
import org.openapis.openapi.models.operations.DescribeScalingActivitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScalingActivitiesRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalingActivitiesRequest req = new DescribeScalingActivitiesRequest(                new DescribeScalingActivitiesRequest(ServiceNamespaceEnum.CUSTOM_RESOURCE) {{
                                includeNotScaledActivities = false;
                                maxResults = 135218L;
                                nextToken = "perferendis";
                                resourceId = "ad";
                                scalableDimension = ScalableDimensionEnum.COMPREHEND_ENTITY_RECOGNIZER_ENDPOINT_DESIRED_INFERENCE_UNITS;
                            }};, DescribeScalingActivitiesXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALING_ACTIVITIES) {{
                maxResults = "sed";
                nextToken = "iste";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DescribeScalingActivitiesResponse res = sdk.sdk.describeScalingActivities(req);

            if (res.describeScalingActivitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalingPolicies

<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesRequest;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesResponse;
import org.openapis.openapi.models.operations.DescribeScalingPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScalingPoliciesRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalingPoliciesRequest req = new DescribeScalingPoliciesRequest(                new DescribeScalingPoliciesRequest(ServiceNamespaceEnum.COMPREHEND) {{
                                maxResults = 437032L;
                                nextToken = "saepe";
                                policyNames = new String[]{{
                                    add("architecto"),
                                    add("ipsa"),
                                    add("reiciendis"),
                                }};
                                resourceId = "est";
                                scalableDimension = ScalableDimensionEnum.LAMBDA_FUNCTION_PROVISIONED_CONCURRENCY;
                            }};, DescribeScalingPoliciesXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALING_POLICIES) {{
                maxResults = "laborum";
                nextToken = "dolores";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            DescribeScalingPoliciesResponse res = sdk.sdk.describeScalingPolicies(req);

            if (res.describeScalingPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScheduledActions

<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScheduledActionsRequest;
import org.openapis.openapi.models.operations.DescribeScheduledActionsResponse;
import org.openapis.openapi.models.operations.DescribeScheduledActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScheduledActionsRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScheduledActionsRequest req = new DescribeScheduledActionsRequest(                new DescribeScheduledActionsRequest(ServiceNamespaceEnum.CUSTOM_RESOURCE) {{
                                maxResults = 38425L;
                                nextToken = "iure";
                                resourceId = "culpa";
                                scalableDimension = ScalableDimensionEnum.NEPTUNE_CLUSTER_READ_REPLICA_COUNT;
                                scheduledActionNames = new String[]{{
                                    add("architecto"),
                                    add("mollitia"),
                                    add("dolorem"),
                                    add("culpa"),
                                }};
                            }};, DescribeScheduledActionsXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCHEDULED_ACTIONS) {{
                maxResults = "consequuntur";
                nextToken = "repellat";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeScheduledActionsResponse res = sdk.sdk.describeScheduledActions(req);

            if (res.describeScheduledActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("quia");, ListTagsForResourceXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
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

## putScalingPolicy

<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutScalingPolicyRequest;
import org.openapis.openapi.models.operations.PutScalingPolicyResponse;
import org.openapis.openapi.models.operations.PutScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdjustmentTypeEnum;
import org.openapis.openapi.models.shared.CustomizedMetricSpecification;
import org.openapis.openapi.models.shared.MetricAggregationTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.PolicyTypeEnum;
import org.openapis.openapi.models.shared.PredefinedMetricSpecification;
import org.openapis.openapi.models.shared.PutScalingPolicyRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.StepAdjustment;
import org.openapis.openapi.models.shared.StepScalingPolicyConfiguration;
import org.openapis.openapi.models.shared.TargetTrackingMetric;
import org.openapis.openapi.models.shared.TargetTrackingMetricDataQuery;
import org.openapis.openapi.models.shared.TargetTrackingMetricDimension;
import org.openapis.openapi.models.shared.TargetTrackingMetricStat;
import org.openapis.openapi.models.shared.TargetTrackingScalingPolicyConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutScalingPolicyRequest req = new PutScalingPolicyRequest(                new PutScalingPolicyRequest("tenetur", "ipsam", ScalableDimensionEnum.LAMBDA_FUNCTION_PROVISIONED_CONCURRENCY, ServiceNamespaceEnum.KAFKA) {{
                                policyType = PolicyTypeEnum.STEP_SCALING;
                                stepScalingPolicyConfiguration = new StepScalingPolicyConfiguration() {{
                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                    cooldown = 622846L;
                                    metricAggregationType = MetricAggregationTypeEnum.MAXIMUM;
                                    minAdjustmentMagnitude = 673660L;
                                    stepAdjustments = new org.openapis.openapi.models.shared.StepAdjustment[]{{
                                        add(new StepAdjustment(468651L) {{
                                            metricIntervalLowerBound = 9719.45;
                                            metricIntervalUpperBound = 9764.6;
                                            scalingAdjustment = 878194L;
                                        }}),
                                    }};
                                }};;
                                targetTrackingScalingPolicyConfiguration = new TargetTrackingScalingPolicyConfiguration(5096.24) {{
                                    customizedMetricSpecification = new CustomizedMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension("ut", "maiores") {{
                                                name = "Geneva Klein Jr.";
                                                value = "reprehenderit";
                                            }}),
                                            add(new MetricDimension("accusamus", "commodi") {{
                                                name = "Stacy Gulgowski MD";
                                                value = "enim";
                                            }}),
                                            add(new MetricDimension("pariatur", "modi") {{
                                                name = "Eric Emmerich";
                                                value = "excepturi";
                                            }}),
                                            add(new MetricDimension("itaque", "incidunt") {{
                                                name = "Dr. Jordan Von";
                                                value = "veritatis";
                                            }}),
                                        }};
                                        metricName = "enim";
                                        metrics = new org.openapis.openapi.models.shared.TargetTrackingMetricDataQuery[]{{
                                            add(new TargetTrackingMetricDataQuery("nemo") {{
                                                expression = "est";
                                                id = "d2abd442-6980-42d5-82a9-4bb4f63c969e";
                                                label = "sint";
                                                metricStat = new TargetTrackingMetricStat(                new TargetTrackingMetric() {{
                                                                    dimensions = new org.openapis.openapi.models.shared.TargetTrackingMetricDimension[]{{
                                                                        add(new TargetTrackingMetricDimension("molestiae", "perferendis") {{
                                                                            name = "Sandy Huels";
                                                                            value = "omnis";
                                                                        }}),
                                                                        add(new TargetTrackingMetricDimension("suscipit", "natus") {{
                                                                            name = "Megan Rau";
                                                                            value = "labore";
                                                                        }}),
                                                                        add(new TargetTrackingMetricDimension("excepturi", "ullam") {{
                                                                            name = "Duane Thiel II";
                                                                            value = "et";
                                                                        }}),
                                                                        add(new TargetTrackingMetricDimension("ad", "eum") {{
                                                                            name = "Miss Julian Marvin";
                                                                            value = "mollitia";
                                                                        }}),
                                                                    }};
                                                                    metricName = "dolor";
                                                                    namespace = "necessitatibus";
                                                                }};, "odit") {{
                                                    metric = new TargetTrackingMetric() {{
                                                        dimensions = new org.openapis.openapi.models.shared.TargetTrackingMetricDimension[]{{
                                                            add(new TargetTrackingMetricDimension("illum", "maiores") {{
                                                                name = "Raquel Wilderman";
                                                                value = "in";
                                                            }}),
                                                            add(new TargetTrackingMetricDimension("aliquid", "laborum") {{
                                                                name = "Keith Gulgowski";
                                                                value = "ea";
                                                            }}),
                                                            add(new TargetTrackingMetricDimension("quidem", "provident") {{
                                                                name = "Alfred McClure";
                                                                value = "delectus";
                                                            }}),
                                                        }};
                                                        metricName = "nam";
                                                        namespace = "id";
                                                    }};
                                                    stat = "blanditiis";
                                                    unit = "deleniti";
                                                }};
                                                returnData = false;
                                            }}),
                                        }};
                                        namespace = "quasi";
                                        statistic = MetricStatisticEnum.MAXIMUM;
                                        unit = "doloribus";
                                    }};;
                                    disableScaleIn = false;
                                    predefinedMetricSpecification = new PredefinedMetricSpecification(MetricTypeEnum.ELASTI_CACHE_REPLICA_ENGINE_CPU_UTILIZATION) {{
                                        resourceLabel = "eius";
                                    }};;
                                    scaleInCooldown = 806194L;
                                    scaleOutCooldown = 537023L;
                                }};;
                            }};, PutScalingPolicyXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_PUT_SCALING_POLICY) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            PutScalingPolicyResponse res = sdk.sdk.putScalingPolicy(req);

            if (res.putScalingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putScheduledAction

<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutScheduledActionRequest;
import org.openapis.openapi.models.operations.PutScheduledActionResponse;
import org.openapis.openapi.models.operations.PutScheduledActionXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutScheduledActionRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.ScalableTargetAction;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutScheduledActionRequest req = new PutScheduledActionRequest(                new PutScheduledActionRequest("repellat", ScalableDimensionEnum.KAFKA_BROKER_STORAGE_VOLUME_SIZE, "sed", ServiceNamespaceEnum.ELASTICACHE) {{
                                endTime = OffsetDateTime.parse("2022-11-20T20:56:20.791Z");
                                scalableTargetAction = new ScalableTargetAction() {{
                                    maxCapacity = 162493L;
                                    minCapacity = 508315L;
                                }};;
                                schedule = "natus";
                                startTime = OffsetDateTime.parse("2022-11-16T19:20:12.159Z");
                                timezone = "quo";
                            }};, PutScheduledActionXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_PUT_SCHEDULED_ACTION) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            PutScheduledActionResponse res = sdk.sdk.putScheduledAction(req);

            if (res.putScheduledActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerScalableTarget

<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterScalableTargetRequest;
import org.openapis.openapi.models.operations.RegisterScalableTargetResponse;
import org.openapis.openapi.models.operations.RegisterScalableTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterScalableTargetRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.SuspendedState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterScalableTargetRequest req = new RegisterScalableTargetRequest(                new RegisterScalableTargetRequest("ab", ScalableDimensionEnum.NEPTUNE_CLUSTER_READ_REPLICA_COUNT, ServiceNamespaceEnum.LAMBDA) {{
                                maxCapacity = 373291L;
                                minCapacity = 453543L;
                                roleARN = "autem";
                                suspendedState = new SuspendedState() {{
                                    dynamicScalingInSuspended = false;
                                    dynamicScalingOutSuspended = false;
                                    scheduledScalingSuspended = false;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("eaque", "pariatur");
                                    put("nemo", "voluptatibus");
                                    put("perferendis", "fugiat");
                                }};
                            }};, RegisterScalableTargetXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_REGISTER_SCALABLE_TARGET) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            RegisterScalableTargetResponse res = sdk.sdk.registerScalableTarget(req);

            if (res.registerScalableTargetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("quis",                 new java.util.HashMap<String, String>() {{
                                                put("dignissimos", "eaque");
                                                put("quis", "nesciunt");
                                                put("eos", "perferendis");
                                            }});, TagResourceXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
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

## untagResource

Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

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
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("omnis",                 new String[]{{
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                                add("porro"),
                                            }});, UntagResourceXAmzTargetEnum.ANY_SCALE_FRONTEND_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
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
