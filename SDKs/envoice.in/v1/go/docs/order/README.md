# Order

### Available Operations

* [OrderAPIAll](#orderapiall) - Return all orders for the account
* [OrderAPIChangeShippingDetailsForm](#orderapichangeshippingdetailsform) - Change order shipping details
* [OrderAPIChangeShippingDetailsJSON](#orderapichangeshippingdetailsjson) - Change order shipping details
* [OrderAPIChangeShippingDetailsRaw](#orderapichangeshippingdetailsraw) - Change order shipping details
* [OrderAPIChangeStatusForm](#orderapichangestatusform) - Change order status
* [OrderAPIChangeStatusJSON](#orderapichangestatusjson) - Change order status
* [OrderAPIChangeStatusRaw](#orderapichangestatusraw) - Change order status
* [OrderAPIDeleteForm](#orderapideleteform) - Delete an existing order
* [OrderAPIDeleteJSON](#orderapideletejson) - Delete an existing order
* [OrderAPIDeleteRaw](#orderapideleteraw) - Delete an existing order
* [OrderAPIDetails](#orderapidetails) - Return order details
* [OrderAPINewForm](#orderapinewform) - Create an order
* [OrderAPINewJSON](#orderapinewjson) - Create an order
* [OrderAPINewRaw](#orderapinewraw) - Create an order

## OrderAPIAll

Return all orders for the account

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
    res, err := s.Order.OrderAPIAll(ctx, operations.OrderAPIAllRequest{
        QueryOptionsPage: sdk.Int(546885),
        QueryOptionsPageSize: sdk.Int(979574),
        XAuthKey: "incidunt",
        XAuthSecret: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultOrderDetailsAPIModel != nil {
        // handle response
    }
}
```

## OrderAPIChangeShippingDetailsForm

Change order shipping details

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
    res, err := s.Order.OrderAPIChangeShippingDetailsForm(ctx, operations.OrderAPIChangeShippingDetailsFormRequest{
        OrderShippingDetailsAPIModel: shared.OrderShippingDetailsAPIModel{
            Address: sdk.String("2824 Lueilwitz Wall"),
            CountryID: sdk.Int(271653),
            Email: sdk.String("Jacklyn.Wisozk@gmail.com"),
            Name: sdk.String("Cecelia Lakin"),
            PhoneNumber: sdk.String("incidunt"),
        },
        OrderID: 373035,
        XAuthKey: "debitis",
        XAuthSecret: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIChangeShippingDetailsJSON

Change order shipping details

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
    res, err := s.Order.OrderAPIChangeShippingDetailsJSON(ctx, operations.OrderAPIChangeShippingDetailsJSONRequest{
        OrderShippingDetailsAPIModel: shared.OrderShippingDetailsAPIModel{
            Address: sdk.String("76339 Stoltenberg Crossroad"),
            CountryID: sdk.Int(48690),
            Email: sdk.String("Deondre_Harris@hotmail.com"),
            Name: sdk.String("Marsha Heidenreich"),
            PhoneNumber: sdk.String("laboriosam"),
        },
        OrderID: 680515,
        XAuthKey: "voluptatum",
        XAuthSecret: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIChangeShippingDetailsRaw

Change order shipping details

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
    res, err := s.Order.OrderAPIChangeShippingDetailsRaw(ctx, operations.OrderAPIChangeShippingDetailsRawRequest{
        RequestBody: []byte("hic"),
        OrderID: 710529,
        XAuthKey: "debitis",
        XAuthSecret: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIChangeStatusForm

Change order status

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
    res, err := s.Order.OrderAPIChangeStatusForm(ctx, operations.OrderAPIChangeStatusFormRequest{
        ChangeOrderStatusAPIModel: shared.ChangeOrderStatusAPIModel{
            ID: sdk.Int(677115),
            Reason: sdk.String("nostrum"),
            Status: shared.ChangeOrderStatusAPIModelStatusEnumCancelled.ToPointer(),
        },
        XAuthKey: "dolorum",
        XAuthSecret: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIChangeStatusJSON

Change order status

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
    res, err := s.Order.OrderAPIChangeStatusJSON(ctx, operations.OrderAPIChangeStatusJSONRequest{
        ChangeOrderStatusAPIModel: shared.ChangeOrderStatusAPIModel{
            ID: sdk.Int(879235),
            Reason: sdk.String("tempora"),
            Status: shared.ChangeOrderStatusAPIModelStatusEnumOnHold.ToPointer(),
        },
        XAuthKey: "fugit",
        XAuthSecret: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIChangeStatusRaw

Change order status

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
    res, err := s.Order.OrderAPIChangeStatusRaw(ctx, operations.OrderAPIChangeStatusRawRequest{
        RequestBody: []byte("fugiat"),
        XAuthKey: "voluptatem",
        XAuthSecret: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrderAPIDeleteForm

Delete an existing order

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
    res, err := s.Order.OrderAPIDeleteForm(ctx, operations.OrderAPIDeleteFormRequest{
        OrderDeleteAPIModel: shared.OrderDeleteAPIModel{
            ID: sdk.Int(710337),
        },
        XAuthKey: "magnam",
        XAuthSecret: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## OrderAPIDeleteJSON

Delete an existing order

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
    res, err := s.Order.OrderAPIDeleteJSON(ctx, operations.OrderAPIDeleteJSONRequest{
        OrderDeleteAPIModel: shared.OrderDeleteAPIModel{
            ID: sdk.Int(460220),
        },
        XAuthKey: "ipsam",
        XAuthSecret: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## OrderAPIDeleteRaw

Delete an existing order

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
    res, err := s.Order.OrderAPIDeleteRaw(ctx, operations.OrderAPIDeleteRawRequest{
        RequestBody: []byte("voluptatum"),
        XAuthKey: "quas",
        XAuthSecret: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## OrderAPIDetails

Return order details

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
    res, err := s.Order.OrderAPIDetails(ctx, operations.OrderAPIDetailsRequest{
        ID: 361151,
        XAuthKey: "et",
        XAuthSecret: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## OrderAPINewForm

Create an order

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
    res, err := s.Order.OrderAPINewForm(ctx, operations.OrderAPINewFormRequest{
        OrderCreateAPIModel: shared.OrderCreateAPIModel{
            AfterPaymentDescription: sdk.String("ex"),
            Attachments: []shared.OrderAttachmentAPIModel{
                shared.OrderAttachmentAPIModel{
                    Link: sdk.String("sit"),
                    ObfuscatedFileName: sdk.String("vel"),
                    OriginalFileName: sdk.String("nostrum"),
                    Size: sdk.Int64(906172),
                    Type: shared.OrderAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            CouponCode: sdk.String("consequatur"),
            CurrencyID: sdk.Int(279068),
            Description: sdk.String("reiciendis"),
            DiscountAmount: sdk.Float64(2097.5),
            Items: []shared.OrderItemAPIModel{
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(1157.03),
                    Description: sdk.String("architecto"),
                    ProductItemID: sdk.Int(577140),
                    Quantity: sdk.Float64(2897.76),
                    ReferenceID: sdk.String("quidem"),
                    SubTotalAmount: sdk.Float64(5390.74),
                    TaxAmount: sdk.Float64(6719.57),
                    TaxID: sdk.Int(724148),
                    TaxPercentage: sdk.Float64(9488.61),
                    TotalAmount: sdk.Float64(3888.67),
                    WorkTypeID: sdk.Int(2703),
                },
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(2270.84),
                    Description: sdk.String("deserunt"),
                    ProductItemID: sdk.Int(454860),
                    Quantity: sdk.Float64(6003.92),
                    ReferenceID: sdk.String("reiciendis"),
                    SubTotalAmount: sdk.Float64(5887.4),
                    TaxAmount: sdk.Float64(8338.19),
                    TaxID: sdk.Int(962771),
                    TaxPercentage: sdk.Float64(9147.91),
                    TotalAmount: sdk.Float64(168.71),
                    WorkTypeID: sdk.Int(667285),
                },
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(6964.83),
                    Description: sdk.String("reprehenderit"),
                    ProductItemID: sdk.Int(813679),
                    Quantity: sdk.Float64(6850.92),
                    ReferenceID: sdk.String("praesentium"),
                    SubTotalAmount: sdk.Float64(6485.98),
                    TaxAmount: sdk.Float64(3339.65),
                    TaxID: sdk.Int(29100),
                    TaxPercentage: sdk.Float64(7908.4),
                    TotalAmount: sdk.Float64(9195.32),
                    WorkTypeID: sdk.Int(97243),
                },
            },
            Name: sdk.String("Mitchell Zboncak"),
            Note: sdk.String("quidem"),
            OrderBillingDetails: &shared.OrderBillingDetailsAPIModel{
                Address: sdk.String("042 Jenkins Mill"),
                CountryID: sdk.Int(623295),
                Email: sdk.String("Sherman.Thompson@hotmail.com"),
                Name: sdk.String("Tara Wuckert"),
                PhoneNumber: sdk.String("error"),
            },
            OrderShippingDetails: &shared.OrderShippingDetailsAPIModel{
                Address: sdk.String("3955 Theresia Port"),
                CountryID: sdk.Int(829898),
                Email: sdk.String("Vivianne.Baumbach3@gmail.com"),
                Name: sdk.String("Bonnie Halvorson"),
                PhoneNumber: sdk.String("a"),
            },
            ProductID: sdk.Int(562783),
            Referral: sdk.String("magnam"),
            ShippingAmount: sdk.Float64(9063.55),
            ShippingDescription: sdk.String("consequuntur"),
            Status: shared.OrderCreateAPIModelStatusEnumOnHold.ToPointer(),
            SubTotalAmount: sdk.Float64(8863.05),
            TaxAmount: sdk.Float64(5979.37),
            TotalAmount: sdk.Float64(4463.94),
            WhatHappensNextDescription: sdk.String("adipisci"),
        },
        XAuthKey: "eveniet",
        XAuthSecret: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## OrderAPINewJSON

Create an order

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
    res, err := s.Order.OrderAPINewJSON(ctx, operations.OrderAPINewJSONRequest{
        OrderCreateAPIModel: shared.OrderCreateAPIModel{
            AfterPaymentDescription: sdk.String("consequuntur"),
            Attachments: []shared.OrderAttachmentAPIModel{
                shared.OrderAttachmentAPIModel{
                    Link: sdk.String("id"),
                    ObfuscatedFileName: sdk.String("quis"),
                    OriginalFileName: sdk.String("reprehenderit"),
                    Size: sdk.Int64(625528),
                    Type: shared.OrderAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            CouponCode: sdk.String("corporis"),
            CurrencyID: sdk.Int(696463),
            Description: sdk.String("eveniet"),
            DiscountAmount: sdk.Float64(2473.99),
            Items: []shared.OrderItemAPIModel{
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(396.15),
                    Description: sdk.String("iure"),
                    ProductItemID: sdk.Int(59944),
                    Quantity: sdk.Float64(5176.12),
                    ReferenceID: sdk.String("quae"),
                    SubTotalAmount: sdk.Float64(4746.68),
                    TaxAmount: sdk.Float64(9077.33),
                    TaxID: sdk.Int(184362),
                    TaxPercentage: sdk.Float64(7398.84),
                    TotalAmount: sdk.Float64(4347.61),
                    WorkTypeID: sdk.Int(898063),
                },
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(1875.52),
                    Description: sdk.String("laborum"),
                    ProductItemID: sdk.Int(715208),
                    Quantity: sdk.Float64(5289.4),
                    ReferenceID: sdk.String("rem"),
                    SubTotalAmount: sdk.Float64(3044.46),
                    TaxAmount: sdk.Float64(3205.65),
                    TaxID: sdk.Int(997963),
                    TaxPercentage: sdk.Float64(30.99),
                    TotalAmount: sdk.Float64(3621.89),
                    WorkTypeID: sdk.Int(597303),
                },
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(4706.49),
                    Description: sdk.String("mollitia"),
                    ProductItemID: sdk.Int(378245),
                    Quantity: sdk.Float64(51.89),
                    ReferenceID: sdk.String("maiores"),
                    SubTotalAmount: sdk.Float64(9702.22),
                    TaxAmount: sdk.Float64(1746.58),
                    TaxID: sdk.Int(663866),
                    TaxPercentage: sdk.Float64(3279.88),
                    TotalAmount: sdk.Float64(2931.44),
                    WorkTypeID: sdk.Int(680349),
                },
                shared.OrderItemAPIModel{
                    Cost: sdk.Float64(2003.64),
                    Description: sdk.String("quae"),
                    ProductItemID: sdk.Int(925703),
                    Quantity: sdk.Float64(6072.49),
                    ReferenceID: sdk.String("quaerat"),
                    SubTotalAmount: sdk.Float64(4776.46),
                    TaxAmount: sdk.Float64(4032.18),
                    TaxID: sdk.Int(284000),
                    TaxPercentage: sdk.Float64(6330.62),
                    TotalAmount: sdk.Float64(2384.13),
                    WorkTypeID: sdk.Int(890653),
                },
            },
            Name: sdk.String("Andre Hills"),
            Note: sdk.String("provident"),
            OrderBillingDetails: &shared.OrderBillingDetailsAPIModel{
                Address: sdk.String("4951 Ava Plains"),
                CountryID: sdk.Int(343392),
                Email: sdk.String("Lane.Schuster@yahoo.com"),
                Name: sdk.String("Ruth Zulauf"),
                PhoneNumber: sdk.String("in"),
            },
            OrderShippingDetails: &shared.OrderShippingDetailsAPIModel{
                Address: sdk.String("966 Gleichner Wall"),
                CountryID: sdk.Int(564064),
                Email: sdk.String("Verna69@hotmail.com"),
                Name: sdk.String("Regina Bode"),
                PhoneNumber: sdk.String("quae"),
            },
            ProductID: sdk.Int(21688),
            Referral: sdk.String("velit"),
            ShippingAmount: sdk.Float64(1372.51),
            ShippingDescription: sdk.String("eum"),
            Status: shared.OrderCreateAPIModelStatusEnumShipped.ToPointer(),
            SubTotalAmount: sdk.Float64(5219.96),
            TaxAmount: sdk.Float64(8710.83),
            TotalAmount: sdk.Float64(7730.84),
            WhatHappensNextDescription: sdk.String("eos"),
        },
        XAuthKey: "sapiente",
        XAuthSecret: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## OrderAPINewRaw

Create an order

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
    res, err := s.Order.OrderAPINewRaw(ctx, operations.OrderAPINewRawRequest{
        RequestBody: []byte("dicta"),
        XAuthKey: "minima",
        XAuthSecret: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```
