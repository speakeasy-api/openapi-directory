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
    
req = operations.GetDeleteAlarmsRequest(
    query_params=operations.GetDeleteAlarmsQueryParams(
        action="DeleteAlarms",
        alarm_names=[
            "omnis",
            "illum",
        ],
        version="2010-08-01",
    ),
    headers=operations.GetDeleteAlarmsHeaders(
        x_amz_algorithm="dolores",
        x_amz_content_sha256="harum",
        x_amz_credential="neque",
        x_amz_date="eligendi",
        x_amz_security_token="et",
        x_amz_signature="aut",
        x_amz_signed_headers="fugiat",
    ),
)
    
res = s.get_delete_alarms(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->