# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            DetectDeviceResponse res = sdk.device.detectDevice(req, new DetectDeviceSecurity("suscipit") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [device](docs/device/README.md)

* [detectDevice](docs/device/README.md#detectdevice) - Detect iot device by service banners and mac address

### [firmware](docs/firmware/README.md)

* [getAccounts](docs/firmware/README.md#getaccounts) - Get default accounts and password hashes of a firmware
* [getConfigIssues](docs/firmware/README.md#getconfigissues) - Get default OS configuration issues of a device firmware
* [getExpiredCerts](docs/firmware/README.md#getexpiredcerts) - Get expired digital certificates embedded in a device firmware
* [getPrivateKeys](docs/firmware/README.md#getprivatekeys) - Get private crypto keys embedded in a device firmware
* [getRisk](docs/firmware/README.md#getrisk) - Get iot device firmware risk analysis
* [getWeakCerts](docs/firmware/README.md#getweakcerts) - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* [getWeakKeys](docs/firmware/README.md#getweakkeys) - Get weak crypto keys with short length
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
