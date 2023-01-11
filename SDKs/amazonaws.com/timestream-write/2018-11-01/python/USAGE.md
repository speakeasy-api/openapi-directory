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
    
req = operations.CreateDatabaseRequest(
    headers=operations.CreateDatabaseHeaders(
        x_amz_algorithm="omnis",
        x_amz_content_sha256="accusantium",
        x_amz_credential="architecto",
        x_amz_date="omnis",
        x_amz_security_token="porro",
        x_amz_signature="ut",
        x_amz_signed_headers="eius",
        x_amz_target="Timestream_20181101.CreateDatabase",
    ),
    request=shared.CreateDatabaseRequest(
        database_name="beatae",
        kms_key_id="quia",
        tags=[
            shared.Tag(
                key="id",
                value="dolorem",
            ),
            shared.Tag(
                key="et",
                value="quibusdam",
            ),
            shared.Tag(
                key="cupiditate",
                value="eaque",
            ),
        ],
    ),
)
    
res = s.create_database(req)

if res.create_database_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->