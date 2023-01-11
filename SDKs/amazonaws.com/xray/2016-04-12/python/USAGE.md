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
    
req = operations.BatchGetTracesRequest(
    query_params=operations.BatchGetTracesQueryParams(
        next_token="ut",
    ),
    headers=operations.BatchGetTracesHeaders(
        x_amz_algorithm="possimus",
        x_amz_content_sha256="iusto",
        x_amz_credential="illum",
        x_amz_date="ex",
        x_amz_security_token="eos",
        x_amz_signature="asperiores",
        x_amz_signed_headers="dicta",
    ),
    request=operations.BatchGetTracesRequestBody(
        next_token="sunt",
        trace_ids=[
            "omnis",
            "nobis",
            "et",
        ],
    ),
)
    
res = s.batch_get_traces(req)

if res.batch_get_traces_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->