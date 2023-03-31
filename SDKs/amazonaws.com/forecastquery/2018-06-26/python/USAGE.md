<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.QueryForecastRequest(
    query_forecast_request=shared.QueryForecastRequest(
        end_date="corrupti",
        filters={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        forecast_arn="vel",
        next_token="error",
        start_date="deserunt",
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="AmazonForecastRuntime.QueryForecast",
)
    
res = s.query_forecast(req)

if res.query_forecast_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->