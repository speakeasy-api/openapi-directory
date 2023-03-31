<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateParallelDataRequest(
    create_parallel_data_request=shared.CreateParallelDataRequest(
        client_token="corrupti",
        description="provident",
        encryption_key=shared.EncryptionKey(
            id="distinctio",
            type="KMS",
        ),
        name="quibusdam",
        parallel_data_config=shared.ParallelDataConfig(
            format="CSV",
            s3_uri="nulla",
        ),
        tags=[
            shared.Tag(
                key="illum",
                value="vel",
            ),
            shared.Tag(
                key="error",
                value="deserunt",
            ),
            shared.Tag(
                key="suscipit",
                value="iure",
            ),
        ],
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
    x_amz_target="AWSShineFrontendService_20170701.CreateParallelData",
)
    
res = s.create_parallel_data(req)

if res.create_parallel_data_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->