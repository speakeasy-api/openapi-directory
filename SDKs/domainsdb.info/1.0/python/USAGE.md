<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetDomainsTldZoneIDDownloadRequest(
    path_params=operations.GetDomainsTldZoneIDDownloadPathParams(
        zone_id="maxime",
    ),
    query_params=operations.GetDomainsTldZoneIDDownloadQueryParams(
        api_key="omnis",
        date_="voluptas",
    ),
)
    
res = s.domains_.get_domains_tld_zone_id_download(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->