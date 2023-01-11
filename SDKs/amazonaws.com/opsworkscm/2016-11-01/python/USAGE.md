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
    
req = operations.AssociateNodeRequest(
    headers=operations.AssociateNodeHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="rem",
        x_amz_credential="quas",
        x_amz_date="animi",
        x_amz_security_token="saepe",
        x_amz_signature="harum",
        x_amz_signed_headers="animi",
        x_amz_target="OpsWorksCM_V2016_11_01.AssociateNode",
    ),
    request=shared.AssociateNodeRequest(
        engine_attributes=[
            shared.EngineAttribute(
                name="optio",
                value="amet",
            ),
            shared.EngineAttribute(
                name="eaque",
                value="qui",
            ),
        ],
        node_name="et",
        server_name="ex",
    ),
)
    
res = s.associate_node(req)

if res.associate_node_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->