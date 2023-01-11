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
    
req = operations.AssociateAssetsRequest(
    path_params=operations.AssociateAssetsPathParams(
        asset_id="labore",
    ),
    headers=operations.AssociateAssetsHeaders(
        x_amz_algorithm="cupiditate",
        x_amz_content_sha256="unde",
        x_amz_credential="cupiditate",
        x_amz_date="odio",
        x_amz_security_token="rerum",
        x_amz_signature="placeat",
        x_amz_signed_headers="nostrum",
    ),
    request=operations.AssociateAssetsRequestBody(
        child_asset_id="repellat",
        client_token="earum",
        hierarchy_id="eum",
    ),
)
    
res = s.associate_assets(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->