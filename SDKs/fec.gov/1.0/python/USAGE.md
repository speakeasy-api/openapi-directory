<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header_auth="YOUR_API_KEY_HERE",
        api_key_query_auth="YOUR_API_KEY_HERE",
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetAuditCaseRequest(
    api_key="corrupti",
    audit_case_id=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
    audit_id=[
        544883,
        847252,
        423655,
        623564,
    ],
    candidate_id=[
        "suscipit",
        "iure",
        "magnam",
    ],
    committee_designation="debitis",
    committee_id=[
        "delectus",
    ],
    committee_type=[
        "suscipit",
        "molestiae",
    ],
    cycle=[
        812169,
        528895,
        479977,
        568045,
    ],
    max_election_cycle=392785,
    min_election_cycle=925597,
    page=836079,
    per_page=71036,
    primary_category_id="quis",
    q=[
        "deserunt",
    ],
    qq=[
        "ipsam",
    ],
    sort=[
        "sapiente",
        "quo",
        "odit",
        "at",
    ],
    sort_hide_null=False,
    sort_null_only=False,
    sort_nulls_last=False,
    sub_category_id="at",
)
    
res = s.audit.get_audit_case_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->