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
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequest;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequestBody;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeOrderReceiptRequest req = new AcknowledgeOrderReceiptRequest(                new AcknowledgeOrderReceiptRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcknowledgeOrderReceiptResponse res = sdk.acknowledgeOrderReceipt(req);

            if (res.acknowledgeOrderReceiptResponse != null) {
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

* [acknowledgeOrderReceipt](docs/sdk/README.md#acknowledgeorderreceipt) - Acknowledges that the specified network order was received.
* [activateDeviceIdentifier](docs/sdk/README.md#activatedeviceidentifier) - Activates the specified device identifier.
* [activateNetworkSite](docs/sdk/README.md#activatenetworksite) - Activates the specified network site.
* [configureAccessPoint](docs/sdk/README.md#configureaccesspoint) - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* [createNetwork](docs/sdk/README.md#createnetwork) - Creates a network.
* [createNetworkSite](docs/sdk/README.md#createnetworksite) - Creates a network site.
* [deactivateDeviceIdentifier](docs/sdk/README.md#deactivatedeviceidentifier) - Deactivates the specified device identifier.
* [deleteNetwork](docs/sdk/README.md#deletenetwork) - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* [deleteNetworkSite](docs/sdk/README.md#deletenetworksite) - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* [getDeviceIdentifier](docs/sdk/README.md#getdeviceidentifier) - Gets the specified device identifier.
* [getNetwork](docs/sdk/README.md#getnetwork) - Gets the specified network.
* [getNetworkResource](docs/sdk/README.md#getnetworkresource) - Gets the specified network resource.
* [getNetworkSite](docs/sdk/README.md#getnetworksite) - Gets the specified network site.
* [getOrder](docs/sdk/README.md#getorder) - Gets the specified order.
* [listDeviceIdentifiers](docs/sdk/README.md#listdeviceidentifiers) - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkResources](docs/sdk/README.md#listnetworkresources) - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkSites](docs/sdk/README.md#listnetworksites) - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* [listNetworks](docs/sdk/README.md#listnetworks) - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* [listOrders](docs/sdk/README.md#listorders) - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [ping](docs/sdk/README.md#ping) - Checks the health of the service.
* [startNetworkResourceUpdate](docs/sdk/README.md#startnetworkresourceupdate) - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* [tagResource](docs/sdk/README.md#tagresource) -  Adds tags to the specified resource. 
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [updateNetworkSite](docs/sdk/README.md#updatenetworksite) - Updates the specified network site.
* [updateNetworkSitePlan](docs/sdk/README.md#updatenetworksiteplan) - Updates the specified network site plan.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
