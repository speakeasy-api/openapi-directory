<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchEvaluateFeatureRequest(
    request_body=operations.BatchEvaluateFeatureRequestBody(
        requests=[
            shared.EvaluationRequest(
                entity_id="provident",
                evaluation_context="distinctio",
                feature="quibusdam",
            ),
            shared.EvaluationRequest(
                entity_id="unde",
                evaluation_context="nulla",
                feature="corrupti",
            ),
            shared.EvaluationRequest(
                entity_id="illum",
                evaluation_context="vel",
                feature="error",
            ),
        ],
    ),
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
    project="tempora",
)
    
res = s.batch_evaluate_feature(req)

if res.batch_evaluate_feature_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->