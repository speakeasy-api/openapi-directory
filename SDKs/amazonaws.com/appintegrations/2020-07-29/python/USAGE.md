<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateDataIntegrationRequest(
    request_body=operations.CreateDataIntegrationRequestBody(
        client_token="corrupti",
        description="provident",
        file_configuration=operations.CreateDataIntegrationRequestBodyFileConfiguration(
            filters={
                "quibusdam": [
                    "nulla",
                    "corrupti",
                    "illum",
                ],
                "vel": [
                    "deserunt",
                    "suscipit",
                    "iure",
                ],
                "magnam": [
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
            },
            folders=[
                "minus",
                "placeat",
            ],
        ),
        kms_key="voluptatum",
        name="iusto",
        object_configuration={
            "nisi": {
                "temporibus": [
                    "quis",
                ],
                "veritatis": [
                    "perferendis",
                    "ipsam",
                    "repellendus",
                ],
                "sapiente": [
                    "odit",
                    "at",
                    "at",
                    "maiores",
                ],
                "molestiae": [
                    "quod",
                    "esse",
                    "totam",
                    "porro",
                ],
            },
            "dolorum": {
                "nam": [
                    "occaecati",
                    "fugit",
                    "deleniti",
                ],
            },
            "hic": {
                "totam": [
                    "commodi",
                ],
                "molestiae": [
                    "qui",
                    "impedit",
                ],
                "cum": [
                    "ipsum",
                    "excepturi",
                ],
                "aspernatur": [
                    "ad",
                ],
            },
        },
        schedule_config=operations.CreateDataIntegrationRequestBodyScheduleConfig(
            first_execution_from="natus",
            object="sed",
            schedule_expression="iste",
        ),
        source_uri="dolor",
        tags={
            "laboriosam": "hic",
            "saepe": "fuga",
            "in": "corporis",
        },
    ),
    x_amz_algorithm="iste",
    x_amz_content_sha256="iure",
    x_amz_credential="saepe",
    x_amz_date="quidem",
    x_amz_security_token="architecto",
    x_amz_signature="ipsa",
    x_amz_signed_headers="reiciendis",
)
    
res = s.create_data_integration(req)

if res.create_data_integration_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->