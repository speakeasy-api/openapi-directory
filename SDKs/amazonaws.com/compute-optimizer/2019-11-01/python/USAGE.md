<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteRecommendationPreferencesRequest(
    delete_recommendation_preferences_request=shared.DeleteRecommendationPreferencesRequest(
        recommendation_preference_names=[
            "InferredWorkloadTypes",
            "ExternalMetricsPreference",
            "ExternalMetricsPreference",
        ],
        resource_type="LambdaFunction",
        scope=shared.Scope(
            name="ResourceArn",
            value="corrupti",
        ),
    ),
    x_amz_algorithm="illum",
    x_amz_content_sha256="vel",
    x_amz_credential="error",
    x_amz_date="deserunt",
    x_amz_security_token="suscipit",
    x_amz_signature="iure",
    x_amz_signed_headers="magnam",
    x_amz_target="ComputeOptimizerService.DeleteRecommendationPreferences",
)
    
res = s.delete_recommendation_preferences(req)

if res.delete_recommendation_preferences_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->