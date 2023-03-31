<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAssetsRequest(
    request_body=operations.AssociateAssetsRequestBody(
        child_asset_id="corrupti",
        client_token="provident",
        hierarchy_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    asset_id="deserunt",
)
    
res = s.associate_assets(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->