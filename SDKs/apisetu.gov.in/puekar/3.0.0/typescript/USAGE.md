<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { HscerRequest, HscerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: HscerRequest = {
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
      passyr: "culpa",
      regno: "expedita",
      uid: "consequuntur",
    },
    consentArtifact: "dolor",
    format: "pdf",
    txnId: "voluptas",
  },
};

sdk.apIs.hscer(req).then((res: HscerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->