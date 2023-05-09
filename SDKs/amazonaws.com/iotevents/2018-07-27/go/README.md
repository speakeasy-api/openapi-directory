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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAlarmModel(ctx, operations.CreateAlarmModelRequest{
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
                            HashKeyType: sdk.String("distinctio"),
                            HashKeyValue: "quibusdam",
                            Operation: sdk.String("unde"),
                            Payload: &shared.Payload{
                                ContentExpression: "nulla",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            PayloadField: sdk.String("illum"),
                            RangeKeyField: sdk.String("vel"),
                            RangeKeyType: sdk.String("error"),
                            RangeKeyValue: sdk.String("deserunt"),
                            TableName: "suscipit",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "iure",
                                Type: shared.PayloadTypeEnumString,
                            },
                            TableName: "debitis",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "ipsa",
                            Payload: &shared.Payload{
                                ContentExpression: "delectus",
                                Type: shared.PayloadTypeEnumString,
                            },
                            Separator: sdk.String("suscipit"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "minus",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: sdk.String("voluptatum"),
                            EntryID: sdk.String("iusto"),
                            PropertyAlias: sdk.String("excepturi"),
                            PropertyID: sdk.String("nisi"),
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: sdk.String("recusandae"),
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: sdk.String("temporibus"),
                                    TimeInSeconds: "ab",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: sdk.String("quis"),
                                    DoubleValue: sdk.String("veritatis"),
                                    IntegerValue: sdk.String("deserunt"),
                                    StringValue: sdk.String("perferendis"),
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "ipsam",
                            Payload: &shared.Payload{
                                ContentExpression: "repellendus",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "quo",
                            Payload: &shared.Payload{
                                ContentExpression: "odit",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "at",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            TargetArn: "molestiae",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quod",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            QueueURL: "esse",
                            UseBase64: sdk.Bool(false),
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "totam",
                            HashKeyType: sdk.String("porro"),
                            HashKeyValue: "dolorum",
                            Operation: sdk.String("dicta"),
                            Payload: &shared.Payload{
                                ContentExpression: "nam",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            PayloadField: sdk.String("occaecati"),
                            RangeKeyField: sdk.String("fugit"),
                            RangeKeyType: sdk.String("deleniti"),
                            RangeKeyValue: sdk.String("hic"),
                            TableName: "optio",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "totam",
                                Type: shared.PayloadTypeEnumString,
                            },
                            TableName: "commodi",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "modi",
                                Type: shared.PayloadTypeEnumString,
                            },
                            Separator: sdk.String("impedit"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "cum",
                            Payload: &shared.Payload{
                                ContentExpression: "esse",
                                Type: shared.PayloadTypeEnumString,
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: sdk.String("excepturi"),
                            EntryID: sdk.String("aspernatur"),
                            PropertyAlias: sdk.String("perferendis"),
                            PropertyID: sdk.String("ad"),
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: sdk.String("natus"),
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: sdk.String("sed"),
                                    TimeInSeconds: "iste",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: sdk.String("dolor"),
                                    DoubleValue: sdk.String("natus"),
                                    IntegerValue: sdk.String("laboriosam"),
                                    StringValue: sdk.String("hic"),
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "saepe",
                            Payload: &shared.Payload{
                                ContentExpression: "fuga",
                                Type: shared.PayloadTypeEnumString,
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "corporis",
                            Payload: &shared.Payload{
                                ContentExpression: "iste",
                                Type: shared.PayloadTypeEnumString,
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "saepe",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            TargetArn: "architecto",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "ipsa",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            QueueURL: "est",
                            UseBase64: sdk.Bool(false),
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "mollitia",
                            HashKeyType: sdk.String("laborum"),
                            HashKeyValue: "dolores",
                            Operation: sdk.String("dolorem"),
                            Payload: &shared.Payload{
                                ContentExpression: "corporis",
                                Type: shared.PayloadTypeEnumString,
                            },
                            PayloadField: sdk.String("nobis"),
                            RangeKeyField: sdk.String("enim"),
                            RangeKeyType: sdk.String("omnis"),
                            RangeKeyValue: sdk.String("nemo"),
                            TableName: "minima",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "excepturi",
                                Type: shared.PayloadTypeEnumString,
                            },
                            TableName: "iure",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "culpa",
                            Payload: &shared.Payload{
                                ContentExpression: "doloribus",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            Separator: sdk.String("architecto"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "mollitia",
                            Payload: &shared.Payload{
                                ContentExpression: "dolorem",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: sdk.String("consequuntur"),
                            EntryID: sdk.String("repellat"),
                            PropertyAlias: sdk.String("mollitia"),
                            PropertyID: sdk.String("occaecati"),
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: sdk.String("numquam"),
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: sdk.String("commodi"),
                                    TimeInSeconds: "quam",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: sdk.String("molestiae"),
                                    DoubleValue: sdk.String("velit"),
                                    IntegerValue: sdk.String("error"),
                                    StringValue: sdk.String("quia"),
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "quis",
                            Payload: &shared.Payload{
                                ContentExpression: "vitae",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "animi",
                            Payload: &shared.Payload{
                                ContentExpression: "enim",
                                Type: shared.PayloadTypeEnumString,
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quo",
                                Type: shared.PayloadTypeEnumString,
                            },
                            TargetArn: "tenetur",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "ipsam",
                                Type: shared.PayloadTypeEnumJSON,
                            },
                            QueueURL: "possimus",
                            UseBase64: sdk.Bool(false),
                        },
                    },
                },
            },
            AlarmModelDescription: sdk.String("aut"),
            AlarmModelName: "quasi",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "temporibus",
                                Payload: &shared.Payload{
                                    ContentExpression: "laborum",
                                    Type: shared.PayloadTypeEnumString,
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("voluptatibus"),
                                    Subject: sdk.String("vero"),
                                },
                                From: "nihil",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "voluptatibus",
                                                UserID: sdk.String("ipsa"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "omnis",
                                                UserID: sdk.String("voluptate"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "cum",
                                                UserID: sdk.String("perferendis"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("doloremque"),
                                    Subject: sdk.String("reprehenderit"),
                                },
                                From: "ut",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: sdk.String("corporis"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dolore",
                                                UserID: sdk.String("iusto"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: sdk.String("harum"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "enim",
                                                UserID: sdk.String("accusamus"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("commodi"),
                                    Subject: sdk.String("repudiandae"),
                                },
                                From: "quae",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quidem",
                                                UserID: sdk.String("molestias"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("excepturi"),
                                    Subject: sdk.String("pariatur"),
                                },
                                From: "modi",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "rem",
                                                UserID: sdk.String("voluptates"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quasi",
                                                UserID: sdk.String("repudiandae"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "sint",
                                                UserID: sdk.String("veritatis"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("incidunt"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "consequatur",
                                            UserID: sdk.String("est"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quibusdam",
                                            UserID: sdk.String("explicabo"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("deserunt"),
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("distinctio"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "labore",
                                            UserID: sdk.String("modi"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "qui",
                                            UserID: sdk.String("aliquid"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "cupiditate",
                                            UserID: sdk.String("quos"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "perferendis",
                                            UserID: sdk.String("magni"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("assumenda"),
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("ipsam"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "fugit",
                                            UserID: sdk.String("dolorum"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("excepturi"),
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("tempora"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "tempore",
                                            UserID: sdk.String("labore"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "delectus",
                                            UserID: sdk.String("eum"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "non",
                                            UserID: sdk.String("eligendi"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("sint"),
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "aliquid",
                                Payload: &shared.Payload{
                                    ContentExpression: "provident",
                                    Type: shared.PayloadTypeEnumJSON,
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("officia"),
                                    Subject: sdk.String("dolor"),
                                },
                                From: "debitis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dolorum",
                                                UserID: sdk.String("in"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "in",
                                                UserID: sdk.String("illum"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "maiores",
                                                UserID: sdk.String("rerum"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dicta",
                                                UserID: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("cumque"),
                                    Subject: sdk.String("facere"),
                                },
                                From: "ea",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "laborum",
                                                UserID: sdk.String("accusamus"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "non",
                                                UserID: sdk.String("occaecati"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("enim"),
                                    Subject: sdk.String("accusamus"),
                                },
                                From: "delectus",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "provident",
                                                UserID: sdk.String("nam"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "id",
                                                UserID: sdk.String("blanditiis"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "deleniti",
                                                UserID: sdk.String("sapiente"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("deserunt"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "vel",
                                            UserID: sdk.String("natus"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "omnis",
                                            UserID: sdk.String("molestiae"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("perferendis"),
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "nihil",
                                Payload: &shared.Payload{
                                    ContentExpression: "magnam",
                                    Type: shared.PayloadTypeEnumJSON,
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("labore"),
                                    Subject: sdk.String("labore"),
                                },
                                From: "suscipit",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nobis",
                                                UserID: sdk.String("eum"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "vero",
                                                UserID: sdk.String("aspernatur"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "architecto",
                                                UserID: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("et"),
                                    Subject: sdk.String("excepturi"),
                                },
                                From: "ullam",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quos",
                                                UserID: sdk.String("sint"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "accusantium",
                                                UserID: sdk.String("mollitia"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "reiciendis",
                                                UserID: sdk.String("mollitia"),
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: sdk.String("ad"),
                                    Subject: sdk.String("eum"),
                                },
                                From: "dolor",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "odit",
                                                UserID: sdk.String("nemo"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quasi",
                                                UserID: sdk.String("iure"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "doloribus",
                                                UserID: sdk.String("debitis"),
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "eius",
                                                UserID: sdk.String("maxime"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("facilis"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "architecto",
                                            UserID: sdk.String("architecto"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "repudiandae",
                                            UserID: sdk.String("ullam"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("expedita"),
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("nihil"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quibusdam",
                                            UserID: sdk.String("sed"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "saepe",
                                            UserID: sdk.String("pariatur"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "accusantium",
                                            UserID: sdk.String("consequuntur"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "praesentium",
                                            UserID: sdk.String("natus"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("magni"),
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: sdk.String("sunt"),
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "illum",
                                            UserID: sdk.String("pariatur"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "maxime",
                                            UserID: sdk.String("ea"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "excepturi",
                                            UserID: sdk.String("odit"),
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "ea",
                                            UserID: sdk.String("accusantium"),
                                        },
                                    },
                                },
                                SenderID: sdk.String("ab"),
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: shared.ComparisonOperatorEnumNotEqual,
                    InputProperty: "quidem",
                    Threshold: "ipsam",
                },
            },
            Key: sdk.String("voluptate"),
            RoleArn: "autem",
            Severity: sdk.Int64(722056),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "pariatur",
                    Value: "nemo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateAlarmModel](docs/sdk/README.md#createalarmmodel) - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [CreateDetectorModel](docs/sdk/README.md#createdetectormodel) - Creates a detector model.
* [CreateInput](docs/sdk/README.md#createinput) - Creates an input.
* [DeleteAlarmModel](docs/sdk/README.md#deletealarmmodel) - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* [DeleteDetectorModel](docs/sdk/README.md#deletedetectormodel) - Deletes a detector model. Any active instances of the detector model are also deleted.
* [DeleteInput](docs/sdk/README.md#deleteinput) - Deletes an input.
* [DescribeAlarmModel](docs/sdk/README.md#describealarmmodel) - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* [DescribeDetectorModel](docs/sdk/README.md#describedetectormodel) - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* [DescribeDetectorModelAnalysis](docs/sdk/README.md#describedetectormodelanalysis) - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [DescribeInput](docs/sdk/README.md#describeinput) - Describes an input.
* [DescribeLoggingOptions](docs/sdk/README.md#describeloggingoptions) - Retrieves the current settings of the AWS IoT Events logging options.
* [GetDetectorModelAnalysisResults](docs/sdk/README.md#getdetectormodelanalysisresults) - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [ListAlarmModelVersions](docs/sdk/README.md#listalarmmodelversions) - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* [ListAlarmModels](docs/sdk/README.md#listalarmmodels) - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* [ListDetectorModelVersions](docs/sdk/README.md#listdetectormodelversions) - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* [ListDetectorModels](docs/sdk/README.md#listdetectormodels) - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* [ListInputRoutings](docs/sdk/README.md#listinputroutings) -  Lists one or more input routings. 
* [ListInputs](docs/sdk/README.md#listinputs) - Lists the inputs you have created.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata) you have assigned to the resource.
* [PutLoggingOptions](docs/sdk/README.md#putloggingoptions) - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* [StartDetectorModelAnalysis](docs/sdk/README.md#startdetectormodelanalysis) - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [TagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the given tags (metadata) from the resource.
* [UpdateAlarmModel](docs/sdk/README.md#updatealarmmodel) - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* [UpdateDetectorModel](docs/sdk/README.md#updatedetectormodel) - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* [UpdateInput](docs/sdk/README.md#updateinput) - Updates an input.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
