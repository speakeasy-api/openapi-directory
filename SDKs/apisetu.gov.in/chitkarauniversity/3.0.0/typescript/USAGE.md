<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DgcerRequest, DgcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DgcerRequest = {
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
      degree: "sit",
      fullName: "voluptas",
      rroll: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.dgcer(req).then((res: DgcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->