<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateMonitorRequest(
    request_body=operations.CreateMonitorRequestBody(
        client_token="corrupti",
        max_city_networks_to_monitor=592845,
        monitor_name="distinctio",
        resources=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        tags={
            "error": "deserunt",
            "suscipit": "iure",
        },
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.create_monitor(req)

if res.create_monitor_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->