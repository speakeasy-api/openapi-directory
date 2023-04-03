# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlarmModelRequest req = new CreateAlarmModelRequest() {{
                requestBody = new CreateAlarmModelRequestBody() {{
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
                                    hashKeyField = "provident";
                                    hashKeyType = "distinctio";
                                    hashKeyValue = "quibusdam";
                                    operation = "unde";
                                    payload = new Payload() {{
                                        contentExpression = "nulla";
                                        type = "JSON";
                                    }};
                                    payloadField = "illum";
                                    rangeKeyField = "vel";
                                    rangeKeyType = "error";
                                    rangeKeyValue = "deserunt";
                                    tableName = "suscipit";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "iure";
                                        type = "STRING";
                                    }};
                                    tableName = "debitis";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "ipsa";
                                    payload = new Payload() {{
                                        contentExpression = "delectus";
                                        type = "STRING";
                                    }};
                                    separator = "suscipit";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "molestiae";
                                    payload = new Payload() {{
                                        contentExpression = "minus";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "voluptatum";
                                    entryId = "iusto";
                                    propertyAlias = "excepturi";
                                    propertyId = "nisi";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "recusandae";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "temporibus";
                                            timeInSeconds = "ab";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "quis";
                                            doubleValue = "veritatis";
                                            integerValue = "deserunt";
                                            stringValue = "perferendis";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "ipsam";
                                    payload = new Payload() {{
                                        contentExpression = "repellendus";
                                        type = "JSON";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "quo";
                                    payload = new Payload() {{
                                        contentExpression = "odit";
                                        type = "JSON";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "at";
                                        type = "JSON";
                                    }};
                                    targetArn = "molestiae";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "quod";
                                        type = "JSON";
                                    }};
                                    queueUrl = "esse";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "totam";
                                    hashKeyType = "porro";
                                    hashKeyValue = "dolorum";
                                    operation = "dicta";
                                    payload = new Payload() {{
                                        contentExpression = "nam";
                                        type = "JSON";
                                    }};
                                    payloadField = "occaecati";
                                    rangeKeyField = "fugit";
                                    rangeKeyType = "deleniti";
                                    rangeKeyValue = "hic";
                                    tableName = "optio";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "totam";
                                        type = "STRING";
                                    }};
                                    tableName = "commodi";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "molestiae";
                                    payload = new Payload() {{
                                        contentExpression = "modi";
                                        type = "STRING";
                                    }};
                                    separator = "impedit";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "cum";
                                    payload = new Payload() {{
                                        contentExpression = "esse";
                                        type = "STRING";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "excepturi";
                                    entryId = "aspernatur";
                                    propertyAlias = "perferendis";
                                    propertyId = "ad";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "natus";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "sed";
                                            timeInSeconds = "iste";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "dolor";
                                            doubleValue = "natus";
                                            integerValue = "laboriosam";
                                            stringValue = "hic";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "saepe";
                                    payload = new Payload() {{
                                        contentExpression = "fuga";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "corporis";
                                    payload = new Payload() {{
                                        contentExpression = "iste";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "saepe";
                                        type = "JSON";
                                    }};
                                    targetArn = "architecto";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "ipsa";
                                        type = "JSON";
                                    }};
                                    queueUrl = "est";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDBAction() {{
                                    hashKeyField = "mollitia";
                                    hashKeyType = "laborum";
                                    hashKeyValue = "dolores";
                                    operation = "dolorem";
                                    payload = new Payload() {{
                                        contentExpression = "corporis";
                                        type = "STRING";
                                    }};
                                    payloadField = "nobis";
                                    rangeKeyField = "enim";
                                    rangeKeyType = "omnis";
                                    rangeKeyValue = "nemo";
                                    tableName = "minima";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "excepturi";
                                        type = "STRING";
                                    }};
                                    tableName = "iure";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "culpa";
                                    payload = new Payload() {{
                                        contentExpression = "doloribus";
                                        type = "JSON";
                                    }};
                                    separator = "architecto";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "mollitia";
                                    payload = new Payload() {{
                                        contentExpression = "dolorem";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "consequuntur";
                                    entryId = "repellat";
                                    propertyAlias = "mollitia";
                                    propertyId = "occaecati";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "numquam";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "commodi";
                                            timeInSeconds = "quam";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "molestiae";
                                            doubleValue = "velit";
                                            integerValue = "error";
                                            stringValue = "quia";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "quis";
                                    payload = new Payload() {{
                                        contentExpression = "vitae";
                                        type = "JSON";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "animi";
                                    payload = new Payload() {{
                                        contentExpression = "enim";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SNSTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "quo";
                                        type = "STRING";
                                    }};
                                    targetArn = "tenetur";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "ipsam";
                                        type = "JSON";
                                    }};
                                    queueUrl = "possimus";
                                    useBase64 = false;
                                }};
                            }}),
                        }};
                    }};
                    alarmModelDescription = "aut";
                    alarmModelName = "quasi";
                    alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification() {{
                        notificationActions = new org.openapis.openapi.models.shared.NotificationAction[]{{
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "temporibus";
                                        payload = new Payload() {{
                                            contentExpression = "laborum";
                                            type = "STRING";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "voluptatibus";
                                            subject = "vero";
                                        }};
                                        from = "nihil";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "voluptatibus";
                                                        userId = "ipsa";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "omnis";
                                                        userId = "voluptate";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "cum";
                                                        userId = "perferendis";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "doloremque";
                                            subject = "reprehenderit";
                                        }};
                                        from = "ut";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "dicta";
                                                        userId = "corporis";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "dolore";
                                                        userId = "iusto";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "dicta";
                                                        userId = "harum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "enim";
                                                        userId = "accusamus";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "commodi";
                                            subject = "repudiandae";
                                        }};
                                        from = "quae";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "quidem";
                                                        userId = "molestias";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "excepturi";
                                            subject = "pariatur";
                                        }};
                                        from = "modi";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "rem";
                                                        userId = "voluptates";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "quasi";
                                                        userId = "repudiandae";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "sint";
                                                        userId = "veritatis";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "incidunt";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "consequatur";
                                                    userId = "est";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "quibusdam";
                                                    userId = "explicabo";
                                                }};
                                            }}),
                                        }};
                                        senderId = "deserunt";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "distinctio";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "labore";
                                                    userId = "modi";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "qui";
                                                    userId = "aliquid";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "cupiditate";
                                                    userId = "quos";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "perferendis";
                                                    userId = "magni";
                                                }};
                                            }}),
                                        }};
                                        senderId = "assumenda";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "ipsam";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "fugit";
                                                    userId = "dolorum";
                                                }};
                                            }}),
                                        }};
                                        senderId = "excepturi";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "tempora";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "tempore";
                                                    userId = "labore";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "delectus";
                                                    userId = "eum";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "non";
                                                    userId = "eligendi";
                                                }};
                                            }}),
                                        }};
                                        senderId = "sint";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "aliquid";
                                        payload = new Payload() {{
                                            contentExpression = "provident";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "officia";
                                            subject = "dolor";
                                        }};
                                        from = "debitis";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "dolorum";
                                                        userId = "in";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "in";
                                                        userId = "illum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "maiores";
                                                        userId = "rerum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "dicta";
                                                        userId = "magnam";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "cumque";
                                            subject = "facere";
                                        }};
                                        from = "ea";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "laborum";
                                                        userId = "accusamus";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "non";
                                                        userId = "occaecati";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "enim";
                                            subject = "accusamus";
                                        }};
                                        from = "delectus";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "provident";
                                                        userId = "nam";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "id";
                                                        userId = "blanditiis";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "deleniti";
                                                        userId = "sapiente";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "deserunt";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "vel";
                                                    userId = "natus";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "omnis";
                                                    userId = "molestiae";
                                                }};
                                            }}),
                                        }};
                                        senderId = "perferendis";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "nihil";
                                        payload = new Payload() {{
                                            contentExpression = "magnam";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "labore";
                                            subject = "labore";
                                        }};
                                        from = "suscipit";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "nobis";
                                                        userId = "eum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "vero";
                                                        userId = "aspernatur";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "architecto";
                                                        userId = "magnam";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "et";
                                            subject = "excepturi";
                                        }};
                                        from = "ullam";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "quos";
                                                        userId = "sint";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "accusantium";
                                                        userId = "mollitia";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "reiciendis";
                                                        userId = "mollitia";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "ad";
                                            subject = "eum";
                                        }};
                                        from = "dolor";
                                        recipients = new EmailRecipients() {{
                                            to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "odit";
                                                        userId = "nemo";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "quasi";
                                                        userId = "iure";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "doloribus";
                                                        userId = "debitis";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SSOIdentity() {{
                                                        identityStoreId = "eius";
                                                        userId = "maxime";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "facilis";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "architecto";
                                                    userId = "architecto";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "repudiandae";
                                                    userId = "ullam";
                                                }};
                                            }}),
                                        }};
                                        senderId = "expedita";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "nihil";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "quibusdam";
                                                    userId = "sed";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "saepe";
                                                    userId = "pariatur";
                                                }};
                                            }}),
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
                                        }};
                                        senderId = "magni";
                                    }}),
                                    add(new SMSConfiguration() {{
                                        additionalMessage = "sunt";
                                        recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "illum";
                                                    userId = "pariatur";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "maxime";
                                                    userId = "ea";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "excepturi";
                                                    userId = "odit";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SSOIdentity() {{
                                                    identityStoreId = "ea";
                                                    userId = "accusantium";
                                                }};
                                            }}),
                                        }};
                                        senderId = "ab";
                                    }}),
                                }};
                            }}),
                        }};
                    }};
                    alarmRule = new CreateAlarmModelRequestBodyAlarmRule() {{
                        simpleRule = new SimpleRule() {{
                            comparisonOperator = "NOT_EQUAL";
                            inputProperty = "quidem";
                            threshold = "ipsam";
                        }};
                    }};
                    key = "voluptate";
                    roleArn = "autem";
                    severity = 722056;
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "pariatur";
                            value = "nemo";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }}            

            CreateAlarmModelResponse res = sdk.createAlarmModel(req);

            if (res.createAlarmModelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createAlarmModel` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `createDetectorModel` - Creates a detector model.
* `createInput` - Creates an input.
* `deleteAlarmModel` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `deleteDetectorModel` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `deleteInput` - Deletes an input.
* `describeAlarmModel` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `describeDetectorModel` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `describeDetectorModelAnalysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `describeInput` - Describes an input.
* `describeLoggingOptions` - Retrieves the current settings of the AWS IoT Events logging options.
* `getDetectorModelAnalysisResults` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `listAlarmModelVersions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `listAlarmModels` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `listDetectorModelVersions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `listDetectorModels` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `listInputRoutings` -  Lists one or more input routings. 
* `listInputs` - Lists the inputs you have created.
* `listTagsForResource` - Lists the tags (metadata) you have assigned to the resource.
* `putLoggingOptions` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `startDetectorModelAnalysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `tagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untagResource` - Removes the given tags (metadata) from the resource.
* `updateAlarmModel` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `updateDetectorModel` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `updateInput` - Updates an input.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
