<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateConnectionAliasRequest,
  AssociateConnectionAliasResponse,
  AssociateConnectionAliasXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateConnectionAliasRequest = {
  associateConnectionAliasRequest: {
    aliasId: "corrupti",
    resourceId: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateConnectionAliasXAmzTargetEnum.WorkspacesServiceAssociateConnectionAlias,
};

sdk.associateConnectionAlias(req).then((res: AssociateConnectionAliasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->