<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateConnectionRequest(
    create_connection_input=shared.CreateConnectionInput(
        connection_name="corrupti",
        host_arn="provident",
        provider_type="GitHubEnterpriseServer",
        tags=[
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                value="error",
            ),
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
)
    
res = s.create_connection(req)

if res.create_connection_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->