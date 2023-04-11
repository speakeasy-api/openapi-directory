# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/pipes/2015-10-07/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/pipes/2015-10-07/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

