<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.SearchRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    cursor="illum",
    expr="vel",
    facet="error",
    format="sdk",
    fq="deserunt",
    highlight="suscipit",
    partial=False,
    pretty="true",
    q="iure",
    q_options="magnam",
    q_parser="dismax",
    return_="ipsa",
    size=963663,
    sort="tempora",
    start=383441,
    stats="molestiae",
)
    
res = s.search(req)

if res.search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->