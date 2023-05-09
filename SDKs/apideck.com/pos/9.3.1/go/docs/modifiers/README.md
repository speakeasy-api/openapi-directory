# Modifiers

### Available Operations

* [ModifiersAdd](#modifiersadd) - Create Modifier
* [ModifiersAll](#modifiersall) - List Modifiers
* [ModifiersDelete](#modifiersdelete) - Delete Modifier
* [ModifiersOne](#modifiersone) - Get Modifier
* [ModifiersUpdate](#modifiersupdate) - Update Modifier

## ModifiersAdd

Create Modifier

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
    res, err := s.Modifiers.ModifiersAdd(ctx, operations.ModifiersAddRequest{
        ModifierInput: shared.ModifierInput{
            AlternateName: sdk.String("Modifier New"),
            Available: sdk.Bool(true),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            IdempotencyKey: sdk.String("random_string"),
            ModifierGroupID: "123",
            Name: "Modifier",
            PriceAmount: sdk.Float64(10),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "facilis",
        XApideckConsumerID: "cupiditate",
        XApideckServiceID: sdk.String("qui"),
    }, operations.ModifiersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModifierResponse != nil {
        // handle response
    }
}
```

## ModifiersAll

List Modifiers

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
    res, err := s.Modifiers.ModifiersAll(ctx, operations.ModifiersAllRequest{
        Cursor: sdk.String("quae"),
        Fields: sdk.String("laudantium"),
        Limit: sdk.Int64(485628),
        Raw: sdk.Bool(false),
        XApideckAppID: "occaecati",
        XApideckConsumerID: "voluptatibus",
        XApideckServiceID: sdk.String("quisquam"),
    }, operations.ModifiersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModifiersResponse != nil {
        // handle response
    }
}
```

## ModifiersDelete

Delete Modifier

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
    res, err := s.Modifiers.ModifiersDelete(ctx, operations.ModifiersDeleteRequest{
        Filter: &shared.ModifierGroupFilter{
            ModifierGroupID: sdk.String("1234"),
        },
        ID: "e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf",
        Raw: sdk.Bool(false),
        XApideckAppID: "doloribus",
        XApideckConsumerID: "iusto",
        XApideckServiceID: sdk.String("eligendi"),
    }, operations.ModifiersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteModifierResponse != nil {
        // handle response
    }
}
```

## ModifiersOne

Get Modifier

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
    res, err := s.Modifiers.ModifiersOne(ctx, operations.ModifiersOneRequest{
        Fields: sdk.String("ducimus"),
        Filter: &shared.ModifierGroupFilter{
            ModifierGroupID: sdk.String("1234"),
        },
        ID: "0a45626d-4368-413f-96d9-f5fce6c55614",
        Raw: sdk.Bool(false),
        XApideckAppID: "ea",
        XApideckConsumerID: "quo",
        XApideckServiceID: sdk.String("consectetur"),
    }, operations.ModifiersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModifierResponse != nil {
        // handle response
    }
}
```

## ModifiersUpdate

Update Modifier

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
    res, err := s.Modifiers.ModifiersUpdate(ctx, operations.ModifiersUpdateRequest{
        ModifierInput: shared.ModifierInput{
            AlternateName: sdk.String("Modifier New"),
            Available: sdk.Bool(true),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            IdempotencyKey: sdk.String("random_string"),
            ModifierGroupID: "123",
            Name: "Modifier",
            PriceAmount: sdk.Float64(10),
        },
        ID: "e250fb00-8c42-4e14-9aac-366c8dd6b144",
        Raw: sdk.Bool(false),
        XApideckAppID: "explicabo",
        XApideckConsumerID: "provident",
        XApideckServiceID: sdk.String("ipsa"),
    }, operations.ModifiersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModifierResponse != nil {
        // handle response
    }
}
```
