<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccessPointRequest,
  CreateAccessPointResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccessPointRequest = {
  requestBody: {
    clientToken: "corrupti",
    fileSystemId: "provident",
    posixUser: {
      gid: 715190,
      secondaryGids: [
        602763,
        857946,
        544883,
        847252,
      ],
      uid: 423655,
    },
    rootDirectory: {
      creationInfo: {
        ownerGid: 623564,
        ownerUid: 645894,
        permissions: "suscipit",
      },
      path: "iure",
    },
    tags: [
      {
        key: "debitis",
        value: "ipsa",
      },
      {
        key: "delectus",
        value: "tempora",
      },
    ],
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "molestiae",
  xAmzCredential: "minus",
  xAmzDate: "placeat",
  xAmzSecurityToken: "voluptatum",
  xAmzSignature: "iusto",
  xAmzSignedHeaders: "excepturi",
};

sdk.createAccessPoint(req).then((res: CreateAccessPointResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->