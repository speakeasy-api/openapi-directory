# shippingQuote

### Available Operations

* [createShippingQuote](#createshippingquote) - The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.
* [getShippingQuote](#getshippingquote) - This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

## createShippingQuote

The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShippingQuoteRequest;
import org.openapis.openapi.models.operations.CreateShippingQuoteResponse;
import org.openapis.openapi.models.operations.CreateShippingQuoteSecurity;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactAddress;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.PackageSpecification;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.ShippingQuoteRequest;
import org.openapis.openapi.models.shared.Weight;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateShippingQuoteRequest req = new CreateShippingQuoteRequest(                new ShippingQuoteRequest() {{
                                orders = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        channel = "molestiae";
                                        orderId = "quod";
                                    }}),
                                    add(new Order() {{
                                        channel = "quod";
                                        orderId = "esse";
                                    }}),
                                    add(new Order() {{
                                        channel = "totam";
                                        orderId = "porro";
                                    }}),
                                    add(new Order() {{
                                        channel = "dolorum";
                                        orderId = "dicta";
                                    }}),
                                }};
                                packageSpecification = new PackageSpecification() {{
                                    dimensions = new Dimensions() {{
                                        height = "nam";
                                        length = "officia";
                                        unit = "occaecati";
                                        width = "fugit";
                                    }};;
                                    weight = new Weight() {{
                                        unit = "deleniti";
                                        value = "hic";
                                    }};;
                                }};;
                                shipFrom = new Contact() {{
                                    companyName = "optio";
                                    contactAddress = new ContactAddress() {{
                                        addressLine1 = "totam";
                                        addressLine2 = "beatae";
                                        city = "Jarenboro";
                                        countryCode = "CM";
                                        county = "impedit";
                                        postalCode = "42510-3616";
                                        stateOrProvince = "dolor";
                                    }};;
                                    fullName = "natus";
                                    primaryPhone = new PhoneNumber() {{
                                        phoneNumber = "laboriosam";
                                    }};;
                                }};;
                                shipTo = new Contact() {{
                                    companyName = "hic";
                                    contactAddress = new ContactAddress() {{
                                        addressLine1 = "saepe";
                                        addressLine2 = "fuga";
                                        city = "Floyfurt";
                                        countryCode = "IS";
                                        county = "saepe";
                                        postalCode = "00966-6123";
                                        stateOrProvince = "explicabo";
                                    }};;
                                    fullName = "nobis";
                                    primaryPhone = new PhoneNumber() {{
                                        phoneNumber = "enim";
                                    }};;
                                }};;
                            }};, "omnis");            

            CreateShippingQuoteResponse res = sdk.shippingQuote.createShippingQuote(req, new CreateShippingQuoteSecurity("nemo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shippingQuote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShippingQuote

This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShippingQuoteRequest;
import org.openapis.openapi.models.operations.GetShippingQuoteResponse;
import org.openapis.openapi.models.operations.GetShippingQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShippingQuoteRequest req = new GetShippingQuoteRequest("minima");            

            GetShippingQuoteResponse res = sdk.shippingQuote.getShippingQuote(req, new GetShippingQuoteSecurity("excepturi") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shippingQuote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
