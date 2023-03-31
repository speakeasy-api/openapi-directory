<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.InvokeEndpointRequest(
    accept="corrupti",
    content_type="provident",
    endpoint_name="distinctio",
    request_body=operations.InvokeEndpointRequestBody(
        body="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amzn_sage_maker_custom_attributes="suscipit",
    x_amzn_sage_maker_enable_explanations="iure",
    x_amzn_sage_maker_inference_id="magnam",
    x_amzn_sage_maker_target_container_hostname="debitis",
    x_amzn_sage_maker_target_model="ipsa",
    x_amzn_sage_maker_target_variant="delectus",
)
    
res = s.invoke_endpoint(req)

if res.invoke_endpoint_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->