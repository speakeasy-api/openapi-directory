# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/pipes/2015-10-07/go
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

    req := operations.CreatePipeRequest{
        Name: "corrupti",
        RequestBody: operations.CreatePipeRequestBody{
            Description: "provident",
            DesiredState: "STOPPED",
            Enrichment: "quibusdam",
            EnrichmentParameters: &operations.CreatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    PathParameterValues: []string{
                        "iure",
                        "magnam",
                    },
                    QueryStringParameters: map[string]string{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                InputTemplate: "iusto",
            },
            RoleArn: "excepturi",
            Source: "nisi",
            SourceParameters: &operations.CreatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.PipeSourceActiveMQBrokerParameters{
                    BatchSize: 925597,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "temporibus",
                    },
                    MaximumBatchingWindowInSeconds: 71036,
                    QueueName: "quis",
                },
                DynamoDBStreamParameters: &shared.PipeSourceDynamoDBStreamParameters{
                    BatchSize: 87129,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "deserunt",
                    },
                    MaximumBatchingWindowInSeconds: 20218,
                    MaximumRecordAgeInSeconds: 368241,
                    MaximumRetryAttempts: 832620,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 957156,
                    StartingPosition: "LATEST",
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: "at",
                        },
                    },
                },
                KinesisStreamParameters: &shared.PipeSourceKinesisStreamParameters{
                    BatchSize: 870088,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "maiores",
                    },
                    MaximumBatchingWindowInSeconds: 473608,
                    MaximumRecordAgeInSeconds: 799159,
                    MaximumRetryAttempts: 800911,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 461479,
                    StartingPosition: "LATEST",
                    StartingPositionTimestamp: "2020-12-18T15:02:44.758Z",
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: 118274,
                    ConsumerGroupID: "nam",
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: "officia",
                        SaslScram512Auth: "occaecati",
                    },
                    MaximumBatchingWindowInSeconds: 143353,
                    StartingPosition: "LATEST",
                    TopicName: "hic",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: 758616,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "totam",
                    },
                    MaximumBatchingWindowInSeconds: 105907,
                    QueueName: "commodi",
                    VirtualHost: "molestiae",
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "qui",
                        "impedit",
                    },
                    BatchSize: 736918,
                    ConsumerGroupID: "esse",
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: "ipsum",
                        ClientCertificateTLSAuth: "excepturi",
                        SaslScram256Auth: "aspernatur",
                        SaslScram512Auth: "perferendis",
                    },
                    MaximumBatchingWindowInSeconds: 324141,
                    ServerRootCaCertificate: "natus",
                    StartingPosition: "TRIM_HORIZON",
                    TopicName: "iste",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "natus",
                        },
                        Subnets: []string{
                            "hic",
                            "saepe",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeSourceSqsQueueParameters{
                    BatchSize: 681820,
                    MaximumBatchingWindowInSeconds: 449950,
                },
            },
            Tags: map[string]string{
                "iste": "iure",
                "saepe": "quidem",
            },
            Target: "architecto",
            TargetParameters: &operations.CreatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: 60225,
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: "corporis",
                                Value: "explicabo",
                            },
                        },
                        InstanceType: "nobis",
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: "MEMORY",
                                Value: "nemo",
                            },
                            shared.BatchResourceRequirement{
                                Type: "GPU",
                                Value: "excepturi",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: "iure",
                            Type: "SEQUENTIAL",
                        },
                    },
                    JobDefinition: "doloribus",
                    JobName: "sapiente",
                    Parameters: map[string]string{
                        "mollitia": "dolorem",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: 635059,
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: "consequuntur",
                    Timestamp: "repellat",
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 581850,
                            CapacityProvider: "numquam",
                            Weight: 414369,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 466311,
                            CapacityProvider: "molestiae",
                            Weight: 244425,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 623510,
                            CapacityProvider: "quia",
                            Weight: 338007,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "vitae",
                    LaunchType: "EXTERNAL",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "DISABLED",
                            SecurityGroups: []string{
                                "odit",
                                "quo",
                            },
                            Subnets: []string{
                                "tenetur",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "possimus",
                                    "aut",
                                    "quasi",
                                },
                                CPU: 622846,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "laborum",
                                        Value: "quasi",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "reiciendis",
                                        Value: "voluptatibus",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "vero",
                                        Value: "nihil",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "praesentium",
                                        Value: "voluptatibus",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "omnis",
                                    },
                                },
                                Memory: 451159,
                                MemoryReservation: 739264,
                                Name: "perferendis",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "ut",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "dicta",
                                    "corporis",
                                    "dolore",
                                    "iusto",
                                },
                                CPU: 118727,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "enim",
                                        Value: "accusamus",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "commodi",
                                        Value: "repudiandae",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "quae",
                                        Value: "ipsum",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "molestias",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "excepturi",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "pariatur",
                                    },
                                },
                                Memory: 265389,
                                MemoryReservation: 508969,
                                Name: "rem",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "repudiandae",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "veritatis",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "incidunt",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "consequatur",
                                    },
                                },
                            },
                        },
                        CPU: "est",
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 842342,
                        },
                        ExecutionRoleArn: "explicabo",
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "distinctio",
                                DeviceType: "quibusdam",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "labore",
                                DeviceType: "modi",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "qui",
                                DeviceType: "aliquid",
                            },
                        },
                        Memory: "cupiditate",
                        TaskRoleArn: "quos",
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "magni",
                            Type: "memberOf",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "alias",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "dolorum",
                            Type: "spread",
                        },
                    },
                    PlatformVersion: "tempora",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "facilis",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "labore",
                            Value: "delectus",
                        },
                        shared.Tag{
                            Key: "eum",
                            Value: "non",
                        },
                        shared.Tag{
                            Key: "eligendi",
                            Value: "sint",
                        },
                    },
                    TaskCount: 396098,
                    TaskDefinitionArn: "provident",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: "necessitatibus",
                    EndpointID: "sint",
                    Resources: []string{
                        "dolor",
                        "debitis",
                        "a",
                    },
                    Source: "dolorum",
                    Time: "in",
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                    PathParameterValues: []string{
                        "cumque",
                        "facere",
                    },
                    QueryStringParameters: map[string]string{
                        "aliquid": "laborum",
                        "accusamus": "non",
                    },
                },
                InputTemplate: "occaecati",
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "enim",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "delectus",
                    DbUser: "quidem",
                    SecretManagerArn: "provident",
                    Sqls: []string{
                        "id",
                        "blanditiis",
                        "deleniti",
                    },
                    StatementName: "sapiente",
                    WithEvent: false,
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "deserunt",
                            Value: "nisi",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: "vel",
                    MessageGroupID: "natus",
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
            },
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "perferendis",
        XAmzCredential: "nihil",
        XAmzDate: "magnam",
        XAmzSecurityToken: "distinctio",
        XAmzSignature: "id",
        XAmzSignedHeaders: "labore",
    }

    ctx := context.Background()
    res, err := s.CreatePipe(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreatePipe` - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* `DeletePipe` - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `DescribePipe` - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `ListPipes` - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `ListTagsForResource` - Displays the tags associated with a pipe.
* `StartPipe` - Start an existing pipe.
* `StopPipe` - Stop an existing pipe.
* `TagResource` - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* `UntagResource` - Removes one or more tags from the specified pipes.
* `UpdatePipe` - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
