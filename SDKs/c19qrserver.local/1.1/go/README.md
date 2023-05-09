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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AttendeesSignins.DeleteSigninSigninID(ctx, operations.DeleteSigninSigninIDRequest{
        SigninID: 1,
    })
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


### [AttendeesSignins](docs/attendeessignins/README.md)

* [DeleteSigninSigninID](docs/attendeessignins/README.md#deletesigninsigninid) - Delete a signin record
* [GetSigninSigninID](docs/attendeessignins/README.md#getsigninsigninid) - Retrieve the information associated with a signin record
* [GetSignins](docs/attendeessignins/README.md#getsignins) - Get signin info
* [PostSignin](docs/attendeessignins/README.md#postsignin) - Create a new signin record
* [PutSigninSigninID](docs/attendeessignins/README.md#putsigninsigninid) - Update a signin record

### [Authentication](docs/authentication/README.md)

* [PostLogin](docs/authentication/README.md#postlogin) - Log in to get an API token
* [PostLogout](docs/authentication/README.md#postlogout) - Log out

### [Passwords](docs/passwords/README.md)

* [PostChangePassword](docs/passwords/README.md#postchangepassword) - Used for changing your password
* [PostRequestPasswordReset](docs/passwords/README.md#postrequestpasswordreset) - Used for requesting a password reset code
* [PostVerifyPasswordChange](docs/passwords/README.md#postverifypasswordchange) - Used for resetting your password when you forgot it

### [TeamMembers](docs/teammembers/README.md)

* [DeleteUserUserID](docs/teammembers/README.md#deleteuseruserid) - Delete a team member's user record
* [GetUserUserID](docs/teammembers/README.md#getuseruserid) - Retrieve the information associated with a team member's user record
* [GetUsers](docs/teammembers/README.md#getusers) - Retrieve the information associated with all team members' user records
* [PostUser](docs/teammembers/README.md#postuser) - Create a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
