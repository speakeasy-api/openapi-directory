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
    
req = operations.InvokeEndpointRequest(
    path_params=operations.InvokeEndpointPathParams(
        endpoint_name="dolores",
    ),
    headers=operations.InvokeEndpointHeaders(
        accept="quasi",
        content_type="recusandae",
        x_amz_algorithm="numquam",
        x_amz_content_sha256="numquam",
        x_amz_credential="occaecati",
        x_amz_date="aut",
        x_amz_security_token="est",
        x_amz_signature="occaecati",
        x_amz_signed_headers="et",
        x_amzn_sage_maker_custom_attributes="et",
        x_amzn_sage_maker_inference_id="non",
        x_amzn_sage_maker_target_container_hostname="molestias",
        x_amzn_sage_maker_target_model="aut",
        x_amzn_sage_maker_target_variant="qui",
    ),
    request=operations.InvokeEndpointRequestBody(
        body="consequuntur",
    ),
)
    
res = s.invoke_endpoint(req)

if res.invoke_endpoint_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->