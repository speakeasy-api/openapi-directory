<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETDeleteAlarmsRequest(
    action="DeleteAlarms",
    alarm_names=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    version="2010-08-01",
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
)
    
res = s.get_delete_alarms(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->