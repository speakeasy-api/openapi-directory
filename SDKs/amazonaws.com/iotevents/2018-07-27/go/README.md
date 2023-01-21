# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAlarmModelRequest{
        Headers: operations.CreateAlarmModelHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateAlarmModelRequestBody{
            AlarmCapabilities: &operations.CreateAlarmModelRequestBodyAlarmCapabilities{
                AcknowledgeFlow: &shared.AcknowledgeFlow{
                    Enabled: true,
                },
                InitializationConfiguration: &shared.InitializationConfiguration{
                    DisabledOnInitialization: true,
                },
            },
            AlarmEventActions: &operations.CreateAlarmModelRequestBodyAlarmEventActions{
                AlarmActions: []shared.AlarmAction{
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDbAction{
                            HashKeyField: "nihil",
                            HashKeyType: "rerum",
                            HashKeyValue: "dicta",
                            Operation: "debitis",
                            Payload: &shared.Payload{
                                ContentExpression: "voluptatum",
                                Type: "STRING",
                            },
                            PayloadField: "ut",
                            RangeKeyField: "dolorem",
                            RangeKeyType: "et",
                            RangeKeyValue: "voluptate",
                            TableName: "iste",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "vitae",
                                Type: "STRING",
                            },
                            TableName: "dolores",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "illum",
                            Payload: &shared.Payload{
                                ContentExpression: "debitis",
                                Type: "STRING",
                            },
                            Separator: "odio",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "dolore",
                            Payload: &shared.Payload{
                                ContentExpression: "id",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "accusantium",
                            EntryID: "totam",
                            PropertyAlias: "commodi",
                            PropertyID: "quis",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "est",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "aut",
                                    TimeInSeconds: "odit",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "non",
                                    DoubleValue: "voluptas",
                                    IntegerValue: "omnis",
                                    StringValue: "aut",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "illo",
                            Payload: &shared.Payload{
                                ContentExpression: "sed",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "autem",
                            Payload: &shared.Payload{
                                ContentExpression: "consectetur",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "odio",
                                Type: "JSON",
                            },
                            TargetArn: "recusandae",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "at",
                                Type: "STRING",
                            },
                            QueueURL: "eveniet",
                            UseBase64: false,
                        },
                    },
                },
            },
            AlarmModelDescription: "sint",
            AlarmModelName: "inventore",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "exercitationem",
                                Payload: &shared.Payload{
                                    ContentExpression: "aut",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "maiores",
                                    Subject: "incidunt",
                                },
                                From: "dolor",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "veritatis",
                                                UserID: "in",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "omnis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "ipsum",
                                                UserID: "ex",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "dolores",
                                    Subject: "placeat",
                                },
                                From: "vel",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "mollitia",
                                                UserID: "voluptas",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quam",
                                                UserID: "reprehenderit",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "qui",
                                                UserID: "qui",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "unde",
                                    Subject: "in",
                                },
                                From: "autem",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "ut",
                                                UserID: "itaque",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "neque",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "et",
                                            UserID: "accusantium",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "esse",
                                            UserID: "architecto",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "quam",
                                            UserID: "velit",
                                        },
                                    },
                                },
                                SenderID: "cumque",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "soluta",
                                Payload: &shared.Payload{
                                    ContentExpression: "sunt",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "et",
                                    Subject: "optio",
                                },
                                From: "qui",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "illo",
                                                UserID: "omnis",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "ut",
                                    Subject: "consequatur",
                                },
                                From: "dolor",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "error",
                                                UserID: "reprehenderit",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "consectetur",
                                                UserID: "nostrum",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "ut",
                                    Subject: "laboriosam",
                                },
                                From: "sed",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "soluta",
                                                UserID: "aut",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "consequuntur",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "autem",
                                            UserID: "ipsa",
                                        },
                                    },
                                },
                                SenderID: "expedita",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "doloremque",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "atque",
                                            UserID: "ratione",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "quisquam",
                                            UserID: "explicabo",
                                        },
                                    },
                                },
                                SenderID: "ea",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "maxime",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "perferendis",
                                            UserID: "et",
                                        },
                                    },
                                },
                                SenderID: "rerum",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "reiciendis",
                                Payload: &shared.Payload{
                                    ContentExpression: "quis",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "necessitatibus",
                                    Subject: "est",
                                },
                                From: "quis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "labore",
                                                UserID: "et",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "ad",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "vel",
                                            UserID: "qui",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "modi",
                                            UserID: "nihil",
                                        },
                                    },
                                },
                                SenderID: "tempora",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "deserunt",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "sunt",
                                            UserID: "sit",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "autem",
                                            UserID: "quis",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "vel",
                                            UserID: "vel",
                                        },
                                    },
                                },
                                SenderID: "placeat",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "LESS_OR_EQUAL",
                    InputProperty: "nisi",
                    Threshold: "quis",
                },
            },
            Key: "adipisci",
            RoleArn: "porro",
            Severity: 4230816687517220040,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "numquam",
                },
            },
        },
    }
    
    res, err := s.CreateAlarmModel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlarmModelResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAlarmModel` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `CreateDetectorModel` - Creates a detector model.
* `CreateInput` - Creates an input.
* `DeleteAlarmModel` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `DeleteDetectorModel` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `DeleteInput` - Deletes an input.
* `DescribeAlarmModel` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `DescribeDetectorModel` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `DescribeDetectorModelAnalysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `DescribeInput` - Describes an input.
* `DescribeLoggingOptions` - Retrieves the current settings of the AWS IoT Events logging options.
* `GetDetectorModelAnalysisResults` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `ListAlarmModelVersions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `ListAlarmModels` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `ListDetectorModelVersions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `ListDetectorModels` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `ListInputRoutings` -  Lists one or more input routings. 
* `ListInputs` - Lists the inputs you have created.
* `ListTagsForResource` - Lists the tags (metadata) you have assigned to the resource.
* `PutLoggingOptions` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `StartDetectorModelAnalysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `TagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `UntagResource` - Removes the given tags (metadata) from the resource.
* `UpdateAlarmModel` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `UpdateDetectorModel` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `UpdateInput` - Updates an input.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
