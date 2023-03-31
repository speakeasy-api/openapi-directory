<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAlarmModelHeaders;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmCapabilities;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmEventActions;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmNotification;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmRule;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBody;
import org.openapis.openapi.models.operations.CreateAlarmModelRequest;
import org.openapis.openapi.models.operations.CreateAlarmModelResponse;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.SimpleRule;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.NotificationAction;
import org.openapis.openapi.models.shared.SMSConfiguration;
import org.openapis.openapi.models.shared.RecipientDetail;
import org.openapis.openapi.models.shared.SSOIdentity;
import org.openapis.openapi.models.shared.EmailConfiguration;
import org.openapis.openapi.models.shared.EmailRecipients;
import org.openapis.openapi.models.shared.EmailContent;
import org.openapis.openapi.models.shared.NotificationTargetActions;
import org.openapis.openapi.models.shared.LambdaAction;
import org.openapis.openapi.models.shared.Payload;
import org.openapis.openapi.models.shared.PayloadTypeEnum;
import org.openapis.openapi.models.shared.AlarmAction;
import org.openapis.openapi.models.shared.SqsAction;
import org.openapis.openapi.models.shared.SNSTopicPublishAction;
import org.openapis.openapi.models.shared.IotTopicPublishAction;
import org.openapis.openapi.models.shared.IotSiteWiseAction;
import org.openapis.openapi.models.shared.AssetPropertyValue;
import org.openapis.openapi.models.shared.AssetPropertyVariant;
import org.openapis.openapi.models.shared.AssetPropertyTimestamp;
import org.openapis.openapi.models.shared.IotEventsAction;
import org.openapis.openapi.models.shared.FirehoseAction;
import org.openapis.openapi.models.shared.DynamoDBv2Action;
import org.openapis.openapi.models.shared.DynamoDBAction;
import org.openapis.openapi.models.shared.InitializationConfiguration;
import org.openapis.openapi.models.shared.AcknowledgeFlow;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAlarmModelRequest req = new CreateAlarmModelRequest() {{
                headers = new CreateAlarmModelHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAlarmModelRequestBody() {{
                    alarmCapabilities = new CreateAlarmModelRequestBodyAlarmCapabilities() {{
                        acknowledgeFlow = new AcknowledgeFlow() {{
                            enabled = false;
                        }};
                        initializationConfiguration = new InitializationConfiguration() {{
                            disabledOnInitialization = false;
                        }};
                    }};
                    alarmEventActions = new CreateAlarmModelRequestBodyAlarmEventActions() {{
                        alarmActions = new org.openapis.openapi.models.shared.AlarmAction[]{{
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "vel";
                                    hashKeyType = "error";
                                    hashKeyValue = "deserunt";
                                    operation = "suscipit";
                                    payload = new Payload() {{
                                        contentExpression = "iure";
                                        type = "STRING";
                                    }};
                                    payloadField = "debitis";
                                    rangeKeyField = "ipsa";
                                    rangeKeyType = "delectus";
                                    rangeKeyValue = "tempora";
                                    tableName = "suscipit";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "molestiae";
                                        type = "JSON";
                                    }};
                                    tableName = "placeat";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "voluptatum";
                                    payload = new Payload() {{
                                        contentExpression = "iusto";
                                        type = "JSON";
                                    }};
                                    separator = "nisi";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "recusandae";
                                    payload = new Payload() {{
                                        contentExpression = "temporibus";
                                        type = "STRING";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "quis";
                                    entryId = "veritatis";
                                    propertyAlias = "deserunt";
                                    propertyId = "perferendis";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "ipsam";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "repellendus";
                                            timeInSeconds = "sapiente";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "quo";
                                            doubleValue = "odit";
                                            integerValue = "at";
                                            stringValue = "at";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "maiores";
                                    payload = new Payload() {{
                                        contentExpression = "molestiae";
                                        type = "JSON";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "quod";
                                    payload = new Payload() {{
                                        contentExpression = "esse";
                                        type = "JSON";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "porro";
                                        type = "JSON";
                                    }};
                                    targetArn = "dicta";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "nam";
                                        type = "JSON";
                                    }};
                                    queueUrl = "occaecati";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "fugit";
                                    hashKeyType = "deleniti";
                                    hashKeyValue = "hic";
                                    operation = "optio";
                                    payload = new Payload() {{
                                        contentExpression = "totam";
                                        type = "STRING";
                                    }};
                                    payloadField = "commodi";
                                    rangeKeyField = "molestiae";
                                    rangeKeyType = "modi";
                                    rangeKeyValue = "qui";
                                    tableName = "impedit";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "cum";
                                        type = "STRING";
                                    }};
                                    tableName = "ipsum";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "excepturi";
                                    payload = new Payload() {{
                                        contentExpression = "aspernatur";
                                        type = "STRING";
                                    }};
                                    separator = "ad";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "natus";
                                    payload = new Payload() {{
                                        contentExpression = "sed";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "dolor";
                                    entryId = "natus";
                                    propertyAlias = "laboriosam";
                                    propertyId = "hic";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "saepe";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "fuga";
                                            timeInSeconds = "in";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "corporis";
                                            doubleValue = "iste";
                                            integerValue = "iure";
                                            stringValue = "saepe";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "quidem";
                                    payload = new Payload() {{
                                        contentExpression = "architecto";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "reiciendis";
                                    payload = new Payload() {{
                                        contentExpression = "est";
                                        type = "JSON";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "laborum";
                                        type = "STRING";
                                    }};
                                    targetArn = "dolorem";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "corporis";
                                        type = "STRING";
                                    }};
                                    queueUrl = "nobis";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "enim";
                                    hashKeyType = "omnis";
                                    hashKeyValue = "nemo";
                                    operation = "minima";
                                    payload = new Payload() {{
                                        contentExpression = "excepturi";
                                        type = "STRING";
                                    }};
                                    payloadField = "iure";
                                    rangeKeyField = "culpa";
                                    rangeKeyType = "doloribus";
                                    rangeKeyValue = "sapiente";
                                    tableName = "architecto";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "mollitia";
                                        type = "STRING";
                                    }};
                                    tableName = "culpa";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "consequuntur";
                                    payload = new Payload() {{
                                        contentExpression = "repellat";
                                        type = "JSON";
                                    }};
                                    separator = "occaecati";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "numquam";
                                    payload = new Payload() {{
                                        contentExpression = "commodi";
                                        type = "STRING";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "molestiae";
                                    entryId = "velit";
                                    propertyAlias = "error";
                                    propertyId = "quia";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "quis";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "vitae";
                                            timeInSeconds = "laborum";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "animi";
                                            doubleValue = "enim";
                                            integerValue = "odit";
                                            stringValue = "quo";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "sequi";
                                    payload = new Payload() {{
                                        contentExpression = "tenetur";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "id";
                                    payload = new Payload() {{
                                        contentExpression = "possimus";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "quasi";
                                        type = "JSON";
                                    }};
                                    targetArn = "temporibus";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "laborum";
                                        type = "STRING";
                                    }};
                                    queueUrl = "reiciendis";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "voluptatibus";
                                    hashKeyType = "vero";
                                    hashKeyValue = "nihil";
                                    operation = "praesentium";
                                    payload = new Payload() {{
                                        contentExpression = "voluptatibus";
                                        type = "STRING";
                                    }};
                                    payloadField = "omnis";
                                    rangeKeyField = "voluptate";
                                    rangeKeyType = "cum";
                                    rangeKeyValue = "perferendis";
                                    tableName = "doloremque";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "reprehenderit";
                                        type = "STRING";
                                    }};
                                    tableName = "maiores";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "dicta";
                                    payload = new Payload() {{
                                        contentExpression = "corporis";
                                        type = "STRING";
                                    }};
                                    separator = "iusto";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "dicta";
                                    payload = new Payload() {{
                                        contentExpression = "harum";
                                        type = "STRING";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "accusamus";
                                    entryId = "commodi";
                                    propertyAlias = "repudiandae";
                                    propertyId = "quae";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "ipsum";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "quidem";
                                            timeInSeconds = "molestias";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "excepturi";
                                            doubleValue = "pariatur";
                                            integerValue = "modi";
                                            stringValue = "praesentium";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "rem";
                                    payload = new Payload() {{
                                        contentExpression = "voluptates";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "repudiandae";
                                    payload = new Payload() {{
                                        contentExpression = "sint";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "itaque";
                                        type = "STRING";
                                    }};
                                    targetArn = "enim";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "consequatur";
                                        type = "JSON";
                                    }};
                                    queueUrl = "quibusdam";
                                    useBase64 = false;
                                }};
                            }}),
                        }};
                    }};
                    alarmModelDescription = "explicabo";
                    alarmModelName = "deserunt";
                    alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification() {{
                        notificationActions = new org.openapis.openapi.models.shared.NotificationAction[]{{
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "quibusdam";
                                        payload = new Payload() {{
                                            contentExpression = "labore";
                                            type = "STRING";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "aliquid";
                                            subject = "cupiditate";
                                        }};
                                        from = "quos";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "magni";
                                                        userId = "assumenda";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "alias";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "dolorum";
                                                    userId = "excepturi";
                                                }};
                                            }}),
                                        }};
                                        senderId = "tempora";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "facilis";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "labore";
                                                    userId = "delectus";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "eum";
                                                    userId = "non";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "eligendi";
                                                    userId = "sint";
                                                }};
                                            }}),
                                        }};
                                        senderId = "aliquid";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "provident";
                                        payload = new Payload() {{
                                            contentExpression = "necessitatibus";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "dolor";
                                            subject = "debitis";
                                        }};
                                        from = "a";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "in";
                                                        userId = "in";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "illum";
                                                        userId = "maiores";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "rerum";
                                                        userId = "dicta";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "magnam";
                                            subject = "cumque";
                                        }};
                                        from = "facere";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "aliquid";
                                                        userId = "laborum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "accusamus";
                                                        userId = "non";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "occaecati";
                                            subject = "enim";
                                        }};
                                        from = "accusamus";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "quidem";
                                                        userId = "provident";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "nam";
                                                        userId = "id";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "blanditiis";
                                                        userId = "deleniti";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "sapiente";
                                                        userId = "amet";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "nisi";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "natus";
                                                    userId = "omnis";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "molestiae";
                                                    userId = "perferendis";
                                                }};
                                            }}),
                                        }};
                                        senderId = "nihil";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "magnam";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "id";
                                                    userId = "labore";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "labore";
                                                    userId = "suscipit";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "natus";
                                                    userId = "nobis";
                                                }};
                                            }}),
                                        }};
                                        senderId = "eum";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "vero";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "architecto";
                                                    userId = "magnam";
                                                }};
                                            }}),
                                        }};
                                        senderId = "et";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "excepturi";
                                        payload = new Payload() {{
                                            contentExpression = "ullam";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "sint";
                                            subject = "accusantium";
                                        }};
                                        from = "mollitia";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "mollitia";
                                                        userId = "ad";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "eum";
                                                        userId = "dolor";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "necessitatibus";
                                                        userId = "odit";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "nemo";
                                                        userId = "quasi";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "iure";
                                            subject = "doloribus";
                                        }};
                                        from = "debitis";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "maxime";
                                                        userId = "deleniti";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "facilis";
                                                        userId = "in";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "architecto";
                                            subject = "architecto";
                                        }};
                                        from = "repudiandae";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "expedita";
                                                        userId = "nihil";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "repellat";
                                                        userId = "quibusdam";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "saepe";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "accusantium";
                                                    userId = "consequuntur";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "praesentium";
                                                    userId = "natus";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "magni";
                                                    userId = "sunt";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "quo";
                                                    userId = "illum";
                                                }};
                                            }}),
                                        }};
                                        senderId = "pariatur";
                                    }}),
                                }};
                            }}),
                        }};
                    }};
                    alarmRule = new CreateAlarmModelRequestBodyAlarmRule() {{
                        simpleRule = new SimpleRule() {{
                            comparisonOperator = "EQUAL";
                            inputProperty = "ea";
                            threshold = "excepturi";
                        }};
                    }};
                    key = "odit";
                    roleArn = "ea";
                    severity = 33222;
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "maiores";
                            value = "quidem";
                        }}),
                    }};
                }};
            }};            

            CreateAlarmModelResponse res = sdk.createAlarmModel(req);

            if (res.createAlarmModelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->