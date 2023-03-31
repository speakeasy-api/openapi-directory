<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreatePipePathParams;
import org.openapis.openapi.models.operations.CreatePipeHeaders;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyDesiredStateEnum;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyEnrichmentParameters;
import org.openapis.openapi.models.operations.CreatePipeRequestBodySourceParameters;
import org.openapis.openapi.models.operations.CreatePipeRequestBodyTargetParameters;
import org.openapis.openapi.models.operations.CreatePipeRequestBody;
import org.openapis.openapi.models.operations.CreatePipeRequest;
import org.openapis.openapi.models.operations.CreatePipeResponse;
import org.openapis.openapi.models.shared.PipeTargetStateMachineParameters;
import org.openapis.openapi.models.shared.PipeTargetInvocationTypeEnum;
import org.openapis.openapi.models.shared.PipeTargetSqsQueueParameters;
import org.openapis.openapi.models.shared.PipeTargetSageMakerPipelineParameters;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.PipeTargetRedshiftDataParameters;
import org.openapis.openapi.models.shared.PipeTargetLambdaFunctionParameters;
import org.openapis.openapi.models.shared.PipeTargetKinesisStreamParameters;
import org.openapis.openapi.models.shared.PipeTargetHttpParameters;
import org.openapis.openapi.models.shared.PipeTargetEventBridgeEventBusParameters;
import org.openapis.openapi.models.shared.PipeTargetEcsTaskParameters;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.EcsTaskOverride;
import org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride;
import org.openapis.openapi.models.shared.EcsEphemeralStorage;
import org.openapis.openapi.models.shared.EcsContainerOverride;
import org.openapis.openapi.models.shared.EcsResourceRequirement;
import org.openapis.openapi.models.shared.EcsResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.EcsEnvironmentFile;
import org.openapis.openapi.models.shared.EcsEnvironmentFileTypeEnum;
import org.openapis.openapi.models.shared.EcsEnvironmentVariable;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.PipeTargetCloudWatchLogsParameters;
import org.openapis.openapi.models.shared.PipeTargetBatchJobParameters;
import org.openapis.openapi.models.shared.BatchRetryStrategy;
import org.openapis.openapi.models.shared.BatchJobDependency;
import org.openapis.openapi.models.shared.BatchJobDependencyTypeEnum;
import org.openapis.openapi.models.shared.BatchContainerOverrides;
import org.openapis.openapi.models.shared.BatchResourceRequirement;
import org.openapis.openapi.models.shared.BatchResourceRequirementTypeEnum;
import org.openapis.openapi.models.shared.BatchEnvironmentVariable;
import org.openapis.openapi.models.shared.BatchArrayProperties;
import org.openapis.openapi.models.shared.PipeSourceSqsQueueParameters;
import org.openapis.openapi.models.shared.PipeSourceSelfManagedKafkaParameters;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationVpc;
import org.openapis.openapi.models.shared.SelfManagedKafkaStartPositionEnum;
import org.openapis.openapi.models.shared.SelfManagedKafkaAccessConfigurationCredentials;
import org.openapis.openapi.models.shared.PipeSourceRabbitMQBrokerParameters;
import org.openapis.openapi.models.shared.MQBrokerAccessCredentials;
import org.openapis.openapi.models.shared.PipeSourceManagedStreamingKafkaParameters;
import org.openapis.openapi.models.shared.MSKStartPositionEnum;
import org.openapis.openapi.models.shared.MSKAccessCredentials;
import org.openapis.openapi.models.shared.PipeSourceKinesisStreamParameters;
import org.openapis.openapi.models.shared.KinesisStreamStartPositionEnum;
import org.openapis.openapi.models.shared.OnPartialBatchItemFailureStreamsEnum;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.FilterCriteria;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.PipeSourceDynamoDBStreamParameters;
import org.openapis.openapi.models.shared.DynamoDBStreamStartPositionEnum;
import org.openapis.openapi.models.shared.PipeSourceActiveMQBrokerParameters;
import org.openapis.openapi.models.shared.PipeEnrichmentHttpParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreatePipeRequest req = new CreatePipeRequest() {{
                pathParams = new CreatePipePathParams() {{
                    name = "corrupti";
                }};
                headers = new CreatePipeHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new CreatePipeRequestBody() {{
                    description = "vel";
                    desiredState = "STOPPED";
                    enrichment = "deserunt";
                    enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters() {{
                        httpParameters = new PipeEnrichmentHttpParameters() {{
                            headerParameters = new java.util.HashMap<String, String>() {{
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }};
                            pathParameterValues = new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }};
                            queryStringParameters = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "iusto");
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                        }};
                        inputTemplate = "veritatis";
                    }};
                    roleArn = "deserunt";
                    source = "perferendis";
                    sourceParameters = new CreatePipeRequestBodySourceParameters() {{
                        activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters() {{
                            batchSize = 368241;
                            credentials = new MQBrokerAccessCredentials() {{
                                basicAuth = "repellendus";
                            }};
                            maximumBatchingWindowInSeconds = 957156;
                            queueName = "quo";
                        }};
                        dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters() {{
                            batchSize = 140350;
                            deadLetterConfig = new DeadLetterConfig() {{
                                arn = "at";
                            }};
                            maximumBatchingWindowInSeconds = 870088;
                            maximumRecordAgeInSeconds = 978619;
                            maximumRetryAttempts = 473608;
                            onPartialBatchItemFailure = "AUTOMATIC_BISECT";
                            parallelizationFactor = 799159;
                            startingPosition = "LATEST";
                        }};
                        filterCriteria = new FilterCriteria() {{
                            filters = new org.openapis.openapi.models.shared.Filter[]{{
                                add(new Filter() {{
                                    pattern = "totam";
                                }}),
                                add(new Filter() {{
                                    pattern = "porro";
                                }}),
                            }};
                        }};
                        kinesisStreamParameters = new PipeSourceKinesisStreamParameters() {{
                            batchSize = 678880;
                            deadLetterConfig = new DeadLetterConfig() {{
                                arn = "dicta";
                            }};
                            maximumBatchingWindowInSeconds = 720633;
                            maximumRecordAgeInSeconds = 639921;
                            maximumRetryAttempts = 582020;
                            onPartialBatchItemFailure = "AUTOMATIC_BISECT";
                            parallelizationFactor = 143353;
                            startingPosition = "LATEST";
                            startingPositionTimestamp = "2020-09-22T07:34:53.140Z";
                        }};
                        managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters() {{
                            batchSize = 521848;
                            consumerGroupID = "beatae";
                            credentials = new MSKAccessCredentials() {{
                                clientCertificateTlsAuth = "commodi";
                                saslScram512Auth = "molestiae";
                            }};
                            maximumBatchingWindowInSeconds = 264555;
                            startingPosition = "TRIM_HORIZON";
                            topicName = "impedit";
                        }};
                        rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters() {{
                            batchSize = 736918;
                            credentials = new MQBrokerAccessCredentials() {{
                                basicAuth = "esse";
                            }};
                            maximumBatchingWindowInSeconds = 216550;
                            queueName = "excepturi";
                            virtualHost = "aspernatur";
                        }};
                        selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters() {{
                            additionalBootstrapServers = new String[]{{
                                add("ad"),
                            }};
                            batchSize = 617636;
                            consumerGroupID = "sed";
                            credentials = new SelfManagedKafkaAccessConfigurationCredentials() {{
                                basicAuth = "iste";
                                clientCertificateTlsAuth = "dolor";
                                saslScram256Auth = "natus";
                                saslScram512Auth = "laboriosam";
                            }};
                            maximumBatchingWindowInSeconds = 943749;
                            serverRootCaCertificate = "saepe";
                            startingPosition = "LATEST";
                            topicName = "in";
                            vpc = new SelfManagedKafkaAccessConfigurationVpc() {{
                                securityGroup = new String[]{{
                                    add("iste"),
                                    add("iure"),
                                }};
                                subnets = new String[]{{
                                    add("quidem"),
                                    add("architecto"),
                                    add("ipsa"),
                                    add("reiciendis"),
                                }};
                            }};
                        }};
                        sqsQueueParameters = new PipeSourceSqsQueueParameters() {{
                            batchSize = 666767;
                            maximumBatchingWindowInSeconds = 653140;
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("dolores", "dolorem");
                        put("corporis", "explicabo");
                        put("nobis", "enim");
                    }};
                    target = "omnis";
                    targetParameters = new CreatePipeRequestBodyTargetParameters() {{
                        batchJobParameters = new PipeTargetBatchJobParameters() {{
                            arrayProperties = new BatchArrayProperties() {{
                                size = 363711;
                            }};
                            containerOverrides = new BatchContainerOverrides() {{
                                command = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                environment = new org.openapis.openapi.models.shared.BatchEnvironmentVariable[]{{
                                    add(new BatchEnvironmentVariable() {{
                                        name = "culpa";
                                        value = "doloribus";
                                    }}),
                                    add(new BatchEnvironmentVariable() {{
                                        name = "sapiente";
                                        value = "architecto";
                                    }}),
                                }};
                                instanceType = "mollitia";
                                resourceRequirements = new org.openapis.openapi.models.shared.BatchResourceRequirement[]{{
                                    add(new BatchResourceRequirement() {{
                                        type = "MEMORY";
                                        value = "consequuntur";
                                    }}),
                                }};
                            }};
                            dependsOn = new org.openapis.openapi.models.shared.BatchJobDependency[]{{
                                add(new BatchJobDependency() {{
                                    jobId = "mollitia";
                                    type = "SEQUENTIAL";
                                }}),
                                add(new BatchJobDependency() {{
                                    jobId = "numquam";
                                    type = "N_TO_N";
                                }}),
                                add(new BatchJobDependency() {{
                                    jobId = "quam";
                                    type = "N_TO_N";
                                }}),
                                add(new BatchJobDependency() {{
                                    jobId = "velit";
                                    type = "SEQUENTIAL";
                                }}),
                            }};
                            jobDefinition = "quia";
                            jobName = "quis";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("laborum", "animi");
                            }};
                            retryStrategy = new BatchRetryStrategy() {{
                                attempts = 317202;
                            }};
                        }};
                        cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters() {{
                            logStreamName = "odit";
                            timestamp = "quo";
                        }};
                        ecsTaskParameters = new PipeTargetEcsTaskParameters() {{
                            capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                add(new CapacityProviderStrategyItem() {{
                                    base = 949572;
                                    capacityProvider = "ipsam";
                                    weight = 662527;
                                }}),
                            }};
                            enableECSManagedTags = false;
                            enableExecuteCommand = false;
                            group = "possimus";
                            launchType = "EC2";
                            networkConfiguration = new NetworkConfiguration() {{
                                awsvpcConfiguration = new AwsVpcConfiguration() {{
                                    assignPublicIp = "ENABLED";
                                    securityGroups = new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }};
                                    subnets = new String[]{{
                                        add("voluptatibus"),
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                    }};
                                }};
                            }};
                            overrides = new EcsTaskOverride() {{
                                containerOverrides = new org.openapis.openapi.models.shared.EcsContainerOverride[]{{
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("omnis"),
                                        }};
                                        cpu = 451159;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "perferendis";
                                                value = "doloremque";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "reprehenderit";
                                                value = "ut";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "maiores";
                                                value = "dicta";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "dolore";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "iusto";
                                            }}),
                                        }};
                                        memory = 118727;
                                        memoryReservation = 688661;
                                        name = "enim";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "repudiandae";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "ipsum";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "molestias";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "pariatur";
                                            }}),
                                        }};
                                    }}),
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("praesentium"),
                                            add("rem"),
                                        }};
                                        cpu = 916723;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "repudiandae";
                                                value = "sint";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "itaque";
                                            }}),
                                        }};
                                        memory = 277718;
                                        memoryReservation = 318569;
                                        name = "consequatur";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "explicabo";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "distinctio";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "labore";
                                            }}),
                                        }};
                                    }}),
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                        cpu = 586513;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "perferendis";
                                                value = "magni";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "assumenda";
                                                value = "ipsam";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "alias";
                                                value = "fugit";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "excepturi";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "tempora";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "facilis";
                                            }}),
                                        }};
                                        memory = 735194;
                                        memoryReservation = 288476;
                                        name = "delectus";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "eligendi";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "aliquid";
                                            }}),
                                        }};
                                    }}),
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("necessitatibus"),
                                            add("sint"),
                                            add("officia"),
                                        }};
                                        cpu = 223081;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "a";
                                                value = "dolorum";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "in";
                                                value = "in";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "illum";
                                                value = "maiores";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "rerum";
                                                value = "dicta";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "cumque";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "facere";
                                            }}),
                                        }};
                                        memory = 411820;
                                        memoryReservation = 396506;
                                        name = "laborum";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "occaecati";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "accusamus";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "quidem";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "nam";
                                            }}),
                                        }};
                                    }}),
                                }};
                                cpu = "id";
                                ephemeralStorage = new EcsEphemeralStorage() {{
                                    sizeInGiB = 501324;
                                }};
                                executionRoleArn = "deleniti";
                                inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride[]{{
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "amet";
                                        deviceType = "deserunt";
                                    }}),
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "nisi";
                                        deviceType = "vel";
                                    }}),
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "natus";
                                        deviceType = "omnis";
                                    }}),
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "molestiae";
                                        deviceType = "perferendis";
                                    }}),
                                }};
                                memory = "nihil";
                                taskRoleArn = "magnam";
                            }};
                            placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                add(new PlacementConstraint() {{
                                    expression = "id";
                                    type = "distinctInstance";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "labore";
                                    type = "distinctInstance";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "natus";
                                    type = "memberOf";
                                }}),
                            }};
                            placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                add(new PlacementStrategy() {{
                                    field = "vero";
                                    type = "random";
                                }}),
                                add(new PlacementStrategy() {{
                                    field = "architecto";
                                    type = "random";
                                }}),
                            }};
                            platformVersion = "et";
                            propagateTags = "TASK_DEFINITION";
                            referenceId = "excepturi";
                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    key = "provident";
                                    value = "quos";
                                }}),
                                add(new Tag() {{
                                    key = "sint";
                                    value = "accusantium";
                                }}),
                            }};
                            taskCount = 653201;
                            taskDefinitionArn = "reiciendis";
                        }};
                        eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters() {{
                            detailType = "mollitia";
                            endpointId = "ad";
                            resources = new String[]{{
                                add("dolor"),
                                add("necessitatibus"),
                            }};
                            source = "odit";
                            time = "nemo";
                        }};
                        httpParameters = new PipeTargetHttpParameters() {{
                            headerParameters = new java.util.HashMap<String, String>() {{
                                put("iure", "doloribus");
                            }};
                            pathParameterValues = new String[]{{
                                add("eius"),
                                add("maxime"),
                                add("deleniti"),
                                add("facilis"),
                            }};
                            queryStringParameters = new java.util.HashMap<String, String>() {{
                                put("architecto", "architecto");
                                put("repudiandae", "ullam");
                            }};
                        }};
                        inputTemplate = "expedita";
                        kinesisStreamParameters = new PipeTargetKinesisStreamParameters() {{
                            partitionKey = "nihil";
                        }};
                        lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters() {{
                            invocationType = "FIRE_AND_FORGET";
                        }};
                        redshiftDataParameters = new PipeTargetRedshiftDataParameters() {{
                            database = "quibusdam";
                            dbUser = "sed";
                            secretManagerArn = "saepe";
                            sqls = new String[]{{
                                add("accusantium"),
                                add("consequuntur"),
                                add("praesentium"),
                                add("natus"),
                            }};
                            statementName = "magni";
                            withEvent = false;
                        }};
                        sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters() {{
                            pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                add(new SageMakerPipelineParameter() {{
                                    name = "quo";
                                    value = "illum";
                                }}),
                            }};
                        }};
                        sqsQueueParameters = new PipeTargetSqsQueueParameters() {{
                            messageDeduplicationId = "pariatur";
                            messageGroupId = "maxime";
                        }};
                        stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters() {{
                            invocationType = "REQUEST_RESPONSE";
                        }};
                    }};
                }};
            }};            

            CreatePipeResponse res = sdk.createPipe(req);

            if (res.createPipeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->