# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/workspaces-web/2020-07-08/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateBrowserSettings(ctx, operations.AssociateBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        BrowserSettingsArn: "illum",
        PortalArn: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateBrowserSettingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateBrowserSettings](docs/sdk/README.md#associatebrowsersettings) - Associates a browser settings resource with a web portal.
* [AssociateNetworkSettings](docs/sdk/README.md#associatenetworksettings) - Associates a network settings resource with a web portal.
* [AssociateTrustStore](docs/sdk/README.md#associatetruststore) - Associates a trust store with a web portal.
* [AssociateUserAccessLoggingSettings](docs/sdk/README.md#associateuseraccessloggingsettings) - Associates a user access logging settings resource with a web portal.
* [AssociateUserSettings](docs/sdk/README.md#associateusersettings) - Associates a user settings resource with a web portal.
* [CreateBrowserSettings](docs/sdk/README.md#createbrowsersettings) - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* [CreateIdentityProvider](docs/sdk/README.md#createidentityprovider) - Creates an identity provider resource that is then associated with a web portal.
* [CreateNetworkSettings](docs/sdk/README.md#createnetworksettings) - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* [CreatePortal](docs/sdk/README.md#createportal) - Creates a web portal.
* [CreateTrustStore](docs/sdk/README.md#createtruststore) - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* [CreateUserAccessLoggingSettings](docs/sdk/README.md#createuseraccessloggingsettings) - Creates a user access logging settings resource that can be associated with a web portal.
* [CreateUserSettings](docs/sdk/README.md#createusersettings) - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* [DeleteBrowserSettings](docs/sdk/README.md#deletebrowsersettings) - Deletes browser settings.
* [DeleteIdentityProvider](docs/sdk/README.md#deleteidentityprovider) - Deletes the identity provider.
* [DeleteNetworkSettings](docs/sdk/README.md#deletenetworksettings) - Deletes network settings.
* [DeletePortal](docs/sdk/README.md#deleteportal) - Deletes a web portal.
* [DeleteTrustStore](docs/sdk/README.md#deletetruststore) - Deletes the trust store.
* [DeleteUserAccessLoggingSettings](docs/sdk/README.md#deleteuseraccessloggingsettings) - Deletes user access logging settings.
* [DeleteUserSettings](docs/sdk/README.md#deleteusersettings) - Deletes user settings.
* [DisassociateBrowserSettings](docs/sdk/README.md#disassociatebrowsersettings) - Disassociates browser settings from a web portal.
* [DisassociateNetworkSettings](docs/sdk/README.md#disassociatenetworksettings) - Disassociates network settings from a web portal.
* [DisassociateTrustStore](docs/sdk/README.md#disassociatetruststore) - Disassociates a trust store from a web portal.
* [DisassociateUserAccessLoggingSettings](docs/sdk/README.md#disassociateuseraccessloggingsettings) - Disassociates user access logging settings from a web portal.
* [DisassociateUserSettings](docs/sdk/README.md#disassociateusersettings) - Disassociates user settings from a web portal.
* [GetBrowserSettings](docs/sdk/README.md#getbrowsersettings) - Gets browser settings.
* [GetIdentityProvider](docs/sdk/README.md#getidentityprovider) - Gets the identity provider.
* [GetNetworkSettings](docs/sdk/README.md#getnetworksettings) - Gets the network settings.
* [GetPortal](docs/sdk/README.md#getportal) - Gets the web portal.
* [GetPortalServiceProviderMetadata](docs/sdk/README.md#getportalserviceprovidermetadata) - Gets the service provider metadata.
* [GetTrustStore](docs/sdk/README.md#gettruststore) - Gets the trust store.
* [GetTrustStoreCertificate](docs/sdk/README.md#gettruststorecertificate) - Gets the trust store certificate.
* [GetUserAccessLoggingSettings](docs/sdk/README.md#getuseraccessloggingsettings) - Gets user access logging settings.
* [GetUserSettings](docs/sdk/README.md#getusersettings) - Gets user settings.
* [ListBrowserSettings](docs/sdk/README.md#listbrowsersettings) - Retrieves a list of browser settings.
* [ListIdentityProviders](docs/sdk/README.md#listidentityproviders) - Retrieves a list of identity providers for a specific web portal.
* [ListNetworkSettings](docs/sdk/README.md#listnetworksettings) - Retrieves a list of network settings.
* [ListPortals](docs/sdk/README.md#listportals) - Retrieves a list or web portals.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for a resource.
* [ListTrustStoreCertificates](docs/sdk/README.md#listtruststorecertificates) - Retrieves a list of trust store certificates.
* [ListTrustStores](docs/sdk/README.md#listtruststores) - Retrieves a list of trust stores.
* [ListUserAccessLoggingSettings](docs/sdk/README.md#listuseraccessloggingsettings) - Retrieves a list of user access logging settings.
* [ListUserSettings](docs/sdk/README.md#listusersettings) - Retrieves a list of user settings.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or overwrites one or more tags for the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource.
* [UpdateBrowserSettings](docs/sdk/README.md#updatebrowsersettings) - Updates browser settings.
* [UpdateIdentityProvider](docs/sdk/README.md#updateidentityprovider) - Updates the identity provider. 
* [UpdateNetworkSettings](docs/sdk/README.md#updatenetworksettings) - Updates network settings.
* [UpdatePortal](docs/sdk/README.md#updateportal) - Updates a web portal.
* [UpdateTrustStore](docs/sdk/README.md#updatetruststore) - Updates the trust store.
* [UpdateUserAccessLoggingSettings](docs/sdk/README.md#updateuseraccessloggingsettings) - Updates the user access logging settings.
* [UpdateUserSettings](docs/sdk/README.md#updateusersettings) - Updates the user settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
