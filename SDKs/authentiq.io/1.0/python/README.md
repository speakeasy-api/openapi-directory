# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/authentiq.io/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AuthorizeRequest(
    client_id="corrupti",
    display="provident",
    max_age=715190,
    nonce="quibusdam",
    prompt="unde",
    redirect_uri="nulla",
    response_mode="corrupti",
    response_type="illum",
    scope="vel",
    state="error",
    ui_locales="deserunt",
)
    
res = s.authentication.authorize(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `authorize` - Authenticate a user
* `token` - Obtain an ID Token
* `user_info` - Retrieve a user profile

### client_management

* `client` - List clients
* `client_client_id` - Delete a client
* `create_client` - Register a client
* `get_client` - View a client
* `update_client` - Update a client

### session_management

* `authorize_iframe` - Include a session iframe
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
