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

    req := operations.CreatePipeRequest{
        PathParams: operations.CreatePipePathParams{
            Name: "unde",
        },
        Headers: operations.CreatePipeHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.CreatePipeRequestBody{
            Description: "nihil",
            DesiredState: "STOPPED",
            Enrichment: "facilis",
            EnrichmentParameters: &operations.CreatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "iusto": "ullam",
                        "saepe": "inventore",
                    },
                    PathParameterValues: []string{
                        "enim",
                        "eum",
                        "voluptatum",
                        "autem",
                    },
                    QueryStringParameters: map[string]string{
                        "non": "deleniti",
                        "similique": "reprehenderit",
                        "molestiae": "quo",
                        "quasi": "laboriosam",
                    },
                },
                InputTemplate: "dicta",
            },
            RoleArn: "est",
            Source: "voluptatem",
            SourceParameters: &operations.CreatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.PipeSourceActiveMQBrokerParameters{
                    BatchSize: 368241,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "fugiat",
                    },
                    MaximumBatchingWindowInSeconds: 957156,
                    QueueName: "omnis",
                },
                DynamoDBStreamParameters: &shared.PipeSourceDynamoDBStreamParameters{
                    BatchSize: 140350,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "accusamus",
                    },
                    MaximumBatchingWindowInSeconds: 870088,
                    MaximumRecordAgeInSeconds: 978619,
                    MaximumRetryAttempts: 473608,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 800911,
                    StartingPosition: "TRIM_HORIZON",
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: "dolor",
                        },
                        shared.Filter{
                            Pattern: "soluta",
                        },
                        shared.Filter{
                            Pattern: "sed",
                        },
                    },
                },
                KinesisStreamParameters: &shared.PipeSourceKinesisStreamParameters{
                    BatchSize: 720633,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "rerum",
                    },
                    MaximumBatchingWindowInSeconds: 582020,
                    MaximumRecordAgeInSeconds: 143353,
                    MaximumRetryAttempts: 537373,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 758616,
                    StartingPosition: "LATEST",
                    StartingPositionTimestamp: "2023-02-18T20:47:25.226Z",
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: 414662,
                    ConsumerGroupID: "rem",
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: "voluptatem",
                        SaslScram512Auth: "amet",
                    },
                    MaximumBatchingWindowInSeconds: 774234,
                    StartingPosition: "LATEST",
                    TopicName: "blanditiis",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: 216550,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "similique",
                    },
                    MaximumBatchingWindowInSeconds: 135218,
                    QueueName: "sit",
                    VirtualHost: "quia",
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "voluptatem",
                        "laborum",
                        "modi",
                    },
                    BatchSize: 616934,
                    ConsumerGroupID: "iure",
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: "earum",
                        ClientCertificateTLSAuth: "ut",
                        SaslScram256Auth: "soluta",
                        SaslScram512Auth: "qui",
                    },
                    MaximumBatchingWindowInSeconds: 359508,
                    ServerRootCaCertificate: "laborum",
                    StartingPosition: "TRIM_HORIZON",
                    TopicName: "ut",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "aspernatur",
                            "inventore",
                            "ut",
                        },
                        Subnets: []string{
                            "et",
                            "libero",
                            "ipsum",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeSourceSqsQueueParameters{
                    BatchSize: 210382,
                    MaximumBatchingWindowInSeconds: 358152,
                },
            },
            Tags: map[string]string{
                "placeat": "ipsam",
            },
            Target: "est",
            TargetParameters: &operations.CreatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: 363711,
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "similique",
                            "eaque",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: "harum",
                                Value: "doloribus",
                            },
                            shared.BatchEnvironmentVariable{
                                Name: "a",
                                Value: "aut",
                            },
                        },
                        InstanceType: "et",
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: "MEMORY",
                                Value: "neque",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: "et",
                            Type: "SEQUENTIAL",
                        },
                        shared.BatchJobDependency{
                            JobID: "aliquam",
                            Type: "N_TO_N",
                        },
                        shared.BatchJobDependency{
                            JobID: "totam",
                            Type: "N_TO_N",
                        },
                        shared.BatchJobDependency{
                            JobID: "et",
                            Type: "SEQUENTIAL",
                        },
                    },
                    JobDefinition: "nesciunt",
                    JobName: "laboriosam",
                    Parameters: map[string]string{
                        "cum": "expedita",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: 317202,
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: "eos",
                    Timestamp: "omnis",
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 949572,
                            CapacityProvider: "consequatur",
                            Weight: 662527,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "qui",
                    LaunchType: "EC2",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "ENABLED",
                            SecurityGroups: []string{
                                "quo",
                                "tempore",
                                "explicabo",
                            },
                            Subnets: []string{
                                "reiciendis",
                                "debitis",
                                "totam",
                                "molestias",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "id",
                                },
                                CPU: 451159,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "sit",
                                        Value: "eaque",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "odio",
                                        Value: "veniam",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "reiciendis",
                                        Value: "sed",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "deleniti",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "est",
                                    },
                                },
                                Memory: 317983,
                                MemoryReservation: 880476,
                                Name: "esse",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "numquam",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "error",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "et",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "molestias",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "sint",
                                    "explicabo",
                                    "et",
                                },
                                CPU: 575947,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "non",
                                        Value: "minima",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "libero",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "magni",
                                    },
                                },
                                Memory: 647174,
                                MemoryReservation: 716327,
                                Name: "voluptas",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "sit",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "officia",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "voluptatem",
                                    "dolorem",
                                    "eum",
                                },
                                CPU: 369808,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "ratione",
                                        Value: "cum",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "nihil",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "quis",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "et",
                                    },
                                },
                                Memory: 248753,
                                MemoryReservation: 756107,
                                Name: "in",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "eveniet",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "rerum",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "necessitatibus",
                                },
                                CPU: 952749,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "ducimus",
                                        Value: "ducimus",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "nulla",
                                        Value: "reiciendis",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "cumque",
                                        Value: "fugit",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "vel",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "qui",
                                    },
                                },
                                Memory: 675439,
                                MemoryReservation: 881104,
                                Name: "magnam",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "aut",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "eligendi",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "est",
                                    },
                                },
                            },
                        },
                        CPU: "distinctio",
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 501324,
                        },
                        ExecutionRoleArn: "provident",
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "incidunt",
                                DeviceType: "facilis",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "qui",
                                DeviceType: "nihil",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "dolorum",
                                DeviceType: "id",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "voluptatum",
                                DeviceType: "sit",
                            },
                        },
                        Memory: "rem",
                        TaskRoleArn: "corporis",
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "distinctio",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "nostrum",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "et",
                            Type: "memberOf",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "debitis",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "aut",
                            Type: "random",
                        },
                    },
                    PlatformVersion: "explicabo",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "ex",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "omnis",
                            Value: "in",
                        },
                        shared.Tag{
                            Key: "aperiam",
                            Value: "et",
                        },
                        shared.Tag{
                            Key: "ut",
                            Value: "et",
                        },
                    },
                    TaskCount: 320997,
                    TaskDefinitionArn: "et",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: "modi",
                    EndpointID: "eveniet",
                    Resources: []string{
                        "consequatur",
                    },
                    Source: "aspernatur",
                    Time: "iusto",
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "saepe": "quaerat",
                        "aut": "sed",
                        "nihil": "ducimus",
                        "aspernatur": "aspernatur",
                    },
                    PathParameterValues: []string{
                        "aliquid",
                        "quo",
                        "totam",
                        "repellat",
                    },
                    QueryStringParameters: map[string]string{
                        "voluptatem": "et",
                        "accusamus": "eaque",
                        "neque": "molestias",
                        "et": "dolorem",
                    },
                },
                InputTemplate: "quia",
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "omnis",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "et",
                    DbUser: "consequatur",
                    SecretManagerArn: "velit",
                    Sqls: []string{
                        "eos",
                        "voluptate",
                        "aperiam",
                    },
                    StatementName: "quasi",
                    WithEvent: false,
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "optio",
                            Value: "quis",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "qui",
                            Value: "quam",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "quisquam",
                            Value: "ab",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "et",
                            Value: "consequatur",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: "aut",
                    MessageGroupID: "sit",
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
            },
        },
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