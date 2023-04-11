<!-- Start SDK Example Usage -->
```typescript
import {
  CreateGameRequest,
  CreateGameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateGameRequest = {
  requestBody: {
    clientToken: "corrupti",
    description: "provident",
    gameName: "distinctio",
    tags: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.createGame(req).then((res: CreateGameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->