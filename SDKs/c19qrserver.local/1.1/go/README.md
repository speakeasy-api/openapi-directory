# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/c19qrserver.local/1.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DeleteSigninSigninIDRequest{
        SigninID: 1,
    }

    ctx := context.Background()
    res, err := s.AttendeesSignins.DeleteSigninSigninID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AttendeesSignins

* `DeleteSigninSigninID` - Delete a signin record
* `GetSigninSigninID` - Retrieve the information associated with a signin record
* `GetSignins` - Get signin info
* `PostSignin` - Create a new signin record
* `PutSigninSigninID` - Update a signin record

### Authentication

* `PostLogin` - Log in to get an API token
* `PostLogout` - Log out

### Passwords

* `PostChangePassword` - Used for changing your password
* `PostRequestPasswordReset` - Used for requesting a password reset code
* `PostVerifyPasswordChange` - Used for resetting your password when you forgot it

### TeamMembers

* `DeleteUserUserID` - Delete a team member's user record
* `GetUserUserID` - Retrieve the information associated with a team member's user record
* `GetUsers` - Retrieve the information associated with all team members' user records
* `PostUser` - Create a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
