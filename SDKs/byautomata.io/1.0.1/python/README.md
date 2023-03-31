# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/byautomata.io/1.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetContentproSearchRequest(
    terms="corrupti",
)
    
res = s.contentpro_search.get_contentpro_search(req)

if res.get_contentpro_search_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### contentpro_search

* `get_contentpro_search` - Send search terms to receive the most relevant articles and companies.

### contentpro_similar_text

* `post_contentpro_similar_text` - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

### search

* `get_search` - Send search terms to receive the most relevant companies along with text snippets.

### similar

* `get_similar` - Send a company website to receive a list of companies related to them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
