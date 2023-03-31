# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/circl.lu/hashlookup/1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetChildrenRequest(
    count=548814,
    cursor="provident",
    sha1="distinctio",
)
    
res = s.default.get_children(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### default

* `get_children` - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* `get_info` - Info about the hashlookup database
* `get_lookup_md5` - Lookup MD5.
* `get_lookup_sha1` - Lookup SHA-1.
* `get_lookup_sha256` - Lookup SHA-256.
* `get_parents` - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* `get_session_create` - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* `get_session_matches` - Return set of matching and non-matching hashes from a session.
* `get_stattop` - Return the top 100 of most queried values.
* `post_bulkmd5` - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* `post_bulksha1` - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
