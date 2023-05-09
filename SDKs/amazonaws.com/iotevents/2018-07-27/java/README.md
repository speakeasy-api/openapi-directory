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
import org.openapis.openapi.models.operations.CreateAlarmModelRequest;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBody;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmCapabilities;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmEventActions;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmNotification;
import org.openapis.openapi.models.operations.CreateAlarmModelRequestBodyAlarmRule;
import org.openapis.openapi.models.operations.CreateAlarmModelResponse;
import org.openapis.openapi.models.shared.AcknowledgeFlow;
import org.openapis.openapi.models.shared.AlarmAction;
import org.openapis.openapi.models.shared.AssetPropertyTimestamp;
import org.openapis.openapi.models.shared.AssetPropertyValue;
import org.openapis.openapi.models.shared.AssetPropertyVariant;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.DynamoDBAction;
import org.openapis.openapi.models.shared.DynamoDBv2Action;
import org.openapis.openapi.models.shared.EmailConfiguration;
import org.openapis.openapi.models.shared.EmailContent;
import org.openapis.openapi.models.shared.EmailRecipients;
import org.openapis.openapi.models.shared.FirehoseAction;
import org.openapis.openapi.models.shared.InitializationConfiguration;
import org.openapis.openapi.models.shared.IotEventsAction;
import org.openapis.openapi.models.shared.IotSiteWiseAction;
import org.openapis.openapi.models.shared.IotTopicPublishAction;
import org.openapis.openapi.models.shared.LambdaAction;
import org.openapis.openapi.models.shared.NotificationAction;
import org.openapis.openapi.models.shared.NotificationTargetActions;
import org.openapis.openapi.models.shared.Payload;
import org.openapis.openapi.models.shared.PayloadTypeEnum;
import org.openapis.openapi.models.shared.RecipientDetail;
import org.openapis.openapi.models.shared.SMSConfiguration;
import org.openapis.openapi.models.shared.SNSTopicPublishAction;
import org.openapis.openapi.models.shared.SSOIdentity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleRule;
import org.openapis.openapi.models.shared.SqsAction;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlarmModelRequest req = new CreateAlarmModelRequest(                new CreateAlarmModelRequestBody("provident",                 new CreateAlarmModelRequestBodyAlarmRule() {{
                                                simpleRule = new SimpleRule(ComparisonOperatorEnum.EQUAL, "quibusdam", "unde");;
                                            }};, "nulla") {{
                                alarmCapabilities = new CreateAlarmModelRequestBodyAlarmCapabilities() {{
                                    acknowledgeFlow = new AcknowledgeFlow(false);;
                                    initializationConfiguration = new InitializationConfiguration(false);;
                                }};;
                                alarmEventActions = new CreateAlarmModelRequestBodyAlarmEventActions() {{
                                    alarmActions = new org.openapis.openapi.models.shared.AlarmAction[]{{
                                        add(new AlarmAction() {{
                                            dynamoDB = new DynamoDBAction("minus", "placeat", "voluptatum") {{
                                                hashKeyField = "illum";
                                                hashKeyType = "vel";
                                                hashKeyValue = "error";
                                                operation = "deserunt";
                                                payload = new Payload("magnam", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "suscipit";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                payloadField = "ipsa";
                                                rangeKeyField = "delectus";
                                                rangeKeyType = "tempora";
                                                rangeKeyValue = "suscipit";
                                                tableName = "molestiae";
                                            }};
                                            dynamoDBv2 = new DynamoDBv2Action("ab") {{
                                                payload = new Payload("nisi", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "iusto";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                tableName = "temporibus";
                                            }};
                                            firehose = new FirehoseAction("sapiente") {{
                                                deliveryStreamName = "quis";
                                                payload = new Payload("perferendis", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "veritatis";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                separator = "repellendus";
                                            }};
                                            iotEvents = new IotEventsAction("molestiae") {{
                                                inputName = "quo";
                                                payload = new Payload("at", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "odit";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            iotSiteWise = new IotSiteWiseAction() {{
                                                assetId = "quod";
                                                entryId = "quod";
                                                propertyAlias = "esse";
                                                propertyId = "totam";
                                                propertyValue = new AssetPropertyValue() {{
                                                    quality = "porro";
                                                    timestamp = new AssetPropertyTimestamp("nam") {{
                                                        offsetInNanos = "dolorum";
                                                        timeInSeconds = "dicta";
                                                    }};
                                                    value = new AssetPropertyVariant() {{
                                                        booleanValue = "officia";
                                                        doubleValue = "occaecati";
                                                        integerValue = "fugit";
                                                        stringValue = "deleniti";
                                                    }};
                                                }};
                                            }};
                                            iotTopicPublish = new IotTopicPublishAction("molestiae") {{
                                                mqttTopic = "hic";
                                                payload = new Payload("beatae", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "optio";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            lambda = new LambdaAction("ipsum") {{
                                                functionArn = "modi";
                                                payload = new Payload("cum", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "qui";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            sns = new SNSTopicPublishAction("sed") {{
                                                payload = new Payload("perferendis", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "excepturi";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                targetArn = "natus";
                                            }};
                                            sqs = new SqsAction("saepe") {{
                                                payload = new Payload("natus", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "iste";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                queueUrl = "hic";
                                                useBase64 = false;
                                            }};
                                        }}),
                                        add(new AlarmAction() {{
                                            dynamoDB = new DynamoDBAction("dolores", "dolorem", "corporis") {{
                                                hashKeyField = "fuga";
                                                hashKeyType = "in";
                                                hashKeyValue = "corporis";
                                                operation = "iste";
                                                payload = new Payload("quidem", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "iure";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                payloadField = "ipsa";
                                                rangeKeyField = "reiciendis";
                                                rangeKeyType = "est";
                                                rangeKeyValue = "mollitia";
                                                tableName = "laborum";
                                            }};
                                            dynamoDBv2 = new DynamoDBv2Action("minima") {{
                                                payload = new Payload("enim", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "explicabo";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                tableName = "nemo";
                                            }};
                                            firehose = new FirehoseAction("architecto") {{
                                                deliveryStreamName = "excepturi";
                                                payload = new Payload("culpa", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "accusantium";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                separator = "sapiente";
                                            }};
                                            iotEvents = new IotEventsAction("mollitia") {{
                                                inputName = "mollitia";
                                                payload = new Payload("consequuntur", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "dolorem";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            iotSiteWise = new IotSiteWiseAction() {{
                                                assetId = "occaecati";
                                                entryId = "numquam";
                                                propertyAlias = "commodi";
                                                propertyId = "quam";
                                                propertyValue = new AssetPropertyValue() {{
                                                    quality = "molestiae";
                                                    timestamp = new AssetPropertyTimestamp("quia") {{
                                                        offsetInNanos = "velit";
                                                        timeInSeconds = "error";
                                                    }};
                                                    value = new AssetPropertyVariant() {{
                                                        booleanValue = "quis";
                                                        doubleValue = "vitae";
                                                        integerValue = "laborum";
                                                        stringValue = "animi";
                                                    }};
                                                }};
                                            }};
                                            iotTopicPublish = new IotTopicPublishAction("ipsam") {{
                                                mqttTopic = "enim";
                                                payload = new Payload("sequi", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "odit";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            lambda = new LambdaAction("temporibus") {{
                                                functionArn = "id";
                                                payload = new Payload("quasi", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "possimus";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                            }};
                                            sns = new SNSTopicPublishAction("nihil") {{
                                                payload = new Payload("reiciendis", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "laborum";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                targetArn = "vero";
                                            }};
                                            sqs = new SqsAction("cum") {{
                                                payload = new Payload("ipsa", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "praesentium";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                queueUrl = "voluptate";
                                                useBase64 = false;
                                            }};
                                        }}),
                                        add(new AlarmAction() {{
                                            dynamoDB = new DynamoDBAction("commodi", "repudiandae", "quae") {{
                                                hashKeyField = "perferendis";
                                                hashKeyType = "doloremque";
                                                hashKeyValue = "reprehenderit";
                                                operation = "ut";
                                                payload = new Payload("corporis", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "maiores";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                                payloadField = "iusto";
                                                rangeKeyField = "dicta";
                                                rangeKeyType = "harum";
                                                rangeKeyValue = "enim";
                                                tableName = "accusamus";
                                            }};
                                            dynamoDBv2 = new DynamoDBv2Action("modi") {{
                                                payload = new Payload("molestias", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "ipsum";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                tableName = "pariatur";
                                            }};
                                            firehose = new FirehoseAction("veritatis") {{
                                                deliveryStreamName = "praesentium";
                                                payload = new Payload("quasi", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "rem";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                separator = "sint";
                                            }};
                                            iotEvents = new IotEventsAction("quibusdam") {{
                                                inputName = "itaque";
                                                payload = new Payload("consequatur", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "incidunt";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                            }};
                                            iotSiteWise = new IotSiteWiseAction() {{
                                                assetId = "explicabo";
                                                entryId = "deserunt";
                                                propertyAlias = "distinctio";
                                                propertyId = "quibusdam";
                                                propertyValue = new AssetPropertyValue() {{
                                                    quality = "labore";
                                                    timestamp = new AssetPropertyTimestamp("aliquid") {{
                                                        offsetInNanos = "modi";
                                                        timeInSeconds = "qui";
                                                    }};
                                                    value = new AssetPropertyVariant() {{
                                                        booleanValue = "cupiditate";
                                                        doubleValue = "quos";
                                                        integerValue = "perferendis";
                                                        stringValue = "magni";
                                                    }};
                                                }};
                                            }};
                                            iotTopicPublish = new IotTopicPublishAction("excepturi") {{
                                                mqttTopic = "assumenda";
                                                payload = new Payload("fugit", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "ipsam";
                                                    type = PayloadTypeEnum.STRING;
                                                }};
                                            }};
                                            lambda = new LambdaAction("eum") {{
                                                functionArn = "tempora";
                                                payload = new Payload("labore", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "facilis";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                            }};
                                            sns = new SNSTopicPublishAction("necessitatibus") {{
                                                payload = new Payload("sint", PayloadTypeEnum.STRING) {{
                                                    contentExpression = "non";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                targetArn = "provident";
                                            }};
                                            sqs = new SqsAction("dolorum") {{
                                                payload = new Payload("dolor", PayloadTypeEnum.JSON) {{
                                                    contentExpression = "sint";
                                                    type = PayloadTypeEnum.JSON;
                                                }};
                                                queueUrl = "a";
                                                useBase64 = false;
                                            }};
                                        }}),
                                    }};
                                }};;
                                alarmModelDescription = "in";
                                alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification() {{
                                    notificationActions = new org.openapis.openapi.models.shared.NotificationAction[]{{
                                        add(new NotificationAction(                new NotificationTargetActions() {{
                                                            lambdaAction = new LambdaAction("nobis") {{
                                                                payload = new Payload("libero", PayloadTypeEnum.JSON);;
                                                            }};;
                                                        }};) {{
                                            action = new NotificationTargetActions() {{
                                                lambdaAction = new LambdaAction("cumque") {{
                                                    functionArn = "illum";
                                                    payload = new Payload("dicta", PayloadTypeEnum.STRING) {{
                                                        contentExpression = "maiores";
                                                        type = PayloadTypeEnum.JSON;
                                                    }};
                                                }};
                                            }};
                                            emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                                add(new EmailConfiguration("amet",                 new EmailRecipients() {{
                                                                    to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("natus") {{
                                                                                identityStoreId = "nisi";
                                                                                userId = "vel";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("perferendis") {{
                                                                                identityStoreId = "omnis";
                                                                                userId = "molestiae";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("distinctio") {{
                                                                                identityStoreId = "nihil";
                                                                                userId = "magnam";
                                                                            }};
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    content = new EmailContent() {{
                                                        additionalMessage = "ea";
                                                        subject = "aliquid";
                                                    }};
                                                    from = "laborum";
                                                    recipients = new EmailRecipients() {{
                                                        to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("enim") {{
                                                                    identityStoreId = "non";
                                                                    userId = "occaecati";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("quidem") {{
                                                                    identityStoreId = "accusamus";
                                                                    userId = "delectus";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("id") {{
                                                                    identityStoreId = "provident";
                                                                    userId = "nam";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("sapiente") {{
                                                                    identityStoreId = "blanditiis";
                                                                    userId = "deleniti";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EmailConfiguration("magnam",                 new EmailRecipients() {{
                                                                    to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("provident") {{
                                                                                identityStoreId = "excepturi";
                                                                                userId = "ullam";
                                                                            }};
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    content = new EmailContent() {{
                                                        additionalMessage = "id";
                                                        subject = "labore";
                                                    }};
                                                    from = "labore";
                                                    recipients = new EmailRecipients() {{
                                                        to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("eum") {{
                                                                    identityStoreId = "natus";
                                                                    userId = "nobis";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("architecto") {{
                                                                    identityStoreId = "vero";
                                                                    userId = "aspernatur";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EmailConfiguration("iure",                 new EmailRecipients() {{
                                                                    to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("maxime") {{
                                                                                identityStoreId = "debitis";
                                                                                userId = "eius";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("in") {{
                                                                                identityStoreId = "deleniti";
                                                                                userId = "facilis";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("repudiandae") {{
                                                                                identityStoreId = "architecto";
                                                                                userId = "architecto";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("nihil") {{
                                                                                identityStoreId = "ullam";
                                                                                userId = "expedita";
                                                                            }};
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    content = new EmailContent() {{
                                                        additionalMessage = "quos";
                                                        subject = "sint";
                                                    }};
                                                    from = "accusantium";
                                                    recipients = new EmailRecipients() {{
                                                        to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("ad") {{
                                                                    identityStoreId = "reiciendis";
                                                                    userId = "mollitia";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("necessitatibus") {{
                                                                    identityStoreId = "eum";
                                                                    userId = "dolor";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("quasi") {{
                                                                    identityStoreId = "odit";
                                                                    userId = "nemo";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EmailConfiguration("excepturi",                 new EmailRecipients() {{
                                                                    to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("ab") {{
                                                                                identityStoreId = "ea";
                                                                                userId = "accusantium";
                                                                            }};
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    content = new EmailContent() {{
                                                        additionalMessage = "repellat";
                                                        subject = "quibusdam";
                                                    }};
                                                    from = "sed";
                                                    recipients = new EmailRecipients() {{
                                                        to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("consequuntur") {{
                                                                    identityStoreId = "pariatur";
                                                                    userId = "accusantium";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("magni") {{
                                                                    identityStoreId = "praesentium";
                                                                    userId = "natus";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("illum") {{
                                                                    identityStoreId = "sunt";
                                                                    userId = "quo";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("ea") {{
                                                                    identityStoreId = "pariatur";
                                                                    userId = "maxime";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                                add(new SMSConfiguration(                new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("aut") {{
                                                                            identityStoreId = "fugiat";
                                                                            userId = "amet";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    additionalMessage = "quidem";
                                                    recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("nam") {{
                                                                identityStoreId = "voluptate";
                                                                userId = "autem";
                                                            }};
                                                        }}),
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("nemo") {{
                                                                identityStoreId = "eaque";
                                                                userId = "pariatur";
                                                            }};
                                                        }}),
                                                    }};
                                                    senderId = "voluptatibus";
                                                }}),
                                                add(new SMSConfiguration(                new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("eos") {{
                                                                            identityStoreId = "quis";
                                                                            userId = "nesciunt";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    additionalMessage = "cumque";
                                                    recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("nobis") {{
                                                                identityStoreId = "hic";
                                                                userId = "libero";
                                                            }};
                                                        }}),
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("totam") {{
                                                                identityStoreId = "dolores";
                                                                userId = "quis";
                                                            }};
                                                        }}),
                                                    }};
                                                    senderId = "dignissimos";
                                                }}),
                                                add(new SMSConfiguration(                new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("omnis") {{
                                                                            identityStoreId = "hic";
                                                                            userId = "recusandae";
                                                                        }};
                                                                    }}),
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("voluptatem") {{
                                                                            identityStoreId = "facilis";
                                                                            userId = "perspiciatis";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    additionalMessage = "perferendis";
                                                    recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("dolor") {{
                                                                identityStoreId = "minus";
                                                                userId = "quam";
                                                            }};
                                                        }}),
                                                    }};
                                                    senderId = "vero";
                                                }}),
                                                add(new SMSConfiguration(                new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("earum") {{
                                                                            identityStoreId = "adipisci";
                                                                            userId = "asperiores";
                                                                        }};
                                                                    }}),
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("dolorum") {{
                                                                            identityStoreId = "modi";
                                                                            userId = "iste";
                                                                        }};
                                                                    }}),
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("provident") {{
                                                                            identityStoreId = "deleniti";
                                                                            userId = "pariatur";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    additionalMessage = "porro";
                                                    recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("eaque") {{
                                                                identityStoreId = "blanditiis";
                                                                userId = "error";
                                                            }};
                                                        }}),
                                                    }};
                                                    senderId = "occaecati";
                                                }}),
                                            }};
                                        }}),
                                        add(new NotificationAction(                new NotificationTargetActions() {{
                                                            lambdaAction = new LambdaAction("asperiores") {{
                                                                payload = new Payload("nihil", PayloadTypeEnum.STRING);;
                                                            }};;
                                                        }};) {{
                                            action = new NotificationTargetActions() {{
                                                lambdaAction = new LambdaAction("dolor") {{
                                                    functionArn = "quaerat";
                                                    payload = new Payload("dolorem", PayloadTypeEnum.STRING) {{
                                                        contentExpression = "quos";
                                                        type = PayloadTypeEnum.STRING;
                                                    }};
                                                }};
                                            }};
                                            emailConfigurations = new org.openapis.openapi.models.shared.EmailConfiguration[]{{
                                                add(new EmailConfiguration("iure",                 new EmailRecipients() {{
                                                                    to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("quidem") {{
                                                                                identityStoreId = "quaerat";
                                                                                userId = "accusamus";
                                                                            }};
                                                                        }}),
                                                                        add(new RecipientDetail() {{
                                                                            ssoIdentity = new SSOIdentity("natus") {{
                                                                                identityStoreId = "voluptatibus";
                                                                                userId = "voluptas";
                                                                            }};
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    content = new EmailContent() {{
                                                        additionalMessage = "ipsum";
                                                        subject = "hic";
                                                    }};
                                                    from = "excepturi";
                                                    recipients = new EmailRecipients() {{
                                                        to = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("reiciendis") {{
                                                                    identityStoreId = "voluptate";
                                                                    userId = "dignissimos";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("numquam") {{
                                                                    identityStoreId = "amet";
                                                                    userId = "dolorum";
                                                                }};
                                                            }}),
                                                            add(new RecipientDetail() {{
                                                                ssoIdentity = new SSOIdentity("ipsa") {{
                                                                    identityStoreId = "veritatis";
                                                                    userId = "ipsa";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            smsConfigurations = new org.openapis.openapi.models.shared.SMSConfiguration[]{{
                                                add(new SMSConfiguration(                new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("deleniti") {{
                                                                            identityStoreId = "voluptate";
                                                                            userId = "dolorum";
                                                                        }};
                                                                    }}),
                                                                    add(new RecipientDetail() {{
                                                                        ssoIdentity = new SSOIdentity("distinctio") {{
                                                                            identityStoreId = "omnis";
                                                                            userId = "necessitatibus";
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    additionalMessage = "atque";
                                                    recipients = new org.openapis.openapi.models.shared.RecipientDetail[]{{
                                                        add(new RecipientDetail() {{
                                                            ssoIdentity = new SSOIdentity("soluta") {{
                                                                identityStoreId = "fugiat";
                                                                userId = "ab";
                                                            }};
                                                        }}),
                                                    }};
                                                    senderId = "dolorum";
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};;
                                key = "voluptate";
                                severity = 663078L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "amet") {{
                                        key = "eius";
                                        value = "aspernatur";
                                    }}),
                                    add(new Tag("ad", "saepe") {{
                                        key = "optio";
                                        value = "accusamus";
                                    }}),
                                    add(new Tag("provident", "minima") {{
                                        key = "suscipit";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("similique", "alias") {{
                                        key = "repellendus";
                                        value = "totam";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            CreateAlarmModelResponse res = sdk.createAlarmModel(req);

            if (res.createAlarmModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAlarmModel](docs/sdk/README.md#createalarmmodel) - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [createDetectorModel](docs/sdk/README.md#createdetectormodel) - Creates a detector model.
* [createInput](docs/sdk/README.md#createinput) - Creates an input.
* [deleteAlarmModel](docs/sdk/README.md#deletealarmmodel) - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* [deleteDetectorModel](docs/sdk/README.md#deletedetectormodel) - Deletes a detector model. Any active instances of the detector model are also deleted.
* [deleteInput](docs/sdk/README.md#deleteinput) - Deletes an input.
* [describeAlarmModel](docs/sdk/README.md#describealarmmodel) - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* [describeDetectorModel](docs/sdk/README.md#describedetectormodel) - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* [describeDetectorModelAnalysis](docs/sdk/README.md#describedetectormodelanalysis) - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [describeInput](docs/sdk/README.md#describeinput) - Describes an input.
* [describeLoggingOptions](docs/sdk/README.md#describeloggingoptions) - Retrieves the current settings of the AWS IoT Events logging options.
* [getDetectorModelAnalysisResults](docs/sdk/README.md#getdetectormodelanalysisresults) - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [listAlarmModelVersions](docs/sdk/README.md#listalarmmodelversions) - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* [listAlarmModels](docs/sdk/README.md#listalarmmodels) - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* [listDetectorModelVersions](docs/sdk/README.md#listdetectormodelversions) - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* [listDetectorModels](docs/sdk/README.md#listdetectormodels) - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* [listInputRoutings](docs/sdk/README.md#listinputroutings) -  Lists one or more input routings. 
* [listInputs](docs/sdk/README.md#listinputs) - Lists the inputs you have created.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata) you have assigned to the resource.
* [putLoggingOptions](docs/sdk/README.md#putloggingoptions) - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* [startDetectorModelAnalysis](docs/sdk/README.md#startdetectormodelanalysis) - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [tagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the given tags (metadata) from the resource.
* [updateAlarmModel](docs/sdk/README.md#updatealarmmodel) - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* [updateDetectorModel](docs/sdk/README.md#updatedetectormodel) - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* [updateInput](docs/sdk/README.md#updateinput) - Updates an input.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
