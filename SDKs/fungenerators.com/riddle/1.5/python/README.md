# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/fungenerators.com/riddle/1.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteRiddleRequest(
    id="corrupti",
)
    
res = s.private_riddles.delete_riddle(req, operations.DeleteRiddleSecurity(
    x_fungenerators_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### private_riddles

* `delete_riddle` - Create a random Riddle entry.
* `get_riddle` - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* `post_riddle` - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* `put_riddle` - Create a random Riddle entry.

### random_riddle

* `get_riddle_random` - Get a random riddle for a given category(optional)
* `get_riddle_search` - Search for random riddle which has the text in the query, for a given category(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
