<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ExtensionConfigurationRequest(
    headers=operations.ExtensionConfigurationHeaders(
        accept_language="beatae",
        cache_control="aut",
        if_none_match="quia",
        request_timeout=22.200001,
        user_agent="ea",
        x_applecloudextension_retry_count=66.099998,
        x_applecloudextension_session_id="animi",
    ),
)
    
res = s.config.extension_configuration(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->