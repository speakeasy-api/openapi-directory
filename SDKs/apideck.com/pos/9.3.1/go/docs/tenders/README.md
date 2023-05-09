# Tenders

### Available Operations

* [TendersAdd](#tendersadd) - Create Tender
* [TendersAll](#tendersall) - List Tenders
* [TendersDelete](#tendersdelete) - Delete Tender
* [TendersOne](#tendersone) - Get Tender
* [TendersUpdate](#tendersupdate) - Update Tender

## TendersAdd

Create Tender

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
    res, err := s.Tenders.TendersAdd(ctx, operations.TendersAddRequest{
        TenderInput: shared.TenderInput{
            Active: sdk.Bool(true),
            AllowsTipping: sdk.Bool(false),
            Editable: sdk.Bool(true),
            Hidden: sdk.Bool(true),
            Key: sdk.String("com.clover.tender.cash"),
            Label: sdk.String("Cash"),
            OpensCashDrawer: sdk.Bool(false),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "earum",
        XApideckConsumerID: "officia",
        XApideckServiceID: sdk.String("laborum"),
    }, operations.TendersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTenderResponse != nil {
        // handle response
    }
}
```

## TendersAll

List Tenders

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
    res, err := s.Tenders.TendersAll(ctx, operations.TendersAllRequest{
        Cursor: sdk.String("placeat"),
        Fields: sdk.String("modi"),
        Limit: sdk.Int64(976226),
        Raw: sdk.Bool(false),
        XApideckAppID: "molestias",
        XApideckConsumerID: "officiis",
        XApideckServiceID: sdk.String("sapiente"),
    }, operations.TendersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTendersResponse != nil {
        // handle response
    }
}
```

## TendersDelete

Delete Tender

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
    res, err := s.Tenders.TendersDelete(ctx, operations.TendersDeleteRequest{
        ID: "c1b4512c-1032-4648-9c2f-615199ebfd0e",
        Raw: sdk.Bool(false),
        XApideckAppID: "perspiciatis",
        XApideckConsumerID: "maiores",
        XApideckServiceID: sdk.String("debitis"),
    }, operations.TendersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTenderResponse != nil {
        // handle response
    }
}
```

## TendersOne

Get Tender

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
    res, err := s.Tenders.TendersOne(ctx, operations.TendersOneRequest{
        Fields: sdk.String("aliquid"),
        ID: "c632ca3a-ed01-4179-9631-2fde04771778",
        Raw: sdk.Bool(false),
        XApideckAppID: "maiores",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("vel"),
    }, operations.TendersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTenderResponse != nil {
        // handle response
    }
}
```

## TendersUpdate

Update Tender

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
    res, err := s.Tenders.TendersUpdate(ctx, operations.TendersUpdateRequest{
        TenderInput: shared.TenderInput{
            Active: sdk.Bool(true),
            AllowsTipping: sdk.Bool(false),
            Editable: sdk.Bool(true),
            Hidden: sdk.Bool(true),
            Key: sdk.String("com.clover.tender.cash"),
            Label: sdk.String("Cash"),
            OpensCashDrawer: sdk.Bool(false),
        },
        ID: "1d017476-360a-415d-b6a6-60659a1adeaa",
        Raw: sdk.Bool(false),
        XApideckAppID: "libero",
        XApideckConsumerID: "ad",
        XApideckServiceID: sdk.String("deleniti"),
    }, operations.TendersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTenderResponse != nil {
        // handle response
    }
}
```
