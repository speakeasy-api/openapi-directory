<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAccountsRequest(
    request_body=operations.AssociateAccountsRequestBody(
        account_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        arn="unde",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.associate_accounts(req)

if res.associate_accounts_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->