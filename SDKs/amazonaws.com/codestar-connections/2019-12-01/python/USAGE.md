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
    
req = operations.CreateConnectionRequest(
    headers=operations.CreateConnectionHeaders(
        x_amz_algorithm="nobis",
        x_amz_content_sha256="libero",
        x_amz_credential="cumque",
        x_amz_date="accusamus",
        x_amz_security_token="voluptates",
        x_amz_signature="est",
        x_amz_signed_headers="inventore",
        x_amz_target="com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
    ),
    request=shared.CreateConnectionInput(
        connection_name="minima",
        host_arn="iusto",
        provider_type="GitHub",
        tags=[
            shared.Tag(
                key="sed",
                value="quo",
            ),
            shared.Tag(
                key="animi",
                value="et",
            ),
        ],
    ),
)
    
res = s.create_connection(req)

if res.create_connection_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->