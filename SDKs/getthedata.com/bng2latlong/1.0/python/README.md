# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/getthedata.com/bng2latlong/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBng2latlongEastingNorthingRequest(
    easting=548814,
    northing=592845,
)
    
res = s.get_bng2latlong_easting_northing_(req)

if res.get_bng2latlong_easting_northing_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_bng2latlong_easting_northing_` - Returns latitude and longitude for the given easting and northing.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
