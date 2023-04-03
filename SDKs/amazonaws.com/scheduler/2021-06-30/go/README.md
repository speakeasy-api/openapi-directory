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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
