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
    
req = operations.GetChangeMessageVisibilityRequest(
    path_params=operations.GetChangeMessageVisibilityPathParams(
        account_number=4772934432398856168,
        queue_name="velit",
    ),
    query_params=operations.GetChangeMessageVisibilityQueryParams(
        action="ChangeMessageVisibility",
        receipt_handle="nulla",
        version="2012-11-05",
        visibility_timeout=1092410701567644413,
    ),
    headers=operations.GetChangeMessageVisibilityHeaders(
        x_amz_algorithm="qui",
        x_amz_content_sha256="odit",
        x_amz_credential="tempora",
        x_amz_date="voluptatem",
        x_amz_security_token="dignissimos",
        x_amz_signature="velit",
        x_amz_signed_headers="magnam",
    ),
)
    
res = s.get_change_message_visibility(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->