<!-- Start SDK Example Usage -->
```typescript
import {
  GetLatestConfigurationRequest,
  GetLatestConfigurationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetLatestConfigurationRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  configurationToken: "illum",
};

sdk.getLatestConfiguration(req).then((res: GetLatestConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->