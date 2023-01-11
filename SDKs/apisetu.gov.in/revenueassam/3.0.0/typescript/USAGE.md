<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NncerRequest, NncerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NncerRequest = {
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
      refNo: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.nncer(req).then((res: NncerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->