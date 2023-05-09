# PortfolioMemberships

## Overview

This object determines if a user is a member of a portfolio.

### Available Operations

* [GetPortfolioMembership](#getportfoliomembership) - Get a portfolio membership
* [GetPortfolioMemberships](#getportfoliomemberships) - Get multiple portfolio memberships
* [GetPortfolioMembershipsForPortfolio](#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

## GetPortfolioMembership

Returns the complete portfolio record for a single portfolio membership.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioMemberships.GetPortfolioMembership(ctx, operations.GetPortfolioMembershipRequest{
        OptFields: []string{
            "nemo",
        },
        OptPretty: sdk.Bool(false),
        PortfolioMembershipGid: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolioMembership200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPortfolioMemberships

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioMemberships.GetPortfolioMemberships(ctx, operations.GetPortfolioMembershipsRequest{
        Limit: sdk.Int64(435865),
        Offset: sdk.String("doloribus"),
        OptFields: []string{
            "eius",
            "maxime",
            "deleniti",
            "facilis",
        },
        OptPretty: sdk.Bool(false),
        Portfolio: sdk.String("in"),
        User: sdk.String("architecto"),
        Workspace: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolioMemberships200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPortfolioMembershipsForPortfolio

Returns the compact portfolio membership records for the portfolio.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.PortfolioMemberships.GetPortfolioMembershipsForPortfolio(ctx, operations.GetPortfolioMembershipsForPortfolioRequest{
        Limit: sdk.Int64(919483),
        Offset: sdk.String("ullam"),
        OptFields: []string{
            "nihil",
            "repellat",
            "quibusdam",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "sed",
        User: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolioMembershipsForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```
