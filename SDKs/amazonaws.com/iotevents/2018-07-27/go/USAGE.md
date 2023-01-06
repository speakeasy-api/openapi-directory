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
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "assumenda",
            XAmzCredential: "occaecati",
            XAmzDate: "veniam",
            XAmzSecurityToken: "sed",
            XAmzSignature: "sint",
            XAmzSignedHeaders: "laudantium",
        },
        Request: operations.CreateAlarmModelRequestBody{
            AlarmCapabilities: &operations.CreateAlarmModelRequestBodyAlarmCapabilities{
                AcknowledgeFlow: &shared.AcknowledgeFlow{
                    Enabled: false,
                },
                InitializationConfiguration: &shared.InitializationConfiguration{
                    DisabledOnInitialization: false,
                },
            },
            AlarmEventActions: &operations.CreateAlarmModelRequestBodyAlarmEventActions{
                AlarmActions: []shared.AlarmAction{
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDbAction{
                            HashKeyField: "et",
                            HashKeyType: "explicabo",
                            HashKeyValue: "omnis",
                            Operation: "ut",
                            Payload: &shared.Payload{
                                ContentExpression: "libero",
                                Type: "STRING",
                            },
                            PayloadField: "qui",
                            RangeKeyField: "sit",
                            RangeKeyType: "quasi",
                            RangeKeyValue: "vitae",
                            TableName: "voluptate",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "ut",
                                Type: "STRING",
                            },
                            TableName: "sed",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "sint",
                            Payload: &shared.Payload{
                                ContentExpression: "est",
                                Type: "STRING",
                            },
                            Separator: "omnis",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "reiciendis",
                            Payload: &shared.Payload{
                                ContentExpression: "ipsam",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "et",
                            EntryID: "molestias",
                            PropertyAlias: "minus",
                            PropertyID: "pariatur",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "voluptatum",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "tenetur",
                                    TimeInSeconds: "rem",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "autem",
                                    DoubleValue: "enim",
                                    IntegerValue: "quia",
                                    StringValue: "voluptas",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "nulla",
                            Payload: &shared.Payload{
                                ContentExpression: "numquam",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "officiis",
                            Payload: &shared.Payload{
                                ContentExpression: "sequi",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "et",
                                Type: "STRING",
                            },
                            TargetArn: "aliquid",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "autem",
                                Type: "JSON",
                            },
                            QueueURL: "tempora",
                            UseBase64: true,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDbAction{
                            HashKeyField: "est",
                            HashKeyType: "nostrum",
                            HashKeyValue: "mollitia",
                            Operation: "aut",
                            Payload: &shared.Payload{
                                ContentExpression: "recusandae",
                                Type: "JSON",
                            },
                            PayloadField: "quas",
                            RangeKeyField: "repellendus",
                            RangeKeyType: "deleniti",
                            RangeKeyValue: "corporis",
                            TableName: "voluptas",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "architecto",
                                Type: "STRING",
                            },
                            TableName: "eum",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "vero",
                            Payload: &shared.Payload{
                                ContentExpression: "totam",
                                Type: "JSON",
                            },
                            Separator: "veritatis",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "fuga",
                            Payload: &shared.Payload{
                                ContentExpression: "atque",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "consequatur",
                            EntryID: "qui",
                            PropertyAlias: "numquam",
                            PropertyID: "et",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "ut",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "soluta",
                                    TimeInSeconds: "minima",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "fugit",
                                    DoubleValue: "accusamus",
                                    IntegerValue: "et",
                                    StringValue: "autem",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "quod",
                            Payload: &shared.Payload{
                                ContentExpression: "ut",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "sed",
                            Payload: &shared.Payload{
                                ContentExpression: "quibusdam",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "repudiandae",
                                Type: "STRING",
                            },
                            TargetArn: "molestiae",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "rerum",
                                Type: "JSON",
                            },
                            QueueURL: "maiores",
                            UseBase64: true,
                        },
                    },
                },
            },
            AlarmModelDescription: "nobis",
            AlarmModelName: "libero",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "accusamus",
                                Payload: &shared.Payload{
                                    ContentExpression: "voluptates",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "quibusdam",
                                    Subject: "minima",
                                },
                                From: "iusto",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "consequatur",
                                                UserID: "sed",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quo",
                                                UserID: "animi",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "labore",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "quod",
                                            UserID: "et",
                                        },
                                    },
                                },
                                SenderID: "sit",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "quo",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "reprehenderit",
                                            UserID: "quod",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "et",
                                            UserID: "veniam",
                                        },
                                    },
                                },
                                SenderID: "impedit",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "ex",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "cupiditate",
                                            UserID: "sunt",
                                        },
                                    },
                                },
                                SenderID: "incidunt",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "sed",
                                Payload: &shared.Payload{
                                    ContentExpression: "repellendus",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "non",
                                    Subject: "nihil",
                                },
                                From: "ipsa",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "sed",
                                                UserID: "autem",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "consequatur",
                                                UserID: "vitae",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "assumenda",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "ad",
                                            UserID: "eum",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "voluptatem",
                                            UserID: "optio",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "et",
                                            UserID: "consequatur",
                                        },
                                    },
                                },
                                SenderID: "saepe",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "consequatur",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "recusandae",
                                            UserID: "cum",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "eius",
                                            UserID: "recusandae",
                                        },
                                    },
                                },
                                SenderID: "nisi",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "LESS_OR_EQUAL",
                    InputProperty: "est",
                    Threshold: "rerum",
                },
            },
            Key: "quisquam",
            RoleArn: "dolor",
            Severity: 658878306404842413,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "expedita",
                    Value: "itaque",
                },
                shared.Tag{
                    Key: "qui",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "eius",
                    Value: "modi",
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