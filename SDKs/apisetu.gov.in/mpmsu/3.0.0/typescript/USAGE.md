<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MicerRequest, MicerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MicerRequest = {
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
      appno: "sit",
      dateOfBirth: "voluptas",
      enrolno: "culpa",
      rollno: "expedita",
    },
    consentArtifact: "consequuntur",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.micer(req).then((res: MicerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->