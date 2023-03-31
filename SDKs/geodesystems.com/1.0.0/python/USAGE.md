<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MediaTabularExtractsheetRequest(
    arg1="corrupti",
    entryid="provident",
    output="distinctio",
)
    
res = s.service_media_tabular_extractsheet.media_tabular_extractsheet(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->