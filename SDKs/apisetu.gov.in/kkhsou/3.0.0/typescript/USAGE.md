<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PvcerRequest, PvcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PvcerRequest = {
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
      enrolNO: "sit",
      fullName: "voluptas",
      year: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.pvcer(req).then((res: PvcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->