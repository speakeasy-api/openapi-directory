# Product

### Available Operations

* [ProductAPIAll](#productapiall) - Return all products for the account
* [ProductAPIDeleteForm](#productapideleteform) - Delete an existing product
* [ProductAPIDeleteJSON](#productapideletejson) - Delete an existing product
* [ProductAPIDeleteRaw](#productapideleteraw) - Delete an existing product
* [ProductAPIDetails](#productapidetails) - Return product details
* [ProductAPINewForm](#productapinewform) - Create a product
* [ProductAPINewJSON](#productapinewjson) - Create a product
* [ProductAPINewRaw](#productapinewraw) - Create a product
* [ProductAPIUpdateForm](#productapiupdateform) - Update an existing product
* [ProductAPIUpdateJSON](#productapiupdatejson) - Update an existing product
* [ProductAPIUpdateRaw](#productapiupdateraw) - Update an existing product

## ProductAPIAll

Return all products for the account

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
    res, err := s.Product.ProductAPIAll(ctx, operations.ProductAPIAllRequest{
        QueryOptionsPage: sdk.Int(979271),
        QueryOptionsPageSize: sdk.Int(715622),
        XAuthKey: "mollitia",
        XAuthSecret: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultProductDetailsAPIModel != nil {
        // handle response
    }
}
```

## ProductAPIDeleteForm

Delete an existing product

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
    res, err := s.Product.ProductAPIDeleteForm(ctx, operations.ProductAPIDeleteFormRequest{
        ProductDeleteAPIModel: shared.ProductDeleteAPIModel{
            ID: sdk.Int(880998),
        },
        XAuthKey: "et",
        XAuthSecret: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPIDeleteJSON

Delete an existing product

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
    res, err := s.Product.ProductAPIDeleteJSON(ctx, operations.ProductAPIDeleteJSONRequest{
        ProductDeleteAPIModel: shared.ProductDeleteAPIModel{
            ID: sdk.Int(501462),
        },
        XAuthKey: "cum",
        XAuthSecret: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPIDeleteRaw

Delete an existing product

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
    res, err := s.Product.ProductAPIDeleteRaw(ctx, operations.ProductAPIDeleteRawRequest{
        RequestBody: []byte("impedit"),
        XAuthKey: "tempora",
        XAuthSecret: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPIDetails

Return product details

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
    res, err := s.Product.ProductAPIDetails(ctx, operations.ProductAPIDetailsRequest{
        ID: 920548,
        XAuthKey: "sed",
        XAuthSecret: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## ProductAPINewForm

Create a product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPINewForm(ctx, operations.ProductAPINewFormRequest{
        ProductCreateAPIModel: shared.ProductCreateAPIModel{
            AfterPaymentDescription: sdk.String("quas"),
            Attachments: []shared.ProductAttachmentAPIModel{
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(428378),
                    Link: sdk.String("eligendi"),
                    ObfuscatedFileName: sdk.String("recusandae"),
                    OriginalFileName: sdk.String("ex"),
                    Size: sdk.Int64(105094),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(982574),
                    Link: sdk.String("itaque"),
                    ObfuscatedFileName: sdk.String("vero"),
                    OriginalFileName: sdk.String("quidem"),
                    Size: sdk.Int64(73826),
                    Type: shared.ProductAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(490966),
                    Link: sdk.String("minus"),
                    ObfuscatedFileName: sdk.String("distinctio"),
                    OriginalFileName: sdk.String("possimus"),
                    Size: sdk.Int64(738152),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(906495),
                    Link: sdk.String("earum"),
                    ObfuscatedFileName: sdk.String("quod"),
                    OriginalFileName: sdk.String("nihil"),
                    Size: sdk.Int64(310930),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            ButtonCallToAction: sdk.String("ducimus"),
            Coupons: []shared.ProductCouponAPIModel{
                shared.ProductCouponAPIModel{
                    Code: sdk.String("rerum"),
                    DiscountAmount: sdk.Float64(6439.97),
                    DiscountPercentage: sdk.Float64(1384.36),
                    ID: sdk.Int(319419),
                    ValidUntil: types.MustTimeFromString("2022-11-23T00:22:34.246Z"),
                },
                shared.ProductCouponAPIModel{
                    Code: sdk.String("iusto"),
                    DiscountAmount: sdk.Float64(4568.65),
                    DiscountPercentage: sdk.Float64(2982.46),
                    ID: sdk.Int(487799),
                    ValidUntil: types.MustTimeFromString("2020-09-08T07:27:26.848Z"),
                },
                shared.ProductCouponAPIModel{
                    Code: sdk.String("cupiditate"),
                    DiscountAmount: sdk.Float64(724.22),
                    DiscountPercentage: sdk.Float64(3486.65),
                    ID: sdk.Int(670430),
                    ValidUntil: types.MustTimeFromString("2022-07-22T22:49:44.757Z"),
                },
            },
            CurrencyID: sdk.Int(804879),
            Description: sdk.String("dolorum"),
            Discounts: []shared.ProductDiscountAPIModel{
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(3419.83),
                    DiscountPercentage: sdk.Float64(8473.08),
                    ID: sdk.Int(845086),
                    Name: sdk.String("Tamara Champlin"),
                    ValidFrom: types.MustTimeFromString("2022-10-27T13:33:42.141Z"),
                    ValidTo: types.MustTimeFromString("2021-12-13T10:52:20.774Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(6336.43),
                    DiscountPercentage: sdk.Float64(9197.38),
                    ID: sdk.Int(134428),
                    Name: sdk.String("Tony Nikolaus"),
                    ValidFrom: types.MustTimeFromString("2022-12-16T12:05:54.159Z"),
                    ValidTo: types.MustTimeFromString("2022-06-27T05:09:07.569Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(4817.04),
                    DiscountPercentage: sdk.Float64(5468.68),
                    ID: sdk.Int(474885),
                    Name: sdk.String("Vera Bernhard"),
                    ValidFrom: types.MustTimeFromString("2021-12-05T00:10:54.956Z"),
                    ValidTo: types.MustTimeFromString("2022-02-17T08:18:43.977Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(7876.29),
                    DiscountPercentage: sdk.Float64(5909.27),
                    ID: sdk.Int(515595),
                    Name: sdk.String("Maurice Hamill"),
                    ValidFrom: types.MustTimeFromString("2022-12-24T19:30:03.350Z"),
                    ValidTo: types.MustTimeFromString("2022-12-02T03:52:20.120Z"),
                },
            },
            IsFeatured: sdk.Bool(false),
            Items: []shared.ProductItemAPIModel{
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(2578.21),
                    Description: sdk.String("doloremque"),
                    ID: sdk.Int(740245),
                    MinimumQuantity: sdk.Float64(7512.98),
                    ReferenceID: sdk.String("similique"),
                    SubTotalAmount: sdk.Float64(7837.64),
                    TaxAmount: sdk.Float64(7697.89),
                    TaxID: sdk.Int(394724),
                    TaxPercentage: sdk.Float64(7689.2),
                    TotalAmount: sdk.Float64(7437.95),
                    WorkTypeID: sdk.Int(856568),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(3892.87),
                    Description: sdk.String("nam"),
                    ID: sdk.Int(315387),
                    MinimumQuantity: sdk.Float64(9790.11),
                    ReferenceID: sdk.String("consectetur"),
                    SubTotalAmount: sdk.Float64(8988.26),
                    TaxAmount: sdk.Float64(8037.92),
                    TaxID: sdk.Int(586717),
                    TaxPercentage: sdk.Float64(290.8),
                    TotalAmount: sdk.Float64(5881.58),
                    WorkTypeID: sdk.Int(239097),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(342.67),
                    Description: sdk.String("magnam"),
                    ID: sdk.Int(998527),
                    MinimumQuantity: sdk.Float64(6076.31),
                    ReferenceID: sdk.String("explicabo"),
                    SubTotalAmount: sdk.Float64(4258.17),
                    TaxAmount: sdk.Float64(7403.47),
                    TaxID: sdk.Int(663062),
                    TaxPercentage: sdk.Float64(8210.16),
                    TotalAmount: sdk.Float64(1430.61),
                    WorkTypeID: sdk.Int(373054),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(3434.54),
                    Description: sdk.String("sequi"),
                    ID: sdk.Int(529310),
                    MinimumQuantity: sdk.Float64(987.59),
                    ReferenceID: sdk.String("error"),
                    SubTotalAmount: sdk.Float64(7486.06),
                    TaxAmount: sdk.Float64(2696),
                    TaxID: sdk.Int(452653),
                    TaxPercentage: sdk.Float64(2611.7),
                    TotalAmount: sdk.Float64(7137.18),
                    WorkTypeID: sdk.Int(46384),
                },
            },
            Name: sdk.String("Dr. Woodrow Corkery"),
            PaymentGateways: []shared.ProductGatewayAPIModel{
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Suzanne Kuvalis"),
                },
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Raul Dooley"),
                },
            },
            ShippingAmount: sdk.Float64(5911.71),
            ShippingDescription: sdk.String("beatae"),
            Status: shared.ProductCreateAPIModelStatusEnumActive.ToPointer(),
            WhatHappensNextDescription: sdk.String("mollitia"),
        },
        XAuthKey: "nam",
        XAuthSecret: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPINewJSON

Create a product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPINewJSON(ctx, operations.ProductAPINewJSONRequest{
        ProductCreateAPIModel: shared.ProductCreateAPIModel{
            AfterPaymentDescription: sdk.String("quo"),
            Attachments: []shared.ProductAttachmentAPIModel{
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(733763),
                    Link: sdk.String("commodi"),
                    ObfuscatedFileName: sdk.String("fugit"),
                    OriginalFileName: sdk.String("suscipit"),
                    Size: sdk.Int64(453880),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(397160),
                    Link: sdk.String("provident"),
                    ObfuscatedFileName: sdk.String("laboriosam"),
                    OriginalFileName: sdk.String("accusamus"),
                    Size: sdk.Int64(68292),
                    Type: shared.ProductAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(790305),
                    Link: sdk.String("eaque"),
                    ObfuscatedFileName: sdk.String("alias"),
                    OriginalFileName: sdk.String("qui"),
                    Size: sdk.Int64(163263),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            ButtonCallToAction: sdk.String("quidem"),
            Coupons: []shared.ProductCouponAPIModel{
                shared.ProductCouponAPIModel{
                    Code: sdk.String("amet"),
                    DiscountAmount: sdk.Float64(3466.08),
                    DiscountPercentage: sdk.Float64(8470.18),
                    ID: sdk.Int(506532),
                    ValidUntil: types.MustTimeFromString("2021-09-28T11:50:21.312Z"),
                },
            },
            CurrencyID: sdk.Int(753261),
            Description: sdk.String("tempore"),
            Discounts: []shared.ProductDiscountAPIModel{
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(8901.12),
                    DiscountPercentage: sdk.Float64(7513.81),
                    ID: sdk.Int(989089),
                    Name: sdk.String("Orlando Littel DDS"),
                    ValidFrom: types.MustTimeFromString("2022-09-10T18:01:08.970Z"),
                    ValidTo: types.MustTimeFromString("2021-04-01T17:52:16.993Z"),
                },
            },
            IsFeatured: sdk.Bool(false),
            Items: []shared.ProductItemAPIModel{
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(427.63),
                    Description: sdk.String("ipsum"),
                    ID: sdk.Int(367),
                    MinimumQuantity: sdk.Float64(437.15),
                    ReferenceID: sdk.String("tempora"),
                    SubTotalAmount: sdk.Float64(5959.86),
                    TaxAmount: sdk.Float64(4620.97),
                    TaxID: sdk.Int(541009),
                    TaxPercentage: sdk.Float64(6383.63),
                    TotalAmount: sdk.Float64(4064.93),
                    WorkTypeID: sdk.Int(101770),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(9535.64),
                    Description: sdk.String("laborum"),
                    ID: sdk.Int(84288),
                    MinimumQuantity: sdk.Float64(8018.16),
                    ReferenceID: sdk.String("a"),
                    SubTotalAmount: sdk.Float64(1853.13),
                    TaxAmount: sdk.Float64(349.89),
                    TaxID: sdk.Int(415125),
                    TaxPercentage: sdk.Float64(5389.44),
                    TotalAmount: sdk.Float64(5199.85),
                    WorkTypeID: sdk.Int(945637),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(4518.07),
                    Description: sdk.String("quam"),
                    ID: sdk.Int(799830),
                    MinimumQuantity: sdk.Float64(1102.47),
                    ReferenceID: sdk.String("sapiente"),
                    SubTotalAmount: sdk.Float64(9686.89),
                    TaxAmount: sdk.Float64(7989.53),
                    TaxID: sdk.Int(451589),
                    TaxPercentage: sdk.Float64(779.92),
                    TotalAmount: sdk.Float64(8156.11),
                    WorkTypeID: sdk.Int(804936),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(6815.78),
                    Description: sdk.String("ab"),
                    ID: sdk.Int(405789),
                    MinimumQuantity: sdk.Float64(2359.7),
                    ReferenceID: sdk.String("maiores"),
                    SubTotalAmount: sdk.Float64(1530.97),
                    TaxAmount: sdk.Float64(6571.41),
                    TaxID: sdk.Int(197519),
                    TaxPercentage: sdk.Float64(7574.71),
                    TotalAmount: sdk.Float64(5283.15),
                    WorkTypeID: sdk.Int(21668),
                },
            },
            Name: sdk.String("Alejandro Kovacek"),
            PaymentGateways: []shared.ProductGatewayAPIModel{
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Ellen Ruecker"),
                },
            },
            ShippingAmount: sdk.Float64(9453.2),
            ShippingDescription: sdk.String("molestias"),
            Status: shared.ProductCreateAPIModelStatusEnumNotAvailable.ToPointer(),
            WhatHappensNextDescription: sdk.String("esse"),
        },
        XAuthKey: "laborum",
        XAuthSecret: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPINewRaw

Create a product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPINewRaw(ctx, operations.ProductAPINewRawRequest{
        RequestBody: []byte("voluptates"),
        XAuthKey: "eum",
        XAuthSecret: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProductAPIUpdateForm

Update an existing product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPIUpdateForm(ctx, operations.ProductAPIUpdateFormRequest{
        ProductUpdateAPIModel: shared.ProductUpdateAPIModel{
            AfterPaymentDescription: sdk.String("quas"),
            Attachments: []shared.ProductAttachmentAPIModel{
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(416934),
                    Link: sdk.String("porro"),
                    ObfuscatedFileName: sdk.String("aliquid"),
                    OriginalFileName: sdk.String("mollitia"),
                    Size: sdk.Int64(695347),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(92851),
                    Link: sdk.String("nulla"),
                    ObfuscatedFileName: sdk.String("magni"),
                    OriginalFileName: sdk.String("natus"),
                    Size: sdk.Int64(851199),
                    Type: shared.ProductAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ButtonCallToAction: sdk.String("impedit"),
            Coupons: []shared.ProductCouponAPIModel{
                shared.ProductCouponAPIModel{
                    Code: sdk.String("ut"),
                    DiscountAmount: sdk.Float64(8145.85),
                    DiscountPercentage: sdk.Float64(3772.69),
                    ID: sdk.Int(987384),
                    ValidUntil: types.MustTimeFromString("2020-08-21T17:46:18.554Z"),
                },
                shared.ProductCouponAPIModel{
                    Code: sdk.String("facere"),
                    DiscountAmount: sdk.Float64(4913.8),
                    DiscountPercentage: sdk.Float64(6143.46),
                    ID: sdk.Int(588473),
                    ValidUntil: types.MustTimeFromString("2022-06-05T18:21:29.961Z"),
                },
                shared.ProductCouponAPIModel{
                    Code: sdk.String("aperiam"),
                    DiscountAmount: sdk.Float64(494.56),
                    DiscountPercentage: sdk.Float64(4312.58),
                    ID: sdk.Int(385291),
                    ValidUntil: types.MustTimeFromString("2022-02-26T17:43:17.857Z"),
                },
            },
            CurrencyID: sdk.Int(828481),
            Description: sdk.String("explicabo"),
            Discounts: []shared.ProductDiscountAPIModel{
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(413.06),
                    DiscountPercentage: sdk.Float64(327.75),
                    ID: sdk.Int(4747),
                    Name: sdk.String("Dana Hayes"),
                    ValidFrom: types.MustTimeFromString("2021-05-24T19:52:17.085Z"),
                    ValidTo: types.MustTimeFromString("2020-09-12T14:59:58.242Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(390.47),
                    DiscountPercentage: sdk.Float64(5168.33),
                    ID: sdk.Int(435266),
                    Name: sdk.String("Dr. Carlton Considine"),
                    ValidFrom: types.MustTimeFromString("2022-08-19T06:41:35.111Z"),
                    ValidTo: types.MustTimeFromString("2022-03-27T16:13:53.889Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(6962.19),
                    DiscountPercentage: sdk.Float64(2476.15),
                    ID: sdk.Int(109569),
                    Name: sdk.String("Felicia Breitenberg"),
                    ValidFrom: types.MustTimeFromString("2021-11-16T16:36:56.075Z"),
                    ValidTo: types.MustTimeFromString("2022-05-06T10:22:27.901Z"),
                },
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(7698.72),
                    DiscountPercentage: sdk.Float64(5507.99),
                    ID: sdk.Int(849690),
                    Name: sdk.String("Kenneth Friesen IV"),
                    ValidFrom: types.MustTimeFromString("2021-10-02T12:44:48.225Z"),
                    ValidTo: types.MustTimeFromString("2022-04-22T18:37:10.708Z"),
                },
            },
            ID: sdk.Int(377680),
            IsFeatured: sdk.Bool(false),
            Items: []shared.ProductItemAPIModel{
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(9382.44),
                    Description: sdk.String("tenetur"),
                    ID: sdk.Int(826797),
                    MinimumQuantity: sdk.Float64(2941.81),
                    ReferenceID: sdk.String("enim"),
                    SubTotalAmount: sdk.Float64(3539.04),
                    TaxAmount: sdk.Float64(5981.93),
                    TaxID: sdk.Int(3709),
                    TaxPercentage: sdk.Float64(4041.21),
                    TotalAmount: sdk.Float64(8450.78),
                    WorkTypeID: sdk.Int(116867),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(1548.4),
                    Description: sdk.String("commodi"),
                    ID: sdk.Int(204144),
                    MinimumQuantity: sdk.Float64(8436.59),
                    ReferenceID: sdk.String("numquam"),
                    SubTotalAmount: sdk.Float64(5231.09),
                    TaxAmount: sdk.Float64(8846.22),
                    TaxID: sdk.Int(608402),
                    TaxPercentage: sdk.Float64(2064.51),
                    TotalAmount: sdk.Float64(3598.74),
                    WorkTypeID: sdk.Int(797527),
                },
            },
            Name: sdk.String("Nichole Marks"),
            PaymentGateways: []shared.ProductGatewayAPIModel{
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Dale Altenwerth"),
                },
            },
            ShippingAmount: sdk.Float64(1960),
            ShippingDescription: sdk.String("recusandae"),
            Status: shared.ProductUpdateAPIModelStatusEnumActive.ToPointer(),
            WhatHappensNextDescription: sdk.String("adipisci"),
        },
        XAuthKey: "magni",
        XAuthSecret: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductAPIUpdateJSON

Update an existing product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPIUpdateJSON(ctx, operations.ProductAPIUpdateJSONRequest{
        ProductUpdateAPIModel: shared.ProductUpdateAPIModel{
            AfterPaymentDescription: sdk.String("dolores"),
            Attachments: []shared.ProductAttachmentAPIModel{
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(481553),
                    Link: sdk.String("magni"),
                    ObfuscatedFileName: sdk.String("beatae"),
                    OriginalFileName: sdk.String("aliquid"),
                    Size: sdk.Int64(321697),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(426594),
                    Link: sdk.String("minima"),
                    ObfuscatedFileName: sdk.String("sit"),
                    OriginalFileName: sdk.String("vel"),
                    Size: sdk.Int64(388333),
                    Type: shared.ProductAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(94122),
                    Link: sdk.String("rem"),
                    ObfuscatedFileName: sdk.String("dignissimos"),
                    OriginalFileName: sdk.String("doloremque"),
                    Size: sdk.Int64(825739),
                    Type: shared.ProductAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.ProductAttachmentAPIModel{
                    ID: sdk.Int(818422),
                    Link: sdk.String("sed"),
                    ObfuscatedFileName: sdk.String("inventore"),
                    OriginalFileName: sdk.String("voluptatibus"),
                    Size: sdk.Int64(601228),
                    Type: shared.ProductAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ButtonCallToAction: sdk.String("repellendus"),
            Coupons: []shared.ProductCouponAPIModel{
                shared.ProductCouponAPIModel{
                    Code: sdk.String("adipisci"),
                    DiscountAmount: sdk.Float64(390.69),
                    DiscountPercentage: sdk.Float64(7619.27),
                    ID: sdk.Int(269731),
                    ValidUntil: types.MustTimeFromString("2020-09-16T11:45:06.115Z"),
                },
            },
            CurrencyID: sdk.Int(806124),
            Description: sdk.String("et"),
            Discounts: []shared.ProductDiscountAPIModel{
                shared.ProductDiscountAPIModel{
                    DiscountAmount: sdk.Float64(6620.68),
                    DiscountPercentage: sdk.Float64(90.6),
                    ID: sdk.Int(551576),
                    Name: sdk.String("Willie Glover"),
                    ValidFrom: types.MustTimeFromString("2022-08-13T17:46:00.555Z"),
                    ValidTo: types.MustTimeFromString("2021-08-05T12:18:31.502Z"),
                },
            },
            ID: sdk.Int(514609),
            IsFeatured: sdk.Bool(false),
            Items: []shared.ProductItemAPIModel{
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(149),
                    Description: sdk.String("quia"),
                    ID: sdk.Int(642576),
                    MinimumQuantity: sdk.Float64(3126.9),
                    ReferenceID: sdk.String("corporis"),
                    SubTotalAmount: sdk.Float64(8843.25),
                    TaxAmount: sdk.Float64(4813.07),
                    TaxID: sdk.Int(958533),
                    TaxPercentage: sdk.Float64(4590.86),
                    TotalAmount: sdk.Float64(2075.12),
                    WorkTypeID: sdk.Int(697591),
                },
                shared.ProductItemAPIModel{
                    Cost: sdk.Float64(7884.69),
                    Description: sdk.String("praesentium"),
                    ID: sdk.Int(273349),
                    MinimumQuantity: sdk.Float64(3700.52),
                    ReferenceID: sdk.String("officiis"),
                    SubTotalAmount: sdk.Float64(1964.97),
                    TaxAmount: sdk.Float64(1655.45),
                    TaxID: sdk.Int(29881),
                    TaxPercentage: sdk.Float64(6659.6),
                    TotalAmount: sdk.Float64(2261.81),
                    WorkTypeID: sdk.Int(84211),
                },
            },
            Name: sdk.String("Boyd Gerlach"),
            PaymentGateways: []shared.ProductGatewayAPIModel{
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Andy Gerhold"),
                },
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Matt Lehner"),
                },
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Earnest Goyette"),
                },
                shared.ProductGatewayAPIModel{
                    Name: sdk.String("Vicki Kemmer"),
                },
            },
            ShippingAmount: sdk.Float64(5522.87),
            ShippingDescription: sdk.String("illo"),
            Status: shared.ProductUpdateAPIModelStatusEnumNotAvailable.ToPointer(),
            WhatHappensNextDescription: sdk.String("quibusdam"),
        },
        XAuthKey: "fugiat",
        XAuthSecret: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductAPIUpdateRaw

Update an existing product

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Product.ProductAPIUpdateRaw(ctx, operations.ProductAPIUpdateRawRequest{
        RequestBody: []byte("culpa"),
        XAuthKey: "atque",
        XAuthSecret: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
