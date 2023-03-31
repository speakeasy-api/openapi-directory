<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptMatchRequest(
    accept_match_input=shared.AcceptMatchInput(
        acceptance_type="REJECT",
        player_ids=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        ticket_id="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
    x_amz_target="GameLift.AcceptMatch",
)
    
res = s.accept_match(req)

if res.accept_match_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->