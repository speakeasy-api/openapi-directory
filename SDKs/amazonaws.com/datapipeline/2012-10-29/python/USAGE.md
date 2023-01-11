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
    
req = operations.ActivatePipelineRequest(
    headers=operations.ActivatePipelineHeaders(
        x_amz_algorithm="molestias",
        x_amz_content_sha256="asperiores",
        x_amz_credential="suscipit",
        x_amz_date="nam",
        x_amz_security_token="ducimus",
        x_amz_signature="ullam",
        x_amz_signed_headers="corrupti",
        x_amz_target="DataPipeline.ActivatePipeline",
    ),
    request=shared.ActivatePipelineInput(
        parameter_values=[
            shared.ParameterValue(
                id="suscipit",
                string_value="magnam",
            ),
            shared.ParameterValue(
                id="aspernatur",
                string_value="corporis",
            ),
            shared.ParameterValue(
                id="accusamus",
                string_value="fugit",
            ),
        ],
        pipeline_id="qui",
        start_timestamp="1993-08-20T08:47:17Z",
    ),
)
    
res = s.activate_pipeline(req)

if res.activate_pipeline_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->