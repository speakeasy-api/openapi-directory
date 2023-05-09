# SDK

## Overview

 Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. The following reference lists the available API actions, and data types for EventBridge Scheduler. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/scheduler/>
### Available Operations

* [CreateSchedule](#createschedule) - Creates the specified schedule.
* [CreateScheduleGroup](#createschedulegroup) - Creates the specified schedule group.
* [DeleteSchedule](#deleteschedule) - Deletes the specified schedule.
* [DeleteScheduleGroup](#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [GetSchedule](#getschedule) - Retrieves the specified schedule.
* [GetScheduleGroup](#getschedulegroup) - Retrieves the specified schedule group.
* [ListScheduleGroups](#listschedulegroups) - Returns a paginated list of your schedule groups.
* [ListSchedules](#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [ListTagsForResource](#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [TagResource](#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [UntagResource](#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [UpdateSchedule](#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

## CreateSchedule

Creates the specified schedule.

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
    res, err := s.SDK.CreateSchedule(ctx, operations.CreateScheduleRequest{
        Name: "Juan O'Hara",
        RequestBody: operations.CreateScheduleRequestBody{
            ClientToken: sdk.String("consequuntur"),
            Description: sdk.String("repellat"),
            EndDate: types.MustTimeFromString("2021-11-02T05:58:55.429Z"),
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: sdk.Int64(253291),
                Mode: shared.FlexibleTimeWindowModeEnumOff.ToPointer(),
            },
            GroupName: sdk.String("quam"),
            KmsKeyArn: sdk.String("molestiae"),
            ScheduleExpression: "velit",
            ScheduleExpressionTimezone: sdk.String("error"),
            StartDate: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
            State: operations.CreateScheduleRequestBodyStateEnumEnabled.ToPointer(),
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: sdk.String("laborum"),
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: sdk.String("animi"),
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(138183),
                            CapacityProvider: "quo",
                            Weight: sdk.Int64(196582),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(949572),
                            CapacityProvider: "ipsam",
                            Weight: sdk.Int64(662527),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("possimus"),
                    LaunchType: shared.LaunchTypeEnumEc2.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumEnabled.ToPointer(),
                            SecurityGroups: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                            Subnets: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("ipsa"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("voluptate"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("perferendis"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("reprehenderit"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("dicta"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("dolore"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("dicta"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("enim"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("commodi"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("repudiandae"),
                    Tags: []map[string]string{
                        map[string]string{
                            "quidem": "molestias",
                        },
                    },
                    TaskCount: sdk.Int64(566602),
                    TaskDefinitionArn: "pariatur",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "modi",
                    Source: "praesentium",
                },
                Input: sdk.String("rem"),
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "voluptates",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: sdk.Int64(93940),
                    MaximumRetryAttempts: sdk.Int64(921158),
                },
                RoleArn: sdk.String("sint"),
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "Miss Randall Hamill",
                            Value: "explicabo",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: sdk.String("deserunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScheduleOutput != nil {
        // handle response
    }
}
```

## CreateScheduleGroup

Creates the specified schedule group.

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
    res, err := s.SDK.CreateScheduleGroup(ctx, operations.CreateScheduleGroupRequest{
        Name: "Christopher Cummerata",
        RequestBody: operations.CreateScheduleGroupRequestBody{
            ClientToken: sdk.String("alias"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScheduleGroupOutput != nil {
        // handle response
    }
}
```

## DeleteSchedule

Deletes the specified schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSchedule(ctx, operations.DeleteScheduleRequest{
        Name: "Sergio Hyatt",
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("in"),
        ClientToken: sdk.String("in"),
        GroupName: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScheduleOutput != nil {
        // handle response
    }
}
```

## DeleteScheduleGroup

<p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteScheduleGroup(ctx, operations.DeleteScheduleGroupRequest{
        Name: "Jean Buckridge",
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        ClientToken: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScheduleGroupOutput != nil {
        // handle response
    }
}
```

## GetSchedule

Retrieves the specified schedule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSchedule(ctx, operations.GetScheduleRequest{
        Name: "Toby Pouros",
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        GroupName: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScheduleOutput != nil {
        // handle response
    }
}
```

## GetScheduleGroup

Retrieves the specified schedule group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetScheduleGroup(ctx, operations.GetScheduleGroupRequest{
        Name: "Ms. Arturo Krajcik",
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScheduleGroupOutput != nil {
        // handle response
    }
}
```

## ListScheduleGroups

Returns a paginated list of your schedule groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListScheduleGroups(ctx, operations.ListScheduleGroupsRequest{
        MaxResults: sdk.Int64(428769),
        NamePrefix: sdk.String("vero"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScheduleGroupsOutput != nil {
        // handle response
    }
}
```

## ListSchedules

Returns a paginated list of your EventBridge Scheduler schedules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSchedules(ctx, operations.ListSchedulesRequest{
        MaxResults: sdk.Int64(574325),
        NamePrefix: sdk.String("accusantium"),
        NextToken: sdk.String("mollitia"),
        ScheduleGroup: sdk.String("reiciendis"),
        State: operations.ListSchedulesStateEnumDisabled.ToPointer(),
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchedulesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags associated with the Scheduler resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "iure",
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## TagResource

Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.

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
        RequestBody: operations.TagResourceRequestBody{
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "architecto",
                    Value: "repudiandae",
                },
            },
        },
        ResourceArn: "ullam",
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified EventBridge Scheduler schedule group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "accusantium",
        TagKeys: []string{
            "praesentium",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateSchedule

<p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

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
    res, err := s.SDK.UpdateSchedule(ctx, operations.UpdateScheduleRequest{
        Name: "Miriam Connelly Jr.",
        RequestBody: operations.UpdateScheduleRequestBody{
            ClientToken: sdk.String("maiores"),
            Description: sdk.String("quidem"),
            EndDate: types.MustTimeFromString("2022-07-19T10:57:57.489Z"),
            FlexibleTimeWindow: operations.UpdateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: sdk.Int64(420075),
                Mode: shared.FlexibleTimeWindowModeEnumFlexible.ToPointer(),
            },
            GroupName: sdk.String("eaque"),
            KmsKeyArn: sdk.String("pariatur"),
            ScheduleExpression: "nemo",
            ScheduleExpressionTimezone: sdk.String("voluptatibus"),
            StartDate: types.MustTimeFromString("2022-02-22T15:09:45.631Z"),
            State: operations.UpdateScheduleRequestBodyStateEnumEnabled.ToPointer(),
            Target: operations.UpdateScheduleRequestBodyTarget{
                Arn: sdk.String("aut"),
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: sdk.String("cumque"),
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(944124),
                            CapacityProvider: "libero",
                            Weight: sdk.Int64(749999),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(171629),
                            CapacityProvider: "quis",
                            Weight: sdk.Int64(521037),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("dignissimos"),
                    LaunchType: shared.LaunchTypeEnumEc2.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumEnabled.ToPointer(),
                            SecurityGroups: []string{
                                "eos",
                            },
                            Subnets: []string{
                                "dolores",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("quam"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("vero"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("hic"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("omnis"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("voluptatem"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("consequuntur"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("error"),
                            Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("occaecati"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("rerum"),
                    Tags: []map[string]string{
                        map[string]string{
                            "earum": "modi",
                            "iste": "dolorum",
                            "deleniti": "pariatur",
                            "provident": "nobis",
                        },
                    },
                    TaskCount: sdk.Int64(730122),
                    TaskDefinitionArn: "delectus",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "quaerat",
                    Source: "quos",
                },
                Input: sdk.String("aliquid"),
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "dolorem",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: sdk.Int64(209843),
                    MaximumRetryAttempts: sdk.Int64(222443),
                },
                RoleArn: sdk.String("qui"),
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "Marshall Ritchie",
                            Value: "reiciendis",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: sdk.String("amet"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateScheduleOutput != nil {
        // handle response
    }
}
```
