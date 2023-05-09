# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/climatekuul.com/1.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AirtravelCoordinates.AirtravelCoordinates(ctx, operations.AirtravelCoordinatesRequest{
        ContentType: "application/x-www-form-urlencoded",
        RequestBody: &operations.AirtravelCoordinatesRequestBody{
            APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
            APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
            DestinationAirportLatitude: 24.9056,
            DestinationAirportLongitude: 67.1569,
            NumberOfPassengers: 2,
            OriginAirportLatitude: 31.5208,
            OriginAirportLongitude: 74.4028,
            TravelClass: "Economy",
            TravelMode: "round trip",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AirtravelCoordinates](docs/airtravelcoordinates/README.md)

* [AirtravelCoordinates](docs/airtravelcoordinates/README.md#airtravelcoordinates) - airtravelCoordinates
* [ConfirmCarbonOffset4](docs/airtravelcoordinates/README.md#confirmcarbonoffset4) - confirmCarbonOffset
* [ConfirmPayment4](docs/airtravelcoordinates/README.md#confirmpayment4) - confirmPayment
* [ConfirmPaymentOfTransaction4](docs/airtravelcoordinates/README.md#confirmpaymentoftransaction4) - confirmTransaction
* [ConfirmsPlanting4](docs/airtravelcoordinates/README.md#confirmsplanting4) - confirmPlanting

### [EcommerceDelivery](docs/ecommercedelivery/README.md)

* [ConfirmCarbonOffset1](docs/ecommercedelivery/README.md#confirmcarbonoffset1) - confirmCarbonOffset
* [ConfirmPayment1](docs/ecommercedelivery/README.md#confirmpayment1) - confirmPayment
* [ConfirmPaymentOfTransaction1](docs/ecommercedelivery/README.md#confirmpaymentoftransaction1) - confirmTransaction
* [ConfirmsPlanting2](docs/ecommercedelivery/README.md#confirmsplanting2) - confirmPlanting
* [EcommerceDelivery](docs/ecommercedelivery/README.md#ecommercedelivery) - ecommerceDelivery

### [RequestAPIKey](docs/requestapikey/README.md)

* [RequestAPIKey](docs/requestapikey/README.md#requestapikey) - requestApiKey

### [RoadDistance](docs/roaddistance/README.md)

* [ConfirmCarbonOffset5](docs/roaddistance/README.md#confirmcarbonoffset5) - confirmCarbonOffset
* [ConfirmPayment5](docs/roaddistance/README.md#confirmpayment5) - confirmPayment
* [ConfirmPaymentOfTransaction5](docs/roaddistance/README.md#confirmpaymentoftransaction5) - confirmTransaction
* [ConfirmsPlanting5](docs/roaddistance/README.md#confirmsplanting5) - confirmPlanting
* [RoadDistance](docs/roaddistance/README.md#roaddistance) - RoadDistance

### [UrbanDelivery](docs/urbandelivery/README.md)

* [ConfirmCarbonOffset](docs/urbandelivery/README.md#confirmcarbonoffset) - confirmCarbonOffset
* [ConfirmPayment](docs/urbandelivery/README.md#confirmpayment) - confirmPayment
* [ConfirmPaymentOfTransaction](docs/urbandelivery/README.md#confirmpaymentoftransaction) - confirmTransaction
* [ConfirmsPlanting](docs/urbandelivery/README.md#confirmsplanting) - confirmPlanting
* [UrbanDelivery](docs/urbandelivery/README.md#urbandelivery) - urbanDelivery

### [AirtravelMultileg](docs/airtravelmultileg/README.md)

* [AirtravelMultileg](docs/airtravelmultileg/README.md#airtravelmultileg) - airtravelMultileg
* [ConfirmCarbonOffset3](docs/airtravelmultileg/README.md#confirmcarbonoffset3) - confirmCarbonOffset
* [ConfirmPayment3](docs/airtravelmultileg/README.md#confirmpayment3) - confirmPayment
* [ConfirmPaymentOfTransaction3](docs/airtravelmultileg/README.md#confirmpaymentoftransaction3) - confirmTransaction
* [ConfirmsPlanting3](docs/airtravelmultileg/README.md#confirmsplanting3) - confirmPlanting
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
