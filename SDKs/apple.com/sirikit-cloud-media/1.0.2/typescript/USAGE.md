<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ExtensionConfigurationRequest, ExtensionConfigurationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ExtensionConfigurationRequest = {
  headers: {
    acceptLanguage: "sit",
    cacheControl: "voluptas",
    ifNoneMatch: "culpa",
    requestTimeout: 6.200000,
    userAgent: "dolor",
    xApplecloudextensionRetryCount: 67.199997,
    xApplecloudextensionSessionId: "fugit",
  },
};

sdk.config.extensionConfiguration(req).then((res: ExtensionConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->