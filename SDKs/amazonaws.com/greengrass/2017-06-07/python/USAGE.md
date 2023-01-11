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
    
req = operations.AssociateRoleToGroupRequest(
    path_params=operations.AssociateRoleToGroupPathParams(
        group_id="recusandae",
    ),
    headers=operations.AssociateRoleToGroupHeaders(
        x_amz_algorithm="iste",
        x_amz_content_sha256="qui",
        x_amz_credential="veritatis",
        x_amz_date="alias",
        x_amz_security_token="eum",
        x_amz_signature="quia",
        x_amz_signed_headers="iste",
    ),
    request=operations.AssociateRoleToGroupRequestBody(
        role_arn="deleniti",
    ),
)
    
res = s.associate_role_to_group(req)

if res.associate_role_to_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->