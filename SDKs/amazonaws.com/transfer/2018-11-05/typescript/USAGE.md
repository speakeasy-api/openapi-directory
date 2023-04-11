<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccessRequest,
  CreateAccessResponse,
  CreateAccessXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  HomeDirectoryTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccessRequest = {
  createAccessRequest: {
    externalId: "corrupti",
    homeDirectory: "provident",
    homeDirectoryMappings: [
      {
        entry: "quibusdam",
        target: "unde",
      },
      {
        entry: "nulla",
        target: "corrupti",
      },
      {
        entry: "illum",
        target: "vel",
      },
    ],
    homeDirectoryType: HomeDirectoryTypeEnum.Logical,
    policy: "deserunt",
    posixProfile: {
      gid: 384382,
      secondaryGids: [
        297534,
        891773,
      ],
      uid: 56713,
    },
    role: "delectus",
    serverId: "tempora",
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "molestiae",
  xAmzCredential: "minus",
  xAmzDate: "placeat",
  xAmzSecurityToken: "voluptatum",
  xAmzSignature: "iusto",
  xAmzSignedHeaders: "excepturi",
  xAmzTarget: CreateAccessXAmzTargetEnum.TransferServiceCreateAccess,
};

sdk.createAccess(req).then((res: CreateAccessResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->