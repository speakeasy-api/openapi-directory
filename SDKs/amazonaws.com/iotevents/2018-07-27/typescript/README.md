# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents/2018-07-27/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents/2018-07-27/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAlarmModelRequest,
  CreateAlarmModelResponse
} from "openapi/dist/sdk/models/operations";
import {
  ComparisonOperatorEnum,
  PayloadTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAlarmModelRequest = {
  requestBody: {
    alarmCapabilities: {
      acknowledgeFlow: {
        enabled: false,
      },
      initializationConfiguration: {
        disabledOnInitialization: false,
      },
    },
    alarmEventActions: {
      alarmActions: [
        {
          dynamoDB: {
            hashKeyField: "provident",
            hashKeyType: "distinctio",
            hashKeyValue: "quibusdam",
            operation: "unde",
            payload: {
              contentExpression: "nulla",
              type: PayloadTypeEnum.Json,
            },
            payloadField: "illum",
            rangeKeyField: "vel",
            rangeKeyType: "error",
            rangeKeyValue: "deserunt",
            tableName: "suscipit",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "iure",
              type: PayloadTypeEnum.String,
            },
            tableName: "debitis",
          },
          firehose: {
            deliveryStreamName: "ipsa",
            payload: {
              contentExpression: "delectus",
              type: PayloadTypeEnum.String,
            },
            separator: "suscipit",
          },
          iotEvents: {
            inputName: "molestiae",
            payload: {
              contentExpression: "minus",
              type: PayloadTypeEnum.Json,
            },
          },
          iotSiteWise: {
            assetId: "voluptatum",
            entryId: "iusto",
            propertyAlias: "excepturi",
            propertyId: "nisi",
            propertyValue: {
              quality: "recusandae",
              timestamp: {
                offsetInNanos: "temporibus",
                timeInSeconds: "ab",
              },
              value: {
                booleanValue: "quis",
                doubleValue: "veritatis",
                integerValue: "deserunt",
                stringValue: "perferendis",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "ipsam",
            payload: {
              contentExpression: "repellendus",
              type: PayloadTypeEnum.Json,
            },
          },
          lambda: {
            functionArn: "quo",
            payload: {
              contentExpression: "odit",
              type: PayloadTypeEnum.Json,
            },
          },
          sns: {
            payload: {
              contentExpression: "at",
              type: PayloadTypeEnum.Json,
            },
            targetArn: "molestiae",
          },
          sqs: {
            payload: {
              contentExpression: "quod",
              type: PayloadTypeEnum.Json,
            },
            queueUrl: "esse",
            useBase64: false,
          },
        },
        {
          dynamoDB: {
            hashKeyField: "totam",
            hashKeyType: "porro",
            hashKeyValue: "dolorum",
            operation: "dicta",
            payload: {
              contentExpression: "nam",
              type: PayloadTypeEnum.Json,
            },
            payloadField: "occaecati",
            rangeKeyField: "fugit",
            rangeKeyType: "deleniti",
            rangeKeyValue: "hic",
            tableName: "optio",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "totam",
              type: PayloadTypeEnum.String,
            },
            tableName: "commodi",
          },
          firehose: {
            deliveryStreamName: "molestiae",
            payload: {
              contentExpression: "modi",
              type: PayloadTypeEnum.String,
            },
            separator: "impedit",
          },
          iotEvents: {
            inputName: "cum",
            payload: {
              contentExpression: "esse",
              type: PayloadTypeEnum.String,
            },
          },
          iotSiteWise: {
            assetId: "excepturi",
            entryId: "aspernatur",
            propertyAlias: "perferendis",
            propertyId: "ad",
            propertyValue: {
              quality: "natus",
              timestamp: {
                offsetInNanos: "sed",
                timeInSeconds: "iste",
              },
              value: {
                booleanValue: "dolor",
                doubleValue: "natus",
                integerValue: "laboriosam",
                stringValue: "hic",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "saepe",
            payload: {
              contentExpression: "fuga",
              type: PayloadTypeEnum.String,
            },
          },
          lambda: {
            functionArn: "corporis",
            payload: {
              contentExpression: "iste",
              type: PayloadTypeEnum.String,
            },
          },
          sns: {
            payload: {
              contentExpression: "saepe",
              type: PayloadTypeEnum.Json,
            },
            targetArn: "architecto",
          },
          sqs: {
            payload: {
              contentExpression: "ipsa",
              type: PayloadTypeEnum.Json,
            },
            queueUrl: "est",
            useBase64: false,
          },
        },
        {
          dynamoDB: {
            hashKeyField: "mollitia",
            hashKeyType: "laborum",
            hashKeyValue: "dolores",
            operation: "dolorem",
            payload: {
              contentExpression: "corporis",
              type: PayloadTypeEnum.String,
            },
            payloadField: "nobis",
            rangeKeyField: "enim",
            rangeKeyType: "omnis",
            rangeKeyValue: "nemo",
            tableName: "minima",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "excepturi",
              type: PayloadTypeEnum.String,
            },
            tableName: "iure",
          },
          firehose: {
            deliveryStreamName: "culpa",
            payload: {
              contentExpression: "doloribus",
              type: PayloadTypeEnum.Json,
            },
            separator: "architecto",
          },
          iotEvents: {
            inputName: "mollitia",
            payload: {
              contentExpression: "dolorem",
              type: PayloadTypeEnum.Json,
            },
          },
          iotSiteWise: {
            assetId: "consequuntur",
            entryId: "repellat",
            propertyAlias: "mollitia",
            propertyId: "occaecati",
            propertyValue: {
              quality: "numquam",
              timestamp: {
                offsetInNanos: "commodi",
                timeInSeconds: "quam",
              },
              value: {
                booleanValue: "molestiae",
                doubleValue: "velit",
                integerValue: "error",
                stringValue: "quia",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "quis",
            payload: {
              contentExpression: "vitae",
              type: PayloadTypeEnum.Json,
            },
          },
          lambda: {
            functionArn: "animi",
            payload: {
              contentExpression: "enim",
              type: PayloadTypeEnum.String,
            },
          },
          sns: {
            payload: {
              contentExpression: "quo",
              type: PayloadTypeEnum.String,
            },
            targetArn: "tenetur",
          },
          sqs: {
            payload: {
              contentExpression: "ipsam",
              type: PayloadTypeEnum.Json,
            },
            queueUrl: "possimus",
            useBase64: false,
          },
        },
      ],
    },
    alarmModelDescription: "aut",
    alarmModelName: "quasi",
    alarmNotification: {
      notificationActions: [
        {
          action: {
            lambdaAction: {
              functionArn: "temporibus",
              payload: {
                contentExpression: "laborum",
                type: PayloadTypeEnum.String,
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "voluptatibus",
                subject: "vero",
              },
              from: "nihil",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "voluptatibus",
                      userId: "ipsa",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "omnis",
                      userId: "voluptate",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "cum",
                      userId: "perferendis",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "doloremque",
                subject: "reprehenderit",
              },
              from: "ut",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "dicta",
                      userId: "corporis",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "dolore",
                      userId: "iusto",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "dicta",
                      userId: "harum",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "enim",
                      userId: "accusamus",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "commodi",
                subject: "repudiandae",
              },
              from: "quae",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "quidem",
                      userId: "molestias",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "excepturi",
                subject: "pariatur",
              },
              from: "modi",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "rem",
                      userId: "voluptates",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "quasi",
                      userId: "repudiandae",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "sint",
                      userId: "veritatis",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "incidunt",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "consequatur",
                    userId: "est",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "quibusdam",
                    userId: "explicabo",
                  },
                },
              ],
              senderId: "deserunt",
            },
            {
              additionalMessage: "distinctio",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "labore",
                    userId: "modi",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "qui",
                    userId: "aliquid",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "cupiditate",
                    userId: "quos",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "perferendis",
                    userId: "magni",
                  },
                },
              ],
              senderId: "assumenda",
            },
            {
              additionalMessage: "ipsam",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "fugit",
                    userId: "dolorum",
                  },
                },
              ],
              senderId: "excepturi",
            },
            {
              additionalMessage: "tempora",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "tempore",
                    userId: "labore",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "delectus",
                    userId: "eum",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "non",
                    userId: "eligendi",
                  },
                },
              ],
              senderId: "sint",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "aliquid",
              payload: {
                contentExpression: "provident",
                type: PayloadTypeEnum.Json,
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "officia",
                subject: "dolor",
              },
              from: "debitis",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "dolorum",
                      userId: "in",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "in",
                      userId: "illum",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "maiores",
                      userId: "rerum",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "dicta",
                      userId: "magnam",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "cumque",
                subject: "facere",
              },
              from: "ea",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "laborum",
                      userId: "accusamus",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "non",
                      userId: "occaecati",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "enim",
                subject: "accusamus",
              },
              from: "delectus",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "provident",
                      userId: "nam",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "id",
                      userId: "blanditiis",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "deleniti",
                      userId: "sapiente",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "deserunt",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "vel",
                    userId: "natus",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "omnis",
                    userId: "molestiae",
                  },
                },
              ],
              senderId: "perferendis",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "nihil",
              payload: {
                contentExpression: "magnam",
                type: PayloadTypeEnum.Json,
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "labore",
                subject: "labore",
              },
              from: "suscipit",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "nobis",
                      userId: "eum",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "vero",
                      userId: "aspernatur",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "architecto",
                      userId: "magnam",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "et",
                subject: "excepturi",
              },
              from: "ullam",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "quos",
                      userId: "sint",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "accusantium",
                      userId: "mollitia",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "reiciendis",
                      userId: "mollitia",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "ad",
                subject: "eum",
              },
              from: "dolor",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "odit",
                      userId: "nemo",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "quasi",
                      userId: "iure",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "doloribus",
                      userId: "debitis",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "eius",
                      userId: "maxime",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "facilis",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "architecto",
                    userId: "architecto",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "repudiandae",
                    userId: "ullam",
                  },
                },
              ],
              senderId: "expedita",
            },
            {
              additionalMessage: "nihil",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "quibusdam",
                    userId: "sed",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "saepe",
                    userId: "pariatur",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "accusantium",
                    userId: "consequuntur",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "praesentium",
                    userId: "natus",
                  },
                },
              ],
              senderId: "magni",
            },
            {
              additionalMessage: "sunt",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "illum",
                    userId: "pariatur",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "maxime",
                    userId: "ea",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "excepturi",
                    userId: "odit",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "ea",
                    userId: "accusantium",
                  },
                },
              ],
              senderId: "ab",
            },
          ],
        },
      ],
    },
    alarmRule: {
      simpleRule: {
        comparisonOperator: ComparisonOperatorEnum.NotEqual,
        inputProperty: "quidem",
        threshold: "ipsam",
      },
    },
    key: "voluptate",
    roleArn: "autem",
    severity: 722056,
    tags: [
      {
        key: "pariatur",
        value: "nemo",
      },
    ],
  },
  xAmzAlgorithm: "voluptatibus",
  xAmzContentSha256: "perferendis",
  xAmzCredential: "fugiat",
  xAmzDate: "amet",
  xAmzSecurityToken: "aut",
  xAmzSignature: "cumque",
  xAmzSignedHeaders: "corporis",
};

sdk.createAlarmModel(req).then((res: CreateAlarmModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createAlarmModel` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `createDetectorModel` - Creates a detector model.
* `createInput` - Creates an input.
* `deleteAlarmModel` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `deleteDetectorModel` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `deleteInput` - Deletes an input.
* `describeAlarmModel` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `describeDetectorModel` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `describeDetectorModelAnalysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `describeInput` - Describes an input.
* `describeLoggingOptions` - Retrieves the current settings of the AWS IoT Events logging options.
* `getDetectorModelAnalysisResults` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `listAlarmModelVersions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `listAlarmModels` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `listDetectorModelVersions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `listDetectorModels` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `listInputRoutings` -  Lists one or more input routings. 
* `listInputs` - Lists the inputs you have created.
* `listTagsForResource` - Lists the tags (metadata) you have assigned to the resource.
* `putLoggingOptions` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `startDetectorModelAnalysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `tagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untagResource` - Removes the given tags (metadata) from the resource.
* `updateAlarmModel` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `updateDetectorModel` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `updateInput` - Updates an input.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

