<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ExtensionConfigurationRequest(
    accept_language="corrupti",
    cache_control="provident",
    if_none_match="distinctio",
    request_timeout=8442.66,
    user_agent="unde",
    x_applecloudextension_retry_count=8579.46,
    x_applecloudextension_session_id="corrupti",
)
    
res = s.config.extension_configuration(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->