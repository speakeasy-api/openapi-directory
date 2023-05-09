# Platform

### Available Operations

* [GetBalancePlatformsID](#getbalanceplatformsid) - Get a balance platform
* [GetBalancePlatformsIDAccountHolders](#getbalanceplatformsidaccountholders) - Get all account holders under a balance platform

## GetBalancePlatformsID

Returns a balance platform.

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
    res, err := s.Platform.GetBalancePlatformsID(ctx, operations.GetBalancePlatformsIDRequest{
        ID: "ce7e253b-6684-451c-ac6e-205e16deab3f",
    }, operations.GetBalancePlatformsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalancePlatform != nil {
        // handle response
    }
}
```

## GetBalancePlatformsIDAccountHolders

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

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
    res, err := s.Platform.GetBalancePlatformsIDAccountHolders(ctx, operations.GetBalancePlatformsIDAccountHoldersRequest{
        ID: "ec9578a6-4584-4273-a841-8d162309fb09",
        Limit: sdk.Int(178580),
        Offset: sdk.Int(579011),
    }, operations.GetBalancePlatformsIDAccountHoldersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedAccountHoldersResponse != nil {
        // handle response
    }
}
```
