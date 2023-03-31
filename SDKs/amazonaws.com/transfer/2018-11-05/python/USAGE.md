<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAccessRequest(
    create_access_request=shared.CreateAccessRequest(
        external_id="corrupti",
        home_directory="provident",
        home_directory_mappings=[
            shared.HomeDirectoryMapEntry(
                entry="quibusdam",
                target="unde",
            ),
            shared.HomeDirectoryMapEntry(
                entry="nulla",
                target="corrupti",
            ),
            shared.HomeDirectoryMapEntry(
                entry="illum",
                target="vel",
            ),
        ],
        home_directory_type="LOGICAL",
        policy="deserunt",
        posix_profile=shared.PosixProfile(
            gid=384382,
            secondary_gids=[
                297534,
                891773,
            ],
            uid=56713,
        ),
        role="delectus",
        server_id="tempora",
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="molestiae",
    x_amz_credential="minus",
    x_amz_date="placeat",
    x_amz_security_token="voluptatum",
    x_amz_signature="iusto",
    x_amz_signed_headers="excepturi",
    x_amz_target="TransferService.CreateAccess",
)
    
res = s.create_access(req)

if res.create_access_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->