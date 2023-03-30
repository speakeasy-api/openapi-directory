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
            EndDate: "2022-03-26T09:37:56.283Z",
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: 437587,
                Mode: "OFF",
            },
            GroupName: "debitis",
            KmsKeyArn: "ipsa",
            ScheduleExpression: "delectus",
            ScheduleExpressionTimezone: "tempora",
            StartDate: "2022-07-10T15:39:12.517Z",
            State: "DISABLED",
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: "placeat",
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: "voluptatum",
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 568045,
                            CapacityProvider: "nisi",
                            Weight: 925597,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 836079,
                            CapacityProvider: "ab",
                            Weight: 337396,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "veritatis",
                    LaunchType: "FARGATE",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "ENABLED",
                            SecurityGroups: []string{
                                "repellendus",
                                "sapiente",
                            },
                            Subnets: []string{
                                "odit",
                                "at",
                                "at",
                                "maiores",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "quod",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "esse",
                            Type: "memberOf",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "dolorum",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "nam",
                            Type: "spread",
                        },
                        shared.PlacementStrategy{
                            Field: "occaecati",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "deleniti",
                            Type: "binpack",
                        },
                    },
                    PlatformVersion: "optio",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "totam",
                    Tags: []map[string]string{
                        map[string]string{
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                    TaskCount: 736918,
                    TaskDefinitionArn: "esse",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "ipsum",
                    Source: "excepturi",
                },
                Input: "aspernatur",
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "perferendis",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: 324141,
                    MaximumRetryAttempts: 617636,
                },
                RoleArn: "sed",
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "dolor",
                            Value: "natus",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "laboriosam",
                            Value: "hic",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "saepe",
                            Value: "fuga",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: "in",
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