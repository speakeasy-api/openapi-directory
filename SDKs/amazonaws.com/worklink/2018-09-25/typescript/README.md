# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/worklink/2018-09-25/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/worklink/2018-09-25/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateDomainRequest,
  AssociateDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateDomainRequest = {
  requestBody: {
    acmCertificateArn: "corrupti",
    displayName: "provident",
    domainName: "distinctio",
    fleetArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
};

sdk.associateDomain(req).then((res: AssociateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateDomain` - Specifies a domain to be associated to Amazon WorkLink.
* `associateWebsiteAuthorizationProvider` - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
* `associateWebsiteCertificateAuthority` - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
* `createFleet` - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
* `deleteFleet` - Deletes a fleet. Prevents users from accessing previously associated websites. 
* `describeAuditStreamConfiguration` - Describes the configuration for delivering audit streams to the customer account.
* `describeCompanyNetworkConfiguration` - Describes the networking configuration to access the internal websites associated with the specified fleet.
* `describeDevice` - Provides information about a user's device.
* `describeDevicePolicyConfiguration` - Describes the device policy configuration for the specified fleet.
* `describeDomain` - Provides information about the domain.
* `describeFleetMetadata` - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
* `describeIdentityProviderConfiguration` - Describes the identity provider configuration of the specified fleet.
* `describeWebsiteCertificateAuthority` - Provides information about the certificate authority.
* `disassociateDomain` - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 
* `disassociateWebsiteAuthorizationProvider` - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
* `disassociateWebsiteCertificateAuthority` - Removes a certificate authority (CA).
* `listDevices` - Retrieves a list of devices registered with the specified fleet.
* `listDomains` - Retrieves a list of domains associated to a specified fleet.
* `listFleets` - Retrieves a list of fleets for the current account and Region.
* `listTagsForResource` - Retrieves a list of tags for the specified resource.
* `listWebsiteAuthorizationProviders` - Retrieves a list of website authorization providers associated with a specified fleet.
* `listWebsiteCertificateAuthorities` - Retrieves a list of certificate authorities added for the current account and Region.
* `restoreDomainAccess` - Moves a domain to ACTIVE status if it was in the INACTIVE status.
* `revokeDomainAccess` - Moves a domain to INACTIVE status if it was in the ACTIVE status.
* `signOutUser` - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
* `tagResource` - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
* `untagResource` - Removes one or more tags from the specified resource.
* `updateAuditStreamConfiguration` - Updates the audit stream configuration for the fleet.
* `updateCompanyNetworkConfiguration` - Updates the company network configuration for the fleet.
* `updateDevicePolicyConfiguration` - Updates the device policy configuration for the fleet.
* `updateDomainMetadata` - Updates domain metadata, such as DisplayName.
* `updateFleetMetadata` - Updates fleet metadata, such as DisplayName.
* `updateIdentityProviderConfiguration` - Updates the identity provider configuration for the fleet.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

