<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAddSourceIdentifierToSubscriptionRequest(
    action="AddSourceIdentifierToSubscription",
    source_identifier="corrupti",
    subscription_name="provident",
    version="2013-09-09",
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->