<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateReplicationSetRequest(
    request_body=operations.CreateReplicationSetRequestBody(
        client_token="corrupti",
        regions={
            "distinctio": shared.RegionMapInputValue(
                sse_kms_key_id="quibusdam",
            ),
            "unde": shared.RegionMapInputValue(
                sse_kms_key_id="nulla",
            ),
            "corrupti": shared.RegionMapInputValue(
                sse_kms_key_id="illum",
            ),
        },
        tags={
            "error": "deserunt",
            "suscipit": "iure",
        },
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.create_replication_set(req)

if res.create_replication_set_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->