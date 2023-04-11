# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/fis/2020-12-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/fis/2020-12-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateExperimentTemplateRequest,
  CreateExperimentTemplateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateExperimentTemplateRequest = {
  requestBody: {
    actions: {
      "provident": {
        actionId: "distinctio",
        description: "quibusdam",
        parameters: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        startAfter: [
          "iure",
          "magnam",
        ],
        targets: {
          "ipsa": "delectus",
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
      },
      "iusto": {
        actionId: "excepturi",
        description: "nisi",
        parameters: {
          "temporibus": "ab",
          "quis": "veritatis",
          "deserunt": "perferendis",
          "ipsam": "repellendus",
        },
        startAfter: [
          "quo",
          "odit",
          "at",
          "at",
        ],
        targets: {
          "molestiae": "quod",
          "quod": "esse",
          "totam": "porro",
          "dolorum": "dicta",
        },
      },
      "nam": {
        actionId: "officia",
        description: "occaecati",
        parameters: {
          "deleniti": "hic",
        },
        startAfter: [
          "totam",
          "beatae",
          "commodi",
          "molestiae",
        ],
        targets: {
          "qui": "impedit",
          "cum": "esse",
        },
      },
    },
    clientToken: "ipsum",
    description: "excepturi",
    logConfiguration: {
      cloudWatchLogsConfiguration: {
        logGroupArn: "aspernatur",
      },
      logSchemaVersion: 18789,
      s3Configuration: {
        bucketName: "ad",
        prefix: "natus",
      },
    },
    roleArn: "sed",
    stopConditions: [
      {
        source: "dolor",
        value: "natus",
      },
      {
        source: "laboriosam",
        value: "hic",
      },
      {
        source: "saepe",
        value: "fuga",
      },
    ],
    tags: {
      "corporis": "iste",
      "iure": "saepe",
    },
    targets: {
      "architecto": {
        filters: [
          {
            path: "reiciendis",
            values: [
              "mollitia",
              "laborum",
              "dolores",
            ],
          },
        ],
        parameters: {
          "corporis": "explicabo",
        },
        resourceArns: [
          "enim",
          "omnis",
          "nemo",
          "minima",
        ],
        resourceTags: {
          "accusantium": "iure",
          "culpa": "doloribus",
          "sapiente": "architecto",
        },
        resourceType: "mollitia",
        selectionMode: "dolorem",
      },
      "culpa": {
        filters: [
          {
            path: "repellat",
            values: [
              "occaecati",
              "numquam",
              "commodi",
            ],
          },
        ],
        parameters: {
          "molestiae": "velit",
          "error": "quia",
        },
        resourceArns: [
          "vitae",
          "laborum",
        ],
        resourceTags: {
          "enim": "odit",
          "quo": "sequi",
          "tenetur": "ipsam",
        },
        resourceType: "id",
        selectionMode: "possimus",
      },
      "aut": {
        filters: [
          {
            path: "error",
            values: [
              "laborum",
              "quasi",
              "reiciendis",
              "voluptatibus",
            ],
          },
        ],
        parameters: {
          "nihil": "praesentium",
          "voluptatibus": "ipsa",
          "omnis": "voluptate",
          "cum": "perferendis",
        },
        resourceArns: [
          "reprehenderit",
        ],
        resourceTags: {
          "maiores": "dicta",
          "corporis": "dolore",
        },
        resourceType: "iusto",
        selectionMode: "dicta",
      },
    },
  },
  xAmzAlgorithm: "harum",
  xAmzContentSha256: "enim",
  xAmzCredential: "accusamus",
  xAmzDate: "commodi",
  xAmzSecurityToken: "repudiandae",
  xAmzSignature: "quae",
  xAmzSignedHeaders: "ipsum",
};

sdk.createExperimentTemplate(req).then((res: CreateExperimentTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `getTargetResourceType` - Gets information about the specified resource type.
* `listActions` - Lists the available FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `listTargetResourceTypes` - Lists the target resource types.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

