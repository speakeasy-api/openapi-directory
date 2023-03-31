<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest(
    attach_customer_managed_policy_reference_to_permission_set_request=shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest(
        customer_managed_policy_reference=shared.CustomerManagedPolicyReference(
            name="corrupti",
            path="provident",
        ),
        instance_arn="distinctio",
        permission_set_arn="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
)
    
res = s.attach_customer_managed_policy_reference_to_permission_set(req)

if res.attach_customer_managed_policy_reference_to_permission_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->