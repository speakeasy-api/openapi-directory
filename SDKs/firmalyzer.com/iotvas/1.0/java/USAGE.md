<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DetectDeviceDetectPostRequest req = new DetectDeviceDetectPostRequest() {{
                security = new DetectDeviceDetectPostSecurity() {{
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DeviceFeatures() {{
                    ftpBanner = "sit";
                    hostname = "voluptas";
                    httpResponse = "culpa";
                    httpsResponse = "expedita";
                    nicMac = "consequuntur";
                    snmpSysdescr = "dolor";
                    snmpSysoid = "expedita";
                    telnetBanner = "voluptas";
                    upnpResponse = "fugit";
                }};
            }};

            DetectDeviceDetectPostResponse res = sdk.device.detectDeviceDetectPost(req);

            if (res.deviceInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->