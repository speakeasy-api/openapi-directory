<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateNodeRequest(
    associate_node_request=shared.AssociateNodeRequest(
        engine_attributes=[
            shared.EngineAttribute(
                name="provident",
                value="distinctio",
            ),
            shared.EngineAttribute(
                name="quibusdam",
                value="unde",
            ),
            shared.EngineAttribute(
                name="nulla",
                value="corrupti",
            ),
        ],
        node_name="illum",
        server_name="vel",
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
    x_amz_target="OpsWorksCM_V2016_11_01.AssociateNode",
)
    
res = s.associate_node(req)

if res.associate_node_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->