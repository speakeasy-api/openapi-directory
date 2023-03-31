# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/contentgroove.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAPIV1ClipsIDRequest(
    id="corrupti",
)
    
res = s.delete_api_v1_clips_id_(req, operations.DeleteAPIV1ClipsIDSecurity(
    bearer_header="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_api_v1_clips_id_` - delete clip
* `delete_api_v1_medias_id_` - delete media
* `delete_api_v1_webhook_subscriptions_id_` - delete webhook subscription
* `get_api_v1_clips` - list clips
* `get_api_v1_clips_id_` - show clip
* `get_api_v1_direct_uploads` - prepare presigned upload url
* `get_api_v1_medias` - list medias
* `get_api_v1_medias_id_` - show media
* `get_api_v1_webhook_subscriptions` - list webhook subscriptions
* `get_api_v1_webhook_subscriptions_id_` - show webhook subscription
* `post_api_v1_clips` - create clip
* `post_api_v1_medias` - create media
* `post_api_v1_webhook_subscriptions` - create webhook subscription
* `put_api_v1_clips_id_` - update clip
* `put_api_v1_medias_id_` - update media
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
