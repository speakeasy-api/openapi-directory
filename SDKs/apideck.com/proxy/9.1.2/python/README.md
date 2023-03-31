# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/proxy/9.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteProxyRequest(
    x_apideck_app_id="corrupti",
    x_apideck_consumer_id="provident",
    x_apideck_downstream_authorization="distinctio",
    x_apideck_downstream_url="quibusdam",
    x_apideck_service_id="unde",
)
    
res = s.execute.delete_proxy(req, operations.DeleteProxySecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.delete_proxy_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### execute

* `delete_proxy` - DELETE
* `get_proxy` - GET
* `options_proxy` - OPTIONS
* `patch_proxy` - PATCH
* `post_proxy` - POST
* `put_proxy` - PUT
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
