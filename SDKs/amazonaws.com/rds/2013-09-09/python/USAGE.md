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
        source_identifier="rerum",
        subscription_name="voluptates",
        version="2013-09-09",
    ),
    headers=operations.GetAddSourceIdentifierToSubscriptionHeaders(
        x_amz_algorithm="adipisci",
        x_amz_content_sha256="eum",
        x_amz_credential="non",
        x_amz_date="qui",
        x_amz_security_token="eum",
        x_amz_signature="corporis",
        x_amz_signed_headers="magni",
    ),
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->