<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateSuiteDefinitionRequest(
    request_body=operations.CreateSuiteDefinitionRequestBody(
        suite_definition_configuration=operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration(
            device_permission_role_arn="corrupti",
            devices=[
                shared.DeviceUnderTest(
                    certificate_arn="distinctio",
                    thing_arn="quibusdam",
                ),
                shared.DeviceUnderTest(
                    certificate_arn="unde",
                    thing_arn="nulla",
                ),
                shared.DeviceUnderTest(
                    certificate_arn="corrupti",
                    thing_arn="illum",
                ),
            ],
            intended_for_qualification=False,
            is_long_duration_test=False,
            protocol="MqttV3_1_1",
            root_group="error",
            suite_definition_name="deserunt",
        ),
        tags={
            "iure": "magnam",
            "debitis": "ipsa",
        },
    ),
    x_amz_algorithm="delectus",
    x_amz_content_sha256="tempora",
    x_amz_credential="suscipit",
    x_amz_date="molestiae",
    x_amz_security_token="minus",
    x_amz_signature="placeat",
    x_amz_signed_headers="voluptatum",
)
    
res = s.create_suite_definition(req)

if res.create_suite_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->