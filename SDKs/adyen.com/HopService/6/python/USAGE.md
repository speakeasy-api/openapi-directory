<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostGetOnboardingURLRequest(
    security=operations.PostGetOnboardingURLSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="vel",
)
    
res = s.hosted_onboarding_page.post_get_onboarding_url(req)

if res.get_onboarding_url_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->