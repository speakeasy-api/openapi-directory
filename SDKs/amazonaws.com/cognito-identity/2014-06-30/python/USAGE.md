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
    
req = operations.CreateIdentityPoolRequest(
    headers=operations.CreateIdentityPoolHeaders(
        x_amz_algorithm="vitae",
        x_amz_content_sha256="vel",
        x_amz_credential="assumenda",
        x_amz_date="corrupti",
        x_amz_security_token="ad",
        x_amz_signature="eum",
        x_amz_signed_headers="voluptatem",
        x_amz_target="AWSCognitoIdentityService.CreateIdentityPool",
    ),
    request=shared.CreateIdentityPoolInput(
        allow_classic_flow=False,
        allow_unauthenticated_identities=True,
        cognito_identity_providers=[
            shared.CognitoIdentityProvider(
                client_id="consequatur",
                provider_name="non",
                server_side_token_check=True,
            ),
            shared.CognitoIdentityProvider(
                client_id="cum",
                provider_name="eius",
                server_side_token_check=False,
            ),
            shared.CognitoIdentityProvider(
                client_id="nisi",
                provider_name="sit",
                server_side_token_check=True,
            ),
        ],
        developer_provider_name="rerum",
        identity_pool_name="quisquam",
        identity_pool_tags={
            "itaque": "reiciendis",
            "expedita": "itaque",
        },
        open_id_connect_provider_ar_ns=[
            "voluptatum",
        ],
        saml_provider_ar_ns=[
            "modi",
            "adipisci",
        ],
        supported_login_providers={
            "tempora": "illum",
            "quae": "aut",
        },
    ),
)
    
res = s.create_identity_pool(req)

if res.identity_pool is not None:
    # handle response
```
<!-- End SDK Example Usage -->