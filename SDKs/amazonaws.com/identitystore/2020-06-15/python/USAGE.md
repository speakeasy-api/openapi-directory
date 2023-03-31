<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateGroupRequest(
    create_group_request=shared.CreateGroupRequest(
        description="corrupti",
        display_name="provident",
        identity_store_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="AWSIdentityStore.CreateGroup",
)
    
res = s.create_group(req)

if res.create_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->