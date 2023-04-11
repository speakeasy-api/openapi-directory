<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateFileSystemAliasesRequest,
  AssociateFileSystemAliasesResponse,
  AssociateFileSystemAliasesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateFileSystemAliasesRequest = {
  associateFileSystemAliasesRequest: {
    aliases: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    clientRequestToken: "unde",
    fileSystemId: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: AssociateFileSystemAliasesXAmzTargetEnum.AWSSimbaAPIServiceV20180301AssociateFileSystemAliases,
};

sdk.associateFileSystemAliases(req).then((res: AssociateFileSystemAliasesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->