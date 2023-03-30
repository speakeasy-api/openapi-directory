<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateScheduleRequest{
        PathParams: operations.CreateSchedulePathParams{
            Name: "corrupti",
        },
        Headers: operations.CreateScheduleHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.CreateScheduleRequestBody{
            ClientToken: "vel",
            Description: "error",
            EndDate: "2022-08-06T08:48:54.783Z",
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: 384382,
                Mode: "OFF",
            },
            GroupName: "magnam",
            KmsKeyArn: "debitis",
            ScheduleExpression: "ipsa",
            ScheduleExpressionTimezone: "delectus",
            StartDate: "2022-12-20T14:22:42.320Z",
            State: "ENABLED",
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: "molestiae",
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: "minus",
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 528895,
                            CapacityProvider: "iusto",
                            Weight: 568045,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 392785,
                            CapacityProvider: "recusandae",
                            Weight: 836079,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 71036,
                            CapacityProvider: "quis",
                            Weight: 87129,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 648172,
                            CapacityProvider: "perferendis",
                            Weight: 368241,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "repellendus",
                    LaunchType: "EXTERNAL",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "DISABLED",
                            SecurityGroups: []string{
                                "at",
                            },
                            Subnets: []string{
                                "maiores",
                                "molestiae",
                                "quod",
                                "quod",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "totam",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "dolorum",
                            Type: "distinctInstance",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "officia",
                            Type: "spread",
                        },
                        shared.PlacementStrategy{
                            Field: "fugit",
                            Type: "spread",
                        },
                        shared.PlacementStrategy{
                            Field: "hic",
                            Type: "binpack",
                        },
                    },
                    PlatformVersion: "totam",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "beatae",
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
                    TaskCount: 324141,
                    TaskDefinitionArn: "natus",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "sed",
                    Source: "iste",
                },
                Input: "dolor",
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "natus",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: 386489,
                    MaximumRetryAttempts: 943749,
                },
                RoleArn: "saepe",
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "in",
                            Value: "corporis",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "iste",
                            Value: "iure",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "saepe",
                            Value: "quidem",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: "architecto",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateSchedule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScheduleOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->