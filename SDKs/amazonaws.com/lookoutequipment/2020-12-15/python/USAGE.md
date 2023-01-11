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
    
req = operations.CreateDatasetRequest(
    headers=operations.CreateDatasetHeaders(
        x_amz_algorithm="voluptas",
        x_amz_content_sha256="est",
        x_amz_credential="voluptates",
        x_amz_date="repellat",
        x_amz_security_token="eligendi",
        x_amz_signature="adipisci",
        x_amz_signed_headers="sit",
        x_amz_target="AWSLookoutEquipmentFrontendService.CreateDataset",
    ),
    request=shared.CreateDatasetRequest(
        client_token="atque",
        dataset_name="odio",
        dataset_schema=shared.DatasetSchema(
            inline_data_schema="quam",
        ),
        server_side_kms_key_id="ut",
        tags=[
            shared.Tag(
                key="voluptas",
                value="in",
            ),
        ],
    ),
)
    
res = s.create_dataset(req)

if res.create_dataset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->