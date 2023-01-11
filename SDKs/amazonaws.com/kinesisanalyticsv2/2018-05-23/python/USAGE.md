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
        x_amz_algorithm="provident",
        x_amz_content_sha256="voluptatem",
        x_amz_credential="veniam",
        x_amz_date="aspernatur",
        x_amz_security_token="sed",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="numquam",
        x_amz_target="KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
    ),
    request=shared.AddApplicationCloudWatchLoggingOptionRequest(
        application_name="et",
        cloud_watch_logging_option=shared.CloudWatchLoggingOption(
            log_stream_arn="nulla",
        ),
        conditional_token="nulla",
        current_application_version_id=8361513412454442989,
    ),
)
    
res = s.add_application_cloud_watch_logging_option(req)

if res.add_application_cloud_watch_logging_option_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->