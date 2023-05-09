# Categories

## Overview

Categorisation

### Available Operations

* [~~GetAccountCategory~~](#getaccountcategory) - Get suggested and/or confirmed category for a specific account :warning: **Deprecated**
* [~~ListAccountsCategories~~](#listaccountscategories) - List suggested and confirmed account categories :warning: **Deprecated**
* [~~ListAvailableAccountCategories~~](#listavailableaccountcategories) - List account categories :warning: **Deprecated**
* [~~UpdateAccountCategory~~](#updateaccountcategory) - Patch account categories :warning: **Deprecated**
* [~~UpdateAccountsCategories~~](#updateaccountscategories) - Confirm categories for accounts :warning: **Deprecated**

## ~~GetAccountCategory~~

Get category for specific nominal account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Categories.GetAccountCategory(ctx, operations.GetAccountCategoryRequest{
        AccountID: "provident",
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategorisedAccount != nil {
        // handle response
    }
}
```

## ~~ListAccountsCategories~~

Lists suggested and confirmed chart of account categories for the given company and data connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Categories.ListAccountsCategories(ctx, operations.ListAccountsCategoriesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategorisedAccounts != nil {
        // handle response
    }
}
```

## ~~ListAvailableAccountCategories~~

Lists available account categories Codat's categorisation engine can provide. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.ListAvailableAccountCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Categories != nil {
        // handle response
    }
}
```

## ~~UpdateAccountCategory~~

Update category for a specific nominal account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Categories.UpdateAccountCategory(ctx, operations.UpdateAccountCategoryRequest{
        ConfirmCategory: &shared.ConfirmCategory{
            Confirmed: shared.AccountCategory{
                DetailType: sdk.String("quibusdam"),
                Subtype: sdk.String("unde"),
                Type: sdk.String("nulla"),
            },
        },
        AccountID: "corrupti",
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategorisedAccount != nil {
        // handle response
    }
}
```

## ~~UpdateAccountsCategories~~

Comfirms the categories for all or a batch of accounts for a specific connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Categories.UpdateAccountsCategories(ctx, operations.UpdateAccountsCategoriesRequest{
        ConfirmCategories: &shared.ConfirmCategories{
            Categories: []shared.ConfirmCategoriesCategories{
                shared.ConfirmCategoriesCategories{
                    AccountRef: &shared.ConfirmCategoriesCategoriesAccountRef{
                        ID: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
                    },
                    Confirmed: &shared.AccountCategory{
                        DetailType: sdk.String("at"),
                        Subtype: sdk.String("maiores"),
                        Type: sdk.String("molestiae"),
                    },
                },
                shared.ConfirmCategoriesCategories{
                    AccountRef: &shared.ConfirmCategoriesCategoriesAccountRef{
                        ID: "cc78ca1b-a928-4fc8-9674-2cb739205929",
                    },
                    Confirmed: &shared.AccountCategory{
                        DetailType: sdk.String("dolor"),
                        Subtype: sdk.String("natus"),
                        Type: sdk.String("laboriosam"),
                    },
                },
                shared.ConfirmCategoriesCategories{
                    AccountRef: &shared.ConfirmCategoriesCategoriesAccountRef{
                        ID: "fea7596e-b10f-4aaa-a352-c5955907aff1",
                    },
                    Confirmed: &shared.AccountCategory{
                        DetailType: sdk.String("mollitia"),
                        Subtype: sdk.String("dolorem"),
                        Type: sdk.String("culpa"),
                    },
                },
                shared.ConfirmCategoriesCategories{
                    AccountRef: &shared.ConfirmCategoriesCategoriesAccountRef{
                        ID: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
                    },
                    Confirmed: &shared.AccountCategory{
                        DetailType: sdk.String("vero"),
                        Subtype: sdk.String("nihil"),
                        Type: sdk.String("praesentium"),
                    },
                },
            },
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategorisedAccounts != nil {
        // handle response
    }
}
```
