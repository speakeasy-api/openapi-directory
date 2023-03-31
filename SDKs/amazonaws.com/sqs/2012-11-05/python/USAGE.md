<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAddPermissionRequest(
    aws_account_ids=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    account_number=602763,
    action="AddPermission",
    actions=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
    label="deserunt",
    queue_name="suscipit",
    version="2012-11-05",
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
)
    
res = s.get_add_permission(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->