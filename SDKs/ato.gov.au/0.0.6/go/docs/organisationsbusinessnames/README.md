# OrganisationsBusinessNames

## Overview

A business name is a name or title under which an organisation conducts a business.


### Available Operations

* [DeleteOrganisationsPartyIDBusinessNamesProductID](#deleteorganisationspartyidbusinessnamesproductid) - Delete a business name
* [GetOrganisationsPartyIDBusinessNames](#getorganisationspartyidbusinessnames) - Retrieve a list of business names
* [GetOrganisationsPartyIDBusinessNamesProductID](#getorganisationspartyidbusinessnamesproductid) - Retrieve a business name
* [PostOrganisationsPartyIDBusinessNames](#postorganisationspartyidbusinessnames) - Create a business name
* [PutOrganisationsPartyIDBusinessNamesProductID](#putorganisationspartyidbusinessnamesproductid) - Update a business name

## DeleteOrganisationsPartyIDBusinessNamesProductID

Delete a business name


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
    res, err := s.OrganisationsBusinessNames.DeleteOrganisationsPartyIDBusinessNamesProductID(ctx, operations.DeleteOrganisationsPartyIDBusinessNamesProductIDRequest{
        APIKey: "architecto",
        PartyID: "architecto",
        ProductID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisationsPartyIDBusinessNames

Retrieve a list of business names

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
    res, err := s.OrganisationsBusinessNames.GetOrganisationsPartyIDBusinessNames(ctx, operations.GetOrganisationsPartyIDBusinessNamesRequest{
        APIKey: "ullam",
        PartyID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessNames != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyIDBusinessNamesProductID

Retrieve a business name


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
    res, err := s.OrganisationsBusinessNames.GetOrganisationsPartyIDBusinessNamesProductID(ctx, operations.GetOrganisationsPartyIDBusinessNamesProductIDRequest{
        APIKey: "nihil",
        PartyID: "repellat",
        ProductID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```

## PostOrganisationsPartyIDBusinessNames

Create a business name


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
    res, err := s.OrganisationsBusinessNames.PostOrganisationsPartyIDBusinessNames(ctx, operations.PostOrganisationsPartyIDBusinessNamesRequest{
        APIKey: "sed",
        BusinessNameInput: shared.BusinessNameInput{
            LifecycleState: shared.BusinessNameLifecycleStateEnumSuspended.ToPointer(),
            Name: sdk.String("XYZ Technology Ventures"),
        },
        PartyID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyIDBusinessNamesProductID

Update a business name


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
    res, err := s.OrganisationsBusinessNames.PutOrganisationsPartyIDBusinessNamesProductID(ctx, operations.PutOrganisationsPartyIDBusinessNamesProductIDRequest{
        APIKey: "accusantium",
        BusinessNameInput: shared.BusinessNameInput{
            LifecycleState: shared.BusinessNameLifecycleStateEnumApproved.ToPointer(),
            Name: sdk.String("XYZ Technology Ventures"),
        },
        PartyID: "praesentium",
        ProductID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```
