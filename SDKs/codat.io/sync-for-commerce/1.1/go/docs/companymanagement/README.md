# CompanyManagement

## Overview

Create new and manage existing sync for commerce companies.

### Available Operations

* [CreateCompany](#createcompany) - Create a sync for commerce company
* [CreateConnection](#createconnection) - Create a data connection
* [ListCompanies](#listcompanies) - List companies
* [ListConnections](#listconnections) - List data connections
* [UpdateConnection](#updateconnection) - Update data connection

## CreateCompany

Creates a Codat company with a commerce partner data connection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.CreateCompany(ctx, shared.CreateCompany{
        Name: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Company != nil {
        // handle response
    }
}
```

## CreateConnection

Create a data connection for company.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.CreateConnection(ctx, operations.CreateConnectionRequest{
        RequestBody: sdk.String("distinctio"),
        CompanyID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## ListCompanies

Retrieve a list of all companies the client has created.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.ListCompanies(ctx, operations.ListCompaniesRequest{
        OrderBy: sdk.String("repellendus"),
        Page: 957156,
        PageSize: sdk.Int(778157),
        Query: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Companies != nil {
        // handle response
    }
}
```

## ListConnections

Retrieve previously created data connections.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.ListConnections(ctx, operations.ListConnectionsRequest{
        CompanyID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        OrderBy: sdk.String("ad"),
        Page: 617636,
        PageSize: sdk.Int(149675),
        Query: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```

## UpdateConnection

Update a data connection

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyManagement.UpdateConnection(ctx, operations.UpdateConnectionRequest{
        UpdateConnection: &shared.UpdateConnection{
            Status: sdk.String("dolor"),
        },
        CompanyID: "96fea759-6eb1-40fa-aa23-52c5955907af",
        ConnectionID: "f1a3a2fa-9467-4739-a51a-a52c3f5ad019",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
