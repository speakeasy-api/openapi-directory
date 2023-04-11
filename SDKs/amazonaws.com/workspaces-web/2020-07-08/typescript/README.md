# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/workspaces-web/2020-07-08/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/workspaces-web/2020-07-08/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateBrowserSettingsRequest,
  AssociateBrowserSettingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateBrowserSettingsRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  browserSettingsArn: "illum",
  portalArn: "vel",
};

sdk.associateBrowserSettings(req).then((res: AssociateBrowserSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateBrowserSettings` - Associates a browser settings resource with a web portal.
* `associateNetworkSettings` - Associates a network settings resource with a web portal.
* `associateTrustStore` - Associates a trust store with a web portal.
* `associateUserAccessLoggingSettings` - Associates a user access logging settings resource with a web portal.
* `associateUserSettings` - Associates a user settings resource with a web portal.
* `createBrowserSettings` - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* `createIdentityProvider` - Creates an identity provider resource that is then associated with a web portal.
* `createNetworkSettings` - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* `createPortal` - Creates a web portal.
* `createTrustStore` - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* `createUserAccessLoggingSettings` - Creates a user access logging settings resource that can be associated with a web portal.
* `createUserSettings` - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* `deleteBrowserSettings` - Deletes browser settings.
* `deleteIdentityProvider` - Deletes the identity provider.
* `deleteNetworkSettings` - Deletes network settings.
* `deletePortal` - Deletes a web portal.
* `deleteTrustStore` - Deletes the trust store.
* `deleteUserAccessLoggingSettings` - Deletes user access logging settings.
* `deleteUserSettings` - Deletes user settings.
* `disassociateBrowserSettings` - Disassociates browser settings from a web portal.
* `disassociateNetworkSettings` - Disassociates network settings from a web portal.
* `disassociateTrustStore` - Disassociates a trust store from a web portal.
* `disassociateUserAccessLoggingSettings` - Disassociates user access logging settings from a web portal.
* `disassociateUserSettings` - Disassociates user settings from a web portal.
* `getBrowserSettings` - Gets browser settings.
* `getIdentityProvider` - Gets the identity provider.
* `getNetworkSettings` - Gets the network settings.
* `getPortal` - Gets the web portal.
* `getPortalServiceProviderMetadata` - Gets the service provider metadata.
* `getTrustStore` - Gets the trust store.
* `getTrustStoreCertificate` - Gets the trust store certificate.
* `getUserAccessLoggingSettings` - Gets user access logging settings.
* `getUserSettings` - Gets user settings.
* `listBrowserSettings` - Retrieves a list of browser settings.
* `listIdentityProviders` - Retrieves a list of identity providers for a specific web portal.
* `listNetworkSettings` - Retrieves a list of network settings.
* `listPortals` - Retrieves a list or web portals.
* `listTagsForResource` - Retrieves a list of tags for a resource.
* `listTrustStoreCertificates` - Retrieves a list of trust store certificates.
* `listTrustStores` - Retrieves a list of trust stores.
* `listUserAccessLoggingSettings` - Retrieves a list of user access logging settings.
* `listUserSettings` - Retrieves a list of user settings.
* `tagResource` - Adds or overwrites one or more tags for the specified resource.
* `untagResource` - Removes one or more tags from the specified resource.
* `updateBrowserSettings` - Updates browser settings.
* `updateIdentityProvider` - Updates the identity provider. 
* `updateNetworkSettings` - Updates network settings.
* `updatePortal` - Updates a web portal.
* `updateTrustStore` - Updates the trust store.
* `updateUserAccessLoggingSettings` - Updates the user access logging settings.
* `updateUserSettings` - Updates the user settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

