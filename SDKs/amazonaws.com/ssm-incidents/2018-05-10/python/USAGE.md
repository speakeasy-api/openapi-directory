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
    
req = operations.CreateReplicationSetRequest(
    headers=operations.CreateReplicationSetHeaders(
        x_amz_algorithm="non",
        x_amz_content_sha256="totam",
        x_amz_credential="similique",
        x_amz_date="sunt",
        x_amz_security_token="aut",
        x_amz_signature="quis",
        x_amz_signed_headers="quis",
    ),
    request=operations.CreateReplicationSetRequestBody(
        client_token="amet",
        regions={
            "totam": shared.RegionMapInputValue(
                sse_kms_key_id="perspiciatis",
            ),
            "cupiditate": shared.RegionMapInputValue(
                sse_kms_key_id="asperiores",
            ),
            "quasi": shared.RegionMapInputValue(
                sse_kms_key_id="eius",
            ),
        },
    ),
)
    
res = s.create_replication_set(req)

if res.create_replication_set_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->