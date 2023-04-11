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