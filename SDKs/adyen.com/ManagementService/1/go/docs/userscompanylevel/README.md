# UsersCompanyLevel

### Available Operations

* [GetCompaniesCompanyIDUsers](#getcompaniescompanyidusers) - Get a list of users
* [GetCompaniesCompanyIDUsersUserID](#getcompaniescompanyidusersuserid) - Get user details
* [PatchCompaniesCompanyIDUsersUserID](#patchcompaniescompanyidusersuserid) - Update user details
* [PostCompaniesCompanyIDUsers](#postcompaniescompanyidusers) - Create a new user

## GetCompaniesCompanyIDUsers

Returns the list of users for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


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
    res, err := s.UsersCompanyLevel.GetCompaniesCompanyIDUsers(ctx, operations.GetCompaniesCompanyIDUsersRequest{
        CompanyID: "asperiores",
        PageNumber: sdk.Int(924293),
        PageSize: sdk.Int(912151),
        Username: sdk.String("Jody2"),
    }, operations.GetCompaniesCompanyIDUsersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyUsersResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDUsersUserID

Returns user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


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
    res, err := s.UsersCompanyLevel.GetCompaniesCompanyIDUsersUserID(ctx, operations.GetCompaniesCompanyIDUsersUserIDRequest{
        CompanyID: "aliquid",
        UserID: "necessitatibus",
    }, operations.GetCompaniesCompanyIDUsersUserIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyUser != nil {
        // handle response
    }
}
```

## PatchCompaniesCompanyIDUsersUserID

Updates user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


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
    res, err := s.UsersCompanyLevel.PatchCompaniesCompanyIDUsersUserID(ctx, operations.PatchCompaniesCompanyIDUsersUserIDRequest{
        UpdateCompanyUserRequest: &shared.UpdateCompanyUserRequest{
            AccountGroups: []string{
                "deleniti",
            },
            Active: sdk.Bool(false),
            AssociatedMerchantAccounts: []string{
                "nesciunt",
            },
            AuthnAppsToAdd: []string{
                "laborum",
                "aliquam",
                "deserunt",
                "modi",
            },
            AuthnAppsToRemove: []string{
                "impedit",
            },
            Email: sdk.String("Julius.Beier99@gmail.com"),
            Name: &shared.Name2{
                FirstName: sdk.String("Brenna"),
                LastName: sdk.String("Block"),
            },
            Roles: []string{
                "fugit",
            },
            TimeZoneCode: sdk.String("fuga"),
        },
        CompanyID: "hic",
        UserID: "eaque",
    }, operations.PatchCompaniesCompanyIDUsersUserIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyUser != nil {
        // handle response
    }
}
```

## PostCompaniesCompanyIDUsers

Creates the user for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


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
    res, err := s.UsersCompanyLevel.PostCompaniesCompanyIDUsers(ctx, operations.PostCompaniesCompanyIDUsersRequest{
        CreateCompanyUserRequest: &shared.CreateCompanyUserRequest{
            AccountGroups: []string{
                "architecto",
            },
            AssociatedMerchantAccounts: []string{
                "aspernatur",
            },
            AuthnApps: []string{
                "enim",
                "illo",
                "magnam",
                "delectus",
            },
            Email: "Noelia_Rolfson@gmail.com",
            Name: shared.Name{
                FirstName: "Aniyah",
                LastName: "Lesch",
            },
            Roles: []string{
                "hic",
                "excepturi",
                "aliquid",
            },
            TimeZoneCode: sdk.String("sed"),
            Username: "Bennie_Murazik",
        },
        CompanyID: "dolore",
    }, operations.PostCompaniesCompanyIDUsersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCompanyUserResponse != nil {
        // handle response
    }
}
```
