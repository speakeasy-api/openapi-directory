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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateBrowserSettingsRequest{
        PathParams: operations.AssociateBrowserSettingsPathParams{
            PortalArn: "unde",
        },
        QueryParams: operations.AssociateBrowserSettingsQueryParams{
            BrowserSettingsArn: "deserunt",
        },
        Headers: operations.AssociateBrowserSettingsHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateBrowserSettings(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AssociateBrowserSettings` - Associates a browser settings resource with a web portal.
* `AssociateNetworkSettings` - Associates a network settings resource with a web portal.
* `AssociateTrustStore` - Associates a trust store with a web portal.
* `AssociateUserAccessLoggingSettings` - Associates a user access logging settings resource with a web portal.
* `AssociateUserSettings` - Associates a user settings resource with a web portal.
* `CreateBrowserSettings` - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* `CreateIdentityProvider` - Creates an identity provider resource that is then associated with a web portal.
* `CreateNetworkSettings` - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* `CreatePortal` - Creates a web portal.
* `CreateTrustStore` - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* `CreateUserAccessLoggingSettings` - Creates a user access logging settings resource that can be associated with a web portal.
* `CreateUserSettings` - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* `DeleteBrowserSettings` - Deletes browser settings.
* `DeleteIdentityProvider` - Deletes the identity provider.
* `DeleteNetworkSettings` - Deletes network settings.
* `DeletePortal` - Deletes a web portal.
* `DeleteTrustStore` - Deletes the trust store.
* `DeleteUserAccessLoggingSettings` - Deletes user access logging settings.
* `DeleteUserSettings` - Deletes user settings.
* `DisassociateBrowserSettings` - Disassociates browser settings from a web portal.
* `DisassociateNetworkSettings` - Disassociates network settings from a web portal.
* `DisassociateTrustStore` - Disassociates a trust store from a web portal.
* `DisassociateUserAccessLoggingSettings` - Disassociates user access logging settings from a web portal.
* `DisassociateUserSettings` - Disassociates user settings from a web portal.
* `GetBrowserSettings` - Gets browser settings.
* `GetIdentityProvider` - Gets the identity provider.
* `GetNetworkSettings` - Gets the network settings.
* `GetPortal` - Gets the web portal.
* `GetPortalServiceProviderMetadata` - Gets the service provider metadata.
* `GetTrustStore` - Gets the trust store.
* `GetTrustStoreCertificate` - Gets the trust store certificate.
* `GetUserAccessLoggingSettings` - Gets user access logging settings.
* `GetUserSettings` - Gets user settings.
* `ListBrowserSettings` - Retrieves a list of browser settings.
* `ListIdentityProviders` - Retrieves a list of identity providers for a specific web portal.
* `ListNetworkSettings` - Retrieves a list of network settings.
* `ListPortals` - Retrieves a list or web portals.
* `ListTagsForResource` - Retrieves a list of tags for a resource.
* `ListTrustStoreCertificates` - Retrieves a list of trust store certificates.
* `ListTrustStores` - Retrieves a list of trust stores.
* `ListUserAccessLoggingSettings` - Retrieves a list of user access logging settings.
* `ListUserSettings` - Retrieves a list of user settings.
* `TagResource` - Adds or overwrites one or more tags for the specified resource.
* `UntagResource` - Removes one or more tags from the specified resource.
* `UpdateBrowserSettings` - Updates browser settings.
* `UpdateIdentityProvider` - Updates the identity provider. 
* `UpdateNetworkSettings` - Updates network settings.
* `UpdatePortal` - Updates a web portal.
* `UpdateTrustStore` - Updates the trust store.
* `UpdateUserAccessLoggingSettings` - Updates the user access logging settings.
* `UpdateUserSettings` - Updates the user settings.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
