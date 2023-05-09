# Organizations

### Available Operations

* [GetOrgArticles](#getorgarticles) - Organization's Articles
* [GetOrgUsers](#getorgusers) - Organization's users
* [GetOrganization](#getorganization) - An organization

## GetOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrgArticles(ctx, operations.GetOrgArticlesRequest{
        Page: sdk.Int(449950),
        PerPage: sdk.Int(359508),
        Username: "Leslie_Kertzmann9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrgUsers(ctx, operations.GetOrgUsersRequest{
        Page: sdk.Int(60225),
        PerPage: sdk.Int(969810),
        Username: "Manuela.OHara21",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## GetOrganization

This endpoint allows the client to retrieve a single organization by their username

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrganization(ctx, operations.GetOrganizationRequest{
        Username: "Florian.Champlin60",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```
