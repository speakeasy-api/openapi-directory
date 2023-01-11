<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PodocRequest, PodocResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PodocRequest = {
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
      dob: "sit",
      fullName: "voluptas",
      polDOB: "culpa",
      policyNo: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.podoc(req).then((res: PodocResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->