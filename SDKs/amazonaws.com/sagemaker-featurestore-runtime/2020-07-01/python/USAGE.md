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
    
req = operations.BatchGetRecordRequest(
    headers=operations.BatchGetRecordHeaders(
        x_amz_algorithm="alias",
        x_amz_content_sha256="reprehenderit",
        x_amz_credential="non",
        x_amz_date="quia",
        x_amz_security_token="sed",
        x_amz_signature="consequatur",
        x_amz_signed_headers="fuga",
    ),
    request=operations.BatchGetRecordRequestBody(
        identifiers=[
            shared.BatchGetRecordIdentifier(
                feature_group_name="aliquid",
                feature_names=[
                    "unde",
                    "ducimus",
                    "ut",
                ],
                record_identifiers_value_as_string=[
                    "quidem",
                    "nulla",
                ],
            ),
        ],
    ),
)
    
res = s.batch_get_record(req)

if res.batch_get_record_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->