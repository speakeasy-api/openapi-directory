<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAccessPointRequest(
    request_body=operations.CreateAccessPointRequestBody(
        client_token="corrupti",
        file_system_id="provident",
        posix_user=operations.CreateAccessPointRequestBodyPosixUser(
            gid=715190,
            secondary_gids=[
                602763,
                857946,
                544883,
                847252,
            ],
            uid=423655,
        ),
        root_directory=operations.CreateAccessPointRequestBodyRootDirectory(
            creation_info=shared.CreationInfo(
                owner_gid=623564,
                owner_uid=645894,
                permissions="suscipit",
            ),
            path="iure",
        ),
        tags=[
            shared.Tag(
                key="debitis",
                value="ipsa",
            ),
            shared.Tag(
                key="delectus",
                value="tempora",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="molestiae",
    x_amz_credential="minus",
    x_amz_date="placeat",
    x_amz_security_token="voluptatum",
    x_amz_signature="iusto",
    x_amz_signed_headers="excepturi",
)
    
res = s.create_access_point(req)

if res.access_point_description is not None:
    # handle response
```
<!-- End SDK Example Usage -->