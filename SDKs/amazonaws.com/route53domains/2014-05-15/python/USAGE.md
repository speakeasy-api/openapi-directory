<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptDomainTransferFromAnotherAwsAccountRequest(
    accept_domain_transfer_from_another_aws_account_request=shared.AcceptDomainTransferFromAnotherAwsAccountRequest(
        domain_name="corrupti",
        password="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
)
    
res = s.accept_domain_transfer_from_another_aws_account(req)

if res.accept_domain_transfer_from_another_aws_account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->