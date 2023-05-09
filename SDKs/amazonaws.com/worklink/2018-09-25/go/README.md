# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/worklink/2018-09-25/go
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
    res, err := s.AssociateDomain(ctx, operations.AssociateDomainRequest{
        RequestBody: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "corrupti",
            DisplayName: sdk.String("provident"),
            DomainName: "distinctio",
            FleetArn: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [~~AssociateDomain~~](docs/sdk/README.md#associatedomain) - Specifies a domain to be associated to Amazon WorkLink. :warning: **Deprecated**
* [~~AssociateWebsiteAuthorizationProvider~~](docs/sdk/README.md#associatewebsiteauthorizationprovider) - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network. :warning: **Deprecated**
* [~~AssociateWebsiteCertificateAuthority~~](docs/sdk/README.md#associatewebsitecertificateauthority) - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network. :warning: **Deprecated**
* [~~CreateFleet~~](docs/sdk/README.md#createfleet) - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app. :warning: **Deprecated**
* [~~DeleteFleet~~](docs/sdk/README.md#deletefleet) - Deletes a fleet. Prevents users from accessing previously associated websites.  :warning: **Deprecated**
* [~~DescribeAuditStreamConfiguration~~](docs/sdk/README.md#describeauditstreamconfiguration) - Describes the configuration for delivering audit streams to the customer account. :warning: **Deprecated**
* [~~DescribeCompanyNetworkConfiguration~~](docs/sdk/README.md#describecompanynetworkconfiguration) - Describes the networking configuration to access the internal websites associated with the specified fleet. :warning: **Deprecated**
* [~~DescribeDevice~~](docs/sdk/README.md#describedevice) - Provides information about a user's device. :warning: **Deprecated**
* [~~DescribeDevicePolicyConfiguration~~](docs/sdk/README.md#describedevicepolicyconfiguration) - Describes the device policy configuration for the specified fleet. :warning: **Deprecated**
* [~~DescribeDomain~~](docs/sdk/README.md#describedomain) - Provides information about the domain. :warning: **Deprecated**
* [~~DescribeFleetMetadata~~](docs/sdk/README.md#describefleetmetadata) - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details. :warning: **Deprecated**
* [~~DescribeIdentityProviderConfiguration~~](docs/sdk/README.md#describeidentityproviderconfiguration) - Describes the identity provider configuration of the specified fleet. :warning: **Deprecated**
* [~~DescribeWebsiteCertificateAuthority~~](docs/sdk/README.md#describewebsitecertificateauthority) - Provides information about the certificate authority. :warning: **Deprecated**
* [~~DisassociateDomain~~](docs/sdk/README.md#disassociatedomain) - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.  :warning: **Deprecated**
* [~~DisassociateWebsiteAuthorizationProvider~~](docs/sdk/README.md#disassociatewebsiteauthorizationprovider) - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider. :warning: **Deprecated**
* [~~DisassociateWebsiteCertificateAuthority~~](docs/sdk/README.md#disassociatewebsitecertificateauthority) - Removes a certificate authority (CA). :warning: **Deprecated**
* [~~ListDevices~~](docs/sdk/README.md#listdevices) - Retrieves a list of devices registered with the specified fleet. :warning: **Deprecated**
* [~~ListDomains~~](docs/sdk/README.md#listdomains) - Retrieves a list of domains associated to a specified fleet. :warning: **Deprecated**
* [~~ListFleets~~](docs/sdk/README.md#listfleets) - Retrieves a list of fleets for the current account and Region. :warning: **Deprecated**
* [~~ListTagsForResource~~](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for the specified resource. :warning: **Deprecated**
* [~~ListWebsiteAuthorizationProviders~~](docs/sdk/README.md#listwebsiteauthorizationproviders) - Retrieves a list of website authorization providers associated with a specified fleet. :warning: **Deprecated**
* [~~ListWebsiteCertificateAuthorities~~](docs/sdk/README.md#listwebsitecertificateauthorities) - Retrieves a list of certificate authorities added for the current account and Region. :warning: **Deprecated**
* [~~RestoreDomainAccess~~](docs/sdk/README.md#restoredomainaccess) - Moves a domain to ACTIVE status if it was in the INACTIVE status. :warning: **Deprecated**
* [~~RevokeDomainAccess~~](docs/sdk/README.md#revokedomainaccess) - Moves a domain to INACTIVE status if it was in the ACTIVE status. :warning: **Deprecated**
* [~~SignOutUser~~](docs/sdk/README.md#signoutuser) - Signs the user out from all of their devices. The user can sign in again if they have valid credentials. :warning: **Deprecated**
* [~~TagResource~~](docs/sdk/README.md#tagresource) - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. :warning: **Deprecated**
* [~~UntagResource~~](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource. :warning: **Deprecated**
* [~~UpdateAuditStreamConfiguration~~](docs/sdk/README.md#updateauditstreamconfiguration) - Updates the audit stream configuration for the fleet. :warning: **Deprecated**
* [~~UpdateCompanyNetworkConfiguration~~](docs/sdk/README.md#updatecompanynetworkconfiguration) - Updates the company network configuration for the fleet. :warning: **Deprecated**
* [~~UpdateDevicePolicyConfiguration~~](docs/sdk/README.md#updatedevicepolicyconfiguration) - Updates the device policy configuration for the fleet. :warning: **Deprecated**
* [~~UpdateDomainMetadata~~](docs/sdk/README.md#updatedomainmetadata) - Updates domain metadata, such as DisplayName. :warning: **Deprecated**
* [~~UpdateFleetMetadata~~](docs/sdk/README.md#updatefleetmetadata) - Updates fleet metadata, such as DisplayName. :warning: **Deprecated**
* [~~UpdateIdentityProviderConfiguration~~](docs/sdk/README.md#updateidentityproviderconfiguration) - Updates the identity provider configuration for the fleet. :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
