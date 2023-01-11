<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MediaTabularExtractsheetRequest(
    query_params=operations.MediaTabularExtractsheetQueryParams(
        arg1="numquam",
        entryid="modi",
        output="quia",
    ),
)
    
res = s.service_media_tabular_extractsheet.media_tabular_extractsheet(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->