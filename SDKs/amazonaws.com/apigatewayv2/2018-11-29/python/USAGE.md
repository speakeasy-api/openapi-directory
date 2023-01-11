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
    
req = operations.CreateAPIRequest(
    headers=operations.CreateAPIHeaders(
        x_amz_algorithm="ex",
        x_amz_content_sha256="iure",
        x_amz_credential="et",
        x_amz_date="quos",
        x_amz_security_token="et",
        x_amz_signature="explicabo",
        x_amz_signed_headers="necessitatibus",
    ),
    request=operations.CreateAPIRequestBody(
        api_key_selection_expression="veniam",
        cors_configuration=operations.CreateAPIRequestBodyCorsConfiguration(
            allow_credentials={
                "in": "odit",
            },
            allow_headers={
                "corporis": "tenetur",
                "esse": "similique",
                "mollitia": "id",
            },
            allow_methods={
                "quam": "maiores",
                "totam": "iusto",
                "aperiam": "repellendus",
            },
            allow_origins={
                "eum": "earum",
                "et": "officia",
            },
            expose_headers={
                "dolor": "quia",
            },
            max_age={
                "ea": "et",
                "expedita": "recusandae",
            },
        ),
        credentials_arn="qui",
        description="qui",
        disable_execute_api_endpoint=False,
        disable_schema_validation=True,
        name="cupiditate",
        protocol_type="WEBSOCKET",
        route_key="saepe",
        route_selection_expression="sed",
        tags={
            "vel": "fugiat",
            "nesciunt": "et",
            "qui": "quis",
        },
        target="eligendi",
        version="velit",
    ),
)
    
res = s.create_api(req)

if res.create_api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->