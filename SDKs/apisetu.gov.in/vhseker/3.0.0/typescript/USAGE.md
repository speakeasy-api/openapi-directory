<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { VochseRequest, VochseResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VochseRequest = {
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
      regno: "culpa",
      year: "expedita",
      type: "consequuntur",
    },
    consentArtifact: "dolor",
    format: "pdf",
    txnId: "voluptas",
  },
};

sdk.apIs.vochse(req).then((res: VochseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->