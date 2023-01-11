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
        x_amz_algorithm="voluptatem",
        x_amz_content_sha256="quia",
        x_amz_credential="voluptas",
        x_amz_date="maxime",
        x_amz_security_token="error",
        x_amz_signature="exercitationem",
        x_amz_signed_headers="quisquam",
        x_amz_target="AmazonForecast.CreateDataset",
    ),
    request=shared.CreateDatasetRequest(
        data_frequency="quaerat",
        dataset_name="earum",
        dataset_type="TARGET_TIME_SERIES",
        domain="CUSTOM",
        encryption_config=shared.EncryptionConfig(
            kms_key_arn="ut",
            role_arn="ut",
        ),
        schema=shared.Schema(
            attributes=[
                shared.SchemaAttribute(
                    attribute_name="magni",
                    attribute_type="timestamp",
                ),
                shared.SchemaAttribute(
                    attribute_name="quaerat",
                    attribute_type="timestamp",
                ),
                shared.SchemaAttribute(
                    attribute_name="voluptas",
                    attribute_type="float",
                ),
            ],
        ),
        tags=[
            shared.Tag(
                key="sed",
                value="accusantium",
            ),
            shared.Tag(
                key="repellat",
                value="quam",
            ),
        ],
    ),
)
    
res = s.create_dataset(req)

if res.create_dataset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->