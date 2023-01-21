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