<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateClusterRequest(
    request_body=operations.CreateClusterRequestBody(
        client_token="corrupti",
        cluster_name="provident",
        tags={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
)
    
res = s.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->