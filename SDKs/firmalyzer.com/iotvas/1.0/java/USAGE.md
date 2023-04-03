<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DetectDeviceSecurity;
import org.openapis.openapi.models.operations.DetectDeviceResponse;
import org.openapis.openapi.models.shared.DeviceFeatures;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeviceFeatures req = new DeviceFeatures() {{
                ftpBanner = "corrupti";
                hostname = "opulent-rabbit.org";
                httpResponse = "unde";
                httpsResponse = "nulla";
                nicMac = "corrupti";
                snmpSysdescr = "illum";
                snmpSysoid = "vel";
                telnetBanner = "error";
                upnpResponse = "deserunt";
            }}            

            DetectDeviceResponse res = sdk.device.detectDevice(req, new DetectDeviceSecurity() {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->