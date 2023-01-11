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
    
req = operations.BatchGetNamedQueryRequest(
    headers=operations.BatchGetNamedQueryHeaders(
        x_amz_algorithm="maxime",
        x_amz_content_sha256="libero",
        x_amz_credential="qui",
        x_amz_date="ea",
        x_amz_security_token="porro",
        x_amz_signature="labore",
        x_amz_signed_headers="dolore",
        x_amz_target="AmazonAthena.BatchGetNamedQuery",
    ),
    request=shared.BatchGetNamedQueryInput(
        named_query_ids=[
            "et",
            "omnis",
            "ut",
        ],
    ),
)
    
res = s.batch_get_named_query(req)

if res.batch_get_named_query_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->