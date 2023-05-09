# ModifierGroups

### Available Operations

* [ModifierGroupsAdd](#modifiergroupsadd) - Create Modifier Group
* [ModifierGroupsAll](#modifiergroupsall) - List Modifier Groups
* [ModifierGroupsDelete](#modifiergroupsdelete) - Delete Modifier Group
* [ModifierGroupsOne](#modifiergroupsone) - Get Modifier Group
* [ModifierGroupsUpdate](#modifiergroupsupdate) - Update Modifier Group

## ModifierGroupsAdd

Create Modifier Group

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
    res, err := s.ModifierGroups.ModifierGroupsAdd(ctx, operations.ModifierGroupsAddRequest{
        ModifierGroupInput: shared.ModifierGroupInput{
            AlternateName: sdk.String("Modifier New"),
            Deleted: sdk.Bool(true),
            MaximumAllowed: sdk.Int64(5),
            MinimumRequired: sdk.Int64(1),
            Modifiers: []shared.ModifierGroupModifiers{
                shared.ModifierGroupModifiers{
                    AlternateName: sdk.String("Modifier New"),
                    Available: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Modifier"),
                    PriceAmount: sdk.Float64(10),
                },
                shared.ModifierGroupModifiers{
                    AlternateName: sdk.String("Modifier New"),
                    Available: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Modifier"),
                    PriceAmount: sdk.Float64(10),
                },
                shared.ModifierGroupModifiers{
                    AlternateName: sdk.String("Modifier New"),
                    Available: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Modifier"),
                    PriceAmount: sdk.Float64(10),
                },
            },
            Name: sdk.String("Modifier"),
            PresentAtAllLocations: sdk.Bool(false),
            RowVersion: sdk.String("1-12345"),
            SelectionType: shared.ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumSingle.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "asperiores",
        XApideckConsumerID: "nihil",
        XApideckServiceID: sdk.String("ipsum"),
    }, operations.ModifierGroupsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModifierGroupResponse != nil {
        // handle response
    }
}
```

## ModifierGroupsAll

List Modifier Groups

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
    res, err := s.ModifierGroups.ModifierGroupsAll(ctx, operations.ModifierGroupsAllRequest{
        Cursor: sdk.String("voluptate"),
        Fields: sdk.String("id"),
        Limit: sdk.Int64(906418),
        Raw: sdk.Bool(false),
        XApideckAppID: "eius",
        XApideckConsumerID: "aspernatur",
        XApideckServiceID: sdk.String("perferendis"),
    }, operations.ModifierGroupsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModifierGroupsResponse != nil {
        // handle response
    }
}
```

## ModifierGroupsDelete

Delete Modifier Group

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
    res, err := s.ModifierGroups.ModifierGroupsDelete(ctx, operations.ModifierGroupsDeleteRequest{
        ID: "3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be",
        Raw: sdk.Bool(false),
        XApideckAppID: "numquam",
        XApideckConsumerID: "enim",
        XApideckServiceID: sdk.String("dolorem"),
    }, operations.ModifierGroupsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteModifierGroupResponse != nil {
        // handle response
    }
}
```

## ModifierGroupsOne

Get Modifier Group

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
    res, err := s.ModifierGroups.ModifierGroupsOne(ctx, operations.ModifierGroupsOneRequest{
        Fields: sdk.String("sapiente"),
        ID: "870b326b-5a73-4429-8db1-a8422bb679d2",
        Raw: sdk.Bool(false),
        XApideckAppID: "neque",
        XApideckConsumerID: "fugit",
        XApideckServiceID: sdk.String("magni"),
    }, operations.ModifierGroupsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModifierGroupResponse != nil {
        // handle response
    }
}
```

## ModifierGroupsUpdate

Update Modifier Group

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
    res, err := s.ModifierGroups.ModifierGroupsUpdate(ctx, operations.ModifierGroupsUpdateRequest{
        ModifierGroupInput: shared.ModifierGroupInput{
            AlternateName: sdk.String("Modifier New"),
            Deleted: sdk.Bool(true),
            MaximumAllowed: sdk.Int64(5),
            MinimumRequired: sdk.Int64(1),
            Modifiers: []shared.ModifierGroupModifiers{
                shared.ModifierGroupModifiers{
                    AlternateName: sdk.String("Modifier New"),
                    Available: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Modifier"),
                    PriceAmount: sdk.Float64(10),
                },
                shared.ModifierGroupModifiers{
                    AlternateName: sdk.String("Modifier New"),
                    Available: sdk.Bool(true),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    ID: sdk.String("12345"),
                    Name: sdk.String("Modifier"),
                    PriceAmount: sdk.Float64(10),
                },
            },
            Name: sdk.String("Modifier"),
            PresentAtAllLocations: sdk.Bool(false),
            RowVersion: sdk.String("1-12345"),
            SelectionType: shared.ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnumSingle.ToPointer(),
        },
        ID: "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad",
        Raw: sdk.Bool(false),
        XApideckAppID: "porro",
        XApideckConsumerID: "doloribus",
        XApideckServiceID: sdk.String("ut"),
    }, operations.ModifierGroupsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModifierGroupResponse != nil {
        // handle response
    }
}
```
