# DistrictAdmins

### Available Operations

* [GetDistrictAdmin](#getdistrictadmin) - Returns a specific district admin
* [GetDistrictAdmins](#getdistrictadmins) - Returns a list of district admins

## GetDistrictAdmin

Returns a specific district admin

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
    res, err := s.DistrictAdmins.GetDistrictAdmin(ctx, operations.GetDistrictAdminRequest{
        ID: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictAdminResponse != nil {
        // handle response
    }
}
```

## GetDistrictAdmins

Returns a list of district admins

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
    res, err := s.DistrictAdmins.GetDistrictAdmins(ctx, operations.GetDistrictAdminsRequest{
        EndingBefore: sdk.String("dicta"),
        ShowLinks: sdk.String("harum"),
        StartingAfter: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictAdminsResponse != nil {
        // handle response
    }
}
```
