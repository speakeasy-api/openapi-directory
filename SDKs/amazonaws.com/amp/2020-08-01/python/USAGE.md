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
    
req = operations.CreateWorkspaceRequest(
    headers=operations.CreateWorkspaceHeaders(
        x_amz_algorithm="commodi",
        x_amz_content_sha256="in",
        x_amz_credential="quibusdam",
        x_amz_date="asperiores",
        x_amz_security_token="quo",
        x_amz_signature="ea",
        x_amz_signed_headers="soluta",
    ),
    request=operations.CreateWorkspaceRequestBody(
        alias="tempora",
        client_token="commodi",
        tags={
            "facere": "in",
            "et": "odit",
        },
    ),
)
    
res = s.create_workspace(req)

if res.create_workspace_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->