<!-- Start SDK Example Usage -->
```typescript
import {
  ExtensionConfigurationRequest,
  ExtensionConfigurationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ExtensionConfigurationRequest = {
  acceptLanguage: "corrupti",
  cacheControl: "provident",
  ifNoneMatch: "distinctio",
  requestTimeout: 8442.66,
  userAgent: "unde",
  xApplecloudextensionRetryCount: 8579.46,
  xApplecloudextensionSessionId: "corrupti",
};

sdk.config.extensionConfiguration(req).then((res: ExtensionConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->