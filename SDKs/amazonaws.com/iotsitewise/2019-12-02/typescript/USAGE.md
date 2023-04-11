<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAssetsRequest,
  AssociateAssetsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAssetsRequest = {
  requestBody: {
    childAssetId: "corrupti",
    clientToken: "provident",
    hierarchyId: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
  assetId: "deserunt",
};

sdk.associateAssets(req).then((res: AssociateAssetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->