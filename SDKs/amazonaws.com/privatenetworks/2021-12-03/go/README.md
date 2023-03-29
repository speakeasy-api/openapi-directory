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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AcknowledgeOrderReceiptRequest{
        Headers: operations.AcknowledgeOrderReceiptHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AcknowledgeOrderReceiptRequestBody{
            OrderArn: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.AcknowledgeOrderReceipt(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AcknowledgeOrderReceipt` - Acknowledges that the specified network order was received.
* `ActivateDeviceIdentifier` - Activates the specified device identifier.
* `ActivateNetworkSite` - Activates the specified network site.
* `ConfigureAccessPoint` - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* `CreateNetwork` - Creates a network.
* `CreateNetworkSite` - Creates a network site.
* `DeactivateDeviceIdentifier` - Deactivates the specified device identifier.
* `DeleteNetwork` - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* `DeleteNetworkSite` - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* `GetDeviceIdentifier` - Gets the specified device identifier.
* `GetNetwork` - Gets the specified network.
* `GetNetworkResource` - Gets the specified network resource.
* `GetNetworkSite` - Gets the specified network site.
* `GetOrder` - Gets the specified order.
* `ListDeviceIdentifiers` - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* `ListNetworkResources` - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* `ListNetworkSites` - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* `ListNetworks` - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* `ListOrders` - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* `ListTagsForResource` - Lists the tags for the specified resource.
* `Ping` - Checks the health of the service.
* `StartNetworkResourceUpdate` - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* `TagResource` -  Adds tags to the specified resource. 
* `UntagResource` - Removes tags from the specified resource.
* `UpdateNetworkSite` - Updates the specified network site.
* `UpdateNetworkSitePlan` - Updates the specified network site plan.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
