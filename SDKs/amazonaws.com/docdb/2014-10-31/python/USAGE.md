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
        source_identifier="aliquam",
        subscription_name="non",
        version="2014-10-31",
    ),
    headers=operations.GetAddSourceIdentifierToSubscriptionHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="velit",
        x_amz_credential="totam",
        x_amz_date="ab",
        x_amz_security_token="consequuntur",
        x_amz_signature="commodi",
        x_amz_signed_headers="fugiat",
    ),
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->