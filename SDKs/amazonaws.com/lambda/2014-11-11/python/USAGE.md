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
    
req = operations.AddEventSourceRequest(
    headers=operations.AddEventSourceHeaders(
        x_amz_algorithm="ipsum",
        x_amz_content_sha256="omnis",
        x_amz_credential="error",
        x_amz_date="reprehenderit",
        x_amz_security_token="explicabo",
        x_amz_signature="aut",
        x_amz_signed_headers="eum",
    ),
    request=operations.AddEventSourceRequestBody(
        batch_size=6380244943489637684,
        event_source="ratione",
        function_name="labore",
        parameters={
            "saepe": "libero",
            "nobis": "ut",
        },
        role="accusamus",
    ),
)
    
res = s.add_event_source(req)

if res.event_source_configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->