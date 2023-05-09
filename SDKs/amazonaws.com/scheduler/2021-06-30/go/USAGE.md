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