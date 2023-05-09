# CharityOrg

### Available Operations

* [GetCharityOrg](#getcharityorg) - This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
* [GetCharityOrgs](#getcharityorgs) - This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

## GetCharityOrg

This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.

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
    res, err := s.CharityOrg.GetCharityOrg(ctx, operations.GetCharityOrgRequest{
        XEbayCMarketplaceID: "distinctio",
        CharityOrgID: "quibusdam",
    }, operations.GetCharityOrgSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CharityOrg != nil {
        // handle response
    }
}
```

## GetCharityOrgs

This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.

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
    res, err := s.CharityOrg.GetCharityOrgs(ctx, operations.GetCharityOrgsRequest{
        XEbayCMarketplaceID: "unde",
        Limit: sdk.String("nulla"),
        Offset: sdk.String("corrupti"),
        Q: sdk.String("illum"),
        RegistrationIds: sdk.String("vel"),
    }, operations.GetCharityOrgsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CharitySearchResponse != nil {
        // handle response
    }
}
```
