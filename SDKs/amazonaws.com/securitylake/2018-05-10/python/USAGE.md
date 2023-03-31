<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAwsLogSourceRequest(
    request_body=operations.CreateAwsLogSourceRequestBody(
        enable_all_dimensions={
            "provident": {
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
            "molestiae": {
                "placeat": [
                    "iusto",
                    "excepturi",
                    "nisi",
                ],
                "recusandae": [
                    "ab",
                    "quis",
                    "veritatis",
                    "deserunt",
                ],
                "perferendis": [
                    "repellendus",
                    "sapiente",
                ],
                "quo": [
                    "at",
                ],
            },
            "at": {
                "molestiae": [
                    "quod",
                    "esse",
                    "totam",
                    "porro",
                ],
                "dolorum": [
                    "nam",
                ],
                "officia": [
                    "fugit",
                    "deleniti",
                    "hic",
                ],
                "optio": [
                    "beatae",
                    "commodi",
                    "molestiae",
                ],
            },
        },
        enable_single_dimension=[
            "qui",
            "impedit",
        ],
        enable_two_dimensions={
            "esse": [
                "excepturi",
            ],
            "aspernatur": [
                "ad",
            ],
            "natus": [
                "iste",
            ],
        },
        input_order=[
            "SOURCE_TYPE",
        ],
    ),
    x_amz_algorithm="laboriosam",
    x_amz_content_sha256="hic",
    x_amz_credential="saepe",
    x_amz_date="fuga",
    x_amz_security_token="in",
    x_amz_signature="corporis",
    x_amz_signed_headers="iste",
)
    
res = s.create_aws_log_source(req)

if res.create_aws_log_source_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->