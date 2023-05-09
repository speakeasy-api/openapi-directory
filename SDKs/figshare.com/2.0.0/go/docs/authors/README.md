# Authors

### Available Operations

* [PrivateAuthorDetails](#privateauthordetails) - Author details
* [PrivateAuthorsSearch](#privateauthorssearch) - Search Authors

## PrivateAuthorDetails

View author details

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
    res, err := s.Authors.PrivateAuthorDetails(ctx, operations.PrivateAuthorDetailsRequest{
        AuthorID: 463451,
    }, operations.PrivateAuthorDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorComplete != nil {
        // handle response
    }
}
```

## PrivateAuthorsSearch

Search for authors

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authors.PrivateAuthorsSearch(ctx, shared.PrivateAuthorsSearch{
        GroupID: sdk.Int64(223924),
        InstitutionID: sdk.Int64(1),
        IsActive: sdk.Bool(false),
        IsPublic: sdk.Bool(false),
        Limit: sdk.Int64(10),
        Offset: sdk.Int64(874573),
        Orcid: sdk.String("nostrum"),
        Order: shared.PrivateAuthorsSearchOrderEnumPublishedDate.ToPointer(),
        OrderDirection: shared.PrivateAuthorsSearchOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(10),
        SearchFor: sdk.String("figshare"),
    }, operations.PrivateAuthorsSearchSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authors != nil {
        // handle response
    }
}
```
