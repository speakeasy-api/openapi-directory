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
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeRequest;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimDevicesByClaimCodeRequest req = new ClaimDevicesByClaimCodeRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            ClaimDevicesByClaimCodeResponse res = sdk.claimDevicesByClaimCode(req);

            if (res.claimDevicesByClaimCodeResponse != null) {
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

### [SDK](docs/sdk/README.md)

* [claimDevicesByClaimCode](docs/sdk/README.md#claimdevicesbyclaimcode) - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).
* [describeDevice](docs/sdk/README.md#describedevice) - Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.
* [finalizeDeviceClaim](docs/sdk/README.md#finalizedeviceclaim) - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [getDeviceMethods](docs/sdk/README.md#getdevicemethods) - Given a device ID, returns the invokable methods associated with the device.
* [initiateDeviceClaim](docs/sdk/README.md#initiatedeviceclaim) - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [invokeDeviceMethod](docs/sdk/README.md#invokedevicemethod) - Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.
* [listDeviceEvents](docs/sdk/README.md#listdeviceevents) - Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.
* [listDevices](docs/sdk/README.md#listdevices) - Lists the 1-Click compatible devices associated with your AWS account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with the specified resource ARN.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.
* [unclaimDevice](docs/sdk/README.md#unclaimdevice) - Disassociates a device from your AWS account using its device ID.
* [untagResource](docs/sdk/README.md#untagresource) - Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.
* [updateDeviceState](docs/sdk/README.md#updatedevicestate) - Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
