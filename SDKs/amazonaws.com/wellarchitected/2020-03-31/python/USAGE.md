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
    
req = operations.AssociateLensesRequest(
    path_params=operations.AssociateLensesPathParams(
        workload_id="unde",
    ),
    headers=operations.AssociateLensesHeaders(
        x_amz_algorithm="ipsam",
        x_amz_content_sha256="ad",
        x_amz_credential="sint",
        x_amz_date="dolores",
        x_amz_security_token="illum",
        x_amz_signature="error",
        x_amz_signed_headers="cupiditate",
    ),
    request=operations.AssociateLensesRequestBody(
        lens_aliases=[
            "sapiente",
            "et",
        ],
    ),
)
    
res = s.associate_lenses(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->