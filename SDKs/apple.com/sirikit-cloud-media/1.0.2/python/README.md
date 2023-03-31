# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apple.com/sirikit-cloud-media/1.0.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### config

* `extension_configuration` - Configuration Resource

### intent

* `add_media_intent_handling` - addMedia
* `play_media_intent_handling` - playMedia
* `update_media_affinity_intent_handling` - updateMediaAffinity

### queues

* `play_media_on_queue` - playMedia
* `update_activity_on_queue` - updateActivity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
