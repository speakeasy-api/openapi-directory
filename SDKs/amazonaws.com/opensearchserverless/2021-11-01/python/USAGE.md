<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetCollectionRequest(
    batch_get_collection_request=shared.BatchGetCollectionRequest(
        ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        names=[
            "nulla",
            "corrupti",
            "illum",
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
    x_amz_target="OpenSearchServerless.BatchGetCollection",
)
    
res = s.batch_get_collection(req)

if res.batch_get_collection_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->