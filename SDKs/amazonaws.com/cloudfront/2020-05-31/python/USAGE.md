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
    
req = operations.AssociateAlias20200531Request(
    path_params=operations.AssociateAlias20200531PathParams(
        target_distribution_id="voluptas",
    ),
    query_params=operations.AssociateAlias20200531QueryParams(
        alias="necessitatibus",
    ),
    headers=operations.AssociateAlias20200531Headers(
        x_amz_algorithm="iure",
        x_amz_content_sha256="voluptate",
        x_amz_credential="quaerat",
        x_amz_date="aut",
        x_amz_security_token="ullam",
        x_amz_signature="omnis",
        x_amz_signed_headers="debitis",
    ),
)
    
res = s.associate_alias2020_05_31(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->