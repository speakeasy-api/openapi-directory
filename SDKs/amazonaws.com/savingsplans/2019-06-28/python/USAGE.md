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
    
req = operations.CreateSavingsPlanRequest(
    headers=operations.CreateSavingsPlanHeaders(
        x_amz_algorithm="dolores",
        x_amz_content_sha256="fuga",
        x_amz_credential="et",
        x_amz_date="qui",
        x_amz_security_token="voluptatum",
        x_amz_signature="aut",
        x_amz_signed_headers="distinctio",
    ),
    request=operations.CreateSavingsPlanRequestBody(
        client_token="dicta",
        commitment="tenetur",
        purchase_time="2000-01-09T02:09:05Z",
        savings_plan_offering_id="cupiditate",
        tags={
            "facere": "sequi",
            "rerum": "enim",
            "qui": "unde",
        },
        upfront_payment_amount="assumenda",
    ),
)
    
res = s.create_savings_plan(req)

if res.create_savings_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->