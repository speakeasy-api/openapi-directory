<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AdcrdRequest, AdcrdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AdcrdRequest = {
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
      prnNo: "voluptas",
      requestId: "culpa",
    },
    consentArtifact: "expedita",
    format: "pdf",
    txnId: "dolor",
  },
};

sdk.apIs.adcrd(req).then((res: AdcrdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->