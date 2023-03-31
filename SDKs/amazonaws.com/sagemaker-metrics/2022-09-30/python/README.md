# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/sagemaker-metrics/2022-09-30/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batch_put_metrics` - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
