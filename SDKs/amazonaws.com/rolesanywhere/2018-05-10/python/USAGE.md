<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateProfileRequest(
    request_body=operations.CreateProfileRequestBody(
        duration_seconds=548814,
        enabled=False,
        managed_policy_arns=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        name="nulla",
        require_instance_properties=False,
        role_arns=[
            "illum",
            "vel",
            "error",
        ],
        session_policy="deserunt",
        tags=[
            shared.Tag(
                key="iure",
                value="magnam",
            ),
            shared.Tag(
                key="debitis",
                value="ipsa",
            ),
        ],
    ),
    x_amz_algorithm="delectus",
    x_amz_content_sha256="tempora",
    x_amz_credential="suscipit",
    x_amz_date="molestiae",
    x_amz_security_token="minus",
    x_amz_signature="placeat",
    x_amz_signed_headers="voluptatum",
)
    
res = s.create_profile(req)

if res.profile_detail_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->