<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { HpcerRequest, HpcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: HpcerRequest = {
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
      fullName: "sit",
      rollno: "voluptas",
      year: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.hpcer(req).then((res: HpcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->