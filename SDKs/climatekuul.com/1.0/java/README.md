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
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequest;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequestBody;
import org.openapis.openapi.models.operations.AirtravelCoordinatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest("application/x-www-form-urlencoded") {{
                requestBody = new AirtravelCoordinatesRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", 24.9056, 67.1569, 2, 31.5208, 74.4028, "Economy", "round trip");;
            }};            

            AirtravelCoordinatesResponse res = sdk.airtravelCoordinates.airtravelCoordinates(req);

            if (res.statusCode == 200) {
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


### [airtravelCoordinates](docs/airtravelcoordinates/README.md)

* [airtravelCoordinates](docs/airtravelcoordinates/README.md#airtravelcoordinates) - airtravelCoordinates
* [confirmCarbonOffset4](docs/airtravelcoordinates/README.md#confirmcarbonoffset4) - confirmCarbonOffset
* [confirmPayment4](docs/airtravelcoordinates/README.md#confirmpayment4) - confirmPayment
* [confirmPaymentOfTransaction4](docs/airtravelcoordinates/README.md#confirmpaymentoftransaction4) - confirmTransaction
* [confirmsPlanting4](docs/airtravelcoordinates/README.md#confirmsplanting4) - confirmPlanting

### [ecommerceDelivery](docs/ecommercedelivery/README.md)

* [confirmCarbonOffset1](docs/ecommercedelivery/README.md#confirmcarbonoffset1) - confirmCarbonOffset
* [confirmPayment1](docs/ecommercedelivery/README.md#confirmpayment1) - confirmPayment
* [confirmPaymentOfTransaction1](docs/ecommercedelivery/README.md#confirmpaymentoftransaction1) - confirmTransaction
* [confirmsPlanting2](docs/ecommercedelivery/README.md#confirmsplanting2) - confirmPlanting
* [ecommerceDelivery](docs/ecommercedelivery/README.md#ecommercedelivery) - ecommerceDelivery

### [requestApiKey](docs/requestapikey/README.md)

* [requestApiKey](docs/requestapikey/README.md#requestapikey) - requestApiKey

### [roadDistance](docs/roaddistance/README.md)

* [confirmCarbonOffset5](docs/roaddistance/README.md#confirmcarbonoffset5) - confirmCarbonOffset
* [confirmPayment5](docs/roaddistance/README.md#confirmpayment5) - confirmPayment
* [confirmPaymentOfTransaction5](docs/roaddistance/README.md#confirmpaymentoftransaction5) - confirmTransaction
* [confirmsPlanting5](docs/roaddistance/README.md#confirmsplanting5) - confirmPlanting
* [roadDistance](docs/roaddistance/README.md#roaddistance) - RoadDistance

### [urbanDelivery](docs/urbandelivery/README.md)

* [confirmCarbonOffset](docs/urbandelivery/README.md#confirmcarbonoffset) - confirmCarbonOffset
* [confirmPayment](docs/urbandelivery/README.md#confirmpayment) - confirmPayment
* [confirmPaymentOfTransaction](docs/urbandelivery/README.md#confirmpaymentoftransaction) - confirmTransaction
* [confirmsPlanting](docs/urbandelivery/README.md#confirmsplanting) - confirmPlanting
* [urbanDelivery](docs/urbandelivery/README.md#urbandelivery) - urbanDelivery

### [airtravelMultileg](docs/airtravelmultileg/README.md)

* [airtravelMultileg](docs/airtravelmultileg/README.md#airtravelmultileg) - airtravelMultileg
* [confirmCarbonOffset3](docs/airtravelmultileg/README.md#confirmcarbonoffset3) - confirmCarbonOffset
* [confirmPayment3](docs/airtravelmultileg/README.md#confirmpayment3) - confirmPayment
* [confirmPaymentOfTransaction3](docs/airtravelmultileg/README.md#confirmpaymentoftransaction3) - confirmTransaction
* [confirmsPlanting3](docs/airtravelmultileg/README.md#confirmsplanting3) - confirmPlanting
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
