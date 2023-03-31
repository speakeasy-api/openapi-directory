<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ActivatePipelineRequest(
    activate_pipeline_input=shared.ActivatePipelineInput(
        parameter_values=[
            shared.ParameterValue(
                id="provident",
                string_value="distinctio",
            ),
            shared.ParameterValue(
                id="quibusdam",
                string_value="unde",
            ),
            shared.ParameterValue(
                id="nulla",
                string_value="corrupti",
            ),
        ],
        pipeline_id="illum",
        start_timestamp="2022-05-18T09:34:54.894Z",
    ),
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
    x_amz_target="DataPipeline.ActivatePipeline",
)
    
res = s.activate_pipeline(req)

if res.activate_pipeline_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->