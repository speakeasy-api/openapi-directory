# Returns

### Available Operations

* [GetReturns](#getreturns) - List Returns
* [PutReturns](#putreturns) - Inform us of an RMA

## GetReturns

Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.

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
    res, err := s.Returns.GetReturns(ctx, operations.GetReturnsRequest{
        FromDate: "voluptatibus",
        Limit: sdk.Int64(55714),
        Page: sdk.Int64(604846),
        ToDate: "voluptate",
    }, operations.GetReturnsSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnsArrayV2 != nil {
        // handle response
    }
}
```

## PutReturns

Inform FDC of an expected return.

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
    res, err := s.Returns.PutReturns(ctx, operations.PutReturnsRmaRequestV2{
        Items: []PutReturnsRmaRequestV2Items{
            operations.PutReturnsRmaRequestV2Items{
                QuantityExpected: 1,
                Sku: "perferendis",
            },
            operations.PutReturnsRmaRequestV2Items{
                QuantityExpected: 1,
                Sku: "doloremque",
            },
            operations.PutReturnsRmaRequestV2Items{
                QuantityExpected: 1,
                Sku: "reprehenderit",
            },
        },
        MerchantOrderID: sdk.String("ut"),
        Recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient{
            Address1: "maiores",
            Address2: sdk.String("dicta"),
            AddressLocality: "corporis",
            AddressRegion: "dolore",
            CompanyName: sdk.String("iusto"),
            Country: "Bouvet Island (Bouvetoya)",
            Email: "Emilie_Thompson@hotmail.com",
            FirstName: "Anissa",
            LastName: "Emmerich",
            Phone: "658.455.9095 x0923",
            PostalCode: sdk.String("68167"),
        },
        RmaNumber: "quibusdam",
    }, operations.PutReturnsSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RmaResponseV2 != nil {
        // handle response
    }
}
```
