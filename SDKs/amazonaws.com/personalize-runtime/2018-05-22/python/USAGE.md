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
    
req = operations.GetPersonalizedRankingRequest(
    headers=operations.GetPersonalizedRankingHeaders(
        x_amz_algorithm="sapiente",
        x_amz_content_sha256="molestiae",
        x_amz_credential="aut",
        x_amz_date="illo",
        x_amz_security_token="sapiente",
        x_amz_signature="quisquam",
        x_amz_signed_headers="ad",
    ),
    request=operations.GetPersonalizedRankingRequestBody(
        campaign_arn="incidunt",
        context={
            "suscipit": "officiis",
            "cum": "totam",
        },
        filter_arn="mollitia",
        filter_values={
            "quos": "beatae",
        },
        input_list=[
            "dolor",
            "veritatis",
            "dicta",
        ],
        user_id="consequatur",
    ),
)
    
res = s.get_personalized_ranking(req)

if res.get_personalized_ranking_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->