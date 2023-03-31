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