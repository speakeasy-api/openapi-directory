# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/pipes/2015-10-07/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreatePipeRequest(
    name="corrupti",
    request_body=operations.CreatePipeRequestBody(
        description="provident",
        desired_state="STOPPED",
        enrichment="quibusdam",
        enrichment_parameters=operations.CreatePipeRequestBodyEnrichmentParameters(
            http_parameters=shared.PipeEnrichmentHTTPParameters(
                header_parameters={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                path_parameter_values=[
                    "iure",
                    "magnam",
                ],
                query_string_parameters={
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            ),
            input_template="iusto",
        ),
        role_arn="excepturi",
        source="nisi",
        source_parameters=operations.CreatePipeRequestBodySourceParameters(
            active_mq_broker_parameters=shared.PipeSourceActiveMQBrokerParameters(
                batch_size=925597,
                credentials=shared.MQBrokerAccessCredentials(
                    basic_auth="temporibus",
                ),
                maximum_batching_window_in_seconds=71036,
                queue_name="quis",
            ),
            dynamo_db_stream_parameters=shared.PipeSourceDynamoDBStreamParameters(
                batch_size=87129,
                dead_letter_config=shared.DeadLetterConfig(
                    arn="deserunt",
                ),
                maximum_batching_window_in_seconds=20218,
                maximum_record_age_in_seconds=368241,
                maximum_retry_attempts=832620,
                on_partial_batch_item_failure="AUTOMATIC_BISECT",
                parallelization_factor=957156,
                starting_position="LATEST",
            ),
            filter_criteria=shared.FilterCriteria(
                filters=[
                    shared.Filter(
                        pattern="at",
                    ),
                ],
            ),
            kinesis_stream_parameters=shared.PipeSourceKinesisStreamParameters(
                batch_size=870088,
                dead_letter_config=shared.DeadLetterConfig(
                    arn="maiores",
                ),
                maximum_batching_window_in_seconds=473608,
                maximum_record_age_in_seconds=799159,
                maximum_retry_attempts=800911,
                on_partial_batch_item_failure="AUTOMATIC_BISECT",
                parallelization_factor=461479,
                starting_position="LATEST",
                starting_position_timestamp="2020-12-18T15:02:44.758Z",
            ),
            managed_streaming_kafka_parameters=shared.PipeSourceManagedStreamingKafkaParameters(
                batch_size=118274,
                consumer_group_id="nam",
                credentials=shared.MSKAccessCredentials(
                    client_certificate_tls_auth="officia",
                    sasl_scram512_auth="occaecati",
                ),
                maximum_batching_window_in_seconds=143353,
                starting_position="LATEST",
                topic_name="hic",
            ),
            rabbit_mq_broker_parameters=shared.PipeSourceRabbitMQBrokerParameters(
                batch_size=758616,
                credentials=shared.MQBrokerAccessCredentials(
                    basic_auth="totam",
                ),
                maximum_batching_window_in_seconds=105907,
                queue_name="commodi",
                virtual_host="molestiae",
            ),
            self_managed_kafka_parameters=shared.PipeSourceSelfManagedKafkaParameters(
                additional_bootstrap_servers=[
                    "qui",
                    "impedit",
                ],
                batch_size=736918,
                consumer_group_id="esse",
                credentials=shared.SelfManagedKafkaAccessConfigurationCredentials(
                    basic_auth="ipsum",
                    client_certificate_tls_auth="excepturi",
                    sasl_scram256_auth="aspernatur",
                    sasl_scram512_auth="perferendis",
                ),
                maximum_batching_window_in_seconds=324141,
                server_root_ca_certificate="natus",
                starting_position="TRIM_HORIZON",
                topic_name="iste",
                vpc=shared.SelfManagedKafkaAccessConfigurationVpc(
                    security_group=[
                        "natus",
                    ],
                    subnets=[
                        "hic",
                        "saepe",
                    ],
                ),
            ),
            sqs_queue_parameters=shared.PipeSourceSqsQueueParameters(
                batch_size=681820,
                maximum_batching_window_in_seconds=449950,
            ),
        ),
        tags={
            "iste": "iure",
            "saepe": "quidem",
        },
        target="architecto",
        target_parameters=operations.CreatePipeRequestBodyTargetParameters(
            batch_job_parameters=shared.PipeTargetBatchJobParameters(
                array_properties=shared.BatchArrayProperties(
                    size=60225,
                ),
                container_overrides=shared.BatchContainerOverrides(
                    command=[
                        "est",
                        "mollitia",
                        "laborum",
                        "dolores",
                    ],
                    environment=[
                        shared.BatchEnvironmentVariable(
                            name="corporis",
                            value="explicabo",
                        ),
                    ],
                    instance_type="nobis",
                    resource_requirements=[
                        shared.BatchResourceRequirement(
                            type="MEMORY",
                            value="nemo",
                        ),
                        shared.BatchResourceRequirement(
                            type="GPU",
                            value="excepturi",
                        ),
                    ],
                ),
                depends_on=[
                    shared.BatchJobDependency(
                        job_id="iure",
                        type="SEQUENTIAL",
                    ),
                ],
                job_definition="doloribus",
                job_name="sapiente",
                parameters={
                    "mollitia": "dolorem",
                },
                retry_strategy=shared.BatchRetryStrategy(
                    attempts=635059,
                ),
            ),
            cloud_watch_logs_parameters=shared.PipeTargetCloudWatchLogsParameters(
                log_stream_name="consequuntur",
                timestamp="repellat",
            ),
            ecs_task_parameters=shared.PipeTargetEcsTaskParameters(
                capacity_provider_strategy=[
                    shared.CapacityProviderStrategyItem(
                        base=581850,
                        capacity_provider="numquam",
                        weight=414369,
                    ),
                    shared.CapacityProviderStrategyItem(
                        base=466311,
                        capacity_provider="molestiae",
                        weight=244425,
                    ),
                    shared.CapacityProviderStrategyItem(
                        base=623510,
                        capacity_provider="quia",
                        weight=338007,
                    ),
                ],
                enable_ecs_managed_tags=False,
                enable_execute_command=False,
                group="vitae",
                launch_type="EXTERNAL",
                network_configuration=shared.NetworkConfiguration(
                    awsvpc_configuration=shared.AwsVpcConfiguration(
                        assign_public_ip="DISABLED",
                        security_groups=[
                            "odit",
                            "quo",
                        ],
                        subnets=[
                            "tenetur",
                        ],
                    ),
                ),
                overrides=shared.EcsTaskOverride(
                    container_overrides=[
                        shared.EcsContainerOverride(
                            command=[
                                "possimus",
                                "aut",
                                "quasi",
                            ],
                            cpu=622846,
                            environment=[
                                shared.EcsEnvironmentVariable(
                                    name="laborum",
                                    value="quasi",
                                ),
                                shared.EcsEnvironmentVariable(
                                    name="reiciendis",
                                    value="voluptatibus",
                                ),
                                shared.EcsEnvironmentVariable(
                                    name="vero",
                                    value="nihil",
                                ),
                                shared.EcsEnvironmentVariable(
                                    name="praesentium",
                                    value="voluptatibus",
                                ),
                            ],
                            environment_files=[
                                shared.EcsEnvironmentFile(
                                    type="s3",
                                    value="omnis",
                                ),
                            ],
                            memory=451159,
                            memory_reservation=739264,
                            name="perferendis",
                            resource_requirements=[
                                shared.EcsResourceRequirement(
                                    type="GPU",
                                    value="ut",
                                ),
                            ],
                        ),
                        shared.EcsContainerOverride(
                            command=[
                                "dicta",
                                "corporis",
                                "dolore",
                                "iusto",
                            ],
                            cpu=118727,
                            environment=[
                                shared.EcsEnvironmentVariable(
                                    name="enim",
                                    value="accusamus",
                                ),
                                shared.EcsEnvironmentVariable(
                                    name="commodi",
                                    value="repudiandae",
                                ),
                                shared.EcsEnvironmentVariable(
                                    name="quae",
                                    value="ipsum",
                                ),
                            ],
                            environment_files=[
                                shared.EcsEnvironmentFile(
                                    type="s3",
                                    value="molestias",
                                ),
                                shared.EcsEnvironmentFile(
                                    type="s3",
                                    value="excepturi",
                                ),
                                shared.EcsEnvironmentFile(
                                    type="s3",
                                    value="pariatur",
                                ),
                            ],
                            memory=265389,
                            memory_reservation=508969,
                            name="rem",
                            resource_requirements=[
                                shared.EcsResourceRequirement(
                                    type="GPU",
                                    value="repudiandae",
                                ),
                                shared.EcsResourceRequirement(
                                    type="InferenceAccelerator",
                                    value="veritatis",
                                ),
                                shared.EcsResourceRequirement(
                                    type="InferenceAccelerator",
                                    value="incidunt",
                                ),
                                shared.EcsResourceRequirement(
                                    type="GPU",
                                    value="consequatur",
                                ),
                            ],
                        ),
                    ],
                    cpu="est",
                    ephemeral_storage=shared.EcsEphemeralStorage(
                        size_in_gi_b=842342,
                    ),
                    execution_role_arn="explicabo",
                    inference_accelerator_overrides=[
                        shared.EcsInferenceAcceleratorOverride(
                            device_name="distinctio",
                            device_type="quibusdam",
                        ),
                        shared.EcsInferenceAcceleratorOverride(
                            device_name="labore",
                            device_type="modi",
                        ),
                        shared.EcsInferenceAcceleratorOverride(
                            device_name="qui",
                            device_type="aliquid",
                        ),
                    ],
                    memory="cupiditate",
                    task_role_arn="quos",
                ),
                placement_constraints=[
                    shared.PlacementConstraint(
                        expression="magni",
                        type="memberOf",
                    ),
                ],
                placement_strategy=[
                    shared.PlacementStrategy(
                        field="alias",
                        type="random",
                    ),
                    shared.PlacementStrategy(
                        field="dolorum",
                        type="spread",
                    ),
                ],
                platform_version="tempora",
                propagate_tags="TASK_DEFINITION",
                reference_id="facilis",
                tags=[
                    shared.Tag(
                        key="labore",
                        value="delectus",
                    ),
                    shared.Tag(
                        key="eum",
                        value="non",
                    ),
                    shared.Tag(
                        key="eligendi",
                        value="sint",
                    ),
                ],
                task_count=396098,
                task_definition_arn="provident",
            ),
            event_bridge_event_bus_parameters=shared.PipeTargetEventBridgeEventBusParameters(
                detail_type="necessitatibus",
                endpoint_id="sint",
                resources=[
                    "dolor",
                    "debitis",
                    "a",
                ],
                source="dolorum",
                time="in",
            ),
            http_parameters=shared.PipeTargetHTTPParameters(
                header_parameters={
                    "illum": "maiores",
                    "rerum": "dicta",
                },
                path_parameter_values=[
                    "cumque",
                    "facere",
                ],
                query_string_parameters={
                    "aliquid": "laborum",
                    "accusamus": "non",
                },
            ),
            input_template="occaecati",
            kinesis_stream_parameters=shared.PipeTargetKinesisStreamParameters(
                partition_key="enim",
            ),
            lambda_function_parameters=shared.PipeTargetLambdaFunctionParameters(
                invocation_type="FIRE_AND_FORGET",
            ),
            redshift_data_parameters=shared.PipeTargetRedshiftDataParameters(
                database="delectus",
                db_user="quidem",
                secret_manager_arn="provident",
                sqls=[
                    "id",
                    "blanditiis",
                    "deleniti",
                ],
                statement_name="sapiente",
                with_event=False,
            ),
            sage_maker_pipeline_parameters=shared.PipeTargetSageMakerPipelineParameters(
                pipeline_parameter_list=[
                    shared.SageMakerPipelineParameter(
                        name="deserunt",
                        value="nisi",
                    ),
                ],
            ),
            sqs_queue_parameters=shared.PipeTargetSqsQueueParameters(
                message_deduplication_id="vel",
                message_group_id="natus",
            ),
            step_function_state_machine_parameters=shared.PipeTargetStateMachineParameters(
                invocation_type="FIRE_AND_FORGET",
            ),
        ),
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="perferendis",
    x_amz_credential="nihil",
    x_amz_date="magnam",
    x_amz_security_token="distinctio",
    x_amz_signature="id",
    x_amz_signed_headers="labore",
)
    
res = s.create_pipe(req)

if res.create_pipe_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_pipe` - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* `delete_pipe` - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `describe_pipe` - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `list_pipes` - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* `list_tags_for_resource` - Displays the tags associated with a pipe.
* `start_pipe` - Start an existing pipe.
* `stop_pipe` - Stop an existing pipe.
* `tag_resource` - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* `untag_resource` - Removes one or more tags from the specified pipes.
* `update_pipe` - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
