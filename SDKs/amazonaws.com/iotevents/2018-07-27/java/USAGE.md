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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
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
                                    hashKeyField = "nihil";
                                    hashKeyType = "rerum";
                                    hashKeyValue = "dicta";
                                    operation = "debitis";
                                    payload = new Payload() {{
                                        contentExpression = "voluptatum";
                                        type = "STRING";
                                    }};
                                    payloadField = "ut";
                                    rangeKeyField = "dolorem";
                                    rangeKeyType = "et";
                                    rangeKeyValue = "voluptate";
                                    tableName = "iste";
                                }};
                                dynamoDBv2 = new DynamoDBv2Action() {{
                                    payload = new Payload() {{
                                        contentExpression = "vitae";
                                        type = "STRING";
                                    }};
                                    tableName = "dolores";
                                }};
                                firehose = new FirehoseAction() {{
                                    deliveryStreamName = "illum";
                                    payload = new Payload() {{
                                        contentExpression = "debitis";
                                        type = "STRING";
                                    }};
                                    separator = "odio";
                                }};
                                iotEvents = new IotEventsAction() {{
                                    inputName = "dolore";
                                    payload = new Payload() {{
                                        contentExpression = "id";
                                        type = "JSON";
                                    }};
                                }};
                                iotSiteWise = new IotSiteWiseAction() {{
                                    assetId = "accusantium";
                                    entryId = "totam";
                                    propertyAlias = "commodi";
                                    propertyId = "quis";
                                    propertyValue = new AssetPropertyValue() {{
                                        quality = "est";
                                        timestamp = new AssetPropertyTimestamp() {{
                                            offsetInNanos = "aut";
                                            timeInSeconds = "odit";
                                        }};
                                        value = new AssetPropertyVariant() {{
                                            booleanValue = "non";
                                            doubleValue = "voluptas";
                                            integerValue = "omnis";
                                            stringValue = "aut";
                                        }};
                                    }};
                                }};
                                iotTopicPublish = new IotTopicPublishAction() {{
                                    mqttTopic = "illo";
                                    payload = new Payload() {{
                                        contentExpression = "sed";
                                        type = "JSON";
                                    }};
                                }};
                                lambda = new LambdaAction() {{
                                    functionArn = "autem";
                                    payload = new Payload() {{
                                        contentExpression = "consectetur";
                                        type = "STRING";
                                    }};
                                }};
                                sns = new SnsTopicPublishAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "odio";
                                        type = "JSON";
                                    }};
                                    targetArn = "recusandae";
                                }};
                                sqs = new SqsAction() {{
                                    payload = new Payload() {{
                                        contentExpression = "at";
                                        type = "STRING";
                                    }};
                                    queueUrl = "eveniet";
                                    useBase64 = false;
                                }};
                            }}),
                        }};
                    }};
                    alarmModelDescription = "sint";
                    alarmModelName = "inventore";
                    alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification() {{
                        notificationActions = new openapisdk.models.shared.NotificationAction[]() {{
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "exercitationem";
                                        payload = new Payload() {{
                                            contentExpression = "aut";
                                            type = "STRING";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new openapisdk.models.shared.EmailConfiguration[]() {{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "maiores";
                                            subject = "incidunt";
                                        }};
                                        from = "dolor";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "veritatis";
                                                        userId = "in";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "et";
                                                        userId = "omnis";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "ipsum";
                                                        userId = "ex";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "dolores";
                                            subject = "placeat";
                                        }};
                                        from = "vel";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "mollitia";
                                                        userId = "voluptas";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "quam";
                                                        userId = "reprehenderit";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "qui";
                                                        userId = "qui";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "unde";
                                            subject = "in";
                                        }};
                                        from = "autem";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "ut";
                                                        userId = "itaque";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new openapisdk.models.shared.SmsConfiguration[]() {{
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "neque";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "et";
                                                    userId = "accusantium";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "esse";
                                                    userId = "architecto";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "quam";
                                                    userId = "velit";
                                                }};
                                            }}),
                                        }};
                                        senderId = "cumque";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "soluta";
                                        payload = new Payload() {{
                                            contentExpression = "sunt";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new openapisdk.models.shared.EmailConfiguration[]() {{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "et";
                                            subject = "optio";
                                        }};
                                        from = "qui";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "illo";
                                                        userId = "omnis";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "ut";
                                            subject = "consequatur";
                                        }};
                                        from = "dolor";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "error";
                                                        userId = "reprehenderit";
                                                    }};
                                                }}),
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "consectetur";
                                                        userId = "nostrum";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "ut";
                                            subject = "laboriosam";
                                        }};
                                        from = "sed";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "soluta";
                                                        userId = "aut";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new openapisdk.models.shared.SmsConfiguration[]() {{
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "consequuntur";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "autem";
                                                    userId = "ipsa";
                                                }};
                                            }}),
                                        }};
                                        senderId = "expedita";
                                    }}),
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "doloremque";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "atque";
                                                    userId = "ratione";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "quisquam";
                                                    userId = "explicabo";
                                                }};
                                            }}),
                                        }};
                                        senderId = "ea";
                                    }}),
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "maxime";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "perferendis";
                                                    userId = "et";
                                                }};
                                            }}),
                                        }};
                                        senderId = "rerum";
                                    }}),
                                }};
                            }}),
                            add(new NotificationAction() {{
                                action = new NotificationTargetActions() {{
                                    lambdaAction = new LambdaAction() {{
                                        functionArn = "reiciendis";
                                        payload = new Payload() {{
                                            contentExpression = "quis";
                                            type = "JSON";
                                        }};
                                    }};
                                }};
                                emailConfigurations = new openapisdk.models.shared.EmailConfiguration[]() {{
                                    add(new EmailConfiguration() {{
                                        content = new EmailContent() {{
                                            additionalMessage = "necessitatibus";
                                            subject = "est";
                                        }};
                                        from = "quis";
                                        recipients = new EmailRecipients() {{
                                            to = new openapisdk.models.shared.RecipientDetail[]() {{
                                                add(new RecipientDetail() {{
                                                    ssoIdentity = new SsoIdentity() {{
                                                        identityStoreId = "labore";
                                                        userId = "et";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }}),
                                }};
                                smsConfigurations = new openapisdk.models.shared.SmsConfiguration[]() {{
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "ad";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "vel";
                                                    userId = "qui";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "modi";
                                                    userId = "nihil";
                                                }};
                                            }}),
                                        }};
                                        senderId = "tempora";
                                    }}),
                                    add(new SmsConfiguration() {{
                                        additionalMessage = "deserunt";
                                        recipients = new openapisdk.models.shared.RecipientDetail[]() {{
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "sunt";
                                                    userId = "sit";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "autem";
                                                    userId = "quis";
                                                }};
                                            }}),
                                            add(new RecipientDetail() {{
                                                ssoIdentity = new SsoIdentity() {{
                                                    identityStoreId = "vel";
                                                    userId = "vel";
                                                }};
                                            }}),
                                        }};
                                        senderId = "placeat";
                                    }}),
                                }};
                            }}),
                        }};
                    }};
                    alarmRule = new CreateAlarmModelRequestBodyAlarmRule() {{
                        simpleRule = new SimpleRule() {{
                            comparisonOperator = "LESS_OR_EQUAL";
                            inputProperty = "nisi";
                            threshold = "quis";
                        }};
                    }};
                    key = "adipisci";
                    roleArn = "porro";
                    severity = 4230816687517220040;
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "accusamus";
                            value = "numquam";
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