# Shipment

### Available Operations

* [CancelShipment](#cancelshipment) - This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.
* [CreateFromShippingQuote](#createfromshippingquote) - This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>
* [DownloadLabelFile](#downloadlabelfile) - This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->
* [GetShipment](#getshipment) - This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

## CancelShipment

This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.

### Example Usage

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
    res, err := s.Shipment.CancelShipment(ctx, operations.CancelShipmentRequest{
        ShipmentID: "provident",
    }, operations.CancelShipmentSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Shipment != nil {
        // handle response
    }
}
```

## CreateFromShippingQuote

This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipment.CreateFromShippingQuote(ctx, shared.CreateShipmentFromQuoteRequest{
        AdditionalOptions: []shared.AdditionalOption{
            shared.AdditionalOption{
                AdditionalCost: &shared.Amount{
                    Currency: sdk.String("quibusdam"),
                    Value: sdk.String("unde"),
                },
                OptionType: sdk.String("nulla"),
            },
            shared.AdditionalOption{
                AdditionalCost: &shared.Amount{
                    Currency: sdk.String("corrupti"),
                    Value: sdk.String("illum"),
                },
                OptionType: sdk.String("vel"),
            },
            shared.AdditionalOption{
                AdditionalCost: &shared.Amount{
                    Currency: sdk.String("error"),
                    Value: sdk.String("deserunt"),
                },
                OptionType: sdk.String("suscipit"),
            },
        },
        LabelCustomMessage: sdk.String("iure"),
        LabelSize: sdk.String("magnam"),
        RateID: sdk.String("debitis"),
        ReturnTo: &shared.Contact{
            CompanyName: sdk.String("ipsa"),
            ContactAddress: &shared.ContactAddress{
                AddressLine1: sdk.String("delectus"),
                AddressLine2: sdk.String("tempora"),
                City: sdk.String("South Paxton"),
                CountryCode: sdk.String("SL"),
                County: sdk.String("voluptatum"),
                PostalCode: sdk.String("53980"),
                StateOrProvince: sdk.String("quis"),
            },
            FullName: sdk.String("veritatis"),
            PrimaryPhone: &shared.PhoneNumber{
                PhoneNumber: sdk.String("deserunt"),
            },
        },
        ShippingQuoteID: sdk.String("perferendis"),
    }, operations.CreateFromShippingQuoteSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Shipment != nil {
        // handle response
    }
}
```

## DownloadLabelFile

This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->

### Example Usage

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
    res, err := s.Shipment.DownloadLabelFile(ctx, operations.DownloadLabelFileRequest{
        ShipmentID: "ipsam",
    }, operations.DownloadLabelFileSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetShipment

This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

### Example Usage

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
    res, err := s.Shipment.GetShipment(ctx, operations.GetShipmentRequest{
        ShipmentID: "repellendus",
    }, operations.GetShipmentSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Shipment != nil {
        // handle response
    }
}
```
