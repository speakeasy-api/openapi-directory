<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BrlcsRequest, BrlcsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BrlcsRequest = {
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
      certificateNumber: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.brlcs(req).then((res: BrlcsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->