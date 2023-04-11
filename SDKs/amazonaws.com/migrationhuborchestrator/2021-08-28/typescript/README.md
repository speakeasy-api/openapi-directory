# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhuborchestrator/2021-08-28/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhuborchestrator/2021-08-28/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateWorkflowRequest,
  CreateWorkflowResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateWorkflowRequest = {
  requestBody: {
    applicationConfigurationId: "corrupti",
    description: "provident",
    inputParameters: {
      "quibusdam": {
        integerValue: 602763,
        listOfStringsValue: [
          "corrupti",
          "illum",
          "vel",
          "error",
        ],
        mapOfStringValue: {
          "suscipit": "iure",
          "magnam": "debitis",
          "ipsa": "delectus",
        },
        stringValue: "tempora",
      },
      "suscipit": {
        integerValue: 477665,
        listOfStringsValue: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
        mapOfStringValue: {
          "recusandae": "temporibus",
          "ab": "quis",
        },
        stringValue: "veritatis",
      },
      "deserunt": {
        integerValue: 20218,
        listOfStringsValue: [
          "repellendus",
          "sapiente",
        ],
        mapOfStringValue: {
          "odit": "at",
          "at": "maiores",
          "molestiae": "quod",
          "quod": "esse",
        },
        stringValue: "totam",
      },
    },
    name: "porro",
    stepTargets: [
      "dicta",
      "nam",
      "officia",
    ],
    tags: {
      "fugit": "deleniti",
      "hic": "optio",
      "totam": "beatae",
    },
    templateId: "commodi",
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "modi",
  xAmzCredential: "qui",
  xAmzDate: "impedit",
  xAmzSecurityToken: "cum",
  xAmzSignature: "esse",
  xAmzSignedHeaders: "ipsum",
};

sdk.createWorkflow(req).then((res: CreateWorkflowResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createWorkflow` - Create a workflow to orchestrate your migrations.
* `createWorkflowStep` - Create a step in the migration workflow.
* `createWorkflowStepGroup` - Create a step group in a migration workflow.
* `deleteWorkflow` - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* `deleteWorkflowStep` - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* `deleteWorkflowStepGroup` - Delete a step group in a migration workflow.
* `getTemplate` - Get the template you want to use for creating a migration workflow.
* `getTemplateStep` - Get a specific step in a template.
* `getTemplateStepGroup` - Get a step group in a template.
* `getWorkflow` - Get migration workflow.
* `getWorkflowStep` - Get a step in the migration workflow.
* `getWorkflowStepGroup` - Get the step group of a migration workflow.
* `listPlugins` - List AWS Migration Hub Orchestrator plugins.
* `listTagsForResource` - List the tags added to a resource.
* `listTemplateStepGroups` - List the step groups in a template.
* `listTemplateSteps` - List the steps in a template.
* `listTemplates` - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* `listWorkflowStepGroups` - List the step groups in a migration workflow.
* `listWorkflowSteps` - List the steps in a workflow.
* `listWorkflows` - List the migration workflows.
* `retryWorkflowStep` - Retry a failed step in a migration workflow.
* `startWorkflow` - Start a migration workflow.
* `stopWorkflow` - Stop an ongoing migration workflow.
* `tagResource` - Tag a resource by specifying its Amazon Resource Name (ARN).
* `untagResource` - Deletes the tags for a resource.
* `updateWorkflow` - Update a migration workflow.
* `updateWorkflowStep` - Update a step in a migration workflow.
* `updateWorkflowStepGroup` - Update the step group in a migration workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

