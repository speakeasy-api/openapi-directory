<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.GetAuditlogsRequest(
    audit_log_type="integrationLinkAdded",
    config_id="9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    environment_id="05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    from_utc_date_time="2022-02-02T00:14:45.467Z",
    product_id="39205929-396f-4ea7-996e-b10faaa2352c",
    to_utc_date_time="2022-05-24T03:24:11.703Z",
)
    
res = s.audit_logs.get_auditlogs(req)

if res.audit_log_item_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->