# SchoolAdmins

### Available Operations

* [GetSchoolAdmin](#getschooladmin) - Returns a specific school admin
* [GetSchoolAdmins](#getschooladmins) - Returns a list of school admins
* [GetSchoolsForSchoolAdmin](#getschoolsforschooladmin) - Returns the schools for a school admin

## GetSchoolAdmin

Returns a specific school admin

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SchoolAdmins.GetSchoolAdmin(ctx, operations.GetSchoolAdminRequest{
        ID: "100674eb-f692-480d-9ba7-7a89ebf737ae",
        Include: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolAdminResponse != nil {
        // handle response
    }
}
```

## GetSchoolAdmins

Returns a list of school admins

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SchoolAdmins.GetSchoolAdmins(ctx, operations.GetSchoolAdminsRequest{
        EndingBefore: sdk.String("aspernatur"),
        Limit: sdk.Int64(20651),
        StartingAfter: sdk.String("amet"),
        Where: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolAdminsResponse != nil {
        // handle response
    }
}
```

## GetSchoolsForSchoolAdmin

Returns the schools for a school admin

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SchoolAdmins.GetSchoolsForSchoolAdmin(ctx, operations.GetSchoolsForSchoolAdminRequest{
        EndingBefore: sdk.String("accusamus"),
        ID: "5e6a95d8-a0d4-446c-a2af-7a73cf3be453",
        Limit: sdk.Int64(957451),
        StartingAfter: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolsResponse != nil {
        // handle response
    }
}
```
