<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateWorkflowRequest(
    request_body=operations.CreateWorkflowRequestBody(
        application_configuration_id="corrupti",
        description="provident",
        input_parameters={
            "quibusdam": shared.StepInput(
                integer_value=602763,
                list_of_strings_value=[
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                ],
                map_of_string_value={
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                string_value="tempora",
            ),
            "suscipit": shared.StepInput(
                integer_value=477665,
                list_of_strings_value=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                map_of_string_value={
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                string_value="veritatis",
            ),
            "deserunt": shared.StepInput(
                integer_value=20218,
                list_of_strings_value=[
                    "repellendus",
                    "sapiente",
                ],
                map_of_string_value={
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                },
                string_value="totam",
            ),
        },
        name="porro",
        step_targets=[
            "dicta",
            "nam",
            "officia",
        ],
        tags={
            "fugit": "deleniti",
            "hic": "optio",
            "totam": "beatae",
        },
        template_id="commodi",
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="modi",
    x_amz_credential="qui",
    x_amz_date="impedit",
    x_amz_security_token="cum",
    x_amz_signature="esse",
    x_amz_signed_headers="ipsum",
)
    
res = s.create_workflow(req)

if res.create_migration_workflow_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->