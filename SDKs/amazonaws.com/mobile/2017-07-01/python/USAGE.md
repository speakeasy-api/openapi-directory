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
    
req = operations.CreateProjectRequest(
    query_params=operations.CreateProjectQueryParams(
        name="magnam",
        region="similique",
        snapshot_id="fuga",
    ),
    headers=operations.CreateProjectHeaders(
        x_amz_algorithm="voluptatem",
        x_amz_content_sha256="officia",
        x_amz_credential="iure",
        x_amz_date="at",
        x_amz_security_token="consequatur",
        x_amz_signature="aut",
        x_amz_signed_headers="nobis",
    ),
    request=operations.CreateProjectRequestBody(
        contents="vero",
    ),
)
    
res = s.create_project(req)

if res.create_project_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->