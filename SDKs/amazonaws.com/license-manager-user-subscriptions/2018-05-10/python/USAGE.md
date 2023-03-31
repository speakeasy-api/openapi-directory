<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateUserRequest(
    request_body=operations.AssociateUserRequestBody(
        domain="corrupti",
        identity_provider=operations.AssociateUserRequestBodyIdentityProvider(
            active_directory_identity_provider=shared.ActiveDirectoryIdentityProvider(
                directory_id="provident",
            ),
        ),
        instance_id="distinctio",
        username="Rosalinda_Mitchell84",
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
)
    
res = s.associate_user(req)

if res.associate_user_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->