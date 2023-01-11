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
    
req = operations.AddLayerVersionPermissionRequest(
    path_params=operations.AddLayerVersionPermissionPathParams(
        layer_name="qui",
        version_number=1890455036426927167,
    ),
    query_params=operations.AddLayerVersionPermissionQueryParams(
        revision_id="sed",
    ),
    headers=operations.AddLayerVersionPermissionHeaders(
        x_amz_algorithm="enim",
        x_amz_content_sha256="eum",
        x_amz_credential="et",
        x_amz_date="expedita",
        x_amz_security_token="et",
        x_amz_signature="quasi",
        x_amz_signed_headers="nisi",
    ),
    request=operations.AddLayerVersionPermissionRequestBody(
        action="et",
        organization_id="unde",
        principal="in",
        statement_id="ut",
    ),
)
    
res = s.add_layer_version_permission(req)

if res.add_layer_version_permission_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->