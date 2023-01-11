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