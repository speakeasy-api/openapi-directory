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
    res, err := s.CreatePipe(ctx, operations.CreatePipeRequest{
        Name: "Terrence Rau",
        RequestBody: operations.CreatePipeRequestBody{
            Description: sdk.String("nulla"),
            DesiredState: operations.CreatePipeRequestBodyDesiredStateEnumStopped.ToPointer(),
            Enrichment: sdk.String("illum"),
            EnrichmentParameters: &operations.CreatePipeRequestBodyEnrichmentParameters{
                HTTPParameters: &shared.PipeEnrichmentHTTPParameters{
                    HeaderParameters: map[string]string{
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                    PathParameterValues: []string{
                        "debitis",
                        "ipsa",
                    },
                    QueryStringParameters: map[string]string{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                },
                InputTemplate: sdk.String("nisi"),
            },
            RoleArn: "recusandae",
            Source: "temporibus",
            SourceParameters: &operations.CreatePipeRequestBodySourceParameters{
                ActiveMQBrokerParameters: &shared.PipeSourceActiveMQBrokerParameters{
                    BatchSize: sdk.Int64(71036),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("quis"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(87129),
                    QueueName: "deserunt",
                },
                DynamoDBStreamParameters: &shared.PipeSourceDynamoDBStreamParameters{
                    BatchSize: sdk.Int64(20218),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("ipsam"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(832620),
                    MaximumRecordAgeInSeconds: sdk.Int64(957156),
                    MaximumRetryAttempts: sdk.Int64(778157),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(140350),
                    StartingPosition: shared.DynamoDBStreamStartPositionEnumLatest,
                },
                FilterCriteria: &shared.FilterCriteria{
                    Filters: []shared.Filter{
                        shared.Filter{
                            Pattern: sdk.String("maiores"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("molestiae"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("quod"),
                        },
                        shared.Filter{
                            Pattern: sdk.String("quod"),
                        },
                    },
                },
                KinesisStreamParameters: &shared.PipeSourceKinesisStreamParameters{
                    BatchSize: sdk.Int64(461479),
                    DeadLetterConfig: &shared.DeadLetterConfig{
                        Arn: sdk.String("totam"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(780529),
                    MaximumRecordAgeInSeconds: sdk.Int64(678880),
                    MaximumRetryAttempts: sdk.Int64(118274),
                    OnPartialBatchItemFailure: shared.OnPartialBatchItemFailureStreamsEnumAutomaticBisect.ToPointer(),
                    ParallelizationFactor: sdk.Int64(720633),
                    StartingPosition: shared.KinesisStreamStartPositionEnumLatest,
                    StartingPositionTimestamp: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
                },
                ManagedStreamingKafkaParameters: &shared.PipeSourceManagedStreamingKafkaParameters{
                    BatchSize: sdk.Int64(537373),
                    ConsumerGroupID: sdk.String("hic"),
                    Credentials: &shared.MSKAccessCredentials{
                        ClientCertificateTLSAuth: sdk.String("optio"),
                        SaslScram512Auth: sdk.String("totam"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(105907),
                    StartingPosition: shared.MSKStartPositionEnumTrimHorizon.ToPointer(),
                    TopicName: "molestiae",
                },
                RabbitMQBrokerParameters: &shared.PipeSourceRabbitMQBrokerParameters{
                    BatchSize: sdk.Int64(264555),
                    Credentials: shared.MQBrokerAccessCredentials{
                        BasicAuth: sdk.String("qui"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(774234),
                    QueueName: "cum",
                    VirtualHost: sdk.String("esse"),
                },
                SelfManagedKafkaParameters: &shared.PipeSourceSelfManagedKafkaParameters{
                    AdditionalBootstrapServers: []string{
                        "excepturi",
                    },
                    BatchSize: sdk.Int64(135218),
                    ConsumerGroupID: sdk.String("perferendis"),
                    Credentials: &shared.SelfManagedKafkaAccessConfigurationCredentials{
                        BasicAuth: sdk.String("ad"),
                        ClientCertificateTLSAuth: sdk.String("natus"),
                        SaslScram256Auth: sdk.String("sed"),
                        SaslScram512Auth: sdk.String("iste"),
                    },
                    MaximumBatchingWindowInSeconds: sdk.Int64(222321),
                    ServerRootCaCertificate: sdk.String("natus"),
                    StartingPosition: shared.SelfManagedKafkaStartPositionEnumTrimHorizon.ToPointer(),
                    TopicName: "hic",
                    Vpc: &shared.SelfManagedKafkaAccessConfigurationVpc{
                        SecurityGroup: []string{
                            "fuga",
                            "in",
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
                    BatchSize: sdk.Int64(99280),
                    MaximumBatchingWindowInSeconds: sdk.Int64(60225),
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
                        Size: sdk.Int64(607831),
                    },
                    ContainerOverrides: &shared.BatchContainerOverrides{
                        Command: []string{
                            "minima",
                            "excepturi",
                        },
                        Environment: []shared.BatchEnvironmentVariable{
                            shared.BatchEnvironmentVariable{
                                Name: sdk.String("Cecilia Yundt MD"),
                                Value: sdk.String("dolorem"),
                            },
                        },
                        InstanceType: sdk.String("culpa"),
                        ResourceRequirements: []shared.BatchResourceRequirement{
                            shared.BatchResourceRequirement{
                                Type: shared.BatchResourceRequirementTypeEnumVcpu,
                                Value: "mollitia",
                            },
                        },
                    },
                    DependsOn: []shared.BatchJobDependency{
                        shared.BatchJobDependency{
                            JobID: sdk.String("numquam"),
                            Type: shared.BatchJobDependencyTypeEnumNToN.ToPointer(),
                        },
                        shared.BatchJobDependency{
                            JobID: sdk.String("quam"),
                            Type: shared.BatchJobDependencyTypeEnumNToN.ToPointer(),
                        },
                        shared.BatchJobDependency{
                            JobID: sdk.String("velit"),
                            Type: shared.BatchJobDependencyTypeEnumSequential.ToPointer(),
                        },
                    },
                    JobDefinition: "quia",
                    JobName: "quis",
                    Parameters: map[string]string{
                        "laborum": "animi",
                    },
                    RetryStrategy: &shared.BatchRetryStrategy{
                        Attempts: sdk.Int64(317202),
                    },
                },
                CloudWatchLogsParameters: &shared.PipeTargetCloudWatchLogsParameters{
                    LogStreamName: sdk.String("odit"),
                    Timestamp: sdk.String("quo"),
                },
                EcsTaskParameters: &shared.PipeTargetEcsTaskParameters{
                    CapacityProviderStrategy: []shared.CapacityProviderStrategyItem{
                        shared.CapacityProviderStrategyItem{
                            Base: sdk.Int64(949572),
                            CapacityProvider: "ipsam",
                            Weight: sdk.Int64(662527),
                        },
                    },
                    EnableECSManagedTags: sdk.Bool(false),
                    EnableExecuteCommand: sdk.Bool(false),
                    Group: sdk.String("possimus"),
                    LaunchType: shared.LaunchTypeEnumEc2.ToPointer(),
                    NetworkConfiguration: &shared.NetworkConfiguration{
                        AwsvpcConfiguration: &shared.AwsVpcConfiguration{
                            AssignPublicIP: shared.AssignPublicIPEnumEnabled.ToPointer(),
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
                                CPU: sdk.Int64(451159),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Sharon Kiehn"),
                                        Value: sdk.String("dicta"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Miss Valerie Kshlerin"),
                                        Value: sdk.String("accusamus"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Elvira Bergnaum"),
                                        Value: sdk.String("molestias"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "pariatur",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "modi",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "praesentium",
                                    },
                                },
                                Memory: sdk.Int64(523248),
                                MemoryReservation: sdk.Int64(916723),
                                Name: sdk.String("Dr. Casey Mayer"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "est",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "explicabo",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "distinctio",
                                    "quibusdam",
                                    "labore",
                                },
                                CPU: sdk.Int64(264730),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Mr. Shelly Lueilwitz"),
                                        Value: sdk.String("ipsam"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "fugit",
                                    },
                                },
                                Memory: sdk.Int64(677817),
                                MemoryReservation: sdk.Int64(569618),
                                Name: sdk.String("Olivia Rice"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "eligendi",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
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
                                CPU: sdk.Int64(223081),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Wilbur King"),
                                        Value: sdk.String("maiores"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Keith Gulgowski"),
                                        Value: sdk.String("ea"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Kayla Thompson"),
                                        Value: sdk.String("enim"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Toby Pouros"),
                                        Value: sdk.String("id"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "deleniti",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "sapiente",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "amet",
                                    },
                                },
                                Memory: sdk.Int64(643990),
                                MemoryReservation: sdk.Int64(394869),
                                Name: sdk.String("Ada Moen IV"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "id",
                                    },
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumGpu,
                                        Value: "labore",
                                    },
                                },
                            },
                            shared.EcsContainerOverride{
                                Command: []string{
                                    "natus",
                                    "nobis",
                                },
                                CPU: sdk.Int64(428769),
                                Environment: []shared.EcsEnvironmentVariable{
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Ms. Julie Gusikowski"),
                                        Value: sdk.String("provident"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Kirk Bartoletti"),
                                        Value: sdk.String("mollitia"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Natalie Ernser"),
                                        Value: sdk.String("nemo"),
                                    },
                                    shared.EcsEnvironmentVariable{
                                        Name: sdk.String("Vera Wyman"),
                                        Value: sdk.String("maxime"),
                                    },
                                },
                                EnvironmentFiles: []shared.EcsEnvironmentFile{
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "facilis",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "in",
                                    },
                                    shared.EcsEnvironmentFile{
                                        Type: shared.EcsEnvironmentFileTypeEnumS3,
                                        Value: "architecto",
                                    },
                                },
                                Memory: sdk.Int64(99569),
                                MemoryReservation: sdk.Int64(919483),
                                Name: sdk.String("Lola Koss"),
                                ResourceRequirements: []shared.EcsResourceRequirement{
                                    shared.EcsResourceRequirement{
                                        Type: shared.EcsResourceRequirementTypeEnumInferenceAccelerator,
                                        Value: "pariatur",
                                    },
                                },
                            },
                        },
                        CPU: sdk.String("accusantium"),
                        EphemeralStorage: &shared.EcsEphemeralStorage{
                            SizeInGiB: 162493,
                        },
                        ExecutionRoleArn: sdk.String("praesentium"),
                        InferenceAcceleratorOverrides: []shared.EcsInferenceAcceleratorOverride{
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("magni"),
                                DeviceType: sdk.String("sunt"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("quo"),
                                DeviceType: sdk.String("illum"),
                            },
                            shared.EcsInferenceAcceleratorOverride{
                                DeviceName: sdk.String("pariatur"),
                                DeviceType: sdk.String("maxime"),
                            },
                        },
                        Memory: sdk.String("ea"),
                        TaskRoleArn: sdk.String("excepturi"),
                    },
                    PlacementConstraints: []shared.PlacementConstraint{
                        shared.PlacementConstraint{
                            Expression: sdk.String("ea"),
                            Type: shared.PlacementConstraintTypeEnumDistinctInstance.ToPointer(),
                        },
                    },
                    PlacementStrategy: []shared.PlacementStrategy{
                        shared.PlacementStrategy{
                            Field: sdk.String("maiores"),
                            Type: shared.PlacementStrategyTypeEnumBinpack.ToPointer(),
                        },
                    },
                    PlatformVersion: sdk.String("ipsam"),
                    PropagateTags: shared.PropagateTagsEnumTaskDefinition.ToPointer(),
                    ReferenceID: sdk.String("voluptate"),
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "nam",
                            Value: "eaque",
                        },
                        shared.Tag{
                            Key: "pariatur",
                            Value: "nemo",
                        },
                    },
                    TaskCount: sdk.Int64(975522),
                    TaskDefinitionArn: "perferendis",
                },
                EventBridgeEventBusParameters: &shared.PipeTargetEventBridgeEventBusParameters{
                    DetailType: sdk.String("fugiat"),
                    EndpointID: sdk.String("amet"),
                    Resources: []string{
                        "cumque",
                    },
                    Source: sdk.String("corporis"),
                    Time: sdk.String("hic"),
                },
                HTTPParameters: &shared.PipeTargetHTTPParameters{
                    HeaderParameters: map[string]string{
                        "nobis": "dolores",
                        "quis": "totam",
                        "dignissimos": "eaque",
                    },
                    PathParameterValues: []string{
                        "nesciunt",
                        "eos",
                    },
                    QueryStringParameters: map[string]string{
                        "dolores": "minus",
                    },
                },
                InputTemplate: sdk.String("quam"),
                KinesisStreamParameters: &shared.PipeTargetKinesisStreamParameters{
                    PartitionKey: "dolor",
                },
                LambdaFunctionParameters: &shared.PipeTargetLambdaFunctionParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumFireAndForget.ToPointer(),
                },
                RedshiftDataParameters: &shared.PipeTargetRedshiftDataParameters{
                    Database: "nostrum",
                    DbUser: sdk.String("hic"),
                    SecretManagerArn: sdk.String("recusandae"),
                    Sqls: []string{
                        "facilis",
                        "perspiciatis",
                        "voluptatem",
                    },
                    StatementName: sdk.String("porro"),
                    WithEvent: sdk.Bool(false),
                },
                SageMakerPipelineParameters: &shared.PipeTargetSageMakerPipelineParameters{
                    PipelineParameterList: []shared.SageMakerPipelineParameter{
                        shared.SageMakerPipelineParameter{
                            Name: "blanditiis",
                            Value: "error",
                        },
                    },
                },
                SqsQueueParameters: &shared.PipeTargetSqsQueueParameters{
                    MessageDeduplicationID: sdk.String("eaque"),
                    MessageGroupID: sdk.String("occaecati"),
                },
                StepFunctionStateMachineParameters: &shared.PipeTargetStateMachineParameters{
                    InvocationType: shared.PipeTargetInvocationTypeEnumFireAndForget.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreatePipe](docs/sdk/README.md#createpipe) - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* [DeletePipe](docs/sdk/README.md#deletepipe) - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [DescribePipe](docs/sdk/README.md#describepipe) - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [ListPipes](docs/sdk/README.md#listpipes) - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Displays the tags associated with a pipe.
* [StartPipe](docs/sdk/README.md#startpipe) - Start an existing pipe.
* [StopPipe](docs/sdk/README.md#stoppipe) - Stop an existing pipe.
* [TagResource](docs/sdk/README.md#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified pipes.
* [UpdatePipe](docs/sdk/README.md#updatepipe) - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
