# Portfolios

## Overview

A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.

### Available Operations

* [AddCustomFieldSettingForPortfolio](#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [AddItemForPortfolio](#additemforportfolio) - Add a portfolio item
* [AddMembersForPortfolio](#addmembersforportfolio) - Add users to a portfolio
* [CreatePortfolio](#createportfolio) - Create a portfolio
* [DeletePortfolio](#deleteportfolio) - Delete a portfolio
* [GetItemsForPortfolio](#getitemsforportfolio) - Get portfolio items
* [GetPortfolio](#getportfolio) - Get a portfolio
* [GetPortfolios](#getportfolios) - Get multiple portfolios
* [RemoveCustomFieldSettingForPortfolio](#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [RemoveItemForPortfolio](#removeitemforportfolio) - Remove a portfolio item
* [RemoveMembersForPortfolio](#removemembersforportfolio) - Remove users from a portfolio
* [UpdatePortfolio](#updateportfolio) - Update a portfolio

## AddCustomFieldSettingForPortfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.AddCustomFieldSettingForPortfolio(ctx, operations.AddCustomFieldSettingForPortfolioRequest{
        RequestBody: operations.AddCustomFieldSettingForPortfolioRequestBody{
            Data: &shared.AddCustomFieldSettingRequest{
                CustomField: "14916",
                InsertAfter: sdk.String("1331"),
                InsertBefore: sdk.String("1331"),
                IsImportant: sdk.Bool(true),
            },
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomFieldSettingForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddItemForPortfolio

Add an item to a portfolio.
Returns an empty data block.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.AddItemForPortfolio(ctx, operations.AddItemForPortfolioRequest{
        RequestBody: operations.AddItemForPortfolioRequestBody{
            Data: &shared.PortfolioAddItemRequest{
                InsertAfter: sdk.String("1331"),
                InsertBefore: sdk.String("1331"),
                Item: "1331",
            },
        },
        OptFields: []string{
            "consequuntur",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddItemForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddMembersForPortfolio

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.AddMembersForPortfolio(ctx, operations.AddMembersForPortfolioRequest{
        RequestBody: operations.AddMembersForPortfolioRequestBody{
            Data: &shared.AddMembersRequest{
                Members: "521621,621373",
            },
        },
        OptFields: []string{
            "magni",
            "sunt",
            "quo",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddMembersForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreatePortfolio

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.CreatePortfolio(ctx, operations.CreatePortfolioRequest{
        RequestBody: operations.CreatePortfolioRequestBodyInput{
            Data: &shared.PortfolioRequestInput{
                Color: shared.PortfolioRequestColorEnumLightGreen.ToPointer(),
                Name: sdk.String("Bug Portfolio"),
                Public: sdk.Bool(false),
                Workspace: sdk.String("167589"),
            },
        },
        OptFields: []string{
            "maxime",
            "ea",
            "excepturi",
            "odit",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortfolio201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeletePortfolio

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

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
    res, err := s.Portfolios.DeletePortfolio(ctx, operations.DeletePortfolioRequest{
        OptFields: []string{
            "accusantium",
            "ab",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetItemsForPortfolio

Get a list of the items in compact form in a portfolio.

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
    res, err := s.Portfolios.GetItemsForPortfolio(ctx, operations.GetItemsForPortfolioRequest{
        Limit: sdk.Int64(697429),
        Offset: sdk.String("ipsam"),
        OptFields: []string{
            "autem",
            "nam",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemsForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPortfolio

Returns the complete portfolio record for a single portfolio.

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
    res, err := s.Portfolios.GetPortfolio(ctx, operations.GetPortfolioRequest{
        OptFields: []string{
            "nemo",
            "voluptatibus",
            "perferendis",
            "fugiat",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPortfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

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
    res, err := s.Portfolios.GetPortfolios(ctx, operations.GetPortfoliosRequest{
        Limit: sdk.Int64(11714),
        Offset: sdk.String("cumque"),
        OptFields: []string{
            "hic",
            "libero",
        },
        OptPretty: sdk.Bool(false),
        Owner: "nobis",
        Workspace: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolios200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveCustomFieldSettingForPortfolio

Removes a custom field setting from a portfolio.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.RemoveCustomFieldSettingForPortfolio(ctx, operations.RemoveCustomFieldSettingForPortfolioRequest{
        RequestBody: operations.RemoveCustomFieldSettingForPortfolioRequestBody{
            Data: &shared.RemoveCustomFieldSettingRequest{
                CustomField: "14916",
            },
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveCustomFieldSettingForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveItemForPortfolio

Remove an item from a portfolio.
Returns an empty data block.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.RemoveItemForPortfolio(ctx, operations.RemoveItemForPortfolioRequest{
        RequestBody: operations.RemoveItemForPortfolioRequestBody{
            Data: &shared.PortfolioRemoveItemRequest{
                Item: "1331",
            },
        },
        OptFields: []string{
            "dignissimos",
            "eaque",
            "quis",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveItemForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveMembersForPortfolio

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.RemoveMembersForPortfolio(ctx, operations.RemoveMembersForPortfolioRequest{
        RequestBody: operations.RemoveMembersForPortfolioRequestBody{
            Data: &shared.RemoveMembersRequest{
                Members: "521621,621373",
            },
        },
        OptFields: []string{
            "perferendis",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveMembersForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatePortfolio

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Portfolios.UpdatePortfolio(ctx, operations.UpdatePortfolioRequest{
        RequestBody: operations.UpdatePortfolioRequestBodyInput{
            Data: &shared.PortfolioRequestInput{
                Color: shared.PortfolioRequestColorEnumLightGreen.ToPointer(),
                Name: sdk.String("Bug Portfolio"),
                Public: sdk.Bool(false),
                Workspace: sdk.String("167589"),
            },
        },
        OptFields: []string{
            "quam",
            "dolor",
            "vero",
            "nostrum",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```
