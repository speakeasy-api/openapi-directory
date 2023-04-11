# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/cdcgov.local/prime-data-hub/0.2.0-oas3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/cdcgov.local/prime-data-hub/0.2.0-oas3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteSettingsOrganizationsOrganizationNameRequest,
  DeleteSettingsOrganizationsOrganizationNameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteSettingsOrganizationsOrganizationNameRequest = {
  organizationName: "corrupti",
};

sdk.deleteSettingsOrganizationsOrganizationName(req).then((res: DeleteSettingsOrganizationsOrganizationNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteSettingsOrganizationsOrganizationName` - Delete an organization (and the associated receivers and senders)
* `deleteSettingsOrganizationsOrganizationNameReceiversReceiverName` - Delete a receiver
* `deleteSettingsOrganizationsOrganizationNameSendersSenderName` - Delete a sender
* `getSettingsOrganizations` - The settings for all organizations of the system. Must have admin access.
* `getSettingsOrganizationsOrganizationName` - A single organization settings
* `getSettingsOrganizationsOrganizationNameReceivers` - A list of receivers and their current settings
* `getSettingsOrganizationsOrganizationNameReceiversReceiverName` - The settings of a single of receiver
* `getSettingsOrganizationsOrganizationNameSenders` - A list of senders
* `getSettingsOrganizationsOrganizationNameSendersSenderName` - The settings of a single of sender
* `headSettingsOrganizations` - Retrived the last modified for all settings of the system. Must have admin access.
* `postReports` - Post a report to the data hub
* `putSettingsOrganizationsOrganizationName` - Create or update the direct settings associated with an organization
* `putSettingsOrganizationsOrganizationNameReceiversReceiverName` - Update a single reciever
* `putSettingsOrganizationsOrganizationNameSendersSenderName` - Update a single sender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

