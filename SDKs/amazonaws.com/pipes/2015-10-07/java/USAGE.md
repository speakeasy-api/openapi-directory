<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipeRequest req = new CreatePipeRequest("provident",                 new CreatePipeRequestBody("distinctio", "quibusdam", "unde") {{
                                description = "nulla";
                                desiredState = CreatePipeRequestBodyDesiredStateEnum.STOPPED;
                                enrichment = "illum";
                                enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters() {{
                                    httpParameters = new PipeEnrichmentHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("error", "deserunt");
                                            put("suscipit", "iure");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("debitis"),
                                            add("ipsa"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("tempora", "suscipit");
                                            put("molestiae", "minus");
                                            put("placeat", "voluptatum");
                                            put("iusto", "excepturi");
                                        }};
                                    }};;
                                    inputTemplate = "nisi";
                                }};;
                                sourceParameters = new CreatePipeRequestBodySourceParameters() {{
                                    activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "recusandae";
                                                    }};, "temporibus") {{
                                        batchSize = 71036L;
                                        maximumBatchingWindowInSeconds = 337396L;
                                    }};;
                                    dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters(DynamoDBStreamStartPositionEnum.TRIM_HORIZON) {{
                                        batchSize = 648172L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "perferendis";
                                        }};;
                                        maximumBatchingWindowInSeconds = 368241L;
                                        maximumRecordAgeInSeconds = 832620L;
                                        maximumRetryAttempts = 957156L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 778157L;
                                    }};;
                                    filterCriteria = new FilterCriteria() {{
                                        filters = new org.openapis.openapi.models.shared.Filter[]{{
                                            add(new Filter() {{
                                                pattern = "at";
                                            }}),
                                        }};
                                    }};;
                                    kinesisStreamParameters = new PipeSourceKinesisStreamParameters(KinesisStreamStartPositionEnum.AT_TIMESTAMP) {{
                                        batchSize = 978619L;
                                        deadLetterConfig = new DeadLetterConfig() {{
                                            arn = "molestiae";
                                        }};;
                                        maximumBatchingWindowInSeconds = 799159L;
                                        maximumRecordAgeInSeconds = 800911L;
                                        maximumRetryAttempts = 461479L;
                                        onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum.AUTOMATIC_BISECT;
                                        parallelizationFactor = 520478L;
                                        startingPositionTimestamp = OffsetDateTime.parse("2020-12-18T15:02:44.758Z");
                                    }};;
                                    managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters("dicta") {{
                                        batchSize = 720633L;
                                        consumerGroupID = "officia";
                                        credentials = new MSKAccessCredentials() {{
                                            clientCertificateTlsAuth = "occaecati";
                                            saslScram512Auth = "fugit";
                                        }};;
                                        maximumBatchingWindowInSeconds = 537373L;
                                        startingPosition = MSKStartPositionEnum.LATEST;
                                    }};;
                                    rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters(                new MQBrokerAccessCredentials() {{
                                                        basicAuth = "optio";
                                                    }};, "totam") {{
                                        batchSize = 105907L;
                                        maximumBatchingWindowInSeconds = 414662L;
                                        virtualHost = "molestiae";
                                    }};;
                                    selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters("modi") {{
                                        additionalBootstrapServers = new String[]{{
                                            add("impedit"),
                                        }};
                                        batchSize = 736918L;
                                        consumerGroupID = "esse";
                                        credentials = new SelfManagedKafkaAccessConfigurationCredentials() {{
                                            basicAuth = "ipsum";
                                            clientCertificateTlsAuth = "excepturi";
                                            saslScram256Auth = "aspernatur";
                                            saslScram512Auth = "perferendis";
                                        }};;
                                        maximumBatchingWindowInSeconds = 324141L;
                                        serverRootCaCertificate = "natus";
                                        startingPosition = SelfManagedKafkaStartPositionEnum.TRIM_HORIZON;
                                        vpc = new SelfManagedKafkaAccessConfigurationVpc() {{
                                            securityGroup = new String[]{{
                                                add("dolor"),
                                                add("natus"),
                                                add("laboriosam"),
                                            }};
                                            subnets = new String[]{{
                                                add("saepe"),
                                                add("fuga"),
                                                add("in"),
                                                add("corporis"),
                                            }};
                                        }};;
                                    }};;
                                    sqsQueueParameters = new PipeSourceSqsQueueParameters() {{
                                        batchSize = 613064L;
                                        maximumBatchingWindowInSeconds = 437032L;
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quidem", "architecto");
                                    put("ipsa", "reiciendis");
                                    put("est", "mollitia");
                                    put("laborum", "dolores");
                                }};
                                targetParameters = new CreatePipeRequestBodyTargetParameters() {{
                                    batchJobParameters = new PipeTargetBatchJobParameters("dolorem", "corporis") {{
                                        arrayProperties = new BatchArrayProperties() {{
                                            size = 128926L;
                                        }};;
                                        containerOverrides = new BatchContainerOverrides() {{
                                            command = new String[]{{
                                                add("enim"),
                                                add("omnis"),
                                                add("nemo"),
                                                add("minima"),
                                            }};
                                            environment = new org.openapis.openapi.models.shared.BatchEnvironmentVariable[]{{
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Charlene Nicolas";
                                                    value = "architecto";
                                                }}),
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Mike Nicolas";
                                                    value = "mollitia";
                                                }}),
                                                add(new BatchEnvironmentVariable() {{
                                                    name = "Francis Jerde";
                                                    value = "velit";
                                                }}),
                                            }};
                                            instanceType = "error";
                                            resourceRequirements = new org.openapis.openapi.models.shared.BatchResourceRequirement[]{{
                                                add(new BatchResourceRequirement(BatchResourceRequirementTypeEnum.VCPU, "animi") {{
                                                    type = BatchResourceRequirementTypeEnum.MEMORY;
                                                    value = "vitae";
                                                }}),
                                            }};
                                        }};;
                                        dependsOn = new org.openapis.openapi.models.shared.BatchJobDependency[]{{
                                            add(new BatchJobDependency() {{
                                                jobId = "odit";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                            add(new BatchJobDependency() {{
                                                jobId = "sequi";
                                                type = BatchJobDependencyTypeEnum.SEQUENTIAL;
                                            }}),
                                        }};
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("id", "possimus");
                                            put("aut", "quasi");
                                        }};
                                        retryStrategy = new BatchRetryStrategy() {{
                                            attempts = 622846L;
                                        }};;
                                    }};;
                                    cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters() {{
                                        logStreamName = "temporibus";
                                        timestamp = "laborum";
                                    }};;
                                    ecsTaskParameters = new PipeTargetEcsTaskParameters("quasi") {{
                                        capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                            add(new CapacityProviderStrategyItem("praesentium") {{
                                                base = 976460L;
                                                capacityProvider = "vero";
                                                weight = 468651L;
                                            }}),
                                            add(new CapacityProviderStrategyItem("voluptate") {{
                                                base = 976762L;
                                                capacityProvider = "ipsa";
                                                weight = 604846L;
                                            }}),
                                            add(new CapacityProviderStrategyItem("reprehenderit") {{
                                                base = 739264L;
                                                capacityProvider = "perferendis";
                                                weight = 39187L;
                                            }}),
                                            add(new CapacityProviderStrategyItem("corporis") {{
                                                base = 282807L;
                                                capacityProvider = "maiores";
                                                weight = 120196L;
                                            }}),
                                        }};
                                        enableECSManagedTags = false;
                                        enableExecuteCommand = false;
                                        group = "dolore";
                                        launchType = LaunchTypeEnum.FARGATE;
                                        networkConfiguration = new NetworkConfiguration() {{
                                            awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                add("harum"),
                                                            }}) {{
                                                assignPublicIp = AssignPublicIpEnum.ENABLED;
                                                securityGroups = new String[]{{
                                                    add("commodi"),
                                                    add("repudiandae"),
                                                    add("quae"),
                                                    add("ipsum"),
                                                }};
                                            }};;
                                        }};;
                                        overrides = new EcsTaskOverride() {{
                                            containerOverrides = new org.openapis.openapi.models.shared.EcsContainerOverride[]{{
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("excepturi"),
                                                        add("pariatur"),
                                                        add("modi"),
                                                    }};
                                                    cpu = 508969L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Carl Waelchi DVM";
                                                            value = "incidunt";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Elizabeth Orn";
                                                            value = "deserunt";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Marty Green";
                                                            value = "aliquid";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "perferendis") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "quos";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "assumenda") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "magni";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "alias") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "ipsam";
                                                        }}),
                                                    }};
                                                    memory = 146441L;
                                                    memoryReservation = 677817L;
                                                    name = "Eddie Prosacco";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "sint") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "non";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "sint") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "provident";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "a") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "dolor";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "illum") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "in";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("rerum"),
                                                        add("dicta"),
                                                        add("magnam"),
                                                        add("cumque"),
                                                    }};
                                                    cpu = 813798L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Kayla Thompson";
                                                            value = "enim";
                                                        }}),
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Toby Pouros";
                                                            value = "id";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "sapiente") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "deleniti";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "deserunt") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "amet";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "vel") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "nisi";
                                                        }}),
                                                    }};
                                                    memory = 618809L;
                                                    memoryReservation = 606393L;
                                                    name = "Dorothy Kovacek";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "natus") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "labore";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "aspernatur") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "eum";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "excepturi") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "magnam";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new EcsContainerOverride() {{
                                                    command = new String[]{{
                                                        add("provident"),
                                                        add("quos"),
                                                    }};
                                                    cpu = 574325L;
                                                    environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                                        add(new EcsEnvironmentVariable() {{
                                                            name = "Abel O'Hara";
                                                            value = "dolor";
                                                        }}),
                                                    }};
                                                    environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "nemo") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "odit";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "iure") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "quasi";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "debitis") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "doloribus";
                                                        }}),
                                                        add(new EcsEnvironmentFile(EcsEnvironmentFileTypeEnum.S3, "maxime") {{
                                                            type = EcsEnvironmentFileTypeEnum.S3;
                                                            value = "eius";
                                                        }}),
                                                    }};
                                                    memory = 537023L;
                                                    memoryReservation = 703889L;
                                                    name = "Alice Bradtke";
                                                    resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR, "sed") {{
                                                            type = EcsResourceRequirementTypeEnum.GPU;
                                                            value = "repellat";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "consequuntur") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "pariatur";
                                                        }}),
                                                        add(new EcsResourceRequirement(EcsResourceRequirementTypeEnum.GPU, "sunt") {{
                                                            type = EcsResourceRequirementTypeEnum.INFERENCE_ACCELERATOR;
                                                            value = "natus";
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            cpu = "quo";
                                            ephemeralStorage = new EcsEphemeralStorage(848009L);;
                                            executionRoleArn = "pariatur";
                                            inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride[]{{
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "ea";
                                                    deviceType = "excepturi";
                                                }}),
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "odit";
                                                    deviceType = "ea";
                                                }}),
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "accusantium";
                                                    deviceType = "ab";
                                                }}),
                                                add(new EcsInferenceAcceleratorOverride() {{
                                                    deviceName = "maiores";
                                                    deviceType = "quidem";
                                                }}),
                                            }};
                                            memory = "ipsam";
                                            taskRoleArn = "voluptate";
                                        }};;
                                        placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                            add(new PlacementConstraint() {{
                                                expression = "nam";
                                                type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                            }}),
                                            add(new PlacementConstraint() {{
                                                expression = "pariatur";
                                                type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                            }}),
                                        }};
                                        placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                            add(new PlacementStrategy() {{
                                                field = "perferendis";
                                                type = PlacementStrategyTypeEnum.BINPACK;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "amet";
                                                type = PlacementStrategyTypeEnum.RANDOM;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "cumque";
                                                type = PlacementStrategyTypeEnum.SPREAD;
                                            }}),
                                            add(new PlacementStrategy() {{
                                                field = "hic";
                                                type = PlacementStrategyTypeEnum.BINPACK;
                                            }}),
                                        }};
                                        platformVersion = "nobis";
                                        propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                        referenceId = "dolores";
                                        tags = new org.openapis.openapi.models.shared.Tag[]{{
                                            add(new Tag("eaque", "quis") {{
                                                key = "totam";
                                                value = "dignissimos";
                                            }}),
                                            add(new Tag("perferendis", "dolores") {{
                                                key = "nesciunt";
                                                value = "eos";
                                            }}),
                                        }};
                                        taskCount = 793698L;
                                    }};;
                                    eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters() {{
                                        detailType = "quam";
                                        endpointId = "dolor";
                                        resources = new String[]{{
                                            add("nostrum"),
                                            add("hic"),
                                            add("recusandae"),
                                            add("omnis"),
                                        }};
                                        source = "facilis";
                                        time = "perspiciatis";
                                    }};;
                                    httpParameters = new PipeTargetHttpParameters() {{
                                        headerParameters = new java.util.HashMap<String, String>() {{
                                            put("porro", "consequuntur");
                                        }};
                                        pathParameterValues = new String[]{{
                                            add("error"),
                                            add("eaque"),
                                            add("occaecati"),
                                        }};
                                        queryStringParameters = new java.util.HashMap<String, String>() {{
                                            put("adipisci", "asperiores");
                                            put("earum", "modi");
                                            put("iste", "dolorum");
                                        }};
                                    }};;
                                    inputTemplate = "deleniti";
                                    kinesisStreamParameters = new PipeTargetKinesisStreamParameters("pariatur");;
                                    lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.FIRE_AND_FORGET;
                                    }};;
                                    redshiftDataParameters = new PipeTargetRedshiftDataParameters("nobis",                 new String[]{{
                                                        add("delectus"),
                                                        add("quaerat"),
                                                        add("quos"),
                                                    }}) {{
                                        dbUser = "aliquid";
                                        secretManagerArn = "dolorem";
                                        statementName = "dolorem";
                                        withEvent = false;
                                    }};;
                                    sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters() {{
                                        pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                            add(new SageMakerPipelineParameter("hic", "excepturi") {{
                                                name = "qui";
                                                value = "ipsum";
                                            }}),
                                        }};
                                    }};;
                                    sqsQueueParameters = new PipeTargetSqsQueueParameters() {{
                                        messageDeduplicationId = "cum";
                                        messageGroupId = "voluptate";
                                    }};;
                                    stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters() {{
                                        invocationType = PipeTargetInvocationTypeEnum.REQUEST_RESPONSE;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreatePipeResponse res = sdk.createPipe(req);

            if (res.createPipeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->