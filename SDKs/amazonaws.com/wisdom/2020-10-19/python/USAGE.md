<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAssistantRequest(
    request_body=operations.CreateAssistantRequestBody(
        client_token="corrupti",
        description="provident",
        name="distinctio",
        server_side_encryption_configuration=operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration(
            kms_key_id="quibusdam",
        ),
        tags={
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
        type="AGENT",
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
)
    
res = s.create_assistant(req)

if res.create_assistant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->