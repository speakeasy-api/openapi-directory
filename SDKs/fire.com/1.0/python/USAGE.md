<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateAPIApplicationRequest(
    request=operations.CreateAPIApplicationNewAPIApplication(
        application_name="repellat",
        enabled=True,
        expiry="2007-01-26T16:05:44Z",
        ican=4405335760754809355,
        number_of_payee_approvals_required=620736082703045283,
        number_of_payment_approvals_required=1823518455980936632,
        permissions=[
            "dolores",
            "perferendis",
        ],
    ),
)
    
res = s.api.create_api_application(req)

if res.api_application is not None:
    # handle response
```
<!-- End SDK Example Usage -->