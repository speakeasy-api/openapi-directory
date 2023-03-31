# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/firmalyzer.com/iotvas/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.DeviceFeatures(
    ftp_banner="corrupti",
    hostname="opulent-rabbit.org",
    http_response="unde",
    https_response="nulla",
    nic_mac="corrupti",
    snmp_sysdescr="illum",
    snmp_sysoid="vel",
    telnet_banner="error",
    upnp_response="deserunt",
)
    
res = s.device.detect_device(req, operations.DetectDeviceSecurity(
    api_key_header="YOUR_API_KEY_HERE",
))

if res.device_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### device

* `detect_device` - Detect iot device by service banners and mac address

### firmware

* `get_accounts` - Get default accounts and password hashes of a firmware
* `get_config_issues` - Get default OS configuration issues of a device firmware
* `get_expired_certs` - Get expired digital certificates embedded in a device firmware
* `get_private_keys` - Get private crypto keys embedded in a device firmware
* `get_risk` - Get iot device firmware risk analysis
* `get_weak_certs` - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* `get_weak_keys` - Get weak crypto keys with short length
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
