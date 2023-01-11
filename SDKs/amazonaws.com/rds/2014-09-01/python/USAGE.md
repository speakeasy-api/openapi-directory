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
    
req = operations.GetAddSourceIdentifierToSubscriptionRequest(
    query_params=operations.GetAddSourceIdentifierToSubscriptionQueryParams(
        action="AddSourceIdentifierToSubscription",
        source_identifier="occaecati",
        subscription_name="omnis",
        version="2014-09-01",
    ),
    headers=operations.GetAddSourceIdentifierToSubscriptionHeaders(
        x_amz_algorithm="qui",
        x_amz_content_sha256="quia",
        x_amz_credential="laboriosam",
        x_amz_date="non",
        x_amz_security_token="distinctio",
        x_amz_signature="vel",
        x_amz_signed_headers="est",
    ),
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->