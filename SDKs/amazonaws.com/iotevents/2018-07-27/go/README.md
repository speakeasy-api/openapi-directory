# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents/2018-07-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
