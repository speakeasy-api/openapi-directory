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
            XAmzAlgorithm: "iusto",
            XAmzContentSha256: "voluptatum",
            XAmzCredential: "illo",
            XAmzDate: "exercitationem",
            XAmzSecurityToken: "aut",
            XAmzSignature: "nemo",
            XAmzSignedHeaders: "voluptate",
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
                            HashKeyField: "ut",
                            HashKeyType: "fugit",
                            HashKeyValue: "sit",
                            Operation: "quidem",
                            Payload: &shared.Payload{
                                ContentExpression: "et",
                                Type: "STRING",
                            },
                            PayloadField: "cum",
                            RangeKeyField: "dicta",
                            RangeKeyType: "cupiditate",
                            RangeKeyValue: "impedit",
                            TableName: "voluptas",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "reprehenderit",
                                Type: "JSON",
                            },
                            TableName: "aut",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "necessitatibus",
                            Payload: &shared.Payload{
                                ContentExpression: "corrupti",
                                Type: "JSON",
                            },
                            Separator: "tempore",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "saepe",
                            Payload: &shared.Payload{
                                ContentExpression: "aut",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "odit",
                            EntryID: "et",
                            PropertyAlias: "debitis",
                            PropertyID: "voluptates",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "mollitia",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "odio",
                                    TimeInSeconds: "molestiae",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "error",
                                    DoubleValue: "dolores",
                                    IntegerValue: "non",
                                    StringValue: "aspernatur",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "rem",
                            Payload: &shared.Payload{
                                ContentExpression: "vel",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "at",
                            Payload: &shared.Payload{
                                ContentExpression: "tempora",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "voluptas",
                                Type: "STRING",
                            },
                            TargetArn: "maiores",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "aliquid",
                                Type: "STRING",
                            },
                            QueueURL: "mollitia",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDbAction{
                            HashKeyField: "libero",
                            HashKeyType: "in",
                            HashKeyValue: "ut",
                            Operation: "velit",
                            Payload: &shared.Payload{
                                ContentExpression: "architecto",
                                Type: "STRING",
                            },
                            PayloadField: "tempora",
                            RangeKeyField: "velit",
                            RangeKeyType: "aut",
                            RangeKeyValue: "aut",
                            TableName: "nobis",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "iste",
                                Type: "STRING",
                            },
                            TableName: "expedita",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "impedit",
                            Payload: &shared.Payload{
                                ContentExpression: "rerum",
                                Type: "STRING",
                            },
                            Separator: "in",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "assumenda",
                            Payload: &shared.Payload{
                                ContentExpression: "modi",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "vel",
                            EntryID: "aut",
                            PropertyAlias: "beatae",
                            PropertyID: "consectetur",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "et",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "rem",
                                    TimeInSeconds: "provident",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "inventore",
                                    DoubleValue: "quas",
                                    IntegerValue: "dolorum",
                                    StringValue: "dolores",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "aut",
                            Payload: &shared.Payload{
                                ContentExpression: "sit",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "doloribus",
                            Payload: &shared.Payload{
                                ContentExpression: "saepe",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "praesentium",
                                Type: "JSON",
                            },
                            TargetArn: "accusantium",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "reiciendis",
                                Type: "JSON",
                            },
                            QueueURL: "id",
                            UseBase64: false,
                        },
                    },
                },
            },
            AlarmModelDescription: "temporibus",
            AlarmModelName: "aut",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "ea",
                                Payload: &shared.Payload{
                                    ContentExpression: "quis",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "rem",
                                    Subject: "non",
                                },
                                From: "aperiam",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "omnis",
                                                UserID: "rerum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "quia",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quasi",
                                                UserID: "eum",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "dolor",
                                    Subject: "ut",
                                },
                                From: "sit",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "rem",
                                                UserID: "iusto",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "sed",
                                                UserID: "numquam",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "corrupti",
                                    Subject: "eveniet",
                                },
                                From: "nobis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "molestiae",
                                                UserID: "veniam",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "voluptatum",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "perspiciatis",
                                            UserID: "aut",
                                        },
                                    },
                                },
                                SenderID: "fugiat",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "est",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "voluptatibus",
                                            UserID: "sapiente",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "quasi",
                                            UserID: "minima",
                                        },
                                    },
                                },
                                SenderID: "odit",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "modi",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "pariatur",
                                            UserID: "velit",
                                        },
                                    },
                                },
                                SenderID: "possimus",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "EQUAL",
                    InputProperty: "ut",
                    Threshold: "corrupti",
                },
            },
            Key: "officia",
            RoleArn: "optio",
            Severity: 8289392119546275015,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quas",
                    Value: "reiciendis",
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