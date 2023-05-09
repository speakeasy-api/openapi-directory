# SDK

## Overview

<p>With Application Auto Scaling, you can configure automatic scaling for the following resources:</p> <ul> <li> <p>Amazon AppStream 2.0 fleets</p> </li> <li> <p>Amazon Aurora Replicas</p> </li> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p> </li> <li> <p>Amazon ECS services</p> </li> <li> <p>Amazon ElastiCache for Redis clusters (replication groups)</p> </li> <li> <p>Amazon EMR clusters</p> </li> <li> <p>Amazon Keyspaces (for Apache Cassandra) tables</p> </li> <li> <p>Lambda function provisioned concurrency</p> </li> <li> <p>Amazon Managed Streaming for Apache Kafka broker storage</p> </li> <li> <p>Amazon Neptune clusters</p> </li> <li> <p>Amazon SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets (Amazon EC2)</p> </li> <li> <p>Custom resources provided by your own applications or services</p> </li> </ul> <p>To learn more about Application Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User Guide</a>.</p> <p> <b>API Summary</b> </p> <p>The Application Auto Scaling service API includes three key sets of actions: </p> <ul> <li> <p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and retrieve information on existing scalable targets.</p> </li> <li> <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions, and retrieve your recent scaling activity history.</p> </li> <li> <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can suspend and resume (individually or in combination) scale-out activities that are triggered by a scaling policy, scale-in activities that are triggered by a scaling policy, and scheduled scaling.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/application-autoscaling/>
### Available Operations

* [DeleteScalingPolicy](#deletescalingpolicy) - <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [DeleteScheduledAction](#deletescheduledaction) - <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [DeregisterScalableTarget](#deregisterscalabletarget) - <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>
* [DescribeScalableTargets](#describescalabletargets) - <p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>
* [DescribeScalingActivities](#describescalingactivities) - <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
* [DescribeScalingPolicies](#describescalingpolicies) - <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [DescribeScheduledActions](#describescheduledactions) - <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
* [PutScalingPolicy](#putscalingpolicy) - <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>
* [PutScheduledAction](#putscheduledaction) - <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>
* [RegisterScalableTarget](#registerscalabletarget) - <p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>
* [TagResource](#tagresource) - <p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
* [UntagResource](#untagresource) - Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

## DeleteScalingPolicy

<p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>

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
    res, err := s.SDK.DeleteScalingPolicy(ctx, operations.DeleteScalingPolicyRequest{
        DeleteScalingPolicyRequest: shared.DeleteScalingPolicyRequest{
            PolicyName: "suscipit",
            ResourceID: "iure",
            ScalableDimension: shared.ScalableDimensionEnumDynamodbTableWriteCapacityUnits,
            ServiceNamespace: shared.ServiceNamespaceEnumElasticache,
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.DeleteScalingPolicyXAmzTargetEnumAnyScaleFrontendServiceDeleteScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScalingPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteScheduledAction

<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>

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
    res, err := s.SDK.DeleteScheduledAction(ctx, operations.DeleteScheduledActionRequest{
        DeleteScheduledActionRequest: shared.DeleteScheduledActionRequest{
            ResourceID: "voluptatum",
            ScalableDimension: shared.ScalableDimensionEnumSagemakerVariantDesiredInstanceCount,
            ScheduledActionName: "excepturi",
            ServiceNamespace: shared.ServiceNamespaceEnumRds,
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteScheduledActionXAmzTargetEnumAnyScaleFrontendServiceDeleteScheduledAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScheduledActionResponse != nil {
        // handle response
    }
}
```

## DeregisterScalableTarget

<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>

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
    res, err := s.SDK.DeregisterScalableTarget(ctx, operations.DeregisterScalableTargetRequest{
        DeregisterScalableTargetRequest: shared.DeregisterScalableTargetRequest{
            ResourceID: "ipsam",
            ScalableDimension: shared.ScalableDimensionEnumKafkaBrokerStorageVolumeSize,
            ServiceNamespace: shared.ServiceNamespaceEnumNeptune,
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeregisterScalableTargetXAmzTargetEnumAnyScaleFrontendServiceDeregisterScalableTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterScalableTargetResponse != nil {
        // handle response
    }
}
```

## DescribeScalableTargets

<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>

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
    res, err := s.SDK.DescribeScalableTargets(ctx, operations.DescribeScalableTargetsRequest{
        DescribeScalableTargetsRequest: shared.DescribeScalableTargetsRequest{
            MaxResults: sdk.Int64(800911),
            NextToken: sdk.String("esse"),
            ResourceIds: []string{
                "porro",
                "dolorum",
                "dicta",
            },
            ScalableDimension: shared.ScalableDimensionEnumCassandraTableReadCapacityUnits.ToPointer(),
            ServiceNamespace: shared.ServiceNamespaceEnumComprehend,
        },
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("fugit"),
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DescribeScalableTargetsXAmzTargetEnumAnyScaleFrontendServiceDescribeScalableTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalableTargetsResponse != nil {
        // handle response
    }
}
```

## DescribeScalingActivities

<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>

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
    res, err := s.SDK.DescribeScalingActivities(ctx, operations.DescribeScalingActivitiesRequest{
        DescribeScalingActivitiesRequest: shared.DescribeScalingActivitiesRequest{
            IncludeNotScaledActivities: sdk.Bool(false),
            MaxResults: sdk.Int64(264555),
            NextToken: sdk.String("qui"),
            ResourceID: sdk.String("impedit"),
            ScalableDimension: shared.ScalableDimensionEnumCassandraTableReadCapacityUnits.ToPointer(),
            ServiceNamespace: shared.ServiceNamespaceEnumSagemaker,
        },
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeScalingActivitiesXAmzTargetEnumAnyScaleFrontendServiceDescribeScalingActivities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalingActivitiesResponse != nil {
        // handle response
    }
}
```

## DescribeScalingPolicies

<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>

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
    res, err := s.SDK.DescribeScalingPolicies(ctx, operations.DescribeScalingPoliciesRequest{
        DescribeScalingPoliciesRequest: shared.DescribeScalingPoliciesRequest{
            MaxResults: sdk.Int64(616934),
            NextToken: sdk.String("laboriosam"),
            PolicyNames: []string{
                "saepe",
                "fuga",
                "in",
                "corporis",
            },
            ResourceID: sdk.String("iste"),
            ScalableDimension: shared.ScalableDimensionEnumRdsClusterReadReplicaCount.ToPointer(),
            ServiceNamespace: shared.ServiceNamespaceEnumElasticache,
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeScalingPoliciesXAmzTargetEnumAnyScaleFrontendServiceDescribeScalingPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalingPoliciesResponse != nil {
        // handle response
    }
}
```

## DescribeScheduledActions

<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

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
    res, err := s.SDK.DescribeScheduledActions(ctx, operations.DescribeScheduledActionsRequest{
        DescribeScheduledActionsRequest: shared.DescribeScheduledActionsRequest{
            MaxResults: sdk.Int64(358152),
            NextToken: sdk.String("explicabo"),
            ResourceID: sdk.String("nobis"),
            ScalableDimension: shared.ScalableDimensionEnumDynamodbIndexReadCapacityUnits.ToPointer(),
            ScheduledActionNames: []string{
                "nemo",
                "minima",
                "excepturi",
            },
            ServiceNamespace: shared.ServiceNamespaceEnumEcs,
        },
        MaxResults: sdk.String("iure"),
        NextToken: sdk.String("culpa"),
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.DescribeScheduledActionsXAmzTargetEnumAnyScaleFrontendServiceDescribeScheduledActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScheduledActionsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>

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
            ResourceARN: "repellat",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAnyScaleFrontendServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutScalingPolicy

<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>

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
    res, err := s.SDK.PutScalingPolicy(ctx, operations.PutScalingPolicyRequest{
        PutScalingPolicyRequest: shared.PutScalingPolicyRequest{
            PolicyName: "error",
            PolicyType: shared.PolicyTypeEnumStepScaling.ToPointer(),
            ResourceID: "quis",
            ScalableDimension: shared.ScalableDimensionEnumElasticmapreduceInstancegroupInstanceCount,
            ServiceNamespace: shared.ServiceNamespaceEnumLambda,
            StepScalingPolicyConfiguration: &shared.StepScalingPolicyConfiguration{
                AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                Cooldown: sdk.Int64(317202),
                MetricAggregationType: shared.MetricAggregationTypeEnumAverage.ToPointer(),
                MinAdjustmentMagnitude: sdk.Int64(778346),
                StepAdjustments: []shared.StepAdjustment{
                    shared.StepAdjustment{
                        MetricIntervalLowerBound: sdk.Float64(9495.72),
                        MetricIntervalUpperBound: sdk.Float64(3687.25),
                        ScalingAdjustment: 662527,
                    },
                },
            },
            TargetTrackingScalingPolicyConfiguration: &shared.TargetTrackingScalingPolicyConfiguration{
                CustomizedMetricSpecification: &shared.CustomizedMetricSpecification{
                    Dimensions: []shared.MetricDimension{
                        shared.MetricDimension{
                            Name: "Joyce Mueller",
                            Value: "quasi",
                        },
                        shared.MetricDimension{
                            Name: "Jan Thiel",
                            Value: "voluptatibus",
                        },
                        shared.MetricDimension{
                            Name: "Geneva Klein Jr.",
                            Value: "reprehenderit",
                        },
                        shared.MetricDimension{
                            Name: "Shawna Carter",
                            Value: "iusto",
                        },
                    },
                    MetricName: sdk.String("dicta"),
                    Metrics: []shared.TargetTrackingMetricDataQuery{
                        shared.TargetTrackingMetricDataQuery{
                            Expression: sdk.String("enim"),
                            ID: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
                            Label: sdk.String("cupiditate"),
                            MetricStat: &shared.TargetTrackingMetricStat{
                                Metric: shared.TargetTrackingMetric{
                                    Dimensions: []shared.TargetTrackingMetricDimension{
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Louise Simonis Sr.",
                                            Value: "dolorum",
                                        },
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Eddie Prosacco",
                                            Value: "delectus",
                                        },
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Ethel Roob",
                                            Value: "provident",
                                        },
                                    },
                                    MetricName: sdk.String("necessitatibus"),
                                    Namespace: sdk.String("sint"),
                                },
                                Stat: "officia",
                                Unit: sdk.String("dolor"),
                            },
                            ReturnData: sdk.Bool(false),
                        },
                        shared.TargetTrackingMetricDataQuery{
                            Expression: sdk.String("debitis"),
                            ID: "fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66",
                            Label: sdk.String("natus"),
                            MetricStat: &shared.TargetTrackingMetricStat{
                                Metric: shared.TargetTrackingMetric{
                                    Dimensions: []shared.TargetTrackingMetricDimension{
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Dorothy Kovacek",
                                            Value: "id",
                                        },
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Jamie Hoppe",
                                            Value: "eum",
                                        },
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Brandon Brakus V",
                                            Value: "ullam",
                                        },
                                    },
                                    MetricName: sdk.String("provident"),
                                    Namespace: sdk.String("quos"),
                                },
                                Stat: "sint",
                                Unit: sdk.String("accusantium"),
                            },
                            ReturnData: sdk.Bool(false),
                        },
                        shared.TargetTrackingMetricDataQuery{
                            Expression: sdk.String("mollitia"),
                            ID: "fa563e25-16fe-44c8-b711-e5b7fd2ed028",
                            Label: sdk.String("natus"),
                            MetricStat: &shared.TargetTrackingMetricStat{
                                Metric: shared.TargetTrackingMetric{
                                    Dimensions: []shared.TargetTrackingMetricDimension{
                                        shared.TargetTrackingMetricDimension{
                                            Name: "Angelica Stanton",
                                            Value: "ea",
                                        },
                                    },
                                    MetricName: sdk.String("excepturi"),
                                    Namespace: sdk.String("odit"),
                                },
                                Stat: "ea",
                                Unit: sdk.String("accusantium"),
                            },
                            ReturnData: sdk.Bool(false),
                        },
                    },
                    Namespace: sdk.String("ab"),
                    Statistic: shared.MetricStatisticEnumSum.ToPointer(),
                    Unit: sdk.String("quidem"),
                },
                DisableScaleIn: sdk.Bool(false),
                PredefinedMetricSpecification: &shared.PredefinedMetricSpecification{
                    PredefinedMetricType: shared.MetricTypeEnumEc2SpotFleetRequestAverageNetworkOut,
                    ResourceLabel: sdk.String("voluptate"),
                },
                ScaleInCooldown: sdk.Int64(420075),
                ScaleOutCooldown: sdk.Int64(722056),
                TargetValue: 505.88,
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.PutScalingPolicyXAmzTargetEnumAnyScaleFrontendServicePutScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutScalingPolicyResponse != nil {
        // handle response
    }
}
```

## PutScheduledAction

<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>

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
    res, err := s.SDK.PutScheduledAction(ctx, operations.PutScheduledActionRequest{
        PutScheduledActionRequest: shared.PutScheduledActionRequest{
            EndTime: types.MustTimeFromString("2021-12-02T19:46:35.147Z"),
            ResourceID: "hic",
            ScalableDimension: shared.ScalableDimensionEnumCassandraTableReadCapacityUnits,
            ScalableTargetAction: &shared.ScalableTargetAction{
                MaxCapacity: sdk.Int64(749999),
                MinCapacity: sdk.Int64(171629),
            },
            Schedule: sdk.String("quis"),
            ScheduledActionName: "totam",
            ServiceNamespace: shared.ServiceNamespaceEnumSagemaker,
            StartTime: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
            Timezone: sdk.String("nesciunt"),
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.PutScheduledActionXAmzTargetEnumAnyScaleFrontendServicePutScheduledAction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutScheduledActionResponse != nil {
        // handle response
    }
}
```

## RegisterScalableTarget

<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>

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
    res, err := s.SDK.RegisterScalableTarget(ctx, operations.RegisterScalableTargetRequest{
        RegisterScalableTargetRequest: shared.RegisterScalableTargetRequest{
            MaxCapacity: sdk.Int64(345352),
            MinCapacity: sdk.Int64(944120),
            ResourceID: "recusandae",
            RoleARN: sdk.String("omnis"),
            ScalableDimension: shared.ScalableDimensionEnumCassandraTableReadCapacityUnits,
            ServiceNamespace: shared.ServiceNamespaceEnumComprehend,
            SuspendedState: &shared.SuspendedState{
                DynamicScalingInSuspended: sdk.Bool(false),
                DynamicScalingOutSuspended: sdk.Bool(false),
                ScheduledScalingSuspended: sdk.Bool(false),
            },
            Tags: map[string]string{
                "porro": "consequuntur",
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.RegisterScalableTargetXAmzTargetEnumAnyScaleFrontendServiceRegisterScalableTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterScalableTargetResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>

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
            ResourceARN: "earum",
            Tags: map[string]string{
                "iste": "dolorum",
                "deleniti": "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAnyScaleFrontendServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.

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
            ResourceARN: "dolorem",
            TagKeys: []string{
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAnyScaleFrontendServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
