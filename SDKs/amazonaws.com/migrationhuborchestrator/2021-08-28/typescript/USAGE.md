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