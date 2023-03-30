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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAlarmModelRequest{
        Headers: operations.CreateAlarmModelHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
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
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "vel",
                            HashKeyType: "error",
                            HashKeyValue: "deserunt",
                            Operation: "suscipit",
                            Payload: &shared.Payload{
                                ContentExpression: "iure",
                                Type: "STRING",
                            },
                            PayloadField: "debitis",
                            RangeKeyField: "ipsa",
                            RangeKeyType: "delectus",
                            RangeKeyValue: "tempora",
                            TableName: "suscipit",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "molestiae",
                                Type: "JSON",
                            },
                            TableName: "placeat",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "voluptatum",
                            Payload: &shared.Payload{
                                ContentExpression: "iusto",
                                Type: "JSON",
                            },
                            Separator: "nisi",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "recusandae",
                            Payload: &shared.Payload{
                                ContentExpression: "temporibus",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "quis",
                            EntryID: "veritatis",
                            PropertyAlias: "deserunt",
                            PropertyID: "perferendis",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "ipsam",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "repellendus",
                                    TimeInSeconds: "sapiente",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "quo",
                                    DoubleValue: "odit",
                                    IntegerValue: "at",
                                    StringValue: "at",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "maiores",
                            Payload: &shared.Payload{
                                ContentExpression: "molestiae",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "quod",
                            Payload: &shared.Payload{
                                ContentExpression: "esse",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "porro",
                                Type: "JSON",
                            },
                            TargetArn: "dicta",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "nam",
                                Type: "JSON",
                            },
                            QueueURL: "occaecati",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "fugit",
                            HashKeyType: "deleniti",
                            HashKeyValue: "hic",
                            Operation: "optio",
                            Payload: &shared.Payload{
                                ContentExpression: "totam",
                                Type: "STRING",
                            },
                            PayloadField: "commodi",
                            RangeKeyField: "molestiae",
                            RangeKeyType: "modi",
                            RangeKeyValue: "qui",
                            TableName: "impedit",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "cum",
                                Type: "STRING",
                            },
                            TableName: "ipsum",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "excepturi",
                            Payload: &shared.Payload{
                                ContentExpression: "aspernatur",
                                Type: "STRING",
                            },
                            Separator: "ad",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "natus",
                            Payload: &shared.Payload{
                                ContentExpression: "sed",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "dolor",
                            EntryID: "natus",
                            PropertyAlias: "laboriosam",
                            PropertyID: "hic",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "saepe",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "fuga",
                                    TimeInSeconds: "in",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "corporis",
                                    DoubleValue: "iste",
                                    IntegerValue: "iure",
                                    StringValue: "saepe",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "quidem",
                            Payload: &shared.Payload{
                                ContentExpression: "architecto",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "reiciendis",
                            Payload: &shared.Payload{
                                ContentExpression: "est",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "laborum",
                                Type: "STRING",
                            },
                            TargetArn: "dolorem",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "corporis",
                                Type: "STRING",
                            },
                            QueueURL: "nobis",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "enim",
                            HashKeyType: "omnis",
                            HashKeyValue: "nemo",
                            Operation: "minima",
                            Payload: &shared.Payload{
                                ContentExpression: "excepturi",
                                Type: "STRING",
                            },
                            PayloadField: "iure",
                            RangeKeyField: "culpa",
                            RangeKeyType: "doloribus",
                            RangeKeyValue: "sapiente",
                            TableName: "architecto",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "mollitia",
                                Type: "STRING",
                            },
                            TableName: "culpa",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "consequuntur",
                            Payload: &shared.Payload{
                                ContentExpression: "repellat",
                                Type: "JSON",
                            },
                            Separator: "occaecati",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "numquam",
                            Payload: &shared.Payload{
                                ContentExpression: "commodi",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "molestiae",
                            EntryID: "velit",
                            PropertyAlias: "error",
                            PropertyID: "quia",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "quis",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "vitae",
                                    TimeInSeconds: "laborum",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "animi",
                                    DoubleValue: "enim",
                                    IntegerValue: "odit",
                                    StringValue: "quo",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "sequi",
                            Payload: &shared.Payload{
                                ContentExpression: "tenetur",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "id",
                            Payload: &shared.Payload{
                                ContentExpression: "possimus",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quasi",
                                Type: "JSON",
                            },
                            TargetArn: "temporibus",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "laborum",
                                Type: "STRING",
                            },
                            QueueURL: "reiciendis",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "voluptatibus",
                            HashKeyType: "vero",
                            HashKeyValue: "nihil",
                            Operation: "praesentium",
                            Payload: &shared.Payload{
                                ContentExpression: "voluptatibus",
                                Type: "STRING",
                            },
                            PayloadField: "omnis",
                            RangeKeyField: "voluptate",
                            RangeKeyType: "cum",
                            RangeKeyValue: "perferendis",
                            TableName: "doloremque",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "reprehenderit",
                                Type: "STRING",
                            },
                            TableName: "maiores",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "dicta",
                            Payload: &shared.Payload{
                                ContentExpression: "corporis",
                                Type: "STRING",
                            },
                            Separator: "iusto",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "dicta",
                            Payload: &shared.Payload{
                                ContentExpression: "harum",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "accusamus",
                            EntryID: "commodi",
                            PropertyAlias: "repudiandae",
                            PropertyID: "quae",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "ipsum",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "quidem",
                                    TimeInSeconds: "molestias",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "excepturi",
                                    DoubleValue: "pariatur",
                                    IntegerValue: "modi",
                                    StringValue: "praesentium",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "rem",
                            Payload: &shared.Payload{
                                ContentExpression: "voluptates",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "repudiandae",
                            Payload: &shared.Payload{
                                ContentExpression: "sint",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "itaque",
                                Type: "STRING",
                            },
                            TargetArn: "enim",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "consequatur",
                                Type: "JSON",
                            },
                            QueueURL: "quibusdam",
                            UseBase64: false,
                        },
                    },
                },
            },
            AlarmModelDescription: "explicabo",
            AlarmModelName: "deserunt",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "quibusdam",
                                Payload: &shared.Payload{
                                    ContentExpression: "labore",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "aliquid",
                                    Subject: "cupiditate",
                                },
                                From: "quos",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "magni",
                                                UserID: "assumenda",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "alias",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "dolorum",
                                            UserID: "excepturi",
                                        },
                                    },
                                },
                                SenderID: "tempora",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "facilis",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "labore",
                                            UserID: "delectus",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "eum",
                                            UserID: "non",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "eligendi",
                                            UserID: "sint",
                                        },
                                    },
                                },
                                SenderID: "aliquid",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "provident",
                                Payload: &shared.Payload{
                                    ContentExpression: "necessitatibus",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "dolor",
                                    Subject: "debitis",
                                },
                                From: "a",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "in",
                                                UserID: "in",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "illum",
                                                UserID: "maiores",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "rerum",
                                                UserID: "dicta",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "magnam",
                                    Subject: "cumque",
                                },
                                From: "facere",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "aliquid",
                                                UserID: "laborum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "accusamus",
                                                UserID: "non",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "occaecati",
                                    Subject: "enim",
                                },
                                From: "accusamus",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quidem",
                                                UserID: "provident",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nam",
                                                UserID: "id",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "blanditiis",
                                                UserID: "deleniti",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "sapiente",
                                                UserID: "amet",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "nisi",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "natus",
                                            UserID: "omnis",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "molestiae",
                                            UserID: "perferendis",
                                        },
                                    },
                                },
                                SenderID: "nihil",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "magnam",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "id",
                                            UserID: "labore",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "labore",
                                            UserID: "suscipit",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "natus",
                                            UserID: "nobis",
                                        },
                                    },
                                },
                                SenderID: "eum",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "vero",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "architecto",
                                            UserID: "magnam",
                                        },
                                    },
                                },
                                SenderID: "et",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "excepturi",
                                Payload: &shared.Payload{
                                    ContentExpression: "ullam",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "sint",
                                    Subject: "accusantium",
                                },
                                From: "mollitia",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "mollitia",
                                                UserID: "ad",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "eum",
                                                UserID: "dolor",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "necessitatibus",
                                                UserID: "odit",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nemo",
                                                UserID: "quasi",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "iure",
                                    Subject: "doloribus",
                                },
                                From: "debitis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "maxime",
                                                UserID: "deleniti",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "facilis",
                                                UserID: "in",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "architecto",
                                    Subject: "architecto",
                                },
                                From: "repudiandae",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "expedita",
                                                UserID: "nihil",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "repellat",
                                                UserID: "quibusdam",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "saepe",
                                Recipients: []shared.RecipientDetail{
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
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "magni",
                                            UserID: "sunt",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quo",
                                            UserID: "illum",
                                        },
                                    },
                                },
                                SenderID: "pariatur",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "EQUAL",
                    InputProperty: "ea",
                    Threshold: "excepturi",
                },
            },
            Key: "odit",
            RoleArn: "ea",
            Severity: 33222,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maiores",
                    Value: "quidem",
                },
            },
        },
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