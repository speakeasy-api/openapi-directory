<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ImporterExporterCodeVerificationApiRequest, ImporterExporterCodeVerificationApiResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ImporterExporterCodeVerificationApiRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    iec: "sit",
  },
};

sdk.apIs.importerExporterCodeVerificationApi(req).then((res: ImporterExporterCodeVerificationApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->