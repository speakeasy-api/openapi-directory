# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
