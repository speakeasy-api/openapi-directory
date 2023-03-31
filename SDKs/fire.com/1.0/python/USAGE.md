<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.CreateAPIApplicationNewAPIApplication(
    application_name="Batch Processing API",
    enabled=True,
    expiry="2019-08-22T07:48:56.460Z",
    ican=548814,
    number_of_payee_approvals_required=1,
    number_of_payment_approvals_required=1,
    permissions=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
)
    
res = s.api.create_api_application(req)

if res.api_application is not None:
    # handle response
```
<!-- End SDK Example Usage -->