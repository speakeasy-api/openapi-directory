# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
