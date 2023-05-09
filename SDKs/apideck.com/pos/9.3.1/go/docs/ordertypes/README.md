# OrderTypes

### Available Operations

* [OrderTypesAdd](#ordertypesadd) - Create Order Type
* [OrderTypesAll](#ordertypesall) - List Order Types
* [OrderTypesDelete](#ordertypesdelete) - Delete Order Type
* [OrderTypesOne](#ordertypesone) - Get Order Type
* [OrderTypesUpdate](#ordertypesupdate) - Update Order Type

## OrderTypesAdd

Create Order Type

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
    res, err := s.OrderTypes.OrderTypesAdd(ctx, operations.OrderTypesAddRequest{
        OrderTypeInput: shared.OrderTypeInput{
            Default: sdk.Bool(true),
            Name: sdk.String("Default order type"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "molestiae",
        XApideckConsumerID: "magnam",
        XApideckServiceID: sdk.String("odio"),
    }, operations.OrderTypesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderTypeResponse != nil {
        // handle response
    }
}
```

## OrderTypesAll

List Order Types

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
    res, err := s.OrderTypes.OrderTypesAll(ctx, operations.OrderTypesAllRequest{
        Cursor: sdk.String("eius"),
        Fields: sdk.String("esse"),
        Limit: sdk.Int64(456141),
        Raw: sdk.Bool(false),
        XApideckAppID: "rem",
        XApideckConsumerID: "fuga",
        XApideckServiceID: sdk.String("reprehenderit"),
    }, operations.OrderTypesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderTypesResponse != nil {
        // handle response
    }
}
```

## OrderTypesDelete

Delete Order Type

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
    res, err := s.OrderTypes.OrderTypesDelete(ctx, operations.OrderTypesDeleteRequest{
        ID: "bd466d28-c10a-4b3c-9ca4-251904e523c7",
        Raw: sdk.Bool(false),
        XApideckAppID: "recusandae",
        XApideckConsumerID: "aperiam",
        XApideckServiceID: sdk.String("distinctio"),
    }, operations.OrderTypesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOrderTypeResponse != nil {
        // handle response
    }
}
```

## OrderTypesOne

Get Order Type

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
    res, err := s.OrderTypes.OrderTypesOne(ctx, operations.OrderTypesOneRequest{
        Fields: sdk.String("quod"),
        ID: "7178e479-6f2a-470c-a882-82aa482562f2",
        Raw: sdk.Bool(false),
        XApideckAppID: "ratione",
        XApideckConsumerID: "explicabo",
        XApideckServiceID: sdk.String("saepe"),
    }, operations.OrderTypesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderTypeResponse != nil {
        // handle response
    }
}
```

## OrderTypesUpdate

Update Order Type

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
    res, err := s.OrderTypes.OrderTypesUpdate(ctx, operations.OrderTypesUpdateRequest{
        OrderTypeInput: shared.OrderTypeInput{
            Default: sdk.Bool(true),
            Name: sdk.String("Default order type"),
        },
        ID: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
        Raw: sdk.Bool(false),
        XApideckAppID: "sapiente",
        XApideckConsumerID: "consectetur",
        XApideckServiceID: sdk.String("esse"),
    }, operations.OrderTypesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrderTypeResponse != nil {
        // handle response
    }
}
```
