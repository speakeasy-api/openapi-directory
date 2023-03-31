<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateWebACLRequest(
    associate_web_acl_request=shared.AssociateWebACLRequest(
        resource_arn="corrupti",
        web_acl_id="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="AWSWAF_Regional_20161128.AssociateWebACL",
)
    
res = s.associate_web_acl(req)

if res.associate_web_acl_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->