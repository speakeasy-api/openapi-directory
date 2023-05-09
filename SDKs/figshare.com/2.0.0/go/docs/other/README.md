# Other

### Available Operations

* [CategoriesList](#categorieslist) - Public Categories
* [FileDownload](#filedownload) - Public File Download
* [ItemTypesList](#itemtypeslist) - Item Types
* [LicensesList](#licenseslist) - Public Licenses
* [PrivateAccount](#privateaccount) - Private Account information
* [PrivateFundingSearch](#privatefundingsearch) - Search Funding
* [PrivateLicensesList](#privatelicenseslist) - Private Account Licenses

## CategoriesList

Returns a list of public categories

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
    res, err := s.Other.CategoriesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Categories != nil {
        // handle response
    }
}
```

## FileDownload

Starts the download of a file

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
    res, err := s.Other.FileDownload(ctx, operations.FileDownloadRequest{
        FileID: 458604,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ItemTypesList

Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.

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
    res, err := s.Other.ItemTypesList(ctx, operations.ItemTypesListRequest{
        GroupID: sdk.Int64(800379),
    }, operations.ItemTypesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemTypes != nil {
        // handle response
    }
}
```

## LicensesList

Returns a list of public licenses

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
    res, err := s.Other.LicensesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Licenses != nil {
        // handle response
    }
}
```

## PrivateAccount

Account information for token/personal token

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
    res, err := s.Other.PrivateAccount(ctx, operations.PrivateAccountSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## PrivateFundingSearch

Search for fundings

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
    res, err := s.Other.PrivateFundingSearch(ctx, shared.FundingSearch{
        SearchFor: sdk.String("nam"),
    }, operations.PrivateFundingSearchSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FundingInformations != nil {
        // handle response
    }
}
```

## PrivateLicensesList

This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.

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
    res, err := s.Other.PrivateLicensesList(ctx, operations.PrivateLicensesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Licenses != nil {
        // handle response
    }
}
```
