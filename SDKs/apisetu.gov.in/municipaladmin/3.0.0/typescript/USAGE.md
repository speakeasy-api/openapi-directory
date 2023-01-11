<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { KecerRequest, KecerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: KecerRequest = {
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
      documentNumber: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.kecer(req).then((res: KecerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->