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
    
req = operations.CreateEventIntegrationRequest(
    headers=operations.CreateEventIntegrationHeaders(
        x_amz_algorithm="asperiores",
        x_amz_content_sha256="voluptatem",
        x_amz_credential="hic",
        x_amz_date="doloribus",
        x_amz_security_token="corrupti",
        x_amz_signature="nemo",
        x_amz_signed_headers="architecto",
    ),
    request=operations.CreateEventIntegrationRequestBody(
        client_token="neque",
        description="autem",
        event_bridge_bus="saepe",
        event_filter=operations.CreateEventIntegrationRequestBodyEventFilter(
            source="voluptatem",
        ),
        name="error",
        tags={
            "in": "mollitia",
            "autem": "distinctio",
            "consequuntur": "autem",
        },
    ),
)
    
res = s.create_event_integration(req)

if res.create_event_integration_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->