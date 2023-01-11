<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAlarmModelRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    alarmCapabilities: {
      acknowledgeFlow: {
        enabled: true,
      },
      initializationConfiguration: {
        disabledOnInitialization: true,
      },
    },
    alarmEventActions: {
      alarmActions: [
        {
          dynamoDB: {
            hashKeyField: "nihil",
            hashKeyType: "rerum",
            hashKeyValue: "dicta",
            operation: "debitis",
            payload: {
              contentExpression: "voluptatum",
              type: "STRING",
            },
            payloadField: "ut",
            rangeKeyField: "dolorem",
            rangeKeyType: "et",
            rangeKeyValue: "voluptate",
            tableName: "iste",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "vitae",
              type: "STRING",
            },
            tableName: "dolores",
          },
          firehose: {
            deliveryStreamName: "illum",
            payload: {
              contentExpression: "debitis",
              type: "STRING",
            },
            separator: "odio",
          },
          iotEvents: {
            inputName: "dolore",
            payload: {
              contentExpression: "id",
              type: "JSON",
            },
          },
          iotSiteWise: {
            assetId: "accusantium",
            entryId: "totam",
            propertyAlias: "commodi",
            propertyId: "quis",
            propertyValue: {
              quality: "est",
              timestamp: {
                offsetInNanos: "aut",
                timeInSeconds: "odit",
              },
              value: {
                booleanValue: "non",
                doubleValue: "voluptas",
                integerValue: "omnis",
                stringValue: "aut",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "illo",
            payload: {
              contentExpression: "sed",
              type: "JSON",
            },
          },
          lambda: {
            functionArn: "autem",
            payload: {
              contentExpression: "consectetur",
              type: "STRING",
            },
          },
          sns: {
            payload: {
              contentExpression: "odio",
              type: "JSON",
            },
            targetArn: "recusandae",
          },
          sqs: {
            payload: {
              contentExpression: "at",
              type: "STRING",
            },
            queueUrl: "eveniet",
            useBase64: false,
          },
        },
      ],
    },
    alarmModelDescription: "sint",
    alarmModelName: "inventore",
    alarmNotification: {
      notificationActions: [
        {
          action: {
            lambdaAction: {
              functionArn: "exercitationem",
              payload: {
                contentExpression: "aut",
                type: "STRING",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "maiores",
                subject: "incidunt",
              },
              from: "dolor",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "veritatis",
                      userId: "in",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "et",
                      userId: "omnis",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "ipsum",
                      userId: "ex",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "dolores",
                subject: "placeat",
              },
              from: "vel",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "mollitia",
                      userId: "voluptas",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "quam",
                      userId: "reprehenderit",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "qui",
                      userId: "qui",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "unde",
                subject: "in",
              },
              from: "autem",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "ut",
                      userId: "itaque",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "neque",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "et",
                    userId: "accusantium",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "esse",
                    userId: "architecto",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "quam",
                    userId: "velit",
                  },
                },
              ],
              senderId: "cumque",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "soluta",
              payload: {
                contentExpression: "sunt",
                type: "JSON",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "et",
                subject: "optio",
              },
              from: "qui",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "illo",
                      userId: "omnis",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "ut",
                subject: "consequatur",
              },
              from: "dolor",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "error",
                      userId: "reprehenderit",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "consectetur",
                      userId: "nostrum",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "ut",
                subject: "laboriosam",
              },
              from: "sed",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "soluta",
                      userId: "aut",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "consequuntur",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "autem",
                    userId: "ipsa",
                  },
                },
              ],
              senderId: "expedita",
            },
            {
              additionalMessage: "doloremque",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "atque",
                    userId: "ratione",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "quisquam",
                    userId: "explicabo",
                  },
                },
              ],
              senderId: "ea",
            },
            {
              additionalMessage: "maxime",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "perferendis",
                    userId: "et",
                  },
                },
              ],
              senderId: "rerum",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "reiciendis",
              payload: {
                contentExpression: "quis",
                type: "JSON",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "necessitatibus",
                subject: "est",
              },
              from: "quis",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "labore",
                      userId: "et",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "ad",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "vel",
                    userId: "qui",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "modi",
                    userId: "nihil",
                  },
                },
              ],
              senderId: "tempora",
            },
            {
              additionalMessage: "deserunt",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "sunt",
                    userId: "sit",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "autem",
                    userId: "quis",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "vel",
                    userId: "vel",
                  },
                },
              ],
              senderId: "placeat",
            },
          ],
        },
      ],
    },
    alarmRule: {
      simpleRule: {
        comparisonOperator: "LESS_OR_EQUAL",
        inputProperty: "nisi",
        threshold: "quis",
      },
    },
    key: "adipisci",
    roleArn: "porro",
    severity: 4230816687517220040,
    tags: [
      {
        key: "accusamus",
        value: "numquam",
      },
    ],
  },
};

sdk.createAlarmModel(req).then((res: CreateAlarmModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->