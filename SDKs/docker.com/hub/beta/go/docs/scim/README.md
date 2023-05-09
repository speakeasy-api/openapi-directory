# Scim

## Overview

SCIM is a provisioning system that lets you manage users within your identity provider (IdP).
For more information, see [System for Cross-domain Identity management](https://docs.docker.com/docker-hub/scim/).


### Available Operations

* [GetV2Scim20ResourceTypes](#getv2scim20resourcetypes) - List resource types
* [GetV2Scim20ResourceTypesName](#getv2scim20resourcetypesname) - Get a resource type
* [GetV2Scim20Schemas](#getv2scim20schemas) - List schemas
* [GetV2Scim20SchemasID](#getv2scim20schemasid) - Get a schema
* [GetV2Scim20ServiceProviderConfig](#getv2scim20serviceproviderconfig) - Get service provider config
* [GetV2Scim20Users](#getv2scim20users) - List users
* [GetV2Scim20UsersID](#getv2scim20usersid) - Get a user
* [PostV2Scim20Users](#postv2scim20users) - Create user
* [PutV2Scim20UsersID](#putv2scim20usersid) - Update a user

## GetV2Scim20ResourceTypes

Returns all resource types supported for the SCIM configuration.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scim.GetV2Scim20ResourceTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV2Scim20ResourceTypes200ApplicationScimPlusJSONObject != nil {
        // handle response
    }
}
```

## GetV2Scim20ResourceTypesName

Returns a resource type by name.


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
    res, err := s.Scim.GetV2Scim20ResourceTypesName(ctx, operations.GetV2Scim20ResourceTypesNameRequest{
        Name: "Pauline Deckow",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimResourceType != nil {
        // handle response
    }
}
```

## GetV2Scim20Schemas

Returns all schemas supported for the SCIM configuration.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scim.GetV2Scim20Schemas(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV2Scim20Schemas200ApplicationScimPlusJSONObject != nil {
        // handle response
    }
}
```

## GetV2Scim20SchemasID

Returns a schema by ID.


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
    res, err := s.Scim.GetV2Scim20SchemasID(ctx, operations.GetV2Scim20SchemasIDRequest{
        ID: "802d502a-94bb-44f6-bc96-9e9a3efa77df",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimSchema != nil {
        // handle response
    }
}
```

## GetV2Scim20ServiceProviderConfig

Returns a service provider config for Docker's configuration.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scim.GetV2Scim20ServiceProviderConfig(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimServiceProviderConfig != nil {
        // handle response
    }
}
```

## GetV2Scim20Users

List users, returns paginated users for an organization. Use `startIndex`
and `count` query parameters to receive paginated results.

**Sorting:**<br>
Sorting lets you to specify the order of returned resources by specifying
a combination of `sortBy` and `sortOrder` query parameters.

The `sortBy` parameter specifies the attribute whose value will be used
to order the returned responses. The `sortOrder` parameter defines the
order in which the `sortBy` parameter is applied. Allowed values are
"ascending" and "descending".

**Filtering:**<br>
You can request a subset of resources by specifying the `filter` query
parameter containing a filter expression. Attribute names and attribute
operators used in filters are case insensitive. The filter parameter
must contain at least one valid expression. Each expression must contain
an attribute name followed by an attribute operator and an optional
value.

Supported operators are listed below.

- `eq` equal
- `ne` not equal
- `co` contains
- `sw` starts with
- `and` Logical "and"
- `or` Logical "or"
- `not` "Not" function
- `()` Precedence grouping


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
    res, err := s.Scim.GetV2Scim20Users(ctx, operations.GetV2Scim20UsersRequest{
        Attributes: sdk.String("rerum"),
        Count: sdk.Int64(116202),
        Filter: sdk.String("magnam"),
        SortBy: sdk.String("cumque"),
        SortOrder: operations.GetV2Scim20UsersSortOrderEnumDescending.ToPointer(),
        StartIndex: sdk.Int64(411820),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV2Scim20Users200ApplicationScimPlusJSONObject != nil {
        // handle response
    }
}
```

## GetV2Scim20UsersID

Returns a user by ID.


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
    res, err := s.Scim.GetV2Scim20UsersID(ctx, operations.GetV2Scim20UsersIDRequest{
        ID: "6ae395ef-b9ba-488f-ba66-997074ba4469",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimUser != nil {
        // handle response
    }
}
```

## PostV2Scim20Users

Creates a user. If the user already exists by email, they are assigned
to the organization on the "company" team.


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
    res, err := s.Scim.PostV2Scim20Users(ctx, operations.PostV2Scim20UsersRequestBody{
        Name: &shared.ScimUserName{
            FamilyName: sdk.String("Snow"),
            GivenName: sdk.String("Jon"),
        },
        Schemas: []string{
            "urn:ietf:params:scim:schemas:core:2.0:User",
            "urn:ietf:params:scim:schemas:core:2.0:User",
            "urn:ietf:params:scim:schemas:core:2.0:User",
        },
        UserName: "jon.snow@docker.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimUser != nil {
        // handle response
    }
}
```

## PutV2Scim20UsersID

Updates a user. Use this route to change the user's name, activate,
and deactivate the user.


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
    res, err := s.Scim.PutV2Scim20UsersID(ctx, operations.PutV2Scim20UsersIDRequest{
        RequestBody: operations.PutV2Scim20UsersIDRequestBody{
            Enabled: sdk.Bool(false),
            Name: &shared.ScimUserName{
                FamilyName: sdk.String("Snow"),
                GivenName: sdk.String("Jon"),
            },
            Schemas: []string{
                "urn:ietf:params:scim:schemas:core:2.0:User",
                "urn:ietf:params:scim:schemas:core:2.0:User",
            },
        },
        ID: "e2141959-890a-4fa5-a3e2-516fe4c8b711",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScimUser != nil {
        // handle response
    }
}
```
