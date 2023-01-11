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
    
req = operations.CreateSuiteDefinitionRequest(
    headers=operations.CreateSuiteDefinitionHeaders(
        x_amz_algorithm="quia",
        x_amz_content_sha256="cupiditate",
        x_amz_credential="sed",
        x_amz_date="maxime",
        x_amz_security_token="expedita",
        x_amz_signature="consequatur",
        x_amz_signed_headers="excepturi",
    ),
    request=operations.CreateSuiteDefinitionRequestBody(
        suite_definition_configuration=operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration(
            device_permission_role_arn="ut",
            devices=[
                shared.DeviceUnderTest(
                    certificate_arn="sit",
                    thing_arn="aliquid",
                ),
            ],
            intended_for_qualification=False,
            root_group="itaque",
            suite_definition_name="fuga",
        ),
        tags={
            "accusantium": "vel",
        },
    ),
)
    
res = s.create_suite_definition(req)

if res.create_suite_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->