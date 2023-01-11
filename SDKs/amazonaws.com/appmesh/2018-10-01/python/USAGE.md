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
    
req = operations.CreateMeshRequest(
    headers=operations.CreateMeshHeaders(
        x_amz_algorithm="nihil",
        x_amz_content_sha256="quam",
        x_amz_credential="et",
        x_amz_date="vel",
        x_amz_security_token="itaque",
        x_amz_signature="provident",
        x_amz_signed_headers="voluptatem",
    ),
    request=operations.CreateMeshRequestBody(
        client_token="qui",
        mesh_name="modi",
    ),
)
    
res = s.create_mesh(req)

if res.create_mesh_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->