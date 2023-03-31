<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateApplicationRequest(
    create_application_request=shared.CreateApplicationRequest(
        auto_config_enabled=False,
        auto_create=False,
        cwe_monitor_enabled=False,
        grouping_type="ACCOUNT_BASED",
        ops_center_enabled=False,
        ops_item_sns_topic_arn="corrupti",
        resource_group_name="provident",
        tags=[
            shared.Tag(
                key="quibusdam",
                value="unde",
            ),
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
        ],
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
    x_amz_target="EC2WindowsBarleyService.CreateApplication",
)
    
res = s.create_application(req)

if res.create_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->