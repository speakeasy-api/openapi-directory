# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/finspace/2021-03-12/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/finspace/2021-03-12/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEnvironmentRequest,
  CreateEnvironmentResponse,
  CreateEnvironmentRequestBodyFederationModeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateEnvironmentRequest = {
  requestBody: {
    dataBundles: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    description: "unde",
    federationMode: CreateEnvironmentRequestBodyFederationModeEnum.Local,
    federationParameters: {
      applicationCallBackURL: "corrupti",
      attributeMap: {
        "vel": "error",
        "deserunt": "suscipit",
        "iure": "magnam",
        "debitis": "ipsa",
      },
      federationProviderName: "delectus",
      federationURN: "tempora",
      samlMetadataDocument: "suscipit",
      samlMetadataURL: "molestiae",
    },
    kmsKeyId: "minus",
    name: "placeat",
    superuserParameters: {
      emailAddress: "voluptatum",
      firstName: "Jaycee",
      lastName: "Mante",
    },
    tags: {
      "recusandae": "temporibus",
      "ab": "quis",
    },
  },
  xAmzAlgorithm: "veritatis",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "perferendis",
  xAmzDate: "ipsam",
  xAmzSecurityToken: "repellendus",
  xAmzSignature: "sapiente",
  xAmzSignedHeaders: "quo",
};

sdk.createEnvironment(req).then((res: CreateEnvironmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createEnvironment` - Create a new FinSpace environment.
* `deleteEnvironment` - Delete an FinSpace environment.
* `getEnvironment` - Returns the FinSpace environment object.
* `listEnvironments` - A list of all of your FinSpace environments.
* `listTagsForResource` - A list of all tags for a resource.
* `tagResource` - Adds metadata tags to a FinSpace resource.
* `untagResource` - Removes metadata tags from a FinSpace resource.
* `updateEnvironment` - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

