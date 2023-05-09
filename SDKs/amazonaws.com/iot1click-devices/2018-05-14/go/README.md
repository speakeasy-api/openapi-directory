# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot1click-devices/2018-05-14/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ClaimDevicesByClaimCode(ctx, operations.ClaimDevicesByClaimCodeRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ClaimCode: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimDevicesByClaimCodeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ClaimDevicesByClaimCode](docs/sdk/README.md#claimdevicesbyclaimcode) - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 received a claim code with the device(s).
* [DescribeDevice](docs/sdk/README.md#describedevice) - Given a device ID, returns a DescribeDeviceResponse object describing the
 details of the device.
* [FinalizeDeviceClaim](docs/sdk/README.md#finalizedeviceclaim) - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [GetDeviceMethods](docs/sdk/README.md#getdevicemethods) - Given a device ID, returns the invokable methods associated with the device.
* [InitiateDeviceClaim](docs/sdk/README.md#initiatedeviceclaim) - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 <p>Claiming a device consists of initiating a claim, then publishing a device event,
 and finalizing the claim. For a device of type button, a device event can
 be published by simply clicking the device.</p>
 </note>
* [InvokeDeviceMethod](docs/sdk/README.md#invokedevicemethod) - Given a device ID, issues a request to invoke a named device method (with possible
 parameters). See the "Example POST" code snippet below.
* [ListDeviceEvents](docs/sdk/README.md#listdeviceevents) - Using a device ID, returns a DeviceEventsResponse object containing an
 array of events for the device.
* [ListDevices](docs/sdk/README.md#listdevices) - Lists the 1-Click compatible devices associated with your AWS account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with the specified resource ARN.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
 resource.
* [UnclaimDevice](docs/sdk/README.md#unclaimdevice) - Disassociates a device from your AWS account using its device ID.
* [UntagResource](docs/sdk/README.md#untagresource) - Using tag keys, deletes the tags (key/value pairs) associated with the specified
 resource ARN.
* [UpdateDeviceState](docs/sdk/README.md#updatedevicestate) - Using a Boolean value (true or false), this operation
 enables or disables the device given a device ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
