# SDK

## Overview

Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need for specialized knowledge and integration code when developing event driven architectures. This helps ensures consistency across your company’s applications. With Pipes, the target can be any available EventBridge target. To set up a pipe, you select the event source, add optional event filtering, define optional enrichment, and select the target for the event data. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/pipes/>
### Available Operations

* [createPipe](#createpipe) - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* [deletePipe](#deletepipe) - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [describePipe](#describepipe) - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [listPipes](#listpipes) - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a pipe.
* [startPipe](#startpipe) - Start an existing pipe.
* [stopPipe](#stoppipe) - Stop an existing pipe.
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified pipes.
* [updatePipe](#updatepipe) - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

## createPipe

Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipeRequest;
import org.openapis.openapi.models.operations.CreatePipeRequestBody;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyDesiredStateEnum;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyEnrichmentParameters;
import org.openapis.openapi.models.operations.CreatePipeRequestBodySourceParameters;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyTargetParameters;
import org.openapis.openapi.models.operations.CreatePipeResponse;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.BatchArrayProperties;
import org.openapis.openapi.models.shared.BatchContainerOverrides;
import org.openapis.openapi.models.shared.BatchEnvironmentVariable;
import org.openapis.openapi.models.shared.BatchJobDependency;
import org.openapis.openapi.models.shared.BatchJobDependencyTypeEnum;
import org.openapis.openapi.models.shared.BatchResourceRequirement;
import org.openapis.openapi.models.shared.BatchResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.BatchRetryStrategy;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.DynamoDBStreamStartPositionEnum;
import org.openapis.openapi.models.shared.EcsContainerOverride;
import org.openapis.openapi.models.shared.EcsEnvironmentFile;
import org.openapis.openapi.models.shared.EcsEnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EcsEnvironmentVariable;
import org.openapis.openapi.models.shared.EcsEphemeralStorage;
import org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride;
import org.openapis.openapi.models.shared.EcsResourceRequirement;
import org.openapis.openapi.models.shared.EcsResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.EcsTaskOverride;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterCriteria;
import org.openapis.openapi.models.shared.KinesisStreamStartPositionEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.MQBrokerAccessCredentials;
import org.openapis.openapi.models.shared.MSKAccessCredentials;
import org.openapis.openapi.models.shared.MSKStartPositionEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.OnPartialBatchItemFailureStreamsEnum;
import org.openapis.openapi.models.shared.PipeEnrichmentHttpParameters;
import org.openapis.openapi.models.shared.PipeSourceActiveMQBrokerParameters;
import org.openapis.openapi.models.shared.PipeSourceDynamoDBStreamParameters;
import org.openapis.openapi.models.shared.PipeSourceKinesisStreamParameters;
import org.openapis.openapi.models.shared.PipeSourceManagedStreamingKafkaParameters;
import org.openapis.openapi.models.shared.PipeSourceRabbitMQBrokerParameters;
import org.openapis.openapi.models.shared.PipeSourceSelfManagedKafkaParameters;
import org.openapis.openapi.models.shared.PipeSourceSqsQueueParameters;
import org.openapis.openapi.models.shared.PipeTargetBatchJobParameters;
import org.openapis.openapi.models.shared.PipeTargetCloudWatchLogsParameters;
import org.openapis.openapi.models.shared.PipeTargetEcsTaskParameters;
import org.openapis.openapi.models.shared.PipeTargetEventBridgeEventBusParameters;
import org.openapis.openapi.models.shared.PipeTargetHttpParameters;
import org.openapis.openapi.models.shared.PipeTargetInvocationTypeEnum;
import org.openapis.openapi.models.shared.PipeTargetKinesisStreamParameters;
import org.openapis.openapi.models.shared.PipeTargetLambdaFunctionParameters;
import org.openapis.openapi.models.shared.PipeTargetRedshiftDataParameters;
import org.openapis.openapi.models.shared.PipeTargetSageMakerPipelineParameters;
import org.openapis.openapi.models.shared.PipeTargetSqsQueueParameters;
import org.openapis.openapi.models.shared.PipeTargetStateMachineParameters;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationCredentials;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationVpc;
import org.openapis.openapi.models.shared.SelfManagedKafkaStartPositionEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipeRequest req = new CreatePipeRequest("odio",                 new CreatePipeRequestBody("quaerat", "accusamus", "quidem") {{
                                description = "voluptatibus";
                                desiredState = CreatePipeRequestBodyDesiredStateEnum.RUNNING;
                                enrichment = "natus";
                                enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters() {{
                                    httpParameters = new PipeEnrichmentHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("atque", "sit");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("ab"),
                                            add("soluta"),
                                            add("dolorum"),
                                            add("iusto"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("dolorum", "deleniti");
                                            put("omnis", "necessitatibus");
                                        }};
                                    }};;
                                    inputTemplate = "distinctio";
                                }};;
                                sourceParameters = new CreatePipeRequestBodySourceParameters() {{
                                    activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "asperiores";
                                                    }};, "nihil") {{
                                        batchSize = 216897L;
                                        maximumBatchingWindowInSeconds = 456015L;
                                    }};;
                                    dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters(DynamoDBStreamStartPositionEnum.LATEST) {{
                                        batchSize = 906418L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "eius";
                                        }};;
                                        maximumBatchingWindowInSeconds = 137220L;
                                        maximumRecordAgeInSeconds = 20651L;
                                        maximumRetryAttempts = 229219L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 758379L;
                                    }};;
                                    filterCriteria = new FilterCriteria() {{
                                        filters = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                pattern = "ad";
                                            }}),
                                            add(new Filter() {{
                                                pattern = "saepe";
                                            }}),
                                            add(new Filter() {{
                                                pattern = "suscipit";
                                            }}),
                                            add(new Filter() {{
                                                pattern = "deserunt";
                                            }}),
                                        }};
                                    }};;
                                    kinesisStreamParameters = new PipeSourceKinesisStreamParameters(KinesisStreamStartPositionEnum.LATEST) {{
                                        batchSize = 324683L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "repellendus";
                                        }};;
                                        maximumBatchingWindowInSeconds = 519711L;
                                        maximumRecordAgeInSeconds = 628982L;
                                        maximumRetryAttempts = 55L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 872651L;
                                        startingPositionTimestamp = OffsetDateTime.parse("2022-09-23T03:46:17.712Z");
                                    }};;
                                    managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters("vel") {{
                                        batchSize = 798047L;
                                        consumerGroupID = "officiis";
                                        credentials = new MSKAccessCredentials() {{
                                            clientCertificateTlsAuth = "qui";
                                            saslScram512Auth = "dolorum";
                                        }};;
                                        maximumBatchingWindowInSeconds = 952792L;
                                        startingPosition = MSKStartPositionEnum.TRIM_HORIZON;
                                    }};;
                                    rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "harum";
                                                    }};, "iusto") {{
                                        batchSize = 215507L;
                                        maximumBatchingWindowInSeconds = 788740L;
                                        virtualHost = "tenetur";
                                    }};;
                                    selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters("amet") {{
                                        additionalBootstrapServers = new String[]{{
                                            add("accusamus"),
                                            add("numquam"),
                                            add("enim"),
                                        }};
                                        batchSize = 213312L;
                                        consumerGroupID = "sapiente";
                                        credentials = new SelfManagedKafkaAccessConfigurationCredentials() {{
                                            basicAuth = "totam";
                                            clientCertificateTlsAuth = "nihil";
                                            saslScram256Auth = "sit";
                                            saslScram512Auth = "expedita";
                                        }};;
                                        maximumBatchingWindowInSeconds = 207470L;
                                        serverRootCaCertificate = "sed";
                                        startingPosition = SelfManagedKafkaStartPositionEnum.TRIM_HORIZON;
                                        vpc = new SelfManagedKafkaAccessConfigurationVpc() {{
                                            securityGroup = new String[]{{
                                                add("voluptas"),
                                                add("deserunt"),
                                                add("quam"),
                                            }};
                                            subnets = new String[]{{
                                                add("incidunt"),
                                            }};
                                        }};;
                                    }};;
                                    sqsQueueParameters = new PipeSourceSqsQueueParameters() {{
                                        batchSize = 186458L;
                                        maximumBatchingWindowInSeconds = 586784L;
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("pariatur", "soluta");
                                    put("dicta", "laborum");
                                    put("totam", "incidunt");
                                    put("aspernatur", "dolores");
                                }};
                                targetParameters = new CreatePipeRequestBodyTargetParameters() {{
                                    batchJobParameters = new PipeTargetBatchJobParameters("distinctio", "facilis") {{
                                        arrayProperties = new BatchArrayProperties() {{
                                            size = 396060L;
                                        }};;
                                        containerOverrides = new BatchContainerOverrides() {{
                                            command = new String[]{{
                                                add("molestias"),
                                                add("temporibus"),
                                            }};
                                            environment = new org.openapis.openapi.models.shared.BatchEnvironmentVariable[]{{
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Beverly Cummerata II";
                                                    value = "nam";
                                                }}),
                                            }};
                                            instanceType = "hic";
                                            resourceRequirements = new org.openapis.openapi.models.shared.BatchResourceRequirement[]{{
                                                add(new BatchResourceRequirement(BatchResourceRequirementTypeEnum.VCPU, "et") {{
                                                    type = BatchResourceRequirementTypeEnum.VCPU;
                                                    value = "soluta";
                                                }}),
                                            }};
                                        }};;
                                        dependsOn = new org.openapis.openapi.models.shared.BatchJobDependency[]{{
                                            add(new BatchJobDependency() {{
                                                jobId = "ipsum";
                                                type = BatchJobDependencyTypeEnum.N_TO_N;
                                            }}),
                                            add(new BatchJobDependency() {{
                                                jobId = "nobis";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                            add(new BatchJobDependency() {{
                                                jobId = "tempore";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                            add(new BatchJobDependency() {{
                                                jobId = "aperiam";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("dolore", "labore");
                                        }};
                                        retryStrategy = new BatchRetryStrategy() {{
                                            attempts = 240829L;
                                        }};;
                                    }};;
                                    cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters() {{
                                        logStreamName = "dolorum";
                                        timestamp = "architecto";
                                    }};;
                                    ecsTaskParameters = new PipeTargetEcsTaskParameters("quae") {{
                                        capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                            add(new CapacityProviderStrategyItem("est") {{
                                                base = 555649L;
                                                capacityProvider = "itaque";
                                                weight = 9240L;
                                            }}),
                                        }};
                                        enableECSManagedTags = false;
                                        enableExecuteCommand = false;
                                        group = "repellendus";
                                        launchType = LaunchTypeEnum.EXTERNAL;
                                        networkConfiguration = new NetworkConfiguration() {{
                                            awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                add("ut"),
                                                                add("facilis"),
                                                                add("cupiditate"),
                                                                add("qui"),
                                                            }}) {{
                                                assignPublicIp = AssignPublicIpEnum.ENABLED;
                                                securityGroups = new String[]{{
                                                    add("odio"),
                                                    add("occaecati"),
                                                    add("voluptatibus"),
                                                }};
                                            }};;
                                        }};;
                                        overrides = new EcsTaskOverride() {{
                                            containerOverrides = new org.openapis.openapi.models.shared.EcsContainerOverride[]{{
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("omnis"),
                                                        add("quis"),
                                                        add("ipsum"),
                                                        add("delectus"),
                                                    }};
                                                    cpu = 455169L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Roman Kulas";
                                                            value = "quod";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "facilis") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "similique";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "ducimus") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "vero";
                                                        }}),
                                                    }};
                                                    memory = 293020L;
                                                    memoryReservation = 844550L;
                                                    name = "Earl Mosciski DVM";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "maiores") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "fugit";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "ducimus") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "iusto";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("officia"),
                                                    }};
                                                    cpu = 269479L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Judy Keebler";
                                                            value = "ratione";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Mabel Cartwright";
                                                            value = "quasi";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "excepturi") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "nulla";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "nostrum") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "voluptatibus";
                                                        }}),
                                                    }};
                                                    memory = 960835L;
                                                    memoryReservation = 788873L;
                                                    name = "Nathaniel Ryan";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "quo") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "magnam";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "minima") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "recusandae";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("a"),
                                                    }};
                                                    cpu = 725595L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Margie Russel";
                                                            value = "accusamus";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "et") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "non";
                                                        }}),
                                                    }};
                                                    memory = 677412L;
                                                    memoryReservation = 672048L;
                                                    name = "Lee Kemmer";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "libero") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "nulla";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "explicabo") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "tempora";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "magnam") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "ipsa";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("eius"),
                                                        add("esse"),
                                                    }};
                                                    cpu = 456141L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Mitchell Predovic";
                                                            value = "eum";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Angelina Davis";
                                                            value = "veritatis";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Amelia Predovic";
                                                            value = "illum";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "eius") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "fuga";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "voluptas") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "eos";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "cupiditate") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "ab";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "tempora") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "consequatur";
                                                        }}),
                                                    }};
                                                    memory = 892050L;
                                                    memoryReservation = 370853L;
                                                    name = "Emily Satterfield";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "inventore") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "quod";
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            cpu = "nihil";
                                            ephemeralStorage = new EcsEphemeralStorage(518835L);;
                                            executionRoleArn = "accusamus";
                                            inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride[]{{
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "odio";
                                                    deviceType = "occaecati";
                                                }}),
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "commodi";
                                                    deviceType = "sapiente";
                                                }}),
                                            }};
                                            memory = "dolores";
                                            taskRoleArn = "deserunt";
                                        }};;
                                        placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                            add(new PlacementConstraint() {{
                                                expression = "accusantium";
                                                type = PlacementConstraintTypeEnum.MEMBER_OF;
                                            }}),
                                            add(new PlacementConstraint() {{
                                                expression = "eum";
                                                type = PlacementConstraintTypeEnum.MEMBER_OF;
                                            }}),
                                        }};
                                        placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                            add(new PlacementStrategy() {{
                                                field = "consequuntur";
                                                type = PlacementStrategyTypeEnum.SPREAD;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "fugit";
                                                type = PlacementStrategyTypeEnum.BINPACK;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "mollitia";
                                                type = PlacementStrategyTypeEnum.RANDOM;
                                            }}),
                                        }};
                                        platformVersion = "atque";
                                        propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                        referenceId = "explicabo";
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("sapiente", "consequuntur") {{
                                                key = "nisi";
                                                value = "fugit";
                                            }}),
                                            add(new Tag("saepe", "occaecati") {{
                                                key = "ratione";
                                                value = "explicabo";
                                            }}),
                                        }};
                                        taskCount = 543806L;
                                    }};;
                                    eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters() {{
                                        detailType = "et";
                                        endpointId = "esse";
                                        resources = new String[]{{
                                            add("accusamus"),
                                            add("veritatis"),
                                            add("esse"),
                                            add("quod"),
                                        }};
                                        source = "nam";
                                        time = "vero";
                                    }};;
                                    httpParameters = new PipeTargetHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("quasi", "saepe");
                                            put("vel", "harum");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("rerum"),
                                            add("occaecati"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("distinctio", "eligendi");
                                            put("sit", "culpa");
                                        }};
                                    }};;
                                    inputTemplate = "tempore";
                                    kinesisStreamParameters = new PipeTargetKinesisStreamParameters("adipisci");;
                                    lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.FIRE_AND_FORGET;
                                    }};;
                                    redshiftDataParameters = new PipeTargetRedshiftDataParameters("consequuntur",                 new String[]{{
                                                        add("minus"),
                                                    }}) {{
                                        dbUser = "quaerat";
                                        secretManagerArn = "sapiente";
                                        statementName = "consectetur";
                                        withEvent = false;
                                    }};;
                                    sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters() {{
                                        pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                            add(new SageMakerPipelineParameter("a", "nulla") {{
                                                name = "blanditiis";
                                                value = "provident";
                                            }}),
                                            add(new SageMakerPipelineParameter("quasi", "a") {{
                                                name = "quas";
                                                value = "esse";
                                            }}),
                                        }};
                                    }};;
                                    sqsQueueParameters = new PipeTargetSqsQueueParameters() {{
                                        messageDeduplicationId = "error";
                                        messageGroupId = "sint";
                                    }};;
                                    stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.FIRE_AND_FORGET;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "quia";
                xAmzCredential = "eveniet";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facere";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreatePipeResponse res = sdk.sdk.createPipe(req);

            if (res.createPipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipe

Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipeRequest;
import org.openapis.openapi.models.operations.DeletePipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePipeRequest req = new DeletePipeRequest("similique") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "tenetur";
                xAmzDate = "quae";
                xAmzSecurityToken = "earum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "in";
            }};            

            DeletePipeResponse res = sdk.sdk.deletePipe(req);

            if (res.deletePipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePipe

Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePipeRequest;
import org.openapis.openapi.models.operations.DescribePipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePipeRequest req = new DescribePipeRequest("libero") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            DescribePipeResponse res = sdk.sdk.describePipe(req);

            if (res.describePipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipes

Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipesCurrentStateEnum;
import org.openapis.openapi.models.operations.ListPipesDesiredStateEnum;
import org.openapis.openapi.models.operations.ListPipesRequest;
import org.openapis.openapi.models.operations.ListPipesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipesRequest req = new ListPipesRequest() {{
                currentState = ListPipesCurrentStateEnum.UPDATING;
                desiredState = ListPipesDesiredStateEnum.RUNNING;
                limit = 16328L;
                namePrefix = "voluptatum";
                nextToken = "qui";
                sourcePrefix = "quibusdam";
                targetPrefix = "ex";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            ListPipesResponse res = sdk.sdk.listPipes(req);

            if (res.listPipesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with a pipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("et") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startPipe

Start an existing pipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPipeRequest;
import org.openapis.openapi.models.operations.StartPipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartPipeRequest req = new StartPipeRequest("accusantium") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
            }};            

            StartPipeResponse res = sdk.sdk.startPipe(req);

            if (res.startPipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPipe

Stop an existing pipe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPipeRequest;
import org.openapis.openapi.models.operations.StopPipeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopPipeRequest req = new StopPipeRequest("voluptatem") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "impedit";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "aut";
            }};            

            StopPipeResponse res = sdk.sdk.stopPipe(req);

            if (res.stopPipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("maiores", "natus");
                                            }});, "velit") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified pipes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("officia",                 new String[]{{
                                add("dignissimos"),
                                add("officia"),
                                add("asperiores"),
                                add("nemo"),
                            }}) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "porro";
                xAmzDate = "quod";
                xAmzSecurityToken = "labore";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "adipisci";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipe

<p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipeRequest;
import org.openapis.openapi.models.operations.UpdatePipeRequestBody;
import org.openapis.openapi.models.operations.UpdatePipeRequestBodyDesiredStateEnum;
import org.openapis.openapi.models.operations.UpdatePipeRequestBodyEnrichmentParameters;
import org.openapis.openapi.models.operations.UpdatePipeRequestBodySourceParameters;
import org.openapis.openapi.models.operations.UpdatePipeRequestBodyTargetParameters;
import org.openapis.openapi.models.operations.UpdatePipeResponse;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.BatchArrayProperties;
import org.openapis.openapi.models.shared.BatchContainerOverrides;
import org.openapis.openapi.models.shared.BatchEnvironmentVariable;
import org.openapis.openapi.models.shared.BatchJobDependency;
import org.openapis.openapi.models.shared.BatchJobDependencyTypeEnum;
import org.openapis.openapi.models.shared.BatchResourceRequirement;
import org.openapis.openapi.models.shared.BatchResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.BatchRetryStrategy;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.EcsContainerOverride;
import org.openapis.openapi.models.shared.EcsEnvironmentFile;
import org.openapis.openapi.models.shared.EcsEnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EcsEnvironmentVariable;
import org.openapis.openapi.models.shared.EcsEphemeralStorage;
import org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride;
import org.openapis.openapi.models.shared.EcsResourceRequirement;
import org.openapis.openapi.models.shared.EcsResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.EcsTaskOverride;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterCriteria;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.MQBrokerAccessCredentials;
import org.openapis.openapi.models.shared.MSKAccessCredentials;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.OnPartialBatchItemFailureStreamsEnum;
import org.openapis.openapi.models.shared.PipeEnrichmentHttpParameters;
import org.openapis.openapi.models.shared.PipeTargetBatchJobParameters;
import org.openapis.openapi.models.shared.PipeTargetCloudWatchLogsParameters;
import org.openapis.openapi.models.shared.PipeTargetEcsTaskParameters;
import org.openapis.openapi.models.shared.PipeTargetEventBridgeEventBusParameters;
import org.openapis.openapi.models.shared.PipeTargetHttpParameters;
import org.openapis.openapi.models.shared.PipeTargetInvocationTypeEnum;
import org.openapis.openapi.models.shared.PipeTargetKinesisStreamParameters;
import org.openapis.openapi.models.shared.PipeTargetLambdaFunctionParameters;
import org.openapis.openapi.models.shared.PipeTargetRedshiftDataParameters;
import org.openapis.openapi.models.shared.PipeTargetSageMakerPipelineParameters;
import org.openapis.openapi.models.shared.PipeTargetSqsQueueParameters;
import org.openapis.openapi.models.shared.PipeTargetStateMachineParameters;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationCredentials;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationVpc;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdatePipeSourceActiveMQBrokerParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceDynamoDBStreamParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceKinesisStreamParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceManagedStreamingKafkaParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceRabbitMQBrokerParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceSelfManagedKafkaParameters;
import org.openapis.openapi.models.shared.UpdatePipeSourceSqsQueueParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipeRequest req = new UpdatePipeRequest("id",                 new UpdatePipeRequestBody("suscipit") {{
                                description = "velit";
                                desiredState = UpdatePipeRequestBodyDesiredStateEnum.STOPPED;
                                enrichment = "est";
                                enrichmentParameters = new UpdatePipeRequestBodyEnrichmentParameters() {{
                                    httpParameters = new PipeEnrichmentHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("totam", "fugiat");
                                            put("vel", "ducimus");
                                            put("quos", "vel");
                                            put("labore", "possimus");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("cum"),
                                            add("commodi"),
                                            add("in"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("reiciendis", "assumenda");
                                            put("nemo", "recusandae");
                                        }};
                                    }};;
                                    inputTemplate = "aliquid";
                                }};;
                                sourceParameters = new UpdatePipeRequestBodySourceParameters() {{
                                    activeMQBrokerParameters = new UpdatePipeSourceActiveMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "aperiam";
                                                    }};) {{
                                        batchSize = 738683L;
                                        maximumBatchingWindowInSeconds = 232627L;
                                    }};;
                                    dynamoDBStreamParameters = new UpdatePipeSourceDynamoDBStreamParameters() {{
                                        batchSize = 449083L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "exercitationem";
                                        }};;
                                        maximumBatchingWindowInSeconds = 937285L;
                                        maximumRecordAgeInSeconds = 814967L;
                                        maximumRetryAttempts = 257233L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 985492L;
                                    }};;
                                    filterCriteria = new FilterCriteria() {{
                                        filters = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                pattern = "reiciendis";
                                            }}),
                                            add(new Filter() {{
                                                pattern = "quidem";
                                            }}),
                                        }};
                                    }};;
                                    kinesisStreamParameters = new UpdatePipeSourceKinesisStreamParameters() {{
                                        batchSize = 904949L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "necessitatibus";
                                        }};;
                                        maximumBatchingWindowInSeconds = 296556L;
                                        maximumRecordAgeInSeconds = 121059L;
                                        maximumRetryAttempts = 992012L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 241545L;
                                    }};;
                                    managedStreamingKafkaParameters = new UpdatePipeSourceManagedStreamingKafkaParameters() {{
                                        batchSize = 249420L;
                                        credentials = new MSKAccessCredentials() {{
                                            clientCertificateTlsAuth = "amet";
                                            saslScram512Auth = "beatae";
                                        }};;
                                        maximumBatchingWindowInSeconds = 489509L;
                                    }};;
                                    rabbitMQBrokerParameters = new UpdatePipeSourceRabbitMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "a";
                                                    }};) {{
                                        batchSize = 891523L;
                                        maximumBatchingWindowInSeconds = 233420L;
                                    }};;
                                    selfManagedKafkaParameters = new UpdatePipeSourceSelfManagedKafkaParameters() {{
                                        batchSize = 358107L;
                                        credentials = new SelfManagedKafkaAccessConfigurationCredentials() {{
                                            basicAuth = "harum";
                                            clientCertificateTlsAuth = "laboriosam";
                                            saslScram256Auth = "ipsa";
                                            saslScram512Auth = "voluptates";
                                        }};;
                                        maximumBatchingWindowInSeconds = 730709L;
                                        serverRootCaCertificate = "vitae";
                                        vpc = new SelfManagedKafkaAccessConfigurationVpc() {{
                                            securityGroup = new String[]{{
                                                add("similique"),
                                                add("tempora"),
                                                add("aspernatur"),
                                                add("voluptas"),
                                            }};
                                            subnets = new String[]{{
                                                add("voluptas"),
                                                add("minima"),
                                            }};
                                        }};;
                                    }};;
                                    sqsQueueParameters = new UpdatePipeSourceSqsQueueParameters() {{
                                        batchSize = 748789L;
                                        maximumBatchingWindowInSeconds = 680116L;
                                    }};;
                                }};;
                                target = "adipisci";
                                targetParameters = new UpdatePipeRequestBodyTargetParameters() {{
                                    batchJobParameters = new PipeTargetBatchJobParameters("minus", "dolores") {{
                                        arrayProperties = new BatchArrayProperties() {{
                                            size = 503934L;
                                        }};;
                                        containerOverrides = new BatchContainerOverrides() {{
                                            command = new String[]{{
                                                add("dolore"),
                                                add("aliquam"),
                                            }};
                                            environment = new org.openapis.openapi.models.shared.BatchEnvironmentVariable[]{{
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Dustin Ferry";
                                                    value = "quas";
                                                }}),
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Danny Nader";
                                                    value = "totam";
                                                }}),
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Miss Jorge Rolfson";
                                                    value = "reiciendis";
                                                }}),
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Jaime Quigley";
                                                    value = "ab";
                                                }}),
                                            }};
                                            instanceType = "iste";
                                            resourceRequirements = new org.openapis.openapi.models.shared.BatchResourceRequirement[]{{
                                                add(new BatchResourceRequirement(BatchResourceRequirementTypeEnum.MEMORY, "commodi") {{
                                                    type = BatchResourceRequirementTypeEnum.VCPU;
                                                    value = "sed";
                                                }}),
                                                add(new BatchResourceRequirement(BatchResourceRequirementTypeEnum.MEMORY, "unde") {{
                                                    type = BatchResourceRequirementTypeEnum.VCPU;
                                                    value = "explicabo";
                                                }}),
                                            }};
                                        }};;
                                        dependsOn = new org.openapis.openapi.models.shared.BatchJobDependency[]{{
                                            add(new BatchJobDependency() {{
                                                jobId = "suscipit";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("illo", "reiciendis");
                                            put("perferendis", "corrupti");
                                            put("maiores", "incidunt");
                                            put("sed", "provident");
                                        }};
                                        retryStrategy = new BatchRetryStrategy() {{
                                            attempts = 258702L;
                                        }};;
                                    }};;
                                    cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters() {{
                                        logStreamName = "necessitatibus";
                                        timestamp = "ipsum";
                                    }};;
                                    ecsTaskParameters = new PipeTargetEcsTaskParameters("ea") {{
                                        capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                            add(new CapacityProviderStrategyItem("tempora") {{
                                                base = 552078L;
                                                capacityProvider = "voluptatibus";
                                                weight = 271653L;
                                            }}),
                                            add(new CapacityProviderStrategyItem("sit") {{
                                                base = 455444L;
                                                capacityProvider = "reiciendis";
                                                weight = 401713L;
                                            }}),
                                            add(new CapacityProviderStrategyItem("facilis") {{
                                                base = 248413L;
                                                capacityProvider = "officiis";
                                                weight = 505866L;
                                            }}),
                                        }};
                                        enableECSManagedTags = false;
                                        enableExecuteCommand = false;
                                        group = "quaerat";
                                        launchType = LaunchTypeEnum.EC2;
                                        networkConfiguration = new NetworkConfiguration() {{
                                            awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                add("debitis"),
                                                                add("rem"),
                                                            }}) {{
                                                assignPublicIp = AssignPublicIpEnum.ENABLED;
                                                securityGroups = new String[]{{
                                                    add("error"),
                                                    add("veniam"),
                                                    add("minima"),
                                                    add("recusandae"),
                                                }};
                                            }};;
                                        }};;
                                        overrides = new EcsTaskOverride() {{
                                            containerOverrides = new org.openapis.openapi.models.shared.EcsContainerOverride[]{{
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("magni"),
                                                        add("aperiam"),
                                                        add("saepe"),
                                                        add("numquam"),
                                                    }};
                                                    cpu = 329935L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Jack Langworth";
                                                            value = "cum";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Lee Lehner";
                                                            value = "expedita";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "dolorum") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "neque";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "officia") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "nostrum";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "corrupti") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "dolorum";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "tempora") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "accusamus";
                                                        }}),
                                                    }};
                                                    memory = 543678L;
                                                    memoryReservation = 148268L;
                                                    name = "Janis Bartell";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "sit") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "esse";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "corporis") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "quas";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("blanditiis"),
                                                    }};
                                                    cpu = 405942L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Gina Heathcote";
                                                            value = "consequatur";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "dolorem") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "reiciendis";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "dicta") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "harum";
                                                        }}),
                                                    }};
                                                    memory = 99416L;
                                                    memoryReservation = 577140L;
                                                    name = "Yvette Lind";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "deserunt") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "alias";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "provident") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "unde";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "perferendis") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "delectus";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "facere") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "quidem";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("praesentium"),
                                                        add("mollitia"),
                                                        add("veniam"),
                                                    }};
                                                    cpu = 29100L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Ryan Littel";
                                                            value = "totam";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Ms. Alison Schoen";
                                                            value = "assumenda";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Leah Mueller";
                                                            value = "accusamus";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Darrell Collier";
                                                            value = "corrupti";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "blanditiis") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "error";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "repudiandae") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "suscipit";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "atque") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "atque";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "recusandae") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "sunt";
                                                        }}),
                                                    }};
                                                    memory = 680697L;
                                                    memoryReservation = 829898L;
                                                    name = "Lela Baumbach Jr.";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "velit") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "enim";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("molestias"),
                                                        add("magnam"),
                                                        add("saepe"),
                                                        add("consequuntur"),
                                                    }};
                                                    cpu = 580107L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Arnold Ferry";
                                                            value = "consequuntur";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Amelia Harvey";
                                                            value = "illo";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Melody Vandervort";
                                                            value = "doloremque";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Ms. Melissa Larson";
                                                            value = "qui";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "necessitatibus") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "iure";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "laborum") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "ratione";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "voluptatum") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "distinctio";
                                                        }}),
                                                    }};
                                                    memory = 523006L;
                                                    memoryReservation = 304446L;
                                                    name = "Winifred Abernathy";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "maiores") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "voluptas";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "minima") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "dolores";
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            cpu = "dolore";
                                            ephemeralStorage = new EcsEphemeralStorage(680349L);;
                                            executionRoleArn = "nesciunt";
                                            inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride[]{{
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "recusandae";
                                                    deviceType = "omnis";
                                                }}),
                                            }};
                                            memory = "quaerat";
                                            taskRoleArn = "molestiae";
                                        }};;
                                        placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                            add(new PlacementConstraint() {{
                                                expression = "ut";
                                                type = PlacementConstraintTypeEnum.MEMBER_OF;
                                            }}),
                                            add(new PlacementConstraint() {{
                                                expression = "adipisci";
                                                type = PlacementConstraintTypeEnum.MEMBER_OF;
                                            }}),
                                        }};
                                        placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                            add(new PlacementStrategy() {{
                                                field = "eum";
                                                type = PlacementStrategyTypeEnum.SPREAD;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "recusandae";
                                                type = PlacementStrategyTypeEnum.SPREAD;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "provident";
                                                type = PlacementStrategyTypeEnum.SPREAD;
                                            }}),
                                        }};
                                        platformVersion = "eum";
                                        propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                        referenceId = "reiciendis";
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("quasi", "animi") {{
                                                key = "aspernatur";
                                                value = "ullam";
                                            }}),
                                            add(new Tag("provident", "possimus") {{
                                                key = "nostrum";
                                                value = "mollitia";
                                            }}),
                                            add(new Tag("aliquid", "accusantium") {{
                                                key = "animi";
                                                value = "ex";
                                            }}),
                                        }};
                                        taskCount = 999278L;
                                    }};;
                                    eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters() {{
                                        detailType = "doloribus";
                                        endpointId = "ullam";
                                        resources = new String[]{{
                                            add("nam"),
                                            add("earum"),
                                        }};
                                        source = "officia";
                                        time = "laborum";
                                    }};;
                                    httpParameters = new PipeTargetHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("modi", "voluptatibus");
                                            put("molestias", "officiis");
                                            put("sapiente", "cumque");
                                            put("vitae", "rerum");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("quis"),
                                            add("inventore"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("cumque", "quae");
                                        }};
                                    }};;
                                    inputTemplate = "perferendis";
                                    kinesisStreamParameters = new PipeTargetKinesisStreamParameters("velit");;
                                    lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.REQUEST_RESPONSE;
                                    }};;
                                    redshiftDataParameters = new PipeTargetRedshiftDataParameters("eum",                 new String[]{{
                                                        add("rem"),
                                                        add("at"),
                                                    }}) {{
                                        dbUser = "impedit";
                                        secretManagerArn = "eos";
                                        statementName = "sapiente";
                                        withEvent = false;
                                    }};;
                                    sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters() {{
                                        pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                            add(new SageMakerPipelineParameter("beatae", "cupiditate") {{
                                                name = "dicta";
                                                value = "minima";
                                            }}),
                                            add(new SageMakerPipelineParameter("soluta", "hic") {{
                                                name = "provident";
                                                value = "earum";
                                            }}),
                                        }};
                                    }};;
                                    sqsQueueParameters = new PipeTargetSqsQueueParameters() {{
                                        messageDeduplicationId = "illum";
                                        messageGroupId = "eaque";
                                    }};;
                                    stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.FIRE_AND_FORGET;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "debitis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "porro";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "dolorem";
            }};            

            UpdatePipeResponse res = sdk.sdk.updatePipe(req);

            if (res.updatePipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
