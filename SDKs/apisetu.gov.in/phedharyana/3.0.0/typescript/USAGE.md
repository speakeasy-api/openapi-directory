<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EtcerRequest, EtcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EtcerRequest = {
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
      uniqueCode: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.etcer(req).then((res: EtcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->