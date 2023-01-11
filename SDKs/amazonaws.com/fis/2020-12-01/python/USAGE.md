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
    
req = operations.CreateExperimentTemplateRequest(
    headers=operations.CreateExperimentTemplateHeaders(
        x_amz_algorithm="rem",
        x_amz_content_sha256="perspiciatis",
        x_amz_credential="molestias",
        x_amz_date="repellendus",
        x_amz_security_token="doloremque",
        x_amz_signature="doloremque",
        x_amz_signed_headers="consectetur",
    ),
    request=operations.CreateExperimentTemplateRequestBody(
        actions={
            "et": shared.CreateExperimentTemplateActionInput(
                action_id="ut",
                description="eaque",
                parameters={
                    "dolorem": "nulla",
                    "nam": "velit",
                },
                start_after=[
                    "culpa",
                ],
                targets={
                    "qui": "impedit",
                    "culpa": "voluptatibus",
                    "consequuntur": "sapiente",
                },
            ),
            "sint": shared.CreateExperimentTemplateActionInput(
                action_id="et",
                description="fuga",
                parameters={
                    "quidem": "reiciendis",
                },
                start_after=[
                    "quas",
                    "pariatur",
                    "omnis",
                ],
                targets={
                    "soluta": "qui",
                    "aut": "et",
                },
            ),
        },
        client_token="omnis",
        description="et",
        role_arn="architecto",
        stop_conditions=[
            shared.CreateExperimentTemplateStopConditionInput(
                source="dolorem",
                value="recusandae",
            ),
        ],
        tags={
            "ut": "ab",
        },
        targets={
            "ut": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="molestiae",
                        values=[
                            "aut",
                            "sequi",
                            "eum",
                        ],
                    ),
                    shared.ExperimentTemplateTargetInputFilter(
                        path="iusto",
                        values=[
                            "sunt",
                            "ea",
                            "et",
                        ],
                    ),
                    shared.ExperimentTemplateTargetInputFilter(
                        path="officiis",
                        values=[
                            "delectus",
                        ],
                    ),
                ],
                resource_arns=[
                    "esse",
                    "ut",
                ],
                resource_tags={
                    "deserunt": "ut",
                    "in": "maiores",
                },
                resource_type="iure",
                selection_mode="qui",
            ),
        },
    ),
)
    
res = s.create_experiment_template(req)

if res.create_experiment_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->