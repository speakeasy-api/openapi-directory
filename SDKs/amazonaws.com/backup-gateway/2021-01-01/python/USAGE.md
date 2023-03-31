<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateGatewayToServerRequest(
    associate_gateway_to_server_input=shared.AssociateGatewayToServerInput(
        gateway_arn="corrupti",
        server_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="BackupOnPremises_v20210101.AssociateGatewayToServer",
)
    
res = s.associate_gateway_to_server(req)

if res.associate_gateway_to_server_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->