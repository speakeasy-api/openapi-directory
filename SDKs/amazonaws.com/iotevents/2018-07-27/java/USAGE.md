<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAlarmModelRequest req = new CreateAlarmModelRequest() {{
                headers = new CreateAlarmModelHeaders() {{
                    xAmzAlgorithm = "iusto";
                    xAmzContentSha256 = "voluptatum";
                    xAmzCredential = "illo";
                    xAmzDate = "exercitationem";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "nemo";
                    xAmzSignedHeaders = "voluptate";
                }};
                request = new CreateAlarmModelRequestBody() {{
                    alarmCapabilities = new CreateAlarmModelRequestBodyAlarmCapabilities() {{
                        acknowledgeFlow = new AcknowledgeFlow() {{
                            enabled = true;
                        }};
                        initializationConfiguration = new InitializationConfiguration() {{
                            disabledOnInitialization = true;
                        }};
                    }};
                    alarmEventActions = new CreateAlarmModelRequestBodyAlarmEventActions() {{
                        alarmActions = new openapisdk.models.shared.AlarmAction[]() {{
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDbAction() {{
                                    hashKeyField = "ut";
                                    hashKeyType = "fugit";
                                    hashKeyValue = "sit";
                                    operation = "quidem";
                                    payload = new Payload() {{
                                        contentExpression = "et";
                                        type = "STRING";
                                    }};
                                    payloadField = "cum";
                                    rangeKeyField = "dicta";
                                    rangeKeyType = "cupiditate";
                                    rangeKeyValue = "impedit";
                                    tableName = "voluptas";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "reprehenderit";
                                        type = "JSON";
                                    }};
                                    tableName = "aut";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "necessitatibus";
                                    payload = new Payload() {{
                                        contentExpression = "corrupti";
                                        type = "JSON";
                                    }};
                                    separator = "tempore";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "saepe";
                                    payload = new Payload() {{
                                        contentExpression = "aut";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "odit";
                                    entryId = "et";
                                    propertyAlias = "debitis";
                                    propertyId = "voluptates";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "mollitia";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "odio";
                                            timeInSeconds = "molestiae";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "error";
                                            doubleValue = "dolores";
                                            integerValue = "non";
                                            stringValue = "aspernatur";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "rem";
                                    payload = new Payload() {{
                                        contentExpression = "vel";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "at";
                                    payload = new Payload() {{
                                        contentExpression = "tempora";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SnsTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "voluptas";
                                        type = "STRING";
                                    }};
                                    targetArn = "maiores";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "aliquid";
                                        type = "STRING";
                                    }};
                                    queueUrl = "mollitia";
                                    useBase64 = false;
                                }};
                            }}),
                            add(new AlarmAction() {{
                                dynamoDB = new DynamoDbAction() {{
                                    hashKeyField = "libero";
                                    hashKeyType = "in";
                                    hashKeyValue = "ut";
                                    operation = "velit";
                                    payload = new Payload() {{
                                        contentExpression = "architecto";
                                        type = "STRING";
                                    }};
                                    payloadField = "tempora";
                                    rangeKeyField = "velit";
                                    rangeKeyType = "aut";
                                    rangeKeyValue = "aut";
                                    tableName = "nobis";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "iste";
                                        type = "STRING";
                                    }};
                                    tableName = "expedita";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "impedit";
                                    payload = new Payload() {{
                                        contentExpression = "rerum";
                                        type = "STRING";
                                    }};
                                    separator = "in";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "assumenda";
                                    payload = new Payload() {{
                                        contentExpression = "modi";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "vel";
                                    entryId = "aut";
                                    propertyAlias = "beatae";
                                    propertyId = "consectetur";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "et";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "rem";
                                            timeInSeconds = "provident";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "inventore";
                                            doubleValue = "quas";
                                            integerValue = "dolorum";
                                            stringValue = "dolores";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "aut";
                                    payload = new Payload() {{
                                        contentExpression = "sit";
                                        type = "STRING";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "doloribus";
                                    payload = new Payload() {{
                                        contentExpression = "saepe";
                                        type = "JSON";
                                    }};
                                }};
                                sns = new SnsTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "praesentium";
                                        type = "JSON";
                                    }};
                                    targetArn = "accusantium";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "reiciendis";
                                        type = "JSON";
                                    }};
                                    queueUrl = "id";
                                    useBase64 = false;
                                }};
                            }}),
                        }};
                    }};
                    alarmModelDescription = "temporibus";
                    alarmModelName = "aut";
                    alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification() {{
                        notificationActions = new openapisdk.models.shared.NotificationAction[]() {{
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "ea";
                                        payload = new Payload() {{
                                            contentExpression = "quis";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new openapisdk.models.shared.EmailConfiguration[]() {{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "rem";
                                            subject = "non";
                                        }};
                                        from = "aperiam";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "omnis";
                                                        userId = "rerum";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "et";
                                                        userId = "quia";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "quasi";
                                                        userId = "eum";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "dolor";
                                            subject = "ut";
                                        }};
                                        from = "sit";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "rem";
                                                        userId = "iusto";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "sed";
                                                        userId = "numquam";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "corrupti";
                                            subject = "eveniet";
                                        }};
                                        from = "nobis";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "molestiae";
                                                        userId = "veniam";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new openapisdk.models.shared.SmsConfiguration[]() {{
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "voluptatum";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "perspiciatis";
                                                    userId = "aut";
                                                }};
                                            }}),
                                        }};
                                        senderId = "fugiat";
                                    }}),
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "est";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "voluptatibus";
                                                    userId = "sapiente";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "quasi";
                                                    userId = "minima";
                                                }};
                                            }}),
                                        }};
                                        senderId = "odit";
                                    }}),
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "modi";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "pariatur";
                                                    userId = "velit";
                                                }};
                                            }}),
                                        }};
                                        senderId = "possimus";
                                    }}),
                                }};
                            }}),
                        }};
                    }};
                    alarmRule = new CreateAlarmModelRequestBodyAlarmRule() {{
                        simpleRule = new SimpleRule() {{
                            comparisonOperator = "EQUAL";
                            inputProperty = "ut";
                            threshold = "corrupti";
                        }};
                    }};
                    key = "officia";
                    roleArn = "optio";
                    severity = 8289392119546275015;
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "quas";
                            value = "reiciendis";
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