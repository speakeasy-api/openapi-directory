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
        source_identifier="repellat",
        subscription_name="ut",
        version="2013-02-12",
    ),
    headers=operations.GetAddSourceIdentifierToSubscriptionHeaders(
        x_amz_algorithm="deserunt",
        x_amz_content_sha256="in",
        x_amz_credential="veritatis",
        x_amz_date="sed",
        x_amz_security_token="praesentium",
        x_amz_signature="dolorum",
        x_amz_signed_headers="ea",
    ),
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->