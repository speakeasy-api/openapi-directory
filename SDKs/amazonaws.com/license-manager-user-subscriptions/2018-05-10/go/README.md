# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/license-manager-user-subscriptions/2018-05-10/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateUser(ctx, operations.AssociateUserRequest{
        RequestBody: operations.AssociateUserRequestBody{
            Domain: sdk.String("corrupti"),
            IdentityProvider: operations.AssociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("provident"),
                },
            },
            InstanceID: "distinctio",
            Username: "Rosalinda_Mitchell84",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateUserResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateUser](docs/sdk/README.md#associateuser) - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [DeregisterIdentityProvider](docs/sdk/README.md#deregisteridentityprovider) - Deregisters the identity provider from providing user-based subscriptions.
* [DisassociateUser](docs/sdk/README.md#disassociateuser) - Disassociates the user from an EC2 instance providing user-based subscriptions.
* [ListIdentityProviders](docs/sdk/README.md#listidentityproviders) - Lists the identity providers for user-based subscriptions.
* [ListInstances](docs/sdk/README.md#listinstances) - Lists the EC2 instances providing user-based subscriptions.
* [ListProductSubscriptions](docs/sdk/README.md#listproductsubscriptions) - Lists the user-based subscription products available from an identity provider.
* [ListUserAssociations](docs/sdk/README.md#listuserassociations) - Lists user associations for an identity provider.
* [RegisterIdentityProvider](docs/sdk/README.md#registeridentityprovider) - Registers an identity provider for user-based subscriptions.
* [StartProductSubscription](docs/sdk/README.md#startproductsubscription) - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [StopProductSubscription](docs/sdk/README.md#stopproductsubscription) - Stops a product subscription for a user with the specified identity provider.
* [UpdateIdentityProviderSettings](docs/sdk/README.md#updateidentityprovidersettings) - Updates additional product configuration settings for the registered identity provider.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
