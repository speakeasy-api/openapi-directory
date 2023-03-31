# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/cloudrf.com/2.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.InterferenceRequest(
    name="corrupti",
    network="provident",
)
    
res = s.analyse.interference(req, operations.InterferenceSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analyse

* `interference` - Find the best server for overlapping coverage
* `mesh` - Merge sites into a super layer.
* `network` - Find the best server for somewhere

### create

* `area` - Create a point-to-multipoint heatmap
* `path` - Point-to-point path profile analysis (Tx to Rx)
* `points` - Point-to-multipoint path profile analysis (Many Tx, one Rx)

### manage

* `add_clutter` - Upload clutter data as GeoJSON
* `delete` - Delete a calculation from the database.
* `delete_network` - Delete an entire network
* `export` - Export a calculation in a GIS file format
* `list` - List calculations from your archive
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
