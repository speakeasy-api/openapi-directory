# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appintegrations/2020-07-29/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appintegrations/2020-07-29/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDataIntegrationRequest,
  CreateDataIntegrationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDataIntegrationRequest = {
  requestBody: {
    clientToken: "corrupti",
    description: "provident",
    fileConfiguration: {
      filters: {
        "quibusdam": [
          "nulla",
          "corrupti",
          "illum",
        ],
        "vel": [
          "deserunt",
          "suscipit",
          "iure",
        ],
        "magnam": [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
      },
      folders: [
        "minus",
        "placeat",
      ],
    },
    kmsKey: "voluptatum",
    name: "iusto",
    objectConfiguration: {
      "nisi": {
        "temporibus": [
          "quis",
        ],
        "veritatis": [
          "perferendis",
          "ipsam",
          "repellendus",
        ],
        "sapiente": [
          "odit",
          "at",
          "at",
          "maiores",
        ],
        "molestiae": [
          "quod",
          "esse",
          "totam",
          "porro",
        ],
      },
      "dolorum": {
        "nam": [
          "occaecati",
          "fugit",
          "deleniti",
        ],
      },
      "hic": {
        "totam": [
          "commodi",
        ],
        "molestiae": [
          "qui",
          "impedit",
        ],
        "cum": [
          "ipsum",
          "excepturi",
        ],
        "aspernatur": [
          "ad",
        ],
      },
    },
    scheduleConfig: {
      firstExecutionFrom: "natus",
      object: "sed",
      scheduleExpression: "iste",
    },
    sourceURI: "dolor",
    tags: {
      "laboriosam": "hic",
      "saepe": "fuga",
      "in": "corporis",
    },
  },
  xAmzAlgorithm: "iste",
  xAmzContentSha256: "iure",
  xAmzCredential: "saepe",
  xAmzDate: "quidem",
  xAmzSecurityToken: "architecto",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "reiciendis",
};

sdk.createDataIntegration(req).then((res: CreateDataIntegrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDataIntegration` - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* `createEventIntegration` - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* `deleteDataIntegration` - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `deleteEventIntegration` - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* `getDataIntegration` - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `getEventIntegration` - Returns information about the event integration.
* `listDataIntegrationAssociations` - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `listDataIntegrations` - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `listEventIntegrationAssociations` - Returns a paginated list of event integration associations in the account. 
* `listEventIntegrations` - Returns a paginated list of event integrations in the account.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateDataIntegration` - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `updateEventIntegration` - Updates the description of an event integration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

