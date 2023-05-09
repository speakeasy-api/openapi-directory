# SDK

## Overview

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [PostV1OrderFeedback](#postv1orderfeedback) - Feedback the status of an order transaction.
* [PostV1OrderScreen](#postv1orderscreen) - Screen order for payment fraud.

## PostV1OrderFeedback

Feedback the status of an order transaction.

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
    res, err := s.SDK.PostV1OrderFeedback(ctx, operations.PostV1OrderFeedbackRequest{
        Action: operations.PostV1OrderFeedbackActionEnumRejectBlacklist,
        Format: operations.PostV1OrderFeedbackFormatEnumXML.ToPointer(),
        ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
        Key: "perferendis",
        Notes: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderFeedback200ApplicationJSONString != nil {
        // handle response
    }
}
```

## PostV1OrderScreen

Screen order for payment fraud.

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
    res, err := s.SDK.PostV1OrderScreen(ctx, operations.PostV1OrderScreenRequest{
        Amount: sdk.Float64(6176.36),
        AvsResult: sdk.String("sed"),
        BillAddr: sdk.String("iste"),
        BillCity: sdk.String("dolor"),
        BillCountry: sdk.String("natus"),
        BillState: sdk.String("laboriosam"),
        BillZipCode: sdk.String("hic"),
        BinNo: sdk.String("saepe"),
        CardHash: sdk.String("fuga"),
        Currency: sdk.String("in"),
        CvvResult: sdk.String("corporis"),
        Department: sdk.String("iste"),
        Email: sdk.String("Sterling6@yahoo.com"),
        EmailDomain: sdk.String("reiciendis"),
        EmailHash: sdk.String("est"),
        FirstName: sdk.String("Madaline"),
        FlpChecksum: sdk.String("laborum"),
        Format: operations.PostV1OrderScreenFormatEnumJSON.ToPointer(),
        IP: "dolorem",
        Key: "corporis",
        LastName: sdk.String("Champlin"),
        PasswordHash: sdk.String("nobis"),
        PaymentMode: sdk.String("enim"),
        Quantity: sdk.Int64(607831),
        ShipAddr: sdk.String("nemo"),
        ShipCity: sdk.String("minima"),
        ShipCountry: sdk.String("excepturi"),
        ShipState: sdk.String("accusantium"),
        ShipZipCode: sdk.String("iure"),
        UserOrderID: sdk.String("culpa"),
        UserOrderMemo: sdk.String("doloribus"),
        UserPhone: sdk.String("sapiente"),
        UsernameHash: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderScreen200ApplicationJSONString != nil {
        // handle response
    }
}
```
