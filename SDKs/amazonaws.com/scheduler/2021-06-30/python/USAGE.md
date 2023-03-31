<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateScheduleRequest(
    name="corrupti",
    request_body=operations.CreateScheduleRequestBody(
        client_token="provident",
        description="distinctio",
        end_date="2021-03-11T23:22:42.658Z",
        flexible_time_window=operations.CreateScheduleRequestBodyFlexibleTimeWindow(
            maximum_window_in_minutes=857946,
            mode="FLEXIBLE",
        ),
        group_name="illum",
        kms_key_arn="vel",
        schedule_expression="error",
        schedule_expression_timezone="deserunt",
        start_date="2022-07-25T06:44:09.184Z",
        state="ENABLED",
        target=operations.CreateScheduleRequestBodyTarget(
            arn="debitis",
            dead_letter_config=shared.DeadLetterConfig(
                arn="ipsa",
            ),
            ecs_parameters=shared.EcsParameters(
                capacity_provider_strategy=[
                    shared.CapacityProviderStrategyItem(
                        base=272656,
                        capacity_provider="suscipit",
                        weight=477665,
                    ),
                    shared.CapacityProviderStrategyItem(
                        base=791725,
                        capacity_provider="placeat",
                        weight=528895,
                    ),
                    shared.CapacityProviderStrategyItem(
                        base=479977,
                        capacity_provider="excepturi",
                        weight=392785,
                    ),
                    shared.CapacityProviderStrategyItem(
                        base=925597,
                        capacity_provider="temporibus",
                        weight=71036,
                    ),
                ],
                enable_ecs_managed_tags=False,
                enable_execute_command=False,
                group="quis",
                launch_type="EC2",
                network_configuration=shared.NetworkConfiguration(
                    awsvpc_configuration=shared.AwsVpcConfiguration(
                        assign_public_ip="DISABLED",
                        security_groups=[
                            "ipsam",
                        ],
                        subnets=[
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        ],
                    ),
                ),
                placement_constraints=[
                    shared.PlacementConstraint(
                        expression="maiores",
                        type="distinctInstance",
                    ),
                    shared.PlacementConstraint(
                        expression="quod",
                        type="memberOf",
                    ),
                    shared.PlacementConstraint(
                        expression="esse",
                        type="memberOf",
                    ),
                    shared.PlacementConstraint(
                        expression="porro",
                        type="memberOf",
                    ),
                ],
                placement_strategy=[
                    shared.PlacementStrategy(
                        field="nam",
                        type="spread",
                    ),
                ],
                platform_version="occaecati",
                propagate_tags="TASK_DEFINITION",
                reference_id="fugit",
                tags=[
                    {
                        "optio": "totam",
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    {
                        "esse": "ipsum",
                        "excepturi": "aspernatur",
                        "perferendis": "ad",
                    },
                    {
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                ],
                task_count=902599,
                task_definition_arn="fuga",
            ),
            event_bridge_parameters=shared.EventBridgeParameters(
                detail_type="in",
                source="corporis",
            ),
            input="iste",
            kinesis_parameters=shared.KinesisParameters(
                partition_key="iure",
            ),
            retry_policy=shared.RetryPolicy(
                maximum_event_age_in_seconds=902349,
                maximum_retry_attempts=697631,
            ),
            role_arn="architecto",
            sage_maker_pipeline_parameters=shared.SageMakerPipelineParameters(
                pipeline_parameter_list=[
                    shared.SageMakerPipelineParameter(
                        name="reiciendis",
                        value="est",
                    ),
                ],
            ),
            sqs_parameters=shared.SqsParameters(
                message_group_id="mollitia",
            ),
        ),
    ),
    x_amz_algorithm="laborum",
    x_amz_content_sha256="dolores",
    x_amz_credential="dolorem",
    x_amz_date="corporis",
    x_amz_security_token="explicabo",
    x_amz_signature="nobis",
    x_amz_signed_headers="enim",
)
    
res = s.create_schedule(req)

if res.create_schedule_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->