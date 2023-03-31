<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateDatasetRequest(
    create_dataset_request=shared.CreateDatasetRequest(
        client_token="corrupti",
        dataset_name="provident",
        dataset_schema=shared.DatasetSchema(
            inline_data_schema="distinctio",
        ),
        server_side_kms_key_id="quibusdam",
        tags=[
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
            shared.Tag(
                key="error",
                value="deserunt",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="AWSLookoutEquipmentFrontendService.CreateDataset",
)
    
res = s.create_dataset(req)

if res.create_dataset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->