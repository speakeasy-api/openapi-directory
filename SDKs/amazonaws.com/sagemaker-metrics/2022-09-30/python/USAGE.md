<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchPutMetricsRequest(
    request_body=operations.BatchPutMetricsRequestBody(
        metric_data=[
            shared.RawMetricData(
                metric_name="provident",
                step=715190,
                timestamp="2021-03-11T23:22:42.658Z",
                value=8579.46,
            ),
            shared.RawMetricData(
                metric_name="corrupti",
                step=847252,
                timestamp="2022-05-18T09:34:54.894Z",
                value=6458.94,
            ),
            shared.RawMetricData(
                metric_name="suscipit",
                step=437587,
                timestamp="2022-02-09T12:04:06.508Z",
                value=567.13,
            ),
        ],
        trial_component_name="delectus",
    ),
    x_amz_algorithm="tempora",
    x_amz_content_sha256="suscipit",
    x_amz_credential="molestiae",
    x_amz_date="minus",
    x_amz_security_token="placeat",
    x_amz_signature="voluptatum",
    x_amz_signed_headers="iusto",
)
    
res = s.batch_put_metrics(req)

if res.batch_put_metrics_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->