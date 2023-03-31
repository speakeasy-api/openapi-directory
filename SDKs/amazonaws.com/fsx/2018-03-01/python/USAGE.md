<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateFileSystemAliasesRequest(
    associate_file_system_aliases_request=shared.AssociateFileSystemAliasesRequest(
        aliases=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        client_request_token="unde",
        file_system_id="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
    x_amz_target="AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
)
    
res = s.associate_file_system_aliases(req)

if res.associate_file_system_aliases_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->