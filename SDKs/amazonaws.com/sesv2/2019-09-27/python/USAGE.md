<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetMetricDataRequest(
    request_body=operations.BatchGetMetricDataRequestBody(
        queries=[
            shared.BatchGetMetricDataQuery(
                dimensions={
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                end_date="2022-05-18T09:34:54.894Z",
                id="deserunt",
                metric="TRANSIENT_BOUNCE",
                namespace="VDM",
                start_date="2022-09-14T09:35:47.986Z",
            ),
            shared.BatchGetMetricDataQuery(
                dimensions={
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                end_date="2022-06-07T15:55:46.205Z",
                id="nisi",
                metric="DELIVERY_COMPLAINT",
                namespace="VDM",
                start_date="2022-10-15T05:10:19.629Z",
            ),
            shared.BatchGetMetricDataQuery(
                dimensions={
                    "veritatis": "deserunt",
                    "perferendis": "ipsam",
                },
                end_date="2020-02-17T21:57:45.117Z",
                id="quo",
                metric="COMPLAINT",
                namespace="VDM",
                start_date="2020-05-23T06:06:25.221Z",
            ),
        ],
    ),
    x_amz_algorithm="maiores",
    x_amz_content_sha256="molestiae",
    x_amz_credential="quod",
    x_amz_date="quod",
    x_amz_security_token="esse",
    x_amz_signature="totam",
    x_amz_signed_headers="porro",
)
    
res = s.batch_get_metric_data(req)

if res.batch_get_metric_data_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->