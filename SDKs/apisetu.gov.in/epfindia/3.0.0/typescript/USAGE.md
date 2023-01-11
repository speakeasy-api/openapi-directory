<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EpfscRequest, EpfscResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EpfscRequest = {
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
      scno: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.epfsc(req).then((res: EpfscResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->