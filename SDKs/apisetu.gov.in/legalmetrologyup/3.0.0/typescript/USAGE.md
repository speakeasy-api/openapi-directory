<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DelcsRequest, DelcsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DelcsRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    clientId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    certificateParameters: {
      applicationNo: "sit",
      licenseNo: "voluptas",
    },
    consentArtifact: "culpa",
    format: "pdf",
    txnId: "consequuntur",
  },
};

sdk.apIs.delcs(req).then((res: DelcsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->