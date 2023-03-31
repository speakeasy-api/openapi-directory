<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateConfigurationItemsToApplicationRequest(
    associate_configuration_items_to_application_request=shared.AssociateConfigurationItemsToApplicationRequest(
        application_configuration_id="corrupti",
        configuration_ids=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
    x_amz_target="AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
)
    
res = s.associate_configuration_items_to_application(req)

if res.associate_configuration_items_to_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->