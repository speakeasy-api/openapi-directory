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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAlarmModelRequest{
        Headers: operations.CreateAlarmModelHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
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
                            HashKeyField: "nihil",
                            HashKeyType: "fuga",
                            HashKeyValue: "facilis",
                            Operation: "eum",
                            Payload: &shared.Payload{
                                ContentExpression: "iusto",
                                Type: "STRING",
                            },
                            PayloadField: "saepe",
                            RangeKeyField: "inventore",
                            RangeKeyType: "sapiente",
                            RangeKeyValue: "enim",
                            TableName: "eum",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "voluptatum",
                                Type: "JSON",
                            },
                            TableName: "vel",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "non",
                            Payload: &shared.Payload{
                                ContentExpression: "deleniti",
                                Type: "JSON",
                            },
                            Separator: "reprehenderit",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "quo",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "laboriosam",
                            EntryID: "dicta",
                            PropertyAlias: "est",
                            PropertyID: "voluptatem",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "consequatur",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "fugiat",
                                    TimeInSeconds: "a",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "omnis",
                                    DoubleValue: "eos",
                                    IntegerValue: "accusamus",
                                    StringValue: "accusamus",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "reiciendis",
                            Payload: &shared.Payload{
                                ContentExpression: "rem",
                                Type: "JSON",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "et",
                            Payload: &shared.Payload{
                                ContentExpression: "praesentium",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "dolor",
                                Type: "JSON",
                            },
                            TargetArn: "sed",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "quisquam",
                                Type: "JSON",
                            },
                            QueueURL: "culpa",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "qui",
                            HashKeyType: "sed",
                            HashKeyValue: "rerum",
                            Operation: "possimus",
                            Payload: &shared.Payload{
                                ContentExpression: "occaecati",
                                Type: "STRING",
                            },
                            PayloadField: "esse",
                            RangeKeyField: "rem",
                            RangeKeyType: "voluptatem",
                            RangeKeyValue: "amet",
                            TableName: "est",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "id",
                                Type: "STRING",
                            },
                            TableName: "numquam",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "similique",
                            Payload: &shared.Payload{
                                ContentExpression: "dolores",
                                Type: "STRING",
                            },
                            Separator: "quia",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "et",
                            Payload: &shared.Payload{
                                ContentExpression: "voluptatem",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "modi",
                            EntryID: "et",
                            PropertyAlias: "iure",
                            PropertyID: "earum",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "ut",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "soluta",
                                    TimeInSeconds: "qui",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "ea",
                                    DoubleValue: "laborum",
                                    IntegerValue: "iusto",
                                    StringValue: "ut",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "optio",
                            Payload: &shared.Payload{
                                ContentExpression: "aspernatur",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "ut",
                            Payload: &shared.Payload{
                                ContentExpression: "libero",
                                Type: "JSON",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "libero",
                                Type: "STRING",
                            },
                            TargetArn: "non",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "ea",
                                Type: "STRING",
                            },
                            QueueURL: "placeat",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "ipsam",
                            HashKeyType: "est",
                            HashKeyValue: "commodi",
                            Operation: "quia",
                            Payload: &shared.Payload{
                                ContentExpression: "similique",
                                Type: "STRING",
                            },
                            PayloadField: "odio",
                            RangeKeyField: "harum",
                            RangeKeyType: "doloribus",
                            RangeKeyValue: "a",
                            TableName: "aut",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "et",
                                Type: "STRING",
                            },
                            TableName: "quidem",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "neque",
                            Payload: &shared.Payload{
                                ContentExpression: "asperiores",
                                Type: "JSON",
                            },
                            Separator: "culpa",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "aliquam",
                            Payload: &shared.Payload{
                                ContentExpression: "esse",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "voluptatum",
                            EntryID: "et",
                            PropertyAlias: "fuga",
                            PropertyID: "nesciunt",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "laboriosam",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "aut",
                                    TimeInSeconds: "cum",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "expedita",
                                    DoubleValue: "ipsam",
                                    IntegerValue: "eos",
                                    StringValue: "omnis",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "adipisci",
                            Payload: &shared.Payload{
                                ContentExpression: "hic",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "distinctio",
                            Payload: &shared.Payload{
                                ContentExpression: "qui",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "aspernatur",
                                Type: "JSON",
                            },
                            TargetArn: "quo",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "tempore",
                                Type: "STRING",
                            },
                            QueueURL: "aut",
                            UseBase64: false,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "reiciendis",
                            HashKeyType: "debitis",
                            HashKeyValue: "totam",
                            Operation: "molestias",
                            Payload: &shared.Payload{
                                ContentExpression: "reiciendis",
                                Type: "STRING",
                            },
                            PayloadField: "id",
                            RangeKeyField: "qui",
                            RangeKeyType: "quod",
                            RangeKeyValue: "sit",
                            TableName: "eaque",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "odio",
                                Type: "STRING",
                            },
                            TableName: "reiciendis",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "sed",
                            Payload: &shared.Payload{
                                ContentExpression: "ea",
                                Type: "STRING",
                            },
                            Separator: "deleniti",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "sed",
                            Payload: &shared.Payload{
                                ContentExpression: "est",
                                Type: "STRING",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "aut",
                            EntryID: "esse",
                            PropertyAlias: "sint",
                            PropertyID: "veritatis",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "numquam",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "eligendi",
                                    TimeInSeconds: "error",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "similique",
                                    DoubleValue: "et",
                                    IntegerValue: "ut",
                                    StringValue: "molestias",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "cupiditate",
                            Payload: &shared.Payload{
                                ContentExpression: "sint",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "et",
                            Payload: &shared.Payload{
                                ContentExpression: "in",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SNSTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "non",
                                Type: "STRING",
                            },
                            TargetArn: "voluptatem",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "aut",
                                Type: "JSON",
                            },
                            QueueURL: "voluptas",
                            UseBase64: false,
                        },
                    },
                },
            },
            AlarmModelDescription: "magni",
            AlarmModelName: "est",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "voluptas",
                                Payload: &shared.Payload{
                                    ContentExpression: "nostrum",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "in",
                                    Subject: "officia",
                                },
                                From: "omnis",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "dolorem",
                                                UserID: "eum",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "consequatur",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "cum",
                                            UserID: "similique",
                                        },
                                    },
                                },
                                SenderID: "enim",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "nihil",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "quis",
                                            UserID: "sapiente",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "et",
                                            UserID: "dolore",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "possimus",
                                            UserID: "in",
                                        },
                                    },
                                },
                                SenderID: "qui",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "deserunt",
                                Payload: &shared.Payload{
                                    ContentExpression: "eveniet",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "modi",
                                    Subject: "necessitatibus",
                                },
                                From: "tenetur",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "ducimus",
                                                UserID: "ducimus",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nulla",
                                                UserID: "reiciendis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "cumque",
                                                UserID: "fugit",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "ullam",
                                    Subject: "voluptas",
                                },
                                From: "vel",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "qui",
                                                UserID: "cum",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "aut",
                                                UserID: "magnam",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "culpa",
                                    Subject: "enim",
                                },
                                From: "aut",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "eligendi",
                                                UserID: "officia",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "est",
                                                UserID: "distinctio",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "provident",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "a",
                                                UserID: "incidunt",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "qui",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "dolorum",
                                            UserID: "id",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "voluptatum",
                                            UserID: "sit",
                                        },
                                    },
                                },
                                SenderID: "rem",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "corporis",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "distinctio",
                                            UserID: "quis",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "nostrum",
                                            UserID: "eum",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "et",
                                            UserID: "placeat",
                                        },
                                    },
                                },
                                SenderID: "molestiae",
                            },
                            shared.SMSConfiguration{
                                AdditionalMessage: "debitis",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "aut",
                                            UserID: "ullam",
                                        },
                                    },
                                },
                                SenderID: "explicabo",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "similique",
                                Payload: &shared.Payload{
                                    ContentExpression: "ex",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "in",
                                    Subject: "aperiam",
                                },
                                From: "et",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "voluptatem",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "modi",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "eveniet",
                                                UserID: "qui",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "consequatur",
                                                UserID: "aspernatur",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "iusto",
                                    Subject: "maiores",
                                },
                                From: "saepe",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "aut",
                                                UserID: "sed",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "nihil",
                                                UserID: "ducimus",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "aspernatur",
                                    Subject: "aspernatur",
                                },
                                From: "sint",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "quo",
                                                UserID: "totam",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SSOIdentity{
                                                IdentityStoreID: "repellat",
                                                UserID: "voluptas",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SMSConfiguration{
                            shared.SMSConfiguration{
                                AdditionalMessage: "et",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "eaque",
                                            UserID: "neque",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "molestias",
                                            UserID: "et",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "dolorem",
                                            UserID: "quia",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SSOIdentity{
                                            IdentityStoreID: "omnis",
                                            UserID: "pariatur",
                                        },
                                    },
                                },
                                SenderID: "et",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "EQUAL",
                    InputProperty: "velit",
                    Threshold: "similique",
                },
            },
            Key: "eos",
            RoleArn: "voluptate",
            Severity: 33222,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "optio",
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
