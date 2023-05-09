# device

### Available Operations

* [detectDevice](#detectdevice) - Detect iot device by service banners and mac address

## detectDevice

Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectDeviceResponse;
import org.openapis.openapi.models.operations.DetectDeviceSecurity;
import org.openapis.openapi.models.shared.DeviceFeatures;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeviceFeatures req = new DeviceFeatures() {{
                ftpBanner = "iure";
                hostname = "fond-teen.com";
                httpResponse = "delectus";
                httpsResponse = "tempora";
                nicMac = "suscipit";
                snmpSysdescr = "molestiae";
                snmpSysoid = "minus";
                telnetBanner = "placeat";
                upnpResponse = "voluptatum";
            }};            

            DetectDeviceResponse res = sdk.device.detectDevice(req, new DetectDeviceSecurity("iusto") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.deviceInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
