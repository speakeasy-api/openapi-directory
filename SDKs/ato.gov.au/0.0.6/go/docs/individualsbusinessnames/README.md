# IndividualsBusinessNames

## Overview

A business name is a name or title under which a person conducts a business.


### Available Operations

* [DeleteIndividualsPartyIDBusinessNamesProductID](#deleteindividualspartyidbusinessnamesproductid) - Delete a business name
* [GetIndividualsPartyIDBusinessNames](#getindividualspartyidbusinessnames) - Retrieve a list of business names
* [GetIndividualsPartyIDBusinessNamesProductID](#getindividualspartyidbusinessnamesproductid) - Retrieve a business name
* [PostIndividualsPartyIDBusinessNames](#postindividualspartyidbusinessnames) - Create a business name
* [PutIndividualsPartyIDBusinessNamesProductID](#putindividualspartyidbusinessnamesproductid) - Update a business name

## DeleteIndividualsPartyIDBusinessNamesProductID

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
    res, err := s.IndividualsBusinessNames.DeleteIndividualsPartyIDBusinessNamesProductID(ctx, operations.DeleteIndividualsPartyIDBusinessNamesProductIDRequest{
        APIKey: "excepturi",
        PartyID: "accusantium",
        ProductID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividualsPartyIDBusinessNames

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
    res, err := s.IndividualsBusinessNames.GetIndividualsPartyIDBusinessNames(ctx, operations.GetIndividualsPartyIDBusinessNamesRequest{
        APIKey: "culpa",
        PartyID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessNames != nil {
        // handle response
    }
}
```

## GetIndividualsPartyIDBusinessNamesProductID

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
    res, err := s.IndividualsBusinessNames.GetIndividualsPartyIDBusinessNamesProductID(ctx, operations.GetIndividualsPartyIDBusinessNamesProductIDRequest{
        APIKey: "sapiente",
        PartyID: "architecto",
        ProductID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```

## PostIndividualsPartyIDBusinessNames

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
    res, err := s.IndividualsBusinessNames.PostIndividualsPartyIDBusinessNames(ctx, operations.PostIndividualsPartyIDBusinessNamesRequest{
        APIKey: "dolorem",
        BusinessNameInput: shared.BusinessNameInput{
            LifecycleState: shared.BusinessNameLifecycleStateEnumPendingApproval.ToPointer(),
            Name: sdk.String("XYZ Technology Ventures"),
        },
        PartyID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```

## PutIndividualsPartyIDBusinessNamesProductID

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
    res, err := s.IndividualsBusinessNames.PutIndividualsPartyIDBusinessNamesProductID(ctx, operations.PutIndividualsPartyIDBusinessNamesProductIDRequest{
        APIKey: "repellat",
        BusinessNameInput: shared.BusinessNameInput{
            LifecycleState: shared.BusinessNameLifecycleStateEnumPendingApproval.ToPointer(),
            Name: sdk.String("XYZ Technology Ventures"),
        },
        PartyID: "occaecati",
        ProductID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessName != nil {
        // handle response
    }
}
```
