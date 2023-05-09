# UserManagement

### Available Operations

* [DeleteUsersUserid](#deleteusersuserid) - Unlink User
* [DeleteUsersUseridAuthorization](#deleteusersuseridauthorization) - Deauthorize User
* [PostUsersUseridLink](#postusersuseridlink) - Link User

## DeleteUsersUserid

Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens

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
    res, err := s.UserManagement.DeleteUsersUserid(ctx, operations.DeleteUsersUseridRequest{
        UserID: "placeat",
    }, operations.DeleteUsersUseridSecurity{
        ClientAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUsersUseridAuthorization

Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.

All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.

No webhook events will be generated for a deauthorized user.

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
    res, err := s.UserManagement.DeleteUsersUseridAuthorization(ctx, operations.DeleteUsersUseridAuthorizationRequest{
        UserID: "voluptatum",
    }, operations.DeleteUsersUseridAuthorizationSecurity{
        ClientAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersUseridLink

Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.

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
    res, err := s.UserManagement.PostUsersUseridLink(ctx, operations.PostUsersUseridLinkRequest{
        RequestBody: &operations.PostUsersUseridLinkRequestBody{
            ForceLanguage: sdk.String("nb-NO"),
            LinkMultiple: sdk.Bool(false),
            UserImage: sdk.String("https://cdn.website.example/user/x/profile.jpg"),
            UserName: sdk.String("Ola"),
            Vendor: operations.PostUsersUseridLinkRequestBodyVendorEnumTesla.ToPointer(),
        },
        UserID: "iusto",
    }, operations.PostUsersUseridLinkSecurity{
        ClientAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersUseridLink200ApplicationJSONObject != nil {
        // handle response
    }
}
```
