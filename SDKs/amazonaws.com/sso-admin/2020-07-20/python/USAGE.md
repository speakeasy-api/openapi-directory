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
    
req = operations.AttachManagedPolicyToPermissionSetRequest(
    headers=operations.AttachManagedPolicyToPermissionSetHeaders(
        x_amz_algorithm="ea",
        x_amz_content_sha256="pariatur",
        x_amz_credential="eligendi",
        x_amz_date="sit",
        x_amz_security_token="libero",
        x_amz_signature="quia",
        x_amz_signed_headers="ipsa",
        x_amz_target="SWBExternalService.AttachManagedPolicyToPermissionSet",
    ),
    request=shared.AttachManagedPolicyToPermissionSetRequest(
        instance_arn="quis",
        managed_policy_arn="necessitatibus",
        permission_set_arn="sint",
    ),
)
    
res = s.attach_managed_policy_to_permission_set(req)

if res.attach_managed_policy_to_permission_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->