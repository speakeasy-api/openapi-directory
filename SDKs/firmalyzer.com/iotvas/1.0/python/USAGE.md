<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DetectDeviceDetectPostRequest(
    security=operations.DetectDeviceDetectPostSecurity(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.DeviceFeatures(
        ftp_banner="ad",
        hostname="autem",
        http_response="adipisci",
        https_response="cumque",
        nic_mac="sunt",
        snmp_sysdescr="deleniti",
        snmp_sysoid="qui",
        telnet_banner="et",
        upnp_response="quia",
    ),
)
    
res = s.device.detect_device_detect_post(req)

if res.device_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->