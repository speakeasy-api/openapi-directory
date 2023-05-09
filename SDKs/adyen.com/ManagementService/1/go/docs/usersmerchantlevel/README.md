# UsersMerchantLevel

### Available Operations

* [GetMerchantsMerchantIDUsers](#getmerchantsmerchantidusers) - Get a list of users
* [GetMerchantsMerchantIDUsersUserID](#getmerchantsmerchantidusersuserid) - Get user details
* [PatchMerchantsMerchantIDUsersUserID](#patchmerchantsmerchantidusersuserid) - Update a user
* [PostMerchantsMerchantIDUsers](#postmerchantsmerchantidusers) - Create a new user

## GetMerchantsMerchantIDUsers

Returns a list of users associated with the `merchantId` specified in the path.

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
    res, err := s.UsersMerchantLevel.GetMerchantsMerchantIDUsers(ctx, operations.GetMerchantsMerchantIDUsersRequest{
        MerchantID: "tenetur",
        PageNumber: sdk.Int(493407),
        PageSize: sdk.Int(457835),
        Username: sdk.String("Madonna_Langworth"),
    }, operations.GetMerchantsMerchantIDUsersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMerchantUsersResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDUsersUserID

Returns user details for the `userId` and the `merchantId` specified in the path.

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
    res, err := s.UsersMerchantLevel.GetMerchantsMerchantIDUsersUserID(ctx, operations.GetMerchantsMerchantIDUsersUserIDRequest{
        MerchantID: "earum",
        UserID: "velit",
    }, operations.GetMerchantsMerchantIDUsersUserIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDUsersUserID

Updates user details for the `userId` and the `merchantId` specified in the path.

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
    res, err := s.UsersMerchantLevel.PatchMerchantsMerchantIDUsersUserID(ctx, operations.PatchMerchantsMerchantIDUsersUserIDRequest{
        UpdateMerchantUserRequest: &shared.UpdateMerchantUserRequest{
            AccountGroups: []string{
                "eius",
                "rerum",
                "itaque",
                "dignissimos",
            },
            Active: sdk.Bool(false),
            AuthnAppsToAdd: []string{
                "explicabo",
                "impedit",
            },
            AuthnAppsToRemove: []string{
                "quis",
                "facilis",
            },
            Email: sdk.String("Eddie50@gmail.com"),
            Name: &shared.Name2{
                FirstName: sdk.String("Sydni"),
                LastName: sdk.String("Ernser"),
            },
            Roles: []string{
                "libero",
                "iste",
                "illo",
            },
            TimeZoneCode: sdk.String("minus"),
        },
        MerchantID: "quos",
        UserID: "temporibus",
    }, operations.PatchMerchantsMerchantIDUsersUserIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDUsers

Creates a user for the `merchantId` specified in the path.

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
    res, err := s.UsersMerchantLevel.PostMerchantsMerchantIDUsers(ctx, operations.PostMerchantsMerchantIDUsersRequest{
        CreateMerchantUserRequest: &shared.CreateMerchantUserRequest{
            AccountGroups: []string{
                "iusto",
                "enim",
                "accusamus",
            },
            AuthnApps: []string{
                "voluptates",
            },
            Email: "Donna_Bergnaum@yahoo.com",
            Name: shared.Name{
                FirstName: "Julianne",
                LastName: "Wiegand",
            },
            Roles: []string{
                "modi",
                "earum",
                "architecto",
            },
            TimeZoneCode: sdk.String("aliquam"),
            Username: "Edmond90",
        },
        MerchantID: "consequatur",
    }, operations.PostMerchantsMerchantIDUsersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```
