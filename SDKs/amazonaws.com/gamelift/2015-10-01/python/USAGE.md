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
    
req = operations.AcceptMatchRequest(
    headers=operations.AcceptMatchHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="ea",
        x_amz_credential="quia",
        x_amz_date="sed",
        x_amz_security_token="dolorem",
        x_amz_signature="accusamus",
        x_amz_signed_headers="ut",
        x_amz_target="GameLift.AcceptMatch",
    ),
    request=shared.AcceptMatchInput(
        acceptance_type="REJECT",
        player_ids=[
            "accusamus",
        ],
        ticket_id="quisquam",
    ),
)
    
res = s.accept_match(req)

if res.accept_match_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->