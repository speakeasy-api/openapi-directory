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
    
req = operations.AssociateWebACLRequest(
    headers=operations.AssociateWebACLHeaders(
        x_amz_algorithm="consequatur",
        x_amz_content_sha256="modi",
        x_amz_credential="consequatur",
        x_amz_date="quia",
        x_amz_security_token="eaque",
        x_amz_signature="et",
        x_amz_signed_headers="assumenda",
        x_amz_target="AWSWAF_Regional_20161128.AssociateWebACL",
    ),
    request=shared.AssociateWebACLRequest(
        resource_arn="perspiciatis",
        web_acl_id="quia",
    ),
)
    
res = s.associate_web_acl(req)

if res.associate_web_acl_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->