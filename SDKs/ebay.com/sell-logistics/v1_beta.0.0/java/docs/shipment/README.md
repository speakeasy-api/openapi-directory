# shipment

### Available Operations

* [cancelShipment](#cancelshipment) - This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.
* [createFromShippingQuote](#createfromshippingquote) - This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>
* [downloadLabelFile](#downloadlabelfile) - This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->
* [getShipment](#getshipment) - This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

## cancelShipment

This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelShipmentRequest;
import org.openapis.openapi.models.operations.CancelShipmentResponse;
import org.openapis.openapi.models.operations.CancelShipmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelShipmentRequest req = new CancelShipmentRequest("distinctio");            

            CancelShipmentResponse res = sdk.shipment.cancelShipment(req, new CancelShipmentSecurity("quibusdam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shipment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFromShippingQuote

This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFromShippingQuoteResponse;
import org.openapis.openapi.models.operations.CreateFromShippingQuoteSecurity;
import org.openapis.openapi.models.shared.AdditionalOption;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactAddress;
import org.openapis.openapi.models.shared.CreateShipmentFromQuoteRequest;
import org.openapis.openapi.models.shared.PhoneNumber;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateShipmentFromQuoteRequest req = new CreateShipmentFromQuoteRequest() {{
                additionalOptions = new org.openapis.openapi.models.shared.AdditionalOption[]{{
                    add(new AdditionalOption() {{
                        additionalCost = new Amount() {{
                            currency = "nulla";
                            value = "corrupti";
                        }};
                        optionType = "illum";
                    }}),
                    add(new AdditionalOption() {{
                        additionalCost = new Amount() {{
                            currency = "vel";
                            value = "error";
                        }};
                        optionType = "deserunt";
                    }}),
                    add(new AdditionalOption() {{
                        additionalCost = new Amount() {{
                            currency = "suscipit";
                            value = "iure";
                        }};
                        optionType = "magnam";
                    }}),
                }};
                labelCustomMessage = "debitis";
                labelSize = "ipsa";
                rateId = "delectus";
                returnTo = new Contact() {{
                    companyName = "tempora";
                    contactAddress = new ContactAddress() {{
                        addressLine1 = "suscipit";
                        addressLine2 = "molestiae";
                        city = "Schuliststad";
                        countryCode = "KN";
                        county = "excepturi";
                        postalCode = "98030";
                        stateOrProvince = "deserunt";
                    }};;
                    fullName = "perferendis";
                    primaryPhone = new PhoneNumber() {{
                        phoneNumber = "ipsam";
                    }};;
                }};;
                shippingQuoteId = "repellendus";
            }};            

            CreateFromShippingQuoteResponse res = sdk.shipment.createFromShippingQuote(req, new CreateFromShippingQuoteSecurity("sapiente") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shipment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadLabelFile

This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadLabelFileRequest;
import org.openapis.openapi.models.operations.DownloadLabelFileResponse;
import org.openapis.openapi.models.operations.DownloadLabelFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadLabelFileRequest req = new DownloadLabelFileRequest("quo");            

            DownloadLabelFileResponse res = sdk.shipment.downloadLabelFile(req, new DownloadLabelFileSecurity("odit") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShipment

This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShipmentRequest;
import org.openapis.openapi.models.operations.GetShipmentResponse;
import org.openapis.openapi.models.operations.GetShipmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShipmentRequest req = new GetShipmentRequest("at");            

            GetShipmentResponse res = sdk.shipment.getShipment(req, new GetShipmentSecurity("at") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shipment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
