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
        x_amz_algorithm="dolor",
        x_amz_content_sha256="sit",
        x_amz_credential="non",
        x_amz_date="sed",
        x_amz_security_token="cumque",
        x_amz_signature="architecto",
        x_amz_signed_headers="accusantium",
    ),
    request=operations.CreateConfigurationSetRequestBody(
        configuration_set_name="non",
        delivery_options=operations.CreateConfigurationSetRequestBodyDeliveryOptions(
            sending_pool_name="et",
            tls_policy="REQUIRE",
        ),
        reputation_options=operations.CreateConfigurationSetRequestBodyReputationOptions(
            last_fresh_start="2018-09-28T20:49:02Z",
            reputation_metrics_enabled=True,
        ),
        sending_options=operations.CreateConfigurationSetRequestBodySendingOptions(
            sending_enabled=True,
        ),
        tags=[
            shared.Tag(
                key="reiciendis",
                value="et",
            ),
            shared.Tag(
                key="dolorem",
                value="minus",
            ),
            shared.Tag(
                key="ea",
                value="quaerat",
            ),
        ],
        tracking_options=operations.CreateConfigurationSetRequestBodyTrackingOptions(
            custom_redirect_domain="dolorem",
        ),
    ),
)
    
res = s.create_configuration_set(req)

if res.create_configuration_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->