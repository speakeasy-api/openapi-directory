# Estimation

### Available Operations

* [EstimationAPIAll](#estimationapiall) - Return all estimation for the account
* [EstimationAPIChangeStatusForm](#estimationapichangestatusform) - Change estimation status
* [EstimationAPIChangeStatusJSON](#estimationapichangestatusjson) - Change estimation status
* [EstimationAPIChangeStatusRaw](#estimationapichangestatusraw) - Change estimation status
* [EstimationAPIDeleteForm](#estimationapideleteform) - Delete an existing estimation
* [EstimationAPIDeleteJSON](#estimationapideletejson) - Delete an existing estimation
* [EstimationAPIDeleteRaw](#estimationapideleteraw) - Delete an existing estimation
* [EstimationAPIDetails](#estimationapidetails) - Return estimation data
* [EstimationAPINewForm](#estimationapinewform) - Create an estimation
* [EstimationAPINewJSON](#estimationapinewjson) - Create an estimation
* [EstimationAPINewRaw](#estimationapinewraw) - Create an estimation
* [EstimationAPISendToClientForm](#estimationapisendtoclientform) - Send the provided estimation to the client
* [EstimationAPISendToClientJSON](#estimationapisendtoclientjson) - Send the provided estimation to the client
* [EstimationAPISendToClientRaw](#estimationapisendtoclientraw) - Send the provided estimation to the client
* [EstimationAPIStatus](#estimationapistatus) - Retrieve the status of the estimation
* [EstimationAPIUpdateForm](#estimationapiupdateform) - Update an existing estimation
* [EstimationAPIUpdateJSON](#estimationapiupdatejson) - Update an existing estimation
* [EstimationAPIUpdateRaw](#estimationapiupdateraw) - Update an existing estimation
* [EstimationAPIURI](#estimationapiuri) - Return the unique url to the client's invoice

## EstimationAPIAll

Return all estimation for the account

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
    res, err := s.Estimation.EstimationAPIAll(ctx, operations.EstimationAPIAllRequest{
        QueryOptionsPage: sdk.Int(397821),
        QueryOptionsPageSize: sdk.Int(586513),
        XAuthKey: "quos",
        XAuthSecret: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultEstimationDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPIChangeStatusForm

Change estimation status

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
    res, err := s.Estimation.EstimationAPIChangeStatusForm(ctx, operations.EstimationAPIChangeStatusFormRequest{
        EstimationChangeStatusAPIModel: shared.EstimationChangeStatusAPIModel{
            ID: sdk.Int(164940),
            Status: shared.EstimationChangeStatusAPIModelStatusEnumRejected.ToPointer(),
        },
        XAuthKey: "ipsam",
        XAuthSecret: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIChangeStatusForm200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## EstimationAPIChangeStatusJSON

Change estimation status

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
    res, err := s.Estimation.EstimationAPIChangeStatusJSON(ctx, operations.EstimationAPIChangeStatusJSONRequest{
        EstimationChangeStatusAPIModel: shared.EstimationChangeStatusAPIModel{
            ID: sdk.Int(146441),
            Status: shared.EstimationChangeStatusAPIModelStatusEnumRejected.ToPointer(),
        },
        XAuthKey: "excepturi",
        XAuthSecret: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIChangeStatusJSON200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## EstimationAPIChangeStatusRaw

Change estimation status

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
    res, err := s.Estimation.EstimationAPIChangeStatusRaw(ctx, operations.EstimationAPIChangeStatusRawRequest{
        RequestBody: []byte("facilis"),
        XAuthKey: "tempore",
        XAuthSecret: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIChangeStatusRaw200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## EstimationAPIDeleteForm

Delete an existing estimation

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
    res, err := s.Estimation.EstimationAPIDeleteForm(ctx, operations.EstimationAPIDeleteFormRequest{
        EstimationDeleteAPIModel: shared.EstimationDeleteAPIModel{
            ID: sdk.Int(962189),
        },
        XAuthKey: "eum",
        XAuthSecret: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPIDeleteJSON

Delete an existing estimation

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
    res, err := s.Estimation.EstimationAPIDeleteJSON(ctx, operations.EstimationAPIDeleteJSONRequest{
        EstimationDeleteAPIModel: shared.EstimationDeleteAPIModel{
            ID: sdk.Int(756107),
        },
        XAuthKey: "sint",
        XAuthSecret: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPIDeleteRaw

Delete an existing estimation

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
    res, err := s.Estimation.EstimationAPIDeleteRaw(ctx, operations.EstimationAPIDeleteRawRequest{
        RequestBody: []byte("provident"),
        XAuthKey: "necessitatibus",
        XAuthSecret: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPIDetails

Return estimation data

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
    res, err := s.Estimation.EstimationAPIDetails(ctx, operations.EstimationAPIDetailsRequest{
        ID: 638921,
        XAuthKey: "dolor",
        XAuthSecret: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPINewForm

Create an estimation

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
    res, err := s.Estimation.EstimationAPINewForm(ctx, operations.EstimationAPINewFormRequest{
        EstimationCreateAPIModel: shared.EstimationCreateAPIModel{
            Attachments: []shared.EstimationCreateAttachmentAPIModel{
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("dolorum"),
                    ObfuscatedFileName: sdk.String("in"),
                    OriginalFileName: sdk.String("in"),
                    Size: sdk.Int64(846409),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("rerum"),
                    ObfuscatedFileName: sdk.String("dicta"),
                    OriginalFileName: sdk.String("magnam"),
                    Size: sdk.Int64(767024),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("ea"),
                    ObfuscatedFileName: sdk.String("aliquid"),
                    OriginalFileName: sdk.String("laborum"),
                    Size: sdk.Int64(881104),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("occaecati"),
                    ObfuscatedFileName: sdk.String("enim"),
                    OriginalFileName: sdk.String("accusamus"),
                    Size: sdk.Int64(965417),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ClientID: sdk.Int(588465),
            ClonedFromID: sdk.Int(725255),
            CurrencyID: sdk.Int(659669),
            ExpiresOn: types.MustTimeFromString("2021-12-07T18:13:34.827Z"),
            IssuedOn: types.MustTimeFromString("2022-04-23T13:35:30.978Z"),
            Items: []shared.EstimationCreateItemAPIModel{
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(3948.69),
                    Description: sdk.String("vel"),
                    DiscountPercentage: sdk.Float64(6188.09),
                    Quantity: sdk.Float64(6063.93),
                    TaxID: sdk.Int(474867),
                    TaxPercentage: sdk.Float64(191.93),
                    WorkTypeID: sdk.Int(470132),
                },
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(3015.75),
                    Description: sdk.String("distinctio"),
                    DiscountPercentage: sdk.Float64(6601.74),
                    Quantity: sdk.Float64(2879.91),
                    TaxID: sdk.Int(290077),
                    TaxPercentage: sdk.Float64(3834.62),
                    WorkTypeID: sdk.Int(618016),
                },
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(7491.7),
                    Description: sdk.String("eum"),
                    DiscountPercentage: sdk.Float64(8784.53),
                    Quantity: sdk.Float64(1354.74),
                    TaxID: sdk.Int(102863),
                    TaxPercentage: sdk.Float64(2982.82),
                    WorkTypeID: sdk.Int(92373),
                },
            },
            Notes: sdk.String("excepturi"),
            Number: sdk.String("ullam"),
            PaymentGateways: []shared.EstimationGatewayAPIModel{
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Kirk Bartoletti"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Tommy Kemmer"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Vivian Boyle"),
                },
            },
            PoNumber: sdk.String("debitis"),
            Status: shared.EstimationCreateAPIModelStatusEnumDraft.ToPointer(),
            Terms: sdk.String("maxime"),
        },
        XAuthKey: "deleniti",
        XAuthSecret: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPINewJSON

Create an estimation

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
    res, err := s.Estimation.EstimationAPINewJSON(ctx, operations.EstimationAPINewJSONRequest{
        EstimationCreateAPIModel: shared.EstimationCreateAPIModel{
            Attachments: []shared.EstimationCreateAttachmentAPIModel{
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("architecto"),
                    ObfuscatedFileName: sdk.String("architecto"),
                    OriginalFileName: sdk.String("repudiandae"),
                    Size: sdk.Int64(352312),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.EstimationCreateAttachmentAPIModel{
                    Link: sdk.String("nihil"),
                    ObfuscatedFileName: sdk.String("repellat"),
                    OriginalFileName: sdk.String("quibusdam"),
                    Size: sdk.Int64(149448),
                    Type: shared.EstimationCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ClientID: sdk.Int(868126),
            ClonedFromID: sdk.Int(37559),
            CurrencyID: sdk.Int(162493),
            ExpiresOn: types.MustTimeFromString("2021-10-08T15:23:46.576Z"),
            IssuedOn: types.MustTimeFromString("2022-11-16T19:20:12.159Z"),
            Items: []shared.EstimationCreateItemAPIModel{
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(8480.09),
                    Description: sdk.String("pariatur"),
                    DiscountPercentage: sdk.Float64(8073.19),
                    Quantity: sdk.Float64(4113.97),
                    TaxID: sdk.Int(569101),
                    TaxPercentage: sdk.Float64(1399.72),
                    WorkTypeID: sdk.Int(407183),
                },
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(332.22),
                    Description: sdk.String("ab"),
                    DiscountPercentage: sdk.Float64(9825.75),
                    Quantity: sdk.Float64(6974.29),
                    TaxID: sdk.Int(373291),
                    TaxPercentage: sdk.Float64(4535.43),
                    WorkTypeID: sdk.Int(420075),
                },
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(7220.56),
                    Description: sdk.String("eaque"),
                    DiscountPercentage: sdk.Float64(8663.83),
                    Quantity: sdk.Float64(3654.96),
                    TaxID: sdk.Int(975522),
                    TaxPercentage: sdk.Float64(166.27),
                    WorkTypeID: sdk.Int(855804),
                },
                shared.EstimationCreateItemAPIModel{
                    Cost: sdk.Float64(2307.42),
                    Description: sdk.String("aut"),
                    DiscountPercentage: sdk.Float64(7649.12),
                    Quantity: sdk.Float64(3599.78),
                    TaxID: sdk.Int(944124),
                    TaxPercentage: sdk.Float64(7299.91),
                    WorkTypeID: sdk.Int(749999),
                },
            },
            Notes: sdk.String("dolores"),
            Number: sdk.String("quis"),
            PaymentGateways: []shared.EstimationGatewayAPIModel{
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Cynthia Hayes"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Jacqueline Schimmel"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Dean Welch"),
                },
            },
            PoNumber: sdk.String("facilis"),
            Status: shared.EstimationCreateAPIModelStatusEnumAccepted.ToPointer(),
            Terms: sdk.String("voluptatem"),
        },
        XAuthKey: "porro",
        XAuthSecret: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPINewRaw

Create an estimation

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
    res, err := s.Estimation.EstimationAPINewRaw(ctx, operations.EstimationAPINewRawRequest{
        RequestBody: []byte("blanditiis"),
        XAuthKey: "error",
        XAuthSecret: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPISendToClientForm

Send the provided estimation to the client

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
    res, err := s.Estimation.EstimationAPISendToClientForm(ctx, operations.EstimationAPISendToClientFormRequest{
        SendEstimationToClientAPIModel: shared.SendEstimationToClientAPIModel{
            AttachPdf: sdk.Bool(false),
            EstimationID: sdk.Int(577229),
            ID: sdk.Int(699098),
            Message: sdk.String("adipisci"),
            SendToSelf: sdk.Bool(false),
            Subject: sdk.String("asperiores"),
        },
        XAuthKey: "earum",
        XAuthSecret: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPISendToClientForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPISendToClientJSON

Send the provided estimation to the client

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
    res, err := s.Estimation.EstimationAPISendToClientJSON(ctx, operations.EstimationAPISendToClientJSONRequest{
        SendEstimationToClientAPIModel: shared.SendEstimationToClientAPIModel{
            AttachPdf: sdk.Bool(false),
            EstimationID: sdk.Int(613966),
            ID: sdk.Int(679091),
            Message: sdk.String("deleniti"),
            SendToSelf: sdk.Bool(false),
            Subject: sdk.String("pariatur"),
        },
        XAuthKey: "provident",
        XAuthSecret: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPISendToClientJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPISendToClientRaw

Send the provided estimation to the client

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
    res, err := s.Estimation.EstimationAPISendToClientRaw(ctx, operations.EstimationAPISendToClientRawRequest{
        RequestBody: []byte("libero"),
        XAuthKey: "delectus",
        XAuthSecret: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPISendToClientRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## EstimationAPIStatus

Retrieve the status of the estimation

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
    res, err := s.Estimation.EstimationAPIStatus(ctx, operations.EstimationAPIStatusRequest{
        ID: 554242,
        XAuthKey: "aliquid",
        XAuthSecret: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationAPIStatus200ApplicationJSONStringEnum != nil {
        // handle response
    }
}
```

## EstimationAPIUpdateForm

Update an existing estimation

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
    res, err := s.Estimation.EstimationAPIUpdateForm(ctx, operations.EstimationAPIUpdateFormRequest{
        EstimationUpdateAPIModel: shared.EstimationUpdateAPIModel{
            Attachments: []shared.EstimationUpdateAttachmentAPIModel{
                shared.EstimationUpdateAttachmentAPIModel{
                    ID: sdk.Int(222443),
                    Link: sdk.String("qui"),
                    ObfuscatedFileName: sdk.String("ipsum"),
                    OriginalFileName: sdk.String("hic"),
                    Size: sdk.Int64(569574),
                    Type: shared.EstimationUpdateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ClientID: sdk.Int(452109),
            ClonedFromID: sdk.Int(490459),
            CurrencyID: sdk.Int(970237),
            ExpiresOn: types.MustTimeFromString("2022-04-27T14:25:42.204Z"),
            ID: sdk.Int(254356),
            IssuedOn: types.MustTimeFromString("2022-12-10T19:39:51.391Z"),
            Items: []shared.EstimationUpdateItemAPIModel{
                shared.EstimationUpdateItemAPIModel{
                    Cost: sdk.Float64(4344.17),
                    Description: sdk.String("odio"),
                    DiscountPercentage: sdk.Float64(3117.96),
                    ID: sdk.Int(881005),
                    Quantity: sdk.Float64(6963.44),
                    TaxID: sdk.Int(976405),
                    TaxPercentage: sdk.Float64(3777.52),
                    WorkTypeID: sdk.Int(617658),
                },
            },
            Notes: sdk.String("eos"),
            Number: sdk.String("atque"),
            PaymentGateways: []shared.EstimationGatewayAPIModel{
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Stephen Roberts"),
                },
            },
            PoNumber: sdk.String("voluptate"),
            Status: shared.EstimationUpdateAPIModelStatusEnumRejected.ToPointer(),
            Terms: sdk.String("deleniti"),
        },
        XAuthKey: "omnis",
        XAuthSecret: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPIUpdateJSON

Update an existing estimation

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
    res, err := s.Estimation.EstimationAPIUpdateJSON(ctx, operations.EstimationAPIUpdateJSONRequest{
        EstimationUpdateAPIModel: shared.EstimationUpdateAPIModel{
            Attachments: []shared.EstimationUpdateAttachmentAPIModel{
                shared.EstimationUpdateAttachmentAPIModel{
                    ID: sdk.Int(990339),
                    Link: sdk.String("nihil"),
                    ObfuscatedFileName: sdk.String("ipsum"),
                    OriginalFileName: sdk.String("voluptate"),
                    Size: sdk.Int64(663078),
                    Type: shared.EstimationUpdateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.EstimationUpdateAttachmentAPIModel{
                    ID: sdk.Int(263322),
                    Link: sdk.String("aspernatur"),
                    ObfuscatedFileName: sdk.String("perferendis"),
                    OriginalFileName: sdk.String("amet"),
                    Size: sdk.Int64(758379),
                    Type: shared.EstimationUpdateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.EstimationUpdateAttachmentAPIModel{
                    ID: sdk.Int(320017),
                    Link: sdk.String("saepe"),
                    ObfuscatedFileName: sdk.String("suscipit"),
                    OriginalFileName: sdk.String("deserunt"),
                    Size: sdk.Int64(588317),
                    Type: shared.EstimationUpdateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            ClientID: sdk.Int(831049),
            ClonedFromID: sdk.Int(519711),
            CurrencyID: sdk.Int(628982),
            ExpiresOn: types.MustTimeFromString("2022-02-16T11:34:48.736Z"),
            ID: sdk.Int(311860),
            IssuedOn: types.MustTimeFromString("2022-07-29T17:02:39.743Z"),
            Items: []shared.EstimationUpdateItemAPIModel{
                shared.EstimationUpdateItemAPIModel{
                    Cost: sdk.Float64(8853.38),
                    Description: sdk.String("qui"),
                    DiscountPercentage: sdk.Float64(6798.8),
                    ID: sdk.Int(952792),
                    Quantity: sdk.Float64(4561.3),
                    TaxID: sdk.Int(687488),
                    TaxPercentage: sdk.Float64(4834.09),
                    WorkTypeID: sdk.Int(215507),
                },
                shared.EstimationUpdateItemAPIModel{
                    Cost: sdk.Float64(7887.4),
                    Description: sdk.String("tenetur"),
                    DiscountPercentage: sdk.Float64(2294.42),
                    ID: sdk.Int(730856),
                    Quantity: sdk.Float64(8802.98),
                    TaxID: sdk.Int(253941),
                    TaxPercentage: sdk.Float64(3136.92),
                    WorkTypeID: sdk.Int(213312),
                },
                shared.EstimationUpdateItemAPIModel{
                    Cost: sdk.Float64(9574.51),
                    Description: sdk.String("totam"),
                    DiscountPercentage: sdk.Float64(4717.52),
                    ID: sdk.Int(25662),
                    Quantity: sdk.Float64(7115.84),
                    TaxID: sdk.Int(207470),
                    TaxPercentage: sdk.Float64(1536.94),
                    WorkTypeID: sdk.Int(424685),
                },
                shared.EstimationUpdateItemAPIModel{
                    Cost: sdk.Float64(7304.42),
                    Description: sdk.String("voluptas"),
                    DiscountPercentage: sdk.Float64(6462.65),
                    ID: sdk.Int(463575),
                    Quantity: sdk.Float64(2148.8),
                    TaxID: sdk.Int(277628),
                    TaxPercentage: sdk.Float64(1864.58),
                    WorkTypeID: sdk.Int(586784),
                },
            },
            Notes: sdk.String("maxime"),
            Number: sdk.String("pariatur"),
            PaymentGateways: []shared.EstimationGatewayAPIModel{
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Kayla Larson"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Verna Purdy"),
                },
                shared.EstimationGatewayAPIModel{
                    Name: sdk.String("Marty Deckow"),
                },
            },
            PoNumber: sdk.String("magni"),
            Status: shared.EstimationUpdateAPIModelStatusEnumAccepted.ToPointer(),
            Terms: sdk.String("sunt"),
        },
        XAuthKey: "ullam",
        XAuthSecret: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPIUpdateRaw

Update an existing estimation

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
    res, err := s.Estimation.EstimationAPIUpdateRaw(ctx, operations.EstimationAPIUpdateRawRequest{
        RequestBody: []byte("hic"),
        XAuthKey: "voluptatem",
        XAuthSecret: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## EstimationAPIURI

Return the unique url to the client's invoice

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
    res, err := s.Estimation.EstimationAPIURI(ctx, operations.EstimationAPIURIRequest{
        ID: 746994,
        XAuthKey: "nobis",
        XAuthSecret: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimationURIAPIModel != nil {
        // handle response
    }
}
```
