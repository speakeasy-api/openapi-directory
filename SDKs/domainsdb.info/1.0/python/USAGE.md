<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetDomainsTldZoneIDDownloadRequest(
    api_key="corrupti",
    date_="provident",
    zone_id="distinctio",
)
    
res = s.domains.get_domains_tld_zone_id_download(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->