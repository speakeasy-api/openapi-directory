# Fields

## Overview

Field data endpoints.

### Available Operations

* [FetchAllFields](#fetchallfields) - Retrieve list of all Fields the user has access to.
* [FetchFieldByID](#fetchfieldbyid) - Retrieve a specific Field by ID
* [FetchFields](#fetchfields) - Retrieve list of Fields

## FetchAllFields

Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.

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
    res, err := s.Fields.FetchAllFields(ctx, operations.FetchAllFieldsRequest{
        XLimit: sdk.Int(428769),
        XNextToken: sdk.String("vero"),
        FieldName: sdk.String("aspernatur"),
    }, operations.FetchAllFieldsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fields != nil {
        // handle response
    }
}
```

## FetchFieldByID

Retrieve a given **Field** by ID.

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
    res, err := s.Fields.FetchFieldByID(ctx, operations.FetchFieldByIDRequest{
        FieldID: "14195989-0afa-4563-a251-6fe4c8b711e5",
    }, operations.FetchFieldByIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Field != nil {
        // handle response
    }
}
```

## FetchFields

Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.

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
    res, err := s.Fields.FetchFields(ctx, operations.FetchFieldsRequest{
        XLimit: sdk.Int(714242),
        XNextToken: sdk.String("nihil"),
        FieldName: sdk.String("repellat"),
    }, operations.FetchFieldsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fields != nil {
        // handle response
    }
}
```
