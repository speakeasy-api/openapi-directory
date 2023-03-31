<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateConnectionAliasRequest(
    associate_connection_alias_request=shared.AssociateConnectionAliasRequest(
        alias_id="corrupti",
        resource_id="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="WorkspacesService.AssociateConnectionAlias",
)
    
res = s.associate_connection_alias(req)

if res.associate_connection_alias_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->