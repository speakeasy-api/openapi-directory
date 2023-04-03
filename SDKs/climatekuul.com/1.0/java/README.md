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

import org.openapis.openapi.models.operations.AirtravelCoordinatesRequestBody;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequest;
import org.openapis.openapi.models.operations.AirtravelCoordinatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest() {{
                contentType = "application/x-www-form-urlencoded";
                requestBody = new AirtravelCoordinatesRequestBody() {{
                    apiKeyL1 = "d95fead6-e8a6-4547-9fb9-7835101a3960";
                    apiKeyL2 = "c60f8db5-7204-4427-960d-27400c38b166";
                    destinationAirportLatitude = 24.9056;
                    destinationAirportLongitude = 67.1569;
                    numberOfPassengers = 2;
                    originAirportLatitude = 31.5208;
                    originAirportLongitude = 74.4028;
                    travelClass = "Economy";
                    travelMode = "round trip";
                }};
            }}            

            AirtravelCoordinatesResponse res = sdk.airtravelCoordinates.airtravelCoordinates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### airtravelCoordinates

* `airtravelCoordinates` - airtravelCoordinates
* `confirmCarbonOffset4` - confirmCarbonOffset
* `confirmPayment4` - confirmPayment
* `confirmPaymentOfTransaction4` - confirmTransaction
* `confirmsPlanting4` - confirmPlanting

### ecommerceDelivery

* `confirmCarbonOffset1` - confirmCarbonOffset
* `confirmPayment1` - confirmPayment
* `confirmPaymentOfTransaction1` - confirmTransaction
* `confirmsPlanting2` - confirmPlanting
* `ecommerceDelivery` - ecommerceDelivery

### requestApiKey

* `requestApiKey` - requestApiKey

### roadDistance

* `confirmCarbonOffset5` - confirmCarbonOffset
* `confirmPayment5` - confirmPayment
* `confirmPaymentOfTransaction5` - confirmTransaction
* `confirmsPlanting5` - confirmPlanting
* `roadDistance` - RoadDistance

### urbanDelivery

* `confirmCarbonOffset` - confirmCarbonOffset
* `confirmPayment` - confirmPayment
* `confirmPaymentOfTransaction` - confirmTransaction
* `confirmsPlanting` - confirmPlanting
* `urbanDelivery` - urbanDelivery

### airtravelMultileg

* `airtravelMultileg` - airtravelMultileg
* `confirmCarbonOffset3` - confirmCarbonOffset
* `confirmPayment3` - confirmPayment
* `confirmPaymentOfTransaction3` - confirmTransaction
* `confirmsPlanting3` - confirmPlanting
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
