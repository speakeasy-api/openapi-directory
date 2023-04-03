<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAlarmModelRequest{
        RequestBody: operations.CreateAlarmModelRequestBody{
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
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "provident",
                            HashKeyType: "distinctio",
                            HashKeyValue: "quibusdam",
                            Operation: "unde",
                            Payload: &shared.Payload{
                                ContentExpression: "nulla",
                                Type: "JSON",
                            },
                            PayloadField: "illum",
                            RangeKeyField: "vel",
                            RangeKeyType: "error",
                            RangeKeyValue: "deserunt",
                            TableName: "suscipit",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "iure",
                                Type: "STRING",
                            },
                            TableName: "debitis",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "ipsa",
                            Payload: &shared.Payload{
                                ContentExpression: "delectus",
                                Type: "STRING",
                            },
                            Separator: "suscipit",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "minus",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "voluptatum",
                            EntryID: "iusto",
                            PropertyAlias: "excepturi",
                            PropertyID: "nisi",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "recusandae",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "temporibus",
                                    TimeInSeconds: "ab",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "quis",
                                    DoubleValue: "veritatis",
                                    IntegerValue: "deserunt",
                                    StringValue: "perferendis",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "ipsam",
                            Payload: &shared.Payload{
                                ContentExpression: "repellendus",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "quo",
                            Payload: &shared.Payload{
                                ContentExpression: "odit",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "at",
                                Type: "JSON",
                            },
                            TargetArn: "molestiae",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quod",
                                Type: "JSON",
                            },
                            QueueURL: "esse",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "totam",
                            HashKeyType: "porro",
                            HashKeyValue: "dolorum",
                            Operation: "dicta",
                            Payload: &shared.Payload{
                                ContentExpression: "nam",
                                Type: "JSON",
                            },
                            PayloadField: "occaecati",
                            RangeKeyField: "fugit",
                            RangeKeyType: "deleniti",
                            RangeKeyValue: "hic",
                            TableName: "optio",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "totam",
                                Type: "STRING",
                            },
                            TableName: "commodi",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "modi",
                                Type: "STRING",
                            },
                            Separator: "impedit",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "cum",
                            Payload: &shared.Payload{
                                ContentExpression: "esse",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "excepturi",
                            EntryID: "aspernatur",
                            PropertyAlias: "perferendis",
                            PropertyID: "ad",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "natus",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "sed",
                                    TimeInSeconds: "iste",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "dolor",
                                    DoubleValue: "natus",
                                    IntegerValue: "laboriosam",
                                    StringValue: "hic",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "saepe",
                            Payload: &shared.Payload{
                                ContentExpression: "fuga",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "corporis",
                            Payload: &shared.Payload{
                                ContentExpression: "iste",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "saepe",
                                Type: "JSON",
                            },
                            TargetArn: "architecto",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "ipsa",
                                Type: "JSON",
                            },
                            QueueURL: "est",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "mollitia",
                            HashKeyType: "laborum",
                            HashKeyValue: "dolores",
                            Operation: "dolorem",
                            Payload: &shared.Payload{
                                ContentExpression: "corporis",
                                Type: "STRING",
                            },
                            PayloadField: "nobis",
                            RangeKeyField: "enim",
                            RangeKeyType: "omnis",
                            RangeKeyValue: "nemo",
                            TableName: "minima",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "excepturi",
                                Type: "STRING",
                            },
                            TableName: "iure",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "culpa",
                            Payload: &shared.Payload{
                                ContentExpression: "doloribus",
                                Type: "JSON",
                            },
                            Separator: "architecto",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "mollitia",
                            Payload: &shared.Payload{
                                ContentExpression: "dolorem",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "consequuntur",
                            EntryID: "repellat",
                            PropertyAlias: "mollitia",
                            PropertyID: "occaecati",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "numquam",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "commodi",
                                    TimeInSeconds: "quam",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "molestiae",
                                    DoubleValue: "velit",
                                    IntegerValue: "error",
                                    StringValue: "quia",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "quis",
                            Payload: &shared.Payload{
                                ContentExpression: "vitae",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "animi",
                            Payload: &shared.Payload{
                                ContentExpression: "enim",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quo",
                                Type: "STRING",
                            },
                            TargetArn: "tenetur",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "ipsam",
                                Type: "JSON",
                            },
                            QueueURL: "possimus",
                            UseBase64: false,
                        },
                    },
                },
            },
            AlarmModelDescription: "aut",
            AlarmModelName: "quasi",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "temporibus",
                                Payload: &shared.Payload{
                                    ContentExpression: "laborum",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "voluptatibus",
                                    Subject: "vero",
                                },
                                From: "nihil",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "voluptatibus",
                                                UserID: "ipsa",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "omnis",
                                                UserID: "voluptate",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "cum",
                                                UserID: "perferendis",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "doloremque",
                                    Subject: "reprehenderit",
                                },
                                From: "ut",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: "corporis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dolore",
                                                UserID: "iusto",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: "harum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "enim",
                                                UserID: "accusamus",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "commodi",
                                    Subject: "repudiandae",
                                },
                                From: "quae",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quidem",
                                                UserID: "molestias",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "excepturi",
                                    Subject: "pariatur",
                                },
                                From: "modi",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "rem",
                                                UserID: "voluptates",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quasi",
                                                UserID: "repudiandae",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "sint",
                                                UserID: "veritatis",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "incidunt",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "consequatur",
                                            UserID: "est",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quibusdam",
                                            UserID: "explicabo",
                                        },
                                    },
                                },
                                SenderID: "deserunt",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "distinctio",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "labore",
                                            UserID: "modi",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "qui",
                                            UserID: "aliquid",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "cupiditate",
                                            UserID: "quos",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "perferendis",
                                            UserID: "magni",
                                        },
                                    },
                                },
                                SenderID: "assumenda",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "ipsam",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "fugit",
                                            UserID: "dolorum",
                                        },
                                    },
                                },
                                SenderID: "excepturi",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "tempora",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "tempore",
                                            UserID: "labore",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "delectus",
                                            UserID: "eum",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "non",
                                            UserID: "eligendi",
                                        },
                                    },
                                },
                                SenderID: "sint",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "aliquid",
                                Payload: &shared.Payload{
                                    ContentExpression: "provident",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "officia",
                                    Subject: "dolor",
                                },
                                From: "debitis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dolorum",
                                                UserID: "in",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "in",
                                                UserID: "illum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "maiores",
                                                UserID: "rerum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: "magnam",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "cumque",
                                    Subject: "facere",
                                },
                                From: "ea",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "laborum",
                                                UserID: "accusamus",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "non",
                                                UserID: "occaecati",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "enim",
                                    Subject: "accusamus",
                                },
                                From: "delectus",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "provident",
                                                UserID: "nam",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "id",
                                                UserID: "blanditiis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "deleniti",
                                                UserID: "sapiente",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "deserunt",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "vel",
                                            UserID: "natus",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "omnis",
                                            UserID: "molestiae",
                                        },
                                    },
                                },
                                SenderID: "perferendis",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "nihil",
                                Payload: &shared.Payload{
                                    ContentExpression: "magnam",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "labore",
                                    Subject: "labore",
                                },
                                From: "suscipit",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nobis",
                                                UserID: "eum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "vero",
                                                UserID: "aspernatur",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "architecto",
                                                UserID: "magnam",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "et",
                                    Subject: "excepturi",
                                },
                                From: "ullam",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quos",
                                                UserID: "sint",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "accusantium",
                                                UserID: "mollitia",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "reiciendis",
                                                UserID: "mollitia",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "ad",
                                    Subject: "eum",
                                },
                                From: "dolor",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "odit",
                                                UserID: "nemo",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quasi",
                                                UserID: "iure",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "doloribus",
                                                UserID: "debitis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "eius",
                                                UserID: "maxime",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "facilis",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "architecto",
                                            UserID: "architecto",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "repudiandae",
                                            UserID: "ullam",
                                        },
                                    },
                                },
                                SenderID: "expedita",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "nihil",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quibusdam",
                                            UserID: "sed",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "saepe",
                                            UserID: "pariatur",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "accusantium",
                                            UserID: "consequuntur",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "praesentium",
                                            UserID: "natus",
                                        },
                                    },
                                },
                                SenderID: "magni",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "sunt",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "illum",
                                            UserID: "pariatur",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "maxime",
                                            UserID: "ea",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "excepturi",
                                            UserID: "odit",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "ea",
                                            UserID: "accusantium",
                                        },
                                    },
                                },
                                SenderID: "ab",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "NOT_EQUAL",
                    InputProperty: "quidem",
                    Threshold: "ipsam",
                },
            },
            Key: "voluptate",
            RoleArn: "autem",
            Severity: 722056,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "pariatur",
                    Value: "nemo",
                },
            },
        },
        XAmzAlgorithm: "voluptatibus",
        XAmzContentSha256: "perferendis",
        XAmzCredential: "fugiat",
        XAmzDate: "amet",
        XAmzSecurityToken: "aut",
        XAmzSignature: "cumque",
        XAmzSignedHeaders: "corporis",
    }

    ctx := context.Background()
    res, err := s.CreateAlarmModel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlarmModelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->