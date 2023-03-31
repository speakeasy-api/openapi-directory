<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateConfigurationSetRequest(
    request_body=operations.CreateConfigurationSetRequestBody(
        configuration_set_name="corrupti",
        delivery_options=operations.CreateConfigurationSetRequestBodyDeliveryOptions(
            sending_pool_name="provident",
            tls_policy="OPTIONAL",
        ),
        reputation_options=operations.CreateConfigurationSetRequestBodyReputationOptions(
            last_fresh_start="2021-03-11T23:22:42.658Z",
            reputation_metrics_enabled=False,
        ),
        sending_options=operations.CreateConfigurationSetRequestBodySendingOptions(
            sending_enabled=False,
        ),
        tags=[
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
            shared.Tag(
                key="iure",
                value="magnam",
            ),
        ],
        tracking_options=operations.CreateConfigurationSetRequestBodyTrackingOptions(
            custom_redirect_domain="debitis",
        ),
    ),
    x_amz_algorithm="ipsa",
    x_amz_content_sha256="delectus",
    x_amz_credential="tempora",
    x_amz_date="suscipit",
    x_amz_security_token="molestiae",
    x_amz_signature="minus",
    x_amz_signed_headers="placeat",
)
    
res = s.create_configuration_set(req)

if res.create_configuration_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->