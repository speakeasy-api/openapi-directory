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
    
req = operations.GetAcceptReservedNodeExchangeRequest(
    query_params=operations.GetAcceptReservedNodeExchangeQueryParams(
        action="AcceptReservedNodeExchange",
        reserved_node_id="maxime",
        target_reserved_node_offering_id="ipsa",
        version="2012-12-01",
    ),
    headers=operations.GetAcceptReservedNodeExchangeHeaders(
        x_amz_algorithm="autem",
        x_amz_content_sha256="magni",
        x_amz_credential="recusandae",
        x_amz_date="et",
        x_amz_security_token="dolorem",
        x_amz_signature="saepe",
        x_amz_signed_headers="minus",
    ),
)
    
res = s.get_accept_reserved_node_exchange(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->