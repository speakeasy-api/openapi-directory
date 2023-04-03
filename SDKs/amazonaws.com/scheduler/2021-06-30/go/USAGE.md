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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateScheduleRequest{
        Name: "corrupti",
        RequestBody: operations.CreateScheduleRequestBody{
            ClientToken: "provident",
            Description: "distinctio",
            EndDate: "2021-03-11T23:22:42.658Z",
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: 857946,
                Mode: "FLEXIBLE",
            },
            GroupName: "illum",
            KmsKeyArn: "vel",
            ScheduleExpression: "error",
            ScheduleExpressionTimezone: "deserunt",
            StartDate: "2022-07-25T06:44:09.184Z",
            State: "ENABLED",
            Target: operations.CreateScheduleRequestBodyTarget{
                Arn: "debitis",
                DeadLetterConfig: &shared.DeadLetterConfig{
                    Arn: "ipsa",
                },
                EcsParameters: &shared.EcsParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 272656,
                            CapacityProvider: "suscipit",
                            Weight: 477665,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 791725,
                            CapacityProvider: "placeat",
                            Weight: 528895,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 479977,
                            CapacityProvider: "excepturi",
                            Weight: 392785,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 925597,
                            CapacityProvider: "temporibus",
                            Weight: 71036,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "quis",
                    LaunchType: "EC2",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "DISABLED",
                            SecurityGroups: []string{
                                "ipsam",
                            },
                            Subnets: []string{
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            },
                        },
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "maiores",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "quod",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "esse",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "porro",
                            Type: "memberOf",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "nam",
                            Type: "spread",
                        },
                    },
                    PlatformVersion: "occaecati",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "fugit",
                    Tags: []map[string]string{
                        map[string]string{
                            "optio": "totam",
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        map[string]string{
                            "esse": "ipsum",
                            "excepturi": "aspernatur",
                            "perferendis": "ad",
                        },
                        map[string]string{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                    },
                    TaskCount: 902599,
                    TaskDefinitionArn: "fuga",
                },
                EventBridgeParameters: &shared.EventBridgeParameters{
                    DetailType: "in",
                    Source: "corporis",
                },
                Input: "iste",
                KinesisParameters: &shared.KinesisParameters{
                    PartitionKey: "iure",
                },
                RetryPolicy: &shared.RetryPolicy{
                    MaximumEventAgeInSeconds: 902349,
                    MaximumRetryAttempts: 697631,
                },
                RoleArn: "architecto",
                SageMakerPipelineParameters: &shared.SageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "reiciendis",
                            Value: "est",
                        },
                    },
                },
                SqsParameters: &shared.SqsParameters{
                    MessageGroupID: "mollitia",
                },
            },
        },
        XAmzAlgorithm: "laborum",
        XAmzContentSha256: "dolores",
        XAmzCredential: "dolorem",
        XAmzDate: "corporis",
        XAmzSecurityToken: "explicabo",
        XAmzSignature: "nobis",
        XAmzSignedHeaders: "enim",
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