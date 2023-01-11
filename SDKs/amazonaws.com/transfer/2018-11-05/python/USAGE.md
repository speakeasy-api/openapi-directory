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
    
req = operations.CreateAccessRequest(
    headers=operations.CreateAccessHeaders(
        x_amz_algorithm="eos",
        x_amz_content_sha256="modi",
        x_amz_credential="et",
        x_amz_date="culpa",
        x_amz_security_token="unde",
        x_amz_signature="quae",
        x_amz_signed_headers="incidunt",
        x_amz_target="TransferService.CreateAccess",
    ),
    request=shared.CreateAccessRequest(
        external_id="nam",
        home_directory="optio",
        home_directory_mappings=[
            shared.HomeDirectoryMapEntry(
                entry="ratione",
                target="quaerat",
            ),
            shared.HomeDirectoryMapEntry(
                entry="qui",
                target="modi",
            ),
            shared.HomeDirectoryMapEntry(
                entry="cum",
                target="rem",
            ),
        ],
        home_directory_type="LOGICAL",
        policy="cum",
        posix_profile=shared.PosixProfile(
            gid=5917608095681824334,
            secondary_gids=[
                7738685661617987022,
            ],
            uid=3301601712436159733,
        ),
        role="dolore",
        server_id="placeat",
    ),
)
    
res = s.create_access(req)

if res.create_access_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->