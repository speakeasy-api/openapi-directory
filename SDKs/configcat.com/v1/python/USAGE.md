<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic=shared.SchemeBasic(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.GetAuditlogsRequest(
    path_params=operations.GetAuditlogsPathParams(
        product_id="ea",
    ),
    query_params=operations.GetAuditlogsQueryParams(
        audit_log_type={
            "dolor": "voluptatem",
            "illo": "est",
            "reprehenderit": "facilis",
        },
        config_id="aliquid",
        environment_id="iure",
        from_utc_date_time="2004-03-31T03:18:23Z",
        to_utc_date_time="1997-12-15T16:24:08Z",
    ),
)
    
res = s.audit_logs.get_auditlogs(req)

if res.audit_log_item_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->