<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddApplicationCloudWatchLoggingOptionRequest(
    add_application_cloud_watch_logging_option_request=shared.AddApplicationCloudWatchLoggingOptionRequest(
        application_name="corrupti",
        cloud_watch_logging_option=shared.CloudWatchLoggingOption(
            log_stream_arn="provident",
        ),
        conditional_token="distinctio",
        current_application_version_id=844266,
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
)
    
res = s.add_application_cloud_watch_logging_option(req)

if res.add_application_cloud_watch_logging_option_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->