<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAPIRequest(
    request_body=operations.CreateAPIRequestBody(
        api_key_selection_expression="corrupti",
        cors_configuration=operations.CreateAPIRequestBodyCorsConfiguration(
            allow_credentials=False,
            allow_headers=[
                "distinctio",
                "quibusdam",
                "unde",
            ],
            allow_methods=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
            allow_origins=[
                "suscipit",
                "iure",
                "magnam",
            ],
            expose_headers=[
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            ],
            max_age=477665,
        ),
        credentials_arn="minus",
        description="placeat",
        disable_execute_api_endpoint=False,
        disable_schema_validation=False,
        name="voluptatum",
        protocol_type="WEBSOCKET",
        route_key="excepturi",
        route_selection_expression="nisi",
        tags={
            "temporibus": "ab",
            "quis": "veritatis",
            "deserunt": "perferendis",
            "ipsam": "repellendus",
        },
        target="sapiente",
        version="quo",
    ),
    x_amz_algorithm="odit",
    x_amz_content_sha256="at",
    x_amz_credential="at",
    x_amz_date="maiores",
    x_amz_security_token="molestiae",
    x_amz_signature="quod",
    x_amz_signed_headers="quod",
)
    
res = s.create_api(req)

if res.create_api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->