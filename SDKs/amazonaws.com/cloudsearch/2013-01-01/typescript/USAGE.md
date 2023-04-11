<!-- Start SDK Example Usage -->
```typescript
import {
  GETBuildSuggestersRequest,
  GETBuildSuggestersResponse,
  GETBuildSuggestersActionEnum,
  GETBuildSuggestersVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETBuildSuggestersRequest = {
  action: GETBuildSuggestersActionEnum.BuildSuggesters,
  domainName: "corrupti",
  version: GETBuildSuggestersVersionEnum.TwoThousandAndThirteen0101,
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.getBuildSuggesters(req).then((res: GETBuildSuggestersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->