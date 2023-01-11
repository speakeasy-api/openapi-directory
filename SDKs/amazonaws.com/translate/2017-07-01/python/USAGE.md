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
    
req = operations.CreateParallelDataRequest(
    headers=operations.CreateParallelDataHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="ut",
        x_amz_credential="sapiente",
        x_amz_date="laborum",
        x_amz_security_token="dolor",
        x_amz_signature="accusamus",
        x_amz_signed_headers="pariatur",
        x_amz_target="AWSShineFrontendService_20170701.CreateParallelData",
    ),
    request=shared.CreateParallelDataRequest(
        client_token="eos",
        description="ut",
        encryption_key=shared.EncryptionKey(
            id="animi",
            type="KMS",
        ),
        name="eum",
        parallel_data_config=shared.ParallelDataConfig(
            format="TMX",
            s3_uri="maiores",
        ),
    ),
)
    
res = s.create_parallel_data(req)

if res.create_parallel_data_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->