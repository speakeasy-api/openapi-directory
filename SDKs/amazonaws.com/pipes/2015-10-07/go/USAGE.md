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