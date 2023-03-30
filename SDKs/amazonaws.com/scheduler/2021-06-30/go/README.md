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
            EndDate: "2022-08-06T05:59:46.226Z",
            FlexibleTimeWindow: operations.CreateScheduleRequestBodyFlexibleTimeWindow{
                MaximumWindowInMinutes: 384382,
                Mode: "OFF",
            },
            GroupName: "ullam",
            KmsKeyArn: "saepe",
            ScheduleExpression: "inventore",
            ScheduleExpressionTimezone: "sapiente",
            StartDate: "2022-12-20T11:33:33.763Z",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateSchedule` - Creates the specified schedule.
* `CreateScheduleGroup` - Creates the specified schedule group.
* `DeleteSchedule` - Deletes the specified schedule.
* `DeleteScheduleGroup` - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* `GetSchedule` - Retrieves the specified schedule.
* `GetScheduleGroup` - Retrieves the specified schedule group.
* `ListScheduleGroups` - Returns a paginated list of your schedule groups.
* `ListSchedules` - Returns a paginated list of your EventBridge Scheduler schedules.
* `ListTagsForResource` - Lists the tags associated with the Scheduler resource.
* `TagResource` - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* `UntagResource` - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* `UpdateSchedule` - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
