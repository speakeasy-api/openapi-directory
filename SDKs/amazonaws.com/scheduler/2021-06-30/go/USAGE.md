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
            Name: "unde",
        },
        Headers: operations.CreateScheduleHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.CreateScheduleRequestBody{
            ClientToken: "nihil",
            Description: "fuga",
            EndDate: "2022-08-05T18:30:57.871Z",
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: 384382,
                Mode: "OFF",
            },
            GroupName: "ullam",
            KmsKeyArn: "saepe",
            ScheduleExpression: "inventore",
            ScheduleExpressionTimezone: "sapiente",
            StartDate: "2022-12-20T00:04:45.408Z",
            State: "ENABLED",
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: "voluptatum",
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: "autem",
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 528895,
                            CapacityProvider: "deleniti",
                            Weight: 568045,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 392785,
                            CapacityProvider: "molestiae",
                            Weight: 836079,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 71036,
                            CapacityProvider: "laboriosam",
                            Weight: 87129,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 648172,
                            CapacityProvider: "voluptatem",
                            Weight: 368241,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "fugiat",
                    LaunchType: "EXTERNAL",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "DISABLED",
                            SecurityGroups: []string{
                                "accusamus",
                            },
                            Subnets: []string{
                                "reiciendis",
                                "rem",
                                "quibusdam",
                                "et",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "occaecati",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "soluta",
                            Type: "distinctInstance",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "rerum",
                            Type: "spread",
                        },
                        shared.PlacementStrategy{
                            Field: "qui",
                            Type: "spread",
                        },
                        shared.PlacementStrategy{
                            Field: "rerum",
                            Type: "binpack",
                        },
                    },
                    PlatformVersion: "occaecati",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "esse",
                    Tags: []map[string]string{
                        map[string]string{
                            "amet": "est",
                            "id": "blanditiis",
                        },
                        map[string]string{
                            "similique": "dolores",
                        },
                    },
                    TaskCount: 18789,
                    TaskDefinitionArn: "quia",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "et",
                    Source: "voluptatem",
                },
                Input: "laborum",
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "modi",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: 616934,
                    MaximumRetryAttempts: 386489,
                },
                RoleArn: "earum",
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "soluta",
                            Value: "qui",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "ea",
                            Value: "laborum",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "iusto",
                            Value: "ut",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "optio",
                            Value: "aspernatur",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: "inventore",
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