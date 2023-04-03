# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipeRequest req = new CreatePipeRequest() {{
                name = "corrupti";
                requestBody = new CreatePipeRequestBody() {{
                    description = "provident";
                    desiredState = "STOPPED";
                    enrichment = "quibusdam";
                    enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters() {{
                        httpParameters = new PipeEnrichmentHttpParameters() {{
                            headerParameters = new java.util.HashMap<String, String>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                            pathParameterValues = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            queryStringParameters = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                        }};
                        inputTemplate = "iusto";
                    }};
                    roleArn = "excepturi";
                    source = "nisi";
                    sourceParameters = new CreatePipeRequestBodySourceParameters() {{
                        activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters() {{
                            batchSize = 925597;
                            credentials = new MQBrokerAccessCredentials() {{
                                basicAuth = "temporibus";
                            }};
                            maximumBatchingWindowInSeconds = 71036;
                            queueName = "quis";
                        }};
                        dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters() {{
                            batchSize = 87129;
                            deadLetterConfig = new DeadLetterConfig() {{
                                arn = "deserunt";
                            }};
                            maximumBatchingWindowInSeconds = 20218;
                            maximumRecordAgeInSeconds = 368241;
                            maximumRetryAttempts = 832620;
                            onPartialBatchItemFailure = "AUTOMATIC_BISECT";
                            parallelizationFactor = 957156;
                            startingPosition = "LATEST";
                        }};
                        filterCriteria = new FilterCriteria() {{
                            filters = new org.openapis.openapi.models.shared.Filter[]{{
                                add(new Filter() {{
                                    pattern = "at";
                                }}),
                            }};
                        }};
                        kinesisStreamParameters = new PipeSourceKinesisStreamParameters() {{
                            batchSize = 870088;
                            deadLetterConfig = new DeadLetterConfig() {{
                                arn = "maiores";
                            }};
                            maximumBatchingWindowInSeconds = 473608;
                            maximumRecordAgeInSeconds = 799159;
                            maximumRetryAttempts = 800911;
                            onPartialBatchItemFailure = "AUTOMATIC_BISECT";
                            parallelizationFactor = 461479;
                            startingPosition = "LATEST";
                            startingPositionTimestamp = "2020-12-18T15:02:44.758Z";
                        }};
                        managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters() {{
                            batchSize = 118274;
                            consumerGroupID = "nam";
                            credentials = new MSKAccessCredentials() {{
                                clientCertificateTlsAuth = "officia";
                                saslScram512Auth = "occaecati";
                            }};
                            maximumBatchingWindowInSeconds = 143353;
                            startingPosition = "LATEST";
                            topicName = "hic";
                        }};
                        rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters() {{
                            batchSize = 758616;
                            credentials = new MQBrokerAccessCredentials() {{
                                basicAuth = "totam";
                            }};
                            maximumBatchingWindowInSeconds = 105907;
                            queueName = "commodi";
                            virtualHost = "molestiae";
                        }};
                        selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters() {{
                            additionalBootstrapServers = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                            batchSize = 736918;
                            consumerGroupID = "esse";
                            credentials = new SelfManagedKafkaAccessConfigurationCredentials() {{
                                basicAuth = "ipsum";
                                clientCertificateTlsAuth = "excepturi";
                                saslScram256Auth = "aspernatur";
                                saslScram512Auth = "perferendis";
                            }};
                            maximumBatchingWindowInSeconds = 324141;
                            serverRootCaCertificate = "natus";
                            startingPosition = "TRIM_HORIZON";
                            topicName = "iste";
                            vpc = new SelfManagedKafkaAccessConfigurationVpc() {{
                                securityGroup = new String[]{{
                                    add("natus"),
                                }};
                                subnets = new String[]{{
                                    add("hic"),
                                    add("saepe"),
                                }};
                            }};
                        }};
                        sqsQueueParameters = new PipeSourceSqsQueueParameters() {{
                            batchSize = 681820;
                            maximumBatchingWindowInSeconds = 449950;
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("iste", "iure");
                        put("saepe", "quidem");
                    }};
                    target = "architecto";
                    targetParameters = new CreatePipeRequestBodyTargetParameters() {{
                        batchJobParameters = new PipeTargetBatchJobParameters() {{
                            arrayProperties = new BatchArrayProperties() {{
                                size = 60225;
                            }};
                            containerOverrides = new BatchContainerOverrides() {{
                                command = new String[]{{
                                    add("est"),
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                environment = new org.openapis.openapi.models.shared.BatchEnvironmentVariable[]{{
                                    add(new BatchEnvironmentVariable() {{
                                        name = "corporis";
                                        value = "explicabo";
                                    }}),
                                }};
                                instanceType = "nobis";
                                resourceRequirements = new org.openapis.openapi.models.shared.BatchResourceRequirement[]{{
                                    add(new BatchResourceRequirement() {{
                                        type = "MEMORY";
                                        value = "nemo";
                                    }}),
                                    add(new BatchResourceRequirement() {{
                                        type = "GPU";
                                        value = "excepturi";
                                    }}),
                                }};
                            }};
                            dependsOn = new org.openapis.openapi.models.shared.BatchJobDependency[]{{
                                add(new BatchJobDependency() {{
                                    jobId = "iure";
                                    type = "SEQUENTIAL";
                                }}),
                            }};
                            jobDefinition = "doloribus";
                            jobName = "sapiente";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("mollitia", "dolorem");
                            }};
                            retryStrategy = new BatchRetryStrategy() {{
                                attempts = 635059;
                            }};
                        }};
                        cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters() {{
                            logStreamName = "consequuntur";
                            timestamp = "repellat";
                        }};
                        ecsTaskParameters = new PipeTargetEcsTaskParameters() {{
                            capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                add(new CapacityProviderStrategyItem() {{
                                    base = 581850;
                                    capacityProvider = "numquam";
                                    weight = 414369;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 466311;
                                    capacityProvider = "molestiae";
                                    weight = 244425;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 623510;
                                    capacityProvider = "quia";
                                    weight = 338007;
                                }}),
                            }};
                            enableECSManagedTags = false;
                            enableExecuteCommand = false;
                            group = "vitae";
                            launchType = "EXTERNAL";
                            networkConfiguration = new NetworkConfiguration() {{
                                awsvpcConfiguration = new AwsVpcConfiguration() {{
                                    assignPublicIp = "DISABLED";
                                    securityGroups = new String[]{{
                                        add("odit"),
                                        add("quo"),
                                    }};
                                    subnets = new String[]{{
                                        add("tenetur"),
                                    }};
                                }};
                            }};
                            overrides = new EcsTaskOverride() {{
                                containerOverrides = new org.openapis.openapi.models.shared.EcsContainerOverride[]{{
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("possimus"),
                                            add("aut"),
                                            add("quasi"),
                                        }};
                                        cpu = 622846;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "laborum";
                                                value = "quasi";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "reiciendis";
                                                value = "voluptatibus";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "vero";
                                                value = "nihil";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "praesentium";
                                                value = "voluptatibus";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "omnis";
                                            }}),
                                        }};
                                        memory = 451159;
                                        memoryReservation = 739264;
                                        name = "perferendis";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "ut";
                                            }}),
                                        }};
                                    }}),
                                    add(new EcsContainerOverride() {{
                                        command = new String[]{{
                                            add("dicta"),
                                            add("corporis"),
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        cpu = 118727;
                                        environment = new org.openapis.openapi.models.shared.EcsEnvironmentVariable[]{{
                                            add(new EcsEnvironmentVariable() {{
                                                name = "enim";
                                                value = "accusamus";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "commodi";
                                                value = "repudiandae";
                                            }}),
                                            add(new EcsEnvironmentVariable() {{
                                                name = "quae";
                                                value = "ipsum";
                                            }}),
                                        }};
                                        environmentFiles = new org.openapis.openapi.models.shared.EcsEnvironmentFile[]{{
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "molestias";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "excepturi";
                                            }}),
                                            add(new EcsEnvironmentFile() {{
                                                type = "s3";
                                                value = "pariatur";
                                            }}),
                                        }};
                                        memory = 265389;
                                        memoryReservation = 508969;
                                        name = "rem";
                                        resourceRequirements = new org.openapis.openapi.models.shared.EcsResourceRequirement[]{{
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "repudiandae";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "veritatis";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "InferenceAccelerator";
                                                value = "incidunt";
                                            }}),
                                            add(new EcsResourceRequirement() {{
                                                type = "GPU";
                                                value = "consequatur";
                                            }}),
                                        }};
                                    }}),
                                }};
                                cpu = "est";
                                ephemeralStorage = new EcsEphemeralStorage() {{
                                    sizeInGiB = 842342;
                                }};
                                executionRoleArn = "explicabo";
                                inferenceAcceleratorOverrides = new org.openapis.openapi.models.shared.EcsInferenceAcceleratorOverride[]{{
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "distinctio";
                                        deviceType = "quibusdam";
                                    }}),
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "labore";
                                        deviceType = "modi";
                                    }}),
                                    add(new EcsInferenceAcceleratorOverride() {{
                                        deviceName = "qui";
                                        deviceType = "aliquid";
                                    }}),
                                }};
                                memory = "cupiditate";
                                taskRoleArn = "quos";
                            }};
                            placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                add(new PlacementConstraint() {{
                                    expression = "magni";
                                    type = "memberOf";
                                }}),
                            }};
                            placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                add(new PlacementStrategy() {{
                                    field = "alias";
                                    type = "random";
                                }}),
                                add(new PlacementStrategy() {{
                                    field = "dolorum";
                                    type = "spread";
                                }}),
                            }};
                            platformVersion = "tempora";
                            propagateTags = "TASK_DEFINITION";
                            referenceId = "facilis";
                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    key = "labore";
                                    value = "delectus";
                                }}),
                                add(new Tag() {{
                                    key = "eum";
                                    value = "non";
                                }}),
                                add(new Tag() {{
                                    key = "eligendi";
                                    value = "sint";
                                }}),
                            }};
                            taskCount = 396098;
                            taskDefinitionArn = "provident";
                        }};
                        eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters() {{
                            detailType = "necessitatibus";
                            endpointId = "sint";
                            resources = new String[]{{
                                add("dolor"),
                                add("debitis"),
                                add("a"),
                            }};
                            source = "dolorum";
                            time = "in";
                        }};
                        httpParameters = new PipeTargetHttpParameters() {{
                            headerParameters = new java.util.HashMap<String, String>() {{
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }};
                            pathParameterValues = new String[]{{
                                add("cumque"),
                                add("facere"),
                            }};
                            queryStringParameters = new java.util.HashMap<String, String>() {{
                                put("aliquid", "laborum");
                                put("accusamus", "non");
                            }};
                        }};
                        inputTemplate = "occaecati";
                        kinesisStreamParameters = new PipeTargetKinesisStreamParameters() {{
                            partitionKey = "enim";
                        }};
                        lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters() {{
                            invocationType = "FIRE_AND_FORGET";
                        }};
                        redshiftDataParameters = new PipeTargetRedshiftDataParameters() {{
                            database = "delectus";
                            dbUser = "quidem";
                            secretManagerArn = "provident";
                            sqls = new String[]{{
                                add("id"),
                                add("blanditiis"),
                                add("deleniti"),
                            }};
                            statementName = "sapiente";
                            withEvent = false;
                        }};
                        sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters() {{
                            pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                add(new SageMakerPipelineParameter() {{
                                    name = "deserunt";
                                    value = "nisi";
                                }}),
                            }};
                        }};
                        sqsQueueParameters = new PipeTargetSqsQueueParameters() {{
                            messageDeduplicationId = "vel";
                            messageGroupId = "natus";
                        }};
                        stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters() {{
                            invocationType = "FIRE_AND_FORGET";
                        }};
                    }};
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }}            

            CreatePipeResponse res = sdk.createPipe(req);

            if (res.createPipeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createPipe` - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* `deletePipe` - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `describePipe` - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `listPipes` - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `listTagsForResource` - Displays the tags associated with a pipe.
* `startPipe` - Start an existing pipe.
* `stopPipe` - Stop an existing pipe.
* `tagResource` - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* `untagResource` - Removes one or more tags from the specified pipes.
* `updatePipe` - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
