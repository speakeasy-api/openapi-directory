# Credit

### Available Operations

* [GetCredits](#getcredits) - Get a list of credits
* [GetCreditsID](#getcreditsid) - Get a specific credit

## GetCredits

Get a list of credits

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
    res, err := s.Credit.GetCredits(ctx, operations.GetCreditsRequest{
        CreditableID: sdk.String("f69280d1-ba77-4a89-abf7-37ae4203ce5e"),
        CreditableType: operations.GetCreditsCreditableTypeEnumSeason.ToPointer(),
        Ids: []string{
            "95d8a0d4-46ce-42af-ba73-cf3be453f870",
            "b326b5a7-3429-4cdb-9a84-22bb679d2322",
            "715bf0cb-b1e3-41b8-b90f-3443a1108e0a",
        },
        PageNumber: sdk.Int64(833038),
        PageSize: sdk.Int64(785153),
        Sort: []GetCreditsSortEnum{
            operations.GetCreditsSortEnumCreatedAt,
            operations.GetCreditsSortEnumUpdatedAt,
            operations.GetCreditsSortEnumPosition,
            operations.GetCreditsSortEnumCreatedAt,
        },
    }, operations.GetCreditsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCredits200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetCreditsID

Get a specific credit

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
    res, err := s.Credit.GetCreditsID(ctx, operations.GetCreditsIDRequest{
        ID: "1879fce9-53f7-43ef-bfbc-7abd74dd39c0",
    }, operations.GetCreditsIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCreditsID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
