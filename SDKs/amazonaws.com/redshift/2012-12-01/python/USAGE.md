<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAcceptReservedNodeExchangeRequest(
    action="AcceptReservedNodeExchange",
    reserved_node_id="corrupti",
    target_reserved_node_offering_id="provident",
    version="2012-12-01",
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.get_accept_reserved_node_exchange(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->