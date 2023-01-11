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
    
req = operations.CreateConfigurationSetRequest(
    headers=operations.CreateConfigurationSetHeaders(
        x_amz_algorithm="nam",
        x_amz_content_sha256="non",
        x_amz_credential="doloremque",
        x_amz_date="qui",
        x_amz_security_token="quaerat",
        x_amz_signature="natus",
        x_amz_signed_headers="illo",
    ),
    request=operations.CreateConfigurationSetRequestBody(
        configuration_set_name="optio",
        delivery_options=operations.CreateConfigurationSetRequestBodyDeliveryOptions(
            sending_pool_name="reprehenderit",
            tls_policy="REQUIRE",
        ),
        reputation_options=operations.CreateConfigurationSetRequestBodyReputationOptions(
            last_fresh_start="2000-05-10T08:14:20Z",
            reputation_metrics_enabled=False,
        ),
        sending_options=operations.CreateConfigurationSetRequestBodySendingOptions(
            sending_enabled=True,
        ),
        suppression_options=operations.CreateConfigurationSetRequestBodySuppressionOptions(
            suppressed_reasons=[
                "BOUNCE",
                "COMPLAINT",
            ],
        ),
        tags=[
            shared.Tag(
                key="iusto",
                value="esse",
            ),
            shared.Tag(
                key="architecto",
                value="est",
            ),
            shared.Tag(
                key="aliquam",
                value="aut",
            ),
        ],
        tracking_options=operations.CreateConfigurationSetRequestBodyTrackingOptions(
            custom_redirect_domain="corporis",
        ),
    ),
)
    
res = s.create_configuration_set(req)

if res.create_configuration_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->