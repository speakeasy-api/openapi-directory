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