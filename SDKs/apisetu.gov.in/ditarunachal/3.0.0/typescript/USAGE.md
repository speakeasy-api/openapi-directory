<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IlpmtRequest, IlpmtResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IlpmtRequest = {
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
      uid: "voluptas",
      eILPAppId: "culpa",
      eILPContactNumber: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.ilpmt(req).then((res: IlpmtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->