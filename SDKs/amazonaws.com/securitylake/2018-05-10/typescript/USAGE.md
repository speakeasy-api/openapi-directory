<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAwsLogSourceRequest,
  CreateAwsLogSourceResponse
} from "openapi/dist/sdk/models/operations";
import {
  DimensionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAwsLogSourceRequest = {
  requestBody: {
    enableAllDimensions: {
      "provident": {
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
      "molestiae": {
        "placeat": [
          "iusto",
          "excepturi",
          "nisi",
        ],
        "recusandae": [
          "ab",
          "quis",
          "veritatis",
          "deserunt",
        ],
        "perferendis": [
          "repellendus",
          "sapiente",
        ],
        "quo": [
          "at",
        ],
      },
      "at": {
        "molestiae": [
          "quod",
          "esse",
          "totam",
          "porro",
        ],
        "dolorum": [
          "nam",
        ],
        "officia": [
          "fugit",
          "deleniti",
          "hic",
        ],
        "optio": [
          "beatae",
          "commodi",
          "molestiae",
        ],
      },
    },
    enableSingleDimension: [
      "qui",
      "impedit",
    ],
    enableTwoDimensions: {
      "esse": [
        "excepturi",
      ],
      "aspernatur": [
        "ad",
      ],
      "natus": [
        "iste",
      ],
    },
    inputOrder: [
      DimensionEnum.SourceType,
    ],
  },
  xAmzAlgorithm: "laboriosam",
  xAmzContentSha256: "hic",
  xAmzCredential: "saepe",
  xAmzDate: "fuga",
  xAmzSecurityToken: "in",
  xAmzSignature: "corporis",
  xAmzSignedHeaders: "iste",
};

sdk.createAwsLogSource(req).then((res: CreateAwsLogSourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->