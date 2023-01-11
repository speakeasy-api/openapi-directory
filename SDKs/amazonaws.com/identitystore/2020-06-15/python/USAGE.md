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
    
req = operations.DescribeGroupRequest(
    headers=operations.DescribeGroupHeaders(
        x_amz_algorithm="mollitia",
        x_amz_content_sha256="neque",
        x_amz_credential="autem",
        x_amz_date="ab",
        x_amz_security_token="dolore",
        x_amz_signature="fugit",
        x_amz_signed_headers="saepe",
        x_amz_target="AWSIdentityStore.DescribeGroup",
    ),
    request=shared.DescribeGroupRequest(
        group_id="dignissimos",
        identity_store_id="rerum",
    ),
)
    
res = s.describe_group(req)

if res.describe_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->