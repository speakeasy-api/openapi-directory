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
    
req = operations.QueryForecastRequest(
    headers=operations.QueryForecastHeaders(
        x_amz_algorithm="quo",
        x_amz_content_sha256="vero",
        x_amz_credential="incidunt",
        x_amz_date="vel",
        x_amz_security_token="exercitationem",
        x_amz_signature="laudantium",
        x_amz_signed_headers="sed",
        x_amz_target="AmazonForecastRuntime.QueryForecast",
    ),
    request=shared.QueryForecastRequest(
        end_date="dolore",
        filters={
            "qui": "omnis",
        },
        forecast_arn="modi",
        next_token="occaecati",
        start_date="dolor",
    ),
)
    
res = s.query_forecast(req)

if res.query_forecast_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->