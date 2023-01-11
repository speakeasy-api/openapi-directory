<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header_auth=shared.SchemeAPIKeyHeaderAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
        api_key_query_auth=shared.SchemeAPIKeyQueryAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetAuditCaseRequest(
    query_params=operations.GetAuditCaseQueryParams(
        api_key="consequatur",
        audit_case_id=[
            "officia",
            "nihil",
        ],
        audit_id=[
            7756699698972645173,
            5607289564857015942,
        ],
        candidate_id=[
            "necessitatibus",
            "iste",
        ],
        committee_designation="ea",
        committee_id=[
            "sed",
        ],
        committee_type=[
            "aliquam",
            "nisi",
        ],
        cycle=[
            8156228904820113242,
            5947285951484731198,
        ],
        max_election_cycle=869561943583408486,
        min_election_cycle=3655237301516905859,
        page=2909554718741390322,
        per_page=6600351355182752240,
        primary_category_id="non",
        q=[
            "delectus",
        ],
        qq=[
            "minus",
        ],
        sort=[
            "eos",
            "quaerat",
            "quasi",
        ],
        sort_hide_null=False,
        sort_null_only=True,
        sort_nulls_last=False,
        sub_category_id="officia",
    ),
)
    
res = s.audit.get_audit_case_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->