<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PecerRequest, PecerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PecerRequest = {
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
      gender: "culpa",
      pan: "expedita",
      ppo: "consequuntur",
    },
    consentArtifact: "dolor",
    format: "pdf",
    txnId: "voluptas",
  },
};

sdk.apIs.pecer(req).then((res: PecerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->