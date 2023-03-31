# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/asuarez.dev/searchly/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody(
    content="corrupti",
)
    
res = s.similarity.src_searchly_api_v1_controllers_similarity_by_content(req)

if res.api_response_similarity is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### similarity

* `src_searchly_api_v1_controllers_similarity_by_content` - API endpoint to search similarity using content
* `src_searchly_api_v1_controllers_similarity_by_song` - API endpoint to search similarity using a song identifier

### song

* `src_searchly_api_v1_controllers_song_search` - API endpoint to search songs from the database given a query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
