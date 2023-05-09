# SDK

## Overview

Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need for specialized knowledge and integration code when developing event driven architectures. This helps ensures consistency across your company’s applications. With Pipes, the target can be any available EventBridge target. To set up a pipe, you select the event source, add optional event filtering, define optional enrichment, and select the target for the event data. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/pipes/>
### Available Operations

* [CreatePipe](#createpipe) - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* [DeletePipe](#deletepipe) - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [DescribePipe](#describepipe) - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [ListPipes](#listpipes) - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [ListTagsForResource](#listtagsforresource) - Displays the tags associated with a pipe.
* [StartPipe](#startpipe) - Start an existing pipe.
* [StopPipe](#stoppipe) - Stop an existing pipe.
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified pipes.
* [UpdatePipe](#updatepipe) - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

## CreatePipe

Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.

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
    res, err := s.SDK.CreatePipe(ctx, operations.CreatePipeRequest{
        Name: "Rene Rolfson",
        RequestBody: operations.CreatePipeRequestBody{
            Description: sdk.String("quaerat"),
            DesiredState: operations.CreatePipeRequestBodyDesiredStateEnumStopped.ToPointer(),
            Enrichment: sdk.String("aliquid"),
            EnrichmentParameters: &operations.CreatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "dolorem": "dolor",
                    },
                    PathParameterValues: []string{
                        "ipsum",
                    },
                    QueryStringParameters: map[string]string{
                        "excepturi": "cum",
                        "voluptate": "dignissimos",
                        "reiciendis": "amet",
                        "dolorum": "numquam",
                    },
                },
                InputTemplate: sdk.String("veritatis"),
            },
            RoleArn: "ipsa",
            Source: "ipsa",
            SourceParameters: &operations.CreatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.PipeSourceActiveMQBrokerParameters{
                    BatchSize: sdk.Int64(434417),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("odio"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(311796),
                    QueueName: "accusamus",
                },
                DynamoDBStreamParameters: &shared.PipeSourceDynamoDBStreamParameters{
                    BatchSize: sdk.Int64(696344),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("voluptatibus"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(377752),
                    MaximumRecordAgeInSeconds: sdk.Int64(617658),
                    MaximumRetryAttempts: sdk.Int64(179603),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(542499),
                    StartingPosition: shared.DynamoDBStreamStartPositionEnumTrimHorizon,
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: sdk.String("ab"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("soluta"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("dolorum"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("iusto"),
                        },
                    },
                },
                KinesisStreamParameters: &shared.PipeSourceKinesisStreamParameters{
                    BatchSize: sdk.Int64(453697),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("dolorum"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(536579),
                    MaximumRecordAgeInSeconds: sdk.Int64(607045),
                    MaximumRetryAttempts: sdk.Int64(896672),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(714697),
                    StartingPosition: shared.KinesisStreamStartPositionEnumAtTimestamp,
                    StartingPositionTimestamp: types.MustTimeFromString("2022-10-13T19:58:56.024Z"),
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: sdk.Int64(456015),
                    ConsumerGroupID: sdk.String("id"),
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: sdk.String("saepe"),
                        SaslScram512Auth: sdk.String("eius"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(137220),
                    StartingPosition: shared.MSKStartPositionEnumTrimHorizon.ToPointer(),
                    TopicName: "amet",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: sdk.Int64(758379),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("accusamus"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(320017),
                    QueueName: "saepe",
                    VirtualHost: sdk.String("suscipit"),
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "provident",
                        "minima",
                        "repellendus",
                    },
                    BatchSize: sdk.Int64(519711),
                    ConsumerGroupID: sdk.String("similique"),
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: sdk.String("alias"),
                        ClientCertificateTLSAuth: sdk.String("at"),
                        SaslScram256Auth: sdk.String("quaerat"),
                        SaslScram512Auth: sdk.String("tempora"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(425451),
                    ServerRootCaCertificate: sdk.String("quod"),
                    StartingPosition: shared.SelfManagedKafkaStartPositionEnumLatest.ToPointer(),
                    TopicName: "qui",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "a",
                            "esse",
                            "harum",
                        },
                        Subnets: []string{
                            "ipsum",
                            "quisquam",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeSourceSqsQueueParameters{
                    BatchSize: sdk.Int64(947371),
                    MaximumBatchingWindowInSeconds: sdk.Int64(229442),
                },
            },
            Tags: map[string]string{
                "accusamus": "numquam",
                "enim": "dolorem",
                "sapiente": "totam",
            },
            Target: "nihil",
            TargetParameters: &operations.CreatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: sdk.Int64(25662),
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "neque",
                            "sed",
                            "vel",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: sdk.String("Joanna Kohler"),
                                Value: sdk.String("qui"),
                            },
                            shared.BatchEnvironmentVariable{
                                Name: sdk.String("Simon Stracke MD"),
                                Value: sdk.String("totam"),
                            },
                            shared.BatchEnvironmentVariable{
                                Name: sdk.String("Kelly Daniel"),
                                Value: sdk.String("aliquid"),
                            },
                        },
                        InstanceType: sdk.String("quam"),
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumVcpu,
                                Value: "qui",
                            },
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumGpu,
                                Value: "fugit",
                            },
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumGpu,
                                Value: "odio",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: sdk.String("ullam"),
                            Type: shared.BatchJobDependencyTypeEnumSequential.ToPointer(),
                        },
                    },
                    JobDefinition: "hic",
                    JobName: "voluptatem",
                    Parameters: map[string]string{
                        "soluta": "nobis",
                        "et": "saepe",
                        "ipsum": "veritatis",
                        "nobis": "quos",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: sdk.Int64(731694),
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: sdk.String("cupiditate"),
                    Timestamp: sdk.String("aperiam"),
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(209157),
                            CapacityProvider: "dolore",
                            Weight: sdk.Int64(286915),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(240829),
                            CapacityProvider: "dolorum",
                            Weight: sdk.Int64(100294),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(63038),
                            CapacityProvider: "aut",
                            Weight: sdk.Int64(555649),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(929530),
                            CapacityProvider: "consequatur",
                            Weight: sdk.Int64(669917),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("repellendus"),
                    LaunchType: shared.LaunchTypeEnumExternal.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                            SecurityGroups: []string{
                                "facilis",
                                "cupiditate",
                            },
                            Subnets: []string{
                                "quae",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "occaecati",
                                    "voluptatibus",
                                },
                                CPU: sdk.Int64(787542),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Tim Erdman"),
                                        Value: sdk.String("consectetur"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Roman Kulas"),
                                        Value: sdk.String("quod"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Harriet Quitzon"),
                                        Value: sdk.String("dolore"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Gilberto Dickinson"),
                                        Value: sdk.String("aut"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "exercitationem",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "nulla",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "fugit",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "porro",
                                    },
                                },
                                Memory: sdk.Int64(981830),
                                MemoryReservation: sdk.Int64(985033),
                                Name: sdk.String("Miss Vicky Kuphal"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "aspernatur",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "possimus",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "ratione",
                                    "ex",
                                },
                                CPU: sdk.Int64(511319),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Elisa Boyle"),
                                        Value: sdk.String("excepturi"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "nostrum",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "sapiente",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "quisquam",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "saepe",
                                    },
                                },
                                Memory: sdk.Int64(411372),
                                MemoryReservation: sdk.Int64(774048),
                                Name: sdk.String("Mrs. Sally Jacobi"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "recusandae",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "minima",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "a",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "aut",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "deleniti",
                                },
                                CPU: sdk.Int64(770581),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Eloise Block MD"),
                                        Value: sdk.String("laborum"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Lee Kemmer"),
                                        Value: sdk.String("quas"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "nulla",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "voluptas",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "libero",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "quasi",
                                    },
                                },
                                Memory: sdk.Int64(270328),
                                MemoryReservation: sdk.Int64(256139),
                                Name: sdk.String("Ramona Bednar"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "esse",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "rem",
                                    },
                                },
                            },
                        },
                        CPU: sdk.String("fuga"),
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 442015,
                        },
                        ExecutionRoleArn: sdk.String("quidem"),
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("ut"),
                                DeviceType: sdk.String("eum"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("suscipit"),
                                DeviceType: sdk.String("assumenda"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("eos"),
                                DeviceType: sdk.String("praesentium"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("quisquam"),
                                DeviceType: sdk.String("veritatis"),
                            },
                        },
                        Memory: sdk.String("ipsa"),
                        TaskRoleArn: sdk.String("id"),
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("neque"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("illum"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("fuga"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("voluptas"),
                            Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("cupiditate"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("consequatur"),
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "debitis",
                            Value: "ipsam",
                        },
                        shared.Tag{
                            Key: "aspernatur",
                            Value: "sequi",
                        },
                    },
                    TaskCount: sdk.Int64(779192),
                    TaskDefinitionArn: "esse",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: sdk.String("recusandae"),
                    EndpointID: sdk.String("aperiam"),
                    Resources: []string{
                        "quod",
                        "dignissimos",
                        "inventore",
                    },
                    Source: sdk.String("nihil"),
                    Time: sdk.String("totam"),
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "aliquam": "odio",
                        "occaecati": "commodi",
                        "sapiente": "dolores",
                        "deserunt": "molestiae",
                    },
                    PathParameterValues: []string{
                        "porro",
                    },
                    QueryStringParameters: map[string]string{
                        "quas": "praesentium",
                        "consequuntur": "deleniti",
                    },
                },
                InputTemplate: sdk.String("fugit"),
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "fuga",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumFireAndForget.ToPointer(),
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "incidunt",
                    DbUser: sdk.String("atque"),
                    SecretManagerArn: sdk.String("explicabo"),
                    Sqls: []string{
                        "nisi",
                        "fugit",
                    },
                    StatementName: sdk.String("sapiente"),
                    WithEvent: sdk.Bool(false),
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "ratione",
                            Value: "explicabo",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: sdk.String("saepe"),
                    MessageGroupID: sdk.String("occaecati"),
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumFireAndForget.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipeResponse != nil {
        // handle response
    }
}
```

## DeletePipe

Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

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
    res, err := s.SDK.DeletePipe(ctx, operations.DeletePipeRequest{
        Name: "Dr. Ignacio Jacobi",
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePipeResponse != nil {
        // handle response
    }
}
```

## DescribePipe

Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

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
    res, err := s.SDK.DescribePipe(ctx, operations.DescribePipeRequest{
        Name: "Kristi Renner",
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipeResponse != nil {
        // handle response
    }
}
```

## ListPipes

Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

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
    res, err := s.SDK.ListPipes(ctx, operations.ListPipesRequest{
        CurrentState: operations.ListPipesCurrentStateEnumStarting.ToPointer(),
        DesiredState: operations.ListPipesDesiredStateEnumStopped.ToPointer(),
        Limit: sdk.Int64(953722),
        NamePrefix: sdk.String("nulla"),
        NextToken: sdk.String("quas"),
        SourcePrefix: sdk.String("esse"),
        TargetPrefix: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Displays the tags associated with a pipe.

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
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("culpa"),
        ResourceArn: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartPipe

Start an existing pipe.

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
    res, err := s.SDK.StartPipe(ctx, operations.StartPipeRequest{
        Name: "Scott Wehner",
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPipeResponse != nil {
        // handle response
    }
}
```

## StopPipe

Stop an existing pipe.

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
    res, err := s.SDK.StopPipe(ctx, operations.StopPipeRequest{
        Name: "Marion Kihn",
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPipeResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "architecto": "omnis",
                "tenetur": "quasi",
                "at": "et",
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("iste"),
        ResourceArn: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified pipes.

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
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ab"),
        ResourceArn: "corrupti",
        TagKeys: []string{
            "voluptatem",
            "dolor",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdatePipe

<p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

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
    res, err := s.SDK.UpdatePipe(ctx, operations.UpdatePipeRequest{
        Name: "Francis Russel",
        RequestBody: operations.UpdatePipeRequestBody{
            Description: sdk.String("aut"),
            DesiredState: operations.UpdatePipeRequestBodyDesiredStateEnumRunning.ToPointer(),
            Enrichment: sdk.String("dicta"),
            EnrichmentParameters: &operations.UpdatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "natus": "velit",
                        "voluptatibus": "voluptas",
                        "asperiores": "aperiam",
                        "ea": "quaerat",
                    },
                    PathParameterValues: []string{
                        "repellendus",
                    },
                    QueryStringParameters: map[string]string{
                        "maxime": "dignissimos",
                        "officia": "asperiores",
                        "nemo": "quae",
                    },
                },
                InputTemplate: sdk.String("quaerat"),
            },
            RoleArn: "porro",
            SourceParameters: &operations.UpdatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.UpdatePipeSourceActiveMQBrokerParameters{
                    BatchSize: sdk.Int64(801836),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("labore"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(70447),
                },
                DynamoDBStreamParameters: &shared.UpdatePipeSourceDynamoDBStreamParameters{
                    BatchSize: sdk.Int64(241418),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("fuga"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(662505),
                    MaximumRecordAgeInSeconds: sdk.Int64(380729),
                    MaximumRetryAttempts: sdk.Int64(246063),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(633931),
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: sdk.String("recusandae"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("totam"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("fugiat"),
                        },
                    },
                },
                KinesisStreamParameters: &shared.UpdatePipeSourceKinesisStreamParameters{
                    BatchSize: sdk.Int64(424089),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("ducimus"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(554688),
                    MaximumRecordAgeInSeconds: sdk.Int64(427834),
                    MaximumRetryAttempts: sdk.Int64(287051),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(822560),
                },
                ManagedStreamingKafkaParameters: &shared.UpdatePipeSourceManagedStreamingKafkaParameters{
                    BatchSize: sdk.Int64(706575),
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: sdk.String("cum"),
                        SaslScram512Auth: sdk.String("commodi"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(447144),
                },
                RabbitMQBrokerParameters: &shared.UpdatePipeSourceRabbitMQBrokerParameters{
                    BatchSize: sdk.Int64(360545),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("reiciendis"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(828657),
                },
                SelfManagedKafkaParameters: &shared.UpdatePipeSourceSelfManagedKafkaParameters{
                    BatchSize: sdk.Int64(363161),
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: sdk.String("recusandae"),
                        ClientCertificateTLSAuth: sdk.String("aliquid"),
                        SaslScram256Auth: sdk.String("aperiam"),
                        SaslScram512Auth: sdk.String("cum"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(232627),
                    ServerRootCaCertificate: sdk.String("in"),
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "earum",
                            "facere",
                        },
                        Subnets: []string{
                            "doloribus",
                            "suscipit",
                        },
                    },
                },
                SqsQueueParameters: &shared.UpdatePipeSourceSqsQueueParameters{
                    BatchSize: sdk.Int64(968972),
                    MaximumBatchingWindowInSeconds: sdk.Int64(697142),
                },
            },
            Target: sdk.String("saepe"),
            TargetParameters: &operations.UpdatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: sdk.Int64(897071),
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "sunt",
                            "asperiores",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: sdk.String("Wendy Breitenberg"),
                                Value: sdk.String("debitis"),
                            },
                        },
                        InstanceType: sdk.String("consectetur"),
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumVcpu,
                                Value: "laboriosam",
                            },
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumGpu,
                                Value: "voluptates",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: sdk.String("vitae"),
                            Type: shared.BatchJobDependencyTypeEnumSequential.ToPointer(),
                        },
                        shared.BatchJobDependency{
                            JobID: sdk.String("similique"),
                            Type: shared.BatchJobDependencyTypeEnumNToN.ToPointer(),
                        },
                        shared.BatchJobDependency{
                            JobID: sdk.String("aspernatur"),
                            Type: shared.BatchJobDependencyTypeEnumNToN.ToPointer(),
                        },
                    },
                    JobDefinition: "voluptas",
                    JobName: "voluptas",
                    Parameters: map[string]string{
                        "nobis": "dolorum",
                        "adipisci": "minus",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: sdk.Int64(171853),
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: sdk.String("blanditiis"),
                    Timestamp: sdk.String("in"),
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(304468),
                            CapacityProvider: "officiis",
                            Weight: sdk.Int64(839189),
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(351870),
                            CapacityProvider: "adipisci",
                            Weight: sdk.Int64(738391),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("blanditiis"),
                    LaunchType: shared.LaunchTypeEnumFargate.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                            SecurityGroups: []string{
                                "culpa",
                            },
                            Subnets: []string{
                                "pariatur",
                                "totam",
                                "hic",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "sit",
                                    "rerum",
                                    "sed",
                                    "reiciendis",
                                },
                                CPU: sdk.Int64(131852),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Miss Jared Quitzon"),
                                        Value: sdk.String("laborum"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Pearl Johnson"),
                                        Value: sdk.String("voluptas"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Joe Hoppe"),
                                        Value: sdk.String("illo"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Thomas Lockman"),
                                        Value: sdk.String("sed"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "eius",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "necessitatibus",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "ipsum",
                                    },
                                },
                                Memory: sdk.Int64(406733),
                                MemoryReservation: sdk.Int64(579912),
                                Name: sdk.String("Courtney Goldner"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "sit",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "officiis",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "facilis",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "incidunt",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "debitis",
                                    "rem",
                                },
                                CPU: sdk.Int64(26522),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Floyd Harber"),
                                        Value: sdk.String("nulla"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Deborah Turcotte"),
                                        Value: sdk.String("in"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Jack Langworth"),
                                        Value: sdk.String("cum"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Lee Lehner"),
                                        Value: sdk.String("expedita"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "neque",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "dolorum",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "nostrum",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "officia",
                                    },
                                },
                                Memory: sdk.Int64(676243),
                                MemoryReservation: sdk.Int64(548361),
                                Name: sdk.String("Ricky Little"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "culpa",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "magnam",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "esse",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "sit",
                                    },
                                },
                            },
                        },
                        CPU: sdk.String("voluptatum"),
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 558065,
                        },
                        ExecutionRoleArn: sdk.String("repudiandae"),
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("et"),
                                DeviceType: sdk.String("blanditiis"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("ex"),
                                DeviceType: sdk.String("sed"),
                            },
                        },
                        Memory: sdk.String("sit"),
                        TaskRoleArn: sdk.String("vel"),
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("saepe"),
                            Type: shared.PlacementConstraintTypeEnumMemberOf.ToPointer(),
                        },
                        shared.PlacementConstraint{
                            Expression: sdk.String("consequatur"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("dolorem"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("dicta"),
                            Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("occaecati"),
                            Type: shared.PlacementStrategyTypeEnumRandom.ToPointer(),
                        },
                        shared.PlacementStrategy{
                            Field: sdk.String("quidem"),
                            Type: shared.PlacementStrategyTypeEnumSpread.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("laborum"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("nam"),
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "laboriosam",
                            Value: "alias",
                        },
                        shared.Tag{
                            Key: "amet",
                            Value: "deserunt",
                        },
                        shared.Tag{
                            Key: "voluptate",
                            Value: "unde",
                        },
                        shared.Tag{
                            Key: "reiciendis",
                            Value: "provident",
                        },
                    },
                    TaskCount: sdk.Int64(833819),
                    TaskDefinitionArn: "delectus",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: sdk.String("voluptates"),
                    EndpointID: sdk.String("perferendis"),
                    Resources: []string{
                        "quidem",
                        "reprehenderit",
                        "facere",
                    },
                    Source: sdk.String("fuga"),
                    Time: sdk.String("praesentium"),
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "veniam": "voluptatem",
                        "quisquam": "repudiandae",
                        "quasi": "atque",
                    },
                    PathParameterValues: []string{
                        "asperiores",
                        "totam",
                    },
                    QueryStringParameters: map[string]string{
                        "quidem": "maxime",
                        "et": "esse",
                    },
                },
                InputTemplate: sdk.String("amet"),
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "assumenda",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumRequestResponse.ToPointer(),
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "atque",
                    DbUser: sdk.String("error"),
                    SecretManagerArn: sdk.String("officiis"),
                    Sqls: []string{
                        "accusamus",
                        "natus",
                        "minima",
                        "aspernatur",
                    },
                    StatementName: sdk.String("ex"),
                    WithEvent: sdk.Bool(false),
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "corrupti",
                            Value: "at",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "error",
                            Value: "blanditiis",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "suscipit",
                            Value: "repudiandae",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "atque",
                            Value: "atque",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: sdk.String("sunt"),
                    MessageGroupID: sdk.String("recusandae"),
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumFireAndForget.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipeResponse != nil {
        // handle response
    }
}
```
