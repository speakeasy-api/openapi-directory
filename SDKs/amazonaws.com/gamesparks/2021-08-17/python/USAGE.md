<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateGameRequest(
    request_body=operations.CreateGameRequestBody(
        client_token="corrupti",
        description="provident",
        game_name="distinctio",
        tags={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
)
    
res = s.create_game(req)

if res.create_game_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->