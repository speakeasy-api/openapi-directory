<!-- Start SDK Example Usage -->
```typescript
import {
  CreatePipeRequest,
  CreatePipeResponse,
  CreatePipeRequestBodyDesiredStateEnum,
} from "openapi/dist/sdk/models/operations";
import {
  PipeTargetInvocationTypeEnum,
  PropagateTagsEnum,
  PlacementStrategyTypeEnum,
  PlacementConstraintTypeEnum,
  EcsResourceRequirementTypeEnum,
  EcsEnvironmentFileTypeEnum,
  AssignPublicIpEnum,
  LaunchTypeEnum,
  BatchJobDependencyTypeEnum,
  BatchResourceRequirementTypeEnum,
  SelfManagedKafkaStartPositionEnum,
  MSKStartPositionEnum,
  KinesisStreamStartPositionEnum,
  OnPartialBatchItemFailureStreamsEnum,
  DynamoDBStreamStartPositionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePipeRequest = {
  name: "corrupti",
  requestBody: {
    description: "provident",
    desiredState: CreatePipeRequestBodyDesiredStateEnum.Stopped,
    enrichment: "quibusdam",
    enrichmentParameters: {
      httpParameters: {
        headerParameters: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        pathParameterValues: [
          "iure",
          "magnam",
        ],
        queryStringParameters: {
          "ipsa": "delectus",
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
      },
      inputTemplate: "iusto",
    },
    roleArn: "excepturi",
    source: "nisi",
    sourceParameters: {
      activeMQBrokerParameters: {
        batchSize: 925597,
        credentials: {
          basicAuth: "temporibus",
        },
        maximumBatchingWindowInSeconds: 71036,
        queueName: "quis",
      },
      dynamoDBStreamParameters: {
        batchSize: 87129,
        deadLetterConfig: {
          arn: "deserunt",
        },
        maximumBatchingWindowInSeconds: 20218,
        maximumRecordAgeInSeconds: 368241,
        maximumRetryAttempts: 832620,
        onPartialBatchItemFailure: OnPartialBatchItemFailureStreamsEnum.AutomaticBisect,
        parallelizationFactor: 957156,
        startingPosition: DynamoDBStreamStartPositionEnum.Latest,
      },
      filterCriteria: {
        filters: [
          {
            pattern: "at",
          },
        ],
      },
      kinesisStreamParameters: {
        batchSize: 870088,
        deadLetterConfig: {
          arn: "maiores",
        },
        maximumBatchingWindowInSeconds: 473608,
        maximumRecordAgeInSeconds: 799159,
        maximumRetryAttempts: 800911,
        onPartialBatchItemFailure: OnPartialBatchItemFailureStreamsEnum.AutomaticBisect,
        parallelizationFactor: 461479,
        startingPosition: KinesisStreamStartPositionEnum.Latest,
        startingPositionTimestamp: "2020-12-18T15:02:44.758Z",
      },
      managedStreamingKafkaParameters: {
        batchSize: 118274,
        consumerGroupID: "nam",
        credentials: {
          clientCertificateTlsAuth: "officia",
          saslScram512Auth: "occaecati",
        },
        maximumBatchingWindowInSeconds: 143353,
        startingPosition: MSKStartPositionEnum.Latest,
        topicName: "hic",
      },
      rabbitMQBrokerParameters: {
        batchSize: 758616,
        credentials: {
          basicAuth: "totam",
        },
        maximumBatchingWindowInSeconds: 105907,
        queueName: "commodi",
        virtualHost: "molestiae",
      },
      selfManagedKafkaParameters: {
        additionalBootstrapServers: [
          "qui",
          "impedit",
        ],
        batchSize: 736918,
        consumerGroupID: "esse",
        credentials: {
          basicAuth: "ipsum",
          clientCertificateTlsAuth: "excepturi",
          saslScram256Auth: "aspernatur",
          saslScram512Auth: "perferendis",
        },
        maximumBatchingWindowInSeconds: 324141,
        serverRootCaCertificate: "natus",
        startingPosition: SelfManagedKafkaStartPositionEnum.TrimHorizon,
        topicName: "iste",
        vpc: {
          securityGroup: [
            "natus",
          ],
          subnets: [
            "hic",
            "saepe",
          ],
        },
      },
      sqsQueueParameters: {
        batchSize: 681820,
        maximumBatchingWindowInSeconds: 449950,
      },
    },
    tags: {
      "iste": "iure",
      "saepe": "quidem",
    },
    target: "architecto",
    targetParameters: {
      batchJobParameters: {
        arrayProperties: {
          size: 60225,
        },
        containerOverrides: {
          command: [
            "est",
            "mollitia",
            "laborum",
            "dolores",
          ],
          environment: [
            {
              name: "corporis",
              value: "explicabo",
            },
          ],
          instanceType: "nobis",
          resourceRequirements: [
            {
              type: BatchResourceRequirementTypeEnum.Memory,
              value: "nemo",
            },
            {
              type: BatchResourceRequirementTypeEnum.Gpu,
              value: "excepturi",
            },
          ],
        },
        dependsOn: [
          {
            jobId: "iure",
            type: BatchJobDependencyTypeEnum.Sequential,
          },
        ],
        jobDefinition: "doloribus",
        jobName: "sapiente",
        parameters: {
          "mollitia": "dolorem",
        },
        retryStrategy: {
          attempts: 635059,
        },
      },
      cloudWatchLogsParameters: {
        logStreamName: "consequuntur",
        timestamp: "repellat",
      },
      ecsTaskParameters: {
        capacityProviderStrategy: [
          {
            base: 581850,
            capacityProvider: "numquam",
            weight: 414369,
          },
          {
            base: 466311,
            capacityProvider: "molestiae",
            weight: 244425,
          },
          {
            base: 623510,
            capacityProvider: "quia",
            weight: 338007,
          },
        ],
        enableECSManagedTags: false,
        enableExecuteCommand: false,
        group: "vitae",
        launchType: LaunchTypeEnum.External,
        networkConfiguration: {
          awsvpcConfiguration: {
            assignPublicIp: AssignPublicIpEnum.Disabled,
            securityGroups: [
              "odit",
              "quo",
            ],
            subnets: [
              "tenetur",
            ],
          },
        },
        overrides: {
          containerOverrides: [
            {
              command: [
                "possimus",
                "aut",
                "quasi",
              ],
              cpu: 622846,
              environment: [
                {
                  name: "laborum",
                  value: "quasi",
                },
                {
                  name: "reiciendis",
                  value: "voluptatibus",
                },
                {
                  name: "vero",
                  value: "nihil",
                },
                {
                  name: "praesentium",
                  value: "voluptatibus",
                },
              ],
              environmentFiles: [
                {
                  type: EcsEnvironmentFileTypeEnum.S3,
                  value: "omnis",
                },
              ],
              memory: 451159,
              memoryReservation: 739264,
              name: "perferendis",
              resourceRequirements: [
                {
                  type: EcsResourceRequirementTypeEnum.Gpu,
                  value: "ut",
                },
              ],
            },
            {
              command: [
                "dicta",
                "corporis",
                "dolore",
                "iusto",
              ],
              cpu: 118727,
              environment: [
                {
                  name: "enim",
                  value: "accusamus",
                },
                {
                  name: "commodi",
                  value: "repudiandae",
                },
                {
                  name: "quae",
                  value: "ipsum",
                },
              ],
              environmentFiles: [
                {
                  type: EcsEnvironmentFileTypeEnum.S3,
                  value: "molestias",
                },
                {
                  type: EcsEnvironmentFileTypeEnum.S3,
                  value: "excepturi",
                },
                {
                  type: EcsEnvironmentFileTypeEnum.S3,
                  value: "pariatur",
                },
              ],
              memory: 265389,
              memoryReservation: 508969,
              name: "rem",
              resourceRequirements: [
                {
                  type: EcsResourceRequirementTypeEnum.Gpu,
                  value: "repudiandae",
                },
                {
                  type: EcsResourceRequirementTypeEnum.InferenceAccelerator,
                  value: "veritatis",
                },
                {
                  type: EcsResourceRequirementTypeEnum.InferenceAccelerator,
                  value: "incidunt",
                },
                {
                  type: EcsResourceRequirementTypeEnum.Gpu,
                  value: "consequatur",
                },
              ],
            },
          ],
          cpu: "est",
          ephemeralStorage: {
            sizeInGiB: 842342,
          },
          executionRoleArn: "explicabo",
          inferenceAcceleratorOverrides: [
            {
              deviceName: "distinctio",
              deviceType: "quibusdam",
            },
            {
              deviceName: "labore",
              deviceType: "modi",
            },
            {
              deviceName: "qui",
              deviceType: "aliquid",
            },
          ],
          memory: "cupiditate",
          taskRoleArn: "quos",
        },
        placementConstraints: [
          {
            expression: "magni",
            type: PlacementConstraintTypeEnum.MemberOf,
          },
        ],
        placementStrategy: [
          {
            field: "alias",
            type: PlacementStrategyTypeEnum.Random,
          },
          {
            field: "dolorum",
            type: PlacementStrategyTypeEnum.Spread,
          },
        ],
        platformVersion: "tempora",
        propagateTags: PropagateTagsEnum.TaskDefinition,
        referenceId: "facilis",
        tags: [
          {
            key: "labore",
            value: "delectus",
          },
          {
            key: "eum",
            value: "non",
          },
          {
            key: "eligendi",
            value: "sint",
          },
        ],
        taskCount: 396098,
        taskDefinitionArn: "provident",
      },
      eventBridgeEventBusParameters: {
        detailType: "necessitatibus",
        endpointId: "sint",
        resources: [
          "dolor",
          "debitis",
          "a",
        ],
        source: "dolorum",
        time: "in",
      },
      httpParameters: {
        headerParameters: {
          "illum": "maiores",
          "rerum": "dicta",
        },
        pathParameterValues: [
          "cumque",
          "facere",
        ],
        queryStringParameters: {
          "aliquid": "laborum",
          "accusamus": "non",
        },
      },
      inputTemplate: "occaecati",
      kinesisStreamParameters: {
        partitionKey: "enim",
      },
      lambdaFunctionParameters: {
        invocationType: PipeTargetInvocationTypeEnum.FireAndForget,
      },
      redshiftDataParameters: {
        database: "delectus",
        dbUser: "quidem",
        secretManagerArn: "provident",
        sqls: [
          "id",
          "blanditiis",
          "deleniti",
        ],
        statementName: "sapiente",
        withEvent: false,
      },
      sageMakerPipelineParameters: {
        pipelineParameterList: [
          {
            name: "deserunt",
            value: "nisi",
          },
        ],
      },
      sqsQueueParameters: {
        messageDeduplicationId: "vel",
        messageGroupId: "natus",
      },
      stepFunctionStateMachineParameters: {
        invocationType: PipeTargetInvocationTypeEnum.FireAndForget,
      },
    },
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "perferendis",
  xAmzCredential: "nihil",
  xAmzDate: "magnam",
  xAmzSecurityToken: "distinctio",
  xAmzSignature: "id",
  xAmzSignedHeaders: "labore",
};

sdk.createPipe(req).then((res: CreatePipeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->