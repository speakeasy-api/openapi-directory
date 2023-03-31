<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateSlackChannelConfigurationRequest(
    request_body=operations.CreateSlackChannelConfigurationRequestBody(
        channel_id="corrupti",
        channel_name="provident",
        channel_role_arn="distinctio",
        notify_on_add_correspondence_to_case=False,
        notify_on_case_severity="high",
        notify_on_create_or_reopen_case=False,
        notify_on_resolve_case=False,
        team_id="unde",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.create_slack_channel_configuration(req)

if res.create_slack_channel_configuration_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->