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
    
req = operations.AcceptDomainTransferFromAnotherAwsAccountRequest(
    headers=operations.AcceptDomainTransferFromAnotherAwsAccountHeaders(
        x_amz_algorithm="sit",
        x_amz_content_sha256="magni",
        x_amz_credential="quis",
        x_amz_date="sed",
        x_amz_security_token="ratione",
        x_amz_signature="sed",
        x_amz_signed_headers="quaerat",
        x_amz_target="Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
    ),
    request=shared.AcceptDomainTransferFromAnotherAwsAccountRequest(
        domain_name="vel",
        password="fuga",
    ),
)
    
res = s.accept_domain_transfer_from_another_aws_account(req)

if res.accept_domain_transfer_from_another_aws_account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->