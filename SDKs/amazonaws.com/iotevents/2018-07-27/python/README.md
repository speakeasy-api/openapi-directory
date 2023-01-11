# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAlarmModelRequest(
    headers=operations.CreateAlarmModelHeaders(
        x_amz_algorithm="iusto",
        x_amz_content_sha256="voluptatum",
        x_amz_credential="illo",
        x_amz_date="exercitationem",
        x_amz_security_token="aut",
        x_amz_signature="nemo",
        x_amz_signed_headers="voluptate",
    ),
    request=operations.CreateAlarmModelRequestBody(
        alarm_capabilities=operations.CreateAlarmModelRequestBodyAlarmCapabilities(
            acknowledge_flow=shared.AcknowledgeFlow(
                enabled=True,
            ),
            initialization_configuration=shared.InitializationConfiguration(
                disabled_on_initialization=True,
            ),
        ),
        alarm_event_actions=operations.CreateAlarmModelRequestBodyAlarmEventActions(
            alarm_actions=[
                shared.AlarmAction(
                    dynamo_db=shared.DynamoDbAction(
                        hash_key_field="ut",
                        hash_key_type="fugit",
                        hash_key_value="sit",
                        operation="quidem",
                        payload=shared.Payload(
                            content_expression="et",
                            type="STRING",
                        ),
                        payload_field="cum",
                        range_key_field="dicta",
                        range_key_type="cupiditate",
                        range_key_value="impedit",
                        table_name="voluptas",
                    ),
                    dynamo_d_bv2=shared.DynamoDBv2Action(
                        payload=shared.Payload(
                            content_expression="reprehenderit",
                            type="JSON",
                        ),
                        table_name="aut",
                    ),
                    firehose=shared.FirehoseAction(
                        delivery_stream_name="necessitatibus",
                        payload=shared.Payload(
                            content_expression="corrupti",
                            type="JSON",
                        ),
                        separator="tempore",
                    ),
                    iot_events=shared.IotEventsAction(
                        input_name="saepe",
                        payload=shared.Payload(
                            content_expression="aut",
                            type="JSON",
                        ),
                    ),
                    iot_site_wise=shared.IotSiteWiseAction(
                        asset_id="odit",
                        entry_id="et",
                        property_alias="debitis",
                        property_id="voluptates",
                        property_value=shared.AssetPropertyValue(
                            quality="mollitia",
                            timestamp=shared.AssetPropertyTimestamp(
                                offset_in_nanos="odio",
                                time_in_seconds="molestiae",
                            ),
                            value=shared.AssetPropertyVariant(
                                boolean_value="error",
                                double_value="dolores",
                                integer_value="non",
                                string_value="aspernatur",
                            ),
                        ),
                    ),
                    iot_topic_publish=shared.IotTopicPublishAction(
                        mqtt_topic="rem",
                        payload=shared.Payload(
                            content_expression="vel",
                            type="STRING",
                        ),
                    ),
                    lambda_=shared.LambdaAction(
                        function_arn="at",
                        payload=shared.Payload(
                            content_expression="tempora",
                            type="STRING",
                        ),
                    ),
                    sns=shared.SnsTopicPublishAction(
                        payload=shared.Payload(
                            content_expression="voluptas",
                            type="STRING",
                        ),
                        target_arn="maiores",
                    ),
                    sqs=shared.SqsAction(
                        payload=shared.Payload(
                            content_expression="aliquid",
                            type="STRING",
                        ),
                        queue_url="mollitia",
                        use_base64=False,
                    ),
                ),
                shared.AlarmAction(
                    dynamo_db=shared.DynamoDbAction(
                        hash_key_field="libero",
                        hash_key_type="in",
                        hash_key_value="ut",
                        operation="velit",
                        payload=shared.Payload(
                            content_expression="architecto",
                            type="STRING",
                        ),
                        payload_field="tempora",
                        range_key_field="velit",
                        range_key_type="aut",
                        range_key_value="aut",
                        table_name="nobis",
                    ),
                    dynamo_d_bv2=shared.DynamoDBv2Action(
                        payload=shared.Payload(
                            content_expression="iste",
                            type="STRING",
                        ),
                        table_name="expedita",
                    ),
                    firehose=shared.FirehoseAction(
                        delivery_stream_name="impedit",
                        payload=shared.Payload(
                            content_expression="rerum",
                            type="STRING",
                        ),
                        separator="in",
                    ),
                    iot_events=shared.IotEventsAction(
                        input_name="assumenda",
                        payload=shared.Payload(
                            content_expression="modi",
                            type="JSON",
                        ),
                    ),
                    iot_site_wise=shared.IotSiteWiseAction(
                        asset_id="vel",
                        entry_id="aut",
                        property_alias="beatae",
                        property_id="consectetur",
                        property_value=shared.AssetPropertyValue(
                            quality="et",
                            timestamp=shared.AssetPropertyTimestamp(
                                offset_in_nanos="rem",
                                time_in_seconds="provident",
                            ),
                            value=shared.AssetPropertyVariant(
                                boolean_value="inventore",
                                double_value="quas",
                                integer_value="dolorum",
                                string_value="dolores",
                            ),
                        ),
                    ),
                    iot_topic_publish=shared.IotTopicPublishAction(
                        mqtt_topic="aut",
                        payload=shared.Payload(
                            content_expression="sit",
                            type="STRING",
                        ),
                    ),
                    lambda_=shared.LambdaAction(
                        function_arn="doloribus",
                        payload=shared.Payload(
                            content_expression="saepe",
                            type="JSON",
                        ),
                    ),
                    sns=shared.SnsTopicPublishAction(
                        payload=shared.Payload(
                            content_expression="praesentium",
                            type="JSON",
                        ),
                        target_arn="accusantium",
                    ),
                    sqs=shared.SqsAction(
                        payload=shared.Payload(
                            content_expression="reiciendis",
                            type="JSON",
                        ),
                        queue_url="id",
                        use_base64=False,
                    ),
                ),
            ],
        ),
        alarm_model_description="temporibus",
        alarm_model_name="aut",
        alarm_notification=operations.CreateAlarmModelRequestBodyAlarmNotification(
            notification_actions=[
                shared.NotificationAction(
                    action=shared.NotificationTargetActions(
                        lambda_action=shared.LambdaAction(
                            function_arn="ea",
                            payload=shared.Payload(
                                content_expression="quis",
                                type="JSON",
                            ),
                        ),
                    ),
                    email_configurations=[
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="rem",
                                subject="non",
                            ),
                            from_="aperiam",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="omnis",
                                            user_id="rerum",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="et",
                                            user_id="quia",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="quasi",
                                            user_id="eum",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="dolor",
                                subject="ut",
                            ),
                            from_="sit",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="rem",
                                            user_id="iusto",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="sed",
                                            user_id="numquam",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="corrupti",
                                subject="eveniet",
                            ),
                            from_="nobis",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="molestiae",
                                            user_id="veniam",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                    ],
                    sms_configurations=[
                        shared.SmsConfiguration(
                            additional_message="voluptatum",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="perspiciatis",
                                        user_id="aut",
                                    ),
                                ),
                            ],
                            sender_id="fugiat",
                        ),
                        shared.SmsConfiguration(
                            additional_message="est",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="voluptatibus",
                                        user_id="sapiente",
                                    ),
                                ),
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="quasi",
                                        user_id="minima",
                                    ),
                                ),
                            ],
                            sender_id="odit",
                        ),
                        shared.SmsConfiguration(
                            additional_message="modi",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="pariatur",
                                        user_id="velit",
                                    ),
                                ),
                            ],
                            sender_id="possimus",
                        ),
                    ],
                ),
            ],
        ),
        alarm_rule=operations.CreateAlarmModelRequestBodyAlarmRule(
            simple_rule=shared.SimpleRule(
                comparison_operator="EQUAL",
                input_property="ut",
                threshold="corrupti",
            ),
        ),
        key="officia",
        role_arn="optio",
        severity=8289392119546275015,
        tags=[
            shared.Tag(
                key="quas",
                value="reiciendis",
            ),
        ],
    ),
)
    
res = s.create_alarm_model(req)

if res.create_alarm_model_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_alarm_model` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `create_detector_model` - Creates a detector model.
* `create_input` - Creates an input.
* `delete_alarm_model` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `delete_detector_model` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `delete_input` - Deletes an input.
* `describe_alarm_model` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `describe_detector_model` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `describe_detector_model_analysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `describe_input` - Describes an input.
* `describe_logging_options` - Retrieves the current settings of the AWS IoT Events logging options.
* `get_detector_model_analysis_results` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `list_alarm_model_versions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `list_alarm_models` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `list_detector_model_versions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `list_detector_models` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `list_input_routings` -  Lists one or more input routings. 
* `list_inputs` - Lists the inputs you have created.
* `list_tags_for_resource` - Lists the tags (metadata) you have assigned to the resource.
* `put_logging_options` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `start_detector_model_analysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `tag_resource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untag_resource` - Removes the given tags (metadata) from the resource.
* `update_alarm_model` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `update_detector_model` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `update_input` - Updates an input.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
