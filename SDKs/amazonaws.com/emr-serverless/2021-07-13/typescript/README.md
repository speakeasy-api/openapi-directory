# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/emr-serverless/2021-07-13/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/emr-serverless/2021-07-13/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CancelJobRunRequest,
  CancelJobRunResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelJobRunRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  applicationId: "illum",
  jobRunId: "vel",
};

sdk.cancelJobRun(req).then((res: CancelJobRunResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancelJobRun` - Cancels a job run.
* `createApplication` - Creates an application.
* `deleteApplication` - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* `getApplication` - Displays detailed information about a specified application.
* `getDashboardForJobRun` - Returns a URL to access the job run dashboard.
* `getJobRun` - Displays detailed information about a job run.
* `listApplications` - Lists applications based on a set of parameters.
* `listJobRuns` - Lists job runs based on a set of parameters.
* `listTagsForResource` - Lists the tags assigned to the resources.
* `startApplication` - Starts a specified application and initializes initial capacity if configured.
* `startJobRun` - Starts a job run.
* `stopApplication` - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* `tagResource` - Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* `untagResource` - Removes tags from resources.
* `updateApplication` - Updates a specified application. An application has to be in a stopped or created state in order to be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

