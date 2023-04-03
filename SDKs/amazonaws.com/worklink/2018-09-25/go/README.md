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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateDomainRequest{
        RequestBody: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "corrupti",
            DisplayName: "provident",
            DomainName: "distinctio",
            FleetArn: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
    }

    ctx := context.Background()
    res, err := s.AssociateDomain(ctx, req)
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

### SDK SDK

* `AssociateDomain` - Specifies a domain to be associated to Amazon WorkLink.
* `AssociateWebsiteAuthorizationProvider` - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
* `AssociateWebsiteCertificateAuthority` - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
* `CreateFleet` - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
* `DeleteFleet` - Deletes a fleet. Prevents users from accessing previously associated websites. 
* `DescribeAuditStreamConfiguration` - Describes the configuration for delivering audit streams to the customer account.
* `DescribeCompanyNetworkConfiguration` - Describes the networking configuration to access the internal websites associated with the specified fleet.
* `DescribeDevice` - Provides information about a user's device.
* `DescribeDevicePolicyConfiguration` - Describes the device policy configuration for the specified fleet.
* `DescribeDomain` - Provides information about the domain.
* `DescribeFleetMetadata` - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
* `DescribeIdentityProviderConfiguration` - Describes the identity provider configuration of the specified fleet.
* `DescribeWebsiteCertificateAuthority` - Provides information about the certificate authority.
* `DisassociateDomain` - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 
* `DisassociateWebsiteAuthorizationProvider` - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
* `DisassociateWebsiteCertificateAuthority` - Removes a certificate authority (CA).
* `ListDevices` - Retrieves a list of devices registered with the specified fleet.
* `ListDomains` - Retrieves a list of domains associated to a specified fleet.
* `ListFleets` - Retrieves a list of fleets for the current account and Region.
* `ListTagsForResource` - Retrieves a list of tags for the specified resource.
* `ListWebsiteAuthorizationProviders` - Retrieves a list of website authorization providers associated with a specified fleet.
* `ListWebsiteCertificateAuthorities` - Retrieves a list of certificate authorities added for the current account and Region.
* `RestoreDomainAccess` - Moves a domain to ACTIVE status if it was in the INACTIVE status.
* `RevokeDomainAccess` - Moves a domain to INACTIVE status if it was in the ACTIVE status.
* `SignOutUser` - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
* `TagResource` - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
* `UntagResource` - Removes one or more tags from the specified resource.
* `UpdateAuditStreamConfiguration` - Updates the audit stream configuration for the fleet.
* `UpdateCompanyNetworkConfiguration` - Updates the company network configuration for the fleet.
* `UpdateDevicePolicyConfiguration` - Updates the device policy configuration for the fleet.
* `UpdateDomainMetadata` - Updates domain metadata, such as DisplayName.
* `UpdateFleetMetadata` - Updates fleet metadata, such as DisplayName.
* `UpdateIdentityProviderConfiguration` - Updates the identity provider configuration for the fleet.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
