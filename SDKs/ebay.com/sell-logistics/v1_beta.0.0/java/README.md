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

import org.openapis.openapi.models.operations.CancelShipmentSecurity;
import org.openapis.openapi.models.operations.CancelShipmentPathParams;
import org.openapis.openapi.models.operations.CancelShipmentRequest;
import org.openapis.openapi.models.operations.CancelShipmentResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelShipmentRequest req = new CancelShipmentRequest() {{
                security = new CancelShipmentSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CancelShipmentPathParams() {{
                    shipmentId = "corrupti";
                }};
            }};            

            CancelShipmentResponse res = sdk.shipment.cancelShipment(req);

            if (res.shipment.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### shipment

* `cancelShipment` - This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.
* `createFromShippingQuote` - This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>
* `downloadLabelFile` - This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->
* `getShipment` - This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

### shippingQuote

* `createShippingQuote` - The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.
* `getShippingQuote` - This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
