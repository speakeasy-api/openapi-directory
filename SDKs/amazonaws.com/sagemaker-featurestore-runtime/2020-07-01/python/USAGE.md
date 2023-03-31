<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetRecordRequest(
    request_body=operations.BatchGetRecordRequestBody(
        identifiers=[
            shared.BatchGetRecordIdentifier(
                feature_group_name="provident",
                feature_names=[
                    "quibusdam",
                    "unde",
                    "nulla",
                ],
                record_identifiers_value_as_string=[
                    "illum",
                    "vel",
                    "error",
                ],
            ),
            shared.BatchGetRecordIdentifier(
                feature_group_name="deserunt",
                feature_names=[
                    "iure",
                    "magnam",
                ],
                record_identifiers_value_as_string=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
            ),
            shared.BatchGetRecordIdentifier(
                feature_group_name="molestiae",
                feature_names=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                record_identifiers_value_as_string=[
                    "recusandae",
                    "temporibus",
                ],
            ),
        ],
    ),
    x_amz_algorithm="ab",
    x_amz_content_sha256="quis",
    x_amz_credential="veritatis",
    x_amz_date="deserunt",
    x_amz_security_token="perferendis",
    x_amz_signature="ipsam",
    x_amz_signed_headers="repellendus",
)
    
res = s.batch_get_record(req)

if res.batch_get_record_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->