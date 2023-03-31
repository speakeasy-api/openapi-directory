<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateContainerRequest(
    create_container_input=shared.CreateContainerInput(
        container_name="corrupti",
        tags=[
            shared.Tag(
                key="distinctio",
                value="quibusdam",
            ),
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
    x_amz_target="MediaStore_20170901.CreateContainer",
)
    
res = s.create_container(req)

if res.create_container_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->