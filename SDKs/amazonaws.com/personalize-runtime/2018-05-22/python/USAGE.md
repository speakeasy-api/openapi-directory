<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetPersonalizedRankingRequest(
    request_body=operations.GetPersonalizedRankingRequestBody(
        campaign_arn="corrupti",
        context={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        filter_arn="vel",
        filter_values={
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        input_list=[
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        ],
        user_id="placeat",
    ),
    x_amz_algorithm="voluptatum",
    x_amz_content_sha256="iusto",
    x_amz_credential="excepturi",
    x_amz_date="nisi",
    x_amz_security_token="recusandae",
    x_amz_signature="temporibus",
    x_amz_signed_headers="ab",
)
    
res = s.get_personalized_ranking(req)

if res.get_personalized_ranking_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->