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
            Name: "corrupti",
        },
        Headers: operations.CreatePipeHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.CreatePipeRequestBody{
            Description: "vel",
            DesiredState: "STOPPED",
            Enrichment: "deserunt",
            EnrichmentParameters: &operations.CreatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    PathParameterValues: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                    QueryStringParameters: map[string]string{
                        "voluptatum": "iusto",
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                },
                InputTemplate: "veritatis",
            },
            RoleArn: "deserunt",
            Source: "perferendis",
            SourceParameters: &operations.CreatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.PipeSourceActiveMQBrokerParameters{
                    BatchSize: 368241,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "repellendus",
                    },
                    MaximumBatchingWindowInSeconds: 957156,
                    QueueName: "quo",
                },
                DynamoDBStreamParameters: &shared.PipeSourceDynamoDBStreamParameters{
                    BatchSize: 140350,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "at",
                    },
                    MaximumBatchingWindowInSeconds: 870088,
                    MaximumRecordAgeInSeconds: 978619,
                    MaximumRetryAttempts: 473608,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 799159,
                    StartingPosition: "LATEST",
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: "totam",
                        },
                        shared.Filter{
                            Pattern: "porro",
                        },
                    },
                },
                KinesisStreamParameters: &shared.PipeSourceKinesisStreamParameters{
                    BatchSize: 678880,
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: "dicta",
                    },
                    MaximumBatchingWindowInSeconds: 720633,
                    MaximumRecordAgeInSeconds: 639921,
                    MaximumRetryAttempts: 582020,
                    OnPartialBatchItemFailure: "AUTOMATIC_BISECT",
                    ParallelizationFactor: 143353,
                    StartingPosition: "LATEST",
                    StartingPositionTimestamp: "2022-04-19T07:06:16.045Z",
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: 758616,
                    ConsumerGroupID: "totam",
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: "beatae",
                        SaslScram512Auth: "commodi",
                    },
                    MaximumBatchingWindowInSeconds: 473600,
                    StartingPosition: "TRIM_HORIZON",
                    TopicName: "qui",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: 774234,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "cum",
                    },
                    MaximumBatchingWindowInSeconds: 456150,
                    QueueName: "ipsum",
                    VirtualHost: "excepturi",
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "perferendis",
                    },
                    BatchSize: 324141,
                    ConsumerGroupID: "natus",
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: "sed",
                        ClientCertificateTLSAuth: "iste",
                        SaslScram256Auth: "dolor",
                        SaslScram512Auth: "natus",
                    },
                    MaximumBatchingWindowInSeconds: 386489,
                    ServerRootCaCertificate: "hic",
                    StartingPosition: "LATEST",
                    TopicName: "fuga",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "corporis",
                            "iste",
                        },
                        Subnets: []string{
                            "saepe",
                            "quidem",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeSourceSqsQueueParameters{
                    BatchSize: 99280,
                    MaximumBatchingWindowInSeconds: 60225,
                },
            },
            Tags: map[string]string{
                "est": "mollitia",
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
            Target: "enim",
            TargetParameters: &operations.CreatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: 607831,
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "minima",
                            "excepturi",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: "iure",
                                Value: "culpa",
                            },
                        },
                        InstanceType: "doloribus",
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: "GPU",
                                Value: "mollitia",
                            },
                            shared.BatchResourceRequirement{
                                Type: "GPU",
                                Value: "culpa",
                            },
                            shared.BatchResourceRequirement{
                                Type: "GPU",
                                Value: "repellat",
                            },
                            shared.BatchResourceRequirement{
                                Type: "MEMORY",
                                Value: "occaecati",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: "commodi",
                            Type: "N_TO_N",
                        },
                        shared.BatchJobDependency{
                            JobID: "molestiae",
                            Type: "N_TO_N",
                        },
                    },
                    JobDefinition: "error",
                    JobName: "quia",
                    Parameters: map[string]string{
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: 138183,
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: "quo",
                    Timestamp: "sequi",
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 368725,
                            CapacityProvider: "id",
                            Weight: 820994,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 13571,
                            CapacityProvider: "quasi",
                            Weight: 622846,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 837945,
                            CapacityProvider: "laborum",
                            Weight: 96098,
                        },
                        shared.CapacityProviderStrategyItem{
                            Base: 971945,
                            CapacityProvider: "voluptatibus",
                            Weight: 878194,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "nihil",
                    LaunchType: "FARGATE",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "DISABLED",
                            SecurityGroups: []string{
                                "omnis",
                            },
                            Subnets: []string{
                                "cum",
                                "perferendis",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "ut",
                                    "maiores",
                                },
                                CPU: 120196,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "dolore",
                                        Value: "iusto",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "dicta",
                                        Value: "harum",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "accusamus",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "commodi",
                                    },
                                },
                                Memory: 918236,
                                MemoryReservation: 64147,
                                Name: "ipsum",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "excepturi",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "modi",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "rem",
                                    },
                                },
                            },
                        },
                        CPU: "voluptates",
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 93940,
                        },
                        ExecutionRoleArn: "repudiandae",
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "veritatis",
                                DeviceType: "itaque",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "incidunt",
                                DeviceType: "enim",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "consequatur",
                                DeviceType: "est",
                            },
                        },
                        Memory: "quibusdam",
                        TaskRoleArn: "explicabo",
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "distinctio",
                            Type: "memberOf",
                        },
                        shared.PlacementConstraint{
                            Expression: "labore",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "qui",
                            Type: "distinctInstance",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "quos",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "magni",
                            Type: "binpack",
                        },
                        shared.PlacementStrategy{
                            Field: "ipsam",
                            Type: "random",
                        },
                    },
                    PlatformVersion: "fugit",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "dolorum",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "tempora",
                            Value: "facilis",
                        },
                        shared.Tag{
                            Key: "tempore",
                            Value: "labore",
                        },
                        shared.Tag{
                            Key: "delectus",
                            Value: "eum",
                        },
                    },
                    TaskCount: 248753,
                    TaskDefinitionArn: "eligendi",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: "sint",
                    EndpointID: "aliquid",
                    Resources: []string{
                        "necessitatibus",
                        "sint",
                        "officia",
                    },
                    Source: "dolor",
                    Time: "debitis",
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "dolorum": "in",
                        "in": "illum",
                        "maiores": "rerum",
                        "dicta": "magnam",
                    },
                    PathParameterValues: []string{
                        "facere",
                        "ea",
                        "aliquid",
                        "laborum",
                    },
                    QueryStringParameters: map[string]string{
                        "non": "occaecati",
                        "enim": "accusamus",
                        "delectus": "quidem",
                        "provident": "nam",
                    },
                },
                InputTemplate: "id",
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "blanditiis",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "sapiente",
                    DbUser: "amet",
                    SecretManagerArn: "deserunt",
                    Sqls: []string{
                        "vel",
                        "natus",
                    },
                    StatementName: "omnis",
                    WithEvent: false,
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "perferendis",
                            Value: "nihil",
                        },
                        shared.SageMakerPipelineParameter{
                            Name: "magnam",
                            Value: "distinctio",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: "id",
                    MessageGroupID: "labore",
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: "REQUEST_RESPONSE",
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