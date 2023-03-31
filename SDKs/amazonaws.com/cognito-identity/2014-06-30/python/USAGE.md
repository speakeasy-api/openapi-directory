<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateIdentityPoolRequest(
    create_identity_pool_input=shared.CreateIdentityPoolInput(
        allow_classic_flow=False,
        allow_unauthenticated_identities=False,
        cognito_identity_providers=[
            shared.CognitoIdentityProvider(
                client_id="provident",
                provider_name="distinctio",
                server_side_token_check=False,
            ),
            shared.CognitoIdentityProvider(
                client_id="quibusdam",
                provider_name="unde",
                server_side_token_check=False,
            ),
            shared.CognitoIdentityProvider(
                client_id="nulla",
                provider_name="corrupti",
                server_side_token_check=False,
            ),
        ],
        developer_provider_name="illum",
        identity_pool_name="vel",
        identity_pool_tags={
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        open_id_connect_provider_ar_ns=[
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        ],
        saml_provider_ar_ns=[
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
        ],
        supported_login_providers={
            "temporibus": "ab",
            "quis": "veritatis",
            "deserunt": "perferendis",
            "ipsam": "repellendus",
        },
    ),
    x_amz_algorithm="sapiente",
    x_amz_content_sha256="quo",
    x_amz_credential="odit",
    x_amz_date="at",
    x_amz_security_token="at",
    x_amz_signature="maiores",
    x_amz_signed_headers="molestiae",
    x_amz_target="AWSCognitoIdentityService.CreateIdentityPool",
)
    
res = s.create_identity_pool(req)

if res.identity_pool is not None:
    # handle response
```
<!-- End SDK Example Usage -->