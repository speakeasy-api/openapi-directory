# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/privatenetworks/2021-12-03/go
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
    res, err := s.AcknowledgeOrderReceipt(ctx, operations.AcknowledgeOrderReceiptRequest{
        RequestBody: operations.AcknowledgeOrderReceiptRequestBody{
            OrderArn: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeOrderReceiptResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AcknowledgeOrderReceipt](docs/sdk/README.md#acknowledgeorderreceipt) - Acknowledges that the specified network order was received.
* [ActivateDeviceIdentifier](docs/sdk/README.md#activatedeviceidentifier) - Activates the specified device identifier.
* [ActivateNetworkSite](docs/sdk/README.md#activatenetworksite) - Activates the specified network site.
* [ConfigureAccessPoint](docs/sdk/README.md#configureaccesspoint) - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* [CreateNetwork](docs/sdk/README.md#createnetwork) - Creates a network.
* [CreateNetworkSite](docs/sdk/README.md#createnetworksite) - Creates a network site.
* [DeactivateDeviceIdentifier](docs/sdk/README.md#deactivatedeviceidentifier) - Deactivates the specified device identifier.
* [DeleteNetwork](docs/sdk/README.md#deletenetwork) - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* [DeleteNetworkSite](docs/sdk/README.md#deletenetworksite) - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* [GetDeviceIdentifier](docs/sdk/README.md#getdeviceidentifier) - Gets the specified device identifier.
* [GetNetwork](docs/sdk/README.md#getnetwork) - Gets the specified network.
* [GetNetworkResource](docs/sdk/README.md#getnetworkresource) - Gets the specified network resource.
* [GetNetworkSite](docs/sdk/README.md#getnetworksite) - Gets the specified network site.
* [GetOrder](docs/sdk/README.md#getorder) - Gets the specified order.
* [ListDeviceIdentifiers](docs/sdk/README.md#listdeviceidentifiers) - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListNetworkResources](docs/sdk/README.md#listnetworkresources) - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListNetworkSites](docs/sdk/README.md#listnetworksites) - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* [ListNetworks](docs/sdk/README.md#listnetworks) - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* [ListOrders](docs/sdk/README.md#listorders) - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [Ping](docs/sdk/README.md#ping) - Checks the health of the service.
* [StartNetworkResourceUpdate](docs/sdk/README.md#startnetworkresourceupdate) - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* [TagResource](docs/sdk/README.md#tagresource) -  Adds tags to the specified resource. 
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [UpdateNetworkSite](docs/sdk/README.md#updatenetworksite) - Updates the specified network site.
* [UpdateNetworkSitePlan](docs/sdk/README.md#updatenetworksiteplan) - Updates the specified network site plan.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
