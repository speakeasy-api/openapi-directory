<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RsbycRequest, RsbycResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RsbycRequest = {
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
      uid: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.rsbyc(req).then((res: RsbycResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->