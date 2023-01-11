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
    
req = operations.AssociateConnectionAliasRequest(
    headers=operations.AssociateConnectionAliasHeaders(
        x_amz_algorithm="hic",
        x_amz_content_sha256="quisquam",
        x_amz_credential="sit",
        x_amz_date="autem",
        x_amz_security_token="sed",
        x_amz_signature="itaque",
        x_amz_signed_headers="qui",
        x_amz_target="WorkspacesService.AssociateConnectionAlias",
    ),
    request=shared.AssociateConnectionAliasRequest(
        alias_id="et",
        resource_id="sequi",
    ),
)
    
res = s.associate_connection_alias(req)

if res.associate_connection_alias_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->