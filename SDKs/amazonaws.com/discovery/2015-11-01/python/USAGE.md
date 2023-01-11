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
    
req = operations.AssociateConfigurationItemsToApplicationRequest(
    headers=operations.AssociateConfigurationItemsToApplicationHeaders(
        x_amz_algorithm="enim",
        x_amz_content_sha256="sed",
        x_amz_credential="aut",
        x_amz_date="ea",
        x_amz_security_token="magnam",
        x_amz_signature="et",
        x_amz_signed_headers="et",
        x_amz_target="AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
    ),
    request=shared.AssociateConfigurationItemsToApplicationRequest(
        application_configuration_id="eum",
        configuration_ids=[
            "modi",
            "officiis",
        ],
    ),
)
    
res = s.associate_configuration_items_to_application(req)

if res.associate_configuration_items_to_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->