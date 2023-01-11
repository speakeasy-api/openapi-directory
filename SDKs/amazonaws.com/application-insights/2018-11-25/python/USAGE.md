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
    
req = operations.CreateApplicationRequest(
    headers=operations.CreateApplicationHeaders(
        x_amz_algorithm="laudantium",
        x_amz_content_sha256="odio",
        x_amz_credential="deserunt",
        x_amz_date="qui",
        x_amz_security_token="inventore",
        x_amz_signature="omnis",
        x_amz_signed_headers="veritatis",
        x_amz_target="EC2WindowsBarleyService.CreateApplication",
    ),
    request=shared.CreateApplicationRequest(
        cwe_monitor_enabled=False,
        ops_center_enabled=True,
        ops_item_sns_topic_arn="vitae",
        resource_group_name="quia",
        tags=[
            shared.Tag(
                key="adipisci",
                value="cupiditate",
            ),
            shared.Tag(
                key="similique",
                value="omnis",
            ),
        ],
    ),
)
    
res = s.create_application(req)

if res.create_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->