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
    
req = operations.CreateChangesetRequest(
    path_params=operations.CreateChangesetPathParams(
        dataset_id="voluptatem",
    ),
    headers=operations.CreateChangesetHeaders(
        x_amz_algorithm="quidem",
        x_amz_content_sha256="rerum",
        x_amz_credential="id",
        x_amz_date="facilis",
        x_amz_security_token="cum",
        x_amz_signature="occaecati",
        x_amz_signed_headers="quia",
    ),
    request=operations.CreateChangesetRequestBody(
        change_type="REPLACE",
        format_params={
            "ducimus": "unde",
            "nostrum": "illo",
            "eos": "sit",
        },
        format_type="PARQUET",
        source_params={
            "ut": "voluptatum",
            "dolor": "sed",
            "odio": "deserunt",
        },
        source_type="S3",
        tags={
            "sequi": "iure",
            "provident": "eum",
            "repellat": "quia",
        },
    ),
)
    
res = s.create_changeset(req)

if res.create_changeset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->