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