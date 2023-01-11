# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateExperimentTemplateRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    actions: {
      "fugit": {
        actionId: "et",
        description: "nihil",
        parameters: {
          "dicta": "debitis",
          "voluptatum": "et",
          "ut": "dolorem",
        },
        startAfter: [
          "voluptate",
          "iste",
        ],
        targets: {
          "totam": "dolores",
        },
      },
      "illum": {
        actionId: "debitis",
        description: "vel",
        parameters: {
          "dolore": "id",
        },
        startAfter: [
          "accusantium",
        ],
        targets: {
          "commodi": "quis",
          "est": "aut",
          "odit": "non",
        },
      },
      "voluptas": {
        actionId: "omnis",
        description: "aut",
        parameters: {
          "sed": "officiis",
        },
        startAfter: [
          "consectetur",
          "nobis",
        ],
        targets: {
          "qui": "recusandae",
        },
      },
    },
    clientToken: "at",
    description: "ipsum",
    roleArn: "eveniet",
    stopConditions: [
      {
        source: "sint",
        value: "inventore",
      },
      {
        source: "ut",
        value: "exercitationem",
      },
    ],
    tags: {
      "reprehenderit": "tempore",
      "maiores": "incidunt",
      "dolor": "beatae",
    },
    targets: {
      "in": {
        filters: [
          {
            path: "omnis",
            values: [
              "ex",
            ],
          },
          {
            path: "dolores",
            values: [
              "vel",
            ],
          },
          {
            path: "rerum",
            values: [
              "voluptas",
              "quam",
            ],
          },
        ],
        resourceArns: [
          "qui",
        ],
        resourceTags: {
          "unde": "in",
        },
        resourceType: "autem",
        selectionMode: "qui",
      },
      "ut": {
        filters: [
          {
            path: "ab",
            values: [
              "ullam",
            ],
          },
          {
            path: "et",
            values: [
              "esse",
              "architecto",
              "quam",
            ],
          },
          {
            path: "velit",
            values: [
              "soluta",
              "sunt",
            ],
          },
        ],
        resourceArns: [
          "magni",
          "et",
        ],
        resourceTags: {
          "qui": "earum",
          "illo": "omnis",
          "ut": "consequatur",
        },
        resourceType: "dolor",
        selectionMode: "commodi",
      },
    },
  },
};

sdk.createExperimentTemplate(req).then((res: CreateExperimentTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified AWS FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `listActions` - Lists the available AWS FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
