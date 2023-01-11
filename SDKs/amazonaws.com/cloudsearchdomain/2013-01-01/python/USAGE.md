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
    
req = operations.SearchRequest(
    query_params=operations.SearchQueryParams(
        cursor="cumque",
        expr="occaecati",
        facet="iusto",
        format="sdk",
        fq="deserunt",
        highlight="maiores",
        partial=False,
        pretty="true",
        q="dolorem",
        q_options="ratione",
        q_parser="dismax",
        return_="excepturi",
        size=3784438660469815446,
        sort="quo",
        start=4099325840936144508,
        stats="vel",
    ),
    headers=operations.SearchHeaders(
        x_amz_algorithm="optio",
        x_amz_content_sha256="at",
        x_amz_credential="a",
        x_amz_date="rerum",
        x_amz_security_token="repudiandae",
        x_amz_signature="praesentium",
        x_amz_signed_headers="tempora",
    ),
)
    
res = s.search(req)

if res.search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->