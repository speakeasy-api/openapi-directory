<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TrcerRequest, TrcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TrcerRequest = {
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
      certNO: "sit",
      dob: "voluptas",
      fullName: "culpa",
      session: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.trcer(req).then((res: TrcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->