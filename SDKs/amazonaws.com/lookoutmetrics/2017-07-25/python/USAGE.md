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
    
req = operations.ActivateAnomalyDetectorRequest(
    headers=operations.ActivateAnomalyDetectorHeaders(
        x_amz_algorithm="aliquid",
        x_amz_content_sha256="quasi",
        x_amz_credential="impedit",
        x_amz_date="tempora",
        x_amz_security_token="consequatur",
        x_amz_signature="eos",
        x_amz_signed_headers="non",
    ),
    request=operations.ActivateAnomalyDetectorRequestBody(
        anomaly_detector_arn="nesciunt",
    ),
)
    
res = s.activate_anomaly_detector(req)

if res.activate_anomaly_detector_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->