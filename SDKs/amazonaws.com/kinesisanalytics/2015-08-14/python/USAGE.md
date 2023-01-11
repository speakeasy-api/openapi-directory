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
    
req = operations.AddApplicationCloudWatchLoggingOptionRequest(
    headers=operations.AddApplicationCloudWatchLoggingOptionHeaders(
        x_amz_algorithm="quia",
        x_amz_content_sha256="earum",
        x_amz_credential="a",
        x_amz_date="alias",
        x_amz_security_token="culpa",
        x_amz_signature="rerum",
        x_amz_signed_headers="maxime",
        x_amz_target="KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
    ),
    request=shared.AddApplicationCloudWatchLoggingOptionRequest(
        application_name="omnis",
        cloud_watch_logging_option=shared.CloudWatchLoggingOption(
            log_stream_arn="eos",
            role_arn="iusto",
        ),
        current_application_version_id=8230610447774493355,
    ),
)
    
res = s.add_application_cloud_watch_logging_option(req)

if res.add_application_cloud_watch_logging_option_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->