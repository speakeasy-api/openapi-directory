<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NdcerRequest, NdcerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NdcerRequest = {
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
      appid: "sit",
    },
    consentArtifact: "voluptas",
    format: "pdf",
    txnId: "expedita",
  },
};

sdk.apIs.ndcer(req).then((res: NdcerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->