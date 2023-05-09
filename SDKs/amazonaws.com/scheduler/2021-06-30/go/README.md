# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/scheduler/2021-06-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateSchedule(ctx, operations.CreateScheduleRequest{
        Name: "Terrence Rau",
        RequestBody: operations.CreateScheduleRequestBody{
            ClientToken: sdk.String("nulla"),
            Description: sdk.String("corrupti"),
            EndDate: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: sdk.Int64(623564),
                Mode: shared.FlexibleTimeWindowModeEnumFlexible.ToPointer(),
            },
            GroupName: sdk.String("suscipit"),
            KmsKeyArn: sdk.String("iure"),
            ScheduleExpression: "magnam",
            ScheduleExpressionTimezone: sdk.String("debitis"),
            StartDate: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
            State: operations.CreateScheduleRequestBodyStateEnumEnabled.ToPointer(),
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: sdk.String("suscipit"),
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: sdk.String("molestiae"),
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(812169),
                            CapacityProvider: "voluptatum",
                            Weight: sdk.Int64(479977),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(568045),
                            CapacityProvider: "nisi",
                            Weight: sdk.Int64(925597),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(836079),
                            CapacityProvider: "ab",
                            Weight: sdk.Int64(337396),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(87129),
                            CapacityProvider: "deserunt",
                            Weight: sdk.Int64(20218),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("ipsam"),
                    LaunchType: shared.LaunchTypeEnumExternal.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                            SecurityGroups: []string{
                                "odit",
                                "at",
                                "at",
                                "maiores",
                            },
                            Subnets: []string{
                                "quod",
                                "quod",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("totam"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("dolorum"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("officia"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("fugit"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("hic"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("totam"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("beatae"),
                    Tags: []map[string]string{
                        map[string]string{
                            "modi": "qui",
                            "impedit": "cum",
                        },
                        map[string]string{
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                        },
                    },
                    TaskCount: sdk.Int64(324141),
                    TaskDefinitionArn: "natus",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "sed",
                    Source: "iste",
                },
                Input: sdk.String("dolor"),
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "natus",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: sdk.Int64(386489),
                    MaximumRetryAttempts: sdk.Int64(943749),
                },
                RoleArn: sdk.String("saepe"),
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "Stacy Moore",
                            Value: "quidem",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "Brenda Wisozk",
                            Value: "laborum",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "Connie Herzog",
                            Value: "enim",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: sdk.String("omnis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScheduleOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateSchedule](docs/sdk/README.md#createschedule) - Creates the specified schedule.
* [CreateScheduleGroup](docs/sdk/README.md#createschedulegroup) - Creates the specified schedule group.
* [DeleteSchedule](docs/sdk/README.md#deleteschedule) - Deletes the specified schedule.
* [DeleteScheduleGroup](docs/sdk/README.md#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [GetSchedule](docs/sdk/README.md#getschedule) - Retrieves the specified schedule.
* [GetScheduleGroup](docs/sdk/README.md#getschedulegroup) - Retrieves the specified schedule group.
* [ListScheduleGroups](docs/sdk/README.md#listschedulegroups) - Returns a paginated list of your schedule groups.
* [ListSchedules](docs/sdk/README.md#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [TagResource](docs/sdk/README.md#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [UpdateSchedule](docs/sdk/README.md#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
