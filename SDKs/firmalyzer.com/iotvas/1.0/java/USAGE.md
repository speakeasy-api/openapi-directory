<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DetectDeviceSecurity;
import org.openapis.openapi.models.operations.DetectDeviceRequest;
import org.openapis.openapi.models.operations.DetectDeviceResponse;
import org.openapis.openapi.models.shared.DeviceFeatures;
import org.openapis.openapi.models.shared.SchemeAPIKeyHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DetectDeviceRequest req = new DetectDeviceRequest() {{
                security = new DetectDeviceSecurity() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DeviceFeatures() {{
                    ftpBanner = "corrupti";
                    hostname = "opulent-rabbit.org";
                    httpResponse = "unde";
                    httpsResponse = "nulla";
                    nicMac = "corrupti";
                    snmpSysdescr = "illum";
                    snmpSysoid = "vel";
                    telnetBanner = "error";
                    upnpResponse = "deserunt";
                }};
            }};            

            DetectDeviceResponse res = sdk.device.detectDevice(req);

            if (res.deviceInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->