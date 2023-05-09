# ShippingQuote

### Available Operations

* [CreateShippingQuote](#createshippingquote) - The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.
* [GetShippingQuote](#getshippingquote) - This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

## CreateShippingQuote

The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ShippingQuote.CreateShippingQuote(ctx, operations.CreateShippingQuoteRequest{
        ShippingQuoteRequest: shared.ShippingQuoteRequest{
            Orders: []shared.Order{
                shared.Order{
                    Channel: sdk.String("quo"),
                    OrderID: sdk.String("odit"),
                },
                shared.Order{
                    Channel: sdk.String("at"),
                    OrderID: sdk.String("at"),
                },
                shared.Order{
                    Channel: sdk.String("maiores"),
                    OrderID: sdk.String("molestiae"),
                },
                shared.Order{
                    Channel: sdk.String("quod"),
                    OrderID: sdk.String("quod"),
                },
            },
            PackageSpecification: &shared.PackageSpecification{
                Dimensions: &shared.Dimensions{
                    Height: sdk.String("esse"),
                    Length: sdk.String("totam"),
                    Unit: sdk.String("porro"),
                    Width: sdk.String("dolorum"),
                },
                Weight: &shared.Weight{
                    Unit: sdk.String("dicta"),
                    Value: sdk.String("nam"),
                },
            },
            ShipFrom: &shared.Contact{
                CompanyName: sdk.String("officia"),
                ContactAddress: &shared.ContactAddress{
                    AddressLine1: sdk.String("occaecati"),
                    AddressLine2: sdk.String("fugit"),
                    City: sdk.String("Tyrelfort"),
                    CountryCode: sdk.String("LK"),
                    County: sdk.String("beatae"),
                    PostalCode: sdk.String("42177"),
                    StateOrProvince: sdk.String("esse"),
                },
                FullName: sdk.String("ipsum"),
                PrimaryPhone: &shared.PhoneNumber{
                    PhoneNumber: sdk.String("excepturi"),
                },
            },
            ShipTo: &shared.Contact{
                CompanyName: sdk.String("aspernatur"),
                ContactAddress: &shared.ContactAddress{
                    AddressLine1: sdk.String("perferendis"),
                    AddressLine2: sdk.String("ad"),
                    City: sdk.String("Cormierfurt"),
                    CountryCode: sdk.String("CZ"),
                    County: sdk.String("natus"),
                    PostalCode: sdk.String("99643"),
                    StateOrProvince: sdk.String("iste"),
                },
                FullName: sdk.String("iure"),
                PrimaryPhone: &shared.PhoneNumber{
                    PhoneNumber: sdk.String("saepe"),
                },
            },
        },
        XEbayCMarketplaceID: "quidem",
    }, operations.CreateShippingQuoteSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingQuote != nil {
        // handle response
    }
}
```

## GetShippingQuote

This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

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
    res, err := s.ShippingQuote.GetShippingQuote(ctx, operations.GetShippingQuoteRequest{
        ShippingQuoteID: "architecto",
    }, operations.GetShippingQuoteSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingQuote != nil {
        // handle response
    }
}
```
