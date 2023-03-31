<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateExperimentTemplateRequest(
    request_body=operations.CreateExperimentTemplateRequestBody(
        actions={
            "provident": shared.CreateExperimentTemplateActionInput(
                action_id="distinctio",
                description="quibusdam",
                parameters={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                start_after=[
                    "iure",
                    "magnam",
                ],
                targets={
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            ),
            "iusto": shared.CreateExperimentTemplateActionInput(
                action_id="excepturi",
                description="nisi",
                parameters={
                    "temporibus": "ab",
                    "quis": "veritatis",
                    "deserunt": "perferendis",
                    "ipsam": "repellendus",
                },
                start_after=[
                    "quo",
                    "odit",
                    "at",
                    "at",
                ],
                targets={
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                },
            ),
            "nam": shared.CreateExperimentTemplateActionInput(
                action_id="officia",
                description="occaecati",
                parameters={
                    "deleniti": "hic",
                },
                start_after=[
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                ],
                targets={
                    "qui": "impedit",
                    "cum": "esse",
                },
            ),
        },
        client_token="ipsum",
        description="excepturi",
        log_configuration=operations.CreateExperimentTemplateRequestBodyLogConfiguration(
            cloud_watch_logs_configuration=shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput(
                log_group_arn="aspernatur",
            ),
            log_schema_version=18789,
            s3_configuration=shared.ExperimentTemplateS3LogConfigurationInput(
                bucket_name="ad",
                prefix="natus",
            ),
        ),
        role_arn="sed",
        stop_conditions=[
            shared.CreateExperimentTemplateStopConditionInput(
                source="dolor",
                value="natus",
            ),
            shared.CreateExperimentTemplateStopConditionInput(
                source="laboriosam",
                value="hic",
            ),
            shared.CreateExperimentTemplateStopConditionInput(
                source="saepe",
                value="fuga",
            ),
        ],
        tags={
            "corporis": "iste",
            "iure": "saepe",
        },
        targets={
            "architecto": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="reiciendis",
                        values=[
                            "mollitia",
                            "laborum",
                            "dolores",
                        ],
                    ),
                ],
                parameters={
                    "corporis": "explicabo",
                },
                resource_arns=[
                    "enim",
                    "omnis",
                    "nemo",
                    "minima",
                ],
                resource_tags={
                    "accusantium": "iure",
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
                resource_type="mollitia",
                selection_mode="dolorem",
            ),
            "culpa": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="repellat",
                        values=[
                            "occaecati",
                            "numquam",
                            "commodi",
                        ],
                    ),
                ],
                parameters={
                    "molestiae": "velit",
                    "error": "quia",
                },
                resource_arns=[
                    "vitae",
                    "laborum",
                ],
                resource_tags={
                    "enim": "odit",
                    "quo": "sequi",
                    "tenetur": "ipsam",
                },
                resource_type="id",
                selection_mode="possimus",
            ),
            "aut": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="error",
                        values=[
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        ],
                    ),
                ],
                parameters={
                    "nihil": "praesentium",
                    "voluptatibus": "ipsa",
                    "omnis": "voluptate",
                    "cum": "perferendis",
                },
                resource_arns=[
                    "reprehenderit",
                ],
                resource_tags={
                    "maiores": "dicta",
                    "corporis": "dolore",
                },
                resource_type="iusto",
                selection_mode="dicta",
            ),
        },
    ),
    x_amz_algorithm="harum",
    x_amz_content_sha256="enim",
    x_amz_credential="accusamus",
    x_amz_date="commodi",
    x_amz_security_token="repudiandae",
    x_amz_signature="quae",
    x_amz_signed_headers="ipsum",
)
    
res = s.create_experiment_template(req)

if res.create_experiment_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->