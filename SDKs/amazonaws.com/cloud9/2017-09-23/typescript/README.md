# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloud9/2017-09-23/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloud9/2017-09-23/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateEnvironmentEc2Request,
  CreateEnvironmentEc2Response,
  CreateEnvironmentEc2XAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ConnectionTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateEnvironmentEc2Request = {
  createEnvironmentEc2Request: {
    automaticStopTimeMinutes: 548814,
    clientRequestToken: "provident",
    connectionType: ConnectionTypeEnum.ConnectSsm,
    description: "quibusdam",
    dryRun: false,
    imageId: "unde",
    instanceType: "nulla",
    name: "corrupti",
    ownerArn: "illum",
    subnetId: "vel",
    tags: [
      {
        key: "deserunt",
        value: "suscipit",
      },
      {
        key: "iure",
        value: "magnam",
      },
      {
        key: "debitis",
        value: "ipsa",
      },
    ],
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
  xAmzTarget: CreateEnvironmentEc2XAmzTargetEnum.AWSCloud9WorkspaceManagementServiceCreateEnvironmentEc2,
};

sdk.createEnvironmentEc2(req).then((res: CreateEnvironmentEc2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createEnvironmentEc2` - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* `createEnvironmentMembership` - Adds an environment member to an Cloud9 development environment.
* `deleteEnvironment` - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* `deleteEnvironmentMembership` - Deletes an environment member from a development environment.
* `describeEnvironmentMemberships` - Gets information about environment members for an Cloud9 development environment.
* `describeEnvironmentStatus` - Gets status information for an Cloud9 development environment.
* `describeEnvironments` - Gets information about Cloud9 development environments.
* `listEnvironments` - Gets a list of Cloud9 development environment identifiers.
* `listTagsForResource` - Gets a list of the tags associated with an Cloud9 development environment.
* `tagResource` - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* `untagResource` - Removes tags from an Cloud9 development environment.
* `updateEnvironment` - Changes the settings of an existing Cloud9 development environment.
* `updateEnvironmentMembership` - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

