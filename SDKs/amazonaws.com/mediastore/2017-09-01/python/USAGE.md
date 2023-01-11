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
    
req = operations.CreateContainerRequest(
    headers=operations.CreateContainerHeaders(
        x_amz_algorithm="magnam",
        x_amz_content_sha256="veniam",
        x_amz_credential="dolores",
        x_amz_date="rerum",
        x_amz_security_token="et",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="voluptatem",
        x_amz_target="MediaStore_20170901.CreateContainer",
    ),
    request=shared.CreateContainerInput(
        container_name="est",
        tags=[
            shared.Tag(
                key="et",
                value="ea",
            ),
            shared.Tag(
                key="voluptas",
                value="velit",
            ),
            shared.Tag(
                key="ipsa",
                value="in",
            ),
        ],
    ),
)
    
res = s.create_container(req)

if res.create_container_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->