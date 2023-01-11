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
    
req = operations.GetBuildSuggestersRequest(
    query_params=operations.GetBuildSuggestersQueryParams(
        action="BuildSuggesters",
        domain_name="quaerat",
        version="2013-01-01",
    ),
    headers=operations.GetBuildSuggestersHeaders(
        x_amz_algorithm="omnis",
        x_amz_content_sha256="consectetur",
        x_amz_credential="ducimus",
        x_amz_date="consequatur",
        x_amz_security_token="non",
        x_amz_signature="vel",
        x_amz_signed_headers="at",
    ),
)
    
res = s.get_build_suggesters(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->