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
    
req = operations.CreateAccessPointRequest(
    headers=operations.CreateAccessPointHeaders(
        x_amz_algorithm="vero",
        x_amz_content_sha256="debitis",
        x_amz_credential="vitae",
        x_amz_date="illo",
        x_amz_security_token="dolor",
        x_amz_signature="aut",
        x_amz_signed_headers="corrupti",
    ),
    request=operations.CreateAccessPointRequestBody(
        client_token="iusto",
        file_system_id="necessitatibus",
        posix_user=operations.CreateAccessPointRequestBodyPosixUser(
            gid=9099396917438780945,
            secondary_gids=[
                7393415062790344033,
                5573655011999427817,
            ],
            uid=3450856630666814463,
        ),
        root_directory=operations.CreateAccessPointRequestBodyRootDirectory(
            creation_info=shared.CreationInfo(
                owner_gid=2817162217093611776,
                owner_uid=2020632354827331984,
                permissions="magni",
            ),
            path="nostrum",
        ),
        tags=[
            shared.Tag(
                key="tenetur",
                value="numquam",
            ),
        ],
    ),
)
    
res = s.create_access_point(req)

if res.access_point_description is not None:
    # handle response
```
<!-- End SDK Example Usage -->