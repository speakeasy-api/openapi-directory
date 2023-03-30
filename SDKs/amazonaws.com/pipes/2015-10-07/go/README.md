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
                    StartingPositionTimestamp: "2020-09-22T07:34:53.140Z",
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: 521848,
                    ConsumerGroupID: "beatae",
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: "commodi",
                        SaslScram512Auth: "molestiae",
                    },
                    MaximumBatchingWindowInSeconds: 264555,
                    StartingPosition: "TRIM_HORIZON",
                    TopicName: "impedit",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: 736918,
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: "esse",
                    },
                    MaximumBatchingWindowInSeconds: 216550,
                    QueueName: "excepturi",
                    VirtualHost: "aspernatur",
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "ad",
                    },
                    BatchSize: 617636,
                    ConsumerGroupID: "sed",
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: "iste",
                        ClientCertificateTLSAuth: "dolor",
                        SaslScram256Auth: "natus",
                        SaslScram512Auth: "laboriosam",
                    },
                    MaximumBatchingWindowInSeconds: 943749,
                    ServerRootCaCertificate: "saepe",
                    StartingPosition: "LATEST",
                    TopicName: "in",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "iste",
                            "iure",
                        },
                        Subnets: []string{
                            "quidem",
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeSourceSqsQueueParameters{
                    BatchSize: 666767,
                    MaximumBatchingWindowInSeconds: 653140,
                },
            },
            Tags: map[string]string{
                "dolores": "dolorem",
                "corporis": "explicabo",
                "nobis": "enim",
            },
            Target: "omnis",
            TargetParameters: &operations.CreatePipeRequestBodyTargetParameters{
                BatchJobParameters: &shared.PipeTargetBatchJobParameters{
                    ArrayProperties: &shared.BatchArrayProperties{
                        Size: 363711,
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "excepturi",
                            "accusantium",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: "culpa",
                                Value: "doloribus",
                            },
                            shared.BatchEnvironmentVariable{
                                Name: "sapiente",
                                Value: "architecto",
                            },
                        },
                        InstanceType: "mollitia",
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: "MEMORY",
                                Value: "consequuntur",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: "mollitia",
                            Type: "SEQUENTIAL",
                        },
                        shared.BatchJobDependency{
                            JobID: "numquam",
                            Type: "N_TO_N",
                        },
                        shared.BatchJobDependency{
                            JobID: "quam",
                            Type: "N_TO_N",
                        },
                        shared.BatchJobDependency{
                            JobID: "velit",
                            Type: "SEQUENTIAL",
                        },
                    },
                    JobDefinition: "quia",
                    JobName: "quis",
                    Parameters: map[string]string{
                        "laborum": "animi",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: 317202,
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: "odit",
                    Timestamp: "quo",
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: 949572,
                            CapacityProvider: "ipsam",
                            Weight: 662527,
                        },
                    },
                    EnableECSManagedTags: false,
                    EnableExecuteCommand: false,
                    Group: "possimus",
                    LaunchType: "EC2",
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: "ENABLED",
                            SecurityGroups: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                            Subnets: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                        },
                    },
                    Overrides: &shared.EcsTaskOverride{
                        ContainerOverrides: []shared.EcsContainerOverride{
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "omnis",
                                },
                                CPU: 451159,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "perferendis",
                                        Value: "doloremque",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "reprehenderit",
                                        Value: "ut",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "maiores",
                                        Value: "dicta",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "dolore",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "iusto",
                                    },
                                },
                                Memory: 118727,
                                MemoryReservation: 688661,
                                Name: "enim",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "repudiandae",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "ipsum",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "molestias",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "pariatur",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "praesentium",
                                    "rem",
                                },
                                CPU: 916723,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "repudiandae",
                                        Value: "sint",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "itaque",
                                    },
                                },
                                Memory: 277718,
                                MemoryReservation: 318569,
                                Name: "consequatur",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "explicabo",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "distinctio",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "labore",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "qui",
                                    "aliquid",
                                },
                                CPU: 586513,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "perferendis",
                                        Value: "magni",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "assumenda",
                                        Value: "ipsam",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "alias",
                                        Value: "fugit",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "excepturi",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "tempora",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "facilis",
                                    },
                                },
                                Memory: 735194,
                                MemoryReservation: 288476,
                                Name: "delectus",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "eligendi",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "aliquid",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "necessitatibus",
                                    "sint",
                                    "officia",
                                },
                                CPU: 223081,
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: "a",
                                        Value: "dolorum",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "in",
                                        Value: "in",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "illum",
                                        Value: "maiores",
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: "rerum",
                                        Value: "dicta",
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "cumque",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: "s3",
                                        Value: "facere",
                                    },
                                },
                                Memory: 411820,
                                MemoryReservation: 396506,
                                Name: "laborum",
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "occaecati",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "GPU",
                                        Value: "accusamus",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "quidem",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: "InferenceAccelerator",
                                        Value: "nam",
                                    },
                                },
                            },
                        },
                        CPU: "id",
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 501324,
                        },
                        ExecutionRoleArn: "deleniti",
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "amet",
                                DeviceType: "deserunt",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "nisi",
                                DeviceType: "vel",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "natus",
                                DeviceType: "omnis",
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: "molestiae",
                                DeviceType: "perferendis",
                            },
                        },
                        Memory: "nihil",
                        TaskRoleArn: "magnam",
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: "id",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "labore",
                            Type: "distinctInstance",
                        },
                        shared.PlacementConstraint{
                            Expression: "natus",
                            Type: "memberOf",
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: "vero",
                            Type: "random",
                        },
                        shared.PlacementStrategy{
                            Field: "architecto",
                            Type: "random",
                        },
                    },
                    PlatformVersion: "et",
                    PropagateTags: "TASK_DEFINITION",
                    ReferenceID: "excepturi",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "provident",
                            Value: "quos",
                        },
                        shared.Tag{
                            Key: "sint",
                            Value: "accusantium",
                        },
                    },
                    TaskCount: 653201,
                    TaskDefinitionArn: "reiciendis",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: "mollitia",
                    EndpointID: "ad",
                    Resources: []string{
                        "dolor",
                        "necessitatibus",
                    },
                    Source: "odit",
                    Time: "nemo",
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "iure": "doloribus",
                    },
                    PathParameterValues: []string{
                        "eius",
                        "maxime",
                        "deleniti",
                        "facilis",
                    },
                    QueryStringParameters: map[string]string{
                        "architecto": "architecto",
                        "repudiandae": "ullam",
                    },
                },
                InputTemplate: "expedita",
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "nihil",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: "FIRE_AND_FORGET",
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "quibusdam",
                    DbUser: "sed",
                    SecretManagerArn: "saepe",
                    Sqls: []string{
                        "accusantium",
                        "consequuntur",
                        "praesentium",
                        "natus",
                    },
                    StatementName: "magni",
                    WithEvent: false,
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "quo",
                            Value: "illum",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: "pariatur",
                    MessageGroupID: "maxime",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
