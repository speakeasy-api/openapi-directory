<!-- Start SDK Example Usage -->
```typescript
import {
  CreateReplicationSetRequest,
  CreateReplicationSetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateReplicationSetRequest = {
  requestBody: {
    clientToken: "corrupti",
    regions: {
      "distinctio": {
        sseKmsKeyId: "quibusdam",
      },
      "unde": {
        sseKmsKeyId: "nulla",
      },
      "corrupti": {
        sseKmsKeyId: "illum",
      },
    },
    tags: {
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.createReplicationSet(req).then((res: CreateReplicationSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->